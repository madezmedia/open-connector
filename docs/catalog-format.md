# Catalog Format

Provider definitions in `src/providers/<service>/definition.ts` are the source of truth.
Catalog JSON in `catalog/apps` is generated and used by the server at startup.

Provider executors live in `src/providers/<service>/executors.ts` and are loaded only when an action is executed.

Do not hand-edit generated catalog files as source. Update provider definitions and run:

```bash
npm run generate:catalog
```

For the full contribution workflow, see `.codex/skills/add-provider/SKILL.md`.
