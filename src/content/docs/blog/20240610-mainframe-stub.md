---
title: Mainframe testing stub
description: Designing a testing stub for mainframe batch processing at Rabobank.
---


**\* Due to the thesis's confidential nature, it cannot be explained in detail.**

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/mainframe-stub/cover.png" alt="Rabobank Winthontlaan" style="max-width: 100%; height: auto; border-radius: 8px;" />
  <figcaption style="margin-top: 0.5rem; font-size: 0.9rem; color: #666; font-style: italic;"><b>Figure 1:</b> Rabobank Winthontlaan, Utrecht</figcaption>
</figure>

## Context and Problem Statement

In order to manage a high volume of booking requests, an organization has developed a payment-processing architecture over time, primarily running on an established mainframe environment. Within this architecture, a particular team oversees multiple systems, including one responsible for validating and routing requests to different downstream services. One key component of this system handles larger batches of booking requests.

These batches are then sent to an external service for further processing. Since that external service is managed by a separate team, the testing process can be slow and sometimes inconsistent, due to data constraints and the need for cross-team coordination. To address this challenge, a stub has been proposed to replace the external service during testing, allowing for faster and more controlled validation of the batch-booking functionality. The guiding question is how to implement a stub for isolating the batch-processing system within the mainframe environment, without requiring communication with the actual external service.

To answer this question, research was undertaken regarding the mainframe technologies, details of the batch-processing system, and the nature of data exchange with the external service. Qualitative interviews were also conducted with the tester and business analyst to understand the requirements and motivations. Based on these findings, a stub was designed, implemented, and subsequently tested to verify that it can effectively simulate all necessary external interactions.

## Results and Conclusion
The implementation successfully met the research objectives.

*   **Isolation:** The batch service can now function independently of the savings environment during the System Test phase.
*   **Control:** Testers can determine specific outcome scenarios (OK/Not OK) by modifying data in the stub table rather than relying on external data sets.
*   **Reliability:** The solution eliminated false negatives caused by external data changes and reduced the wait time associated with cross-team dependencies.

The research concludes that implementing a mainframe-native stub using the "Stub Boss" design pattern is a viable and effective method for isolating critical payment services for testing purposes.