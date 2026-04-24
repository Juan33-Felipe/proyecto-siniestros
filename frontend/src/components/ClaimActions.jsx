import React from 'react';

const actions = [
  {
    id: 'add',
    label: 'Add Evidence',
    description: 'Attach supporting documents',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    variant: 'action-secondary',
  },
  {
    id: 'submit',
    label: 'Submit Claim',
    description: 'Send for evaluation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h8M8 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    variant: 'action-secondary',
  },
  {
    id: 'approve',
    label: 'Approve Claim',
    description: 'Validate evaluation',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    variant: 'action-secondary',
  },
  {
    id: 'pay',
    label: 'Disburse Funds',
    description: 'Execute payment',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="4" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 7h12" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 10.5h2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    variant: 'action-primary',
    fullWidth: true,
  },
];

const ClaimActions = ({ onAction, currentStatus, isLoading }) => {
  const isPaid = currentStatus === 'PAID';

  return (
    <div className="actions-section">
      <p className="actions-label">Actions</p>
      <div className="actions-grid">
        {actions.map((action) => (
          <button
            key={action.id}
            onClick={() => onAction(action.id)}
            disabled={isPaid || isLoading}
            className={`action-btn ${action.variant} ${action.fullWidth ? 'action-full' : ''}`}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-content">
              <span className="action-title">{action.label}</span>
              <span className="action-desc">{action.description}</span>
            </span>
            <span className="action-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 6h6M7 4l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClaimActions;