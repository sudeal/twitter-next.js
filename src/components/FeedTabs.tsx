"use client";

import { useState } from "react";

type Tab = "for-you" | "following";

/**
 * Feed sekmeleri: yalnızca For you / Following. Altta ince çizgi ile ayrılır.
 */
export default function FeedTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("for-you");

  return (
    <header className="feed-tabs-header">
      <nav className="feed-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "for-you"}
          className={`feed-tabs__tab ${
            activeTab === "for-you" ? "feed-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("for-you")}
        >
          <span className="feed-tabs__tab-text">For you</span>
          {activeTab === "for-you" && (
            <span className="feed-tabs__underline" />
          )}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "following"}
          className={`feed-tabs__tab ${
            activeTab === "following" ? "feed-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("following")}
        >
          <span className="feed-tabs__tab-text">Following</span>
          {activeTab === "following" && (
            <span className="feed-tabs__underline" />
          )}
        </button>
      </nav>
    </header>
  );
}
