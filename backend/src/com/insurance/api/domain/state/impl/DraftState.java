package com.insurance.api.domain.state.impl;

import com.insurance.api.domain.Claim;
import com.insurance.api.domain.state.Claimstate;

public class DraftState implements Claimstate {
    public void addDocumentation(Claim context) { System.out.println("Docs added to draft."); }
    
    public void submitForEvaluation(Claim context) {
        System.out.println("Submitting claim for evaluation...");
        context.setState(new EvaluationState());
    }

    public void approve(Claim context) { System.out.println("Denied: Draft claims cannot be approved yet."); }
    public void pay(Claim context) { System.out.println("Denied: Draft claims cannot be paid."); }
    public String getStatusName() { return "DRAFT"; }
}