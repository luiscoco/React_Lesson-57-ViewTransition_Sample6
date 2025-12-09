import React from 'react';
import ViewTransitionClassDemo from './ViewTransitionClassDemo.jsx';

export default function App() {
  return (
    <div className="app">
      <h1>6. Styling View Transitions - CSS side</h1>
      <p className="subtitle">
        Example CSS to match previous classes (<code>.vt-simple</code>, <code>.vt-fade</code>,{' '}
        <code>.vt-enter</code>, <code>.vt-exit</code>, <code>.vt-update-strong</code>).
      </p>
      <ViewTransitionClassDemo />
    </div>
  );
}