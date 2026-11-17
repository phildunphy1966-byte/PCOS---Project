import test from "node:test";
import assert from "node:assert/strict";
import { extractGroundingSources } from "./grounding";

test("extractGroundingSources deduplicates URLs and filters invalid entries", () => {
  const metadata = {
    webSearchQueries: ["PCOS Rotterdam criteria", "", null],
    groundingChunks: [
      { web: { uri: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome", title: "WHO PCOS" } },
      { web: { uri: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome", title: "Duplicate WHO" } },
      { web: { uri: "javascript:alert(1)", title: "Bad URI" } },
      { web: { uri: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/", title: "  " } },
      {},
    ],
  };

  const result = extractGroundingSources(metadata);
  assert.deepEqual(result.queries, ["PCOS Rotterdam criteria"]);
  assert.deepEqual(result.sources, [
    {
      title: "WHO PCOS",
      uri: "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome",
    },
    {
      title: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/",
      uri: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/",
    },
  ]);
});

test("extractGroundingSources handles missing metadata gracefully", () => {
  assert.deepEqual(extractGroundingSources(undefined), {
    sources: [],
    queries: [],
  });
  assert.deepEqual(extractGroundingSources(null), {
    sources: [],
    queries: [],
  });
});
