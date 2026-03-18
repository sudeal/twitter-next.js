"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Ellipsis,
  List,
  ListPlus,
  Plus,
  Search,
} from "lucide-react";
import { discoverLists } from "@/data/lists";

export default function ListsView() {
  return (
    <div className="lists-page">
      <header className="lists-page__header">
        <Link href="/" className="lists-page__back" aria-label="Back">
          <ArrowLeft size={20} strokeWidth={2} />
        </Link>

        <div className="lists-page__search-wrap">
          <Search size={16} className="lists-page__search-icon" />
          <input
            type="search"
            className="lists-page__search"
            placeholder="Search Lists"
            aria-label="Search Lists"
          />
        </div>

        <button type="button" className="lists-page__icon-btn" aria-label="New list">
          <ListPlus size={20} />
        </button>
        <button type="button" className="lists-page__icon-btn" aria-label="More">
          <Ellipsis size={20} />
        </button>
      </header>

      <section className="lists-page__section">
        <h2 className="lists-page__section-title">Discover new Lists</h2>
        <ul className="lists-page__discover-list">
          {discoverLists.map((item) => (
            <li key={item.id} className="lists-page__discover-item">
              <div
                className="lists-page__discover-icon"
                style={{ backgroundColor: item.color }}
              >
                <List size={18} />
              </div>

              <div className="lists-page__discover-body">
                <div className="lists-page__discover-top">
                  <span className="lists-page__discover-name">{item.name}</span>
                  <span className="lists-page__discover-members">
                    {item.members} members
                  </span>
                </div>

                <div className="lists-page__discover-followers">
                  <div className="lists-page__discover-avatars">
                    {item.avatars.map((avatar) => (
                      <img
                        key={avatar}
                        src={avatar}
                        alt=""
                        className="lists-page__discover-avatar"
                      />
                    ))}
                  </div>
                  <span>{item.followersText}</span>
                </div>
              </div>

              <button
                type="button"
                className="lists-page__add-btn"
                aria-label={`Add ${item.name}`}
              >
                <Plus size={18} />
              </button>
            </li>
          ))}
        </ul>

        <a href="#" className="lists-page__show-more">
          Show more
        </a>
      </section>

      <section className="lists-page__section">
        <h2 className="lists-page__section-title">Your Lists</h2>
        <p className="lists-page__empty">
          You haven&apos;t created or followed any Lists. When you do, they&apos;ll
          show up here.
        </p>
      </section>
    </div>
  );
}
