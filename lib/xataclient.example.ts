import { XataClient } from "./xata.codegen";

let instance: XataClient | undefined = undefined;


export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient({
    // Override configuration here
    // databaseURL: "XATA_DATABASE_URL",
    apiKey: "XATA_API_KEY",
    // fetch: fetch,
    // branch: "XATA_BRANCH",
    // ... other configuration
  });

  return instance;
};
