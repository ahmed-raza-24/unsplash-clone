import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { wallpapers, categories, resolutions, fmt } from '../data/wallpapers'
import './Wallpapers.css'

const WallpaperCard = ({ w, featured }) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  const aspectMap = { 0: '16/10', 1: '4/3', 2: '16/9', 3: '3/2' }
  const aspect = featured ? '21/9' : aspectMap[w.id % 4]

  return (
    <div
      className={`wp-card ${featured ? 'wp-card--featured' : ''}`}
      style={{ aspectRatio: aspect }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/wallpaper/${w.id}`)}
    >
      <div className="wp-card__img" />
      <span className="wp-card__res">{w.resolution}</span>

      <div className={`wp-card__overlay ${hovered ? 'wp-card__overlay--visible' : ''}`}>
        <div className="wp-card__meta">
          <span className="wp-card__author">@{w.author}</span>
          <div className="wp-card__stats">
            <span>♥ {fmt(w.likes)}</span>
            <span>↓ {fmt(w.downloads)}</span>
          </div>
        </div>
        <div className="wp-card__actions">
          <button
            className="wp-btn wp-btn--ghost"
            onClick={e => { e.stopPropagation(); navigate(`/wallpaper/${w.id}`) }}
          >
            Preview
          </button>
          <button
            className="wp-btn wp-btn--solid"
            onClick={e => e.stopPropagation()}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  )
}

const Wallpapers = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeRes, setActiveRes] = useState('All')

  const filtered = wallpapers.filter(w =>
    (activeCategory === 'All' || w.category === activeCategory) &&
    (activeRes === 'All' || w.resolution === activeRes)
  )

  const [featured, ...rest] = filtered

  return (
    <div className="wp-page">

      {/* Header */}
      <div className="wp-header">
        <div className="wp-header__text">
          <h1 className="wp-title">Wallpapers</h1>
          <p className="wp-subtitle">High-resolution wallpapers for every screen</p>
        </div>
        <div className="wp-filter">
          {resolutions.map(r => (
            <button
              key={r}
              className={`wp-filter__btn ${activeRes === r ? 'wp-filter__btn--active' : ''}`}
              onClick={() => setActiveRes(r)}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Category pills */}
      <div className="wp-cats">
        {categories.map(c => (
          <button
            key={c}
            className={`wp-cat ${activeCategory === c ? 'wp-cat--active' : ''}`}
            onClick={() => setActiveCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="wp-empty">No wallpapers found</div>
      ) : (
        <>
          {featured && (
            <div className="wp-featured">
              <WallpaperCard w={featured} featured />
              <span className="wp-featured__label">Featured</span>
            </div>
          )}
          <div className="wp-grid">
            {rest.map(w => (
              <WallpaperCard key={w.id} w={w} />
            ))}
          </div>
        </>
      )}

    </div>
  )
}

export default Wallpapers