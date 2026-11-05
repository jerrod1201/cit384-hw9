# Homework 9: JavaScript Built-In Objects

## Course

CIT 384

## Overview

In this assignment, you will create a small JavaScript webpage that demonstrates what you learned about JavaScript running in the browser.

You will build multiple sections on a single webpage. The home work should practice:

- working with JavaScript in the browser
- linking an external `script.js` file
- using variables
- displaying content on the page through JavaScript
- formatting the current date with the `Date` object
- converting and checking values with the `Number` object
- using arithmetic and conditionals

You will submit:

1. **one GitHub repository link**
2. **include GitHub Pages link**, in your `README.md`

---

## Assignment Theme

Create a webpage called something like:

`JavaScript Mini Demo`

Your page must contain **three required sections**:

1. **Date Display**
2. **Number Conversion and Validation**
3. **Number Formatting and Math Results**

All three sections should appear on the same webpage.

---

## Learning Goals

By completing this assignment, you should be able to:

- connect JavaScript to an HTML page using an external file
- create and use variables
- use the `Date` object to get the current date
- format strings for display
- inject or update content in the browser
- convert string values to numbers with `Number()`
- test values with `Number.isNaN()` and `Number.isInteger()`
- perform arithmetic with numeric values
- use `if/else` logic to display different messages

---

## Files Required

Your repository must include at least:

```text
your-repo-name/
├── index.html
├── script.js
├── style.css        (optional)
├── README.md
└── screenshot.png   (or .jpg/.jpeg/)
```

Your JavaScript must be stored in an **external** file named `script.js`.

---

## Part 1: Date Display

Create a section on the page that displays the current date in this exact format:

`Today is MM/DD/YYYY`

### Requirements

- Create a `Date` object for the current date.
- Extract the month, day, and year.
- Format the result as `MM/DD/YYYY`.
- Display the final message on the page itself, not only in the console.
- The month and day must always be two digits.

### Example

`Today is 03/07/2025`

---

## Part 2: Number Conversion and Validation

Create a second section called something like:

`Number Conversion Tests`

In this section, create at least **four separate variables** in JavaScript. At least:

- **two values must start as strings that can be converted into numbers**
- **one value must be a string that cannot be converted into a number**
- **one value must include a decimal**

### Example starting values

Use your own values, here is one example set:

- `"42"`
- `"19.75"`
- `"hello"`
- `"100"`

### Requirements

For each value, your program must:

1. show the original value
2. convert it using `Number()`
3. show the converted result
4. say whether the converted result is `NaN` using `Number.isNaN()`
5. say whether the converted result is an integer using `Number.isInteger()`

Display the results clearly on the webpage in sentences, short paragraphs, or a small list.

### Example output idea

- Original value: `"42"` → Converted: `42` → isNaN: `false` → isInteger: `true`
- Original value: `"19.75"` → Converted: `19.75` → isNaN: `false` → isInteger: `false`
- Original value: `"hello"` → Converted: `NaN` → isNaN: `true` → isInteger: `false`

### Required `Number` features

Your code must use all of the following:

- `Number()`
- `Number.isNaN()`
- `Number.isInteger()`

> Do not use arrays or loops for this part. Use separate variables and separate statements.

---

## Part 3: Number Formatting and Math Results

Create a third section called something like:

`Math and Number Formatting`

In this section, define at least **three numeric values** in JavaScript and perform calculations with them.

### Requirements

Your section must include:

- at least one addition
- at least one subtraction, multiplication, or division
- at least one formatted numeric result

You must also use **at least one** of the following:

- `toFixed()`
- `toLocaleString()`
- `Number.parseInt()`
- `Number.parseFloat()`

### Example ideas

You may choose one of these approaches:

#### Option A: Price calculator

Use values like:

- item price
- tax rate
- shipping cost

Then calculate:

- subtotal
- tax amount
- total cost

Format at least one result with `toFixed(2)`.

#### Option B: Grade score calculator

Use values like:

- grade scores

Then calculate:

- total score
- average score

Display the average with `toFixed(2)`.

#### Option C: Large number display

Use a large number such as population, salary, or distance and display it with `toLocaleString()`.

---

## Part 4: Conditional Messages

Somewhere in your home work, use at least **two `if/else` statements**.

These can be part of the Number sections.

### Example ideas

- If a converted value is `NaN`, show `This value is not a valid number.`
- If a number is an integer, show `This value is an integer.`
- If an average is 70 or higher, show `Passing`
- Otherwise show `Not passing`

You may also use comparison operators such as:

- `==`
- `===`
- `<`
- `>`
- `<=`
- `>=`
- `!=`
- `!==`

---

## Page Display Requirements

Your JavaScript must place the results on the webpage itself.

Acceptable approaches include:

- updating existing HTML elements, or
- inserting HTML into the DOM using JavaScript

