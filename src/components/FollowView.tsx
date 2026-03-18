"use client";

import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { suggestedUsers, creatorSuggestions } from "@/data/follow";

type FollowTab = "who" | "creators";

type FollowUser = (typeof suggestedUsers)[number] & {
  buttonText?: string;
};

export default function FollowView() {
  const [activeTab, setActiveTab] = useState<FollowTab>("who");

  const list: FollowUser[] =
    activeTab === "who"
      ? suggestedUsers
      : creatorSuggestions.map((creator) => ({
          ...creator,
          buttonText: creator.buttonText ?? "Subscribe",
        }));

  return (
    <div className="follow">
      <header className="follow-header">
        <button type="button" className="follow-header__back" aria-label="Back">
          
          <span className="follow-header__back-text">Follow</span>
        </button>
      </header>

      <nav className="follow-tabs" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "who"}
          className={`follow-tabs__tab ${
            activeTab === "who" ? "follow-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("who")}
        >
          <span className="follow-tabs__tab-text">Who to follow</span>
          {activeTab === "who" && <span className="follow-tabs__underline" />}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "creators"}
          className={`follow-tabs__tab ${
            activeTab === "creators" ? "follow-tabs__tab--active" : ""
          }`}
          onClick={() => setActiveTab("creators")}
        >
          <span className="follow-tabs__tab-text">Creators for you</span>
          {activeTab === "creators" && <span className="follow-tabs__underline" />}
        </button>
      </nav>

      <section className="follow-section">
        <h2 className="follow-section__title">
          {activeTab === "who" ? "Suggested for you" : "Creators for you"}
        </h2>
        <ul className="follow-list">
          {list.map((user) => (
            <li key={user.id} className="follow-item">
              <div className="follow-item__avatar-wrap">
                <img
                  src={user.avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="follow-item__avatar"
                />
              </div>
              <div className="follow-item__body">
                <div className="follow-item__header">
                  <span className="follow-item__name">
                    {user.name}
                    {user.isVerified && (
                      <BadgeCheck
                        size={18}
                        className={`follow-item__verified follow-item__verified--${
                          user.verifiedType || "blue"
                        }`}
                        aria-label="Verified account"
                      />
                    )}
                  </span>
                  <span className="follow-item__username">{user.username}</span>
                </div>
                {user.bio && (
                  <p className="follow-item__bio">{user.bio}</p>
                )}
              </div>
              <button type="button" className="follow-item__btn">
                {user.buttonText || (activeTab === "who" ? "Follow" : "Subscribe")}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

