# Reflection

## How does using commands improve the maintainability of your code compared to direct event handling?

Commands, unlike direct events, help make the application more scalable in the
future. They also allow you to reuse the same action across multiple buttons or
objects that inherit it, instead of creating separate event handlers for each
control. This makes the code cleaner and easier to read.

## Reflect on scenarios where commands are more beneficial than event handlers

A beneficial scenario is when you have two or more buttons that save
information. You only need to create a single command and then assign it to all
the buttons that will share that functionality.

## What challenges might you encounter when implementing commands in WPF?

Some challenges when implementing commands are:

-It can be a bit confusing when you have to use RelayCommand.

-If the DataContext is not properly configured, the command won’t execute and
won’t show any errors.

-Binding parameters with CommandParameter.
