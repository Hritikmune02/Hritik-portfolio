"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/education", label: "Education" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },     // <— add this
];


export default function Navbar() {
  const path = usePathname();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold shadow-lg text-black">
          HM
        </div>
        <div>
          <div className="font-extrabold">Hritik Mune</div>
          <div className="text-xs text-slate-400">Software Developer</div>
        </div>
      </div>

      <nav className="flex gap-2 text-sm">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-2 rounded-xl font-semibold transition ${
              path === item.href
                ? "bg-slate-900 text-white"
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
