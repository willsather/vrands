import { vercelAdapter } from "@flags-sdk/vercel";
import { flag } from "flags/next";

export const searchResultsFlag = flag<boolean>({
  key: "search-results-flag",
  adapter: vercelAdapter(),
  defaultValue: false,
  description: "enable displaying count of search results on /search",
});

export const inBriefFlag = flag<boolean>({
  key: "in-brief-flag",
  adapter: vercelAdapter(),
  defaultValue: true,
  description: "enable displaying in brief icon for a post",
});

export const flags = [searchResultsFlag, inBriefFlag] as const;
