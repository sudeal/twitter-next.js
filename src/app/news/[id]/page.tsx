import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  MessageCircle,
  Repeat2,
  Heart,
  BarChart2,
  Share,
} from "lucide-react";
import { MOCK_NEWS_DETAY } from "@/data/newsDetail";

type RelatedPost = {
  id: string;
  user: { name: string; username: string; image: string };
  content: string;
  image?: string;
  video?: string;
  likes: string;
  retweets: string;
};

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = MOCK_NEWS_DETAY.find((n) => n.id === id);
  if (!news) notFound();

  return (
    <div className="news-detail">
      <header className="news-detail__header">
        <Link href="/" className="news-detail__back">
          <ArrowLeft size={20} />
          <span>Ana sayfaya dön</span>
        </Link>
        <h1 className="news-detail__title">{news.title}</h1>
        <p className="news-detail__meta">
          {news.time} · {news.category}
        </p>
        <p className="news-detail__content">{news.content}</p>
      </header>

      <div className="feed-list">
        {(news.relatedPosts as RelatedPost[]).map((post) => (
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
                <span className="feed-post__name">{post.user.name}</span>
                <span className="feed-post__meta">
                  @{post.user.username}
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
                  aria-label="Yanıtla"
                >
                  <MessageCircle size={18} />
                  <span>0</span>
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
                  aria-label="Görüntülenme"
                >
                  <BarChart2 size={18} />
                  <span>—</span>
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
    </div>
  );
}
