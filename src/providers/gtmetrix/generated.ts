import type { ActionDefinition, JsonSchema } from "../../core/types.ts";

export interface GtmetrixGeneratedActionSchema {
  name: string;
  description: string;
  requiredScopes: string[];
  providerPermissions: string[];
  followUpActions?: string[];
  asyncLifecycle?: ActionDefinition["asyncLifecycle"];
  inputSchema: JsonSchema;
  outputSchema: JsonSchema;
}

export const gtmetrixGeneratedActionSchemas: GtmetrixGeneratedActionSchema[] = [
  {
    name: "get_account_status",
    description: "Get the current GTmetrix account status, credits, and plan capabilities.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {},
      additionalProperties: false,
      description: "An empty input payload.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        status: {
          type: "object",
          properties: {
            api_credits: {
              description: "The remaining GTmetrix API credits.",
              type: "number",
            },
            api_refill: {
              type: "integer",
              minimum: -9007199254740991,
              maximum: 9007199254740991,
              description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
            },
            api_refill_amount: {
              description: "The number of API credits restored on the next refill.",
              type: "number",
            },
            account_type: {
              description: "The GTmetrix plan type.",
              type: "string",
            },
            account_pro_analysis_options_access: {
              description: "Whether the account can use GTmetrix PRO analysis options.",
              type: "boolean",
            },
            account_pro_locations_access: {
              description: "Whether the account can use GTmetrix PRO locations.",
              type: "boolean",
            },
            account_whitelabel_pdf_access: {
              description: "Whether the account can generate white-label PDF reports.",
              type: "boolean",
            },
            account_pro_team_role: {
              description: "The GTmetrix PRO team role returned for the account, when present.",
              type: "string",
            },
          },
          additionalProperties: false,
          description: "The GTmetrix account status.",
        },
      },
      required: ["status"],
      additionalProperties: false,
      description: "The GTmetrix account status result.",
    },
  },
  {
    name: "list_locations",
    description: "List GTmetrix test locations available to the connected account.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {},
      additionalProperties: false,
      description: "An empty input payload.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        locations: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "location",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix location ID.",
              },
              attributes: {
                type: "object",
                properties: {
                  name: {
                    description: "The display name of the GTmetrix location.",
                    type: "string",
                  },
                  region: {
                    description: "The region label of the GTmetrix location.",
                    type: "string",
                  },
                  default: {
                    description: "Whether the location is the default GTmetrix location.",
                    type: "boolean",
                  },
                  account_has_access: {
                    description: "Whether the connected account can use this GTmetrix location.",
                    type: "boolean",
                  },
                  browsers: {
                    description: "The browser IDs supported by this GTmetrix location.",
                    type: "array",
                    items: {
                      type: "string",
                      minLength: 1,
                      description: "The GTmetrix browser ID.",
                    },
                  },
                  ips: {
                    description: "The IP addresses assigned to the GTmetrix location.",
                    type: "array",
                    items: {
                      type: "string",
                      description: "An IP address assigned to the GTmetrix location.",
                    },
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix location attributes.",
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix location resource.",
          },
          description: "The GTmetrix locations returned by the API.",
        },
      },
      required: ["locations"],
      additionalProperties: false,
      description: "The GTmetrix location list.",
    },
  },
  {
    name: "get_location",
    description: "Get a single GTmetrix test location by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        location_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix location ID.",
        },
      },
      required: ["location_id"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix location.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        location: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "location",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix location ID.",
            },
            attributes: {
              type: "object",
              properties: {
                name: {
                  description: "The display name of the GTmetrix location.",
                  type: "string",
                },
                region: {
                  description: "The region label of the GTmetrix location.",
                  type: "string",
                },
                default: {
                  description: "Whether the location is the default GTmetrix location.",
                  type: "boolean",
                },
                account_has_access: {
                  description: "Whether the connected account can use this GTmetrix location.",
                  type: "boolean",
                },
                browsers: {
                  description: "The browser IDs supported by this GTmetrix location.",
                  type: "array",
                  items: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix browser ID.",
                  },
                },
                ips: {
                  description: "The IP addresses assigned to the GTmetrix location.",
                  type: "array",
                  items: {
                    type: "string",
                    description: "An IP address assigned to the GTmetrix location.",
                  },
                },
              },
              additionalProperties: {},
              description: "The GTmetrix location attributes.",
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix location resource.",
        },
      },
      required: ["location"],
      additionalProperties: false,
      description: "The GTmetrix location lookup result.",
    },
  },
  {
    name: "list_browsers",
    description: "List GTmetrix browsers that can be used for tests.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {},
      additionalProperties: false,
      description: "An empty input payload.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        browsers: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "browser",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix browser ID.",
              },
              attributes: {
                type: "object",
                properties: {
                  name: {
                    description: "The display name of the GTmetrix browser.",
                    type: "string",
                  },
                  browser: {
                    description: "The GTmetrix short browser identifier, such as chrome or firefox.",
                    type: "string",
                  },
                  platform: {
                    description: "The GTmetrix browser platform, such as desktop or android.",
                    type: "string",
                  },
                  device: {
                    description: "The GTmetrix browser device label.",
                    type: "string",
                  },
                  default: {
                    description: "Whether the browser is the default browser for the account or location.",
                    type: "boolean",
                  },
                  adblock: {
                    description: "Whether the browser supports AdBlock.",
                    type: "boolean",
                  },
                  lighthouse: {
                    description: "Whether the browser supports Lighthouse analysis.",
                    type: "boolean",
                  },
                  cookies: {
                    description: "Whether the browser supports custom cookies.",
                    type: "boolean",
                  },
                  dns: {
                    description: "Whether the browser supports custom DNS.",
                    type: "boolean",
                  },
                  filtering: {
                    description: "Whether the browser supports allow or block URL filtering.",
                    type: "boolean",
                  },
                  http_auth: {
                    description: "Whether the browser supports HTTP access authentication.",
                    type: "boolean",
                  },
                  resolution: {
                    description: "Whether the browser supports custom viewport resolution settings.",
                    type: "boolean",
                  },
                  throttle: {
                    description: "Whether the browser supports connection throttling.",
                    type: "boolean",
                  },
                  user_agent: {
                    description: "Whether the browser supports a custom user agent string.",
                    type: "boolean",
                  },
                  video: {
                    description: "Whether the browser supports video capture.",
                    type: "boolean",
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix browser attributes.",
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix browser resource.",
          },
          description: "The GTmetrix browsers returned by the API.",
        },
      },
      required: ["browsers"],
      additionalProperties: false,
      description: "The GTmetrix browser list.",
    },
  },
  {
    name: "get_browser",
    description: "Get a single GTmetrix browser by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        browser_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix browser ID.",
        },
      },
      required: ["browser_id"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix browser.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        browser: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "browser",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix browser ID.",
            },
            attributes: {
              type: "object",
              properties: {
                name: {
                  description: "The display name of the GTmetrix browser.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix short browser identifier, such as chrome or firefox.",
                  type: "string",
                },
                platform: {
                  description: "The GTmetrix browser platform, such as desktop or android.",
                  type: "string",
                },
                device: {
                  description: "The GTmetrix browser device label.",
                  type: "string",
                },
                default: {
                  description: "Whether the browser is the default browser for the account or location.",
                  type: "boolean",
                },
                adblock: {
                  description: "Whether the browser supports AdBlock.",
                  type: "boolean",
                },
                lighthouse: {
                  description: "Whether the browser supports Lighthouse analysis.",
                  type: "boolean",
                },
                cookies: {
                  description: "Whether the browser supports custom cookies.",
                  type: "boolean",
                },
                dns: {
                  description: "Whether the browser supports custom DNS.",
                  type: "boolean",
                },
                filtering: {
                  description: "Whether the browser supports allow or block URL filtering.",
                  type: "boolean",
                },
                http_auth: {
                  description: "Whether the browser supports HTTP access authentication.",
                  type: "boolean",
                },
                resolution: {
                  description: "Whether the browser supports custom viewport resolution settings.",
                  type: "boolean",
                },
                throttle: {
                  description: "Whether the browser supports connection throttling.",
                  type: "boolean",
                },
                user_agent: {
                  description: "Whether the browser supports a custom user agent string.",
                  type: "boolean",
                },
                video: {
                  description: "Whether the browser supports video capture.",
                  type: "boolean",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix browser attributes.",
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix browser resource.",
        },
      },
      required: ["browser"],
      additionalProperties: false,
      description: "The GTmetrix browser lookup result.",
    },
  },
  {
    name: "list_simulated_devices",
    description: "List GTmetrix simulated devices that can be used for tests.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {},
      additionalProperties: false,
      description: "An empty input payload.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        simulated_devices: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "simulated_device",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix simulated device ID.",
              },
              attributes: {
                type: "object",
                properties: {
                  name: {
                    description: "The display name of the simulated device.",
                    type: "string",
                  },
                  category: {
                    description: "The GTmetrix simulated device category, such as phone or tablet.",
                    type: "string",
                  },
                  manufacturer: {
                    description: "The manufacturer of the simulated device.",
                    type: "string",
                  },
                  user_agent: {
                    description: "The user agent used when this simulated device is selected.",
                    type: "string",
                  },
                  width: {
                    description: "The simulated viewport width in pixels.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  height: {
                    description: "The simulated viewport height in pixels.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  dppx: {
                    description: "The simulated device pixel ratio.",
                    type: "number",
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix simulated device attributes.",
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix simulated device resource.",
          },
          description: "The GTmetrix simulated devices returned by the API.",
        },
      },
      required: ["simulated_devices"],
      additionalProperties: false,
      description: "The GTmetrix simulated device list.",
    },
  },
  {
    name: "get_simulated_device",
    description: "Get a single GTmetrix simulated device by ID.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        simulated_device_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix simulated device ID.",
        },
      },
      required: ["simulated_device_id"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix simulated device.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        simulated_device: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "simulated_device",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix simulated device ID.",
            },
            attributes: {
              type: "object",
              properties: {
                name: {
                  description: "The display name of the simulated device.",
                  type: "string",
                },
                category: {
                  description: "The GTmetrix simulated device category, such as phone or tablet.",
                  type: "string",
                },
                manufacturer: {
                  description: "The manufacturer of the simulated device.",
                  type: "string",
                },
                user_agent: {
                  description: "The user agent used when this simulated device is selected.",
                  type: "string",
                },
                width: {
                  description: "The simulated viewport width in pixels.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                height: {
                  description: "The simulated viewport height in pixels.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dppx: {
                  description: "The simulated device pixel ratio.",
                  type: "number",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix simulated device attributes.",
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix simulated device resource.",
        },
      },
      required: ["simulated_device"],
      additionalProperties: false,
      description: "The GTmetrix simulated device lookup result.",
    },
  },
  {
    name: "start_test",
    description: "Start a new GTmetrix performance test for a URL.",
    requiredScopes: [],
    providerPermissions: [],
    followUpActions: ["gtmetrix.get_test"],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        url: {
          type: "string",
          format: "uri",
          description: "The URL to test with GTmetrix.",
        },
        location_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix location ID.",
        },
        browser_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix browser ID.",
        },
        report: {
          type: "string",
          enum: ["lighthouse", "legacy", "none", "lighthouse,legacy"],
          description: "The GTmetrix report type to generate.",
        },
        retention: {
          anyOf: [
            {
              type: "number",
              const: 1,
            },
            {
              type: "number",
              const: 6,
            },
            {
              type: "number",
              const: 12,
            },
            {
              type: "number",
              const: 24,
            },
          ],
          description: "The number of months GTmetrix should retain the report.",
        },
        httpauth_username: {
          type: "string",
          minLength: 1,
          description: "The HTTP access authentication username.",
        },
        httpauth_password: {
          type: "string",
          minLength: 1,
          description: "The HTTP access authentication password.",
        },
        adblock: {
          type: "boolean",
          description: "Whether to enable AdBlock during analysis.",
        },
        cookies: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "A cookie string in GTmetrix web UI format.",
          },
          description: "The cookies GTmetrix should send with the test request.",
        },
        video: {
          type: "boolean",
          description: "Whether GTmetrix should generate a video.",
        },
        stop_onload: {
          type: "boolean",
          description: "Whether GTmetrix should stop the test at window.onload.",
        },
        throttle: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix throttle profile or custom throttle string.",
        },
        allow_url: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "An allow-list URL pattern accepted by GTmetrix.",
          },
          description: "The GTmetrix allow-list URL patterns to apply.",
        },
        block_url: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "A block-list URL pattern accepted by GTmetrix.",
          },
          description: "The GTmetrix block-list URL patterns to apply.",
        },
        dns: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "A GTmetrix custom DNS mapping entry.",
          },
          description: "The GTmetrix custom DNS mappings to apply.",
        },
        simulate_device_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix simulated device ID.",
        },
        anonymize_user_agent: {
          type: "boolean",
          description: "Whether GTmetrix should strip the trailing GTmetrix user agent tag.",
        },
        user_agent: {
          type: "string",
          minLength: 1,
          description: "The custom user agent string to send.",
        },
        browser_width: {
          type: "integer",
          exclusiveMinimum: 0,
          maximum: 9007199254740991,
          description: "The browser viewport width in pixels.",
        },
        browser_height: {
          type: "integer",
          exclusiveMinimum: 0,
          maximum: 9007199254740991,
          description: "The browser viewport height in pixels.",
        },
        browser_dppx: {
          type: "number",
          minimum: 1,
          maximum: 5,
          description: "The browser device pixel ratio.",
        },
        browser_rotate: {
          type: "boolean",
          description: "Whether GTmetrix should swap the browser viewport width and height.",
        },
      },
      required: ["url"],
      additionalProperties: false,
      description: "The input payload for starting a GTmetrix test.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        test: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "test",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix test ID.",
            },
            attributes: {
              type: "object",
              properties: {
                report: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix report slug identifier.",
                },
                page: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix page slug identifier.",
                },
                url: {
                  description: "The tested URL.",
                  type: "string",
                },
                browser: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix browser ID.",
                },
                location: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix location ID.",
                },
                source: {
                  type: "string",
                  enum: ["api", "on-demand", "monitored"],
                  description: "The source of the GTmetrix test or report.",
                },
                state: {
                  type: "string",
                  enum: ["queued", "started", "error", "completed"],
                  description: "The lifecycle state of the GTmetrix test.",
                },
                created: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                started: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                finished: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                error: {
                  description: "The GTmetrix test error message, when present.",
                  type: "string",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix test attributes.",
            },
            links: {
              description: "The GTmetrix links embedded on the test resource.",
              type: "object",
              properties: {
                report: {
                  description: "The GTmetrix API URL for the related report.",
                  type: "string",
                },
                location: {
                  description: "The GTmetrix API URL for the related location.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix API URL for the related browser.",
                  type: "string",
                },
              },
              additionalProperties: {},
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The accepted GTmetrix test resource.",
        },
        meta: {
          type: "object",
          properties: {
            credits_left: {
              type: "number",
              description: "The GTmetrix API credits remaining after the test was accepted.",
            },
            credits_used: {
              type: "number",
              description: "The GTmetrix API credits consumed by the accepted test.",
            },
          },
          required: ["credits_left", "credits_used"],
          additionalProperties: false,
          description: "The GTmetrix credits metadata for the accepted test.",
        },
        links: {
          type: "object",
          properties: {
            self: {
              type: "string",
              description: "The GTmetrix API URL for the accepted test resource.",
            },
          },
          required: ["self"],
          additionalProperties: false,
          description: "The GTmetrix links for the accepted test.",
        },
      },
      required: ["test", "meta", "links"],
      additionalProperties: false,
      description: "The GTmetrix test submission result.",
    },
  },
  {
    name: "list_tests",
    description: "List GTmetrix tests for the connected account.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page_size: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "The number of results to return per page.",
        },
        page_number: {
          type: "integer",
          minimum: 1,
          maximum: 9007199254740991,
          description: "The page number of results to return.",
        },
        sort: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: ["created", "-created", "started", "-started", "finished", "-finished"],
            description: "A GTmetrix tests sort value.",
          },
          description: "The GTmetrix test sort directives to apply.",
        },
        filter_bool: {
          type: "string",
          enum: ["AND", "OR"],
          description: "The boolean connector used between GTmetrix filters.",
        },
        sources: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: ["api", "on-demand", "monitored", "any"],
            description: "A GTmetrix test source filter value.",
          },
          description: "The GTmetrix test source filters to apply.",
        },
        states: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: ["queued", "started", "error", "completed"],
            description: "The lifecycle state of the GTmetrix test.",
          },
          description: "The GTmetrix test states to include.",
        },
        location_ids: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "The GTmetrix location ID.",
          },
          description: "The GTmetrix location IDs to include in the test list.",
        },
        browser_ids: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "The GTmetrix browser ID.",
          },
          description: "The GTmetrix browser IDs to include in the test list.",
        },
        created_eq: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_gt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_gte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_lt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_lte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        started_eq: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        started_gt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        started_gte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        started_lt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        started_lte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        finished_eq: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        finished_gt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        finished_gte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        finished_lt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        finished_lte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
      },
      additionalProperties: false,
      description: "The input payload for listing GTmetrix tests.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        tests: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "test",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix test ID.",
              },
              attributes: {
                type: "object",
                properties: {
                  report: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix report slug identifier.",
                  },
                  page: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix page slug identifier.",
                  },
                  url: {
                    description: "The tested URL.",
                    type: "string",
                  },
                  browser: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix browser ID.",
                  },
                  location: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix location ID.",
                  },
                  source: {
                    type: "string",
                    enum: ["api", "on-demand", "monitored"],
                    description: "The source of the GTmetrix test or report.",
                  },
                  state: {
                    type: "string",
                    enum: ["queued", "started", "error", "completed"],
                    description: "The lifecycle state of the GTmetrix test.",
                  },
                  created: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  started: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  finished: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  error: {
                    description: "The GTmetrix test error message, when present.",
                    type: "string",
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix test attributes.",
              },
              links: {
                description: "The GTmetrix links embedded on the test resource.",
                type: "object",
                properties: {
                  report: {
                    description: "The GTmetrix API URL for the related report.",
                    type: "string",
                  },
                  location: {
                    description: "The GTmetrix API URL for the related location.",
                    type: "string",
                  },
                  browser: {
                    description: "The GTmetrix API URL for the related browser.",
                    type: "string",
                  },
                },
                additionalProperties: {},
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix test resource.",
          },
          description: "The GTmetrix tests returned by the API.",
        },
        links: {
          anyOf: [
            {
              type: "object",
              properties: {
                prev: {
                  description: "The URL of the previous page, when available.",
                  type: "string",
                },
                next: {
                  description: "The URL of the next page, when available.",
                  type: "string",
                },
              },
              additionalProperties: {},
              description: "The pagination links returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination links for the test list.",
        },
        meta: {
          anyOf: [
            {
              type: "object",
              properties: {
                curr_page: {
                  description: "The current GTmetrix page number returned by the collection endpoint.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
              },
              additionalProperties: {},
              description: "The pagination metadata returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination metadata for the test list.",
        },
      },
      required: ["tests", "links", "meta"],
      additionalProperties: false,
      description: "The GTmetrix test list result.",
    },
  },
  {
    name: "get_test",
    description: "Get the current state of a GTmetrix test and detect when it has completed.",
    requiredScopes: [],
    providerPermissions: [],
    followUpActions: ["gtmetrix.get_report"],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        test_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix test ID.",
        },
      },
      required: ["test_id"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix test.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        test: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "test",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix test ID.",
            },
            attributes: {
              type: "object",
              properties: {
                report: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix report slug identifier.",
                },
                page: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix page slug identifier.",
                },
                url: {
                  description: "The tested URL.",
                  type: "string",
                },
                browser: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix browser ID.",
                },
                location: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix location ID.",
                },
                source: {
                  type: "string",
                  enum: ["api", "on-demand", "monitored"],
                  description: "The source of the GTmetrix test or report.",
                },
                state: {
                  type: "string",
                  enum: ["queued", "started", "error", "completed"],
                  description: "The lifecycle state of the GTmetrix test.",
                },
                created: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                started: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                finished: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                error: {
                  description: "The GTmetrix test error message, when present.",
                  type: "string",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix test attributes.",
            },
            links: {
              description: "The GTmetrix links embedded on the test resource.",
              type: "object",
              properties: {
                report: {
                  description: "The GTmetrix API URL for the related report.",
                  type: "string",
                },
                location: {
                  description: "The GTmetrix API URL for the related location.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix API URL for the related browser.",
                  type: "string",
                },
              },
              additionalProperties: {},
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix test resource.",
        },
        is_complete: {
          type: "boolean",
          description: "Whether GTmetrix has completed the test.",
        },
        report_url: {
          description: "The GTmetrix report URL returned when the test has completed.",
          type: "string",
        },
        retry_after_seconds: {
          description: "The GTmetrix retry delay returned while the test is still pending.",
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
        },
      },
      required: ["test", "is_complete"],
      additionalProperties: false,
      description: "The GTmetrix test status result.",
    },
  },
  {
    name: "list_pages",
    description: "List GTmetrix pages associated with the connected account.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page_size: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "The number of results to return per page.",
        },
        page_number: {
          type: "integer",
          minimum: 1,
          maximum: 9007199254740991,
          description: "The page number of results to return.",
        },
        sort: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: ["page_id", "-page_id", "created", "-created", "latest_report_time", "-latest_report_time"],
            description: "A GTmetrix pages sort value.",
          },
          description: "The GTmetrix page sort directives to apply.",
        },
        filter_bool: {
          type: "string",
          enum: ["AND", "OR"],
          description: "The boolean connector used between GTmetrix filters.",
        },
        location_ids: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "The GTmetrix location ID.",
          },
          description: "The GTmetrix location IDs to include in the page list.",
        },
        browser_ids: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "The GTmetrix browser ID.",
          },
          description: "The GTmetrix browser IDs to include in the page list.",
        },
        monitored: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: ["no", "any", "hourly", "daily", "weekly", "monthly"],
            description: "A GTmetrix monitored filter value accepted by the pages list endpoint.",
          },
          description: "The GTmetrix monitored frequency filters to apply.",
        },
        urls: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            minLength: 1,
            description: "A page URL filter value accepted by GTmetrix.",
          },
          description: "The GTmetrix page URLs to filter by.",
        },
        created_eq: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_gt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_gte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_lt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        created_lte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        latest_report_time_eq: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        latest_report_time_gt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        latest_report_time_gte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        latest_report_time_lt: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
        latest_report_time_lte: {
          type: "integer",
          minimum: -9007199254740991,
          maximum: 9007199254740991,
          description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
        },
      },
      additionalProperties: false,
      description: "The input payload for listing GTmetrix pages.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        pages: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "page",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix page slug identifier.",
              },
              attributes: {
                type: "object",
                properties: {
                  url: {
                    description: "The tested page URL.",
                    type: "string",
                  },
                  location: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix location ID.",
                  },
                  browser: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix browser ID.",
                  },
                  created: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  latest_report: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix report slug identifier.",
                  },
                  latest_report_time: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  report_count: {
                    description: "The number of reports on the page.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  monitored: {
                    type: "string",
                    enum: ["no", "hourly", "daily", "weekly", "monthly"],
                    description: "Whether the GTmetrix page is monitored and at which frequency.",
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix page attributes.",
              },
              links: {
                description: "The GTmetrix links embedded on the page resource.",
                type: "object",
                properties: {
                  latest_report: {
                    description: "The GTmetrix API URL for the latest report on the page.",
                    type: "string",
                  },
                  retest: {
                    description: "The GTmetrix API URL for retesting the page.",
                    type: "string",
                  },
                  reports: {
                    description: "The GTmetrix API URL for the report list on the page.",
                    type: "string",
                  },
                  location: {
                    description: "The GTmetrix API URL for the related location.",
                    type: "string",
                  },
                  browser: {
                    description: "The GTmetrix API URL for the related browser.",
                    type: "string",
                  },
                },
                additionalProperties: {},
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix page resource.",
          },
          description: "The GTmetrix pages returned by the API.",
        },
        links: {
          anyOf: [
            {
              type: "object",
              properties: {
                prev: {
                  description: "The URL of the previous page, when available.",
                  type: "string",
                },
                next: {
                  description: "The URL of the next page, when available.",
                  type: "string",
                },
              },
              additionalProperties: {},
              description: "The pagination links returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination links for the page list.",
        },
        meta: {
          anyOf: [
            {
              type: "object",
              properties: {
                curr_page: {
                  description: "The current GTmetrix page number returned by the collection endpoint.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
              },
              additionalProperties: {},
              description: "The pagination metadata returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination metadata for the page list.",
        },
      },
      required: ["pages", "links", "meta"],
      additionalProperties: false,
      description: "The GTmetrix page list result.",
    },
  },
  {
    name: "get_page",
    description: "Get a single GTmetrix page by slug.",
    requiredScopes: [],
    providerPermissions: [],
    followUpActions: ["gtmetrix.get_latest_page_report", "gtmetrix.list_page_reports"],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix page slug identifier.",
        },
      },
      required: ["page_id"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix page.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "page",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix page slug identifier.",
            },
            attributes: {
              type: "object",
              properties: {
                url: {
                  description: "The tested page URL.",
                  type: "string",
                },
                location: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix location ID.",
                },
                browser: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix browser ID.",
                },
                created: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                latest_report: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix report slug identifier.",
                },
                latest_report_time: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                report_count: {
                  description: "The number of reports on the page.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                monitored: {
                  type: "string",
                  enum: ["no", "hourly", "daily", "weekly", "monthly"],
                  description: "Whether the GTmetrix page is monitored and at which frequency.",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix page attributes.",
            },
            links: {
              description: "The GTmetrix links embedded on the page resource.",
              type: "object",
              properties: {
                latest_report: {
                  description: "The GTmetrix API URL for the latest report on the page.",
                  type: "string",
                },
                retest: {
                  description: "The GTmetrix API URL for retesting the page.",
                  type: "string",
                },
                reports: {
                  description: "The GTmetrix API URL for the report list on the page.",
                  type: "string",
                },
                location: {
                  description: "The GTmetrix API URL for the related location.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix API URL for the related browser.",
                  type: "string",
                },
              },
              additionalProperties: {},
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix page resource.",
        },
      },
      required: ["page"],
      additionalProperties: false,
      description: "The GTmetrix page lookup result.",
    },
  },
  {
    name: "list_page_reports",
    description: "List GTmetrix reports associated with a single page.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix page slug identifier.",
        },
        page_size: {
          type: "integer",
          minimum: 1,
          maximum: 500,
          description: "The number of results to return per page.",
        },
        page_number: {
          type: "integer",
          minimum: 1,
          maximum: 9007199254740991,
          description: "The page number of results to return.",
        },
        sort: {
          minItems: 1,
          type: "array",
          items: {
            type: "string",
            enum: [
              "report_id",
              "-report_id",
              "gtmetrix_score",
              "-gtmetrix_score",
              "performance_score",
              "-performance_score",
              "structure_score",
              "-structure_score",
              "pagespeed_score",
              "-pagespeed_score",
              "yslow_score",
              "-yslow_score",
              "created",
              "-created",
              "expires",
              "-expires",
              "page_bytes",
              "-page_bytes",
              "html_bytes",
              "-html_bytes",
              "page_requests",
              "-page_requests",
              "connect_duration",
              "-connect_duration",
              "redirect_duration",
              "-redirect_duration",
              "backend_duration",
              "-backend_duration",
              "time_to_first_byte",
              "-time_to_first_byte",
              "first_paint_time",
              "-first_paint_time",
              "first_contentful_paint",
              "-first_contentful_paint",
              "largest_contentful_paint",
              "-largest_contentful_paint",
              "time_to_interactive",
              "-time_to_interactive",
              "total_blocking_time",
              "-total_blocking_time",
              "cumulative_layout_shift",
              "-cumulative_layout_shift",
              "speed_index",
              "-speed_index",
              "rum_speed_index",
              "-rum_speed_index",
              "dom_content_loaded_duration",
              "-dom_content_loaded_duration",
              "dom_content_loaded_time",
              "-dom_content_loaded_time",
              "dom_interactive_time",
              "-dom_interactive_time",
              "onload_time",
              "-onload_time",
              "onload_duration",
              "-onload_duration",
              "fully_loaded_time",
              "-fully_loaded_time",
              "cpu_time",
              "-cpu_time",
            ],
            description: "A GTmetrix page reports sort value.",
          },
          description: "The GTmetrix page report sort directives to apply.",
        },
      },
      required: ["page_id"],
      additionalProperties: false,
      description: "The input payload for listing GTmetrix reports for a page.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        reports: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: {
                description: "The GTmetrix resource type.",
                type: "string",
                const: "report",
              },
              id: {
                type: "string",
                minLength: 1,
                description: "The GTmetrix report slug identifier.",
              },
              attributes: {
                type: "object",
                properties: {
                  test: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix test ID.",
                  },
                  page: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix page slug identifier.",
                  },
                  url: {
                    description: "The analyzed page URL.",
                    type: "string",
                  },
                  location: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix location ID.",
                  },
                  browser: {
                    type: "string",
                    minLength: 1,
                    description: "The GTmetrix browser ID.",
                  },
                  created: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  expires: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  finished: {
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                    description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                  },
                  source: {
                    type: "string",
                    enum: ["api", "on-demand", "monitored"],
                    description: "The source of the GTmetrix test or report.",
                  },
                  html_load_time: {
                    description: "The HTML load time or TTFB in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  html_bytes: {
                    description: "The HTML transfer size in bytes.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  page_load_time: {
                    description: "The page load time in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  page_bytes: {
                    description: "The total page transfer size in bytes.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  page_requests: {
                    description: "The total number of requests required to load the page.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  redirect_duration: {
                    description: "The total redirect duration in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  connect_duration: {
                    description: "The GTmetrix connection duration in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  backend_duration: {
                    description: "The backend wait duration in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  time_to_first_byte: {
                    description: "The time to first byte in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  first_paint_time: {
                    description: "The first paint time in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  first_contentful_paint: {
                    description: "The first contentful paint in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  dom_interactive_time: {
                    description: "The DOM interactive time in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  dom_content_loaded_time: {
                    description: "The DOMContentLoaded event timestamp in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  dom_content_loaded_duration: {
                    description: "The DOMContentLoaded handler duration in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  onload_time: {
                    description: "The window.onload timestamp in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  onload_duration: {
                    description: "The window.onload handler duration in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  fully_loaded_time: {
                    description: "The fully loaded time in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  rum_speed_index: {
                    description: "The GTmetrix RUM speed index.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  speed_index: {
                    description: "The GTmetrix speed index.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  cpu_time: {
                    description: "The CPU time reported by GTmetrix.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  gtmetrix_grade: {
                    description: "The overall GTmetrix grade for the report.",
                    type: "string",
                  },
                  gtmetrix_score: {
                    description: "The overall GTmetrix score.",
                    type: "number",
                  },
                  performance_score: {
                    description: "The GTmetrix performance score.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  structure_score: {
                    description: "The GTmetrix structure score.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  pagespeed_score: {
                    description: "The PageSpeed score.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  yslow_score: {
                    description: "The YSlow score.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  largest_contentful_paint: {
                    description: "The largest contentful paint in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  time_to_interactive: {
                    description: "The time to interactive in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  total_blocking_time: {
                    description: "The total blocking time in milliseconds.",
                    type: "integer",
                    minimum: -9007199254740991,
                    maximum: 9007199254740991,
                  },
                  cumulative_layout_shift: {
                    description: "The cumulative layout shift score.",
                    type: "number",
                  },
                },
                additionalProperties: {},
                description: "The GTmetrix report attributes.",
              },
              links: {
                description: "The GTmetrix links embedded on the report resource.",
                type: "object",
                properties: {
                  location: {
                    description: "The GTmetrix API URL for the related location.",
                    type: "string",
                  },
                  browser: {
                    description: "The GTmetrix API URL for the related browser.",
                    type: "string",
                  },
                  report_url: {
                    description: "The public GTmetrix report URL.",
                    type: "string",
                  },
                  analysis_options: {
                    description: "The GTmetrix API URL for the report analysis options.",
                    type: "string",
                  },
                  screenshot: {
                    description: "The GTmetrix API URL for the report screenshot resource.",
                    type: "string",
                  },
                  har: {
                    description: "The GTmetrix API URL for the report HAR resource.",
                    type: "string",
                  },
                  resource_summary: {
                    description: "The GTmetrix API URL for the JSON resource summary.",
                    type: "string",
                  },
                  test: {
                    description: "The GTmetrix API URL for the related test.",
                    type: "string",
                  },
                  lighthouse: {
                    description: "The GTmetrix API URL for the Lighthouse JSON resource.",
                    type: "string",
                  },
                  filmstrip: {
                    description: "The GTmetrix API URL for the filmstrip JSON resource.",
                    type: "string",
                  },
                  optimized_images: {
                    description: "The GTmetrix API URL for the optimized images archive.",
                    type: "string",
                  },
                  video: {
                    description: "The GTmetrix API URL for the video resource.",
                    type: "string",
                  },
                  report_pdf: {
                    description: "The GTmetrix API URL for the PDF report.",
                    type: "string",
                  },
                  report_pdf_full: {
                    description: "The GTmetrix API URL for the full PDF report.",
                    type: "string",
                  },
                  pagespeed: {
                    description: "The GTmetrix API URL for the PageSpeed JSON resource.",
                    type: "string",
                  },
                  pagespeed_files: {
                    description: "The GTmetrix API URL for the PageSpeed files archive.",
                    type: "string",
                  },
                  yslow: {
                    description: "The GTmetrix API URL for the YSlow JSON resource.",
                    type: "string",
                  },
                },
                additionalProperties: {},
              },
            },
            required: ["attributes"],
            additionalProperties: {},
            description: "A GTmetrix report resource.",
          },
          description: "The GTmetrix reports returned for the page.",
        },
        links: {
          anyOf: [
            {
              type: "object",
              properties: {
                prev: {
                  description: "The URL of the previous page, when available.",
                  type: "string",
                },
                next: {
                  description: "The URL of the next page, when available.",
                  type: "string",
                },
              },
              additionalProperties: {},
              description: "The pagination links returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination links for the page reports list.",
        },
        meta: {
          anyOf: [
            {
              type: "object",
              properties: {
                curr_page: {
                  description: "The current GTmetrix page number returned by the collection endpoint.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
              },
              additionalProperties: {},
              description: "The pagination metadata returned by a GTmetrix collection endpoint.",
            },
            {
              type: "null",
            },
          ],
          description: "The GTmetrix pagination metadata for the page reports list.",
        },
      },
      required: ["reports", "links", "meta"],
      additionalProperties: false,
      description: "The GTmetrix page reports list result.",
    },
  },
  {
    name: "get_latest_page_report",
    description: "Get the latest GTmetrix report associated with a page.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        page_id: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix page slug identifier.",
        },
      },
      required: ["page_id"],
      additionalProperties: false,
      description: "The input payload for reading the latest GTmetrix report for a page.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        report: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "report",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix report slug identifier.",
            },
            attributes: {
              type: "object",
              properties: {
                test: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix test ID.",
                },
                page: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix page slug identifier.",
                },
                url: {
                  description: "The analyzed page URL.",
                  type: "string",
                },
                location: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix location ID.",
                },
                browser: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix browser ID.",
                },
                created: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                expires: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                finished: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                source: {
                  type: "string",
                  enum: ["api", "on-demand", "monitored"],
                  description: "The source of the GTmetrix test or report.",
                },
                html_load_time: {
                  description: "The HTML load time or TTFB in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                html_bytes: {
                  description: "The HTML transfer size in bytes.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_load_time: {
                  description: "The page load time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_bytes: {
                  description: "The total page transfer size in bytes.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_requests: {
                  description: "The total number of requests required to load the page.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                redirect_duration: {
                  description: "The total redirect duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                connect_duration: {
                  description: "The GTmetrix connection duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                backend_duration: {
                  description: "The backend wait duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                time_to_first_byte: {
                  description: "The time to first byte in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                first_paint_time: {
                  description: "The first paint time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                first_contentful_paint: {
                  description: "The first contentful paint in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_interactive_time: {
                  description: "The DOM interactive time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_content_loaded_time: {
                  description: "The DOMContentLoaded event timestamp in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_content_loaded_duration: {
                  description: "The DOMContentLoaded handler duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                onload_time: {
                  description: "The window.onload timestamp in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                onload_duration: {
                  description: "The window.onload handler duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                fully_loaded_time: {
                  description: "The fully loaded time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                rum_speed_index: {
                  description: "The GTmetrix RUM speed index.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                speed_index: {
                  description: "The GTmetrix speed index.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                cpu_time: {
                  description: "The CPU time reported by GTmetrix.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                gtmetrix_grade: {
                  description: "The overall GTmetrix grade for the report.",
                  type: "string",
                },
                gtmetrix_score: {
                  description: "The overall GTmetrix score.",
                  type: "number",
                },
                performance_score: {
                  description: "The GTmetrix performance score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                structure_score: {
                  description: "The GTmetrix structure score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                pagespeed_score: {
                  description: "The PageSpeed score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                yslow_score: {
                  description: "The YSlow score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                largest_contentful_paint: {
                  description: "The largest contentful paint in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                time_to_interactive: {
                  description: "The time to interactive in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                total_blocking_time: {
                  description: "The total blocking time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                cumulative_layout_shift: {
                  description: "The cumulative layout shift score.",
                  type: "number",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix report attributes.",
            },
            links: {
              description: "The GTmetrix links embedded on the report resource.",
              type: "object",
              properties: {
                location: {
                  description: "The GTmetrix API URL for the related location.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix API URL for the related browser.",
                  type: "string",
                },
                report_url: {
                  description: "The public GTmetrix report URL.",
                  type: "string",
                },
                analysis_options: {
                  description: "The GTmetrix API URL for the report analysis options.",
                  type: "string",
                },
                screenshot: {
                  description: "The GTmetrix API URL for the report screenshot resource.",
                  type: "string",
                },
                har: {
                  description: "The GTmetrix API URL for the report HAR resource.",
                  type: "string",
                },
                resource_summary: {
                  description: "The GTmetrix API URL for the JSON resource summary.",
                  type: "string",
                },
                test: {
                  description: "The GTmetrix API URL for the related test.",
                  type: "string",
                },
                lighthouse: {
                  description: "The GTmetrix API URL for the Lighthouse JSON resource.",
                  type: "string",
                },
                filmstrip: {
                  description: "The GTmetrix API URL for the filmstrip JSON resource.",
                  type: "string",
                },
                optimized_images: {
                  description: "The GTmetrix API URL for the optimized images archive.",
                  type: "string",
                },
                video: {
                  description: "The GTmetrix API URL for the video resource.",
                  type: "string",
                },
                report_pdf: {
                  description: "The GTmetrix API URL for the PDF report.",
                  type: "string",
                },
                report_pdf_full: {
                  description: "The GTmetrix API URL for the full PDF report.",
                  type: "string",
                },
                pagespeed: {
                  description: "The GTmetrix API URL for the PageSpeed JSON resource.",
                  type: "string",
                },
                pagespeed_files: {
                  description: "The GTmetrix API URL for the PageSpeed files archive.",
                  type: "string",
                },
                yslow: {
                  description: "The GTmetrix API URL for the YSlow JSON resource.",
                  type: "string",
                },
              },
              additionalProperties: {},
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The latest GTmetrix report resource for the page.",
        },
      },
      required: ["report"],
      additionalProperties: false,
      description: "The latest GTmetrix page report result.",
    },
  },
  {
    name: "get_report",
    description: "Get a single GTmetrix report by slug.",
    requiredScopes: [],
    providerPermissions: [],
    inputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        report_slug: {
          type: "string",
          minLength: 1,
          description: "The GTmetrix report slug identifier.",
        },
      },
      required: ["report_slug"],
      additionalProperties: false,
      description: "The input payload for reading a single GTmetrix report.",
    },
    outputSchema: {
      $schema: "https://json-schema.org/draft/2020-12/schema",
      type: "object",
      properties: {
        report: {
          type: "object",
          properties: {
            type: {
              description: "The GTmetrix resource type.",
              type: "string",
              const: "report",
            },
            id: {
              type: "string",
              minLength: 1,
              description: "The GTmetrix report slug identifier.",
            },
            attributes: {
              type: "object",
              properties: {
                test: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix test ID.",
                },
                page: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix page slug identifier.",
                },
                url: {
                  description: "The analyzed page URL.",
                  type: "string",
                },
                location: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix location ID.",
                },
                browser: {
                  type: "string",
                  minLength: 1,
                  description: "The GTmetrix browser ID.",
                },
                created: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                expires: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                finished: {
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                  description: "A UNIX timestamp in seconds returned by the GTmetrix API.",
                },
                source: {
                  type: "string",
                  enum: ["api", "on-demand", "monitored"],
                  description: "The source of the GTmetrix test or report.",
                },
                html_load_time: {
                  description: "The HTML load time or TTFB in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                html_bytes: {
                  description: "The HTML transfer size in bytes.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_load_time: {
                  description: "The page load time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_bytes: {
                  description: "The total page transfer size in bytes.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                page_requests: {
                  description: "The total number of requests required to load the page.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                redirect_duration: {
                  description: "The total redirect duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                connect_duration: {
                  description: "The GTmetrix connection duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                backend_duration: {
                  description: "The backend wait duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                time_to_first_byte: {
                  description: "The time to first byte in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                first_paint_time: {
                  description: "The first paint time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                first_contentful_paint: {
                  description: "The first contentful paint in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_interactive_time: {
                  description: "The DOM interactive time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_content_loaded_time: {
                  description: "The DOMContentLoaded event timestamp in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                dom_content_loaded_duration: {
                  description: "The DOMContentLoaded handler duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                onload_time: {
                  description: "The window.onload timestamp in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                onload_duration: {
                  description: "The window.onload handler duration in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                fully_loaded_time: {
                  description: "The fully loaded time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                rum_speed_index: {
                  description: "The GTmetrix RUM speed index.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                speed_index: {
                  description: "The GTmetrix speed index.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                cpu_time: {
                  description: "The CPU time reported by GTmetrix.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                gtmetrix_grade: {
                  description: "The overall GTmetrix grade for the report.",
                  type: "string",
                },
                gtmetrix_score: {
                  description: "The overall GTmetrix score.",
                  type: "number",
                },
                performance_score: {
                  description: "The GTmetrix performance score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                structure_score: {
                  description: "The GTmetrix structure score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                pagespeed_score: {
                  description: "The PageSpeed score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                yslow_score: {
                  description: "The YSlow score.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                largest_contentful_paint: {
                  description: "The largest contentful paint in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                time_to_interactive: {
                  description: "The time to interactive in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                total_blocking_time: {
                  description: "The total blocking time in milliseconds.",
                  type: "integer",
                  minimum: -9007199254740991,
                  maximum: 9007199254740991,
                },
                cumulative_layout_shift: {
                  description: "The cumulative layout shift score.",
                  type: "number",
                },
              },
              additionalProperties: {},
              description: "The GTmetrix report attributes.",
            },
            links: {
              description: "The GTmetrix links embedded on the report resource.",
              type: "object",
              properties: {
                location: {
                  description: "The GTmetrix API URL for the related location.",
                  type: "string",
                },
                browser: {
                  description: "The GTmetrix API URL for the related browser.",
                  type: "string",
                },
                report_url: {
                  description: "The public GTmetrix report URL.",
                  type: "string",
                },
                analysis_options: {
                  description: "The GTmetrix API URL for the report analysis options.",
                  type: "string",
                },
                screenshot: {
                  description: "The GTmetrix API URL for the report screenshot resource.",
                  type: "string",
                },
                har: {
                  description: "The GTmetrix API URL for the report HAR resource.",
                  type: "string",
                },
                resource_summary: {
                  description: "The GTmetrix API URL for the JSON resource summary.",
                  type: "string",
                },
                test: {
                  description: "The GTmetrix API URL for the related test.",
                  type: "string",
                },
                lighthouse: {
                  description: "The GTmetrix API URL for the Lighthouse JSON resource.",
                  type: "string",
                },
                filmstrip: {
                  description: "The GTmetrix API URL for the filmstrip JSON resource.",
                  type: "string",
                },
                optimized_images: {
                  description: "The GTmetrix API URL for the optimized images archive.",
                  type: "string",
                },
                video: {
                  description: "The GTmetrix API URL for the video resource.",
                  type: "string",
                },
                report_pdf: {
                  description: "The GTmetrix API URL for the PDF report.",
                  type: "string",
                },
                report_pdf_full: {
                  description: "The GTmetrix API URL for the full PDF report.",
                  type: "string",
                },
                pagespeed: {
                  description: "The GTmetrix API URL for the PageSpeed JSON resource.",
                  type: "string",
                },
                pagespeed_files: {
                  description: "The GTmetrix API URL for the PageSpeed files archive.",
                  type: "string",
                },
                yslow: {
                  description: "The GTmetrix API URL for the YSlow JSON resource.",
                  type: "string",
                },
              },
              additionalProperties: {},
            },
          },
          required: ["attributes"],
          additionalProperties: {},
          description: "The GTmetrix report resource.",
        },
      },
      required: ["report"],
      additionalProperties: false,
      description: "The GTmetrix report lookup result.",
    },
  },
];
