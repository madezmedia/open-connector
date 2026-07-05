import type {
  CredentialValidationResult,
  CredentialValidators,
  ExecutionContext,
  ProviderExecutors,
} from "../../core/types.ts";
import type { ClickhouseActionName } from "./actions.ts";
import type { ClickhouseActionContext } from "./runtime.ts";

import { defineProviderExecutors, requireCustomCredential } from "../provider-runtime.ts";
import { clickhouseActionHandlers, createClickhouseContext, validateClickhouseCredential } from "./runtime.ts";

const service = "clickhouse";

export const executors: ProviderExecutors = defineProviderExecutors<ClickhouseActionContext>({
  service,
  handlers: clickhouseActionHandlers,
  async createContext(context: ExecutionContext, fetcher: typeof fetch): Promise<ClickhouseActionContext> {
    const credential = await requireCustomCredential(context, service);
    return createClickhouseContext(credential.values, fetcher, context.signal);
  },
  fallbackMessage: "unknown clickhouse action",
});

export const credentialValidators: CredentialValidators = {
  customCredential(input, { fetcher, signal }): Promise<CredentialValidationResult> {
    return validateClickhouseCredential(input.values, fetcher, signal);
  },
};

export type { ClickhouseActionName };
