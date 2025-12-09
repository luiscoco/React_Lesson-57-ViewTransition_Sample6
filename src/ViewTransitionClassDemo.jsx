import React, { ViewTransition, startTransition, useMemo, useState } from 'react';

export default function ViewTransitionClassDemo() {
  const [mode, setMode] = useState('simple'); // 'simple' | 'byType' | 'none'
  const [version, setVersion] = useState(1);

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
    startTransition(() => {
      setMode(nextMode);
      setVersion(v => v + 1); // force a visual update so the transition is visible
    });
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
          <p className="vt-version">
            Current mode: <strong>{mode}</strong> · Update #{version}
          </p>
        </div>
      </ViewTransition>
    </div>
  );
}
