# Quickstart

Install dependencies and generate the local catalog:

```bash
npm install
npm run generate:catalog
npm run build
npm run dev
```

Open the API reference at `http://localhost:3000/docs`.

Run a no-auth action:

```bash
curl -s http://localhost:3000/api/actions/hackernews.get_top_stories/execute \
  -H 'content-type: application/json' \
  -d '{"input":{}}'
```

List MCP tool metadata:

```bash
curl -s http://localhost:3000/mcp/tools
```

The web console is served at `http://localhost:3000` after building the `web` workspace:

```bash
npm run build:web
npm run dev
```
