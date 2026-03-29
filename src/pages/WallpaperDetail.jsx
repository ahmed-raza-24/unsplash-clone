import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { wallpapers, fmt } from '../data/wallpapers'
import './WallpaperDetail.css'

const WallpaperDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const wallpaper = wallpapers.find(w => w.id === Number(id))

  if (!wallpaper) {
    return (
      <div className="wd-notfound">
        <p>Wallpaper not found.</p>
        <button className="wd-back-btn" onClick={() => navigate('/Wallpapers')}>← Back</button>
      </div>
    )
  }

  const related = wallpapers
    .filter(w => w.category === wallpaper.category && w.id !== wallpaper.id)
    .slice(0, 6)

  const w = wallpaper

  return (
    <div className="wd-page">

      {/* Back button */}
      <button className="wd-back" onClick={() => navigate('/Wallpapers')}>
        <span className="wd-back__arrow">←</span>
        <span>Wallpapers</span>
      </button>

      {/* Main layout */}
      <div className="wd-layout">

        {/* Left — Wallpaper preview */}
        <div className="wd-preview">
          <div className="wd-preview__img">
            {/* Resolution badge */}
            <span className="wd-res-badge">{w.resolution} · {w.width}×{w.height}</span>
          </div>

          {/* Action bar below image */}
          <div className="wd-actions">
            <div className="wd-actions__left">
              <button
                className={`wd-action-btn ${liked ? 'wd-action-btn--active' : ''}`}
                onClick={() => setLiked(l => !l)}
              >
                <span>{liked ? '♥' : '♡'}</span>
                <span>{fmt(w.likes + (liked ? 1 : 0))}</span>
              </button>
              <button
                className={`wd-action-btn ${saved ? 'wd-action-btn--active' : ''}`}
                onClick={() => setSaved(s => !s)}
              >
                <span>{saved ? '🔖' : '🔖'}</span>
                <span>{saved ? 'Saved' : 'Save'}</span>
              </button>
              <button className="wd-action-btn">
                <span>↗</span>
                <span>Share</span>
              </button>
            </div>
            <button className="wd-download-btn">
              ↓ Free Download
            </button>
          </div>
        </div>

        {/* Right — Info panel */}
        <div className="wd-info">

          {/* Author */}
          <div className="wd-author">
            <div className="wd-author__avatar">
              {w.author[0].toUpperCase()}
            </div>
            <div className="wd-author__text">
              <span className="wd-author__name">@{w.author}</span>
              <span className="wd-author__followers">{fmt(w.authorFollowers)} followers</span>
            </div>
            <button className="wd-follow-btn">Follow</button>
          </div>

          <div className="wd-divider" />

          {/* Stats */}
          <div className="wd-stats">
            <div className="wd-stat">
              <span className="wd-stat__value">{fmt(w.views)}</span>
              <span className="wd-stat__label">Views</span>
            </div>
            <div className="wd-stat">
              <span className="wd-stat__value">{fmt(w.downloads)}</span>
              <span className="wd-stat__label">Downloads</span>
            </div>
            <div className="wd-stat">
              <span className="wd-stat__value">{fmt(w.likes)}</span>
              <span className="wd-stat__label">Likes</span>
            </div>
          </div>

          <div className="wd-divider" />

          {/* Details */}
          <div className="wd-details">
            <div className="wd-detail-row">
              <span className="wd-detail-row__label">Category</span>
              <span className="wd-detail-row__value">{w.category}</span>
            </div>
            <div className="wd-detail-row">
              <span className="wd-detail-row__label">Resolution</span>
              <span className="wd-detail-row__value">{w.width} × {w.height}</span>
            </div>
            <div className="wd-detail-row">
              <span className="wd-detail-row__label">Quality</span>
              <span className="wd-detail-row__value">{w.resolution}</span>
            </div>
          </div>

          <div className="wd-divider" />

          {/* Tags */}
          <div className="wd-tags-section">
            <span className="wd-tags-label">Tags</span>
            <div className="wd-tags">
              {w.tags.map(tag => (
                <span key={tag} className="wd-tag">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="wd-divider" />

          {/* Download options */}
          <div className="wd-download-section">
            <span className="wd-tags-label">Download size</span>
            <div className="wd-download-opts">
              {['Original', 'Large', 'Medium', 'Small'].map(size => (
                <button key={size} className="wd-size-btn">{size}</button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Related wallpapers */}
      {related.length > 0 && (
        <div className="wd-related">
          <h2 className="wd-related__title">Related in {w.category}</h2>
          <div className="wd-related__grid">
            {related.map(r => (
              <div
                key={r.id}
                className="wd-related__card"
                onClick={() => navigate(`/wallpaper/${r.id}`)}
              >
                <div className="wd-related__img" />
                <span className="wd-related__res">{r.resolution}</span>
                <div className="wd-related__hover">
                  <span className="wd-related__author">@{r.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default WallpaperDetail