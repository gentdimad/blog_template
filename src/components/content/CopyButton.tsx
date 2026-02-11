import { useState } from 'react'

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="button"
      aria-live="polite"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {
            console.error('Failed to copy text');
        }
      }}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
