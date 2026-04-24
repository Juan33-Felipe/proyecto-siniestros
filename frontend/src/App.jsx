import React, { useState, useEffect } from 'react';
import { claimService } from './services/claimService';
import StatusDisplay from './components/StatusDisplay';
import ClaimActions from './components/ClaimActions';

function App() {
  const [status, setStatus] = useState("DRAFT");
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const loadStatus = async () => {
    const data = await claimService.getStatus();
    setStatus(data.status);
  };

  const handleAction = async (action) => {
    setIsLoading(true);
    const data = await claimService.executeAction(action);
    setStatus(data.status);
    setIsLoading(false);
  };

  useEffect(() => {
    loadStatus();
    setTimeout(() => setMounted(true), 50);
  }, []);

  return (
    <div className="app-shell">
      {/* Background layers */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-noise" />

      <main className={`card-wrapper ${mounted ? 'card-visible' : ''}`}>
        {/* Top accent line */}
        <div className="card-accent-line" />

        <div className="card-inner">
          {/* Header */}
          <header className="card-header">
            <div className="brand-mark">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2L17 6V10C17 13.87 13.87 17.5 10 18.5C6.13 17.5 3 13.87 3 10V6L10 2Z"
                  fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 10L9 12L13 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="brand-name">InsureFlow</span>
            </div>
            <div className="claim-id-badge">
              <span className="claim-id-dot" />
              <span>ID: 917916-CASE-2026</span>
            </div>
          </header>

          {/* Divider */}
          <div className="card-divider" />

          {/* Status */}
          <StatusDisplay status={status} isLoading={isLoading} />

          {/* Actions */}
          <ClaimActions onAction={handleAction} currentStatus={status} isLoading={isLoading} />

          {/* Footer */}
          <footer className="card-footer">
            <span className="footer-tag">State Pattern</span>
            <div className="footer-dot" />
            <span className="footer-tag">Java Backend</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;