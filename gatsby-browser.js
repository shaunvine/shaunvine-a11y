export const shouldUpdateScroll = () => {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })
  return false
}
