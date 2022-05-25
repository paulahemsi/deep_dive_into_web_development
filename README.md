# deep_dive_into_web_development
Full Stack open 2022 from University of Helsinki



> a core philosophy of React is composing applications from many specialized reusable components.

>React component names must be capitalized.

option to avoid extra usuless div:

```js
const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  )
}
```

Node.js is a JavaScript runtime environment based on Google's Chrome V8 JavaScript engine and works practically anywhere - from servers to mobile phones.

obj

```js
const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}
```

The values of the properties can be of any type, like integers, strings, arrays, objects...

The properties of an object are referenced by using the "dot" notation, or by using brackets:

```js

console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'age' 
console.log(object1[fieldName])    // 35 is printed

//You can also add properties to an object on the fly by either using dot notation or brackets:
object1.address = 'Helsinki'
object1['secret number'] = 12341
```

* false, 0, empty strings (""), NaN, null, and undefined all become false.
* All other values become true.

## For Loop

JavaScript's for loop is the same as that in C and Java: it lets you provide the control information for your loop on a single line.

```js
for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}
```

JavaScript also contains two other prominent for loops: for...of

```js
for (let value of array) {
  // do something with value
}
```

and for...in:

```js
for (let property in object) {
  // do something with object property
}
```

## && ||

The && and || operators use short-circuit logic, which means whether they will execute their second operand is dependent on the first. This is useful for checking for null objects before accessing their attributes:

```js
const name = o && o.getName();
```

Or for caching values (when falsy values are invalid):

```js
const name = cachedName || (cachedName = getName());
```

## Objects

JavaScript objects can be thought of as simple collections of name-value pairs. As such, they are similar to:

* Dictionaries in Python.
* Hash tables in C and C++.

The fact that this data structure is so widely used is a testament to its versatility. Since everything (bar core types) in JavaScript is an object, any JavaScript program naturally involves a great deal of hash table lookups. It's a good thing they're so fast!

The "name" part is a JavaScript string, while the value can be any JavaScript value — including more objects. This allows you to build data structures of arbitrary complexity.

There are two basic ways to create an empty object:

```js
const obj = new Object();
```

And:

```js
const obj = {};
```

These are semantically equivalent; the second is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times.

Object literal syntax can be used to initialize an object in its entirety:

```js
const obj = {
  name: 'Carrot',
  _for: 'Max', // 'for' is a reserved word, use '_for' instead.
  details: {
    color: 'orange',
    size: 12
  }
};
```

Attribute access can be chained together:

```js
obj.details.color; // orange
obj['details']['size']; // 12
```

## Arrays

Another way of iterating over an array is forEach():

```js
['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {
  // Do something with currentValue or array[index]
});
```

If you want to append an item to an array do it like this:

```js
a.push(item);
```

Arrays come with a number of methods. See also the [full documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for array methods.

 |Method name |	Description |
 |----------|-------------|
|a.toString()	| Returns a string with the toString() of each element separated by commas.|
|a.toLocaleString()	| Returns a string with the toLocaleString() of each element separated by commas. |
|a.concat(item1[, item2[, ...[, itemN]]])	| Returns a new array with the items added on to it. |
|a.join(sep)	|Converts the array to a string — with values delimited by the sep param |
|a.pop()	| Removes and returns the last item.|
|a.push(item1, ..., itemN)	| Appends items to the end of the array.|
|a.shift()	| Removes and returns the first item.|
|a.unshift(item1[, item2[, ...[, itemN]]])	| Prepends items to the start of the array.|
|a.slice(start[, end])	| Returns a sub-array.|
|a.sort([cmpfn])	| Takes an optional comparison function.|
|a.splice(start, delcount[, item1[, ...[, itemN]]])	| Lets you modify an array by deleting a section and replacing it with more items. |
|a.reverse()	| Reverses the array.|

## Functions

functions have access to an additional variable inside their body called arguments, which is an array-like object holding all of the values passed to the function. 

```js
function avg() {
  let sum = 0;
  for (const item of arguments) {
    sum += item;
  }
  return sum / arguments.length;
}

avg(2, 3, 4, 5); // 3.5
```

In JavaScript, defining functions within functions is a commonly-used technique.

if an arrow function consists of a single expression, then the function body does not need to be written inside of curly braces. 

```js
const bornYear = () => {
  return new Date().getFullYear() - age
}

 const bornYear = () => new Date().getFullYear() - age
```

## Destructuring

we can use it to extract and gather the values of an object's properties into separate variables:

```js
const Hello = (props) => {
  const { name, age } = props
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

//The props that are passed to the component are now directly destructured:

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}
```

## Event handling

Button elements support so-called mouse events, of which click is the most common event.

We set the value of the button's onClick attribute to be a reference to the handleClick function defined in the code.

Now every click of the plus button causes the handleClick function to be called, meaning that every click event will log a clicked message to the browser console.

```js
const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={(handleClick)}>
        plus
      </button>
    </div>
  )
}
```

>Event handlers must always be a function or a reference to a function and not a function call

Usually defining event handlers within JSX-templates like this
```js
<button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
```
is not a good idea.


Functions returning functions can be utilized in defining generic functionality that can be customized with parameters. The `hello` function that creates the event handlers can be thought of as a **factory** that produces *customized event handlers* meant for greeting users.

```js
const App = () => {
  const [value, setValue] = useState(10)

  const hello = (who) => () => {
      console.log('hello', who)
  }


  return (
    <div>
      {value}
      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>
    </div>
  )
}
```
## Passing state to child components

>It's recommended to write React components that are small and reusable across the application and even across projects.

One best practice in React is to lift the state up in the component hierarchy. The documentation says:

Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closest common ancestor.

## A more complex state

The component's state or a piece of its state can be of any type. 

It is forbidden in React to mutate state directly, since it can result in unexpected side effects. **Changing state has to always be done by setting the state to a new object**. If properties from the previous state object are not changed, they need to simply be copied, which is done by copying those properties into a new object, and setting that as the new state.

## Debugging

Keep the browser's developer console open at all times.

The Console tab in particular should always be open, unless there is a specific reason to view another tab.

Keep both your code and the web page open together at the same time, all the time.

When you use console.log for debugging, don't combine objects in a Java-like fashion by using the plus operator. Instead of writing:
```js
console.log('props value is ' + props)
```
Separate the things you want to log to the console with a comma:
```js
console.log('props value is', props)
```
If you use the Java-like way of concatenating a string with an object, you will end up with a rather uninformative log message:
```
props value is [Object object]
```
Whereas the items separated by a comma will all be available in the browser console for further inspection.

You can pause the execution of your application code in the Chrome developer console's debugger, by writing the command **debugger** anywhere in your code.

The execution will pause once it arrives at a point where the debugger command gets executed. By going to the Console tab, it is easy to inspect the current state of variables.

The debugger also enables us to execute our code line by line with the controls found on the right-hand side of the *Sources* tab.

You can also access the debugger without the **debugger** command by adding breakpoints in the Sources tab. Inspecting the values of the component's variables can be done in the `Scope`-section.

React developer tools extension adds a new `Components` tab to the developer tools. The new developer tools tab can be used to inspect the different React elements in the application, along with their **state** and **props**

## Rules od Hooks

> hooks may only be called from the inside of a function body that defines a React component

The useState function (as well as the useEffect function introduced later on in the course) **must not** be called from inside of a loop, a conditional expression, or any place that is not a function defining a component. This must be done to ensure that the hooks are always called in the same order, and if this isn't the case the application will behave erratically.

```js
const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}
```
