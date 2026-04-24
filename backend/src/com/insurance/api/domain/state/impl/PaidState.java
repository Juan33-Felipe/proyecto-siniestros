package com.insurance.api.domain.state.impl;

import com.insurance.api.domain.Claim;
import com.insurance.api.domain.state.Claimstate;

public class PaidState implements Claimstate {
    public void addDocumentation(Claim context) { 
        System.out.println("Locked: Claim is paid and closed."); 
    }
    public void submitForEvaluation(Claim context) { 
        System.out.println("Locked: Claim is paid and closed."); 
    }
    public void approve(Claim context) { 
        System.out.println("Locked: Claim is paid and closed."); 
    }
    public void pay(Claim context) { 
        System.out.println("Already paid."); 
    }
    public String getStatusName() { return "PAID"; }
}