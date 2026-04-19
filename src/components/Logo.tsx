import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
      {/* Folha SVG */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="18" cy="18" rx="13" ry="16" fill="#22c55e"/>
        <line x1="18" y1="4" x2="18" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="18" y1="13" x2="29" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="18" y1="13" x2="7" y2="19" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="18" y1="20" x2="27" y2="26" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="18" y1="20" x2="9" y2="26" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
      {/* Texto */}
      <span style={{ fontWeight: 900, fontSize: '1.4rem', color: '#111827', letterSpacing: '-0.5px', fontFamily: 'inherit' }}>
        Nutry<span style={{ color: '#22c55e' }}>.life</span>
      </span>
    </Link>
  );
}
