# Reflection

## Which aspects of C# syntax were new or surprising?

The aspects that were surprising to me are the conversions that can be done
within the code, such as declaring an int variable but initializing it with a
text string and then converting it to int. This is quite surprising to me.

## How do data types influence performance and memory management in your code?

They influence it by the size of data they can read and store. For example, int
has a size of 4 bytes, whereas long is 8 bytes. This can make a big difference
in the performance of the code.s

## What practices can help avoid common type-related errors?

You should evaluate what type of data will enter the variable before creating
and defining it. Also, you shouldn’t put data that doesn’t match the variable
type. If it’s an int, its data will be integers, and if you want to assign a
text string to the variable, you should convert it first before using it to
avoid runtime errors.
