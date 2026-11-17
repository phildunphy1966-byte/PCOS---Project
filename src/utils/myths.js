export function getMythCategories(items = []) {
  const categories = [];
  for (const item of items) {
    if (item?.category && !categories.includes(item.category)) {
      categories.push(item.category);
    }
  }
  return ["All", ...categories];
}

export function filterMythsAndFacts(
  items = [],
  { category = "All", verdict = "All" } = {}
) {
  return items.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const matchesVerdict = verdict === "All" || item.verdict === verdict;
    return matchesCategory && matchesVerdict;
  });
}

export function countRevealedMyths(revealedMap = {}, items = []) {
  if (!revealedMap || typeof revealedMap !== "object") return 0;
  return items.reduce((count, item) => (revealedMap[item.id] ? count + 1 : count), 0);
}
