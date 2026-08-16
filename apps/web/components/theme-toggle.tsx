'use client';

// Paper / Lamp segmented control (handoff "The toggle" spec; one switch
// idiom with the player's mode control). Lamplight is the default per
// Oliver's decision — no system-preference dependency: the app is dark
// unless the user chose light. The choice persists in localStorage and is
// applied pre-hydration by the blocking script in the root layout, so the
// first client render reads the attribute rather than assuming.

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'mockka-theme';
type Theme = 'dark' | 'light';

function applyTheme(next: Theme) {
  if (next === 'light') document.documentElement.dataset.theme = 'light';
  else delete document.documentElement.dataset.theme;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* private mode: the choice just does not persist */
  }
}

export function ThemeToggle() {
  // Server renders the default (dark); the effect syncs to the attribute the
  // pre-paint script set, so a stored 'light' shows correctly post-mount.
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    applyTheme(next);
  }

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Theme">
      {(
        [
          ['light', 'Paper'],
          ['dark', 'Lamp'],
        ] as const
      ).map(([value, label]) => (
        <label className="theme-opt" data-active={theme === value} key={value}>
          <input
            type="radio"
            name="theme"
            value={value}
            checked={theme === value}
            onChange={() => choose(value)}
          />
          {label}
        </label>
      ))}
    </div>
  );
}
