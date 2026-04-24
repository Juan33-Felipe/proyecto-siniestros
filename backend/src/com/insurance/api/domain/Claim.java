package com.insurance.api.domain;

import com.insurance.api.domain.state.Claimstate;
import com.insurance.api.domain.state.impl.DraftState;

public class Claim {
    private Claimstate currentState;
    private String claimId;

    public Claim(String claimId) {
        this.claimId = claimId;
        this.currentState = new DraftState();
    }

    public void setState(Claimstate state) {
        this.currentState = state;
    }

    public void addDoc() { currentState.addDocumentation(this); }
    public void submit() { currentState.submitForEvaluation(this); }
    public void approve() { currentState.approve(this); }
    public void pay() { currentState.pay(this); }

    public String getStatus() {
        return currentState.getStatusName();
    }

    public String getClaimId() { return claimId; }
}