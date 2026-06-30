# Credentials

The bootstrap runtime keeps local connections and OAuth client configuration in memory.

- `no_auth` providers are available as virtual connections and do not store secrets.
- `api_key` and `custom_credential` providers store their local secrets in the in-memory connection store.
- `oauth2` providers use user-provided OAuth client configuration and a localhost callback URL.

## Credential fields

Credential fields are declared by each provider's catalog `auth` metadata. The runtime treats that
metadata as the contract for local API requests:

- `api_key` connections always require `values.apiKey`.
- `api_key` connections may declare additional `extraFields`.
- `custom_credential` connections require exactly the provider-declared `fields`.
- `oauth2` client config may declare additional `clientConfigFields`.

All submitted string values are trimmed. Empty strings are treated as missing. Unknown submitted
fields are rejected instead of being silently stored, because credential forms, scripts, and provider
definitions should fail fast when they drift.

## API key example

```bash
curl -s -X PUT http://localhost:3000/api/connections/example/api-key \
  -H 'content-type: application/json' \
  -d '{"values":{"apiKey":"...","accountId":"..."}}'
```

The accepted keys are `apiKey` plus the provider's `auth[].extraFields`.

## Custom credential example

```bash
curl -s -X PUT http://localhost:3000/api/connections/example/custom-credential \
  -H 'content-type: application/json' \
  -d '{"values":{"host":"localhost","password":"..."}}'
```

The accepted keys come from the provider's `auth[].fields`.

## OAuth client configuration

Open-source users provide their own provider OAuth app. Configure that app to redirect back to the
`expectedRedirectUri` returned by:

```bash
curl -s http://localhost:3000/api/oauth/configs
```

Then store the local client configuration:

```bash
curl -s -X PUT http://localhost:3000/api/oauth/configs/example \
  -H 'content-type: application/json' \
  -d '{"clientId":"...","clientSecret":"...","extra":{"tenant":"..."}}'
```

Start authorization with:

```bash
curl -s -X POST http://localhost:3000/api/connections/example/oauth/start
```

Open the returned `authorizationUrl` in a browser and finish the provider callback.

Persistent local storage and optional encryption are later work.
