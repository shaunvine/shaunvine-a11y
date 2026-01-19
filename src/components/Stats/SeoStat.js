// src/components/SeoStat.js
import React from "react"

const SeoStat = () => {
  return (
    <div className="stat-card">
      <div className="stat-icon" aria-hidden="true">
        <figure className="stat-figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 220" // tightened to reduce extra whitespace
            aria-hidden="true" // Hide from AT
            focusable="false" // Avoid keyboard focus in some browsers
          >
            {/* Card background */}
            <rect
              className="bg-card"
              x="4"
              y="4"
              width="312"
              height="192"
              rx="16"
              ry="16"
            />
            <g id="SEO">
              <g id="Text">
                <text
                  id="H1&#226;&#128;&#147;H6 Semantic HTML Alt-text"
                  fill="#B4530B"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Atkinson Hyperlegible"
                  fontSize="10"
                  letterSpacing="0em"
                >
                  <tspan x="120" y="140.725">
                    H1&#x2013;H6&#10;
                  </tspan>
                  <tspan x="120" y="152.725">
                    Semantic HTML&#10;
                  </tspan>
                  <tspan x="120" y="164.725">
                    Alt-text
                  </tspan>
                </text>
                <g id="80% of top-ranking pages use SEO-friendly structure.">
                  <text
                    fill="#383599"
                    xmlSpace="preserve"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Atkinson Hyperlegible"
                    fontSize="24"
                    letterSpacing="0em"
                  >
                    <tspan x="91.0938" y="25.04">
                      {" "}
                    </tspan>
                  </text>
                  <text
                    fill="#B4530B"
                    xmlSpace="preserve"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Atkinson Hyperlegible"
                    fontSize="20"
                    letterSpacing="0em"
                  >
                    <tspan x="97.8203" y="25.04">
                      of top-ranking pages{" "}
                    </tspan>
                    <tspan x="37" y="49.04">
                      use SEO-friendly structure.
                    </tspan>
                  </text>
                  <text
                    fill="#383599"
                    xmlSpace="preserve"
                    style={{ whiteSpace: "pre" }}
                    fontFamily="Atkinson Hyperlegible"
                    fontSize="24"
                    fontWeight="bold"
                    letterSpacing="0em"
                  >
                    <tspan x="37" y="25.04">
                      80%
                    </tspan>
                  </text>
                </g>
                <text
                  id="80%"
                  fill="#383599"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Atkinson Hyperlegible"
                  fontSize="40"
                  fontWeight="bold"
                  letterSpacing="0em"
                >
                  <tspan x="110" y="120.9">
                    80%
                  </tspan>
                </text>
              </g>
              <g id="Circle">
                <path
                  id="Circle_2"
                  d="M155 67C187.585 67 214 93.4152 214 126C214 158.585 187.585 185 155 185C122.415 185 96 158.585 96 126C96 93.4152 122.415 67 155 67Z"
                  stroke="#FF9B21"
                  strokeOpacity="0.26"
                  strokeWidth="10"
                  fill="none"
                />
                <path
                  id="Subtract"
                  d="M155.027 62L155.15 72.001C155.1 72.0008 155.05 72 155 72C125.177 72 101 96.1766 101 126C101 155.823 125.177 180 155 180C184.823 180 209 155.823 209 126C209 116.074 206.321 106.773 201.647 98.7812L210.077 93.3867C215.745 102.938 219 114.089 219 126L218.995 126.827C218.552 161.792 190.07 190 155 190L154.173 189.995C119.483 189.556 91.4443 161.517 91.0049 126.827L91 126C91 90.6538 119.654 62 155 62H155.027Z"
                  fill="#FF9A21"
                />
              </g>
            </g>
          </svg>
          {/* Accessible textual equivalent + source */}
          <figcaption>
            <span className="sr-only">
              Eighty percent of top-ranking pages use SEO-friendly structure.
            </span>
            <span aria-hidden="true" className="stat-source">
              Source: Backlinko / Google Search Central
            </span>
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export default SeoStat
