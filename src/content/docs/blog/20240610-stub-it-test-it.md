---
title: Stub it, test it
description: Designing a testing stub for mainframe batch processing at Rabobank.
---


**\* Due to the thesis's confidential nature, it cannot be explained in detail.**

Well, I can't tell much about the concrete details of this exciting Bachelor thesis project I did at the Rabobank. Why not? Because the bank's payment systems have utmost confidentiallity. However, like any bank, a high volume of booking requests have to be handled. A payment-processing architecture has developed over time, primarily running on an established mainframe environment. Within this architecture, the team I was part of oversees a system responsible for validating and routing requests to different downstream services. One key service of this system handles larger batches of booking requests.

<figure style="margin: 2rem 0; text-align: center;">
  <img src="/assets/stub-it-test-it/cover.png" alt="How stubbing works" style="max-width: 100%; height: auto; border-radius: 8px;" />
</figure>

These batches are then sent to an external service for further processing. Since that external service is managed by a separate team, the testing process can be slow and sometimes inconsistent, due to data constraints and the need for cross-team coordination. To address this challenge, a stub has been proposed to replace the external service during testing, allowing for faster and more controlled validation of the batch-booking functionality. This is standard practice in enterprise software.  How can such a stub be created so that it isolates the batch-processing system and makes it testable, without requiring communication with the actual external service. This was the guiding question in my research.

To answer this question, I researched mainframe technologies, details of the batch-processing system, and the interfaces. Additionally, qualitative interviews were conducted with the tester and business analyst, to understand the requirements and motivations. Based on these findings, a stub was designed, implemented, and tested to verify that it can effectively mock the external service.

## Results and Conclusion
The implementation successfully met the research objectives.

*   **Isolation:** The batch service can now function independently of the savings environment during the System Test phase.
*   **Control:** Testers can determine specific outcome scenarios (OK/Not OK) by modifying data in the stub table rather than relying on external data sets.
*   **Reliability:** The solution eliminated false negatives caused by external data changes and reduced the wait time associated with cross-team dependencies.

The research concludes that implementing a mainframe-native stub using the "Stub Boss" design pattern is a viable and effective method for isolating critical payment services for testing purposes.