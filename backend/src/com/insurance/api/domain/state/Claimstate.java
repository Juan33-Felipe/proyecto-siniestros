package com.insurance.api.domain.state;

import com.insurance.api.domain.Claim;

public interface Claimstate {
    void addDocumentation(Claim context);
    void submitForEvaluation(Claim context);
    void approve(Claim context);
    void pay(Claim context);
    String getStatusName();
}