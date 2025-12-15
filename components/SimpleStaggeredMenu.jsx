import React, { useState } from 'react';

export const SimpleStaggeredMenu = ({
  position = 'right',
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  accentColor = 'hsl(var(--primary))',
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !open;
    setOpen(newState);
    
    if (newState) {
      onMenuOpen?.();
    } else {
      onMenuClose?.();
    }
  };

  return (
    <div className="sm-scope z-40 fixed top-0 left-0 w-screen h-screen overflow-hidden">
      <div
        className="staggered-menu-wrapper relative w-full h-full"
        data-position={position}
        data-open={open || undefined}
      >
        {/* Menu Button */}
        <header
          className="staggered-menu-header absolute top-0 left-0 w-full flex items-center justify-between p-[2em] bg-transparent pointer-events-none z-20"
          aria-label="Main navigation header"
        >
          <div className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">

          </div>

          <button
            className="sm-toggle relative inline-flex items-center gap-1 bg-transparent border-0 cursor-pointer text-foreground font-medium leading-none overflow-visible pointer-events-auto"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="staggered-menu-panel"
            onClick={toggleMenu}
            type="button"
          >
            <span
              className={`sm-icon relative w-[14px] h-[14px] shrink-0 inline-flex items-center justify-center transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
              aria-hidden="true"
            >
              <span
                className={`sm-icon-line absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
              />
              <span
                className={`sm-icon-line sm-icon-line-v absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-[2px] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ${open ? '-rotate-45' : 'rotate-90'}`}
              />
            </span>
            <span className="sm-toggle-textWrap relative inline-block h-[1em] overflow-hidden whitespace-nowrap w-auto min-w-auto ml-2">
              <span className="sm-toggle-textInner flex flex-col leading-none transition-transform duration-300">
                <span className="sm-toggle-line block h-[1em] leading-none">
                  {open ? 'Close' : 'Menu'}
                </span>
              </span>
            </span>
          </button>
        </header>

        {/* Menu Panel */}
        <aside
          id="staggered-menu-panel"
          className={`staggered-menu-panel absolute top-0 h-full bg-background flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 transition-all duration-500 ease-in-out ${
            position === 'left' ? 'left-0' : 'right-0'
          } ${open ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}`}
          style={{ width: '100%' }}
          aria-hidden={!open}
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-5">
            <ul
              className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2"
              role="list"
              data-numbering={displayItemNumbering || undefined}
            >
              {items && items.length ? (
                items.map((it, idx) => (
                  <li 
                    className="sm-panel-itemWrap relative overflow-hidden leading-none" 
                    key={it.label + idx}
                    style={{ transitionDelay: `${idx * 0.1}s` }}
                  >
                    <a
                      className={`sm-panel-item relative text-foreground font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-all duration-300 ease-in-out inline-block no-underline pr-[1.4em] ${
                        open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                      href={it.link}
                      aria-label={it.ariaLabel}
                      data-index={idx + 1}
                      onClick={(e) => {
                        // If it's an anchor link, handle smooth scroll
                        if (it.link.startsWith('#')) {
                          e.preventDefault();
                          const targetId = it.link.substring(1);
                          const targetElement = document.getElementById(targetId);
                          
                          if (targetElement) {
                            // Close menu first
                            if (open) {
                              toggleMenu();
                            }
                            
                            // Smooth scroll to target after a short delay to allow menu to start closing
                            setTimeout(() => {
                              targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }, 100);
                          }
                        } else {
                          // For external links, just close the menu
                          if (open) {
                            toggleMenu();
                          }
                        }
                      }}
                    >
                      <span className="sm-panel-itemLabel inline-block">
                        {it.label}
                      </span>
                    </a>
                  </li>
                ))
              ) : (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none" aria-hidden="true">
                  <span className="sm-panel-item relative text-foreground font-semibold text-[4rem] cursor-pointer leading-none tracking-[-2px] uppercase transition-[background,color] duration-150 ease-linear inline-block no-underline pr-[1.4em]">
                    <span className="sm-panel-itemLabel inline-block">
                      No items
                    </span>
                  </span>
                </li>
              )}
            </ul>

            {displaySocials && socialItems && socialItems.length > 0 && (
              <div 
                className={`sm-socials mt-auto pt-8 flex flex-col gap-3 transition-all duration-500 ease-in-out ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                aria-label="Social links"
                style={{ transitionDelay: `${items.length * 0.1}s` }}
              >
                <h3 className="sm-socials-title m-0 text-base font-medium" style={{ color: accentColor }}>Socials</h3>
                <ul
                  className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap"
                  role="list"
                >
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-socials-link text-[1.2rem] font-medium text-foreground no-underline relative inline-block py-[2px] transition-all duration-300 ease-linear hover:opacity-75"
                        style={{ color: accentColor }}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SimpleStaggeredMenu;