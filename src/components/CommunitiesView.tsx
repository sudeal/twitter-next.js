"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Search, UserRoundPlus } from "lucide-react";

const communityTopics = [
  "Sports",
  "Technology",
  "Art",
  "Entertainment",
  "Gaming",
  "Politics",
];

const sportsTopics = [
  "Sports",
  "American Football",
  "Basketball",
  "Soccer",
  "Baseball",
];

const technologyTopics = [
  "Technology",
  "Artificial Intelligence",
  "Software",
];

const artTopics = [
  "Art",
  "Design",
  "Writing",
  "Photography",
  "Animation",
  "Comics",
];

const entertainmentTopics = [
  "Entertainment",
  "Music",
  "Celebrities",
  "Movies",
];

const topicGroups: Record<string, string[]> = {
  Sports: sportsTopics,
  Technology: technologyTopics,
  Art: artTopics,
  Entertainment: entertainmentTopics,
};

export default function CommunitiesView() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const activeTopics = activeGroup ? topicGroups[activeGroup] : null;

  return (
    <div className="communities-page">
      <header className="communities-page__header">
        <Link href="/" className="communities-page__back" aria-label="Back">
          <ArrowLeft size={22} strokeWidth={2} />
        </Link>
        <h1 className="communities-page__title">Communities</h1>
        <div className="communities-page__header-actions">
          <button
            type="button"
            className="communities-page__icon-btn"
            aria-label="Search communities"
          >
            <Search size={22} />
          </button>
          <button
            type="button"
            className="communities-page__icon-btn"
            aria-label="Invite people"
          >
            <UserRoundPlus size={22} />
          </button>
        </div>
      </header>

      <section className="communities-page__topics">
        <div className="communities-page__topics-row">
          {activeTopics ? (
            <>
              <button
                type="button"
                className="communities-page__back-chip"
                aria-label="Back to communities topics"
                onClick={() => setActiveGroup(null)}
              >
                <ArrowUp size={22} strokeWidth={2.2} />
              </button>

              {activeTopics.map((topic, index) => (
                <button
                  key={topic}
                  type="button"
                  className={`communities-page__topic-chip ${
                    index === 0 ? "communities-page__topic-chip--active" : ""
                  }`}
                >
                  {topic}
                </button>
              ))}
            </>
          ) : (
            <>
              {communityTopics.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  className="communities-page__topic-chip"
                  onClick={() => {
                    if (topicGroups[topic]) {
                      setActiveGroup(topic);
                    }
                  }}
                >
                  {topic}
                </button>
              ))}
            </>
          )}
        </div>
      </section>

      <div className="communities-page__empty-space" />
    </div>
  );
}
