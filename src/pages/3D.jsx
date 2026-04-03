import './3D.css'

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const styles = [
  'All', 'Abstract', 'Architecture', 'Character', 'Product', 'Nature', 'Sci-Fi', 'Motion'
]

const software = ['All', 'Blender', 'Cinema 4D', 'Houdini', 'Unreal', 'Octane']

const renders = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    'Liquid Chrome Sphere', 'Neon City Scape', 'Abstract Fluid Loop',
    'Geometric Storm', 'Glass Architecture', 'Cosmic Drift',
    'Product Viz Pro', 'Character Study', 'Volumetric Light',
    'Crystal Lattice', 'Procedural Terrain', 'Motion Blur Wave',
    'Metallic Torus', 'Deep Space Rift', 'Caustic Water',
    'Bio-Morphic Form', 'Urban Fragment', 'Soft Body Sim',
    'Iridescent Shell', 'Wire Frame City'
  ][i],
  style: styles[1 + (i % (styles.length - 1))],
  software: software[1 + (i % (software.length - 1))],
  likes: 300 + ((i * 1553) % 12000),
  views: 2000 + ((i * 3701) % 90000),
  author: ['poly.works', 'void.render', 'mesh.lab', 'ctrl.studio', 'neon.form', 'depth.xyz'][i % 6],
  isPro: i % 5 === 0,
  isAnimated: i % 4 === 1,
}))

const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n

// Varied aspect ratios for visual interest
const aspects = ['1/1', '4/3', '3/4', '16/9', '1/1', '3/4', '4/3', '1/1', '16/9', '3/4']

const RenderCard = ({ r }) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)
  const aspect = aspects[r.id % aspects.length]

  return (
    <div
      className="rd-card"
      style={{ aspectRatio: aspect }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/render/${r.id}`)}
    >
      {/* Shimmer bg */}
      <div className="rd-card__bg" />

      {/* Badges */}
      <div className="rd-card__badges">
        {r.isPro && <span className="rd-badge rd-badge--pro">PRO</span>}
        {r.isAnimated && <span className="rd-badge rd-badge--anim">● LOOP</span>}
      </div>

      {/* Software tag */}
      <span className="rd-card__sw">{r.software}</span>

      {/* Hover overlay */}
      <div className={`rd-card__overlay ${hovered ? 'rd-card__overlay--on' : ''}`}>
        <div className="rd-card__info">
          <p className="rd-card__title">{r.title}</p>
          <span className="rd-card__author">@{r.author}</span>
        </div>
        <div className="rd-card__meta">
          <span>♥ {fmt(r.likes)}</span>
          <span>👁 {fmt(r.views)}</span>
        </div>
      </div>
    </div>
  )
}

// Spotlight — large hero picks
const SpotlightCard = ({ r }) => {
  const navigate = useNavigate()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`rd-spotlight ${hovered ? 'rd-spotlight--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => navigate(`/render/${r.id}`)}
    >
      <div className="rd-spotlight__img" />
      <div className="rd-spotlight__body">
        <div>
          <p className="rd-spotlight__title">{r.title}</p>
          <span className="rd-spotlight__author">@{r.author}</span>
        </div>
        <div className="rd-spotlight__right">
          <span className="rd-spotlight__sw">{r.software}</span>
          <div className="rd-spotlight__stats">
            <span>♥ {fmt(r.likes)}</span>
            <span>👁 {fmt(r.views)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const ThreeD = () => {
  const [activeStyle, setActiveStyle] = useState('All')
  const [activeSw, setActiveSw] = useState('All')
  const [view, setView] = useState('grid') // 'grid' | 'list'

  const filtered = renders.filter(r =>
    (activeStyle === 'All' || r.style === activeStyle) &&
    (activeSw === 'All' || r.software === activeSw)
  )

  const spotlights = filtered.slice(0, 2)
  const rest = filtered.slice(2)

  return (
    <div className="rd-page">

      {/* ── Header ── */}
      <div className="rd-header">
        <div>
          <h1 className="rd-title">3D Renders</h1>
          <p className="rd-subtitle">Curated CGI, motion design & 3D artwork</p>
        </div>
        <div className="rd-header__right">
          {/* View toggle */}
          <div className="rd-toggle">
            <button
              className={`rd-toggle__btn ${view === 'grid' ? 'rd-toggle__btn--active' : ''}`}
              onClick={() => setView('grid')}
              title="Grid view"
            >
              ⊞
            </button>
            <button
              className={`rd-toggle__btn ${view === 'list' ? 'rd-toggle__btn--active' : ''}`}
              onClick={() => setView('list')}
              title="List view"
            >
              ☰
            </button>
          </div>
          {/* Software filter */}
          <div className="rd-sw-filter">
            {software.map(s => (
              <button
                key={s}
                className={`rd-sw-btn ${activeSw === s ? 'rd-sw-btn--active' : ''}`}
                onClick={() => setActiveSw(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Style pills ── */}
      <div className="rd-styles">
        {styles.map(s => (
          <button
            key={s}
            className={`rd-style-pill ${activeStyle === s ? 'rd-style-pill--active' : ''}`}
            onClick={() => setActiveStyle(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rd-empty">No renders found</div>
      ) : view === 'list' ? (
        /* ── List view ── */
        <div className="rd-list">
          {filtered.map(r => <SpotlightCard key={r.id} r={r} />)}
        </div>
      ) : (
        <>
          {/* ── Spotlight row ── */}
          {spotlights.length > 0 && (
            <div className="rd-spotlight-row">
              {spotlights.map(r => (
                <div key={r.id} className="rd-spotlight-wrap">
                  <RenderCard r={r} />
                  <div className="rd-spotlight-wrap__label">
                    <span className="rd-spotlight-wrap__title">{r.title}</span>
                    <span className="rd-spotlight-wrap__author">@{r.author}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ── Divider ── */}
          {rest.length > 0 && (
            <div className="rd-section-label">
              <span>All Renders</span>
              <div className="rd-section-label__line" />
              <span className="rd-section-label__count">{rest.length}</span>
            </div>
          )}

          {/* ── Masonry grid ── */}
          <div className="rd-grid">
            {rest.map(r => (
              <div key={r.id} className="rd-grid__item">
                <RenderCard r={r} />
              </div>
            ))}
          </div>
        </>
      )}

    </div>
  )
}

export default ThreeD