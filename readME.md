## JAVASCRIPT VERSIONS

### BRIEF HISTORY OF JS

- JavaScript was first released in 1995 under name "LiveScript"

- 1996: changed it's name from "liveScript" to "JavaScript" just for marketing reasons

- 1997: - submitted to organization called "ECMA-international" to create new standard - ES1(ECMAScript1) bacame the first version of JS language Standard. - ECMAScript: The language Standard. - JavaScript: The language in practice.

- 2005: - ES5(ECMAScript 5) was released with lots of new features. - Fully supported in all browser

- 2015: - ES6/ES2015 was released: it was _the biggest update to language_ ever! - changed to annual cycle

- 2016/2017/2018/2019/...: Release of ES2016/ES2017/ES2018/ES2019

#### TRANSPILING AND POLYFILLING

Modern JavaScript versions such ES6 and up are not supported in older browser.
So the solution is to convert these modern JS versions back to ES5 by the process called Transpiling and polyfilling.

## NOTE: Check compability in:

[ES6 Browser Compatibility Table](https://kangax.github.io/compat-table/es6/)

## How JavaScript Actually works behind the scenes

## How Javascript code is ececuted??

## Overview

Javascript(JS) is always hosted in some environment(typically browser or sometimes even other hosts such as Node js server or some applications that accepts JS code input), and that's where JS runs. Here we focus in context of browser execution.

The host where JS is being hosted has some type of JS-engine(program that executes JS code) that takes our code and executes it. Egs: Google's V8 engine in Google Chrome, SpiderMonkey, Javascript core etc. Inside the engine following steps takes place :

- Our code is parsed by a parser which checks our code and checks if syntax is valid or not. If we have invalid syntax, it recognizes it, stops execution and throws an errror.
- If syntax is correct, then the parser produces a data structure known as "_Abstract Syntax Tree_".
- After that, it gets translated into _Machine Code_. Machine codes are sets of instruction which can be executed directly by computer processor.
- Machine code runs and then our task is executed.

## Execution order and Execution Contexts

### Execution contexts

All Javascript code needs to run in an environment, these environments are called execution contexts. _Execution Context_ can be imagined like a box, a container or a wrapper which stores variables and in which a piece of our code is evaluated and executed. The default execution context is always a _Global Execution Context_.

#### Global Execution Context

As we have discussed above, execution context is where a piece of code is executed i.e in Global Context code that is not inside any function is executed.

Execution Context can also be thought as an Object i.e Global Execution Context is also Global Object which in case of browser is an _Window Object_. Anything we declare in global context automatically gets attached to window object.
i.e name === window.name //true

#### New execution context and Execution order

- Now we know that global execution context is for code that is declared outside of any function, but for codes inside of a function, for each function call a brand new execution context is created.
- This new Execution context is put on the top of current context forming _Execution Stack_.
- For the duration of this first function call, the execution context for that function becomes the active context in which the code is executed.
- If new function is called inside current execution context, new context is created and sits on the top of stack becoming active context and so on.
- After function returns, current execution context gets completed and is removed from top of the stack. Then content in which this function was called, second from top of the stack becomes new _active execution context_.
- This continues until we return to ground context.

### Creation and Execution Phases and Hoisting

We know when new execution conext is created, now remains to explore how it is created.

We can associate an execution context with an object, and this object has three properties:

1. Variable Object (VO)
   It contains function arguments, inner variable declarations and function decalrations.
2. Scope Chain
   It contains the current variable objects and variable objects of all its parents.
3. "This" Variable

#### How new execution context is created?

When a function is called new execution context is put on the top of the execution stack. This process happens in two phases ie _Creation Phase_ and _Execution Phase_.

##### Creation Phase

###### Creation of the Variable Object (VO)

- The agrument object is created containing all the arguments that were passed into the function.

- Code is scanned for function declarations: for each function, a property is created in the Variable Object, pointing to the function. ie _all the functions will be stored inside the variable object even before the code starts executing_.

- Code is scanned for the variable declarations: for each variable a propety is created in the Variable Object, and set to undefined. These last two steps are collectively called _Hoisting_ and the statement "Functions and variables are Hoisted in JS" means that _They are made already available before the execution phase starts_.

- Functions and varaible are hoisted in different manner though ie:

* Functions are already defined before the execution phase starts.
* Variables are set up to "undefined" and will only be defined in execution phase.

###### Creation of Scope Chain

###### Scoping and Scope chain

Scoping answers the question "_Where can we access a certain variable_?". _Scope_ is the space or environment, created by wach of the function, in which the variables it defines are accessible. In JS, the only way we create a new scope is by defining new function.

###### Lexical Scoping

Lexical simply means where something is written in our code. It concerns with position where our code sits. Similarly, _Lexical Scoping_ means a function that is lexically within another function(or written inside another function) gets access to the scope of the outer function. This determines the scope of a variable.
_Scoping Chain_ is created in an order in which functions are written lexically.
_Execution stack_ is the order in which function are called.

###### Determine the value of "this" variable

"this" variable is a variable that every execution context gets and is stored in execution context object.

- In regular function call, "_this_" varaible points towards global object(the window object in the browser). This is also default.
- _Method call_: the this variable points to the object that is calling the method.
  _this keyword refers to the object that called the method_.
- The this keyword is not assigned a value until a function where it is defined is actually called(or invoked).

#### Execution Phase

The code of the function that generated the current execution context is ran line by line and all the variables are defined, however, if it is global context the global code is executed.
