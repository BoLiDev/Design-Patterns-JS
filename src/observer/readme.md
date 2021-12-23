
# Problem

## Abstraction

当多个模块，同时对另一个模块的某个状态及其变化感兴趣，或者说多个对象都依赖于那个对象，如果直接把这种依赖关系写到各个对象的模块内部，那么这些感兴趣的对象就和那个被感兴趣的对象，就产生了紧耦合

## Example

Let’s say that you have just bought a sparkling new car — a Tesla Model S. It’s a fairly pricy car, so you decide to go to your Bank and get a loan. They are willing to give you the loan, but only after you agree to find an Insurance company and ensure the car. (Hey — the Bank figures that they are good at pricing credit risk, but the Insurance company is better at pricing the risk of you getting into an accident).

We are now describing a world in which two objects — the Bank and the Insurance company — are very interested in the state changes of a single object — i.e., your car. This is the type of problem that the Observer Pattern is suited for.


How do you build a system in which a list of objects are interested in the state changes / events occurring to another object?