# Reflection

## How does implementing tests improve your development process?

This exponentially improves software development since you can verify that your
code and your user interface work correctly under any interaction.

## Reflect on the trade-offs between the ease of unit tests and the complexity of UI tests.

Unit tests are easy to implement because they run quickly, are simple to
automate and debug, and focus on validating small parts of the system’s logic,
although they have the limitation of not testing the real user experience. On
the other hand, UI tests are more complex because they allow you to validate how
the application actually behaves for the user and detect design or rendering
issues that unit tests do not cover, but their downside is that they are slower,
more fragile, and more costly to maintain. In short, the former provide speed
and stability, while the latter ensure a more realistic level of validation,
though at a higher effort.

## What strategies could you employ to overcome challenges specific to testing WPF applications?

I would review the business logic using unit tests to identify how the process
works, and I would also use tools such as UIAutomation
(System.Windows.Automation) to detect any errors in the UI.
