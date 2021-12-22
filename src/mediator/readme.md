# Problem

## Abstraction

In object-oriented implementations, the behaviour is split across many objects. There is a natural requirement to have an object depend on others. Quickly, this dependency can grow and have each object depend on all others.

The Mediator design pattern strives to break such complex dependency chain from being formed. It makes all the objects to depend on a single object, the Mediator. The Mediator depends on and knows all the objects. This keeps the individual component objects re-usable and maintainable. It also lets us add new objects into the system easily. 

## Example

An example – A Smart Home System
Let us say we have a smart home control system application. Consider we have an Air conditioner, a fan and a smart control as part of this application. If the smart control is on, then it controls and optimizes the air-based components (the AC and the fan). If one of the air components is switched on, the other would be switched off automatically (if the other was also running). 

On the other hand if the smart control is off, the two air based components can be running at the same time.