Your page should have a clear title and separate headings for each section.

---

## Code Quality Requirements

Your code must follow these expectations:

- use meaningful variable names
- use camelCase
- use consistent indentation and whitespace
- end statements with semicolons
- include comments that explain major parts of your code

---

## Starter Files

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Mini Demo</title>
  </head>
  <body>
    <h1>JavaScript Mini Demo</h1>

    <!-- Date Section -->
    <h2>Date Display</h2>
    <p id="dateOutput">Date will appear here</p>

    <!-- Number Conversion Section -->
    <h2>Number Conversion Tests</h2>
    <div id="numberConversionOutput">Results will appear here</div>

    <!-- Math and Formatting Section -->
    <h2>Math and Number Formatting</h2>
    <div id="mathOutput">Results will appear here</div>

    <!-- Link to external JavaScript -->
    <script src="script.js"></script>
  </body>
</html>
```

### `script.js`

```javascript
// ==========================
// Part 1: Date Display
// ==========================

// TODO:
// 1. Create a Date object
// 2. Get the current month, day, and year
// 3. Adjust month if needed (JavaScript months are 0-based)
// 4. Add leading zeros to month/day if needed
// 5. Create a string in the format: "Today is MM/DD/YYYY"
// 6. Display the result in the element with id="dateOutput"

// ==========================
// Part 2: Number Conversion
// ==========================

// TODO:
// 1. Create at least 4 separate variables:
//    - at least 2 numeric strings (example: "42")
//    - at least 1 decimal string (example: "19.75")
//    - at least 1 non-numeric string (example: "hello")

// TODO:
// 2. For EACH variable:
//
//    a. Convert the value using Number()
//    b. Check if it is NaN using Number.isNaN()
//    c. Check if it is an integer using Number.isInteger()

// TODO:
// 3. For EACH value, create a sentence showing:
//    - original value
//    - converted value
//    - whether it is NaN
//    - whether it is an integer
//
// Example format (you must create your own variables):
// "Original: '42' -> Converted: 42 -> isNaN: false -> isInteger: true"

// TODO:
// 4. Combine all your results into ONE string
//    (you can use + to join multiple strings)

// TODO:
// 5. Display the final result inside the element:
//    id="numberConversionOutput"

// ==========================
// Part 3: Math & Formatting
// ==========================

// TODO:
// 1. Create at least 2-3 numeric variables
//
// 2. Perform calculations:
//    - at least one addition
//    - at least one other operation (subtract, multiply, or divide)
//
// 3. Use at least ONE of the following:
//    - toFixed()
//    - toLocaleString()
//    - Number.parseInt()
//    - Number.parseFloat()
//
// 4. Build a string showing your results
//
// 5. Display the results inside the element with id="mathOutput"

// ==========================
// Part 4: Conditionals
// ==========================

// TODO:
// 1. Write at least TWO if/else statements
//
// Ideas:
// - check if a value is NaN
// - check if a number is an integer
// - check if a result is greater than a certain value
//
// 2. Display a message on the page based on the condition
//    (append it to an existing section or create a new message)
```

---

## README Requirements

Your repository must include a `README.md` with all of the following:

1. A list of the built-in objects and methods you used
2. Your **GitHub Pages link**
3. Path to a screenshot file of the finished webpage
4. A short reflection of **4-5 sentences** that answers:
   - What part was easiest?
   - What part was hardest?
   - What did you learn about the `Date` object?
   - What did you learn about the `Number` object?
   - What did you learn about displaying results in the browser?

---

## GitHub Pages Requirement

You must publish your home work using **GitHub Pages**.

### Minimum requirement

- Enable GitHub Pages for your repository.
- Make sure your webpage loads correctly.
- Add the live GitHub Pages URL to your `README.md`.

Your submitted repository and your GitHub Pages site should both work.

---

## Submission Instructions

Submit **one GitHub repository link**.

The repository must contain:

- all home work files
- the `README.md`
- your screenshot
- your GitHub Pages link inside the README

---

## Extra Credit

Choose **one** option:

- Add a fourth section that uses `typeof` to identify the type of at least five values
- Compare `Number()`, `Number.parseInt()`, and `Number.parseFloat()` on similar values and explain the difference in the README
- Add a pass/fail or positive/negative label using a ternary operator
- Add light styling with CSS to make each section look like a separate card or panel

---

## What to Review Before Starting

Before beginning, review:

- the browser console
- variables
- numeric data
- strings
- arithmetic operators
- conditionals and logic
- external JavaScript files
- DOM output
- the `Date` object
- the `Number` object

---

## Academic Integrity

You may use your notes, lecture slides, and official documentation for help. You may discuss ideas with classmates, but the code you submit must be your own.

If you use outside sources, cite them in your `README.md`.

---
