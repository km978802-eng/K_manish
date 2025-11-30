export default function Logo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="120" rx="20" fill="#0f172a" />
      <g transform="translate(18,18)">
        <path d="M6 64 L30 30 L50 48 L86 6" stroke="#60a5fa" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="0" y="76" width="84" height="8" rx="4" fill="#94a3b8" />
        <text x="4" y="22" fill="#e6edf3" fontSize="14" fontFamily="Arial">K_manish</text>
      </g>
    </svg>
  )
}
