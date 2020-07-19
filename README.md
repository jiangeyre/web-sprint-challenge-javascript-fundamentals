# Sprint Challenge - JavaScript Fundamentals

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in project. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied array methods, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the sprint challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL if you need direction. 

_You have **three hours** to complete this challenge. Plan your time accordingly._


## Introduction

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

### Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead as the evaluate your solution.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. You might prepare by writing down your own answers before hand.

1. Briefly compare and contrast `.forEach` & `.map` (2-3 sentences max)

forEach() = executes the provided function once for each array element / does not actualy return anything as it simply calls the provided function

map() = creates a whole new array with the results of calling a provided function on every element in the calling array / utilizes return values and returns a new Array of the same size


2. Explain the difference between a callback and a higher order function.

A higher-order function is a function that takes another function as an argument. A callback function is what is passed to another function, such as those passed to higher-order functions.


3. What is closure?

A closure is created when the inner function is somehow made available to any scope outside the outer function. Closure is function bundled together (enclosed) wtih references tol its lexical environment (surrounding state)/ Closure gives access to an outer function's scope from an inner function.


4. Describe the four rules of the 'this' keyword.

    1. GLOBAL/WINDOW BINDING: If none of the other rules apply, the 'this' keyword defaults to the window object. Unless you are in strict mode, then the case is undefined. Strict mode prevents window binding from breaking our code but will return undefined.
    2. IMPLICIT BINDING: This is the most common binding (80% of all cases). When the function is invoked, you look to the left of the dot - that's what the 'this' keyword is referring to (only applies to objects with methods).
    3. NEW BINDING: using the 'new' keyword constructs a new object and this points to it
    4. EXPLICIT BINDING:
        -call: will immediately invoke the function / ,call passes arguments in one by one
        -apply: will immediately invoke the function / .apply passes the argument in as an array
        -bind: you pass arguments in one by one but it does not immediately invoke the function; it returns a brand new function that can be invoked later.
        ALL of the above allow us to explicitly state what the 'this' keyword is in any given function.


5. Why do we need super() in an extended class?

The super() is used to call the constructor, methods and properties of parent class. You can use super() in sub classes when you want to invoke a method from the parents class when you have already overridden it in the subclasses.


You are expected to be able to answer questions in these areas. Your responses contribute to your Sprint Challenge grade. 

## Instructions

### Task 1: Project Set Up

> This section should include instruction for the sprint challenge. These should only cover things that are _not_ being evaluated by the challenge itself, e.g. environment/project setup, link to a starter project, etc. In general, this will be the following Git fork, clone, branch, commit, push, create pull request flow, though may need to be adapted for some specific challenges.

- [ ] Create a forked copy of this project
- [ ] Add your team lead as collaborator on Github
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!)
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly
- [ ] Push commits: git push origin `<firstName-lastName>`

### Task 2: Project Requirements

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

#### Task A: Objects and Arrays

Test your knowledge of advanced array methods and callbacks.
* [ ] Use the [arrays-callbacks.js](challenges/arrays-callbacks.js) link to get started.  Read the instructions carefully!

#### Task B: Closure

This challenge takes a look at closures as well as scope. 
* [ ] Use the [closure.js](challenges/closure.js) link to get started. Read the instructions carefully!

#### Task C: Prototypes

Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

#### Task D: Classes

Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Task 3: Stretch Goals 

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!

## Submission format

Follow these steps for completing your project.

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
- [ ] Add your team lead as a reviewer on the pull-request
- [ ] Your team lead will count the project as complete after receiving your pull-request


