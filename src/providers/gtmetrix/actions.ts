import type { ActionDefinition, JsonSchema } from "../../core/types.ts";

import { defineProviderAction } from "../../core/provider-definition.ts";
import { gtmetrixGeneratedActionSchemas } from "./generated.ts";

const service = "gtmetrix";

export type GtmetrixActionName = (typeof gtmetrixGeneratedActionSchemas)[number]["name"];

export const gtmetrixActions: ActionDefinition[] = gtmetrixGeneratedActionSchemas.map((actionSchema) =>
  defineProviderAction(service, {
    name: actionSchema.name,
    description: actionSchema.description,
    requiredScopes: actionSchema.requiredScopes,
    providerPermissions: actionSchema.providerPermissions,
    followUpActions: actionSchema.followUpActions,
    asyncLifecycle: actionSchema.asyncLifecycle,
    inputSchema: actionSchema.inputSchema as JsonSchema,
    outputSchema: actionSchema.outputSchema as JsonSchema,
  }),
);
