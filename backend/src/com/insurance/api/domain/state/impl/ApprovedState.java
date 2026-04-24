package com.insurance.api.domain.state.impl;

import com.insurance.api.domain.Claim;
import com.insurance.api.domain.state.Claimstate;

public class ApprovedState implements Claimstate {
    public void addDocumentation(Claim context) { 
        System.out.println("Denied: Claim already approved."); 
    }

    public void submitForEvaluation(Claim context) { 
        System.out.println("Claim already evaluated."); 
    }

    public void approve(Claim context) { 
        System.out.println("Already approved."); 
    }

    public void pay(Claim context) {
        System.out.println("Executing payment process...");
        context.setState(new PaidState());
    }

    public String getStatusName() { return "APPROVED"; }
}