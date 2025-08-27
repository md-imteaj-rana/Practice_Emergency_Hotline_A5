Question and Answers: 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

-> getElementbyId gives a specific element from the entire html file containing the same id as given.
getElementByClassName gives all the element from the entire html file sharing the same class name as given.
querySelector gives the first element containing the same class or id as given. 
querySelectorAll gives the list of all the elements containing the same id, class or tag as given.


2. How do you create and insert a new element into the DOM?

-> to create new : let new = document.createElement(“tag”)
To insert : parent.appendChild(element)


3. What is Event Bubbling and how does it work?

-> Event Bubbling is when an event triggered on an element propagates up through its parent elements in the DOM hierarchy.
It works when an event starts at the target element. It triggers any event listeners on the target. Then it bubbles up triggering listeners on each parent element in the DOM.


4. What is Event Delegation in JavaScript? Why is it useful?

-> Event Delegation is a technique where a single event listener is attached to a parent element to handle events for its child elements. It is useful because it allows instead of adding listeners to each child, the parent catches bubbled events and processes them based on the target. It also saves the memory, centralizes event handle, reduces the number of new listeners.


5. What is the difference between preventDefault() and stopPropagation() methods?

-> preventDefault() stops the default action of an element like reloading every time automatically after clicking on a button.
stopPropagation() stops the event from bubbling up the DOM tree
