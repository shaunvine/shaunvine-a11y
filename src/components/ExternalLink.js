import React from "react"
import { FiExternalLink } from "react-icons/fi"

// A link that opens in a new tab, with a small visible icon to warn sighted
// users, and "| Opens in new tab" in its accessible name for screen readers.
//
// Props:
//   href, className  as for a normal <a>
//   leadingIcon      optional brand icon shown before the text (LinkedIn)
//   ariaLabel        the full accessible name. Needed when the visible content
//                    is an icon or rich text rather than a plain string; it
//                    must START with the visible text (WCAG 2.5.3 Label in Name)
//                    and end with "| Opens in new tab".
//
// NEXTJS-MIGRATION: swap this for next/link only if the target is internal;
// external links stay a plain <a>, so this component should carry over as is.

const NEW_TAB = "Opens in new tab"
const WORD_JOINER = "⁠" // invisible: forbids a line break at this point

const Icon = () => (
  <FiExternalLink className="external-link__icon" aria-hidden="true" />
)

const ExternalLink = ({
  href,
  children,
  className,
  ariaLabel,
  leadingIcon,
  ...rest
}) => {
  const isText = typeof children === "string"
  const label = ariaLabel || (isText ? `${children} | ${NEW_TAB}` : undefined)

  let content
  if (isText) {
    // Keep the last word and the icon together so the icon can never sit
    // alone at the start of a new line.
    const trimmed = children.trimEnd()
    const lastSpace = trimmed.lastIndexOf(" ")
    const head = trimmed.slice(0, lastSpace + 1)
    const lastWord = trimmed.slice(lastSpace + 1)
    content = (
      <>
        {head}
        <span className="external-link__nowrap">
          {lastWord}
          <Icon />
        </span>
      </>
    )
  } else {
    // Rich text or an icon: we can't split a "last word", so a word joiner
    // inside a nowrap span glues the icon to whatever comes before it.
    content = (
      <>
        {children}
        <span className="external-link__nowrap">
          {WORD_JOINER}
          <Icon />
        </span>
      </>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
      {...rest}
    >
      {leadingIcon}
      {content}
    </a>
  )
}

export default ExternalLink
