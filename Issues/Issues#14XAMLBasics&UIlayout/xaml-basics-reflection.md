# Reflection

## How do different layout panels influence UI flexibility?

-StackLayout: Arranges elements in a stacked manner, similar to a form that
places questions one after another either top to bottom or left to right.

-GridLayout: Divides the space into rows and columns, almost like Excel. Each
object can be positioned manually using the commands Grid.Row or Grid.Column.

-DockLayout: Places objects at the edges of the container, similar to setting a
margin, where an element can be positioned at the top, bottom, left, or right.

These three containers are important for building a decent and attractive UI for
the end user.

## What challenges might arise when building responsive UIs with XAML?

The resolution of each device can have an impact, as well as the overuse of
containers to separate each control or object.

## How does separating UI and logic benefit application development?

Separating logic from the UI is very efficient because you can fix the logic
without affecting the UI. With this structure, it’s also possible to run unit
tests on each of the ViewModels if necessary to verify that no issues exist.
