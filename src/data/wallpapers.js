// src/data/wallpapers.js
// Shared data used by Wallpapers.jsx and WallpaperDetail.jsx

export const categories = ['All', 'Abstract', 'Nature', 'City', 'Dark', 'Minimal', 'Space', 'Architecture']
export const resolutions = ['All', '4K', '2K', '1080p', 'Mobile']

const authors = ['mia.lens', 'k.visuals', 'greyform', 'sunlit.co', 'rawframes', 'coldpixel']
const tags = [
  ['abstract', 'gradient', 'fluid'],
  ['nature', 'green', 'organic'],
  ['city', 'urban', 'night'],
  ['dark', 'moody', 'texture'],
  ['minimal', 'clean', 'white'],
  ['space', 'cosmos', 'deep'],
  ['architecture', 'lines', 'structure'],
  ['landscape', 'aerial', 'fog'],
]

export const wallpapers = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  category: categories[1 + (i % (categories.length - 1))],
  resolution: resolutions[1 + (i % (resolutions.length - 1))],
  likes: 400 + ((i * 1337) % 9000),
  downloads: 1000 + ((i * 2741) % 20000),
  views: 5000 + ((i * 3193) % 80000),
  author: authors[i % authors.length],
  authorFollowers: 1200 + ((i * 997) % 40000),
  tags: tags[i % tags.length],
  width: [3840, 2560, 1920, 1080][i % 4],
  height: [2160, 1440, 1080, 1920][i % 4],
}))

export const fmt = (n) => n >= 1000 ? (n / 1000).toFixed(1) + 'k' : n