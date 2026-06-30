# Repository Guidelines

## Architecture

- Keep one clear owner for each fact. Do not repeat provider metadata such as `displayName` in executors when it already belongs to `definition.ts`; pass or inject it from the caller that has the definition/catalog.
- Provider definitions are catalog source code. Build schemas with `src/core/json-schema.ts` helpers, usually imported as `s`, instead of copying generated catalog JSON.
- Keep runtime lazy: catalog generation may import provider definitions, but executor modules should load only when an action or credential validator is actually used.
- Do not create barrel files such as `index.ts`. Import from the concrete module that owns the API.

## Code Style

- Prefer VS Code-style coherent modules: split files by responsibility or abstraction boundary, not by loose categories.
- Avoid temporary ad hoc objects passed through many layers. Prefer explicit interfaces, classes, or top-level functions that match module boundaries.
- Put generic low-level casting/reading helpers in `src/core/cast.ts`; avoid provider-specific wrappers for generic reads.
- Avoid trivial pass-through helpers and conditional object spreads that only hide `undefined` JSON fields.
- Do not manually wrap code to 80 columns. Let `oxfmt` decide formatting.

## Providers

- Provider code normally lives in `src/providers/<service>/definition.ts`, `actions.ts`, `executors.ts`, and provider-local runtime helper files when needed.
- Prefer provider-local constants for official scopes, permissions, URLs, and API versions. Action `requiredScopes` should use provider-native scopes/capabilities, not private internal aliases.
- Avoid repeated action-name wiring. Define action handlers once and derive executor maps through shared provider runtime helpers.
- Do not import provider definitions from executor modules just to reuse metadata; inject catalog metadata from the server/loader side when needed.

## TypeScript And Tooling

- Use native Node.js TypeScript execution. Do not add `tsx` or `--experimental-strip-types`.
- `src/`, `scripts/`, and `examples/` each have their own `tsconfig.json`; project checks focus on `src`.
- Exported top-level functions and public types should have explicit return types and useful JSDoc when it explains business meaning.
- Use `oxfmt` and `oxlint`; do not add Prettier.

## Examples And Web

- Examples should be concrete scripts users can run directly with `node examples/...`; do not add every example to `package.json`.
- If an example depends on external credentials, print a clear skip message when environment variables are missing.
- Do not put web UI code under `src/`. The future console should live as a separate Vite package under `web/`.

## Verification

- Before finishing code changes, run the smallest relevant checks, then `npm run build`.
- Run `npm run generate:catalog` when provider definitions or actions change.
- Run provider examples manually when the task changes user-facing example behavior.
