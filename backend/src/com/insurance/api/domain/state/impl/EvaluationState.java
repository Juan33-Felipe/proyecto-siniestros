package com.insurance.api.domain.state.impl;

import com.insurance.api.domain.Claim;
import com.insurance.api.domain.state.Claimstate;

public class EvaluationState implements Claimstate {
    public void addDocumentation(Claim context) { 
        System.out.println("Denied: Documentation locked during evaluation."); 
    }
    
    public void submitForEvaluation(Claim context) { 
        System.out.println("Already in evaluation."); 
    }

    public void approve(Claim context) {
        System.out.println("Evaluation successful. Claim approved.");
        context.setState(new ApprovedState());
    }

    public void pay(Claim context) { 
        System.out.println("Denied: Evaluation must finish before payment."); 
    }
    
    public String getStatusName() { return "EVALUATION"; }
}