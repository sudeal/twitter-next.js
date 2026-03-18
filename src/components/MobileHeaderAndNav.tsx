"use client";

import { useState } from "react";
import {
  Home,
  Search,
  Bell,
  Mail,
  Sparkles,
  X,
  User,
  Star,
  PlaySquare,
  Users,
  Bookmark,
  List,
  Mic2,
  Rocket,
  Moon,
  Settings,
  CircleHelp,
} from "lucide-react";

export default function MobileHeaderAndNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Üst bar (sadece mobilde görünür) */}
      <header className="mobile-header">
        <div className="mobile-header__left">
          <button
            type="button"
            className="mobile-header__avatar mobile-header__avatar-btn"
            aria-label="Profil menüsünü aç"
            onClick={() => setOpen(true)}
          >
            SA
          </button>
        </div>
        <div className="mobile-header__logo">𝕏</div>
        <div className="mobile-header__right" />
      </header>

      {/* Alt navbar (sadece mobilde görünür) */}
      <nav className="mobile-bottom-nav" aria-label="Ana gezinme">
        <button
          type="button"
          className="mobile-bottom-nav__btn mobile-bottom-nav__btn--active"
          aria-label="Home"
        >
          <Home size={24} />
        </button>
        <button
          type="button"
          className="mobile-bottom-nav__btn"
          aria-label="Search"
        >
          <Search size={24} />
        </button>
        <button
          type="button"
          className="mobile-bottom-nav__btn"
          aria-label="Grok"
        >
          <Sparkles size={24} />
        </button>
        <button
          type="button"
          className="mobile-bottom-nav__btn"
          aria-label="Notifications"
        >
          <Bell size={24} />
        </button>
        <button
          type="button"
          className="mobile-bottom-nav__btn"
          aria-label="Messages"
        >
          <Mail size={24} />
        </button>
      </nav>

      {/* Profil drawer overlay + panel (sadece mobilde) */}
      <div
        className={`mobile-side-drawer-overlay ${
          open ? "mobile-side-drawer-overlay--open" : ""
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <aside
        className={`mobile-side-drawer ${
          open ? "mobile-side-drawer--open" : ""
        }`}
        aria-label="Profil menüsü"
      >
        <div className="mobile-side-drawer__header">
          <button
            type="button"
            className="mobile-side-drawer__close"
            aria-label="Kapat"
            onClick={() => setOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-side-drawer__profile">
          <div className="mobile-side-drawer__avatar">SA</div>
          <div className="mobile-side-drawer__profile-info">
            <p className="mobile-side-drawer__name">Sude Alkan</p>
            <p className="mobile-side-drawer__handle">@SudeAlkn02</p>
          </div>
        </div>

        <nav className="mobile-side-drawer__menu" aria-label="Profil gezinme">
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <User size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Profil</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Star size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Premium</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <PlaySquare size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Video</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Users size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Topluluklar</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Bookmark size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Yer işaretleri</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <List size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Listeler</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Mic2 size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Sohbet Odaları</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Rocket size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">
              İçerik Üreticisi
            </span>
          </button>
        </nav>

        <div className="mobile-side-drawer__footer">
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Moon size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Grok&apos;u indir</span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <Settings size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">
              Ayarlar ve gizlilik
            </span>
          </button>
          <button type="button" className="mobile-side-drawer__item">
            <span className="mobile-side-drawer__item-icon">
              <CircleHelp size={20} />
            </span>
            <span className="mobile-side-drawer__item-label">Yardım Merkezi</span>
          </button>
        </div>
      </aside>
    </>
  );
}

