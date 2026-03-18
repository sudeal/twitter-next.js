"use client";

import { whoToFollowData } from "@/data/whoToFollow";

export default function WhoToFollow() {
  return (
    <div className="who-to-follow">
      <h3 className="who-to-follow__title">Who to follow</h3>
      <ul className="who-to-follow__list">
        {whoToFollowData.map((user) => (
          <li key={user.id} className="who-to-follow__item-wrapper">
            <div className="who-to-follow__item">
              <a href="#" className="who-to-follow__user">
                <span className="who-to-follow__avatar-wrap">
                  <img
                    src={user.avatar}
                    alt=""
                    width={40}
                    height={40}
                    className="who-to-follow__avatar"
                  />
                </span>
                <span className="who-to-follow__names">
                  <span className="who-to-follow__name">{user.name}</span>
                  <span className="who-to-follow__username">{user.username}</span>
                </span>
              </a>
              <button type="button" className="who-to-follow__btn">
                Follow
              </button>
            </div>
          </li>
        ))}
      </ul>
      <a href="#" className="who-to-follow__show-more">
        Show more
      </a>
    </div>
  );
}
