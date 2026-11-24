import React, { useEffect } from "react";
import {
  HAMBURGER_MENU_SECTIONS,
  MENU_FOOTER_LINKS,
  isMenuRouteActive,
  isSectionActive,
} from "../utils/navigation";

export default function StructuredMenu({
  isOpen,
  currentPath,
  onClose,
  onNavigate,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleLinkClick = (to) => (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onClose();
    onNavigate(to);
  };

  return (
    <>
      <div
        className="structured-menu-backdrop"
        aria-hidden="true"
        onClick={onClose}
      />
      <aside
        id="structured-menu-drawer"
        className="structured-menu-drawer"
        aria-label="Structured site navigation"
        data-testid="structured-menu"
      >
        <div className="structured-menu-head">
          <div>
            <p className="eyebrow">SITE DIRECTORY · PCOS UNLOCKED</p>
            <h2>Navigate by section</h2>
          </div>
          <button
            type="button"
            className="structured-menu-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <span aria-hidden="true">✕</span>
            <span>Close</span>
          </button>
        </div>

        <nav className="structured-menu-grid" aria-label="Full site sections">
          {HAMBURGER_MENU_SECTIONS.map((section) => {
            const sectionActive = isSectionActive(currentPath, section);
            return (
              <section
                key={section.id}
                className={`structured-menu-group${sectionActive ? " active" : ""}`}
                aria-labelledby={`menu-group-${section.id}`}
              >
                <div className="structured-menu-group-head">
                  <span className="structured-menu-no">{section.number}</span>
                  <div className="structured-menu-title-wrap">
                    <h3 id={`menu-group-${section.id}`}>
                      <a
                        href={section.to}
                        onClick={handleLinkClick(section.to)}
                        className="structured-menu-section-link"
                      >
                        <span>{section.title}</span>
                        <span aria-hidden="true">↗</span>
                      </a>
                    </h3>
                    <p className="structured-menu-summary">{section.summary}</p>
                  </div>
                </div>

                <ul className="structured-menu-links">
                  {section.links.map((item) => {
                    const active = isMenuRouteActive(currentPath, item.to);
                    return (
                      <li key={`${section.id}-${item.to}`}>
                        <a
                          href={item.to}
                          onClick={handleLinkClick(item.to)}
                          className={`structured-menu-link${active ? " active" : ""}`}
                          aria-current={active ? "page" : undefined}
                        >
                          <span className="structured-menu-dot" aria-hidden="true">
                            ›
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </nav>

        <div className="structured-menu-foot">
          {MENU_FOOTER_LINKS.map((item) => {
            const active = isMenuRouteActive(currentPath, item.to);
            return (
              <a
                key={item.to}
                href={item.to}
                onClick={handleLinkClick(item.to)}
                className={`structured-menu-foot-link${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
}
