/*** Extracts a plain text version of the Contentful rich text to use as the meta description for individual Project pages */
export const extractTextFromRaw = raw => {
    try {
      const parsed = JSON.parse(raw)
      return parsed.content
        .map(block =>
          block.content?.map(line => line.value).join(" ")
        )
        .join(" ")
        .replace(/\s+/g, " ")
        .trim()
    } catch (error) {
      console.warn("Failed to extract text from raw rich text:", error)
      return ""
    }
  }
  
  // Extract a summary version capped at N characters (default 160)
  export const extractSummaryFromRaw = (raw, length = 160) => {
    const fullText = extractTextFromRaw(raw)
    return fullText.length > length
      ? fullText.slice(0, length).trimEnd() + "…"
      : fullText
  }
  