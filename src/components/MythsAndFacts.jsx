import React, { useMemo, useState } from "react";
import {
  countRevealedMyths,
  filterMythsAndFacts,
  getMythCategories,
} from "../utils/myths";

export default function MythsAndFacts({
  items = [],
  onInteract,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVerdict, setSelectedVerdict] = useState("All");
  const [revealed, setRevealed] = useState({});

  const categories = useMemo(() => getMythCategories(items), [items]);
  const filteredItems = useMemo(
    () =>
      filterMythsAndFacts(items, {
        category: selectedCategory,
        verdict: selectedVerdict,
      }),
    [items, selectedCategory, selectedVerdict]
  );

  const revealedTotal = useMemo(
    () => countRevealedMyths(revealed, items),
    [revealed, items]
  );

  const allVisibleRevealed =
    filteredItems.length > 0 && filteredItems.every((item) => Boolean(revealed[item.id]));

  const toggleCard = (id) => {
    if (onInteract) onInteract();
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleAllVisible = () => {
    if (onInteract) onInteract();
    setRevealed((prev) => {
      const next = { ...prev };
      for (const item of filteredItems) {
        next[item.id] = !allVisibleRevealed;
      }
      return next;
    });
  };

  return (
    <section className="myths-page" aria-label="PCOS Myths and Facts">
      <div className="myths-toolbar">
        <div className="myths-toolbar-info">
          <p className="eyebrow">EVIDENCE-INFORMED CLARITY</p>
          <h2>Question common PCOS claims</h2>
          <p className="myths-count" data-testid="myths-explored-count">
            {revealedTotal} of {items.length} cards revealed · Showing {filteredItems.length}
          </p>
        </div>
        <div className="myths-toolbar-actions">
          <div className="progress-tabs" role="group" aria-label="Filter by verdict">
            {["All", "Myth", "Fact"].map((verdict) => (
              <button
                key={verdict}
                type="button"
                className={selectedVerdict === verdict ? "progress-tab active" : "progress-tab"}
                aria-pressed={selectedVerdict === verdict}
                onClick={() => setSelectedVerdict(verdict)}
              >
                {verdict}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="progress-reset"
            onClick={handleToggleAllVisible}
          >
            {allVisibleRevealed ? "Hide visible answers" : "Reveal visible answers"}
          </button>
        </div>
      </div>

      <div className="myth-categories" role="group" aria-label="Filter by topic category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              selectedCategory === category ? "myth-cat-btn active" : "myth-cat-btn"
            }
            aria-pressed={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="panel">
          <p>No cards match this filter combination. Select "All" to see every myth and fact.</p>
        </div>
      ) : (
        <div className="myths">
          {filteredItems.map((item) => {
            const isOpen = Boolean(revealed[item.id]);
            const verdictClass =
              item.verdict === "Fact" ? "myth-badge fact" : "myth-badge myth-tag";
            return (
              <button
                type="button"
                className={isOpen ? "myth revealed" : "myth"}
                key={item.id}
                aria-expanded={isOpen}
                onClick={() => toggleCard(item.id)}
              >
                <div className="myth-card-top">
                  <span className={isOpen ? verdictClass : "myth-badge"}>
                    {isOpen ? item.verdict.toUpperCase() : "MYTH OR FACT?"}
                  </span>
                  <small className="myth-cat-label">{item.category}</small>
                </div>
                <strong>{item.claim}</strong>
                <p>
                  {isOpen
                    ? item.explanation
                    : "Select to reveal whether this is a myth or fact and read the evidence-informed context."}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
}
