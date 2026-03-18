"use client";

import { useState } from "react";
import { MoreHorizontal, ArrowUpRight, Frown } from "lucide-react";
import { trendingData } from "@/data/trending";

const TREND_MENU_ITEMS = [
  "The associated content is not relevant",
  "This trend is spam",
  "This trend is abusive or harmful",
  "Not interested in this",
  "This trend is a duplicate",
  "This trend is harmful or spammy",
  "Don't want to see this ad",
] as const;

export default function WhatsHappening() {
  const [openTrendId, setOpenTrendId] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setOpenTrendId((current) => (current === id ? null : id));
  };

  return (
    <div className="whats-happening">
      <h3 className="whats-happening__title">What&apos;s happening</h3>
      <ul className="whats-happening__list">
        {trendingData.map((item) => (
          <li key={item.id} className="whats-happening__item-wrapper">
            <a href="#" className="whats-happening__item">
              <div className="whats-happening__item-content">
                <span className="whats-happening__category">
                  {item.isPromoted && (
                    <ArrowUpRight
                      size={14}
                      className="whats-happening__promoted-icon"
                      aria-hidden
                    />
                  )}
                  {item.category}
                </span>
                <span className="whats-happening__title-text">{item.title}</span>
                {"tweetCount" in item && item.tweetCount ? (
                  <span className="whats-happening__tweet-count">
                    {item.tweetCount}
                  </span>
                ) : null}
              </div>
              <button
                type="button"
                className="whats-happening__more"
                aria-label="More options"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  toggleMenu(item.id);
                }}
              >
                <MoreHorizontal size={18} />
              </button>
            </a>

            {openTrendId === item.id && (
              <div className="whats-happening__menu" role="menu">
                <ul className="whats-happening__menu-list">
                  {TREND_MENU_ITEMS.map((label) => (
                    <li key={label}>
                      <button
                        type="button"
                        className="whats-happening__menu-item"
                      >
                        <span className="whats-happening__menu-icon">
                          <Frown size={18} />
                        </span>
                        <span>{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
      <a href="#" className="whats-happening__show-more">
        Show more
      </a>
    </div>
  );
}
