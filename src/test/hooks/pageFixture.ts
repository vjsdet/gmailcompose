import { BrowserContext, Page } from "@playwright/test";

export const fixture = {
  // @ts-ignore
  page: undefined as Page,
  // @ts-ignore
  context: undefined as BrowserContext,
  // @ts-ignore
  logger: undefined as Logger,
};
