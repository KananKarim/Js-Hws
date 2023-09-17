## Explain in your own words how you understand prototypical inheritance works in JavaScript.
- Prototypical inheritance is a way of creating new objects in JS by inheriting properties and methods from an existing obj.
- In JavaScript, every object has a prototype which another object inherits properties and methods.
- We can use the **Object.create()** method for specifiying  prototypes for new object.

## Why is it necessary to call *super()* in the constructor of a child class?
-  The *super()* method calls the constructor of the parent class and allows the child class to inherit properties and methods from the parent class.