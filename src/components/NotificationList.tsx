"use client";

import { Star, MoreHorizontal } from "lucide-react";
import { MOCK_NOTIFICATIONS } from "@/data/notifications";

export default function NotificationList({ onlyMentions = false }: { onlyMentions?: boolean }) {
  const list = onlyMentions
    ? MOCK_NOTIFICATIONS.filter((n) => n.type === "mention")
    : MOCK_NOTIFICATIONS;

  return (
    <div className="notif-list">
      {list.map((notif) => (
        <article key={notif.id} className="notif-item">
          <div className="notif-item__icons">
            <Star
              size={18}
              fill="currentColor"
              className="notif-item__star"
              aria-hidden
            />
          </div>
          <div className="notif-item__avatar-wrap">
            <img
              src={notif.user.image}
              alt=""
              width={40}
              height={40}
              className="notif-item__avatar"
            />
          </div>
          <div className="notif-item__body">
            <header className="notif-item__header">
              <span className="notif-item__name">{notif.user.name}</span>
              <span className="notif-item__time">{notif.timestamp}</span>
              <button
                type="button"
                className="notif-item__more"
                aria-label="Seçenekler"
              >
                <MoreHorizontal size={18} />
              </button>
            </header>
            <div className="notif-item__content-wrap">
              <p className="notif-item__content">{notif.content}</p>
              {notif.image && (
                <div className="notif-item__thumb">
                  <img src={notif.image} alt="" className="notif-item__thumb-img" />
                </div>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
