export default function WireConnector({ height = 100 }: { height?: number }) {
  return (
    <div className="relative w-full flex justify-center overflow-hidden py-8">
      <div className="relative w-1 flex flex-col items-center" style={{ height: `${height}px` }}>
        {/* Vertical wire line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

        {/* Flowing energy dots */}
        {[0, 0.3, 0.6].map((delay, idx) => (
          <div
            key={idx}
            className="absolute w-3 h-3 bg-accent rounded-full animate-pulse-glow"
            style={{
              top: `${delay * 100}%`,
              animation: `flow-down 2s ease-in-out infinite`,
              animationDelay: `${delay}s`,
            }}
          />
        ))}

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent blur-xl" />
      </div>
    </div>
  )
}
