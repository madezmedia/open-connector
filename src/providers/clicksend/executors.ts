import type {
  CredentialValidationResult,
  CredentialValidators,
  ExecutionContext,
  ProviderExecutors,
} from "../../core/types.ts";
import type { ClicksendActionContext } from "./runtime.ts";

import { defineProviderExecutors, ProviderRequestError, requireApiKeyCredential } from "../provider-runtime.ts";
import { clicksendActionHandlers, validateClicksendCredential } from "./runtime.ts";

const service = "clicksend";

export const executors: ProviderExecutors = defineProviderExecutors<ClicksendActionContext>({
  service,
  handlers: clicksendActionHandlers,
  async createContext(context: ExecutionContext, fetcher: typeof fetch): Promise<ClicksendActionContext> {
    const credential = await requireApiKeyCredential(context, service);
    return {
      username: requireClicksendUsername(credential.values),
      apiKey: credential.apiKey,
      fetcher,
      signal: context.signal,
    };
  },
  fallbackMessage: "unknown clicksend action",
});

export const credentialValidators: CredentialValidators = {
  apiKey(input, { fetcher, signal }): Promise<CredentialValidationResult> {
    return validateClicksendCredential(input.apiKey, input.values, fetcher, signal);
  },
};

function requireClicksendUsername(values: Record<string, string>): string {
  const username = values.username?.trim();
  if (!username) {
    throw new ProviderRequestError(400, "username is required");
  }
  return username;
}
