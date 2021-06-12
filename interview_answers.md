# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
Stateful component is a class component that extends React and stores its own state
Functional component is a function and can maintain its state through hooks
2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is called before rendering when the component mounts (unsafe)
componentDidMount is called after rendering when the component mounts
componentWillUpdate is called before rendering after a state or prop change (unsafe)
componentDidUpdate is called after rendering after a state or prop change
3. Define stateful logic.
Any function that involves setting or reading state
4. What are the three step of creating a successful test? What is done in each phase?
Arrange
- Render
- objects are obtained and variables declared
Action
- Function calls or firing events
Assert
- Test if the expected outcome is met
