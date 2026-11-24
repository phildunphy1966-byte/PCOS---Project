import React, { useState } from "react";
import {
  filterPcosFaqs,
  PCOS_FAQ_ASKED_BY,
  PCOS_FAQ_TOPICS,
} from "../utils/pcosGuide";

export default function PcosFaqSection({
  onInteract,
  onNavigate,
  embedded = false,
}) {
  const [topicFilter, setTopicFilter] = useState("all");
  const [askedByFilter, setAskedByFilter] = useState("all");
  const [openFaqId, setOpenFaqId] = useState("faq-diet-patient-1");

  const visibleFaqs = filterPcosFaqs(topicFilter, askedByFilter);

  const handleToggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? "" : id));
    if (onInteract) onInteract();
  };

  const handleTopic = (topicId) => {
    setTopicFilter(topicId);
    const nextList = filterPcosFaqs(topicId, askedByFilter);
    if (nextList.length > 0 && !nextList.some((f) => f.id === openFaqId)) {
      setOpenFaqId(nextList[0].id);
    }
    if (onInteract) onInteract();
  };

  const handleAskedBy = (askedId) => {
    setAskedByFilter(askedId);
    const nextList = filterPcosFaqs(topicFilter, askedId);
    if (nextList.length > 0 && !nextList.some((f) => f.id === openFaqId)) {
      setOpenFaqId(nextList[0].id);
    }
    if (onInteract) onInteract();
  };

  const go = (to) => {
    if (onNavigate) onNavigate(to);
  };

  return (
    <div
      className={embedded ? "pcos-faq-panel" : "pcos-faq-card"}
      data-testid="pcos-faq-section"
    >
      <div className="pcos-faq-head">
        <p className="eyebrow">FREQUENTLY ASKED QUESTIONS · PATIENTS &amp; PARTNERS</p>
        <h3>Frequently Asked Questions</h3>
        <p className="pcos-copy-summary">
          Honest, evidence-informed answers to everyday questions asked by patients and partners about food, symptoms, and emotional support.
        </p>
      </div>

      <div className="pcos-faq-filters">
        <div
          className="myth-categories"
          role="group"
          aria-label="Filter FAQs by topic"
        >
          {PCOS_FAQ_TOPICS.map((topic) => {
            const active = topicFilter === topic.id;
            return (
              <button
                key={topic.id}
                type="button"
                aria-pressed={active}
                className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                onClick={() => handleTopic(topic.id)}
              >
                {topic.label}
              </button>
            );
          })}
        </div>

        <div
          className="myth-categories"
          role="group"
          aria-label="Filter FAQs by who asked"
        >
          {PCOS_FAQ_ASKED_BY.map((who) => {
            const active = askedByFilter === who.id;
            return (
              <button
                key={who.id}
                type="button"
                aria-pressed={active}
                className={active ? "myth-cat-btn active" : "myth-cat-btn"}
                onClick={() => handleAskedBy(who.id)}
              >
                {who.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pcos-faq-list">
        {visibleFaqs.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <article
              key={faq.id}
              className={isOpen ? "pcos-faq-item open" : "pcos-faq-item"}
              data-testid={`faq-item-${faq.id}`}
            >
              <button
                type="button"
                className="pcos-faq-trigger"
                aria-expanded={isOpen}
                onClick={() => handleToggleFaq(faq.id)}
              >
                <div className="pcos-faq-trigger-copy">
                  <span className={`pcos-faq-meta ${faq.askedBy}`}>
                    {faq.askedByLabel} · {faq.topicLabel}
                  </span>
                  <strong>{faq.question}</strong>
                </div>
                <span className="pcos-faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="pcos-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="pcos-tabular-links pcos-faq-links">
        <a
          href="/assistant"
          className="btn primary"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            e.preventDefault();
            go("/assistant");
          }}
        >
          Ask a custom question in Ask &amp; Talk →
        </a>
        <a
          href="/support"
          className="btn secondary"
          onClick={(e) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            e.preventDefault();
            go("/support");
          }}
        >
          Read Expert Advice &amp; Specialist Directory
        </a>
      </div>
    </div>
  );
}
