export function CPLogo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <div className="relative">
      <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Main background with gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#93c5fd" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring */}
        <circle cx="25" cy="25" r="23" fill="url(#bgGradient)" stroke="#1d4ed8" strokeWidth="1" />

        {/* Inner decorative ring */}
        <circle cx="25" cy="25" r="19" fill="none" stroke="url(#accentGradient)" strokeWidth="0.5" opacity="0.6" />

        {/* Security shield background */}
        <path
          d="M25 8 L35 12 L35 22 C35 28 30 32 25 35 C20 32 15 28 15 22 L15 12 Z"
          fill="rgba(255,255,255,0.1)"
          stroke="url(#accentGradient)"
          strokeWidth="0.5"
        />

        {/* CP Letters with better typography */}
        <text
          x="25"
          y="30"
          textAnchor="middle"
          className="fill-white font-bold"
          style={{
            fontSize: "16px",
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: "800",
            letterSpacing: "1px",
          }}
          filter="url(#glow)"
        >
          CP
        </text>

        {/* Corner tech elements */}
        <g opacity="0.8">
          {/* Top left */}
          <path d="M8 8 L12 8 L12 10 L10 10 L10 12 L8 12 Z" fill="url(#accentGradient)" />
          <circle cx="6" cy="6" r="1" fill="url(#accentGradient)" />

          {/* Top right */}
          <path d="M42 8 L38 8 L38 10 L40 10 L40 12 L42 12 Z" fill="url(#accentGradient)" />
          <circle cx="44" cy="6" r="1" fill="url(#accentGradient)" />

          {/* Bottom left */}
          <path d="M8 42 L12 42 L12 40 L10 40 L10 38 L8 38 Z" fill="url(#accentGradient)" />
          <circle cx="6" cy="44" r="1" fill="url(#accentGradient)" />

          {/* Bottom right */}
          <path d="M42 42 L38 42 L38 40 L40 40 L40 38 L42 38 Z" fill="url(#accentGradient)" />
          <circle cx="44" cy="44" r="1" fill="url(#accentGradient)" />
        </g>

        {/* Central tech dots */}
        <g opacity="0.7">
          <circle cx="25" cy="15" r="1.5" fill="#60a5fa" />
          <circle cx="35" cy="25" r="1.5" fill="#60a5fa" />
          <circle cx="25" cy="35" r="1.5" fill="#60a5fa" />
          <circle cx="15" cy="25" r="1.5" fill="#60a5fa" />
        </g>

        {/* Subtle circuit lines */}
        <g opacity="0.4" stroke="#93c5fd" strokeWidth="0.5" fill="none">
          <path d="M25 15 L25 12" />
          <path d="M35 25 L38 25" />
          <path d="M25 35 L25 38" />
          <path d="M15 25 L12 25" />
        </g>

        {/* Electronic elements */}
        <g opacity="0.6">
          <rect x="23" y="5" width="4" height="2" rx="1" fill="url(#accentGradient)" />
          <rect x="43" y="23" width="2" height="4" rx="1" fill="url(#accentGradient)" />
          <rect x="23" y="43" width="4" height="2" rx="1" fill="url(#accentGradient)" />
          <rect x="5" y="23" width="2" height="4" rx="1" fill="url(#accentGradient)" />
        </g>
      </svg>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
    </div>
  )
}
