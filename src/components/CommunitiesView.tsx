"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUp, Search, UserRoundPlus } from "lucide-react";
import {
  artCommunityFeed,
  entertainmentCommunityFeed,
  gamingCommunityFeed,
  sportsCommunityFeed,
  technologyCommunityFeed,
} from "@/data/communities";

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

const gamingTopics = [
  "Gaming",
  "Console",
  "PC",
  "Esports",
  "RPG",
];

const topicGroups: Record<string, string[]> = {
  Sports: sportsTopics,
  Technology: technologyTopics,
  Art: artTopics,
  Entertainment: entertainmentTopics,
  Gaming: gamingTopics,
};

const groupFeeds = {
  Sports: sportsCommunityFeed,
  Technology: technologyCommunityFeed,
  Art: artCommunityFeed,
  Entertainment: entertainmentCommunityFeed,
  Gaming: gamingCommunityFeed,
} as const;

export default function CommunitiesView() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const activeTopics = activeGroup ? topicGroups[activeGroup] : null;
  const activeFeed =
    activeGroup && activeGroup in groupFeeds
      ? groupFeeds[activeGroup as keyof typeof groupFeeds]
      : null;

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

      {activeFeed ? (
        <section className="communities-page__feed">
          <ul className="communities-page__feed-list">
            {activeFeed.map((item) => (
              <li key={item.id} className="communities-page__feed-item">
                <div className="communities-page__feed-community">
                  {item.community}
                </div>

                <div className="communities-page__feed-author">
                  <img
                    src={item.authorAvatar}
                    alt=""
                    className="communities-page__feed-avatar"
                  />
                  <div className="communities-page__feed-author-copy">
                    <div className="communities-page__feed-meta">
                      <span className="communities-page__feed-source">
                        {item.authorName}
                      </span>
                      <span>
                        {item.authorHandle} · {item.time}
                      </span>
                    </div>
                    <h3 className="communities-page__feed-title">{item.title}</h3>
                  </div>
                </div>
                <p className="communities-page__feed-summary">{item.summary}</p>
                {item.image && (
                  <div className="communities-page__feed-media">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="communities-page__feed-image"
                    />
                  </div>
                )}
                <span className="communities-page__feed-stats">{item.stats}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <div className="communities-page__empty-space" />
      )}
    </div>
  );
}
