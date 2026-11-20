import React from "react"

// The 5 x 4 Bauhaus tile grid (5 columns, 4 rows) from the approved design.
// Purely decorative, so the whole grid is hidden from assistive technology.
// bg = tile background, fg = the shape drawn on it (both palette color names),
// shape = which shape. Styling lives in main.css (.hero-tile--*).
// Listed row by row, 5 per row. No two neighbouring tiles (side by side or
// above and below) share a shape, a background or a shape color.
const TILES = [
  // Row 1
  { bg: "cream", fg: "terracotta", shape: "quarter-br" },
  { bg: "blue", fg: "mustard", shape: "circle" },
  { bg: "sage", fg: "sage", shape: "plain" },
  { bg: "cream", fg: "blue", shape: "half" },
  { bg: "terracotta", fg: "cream", shape: "circle" },

  // Row 2
  { bg: "mustard", fg: "blue", shape: "tri" },
  { bg: "pink", fg: "terracotta", shape: "quarter-tl" },
  { bg: "cream", fg: "mustard", shape: "circle" },
  { bg: "blue", fg: "pink", shape: "quarter-tr" },
  { bg: "sage", fg: "blue", shape: "half" },

  // Row 3
  { bg: "terracotta", fg: "cream", shape: "half" },
  { bg: "blue", fg: "blue", shape: "plain" },
  { bg: "mustard", fg: "cream", shape: "quarter-bl" },
  { bg: "cream", fg: "terracotta", shape: "tri" },
  { bg: "mustard", fg: "cream", shape: "quarter-tl" },

  // Row 4
  { bg: "sage", fg: "blue", shape: "circle" },
  { bg: "cream", fg: "mustard", shape: "quarter-tr" },
  { bg: "pink", fg: "blue", shape: "half" },
  { bg: "terracotta", fg: "mustard", shape: "circle" },
  { bg: "pink", fg: "terracotta", shape: "tri" },
]

const HeroPattern = () => (
  <div className="hero-pattern" aria-hidden="true">
    {TILES.map((tile, index) => (
      <div
        // The list is fixed and never reordered, so the index is a safe key.
        key={index}
        className={`hero-tile hero-tile--bg-${tile.bg} hero-tile--fg-${tile.fg} hero-tile--${tile.shape}`}
      >
        <span className="hero-tile__shape" />
      </div>
    ))}
  </div>
)

export default HeroPattern
