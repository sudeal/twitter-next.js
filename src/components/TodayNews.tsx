"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { MOCK_NEWS } from "@/data/news";

export default function TodayNews() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="today-news">
      <header className="today-news__header">
        <h3 className="today-news__title">Today&apos;s News</h3>
        <button
          type="button"
          className="today-news__close"
          aria-label="Kapat"
          onClick={() => setVisible(false)}
        >
          <X size={18} />
        </button>
      </header>
      <ul className="today-news__list">
        {MOCK_NEWS.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.id}`} className="today-news__item">
              <p className="today-news__item-title">{item.title}</p>
              <div className="today-news__item-meta">
                <span>
                  {item.time} • {item.category} • {item.postCount}
                </span>
              </div>
              <div className="today-news__item-avatars">
                <img
                  src={item.image}
                  alt=""
                  className="today-news__avatar"
                />
                <img
                  src={item.image}
                  alt=""
                  className="today-news__avatar"
                />
                <img
                  src={item.image}
                  alt=""
                  className="today-news__avatar"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
