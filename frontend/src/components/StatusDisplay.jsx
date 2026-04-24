import React from 'react';

const statusConfig = {
  DRAFT: {
    label: "Draft",
    subtitle: "Awaiting documentation",
    color: "status-draft",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M4 4h7l3 3v7H4V4z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M11 4v3h3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M6 9h6M6 11.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    step: 1,
  },
  EVALUATION: {
    label: "Evaluation",
    subtitle: "Under review",
    color: "status-evaluation",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 6v3.5l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: 2,
  },
  APPROVED: {
    label: "Approved",
    subtitle: "Ready for disbursement",
    color: "status-approved",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M10 2.5L15.5 6v4.5C15.5 13.8 13 16.3 10 17.2c-3-0.9-5.5-3.4-5.5-6.7V6L10 2.5z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M7 9.5l2 2 3-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    step: 3,
  },
  PAID: {
    label: "Paid",
    subtitle: "Claim closed",
    color: "status-paid",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="3" y="5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M3 8h12" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M6 11.5h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    step: 4,
  },
  OFFLINE: {
    label: "Offline",
    subtitle: "Connection lost",
    color: "status-offline",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0-12 0" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M9 6v3M9 12v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    step: 0,
  },
};

const STEPS = ['DRAFT', 'EVALUATION', 'APPROVED', 'PAID'];

const StatusDisplay = ({ status, isLoading }) => {
  const config = statusConfig[status] || statusConfig.OFFLINE;
  const currentStep = config.step;

  return (
    <div className="status-section">
      {/* Main status pill */}
      <div className={`status-pill ${config.color} ${isLoading ? 'status-loading' : ''}`}>
        <span className="status-icon">{config.icon}</span>
        <div className="status-text">
          <span className="status-label">{config.label}</span>
          <span className="status-subtitle">{config.subtitle}</span>
        </div>
        {isLoading && <span className="status-spinner" />}
      </div>

      {/* Progress track */}
      {status !== 'OFFLINE' && (
        <div className="progress-track">
          {STEPS.map((step, index) => (
            <React.Fragment key={step}>
              <div className={`progress-node ${index < currentStep ? 'node-done' : index === currentStep - 1 ? 'node-active' : 'node-pending'}`}>
                {index < currentStep - 1 ? (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span className="node-index">{index + 1}</span>
                )}
              </div>
              {index < STEPS.length - 1 && (
                <div className={`progress-connector ${index < currentStep - 1 ? 'connector-done' : 'connector-pending'}`} />
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatusDisplay;