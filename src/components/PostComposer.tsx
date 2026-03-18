"use client";

import {
  Image,
  LayoutGrid,
  BarChart2,
  List,
  Smile,
  CalendarClock,
  MapPin,
} from "lucide-react";

const actionIcons = [
  { icon: Image, label: "Medya" },
  { icon: LayoutGrid, label: "GIF" },
  { icon: BarChart2, label: "Anket" },
  { icon: List, label: "Liste" },
  { icon: Smile, label: "Emoji" },
  { icon: CalendarClock, label: "Zamanla" },
  { icon: MapPin, label: "Konum" },
];

export default function PostComposer() {
  return (
    <div className="post-composer">
      <div className="post-composer__avatar" aria-hidden />
      <div className="post-composer__body">
        <textarea
          className="post-composer__input"
          placeholder="What's happening?"
          rows={1}
          aria-label="Post yaz"
        />
        <div className="post-composer__actions">
          <div className="post-composer__icons">
            {actionIcons.map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                className="post-composer__icon-btn"
                title={label}
                aria-label={label}
              >
                <Icon size={20} strokeWidth={2} />
              </button>
            ))}
          </div>
          <button type="button" className="post-composer__submit">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
