import type {
  CredentialValidationResult,
  CredentialValidators,
  ExecutionContext,
  ProviderExecutors,
} from "../../core/types.ts";
import type { CloudinaryContext } from "./runtime.ts";

import { requiredString } from "../../core/cast.ts";
import { defineProviderExecutors, ProviderRequestError } from "../provider-runtime.ts";
import { cloudinaryActionHandlers, validateCloudinaryCredential } from "./runtime.ts";

const service = "cloudinary";

export const executors: ProviderExecutors = defineProviderExecutors<CloudinaryContext>({
  service,
  handlers: cloudinaryActionHandlers,
  async createContext(context: ExecutionContext, fetcher: typeof fetch): Promise<CloudinaryContext> {
    const credential = await context.getCredential(service);
    if (credential?.authType !== "api_key") {
      throw new ProviderRequestError(401, "Configure cloudinary API key credentials first.");
    }
    return {
      apiKey: credential.apiKey,
      apiSecret: requiredString(
        credential.values.apiSecret,
        "apiSecret",
        (message) => new ProviderRequestError(400, message),
      ),
      cloudName: requiredString(
        credential.values.cloudName ?? credential.metadata.cloudName,
        "cloudName",
        (message) => new ProviderRequestError(400, message),
      ),
      fetcher,
      signal: context.signal,
    };
  },
});

export const credentialValidators: CredentialValidators = {
  async apiKey(input, { fetcher, signal }): Promise<CredentialValidationResult> {
    return validateCloudinaryCredential(input.values, fetcher, signal);
  },
};
