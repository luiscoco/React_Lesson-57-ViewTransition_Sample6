# Styling View Transitions - CSS side (React 19.3.0-canary)

Vite + React (canary) demo that shows how to style View Transition classes from the
lesson "6. Styling View Transitions - CSS side." It renders a panel you can
update while cycling through different transition class setups so you can see
the CSS effects in action.

## Capabilities and features

- Uses the new built-in `ViewTransition` React component (canary) instead of a shim.
- Cycles through three modes: string class (`.vt-simple`), type-based object (`.vt-fade`, `.vt-enter`, `.vt-update-strong`), and disabled (no transition).
- Demonstrates how `ViewTransition` accepts either a simple class string or a by-type object for `update`.
- Provides ready-to-copy CSS for base panel styles plus enter/exit/update animations.
- Includes reduced-motion handling with `prefers-reduced-motion` so animations are skipped when requested.

### Key React usage

```jsx
import React, { ViewTransition, startTransition, useState } from 'react';

export default function ViewTransitionClassDemo() {
  const [mode, setMode] = useState('simple'); // 'simple' | 'byType' | 'none'

  const classProp =
    mode === 'simple'
      ? 'vt-simple'
      : mode === 'byType'
        ? {
            default: 'vt-fade vt-enter',
            update: 'vt-update-strong',
          }
        : 'none'; // disables ViewTransition

  return (
    <ViewTransition update={classProp}>
      <div className="vt-class-box">...</div>
    </ViewTransition>
  );
}
```

### Key CSS snippets

```css
/* generic fade */
::view-transition-old(.vt-fade),
::view-transition-old(.vt-simple) {
  opacity: 1;
  animation-name: vt-fade-out;
  animation-duration: 200ms;
}

::view-transition-new(.vt-fade),
::view-transition-new(.vt-simple) {
  opacity: 0;
  animation-name: vt-fade-in;
  animation-duration: 200ms;
}

/* enter/exit/update */
::view-transition-new(.vt-enter) { animation-name: vt-enter-slide-up; }
::view-transition-old(.vt-exit) { animation-name: vt-exit-slide-down; }
::view-transition-new(.vt-update-strong) { animation-name: vt-update-pop; }
```

## Run it locally

```sh
npm install
npm run dev
```
