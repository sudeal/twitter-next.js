"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CalendarDays,
  MapPin,
  UserRound,
} from "lucide-react";
import { profileHeader, profileWhoToFollow } from "@/data/profile";

const profileTabs = [
  "Posts",
  "Replies",
  "Highlights",
  "Articles",
  "Media",
  "Likes",
];

export default function ProfileView() {
  return (
    <div className="profile-page">
      <header className="profile-page__header">
        <Link href="/" className="profile-page__back" aria-label="Back">
          <ArrowLeft size={20} strokeWidth={2} />
        </Link>
        <div className="profile-page__header-meta">
          <h1 className="profile-page__name-top">{profileHeader.name}</h1>
          <p className="profile-page__posts-count">0 posts</p>
        </div>
      </header>

      <section className="profile-page__hero">
        <div
          className="profile-page__cover"
          style={{ backgroundColor: profileHeader.coverColor }}
        />
        <div className="profile-page__profile-row">
          <img
            src={profileHeader.avatar}
            alt={profileHeader.name}
            className="profile-page__avatar"
          />
          <button type="button" className="profile-page__edit-btn">
            Edit profile
          </button>
        </div>
      </section>

      <section className="profile-page__info">
        <div className="profile-page__identity">
          <div className="profile-page__display-line">
            <h2 className="profile-page__display-name">{profileHeader.name}</h2>
            <span className="profile-page__verified-chip">
              <BadgeCheck size={16} />
              Get verified
            </span>
          </div>
          <p className="profile-page__username">{profileHeader.username}</p>
        </div>

        <div className="profile-page__meta">
          <span className="profile-page__meta-item">
            <MapPin size={16} />
            {profileHeader.location}
          </span>
          <span className="profile-page__meta-item">
            <CalendarDays size={16} />
            {profileHeader.joinDate}
          </span>
        </div>

        <div className="profile-page__stats">
          <span>
            <strong>{profileHeader.following}</strong> Following
          </span>
          <span>
            <strong>{profileHeader.followers}</strong> Followers
          </span>
        </div>
      </section>

      <nav className="profile-page__tabs" role="tablist">
        {profileTabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={index === 0}
            className={`profile-page__tab ${
              index === 0 ? "profile-page__tab--active" : ""
            }`}
          >
            <span>{tab}</span>
            {index === 0 && <span className="profile-page__tab-underline" />}
          </button>
        ))}
      </nav>

      <section className="profile-page__suggestions">
        <h3 className="profile-page__suggestions-title">Who to follow</h3>
        <ul className="profile-page__suggestions-list">
          {profileWhoToFollow.map((user) => (
            <li key={user.id} className="profile-page__suggestion-item">
              <div className="profile-page__suggestion-avatar-wrap">
                <img
                  src={user.avatar}
                  alt=""
                  className="profile-page__suggestion-avatar"
                />
              </div>
              <div className="profile-page__suggestion-body">
                <span className="profile-page__suggestion-follows">
                  <UserRound size={12} />
                  {user.followsLabel}
                </span>
                <span className="profile-page__suggestion-name">{user.name}</span>
                <span className="profile-page__suggestion-username">
                  {user.username}
                </span>
                <p className="profile-page__suggestion-bio">{user.bio}</p>
              </div>
              <button type="button" className="profile-page__follow-btn">
                Follow
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
