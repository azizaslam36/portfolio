import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export type NavItem = { id: string; label: string };

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activeId: string;
  onNavigate: (id: string) => void;
};

export function MobileMenu({ isOpen, onClose, navItems, activeId, onNavigate }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on Escape, trap focus loosely within the panel
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-xs flex-col bg-paper-50 dark:bg-navy-900 border-l border-ink-900/10 dark:border-white/10 p-6 md:hidden"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="label-mono">Menu</span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 dark:border-white/10 text-ink-700 dark:text-paper-100"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    onClose();
                  }}
                  className={`rounded-lg px-3 py-3 text-left font-display text-lg transition-colors ${
                    activeId === item.id
                      ? 'text-electric dark:text-lime'
                      : 'text-ink-900 dark:text-paper-100 hover:text-electric dark:hover:text-lime'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
