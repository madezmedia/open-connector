# open-connector — Fleet Deployment

**Managed by:** Fleet-Ops / Bentley
**Repo:** [madezmedia/open-connector](https://github.com/madezmedia/open-connector)
**Tier:** P0 — SaaS Auth Gateway
**VM:** `152.53.201.27` (u70402)
**Subdomain:** `open-connector-u70402.vm.elestio.app`
**Portainer:** `/opt/app/open-connector/`

---

## Architecture

```
GitHub (main) ──push──► GitHub Actions ──build──► local-registry:5000
                                                          │
                                                          ▼
                                              nginx (port 443)
                                                    │
                                           open-connector-u70402.vm.elestio.app
                                                    │
                                              reverse proxy to :3000
                                                    │
                                              open-connector container
```

---

## Quick Start

```bash
# Clone (already done on VM at /opt/app/open-connector/)
git clone https://github.com/madezmedia/open-connector.git /opt/app/open-connector

# Deploy
docker compose -f docker-compose.prod.yml up -d

# Check logs
docker compose -f docker-compose.prod.yml logs -f

# Restart
docker compose -f docker-compose.prod.yml restart

# Stop
docker compose -f docker-compose.prod.yml down
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `OOMOL_CONNECT_ORIGIN` | Yes | CORS origin (use `*` for all, or specific domain) |
| `OOMOL_CONNECT_ENCRYPTION_KEY` | Yes | AES-256 encryption key for stored credentials |
| `OOMOL_CONNECT_ADMIN_TOKEN` | Yes | Admin API token (high-privilege) |
| `OOMOL_CONNECT_RUNTIME_TOKEN` | Yes | Runtime token (agent-facing) |
| `OOMOL_CONNECT_ALLOWED_ACTIONS` | No | Comma-separated allowed actions (default: `*`) |
| `OOMOL_CONNECT_BLOCKED_ACTIONS` | No | Comma-separated blocked actions |
| `OOMOL_CONNECT_ALLOWED_PROXIES` | No | Allowed proxy URLs |
| `OOMOL_CONNECT_BLOCKED_PROXIES` | No | Blocked proxy URLs |

**Generate a key:**
```bash
openssl rand -hex 32
```

---

## Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `http://localhost:3000/` | GET | API info |
| `http://localhost:3000/health` | GET | Health check |
| `http://localhost:3000/api/v1/` | * | OCI REST API |
| `http://open-connector-u70402.vm.elestio.app/` | GET | Public HTTPS |

---

## CI/CD

- **Build:** GitHub Actions on every push to `main`
- **Registry:** Local Docker registry at `152.53.201.27:5000`
- **Deploy:** SSH to VM → `docker compose -f docker-compose.prod.yml up -d`
- **Health check:** `/health` endpoint polled every 30s

---

## Rotation

### Restart (no downtime)
```bash
cd /opt/app/open-connector
git pull
docker compose -f docker-compose.prod.yml pull connector
docker compose -f docker-compose.prod.yml up -d --no-deps connector
```

### Full rebuild
```bash
cd /opt/app/open-connector
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml build --no-cache connector
docker compose -f docker-compose.prod.yml up -d
```

---

## Nginx Subdomain

Already configured at:
```
open-connector-u70402.vm.elestio.app → localhost:3000
```

Config: `/opt/elestio/nginx/conf.d/open-connector-u70402.vm.elestio.app.conf`

Reload after changes:
```bash
ssh root@152.53.201.27 "nginx -t && systemctl reload nginx"
```

---

## Portainer

Stack name: `open-connector`
Config file: `/opt/app/open-connector/docker-compose.prod.yml`
Image: `152.53.201.27:5000/open-connector:latest`

---

## Fleet Alignment

- **ACMI Profile:** `acmi:service:open-connector` (registered during first deploy)
- **Health monitoring:** Uptime Kuma probe at `/health`
- **Log aggregation:** Loki / Grafana (via `docker logs` JSON)
- **Secrets:** Managed via VM `.env` file (not in Git)

---

## Providers Connected (1000+ SaaS)

Google, Microsoft, Slack, GitHub, Salesforce, Stripe, Twilio, OpenAI, Anthropic, and 990+ more via OCI (Open Connector Interface).

See: [OOMOL Connect Catalog](https://www.oomol.com/connect)
