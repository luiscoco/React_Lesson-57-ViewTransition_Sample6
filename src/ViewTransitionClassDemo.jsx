import React, { ViewTransition, startTransition, useMemo, useState } from 'react';

export default function ViewTransitionClassDemo() {
  const [mode, setMode] = useState('simple'); // 'simple' | 'byType' | 'none'

  const nextMode = useMemo(
    () =>
      ({
        simple: 'byType',
        byType: 'none',
        none: 'simple',
      })[mode],
    [mode]
  );

  const classProp =
    mode === 'simple'
      ? 'vt-simple'
      : mode === 'byType'
        ? {
            default: 'vt-fade vt-enter',
            update: 'vt-update-strong',
          }
        : 'none'; // disables ViewTransition

  function cycleMode() {
    startTransition(() => setMode(nextMode));
  }

  return (
    <div className="vt-class-demo">
      <button onClick={cycleMode}>
        Mode:{' '}
        {mode === 'simple'
          ? 'string class (.vt-simple)'
          : mode === 'byType'
            ? 'object with types (.vt-fade, .vt-enter, .vt-update-strong)'
            : 'none (disabled)'}
      </button>

      <ViewTransition update={classProp}>
        <div className="vt-class-box">
          <p>
            This panel uses the CSS view-transition styles from the lesson.
            Switch modes and trigger updates here to see the animations.
          </p>
        </div>
      </ViewTransition>
    </div>
  );
}
