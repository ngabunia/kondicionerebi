const { useState } = React;

// ============ Inline Lucide-style icons (1.5px stroke) ============
const Icon = ({ d, size = 18, color = "currentColor", children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
       style={{ flex: "none" }}>
    {d ? <path d={d} /> : children}
  </svg>
);
const IconBolt    = (p) => <Icon {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const IconSearch  = (p) => <Icon {...p}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>;
const IconCheck   = (p) => <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>;
const IconArrow   = (p) => <Icon {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const IconChevR   = (p) => <Icon {...p}><polyline points="9 18 15 12 9 6"/></Icon>;
const IconClock   = (p) => <Icon {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;
const IconShield  = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></Icon>;
const IconLeaf    = (p) => <Icon {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></Icon>;
const IconWrench  = (p) => <Icon {...p}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></Icon>;
const IconTherm   = (p) => <Icon {...p}><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4 4 0 1 0 5 0Z"/></Icon>;
const IconFlask   = (p) => <Icon {...p}><path d="M9 3h6"/><path d="M10 3v6.5L4.4 19.2A2 2 0 0 0 6.1 22h11.8a2 2 0 0 0 1.7-2.8L14 9.5V3"/></Icon>;
const IconCalc    = (p) => <Icon {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="12" y1="10" x2="14" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="10" y2="14"/><line x1="12" y1="14" x2="14" y2="14"/><line x1="8" y1="18" x2="14" y2="18"/></Icon>;

Object.assign(window, { Icon, IconBolt, IconSearch, IconCheck, IconArrow, IconChevR, IconClock, IconShield, IconLeaf, IconWrench, IconTherm, IconFlask, IconCalc });
