// Picks a column count so the last row of a card grid is never a single
// orphan card. Prefers a count that divides the cards evenly, then one that
// leaves at least two cards in the last row. Returns null if nothing suits.
const pickColumns = (count, allowed) => {
  const fits = allowed.filter(c => c <= count)
  return (
    fits.find(c => count % c === 0) ?? fits.find(c => count % c !== 1) ?? null
  )
}

// Returns the two classes that main.css uses ("Project grid" section):
// --md-N applies from 48em, --lg-N from 75em. maxColumns is the widest grid
// allowed from 75em: 3 beside the Work page sidebar, 4 at full page width.
export const getGridClasses = (count, maxColumns = 3) => {
  // From 48em: 2 columns, or 1 if 2 would leave an orphan (3, 5, 7 cards).
  const midColumns = pickColumns(count, [2]) ?? 1
  // From 75em: the widest allowed count that leaves no orphan. If none does,
  // take the widest that fits rather than dropping to one column.
  const largeAllowed = [4, 3, 2].filter(c => c <= maxColumns)
  const largeColumns =
    pickColumns(count, largeAllowed) ??
    largeAllowed.find(c => c <= count) ??
    1
  return `projects-list--md-${midColumns} projects-list--lg-${largeColumns}`
}
