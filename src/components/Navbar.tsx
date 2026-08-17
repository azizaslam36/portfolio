import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu, type NavItem } from './MobileMenu';
import { useActiveSection } from '../hooks/useActiveSection';

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'github', label: 'GitHub' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(navItems.map((n) => n.id));
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const goToSection = (id: string) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-ink-900/10 dark:border-white/10 bg-paper-50/80 dark:bg-navy-950/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight text-ink-900 dark:text-paper-100"
        >
          Aziz<span className="text-electric dark:text-lime">.</span>dev
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className={`rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
                isHome && activeId === item.id
                  ? 'text-electric dark:text-lime'
                  : 'text-ink-700 dark:text-paper-100/70 hover:text-electric dark:hover:text-lime'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/resume/Mohd-Aziz-Aslam-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center rounded-full border border-electric dark:border-lime px-4 py-2 font-mono text-xs uppercase tracking-wide text-electric dark:text-lime hover:bg-electric hover:text-white dark:hover:bg-lime dark:hover:text-navy-950 transition-colors"
          >
            Resume
          </a>
          <ThemeToggle className="hidden md:inline-flex" />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-paper-100 md:hidden"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
        activeId={activeId}
        onNavigate={goToSection}
      />
    </header>
  );
}
