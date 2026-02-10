'use client'

interface GiphyEmbedProps {
  gifId: string
  className?: string
  width?: number
  height?: number
}

export default function GiphyEmbed({ gifId, className = '', width = 200, height = 200 }: GiphyEmbedProps) {
  return (
    <div className={className} style={{ width, height }}>
      <iframe
        src={`https://giphy.com/embed/${gifId}`}
        width={width}
        height={height}
        frameBorder="0"
        className="border-0"
        allowFullScreen
        style={{ pointerEvents: 'none' }}
        title="GIF"
      />
    </div>
  )
}
