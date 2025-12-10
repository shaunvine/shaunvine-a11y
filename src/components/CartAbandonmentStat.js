// src/components/CartAbandonmentStat.js
import React from "react"

const CartAbandonmentStat = () => {
  return (
    <div className="stat-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 200"
        role="img"
        aria-labelledby="cartAbandonTitle cartAbandonDesc"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Card background */}
        <rect
          x="8"
          y="8"
          width="304"
          height="184"
          rx="16"
          ry="16"
          fill="#FEF3C7" /* soft warm background */
          stroke="#B45309" /* strong amber border */
          strokeWidth="1.5"
        />

        {/* Left: minimalist browser + user icon */}
        <g transform="translate(24, 38)">
          {/* Browser window */}
          <rect
            x="0"
            y="0"
            width="120"
            height="80"
            rx="8"
            ry="8"
            fill="#FFFBEB"
            stroke="#B45309"
            strokeWidth="2"
          />
          {/* Browser top bar */}
          <rect
            x="0"
            y="0"
            width="120"
            height="18"
            rx="8"
            ry="8"
            fill="#FCD34D"
          />
          {/* Close dot */}
          <circle cx="12" cy="9" r="3" fill="#B45309" />
          {/* Simple barrier icon (exclamation) */}
          <circle cx="60" cy="46" r="16" fill="#F97316" />
          <rect
            x="59"
            y="37"
            width="2"
            height="12"
            rx="1"
            ry="1"
            fill="#FEF3C7"
          />
          <circle cx="60" cy="53" r="1.8" fill="#FEF3C7" />

          {/* Stylized user leaving (to the right) */}
          {/* Head */}
          <circle cx="100" cy="94" r="7" fill="#B45309" />
          {/* Body */}
          <path
            d="M100 101 L100 118"
            fill="none"
            stroke="#B45309"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Arms */}
          <path
            d="M100 106 L92 112"
            fill="none"
            stroke="#B45309"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M100 106 L108 110"
            fill="none"
            stroke="#B45309"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Legs */}
          <path
            d="M100 118 L92 132"
            fill="none"
            stroke="#B45309"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M100 118 L110 132"
            fill="none"
            stroke="#B45309"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Right: donut chart + text */}
        <g transform="translate(160, 40)">
          {/* Donut chart */}
          <circle
            cx="40"
            cy="40"
            r="30"
            fill="none"
            stroke="#FDE68A" /* light ring base */
            strokeWidth="10"
          />
          {/* 71% arc */}
          <path
            d="
              M 40 10
              A 30 30 0 1 1 13 58
            "
            fill="none"
            stroke="#B45309"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Center dot */}
          <circle
            cx="40"
            cy="40"
            r="6"
            fill="#FEF3C7"
            stroke="#B45309"
            strokeWidth="2"
          />

          {/* Main percentage */}
          <text
            x="88"
            y="42"
            fill="#B45309"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="32"
            fontWeight="700"
          >
            71%
          </text>
        </g>

        {/* Text block under the chart */}
        <g transform="translate(160, 100)">
          <text
            x="0"
            y="0"
            fill="#78350F"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="11"
            letterSpacing="1"
          >
            ACCESS BARRIERS COST USERS
          </text>

          <text
            x="0"
            y="22"
            fill="#78350F"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="12"
          >
            About 71% of users with access needs
          </text>
          <text
            x="0"
            y="38"
            fill="#78350F"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="12"
          >
            leave immediately when they hit
          </text>
          <text
            x="0"
            y="54"
            fill="#78350F"
            fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
            fontSize="12"
          >
            accessibility barriers.
          </text>
        </g>
      </svg>
    </div>
  )
}

export default CartAbandonmentStat
