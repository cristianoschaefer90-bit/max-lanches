import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 38, textClass: 'text-xl' },
    md: { icon: 48, textClass: 'text-2xl' },
    lg: { icon: 64, textClass: 'text-3xl' },
    xl: { icon: 96, textClass: 'text-5xl' }
  };

  const { icon, textClass } = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Visual Brand Badge styled after the official Max's Lanches logo */}
      <div
        style={{ width: icon, height: icon }}
        className="relative flex-shrink-0 rounded-full bg-gradient-to-b from-[#f97316] via-[#ea580c] to-[#c2410c] p-[2px] shadow-lg shadow-[#ea580c]/25 ring-2 ring-[#ea580c]/40 flex items-center justify-center overflow-hidden group"
      >
        <div className="w-full h-full rounded-full bg-[#161414] flex items-center justify-center relative overflow-hidden">
          {/* Subtle warm glow inside badge */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ea580c]/40 via-transparent to-[#fbbf24]/20" />

          {/* Detailed SVG burger, drink & fries icon matching Max's identity */}
          <svg
            viewBox="0 0 100 100"
            className="w-[88%] h-[88%] relative z-10 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Drink Cup (Left behind burger) */}
            <path d="M22 42 L26 72 C26.2 74 27.5 75 29.5 75 L39 75 C41 75 42.2 74 42.5 72 L45 42 Z" fill="#dc2626" />
            <path d="M20 40 L47 40 L46 43 L21 43 Z" fill="#f8fafc" />
            {/* Straw */}
            <path d="M33 40 L26 23 L22 23" stroke="#f8fafc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

            {/* French Fries Carton (Right behind burger) */}
            <path d="M57 44 L60 72 C60.2 74 61.5 75 63.5 75 L73 75 C75 75 76.2 74 76.5 72 L80 44 Z" fill="#dc2626" />
            {/* Fries Sticks */}
            <rect x="62" y="32" width="3.5" height="15" rx="1" fill="#fbbf24" transform="rotate(-8 62 32)" />
            <rect x="67" y="27" width="3.5" height="20" rx="1" fill="#f59e0b" />
            <rect x="72" y="30" width="3.5" height="17" rx="1" fill="#fbbf24" transform="rotate(7 72 30)" />
            <rect x="76" y="35" width="3" height="12" rx="1" fill="#f59e0b" transform="rotate(14 76 35)" />

            {/* Burger (Center Foreground) */}
            {/* Top Bun */}
            <path
              d="M32 50 C32 38 68 38 68 50 Z"
              fill="#f59e0b"
            />
            {/* Bun highlight */}
            <path d="M38 45 Q50 41 62 45" stroke="#fef3c7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <circle cx="43" cy="45" r="0.9" fill="#fef3c7" />
            <circle cx="50" cy="44" r="0.9" fill="#fef3c7" />
            <circle cx="57" cy="45" r="0.9" fill="#fef3c7" />

            {/* Lettuce */}
            <path
              d="M29 50 Q35 53 40 50 Q45 53 50 50 Q55 53 60 50 Q65 53 71 50 L70 53 Q65 55 60 52 Q55 55 50 52 Q45 55 40 52 Q35 55 30 52 Z"
              fill="#22c55e"
            />

            {/* Melted Cheese dripping */}
            <path
              d="M30 53 L70 53 L67 57 Q61 60 57 56 Q52 61 46 56 Q40 60 35 56 Z"
              fill="#eab308"
            />

            {/* Beef Patty */}
            <rect x="30" y="56" width="40" height="7" rx="3.5" fill="#78350f" />

            {/* Bottom Bun */}
            <path d="M32 63 L68 63 C68 68 64 70 50 70 C36 70 32 68 32 63 Z" fill="#d97706" />

            {/* Ribbon Banner at bottom */}
            <path
              d="M16 84 L22 75 L78 75 L84 84 L76 82 L50 85 L24 82 Z"
              fill="#1e1b18"
              stroke="#ea580c"
              strokeWidth="1.5"
            />
            <text
              x="50"
              y="82"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="8.5"
              fontWeight="900"
              fontFamily="Impact, sans-serif"
              letterSpacing="0.6"
            >
              MAX’S
            </text>
          </svg>
        </div>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-black tracking-wider text-white ${textClass}`}>
              MAX’S
            </span>
            <span className={`font-display font-black tracking-wider text-[#ea580c] ${textClass}`}>
              LANCHES
            </span>
          </div>
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#a39e93]">
            Três Coroas · RS
          </span>
        </div>
      )}
    </div>
  );
};
