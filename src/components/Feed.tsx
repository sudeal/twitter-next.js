"use client";

import {
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Share,
  BadgeCheck,
} from "lucide-react";
import { MOCK_POSTS } from "@/data/posts";

export default function Feed() {
  return (
    <div className="feed-list">
      {MOCK_POSTS.map((post) => (
        <article key={post.id} className="feed-post">
          <div className="feed-post__avatar-wrap">
            <img
              src={post.user.image}
              alt=""
              width={48}
              height={48}
              className="feed-post__avatar"
            />
          </div>
          <div className="feed-post__body">
            <header className="feed-post__header">
              <span className="feed-post__name">
                {post.user.name}
                {post.user.isVerified && (
                  <BadgeCheck
                    size={18}
                    className="feed-post__verified"
                    aria-label="Doğrulanmış"
                  />
                )}
              </span>
              <span className="feed-post__meta">
                @{post.user.username} · {post.timestamp}
              </span>
            </header>
            <p className="feed-post__content">{post.content}</p>

            {post.image && (
              <div className="feed-post__media">
                <img
                  src={post.image}
                  alt=""
                  className="feed-post__media-img"
                />
              </div>
            )}
            {post.video && (
              <div className="feed-post__media">
                <video
                  src={post.video}
                  controls
                  className="feed-post__media-video"
                />
              </div>
            )}

            <div className="feed-post__actions">
              <button
                type="button"
                className="feed-post__action"
                aria-label={`Yanıtla ${post.replies}`}
              >
                <MessageCircle size={18} />
                <span>{post.replies}</span>
              </button>
              <button
                type="button"
                className="feed-post__action"
                aria-label={`Retweet ${post.retweets}`}
              >
                <Repeat2 size={18} />
                <span>{post.retweets}</span>
              </button>
              <button
                type="button"
                className="feed-post__action feed-post__action--like"
                aria-label={`Beğeni ${post.likes}`}
              >
                <Heart size={18} />
                <span>{post.likes}</span>
              </button>
              <button
                type="button"
                className="feed-post__action"
                aria-label={`Görüntülenme ${post.views}`}
              >
                <BarChart2 size={18} />
                <span>{post.views}</span>
              </button>
              <button
                type="button"
                className="feed-post__action feed-post__action--share"
                aria-label="Paylaş"
              >
                <Share size={18} />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
