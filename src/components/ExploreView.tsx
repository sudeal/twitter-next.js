"use client";

import { useState } from "react";
import { Pin } from "lucide-react";
import { exploreHero, newsData, trendingList } from "@/data/explore";

type ExploreTab = "for-you" | "trending" | "news" | "sports" | "entertainment";

export default function ExploreView() {
  const [activeTab, setActiveTab] = useState<ExploreTab>("for-you");

  return (
    <div className="explore">
      <header className="explore-tabs-header">
        <nav className="explore-tabs" role="tablist">
          {[
            { id: "for-you", label: "For you" },
            { id: "trending", label: "Trending" },
            { id: "news", label: "News" },
            { id: "sports", label: "Sports" },
            { id: "entertainment", label: "Entertainment" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`explore-tabs__tab ${
                activeTab === tab.id ? "explore-tabs__tab--active" : ""
              }`}
              onClick={() => setActiveTab(tab.id as ExploreTab)}
            >
              <span className="explore-tabs__tab-text">{tab.label}</span>
              {activeTab === tab.id && (
                <span className="explore-tabs__underline" />
              )}
            </button>
          ))}
        </nav>
      </header>

      <section className="explore-hero">
        <img
          src={exploreHero.image}
          alt={exploreHero.title}
          className="explore-hero__image"
        />
        <div className="explore-hero__meta">
          <span className="explore-hero__label">{exploreHero.sponsor}</span>
          <h1 className="explore-hero__title">{exploreHero.title}</h1>
          <p className="explore-hero__desc">{exploreHero.description}</p>
          <button type="button" className="explore-hero__cta">
            {exploreHero.cta}
          </button>
        </div>
      </section>

      <section className="explore-news">
        <h2 className="explore-news__title">Today&apos;s News</h2>
        <ul className="explore-news__list">
          {newsData.map((item) => (
            <li key={item.id} className="explore-news__item">
              <div className="explore-news__item-main">
                <h3 className="explore-news__item-title">{item.title}</h3>
                <p className="explore-news__item-meta">
                  {item.time} · {item.category} · {item.postCount}
                </p>
              </div>
              <div className="explore-news__item-avatars">
                {item.images.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="explore-news__avatar"
                  />
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="explore-trends">
        <h2 className="explore-trends__title">Trends for you</h2>
        <ul className="explore-trends__list">
          {trendingList.map((trend) => (
            <li key={trend.id} className="explore-trends__item">
              <div className="explore-trends__item-body">
                <span className="explore-trends__label">
                  {trend.isPinned && (
                    <Pin
                      size={14}
                      className="explore-trends__pin"
                      aria-hidden
                    />
                  )}
                  {trend.label}
                </span>
                <span className="explore-trends__topic">{trend.topic}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

