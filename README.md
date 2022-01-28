# _Pizza Parlor_

#### By _**Mikah Mathews**_

#### _Build a pizza by selecting toppings and a size_

## Technologies Used

* _HTML_
* _CSS_
* _Javascript_
* _Bootstrap_
* _jQuery_

## Description

_This is a page where you are able to select toppings, size, and delivery options to build a fictional pizza._

## Setup/Installation Requirements

* _Go to mikah-mathews.github.io/pizza-pizza_
* _Or clone this repository and open index.html in your browser_

## Known Bugs

* _None currently but if found, please contact me at mikah@outofband.org_

## Tests

Describe: Pizza()

Test: "It should return a pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "small");
Expected Output: Pizza { toppings: ["pineapple", "pepperoni"], size: "small"}

Describe: Pizza.price();

Test: "It should determine price by size. Small is $10"
Code: const myPizza = new Pizza(["pineapple", "pepperoni"], "small");
      myPizza.price();
Expected Output: 10

## License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) _01-2022_ _Mikah Mathews_