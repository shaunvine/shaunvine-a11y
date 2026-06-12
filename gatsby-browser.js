export const shouldUpdateScroll = ({ routerProps }) => {
  const { hash } = routerProps.location
  if (hash) {
    return hash
  }
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })
  return false
}
