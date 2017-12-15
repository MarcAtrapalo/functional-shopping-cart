# Functional Shopping Cart

## The Problem

We need to implement the logic for a smart shopping cart that allows extensible prioritized discount types with arbitrary restrictions.

The shopping cart should have a function `computePrice` that, given a line, it returns a float with the total price to pay.

A line is formed by items in different amounts. Each item type has a name and a price.
Moreover, several discount types can be applied to an item type. For example, an item may have a 20% off discount, or may have no discount at all.

The item discounts can be (from most prioritary to least):
- 3x2: Given there are 3 or more items of the same type in a line, there is one item free for each 3 of them. If there are less than 3 items, this discount can't be applied.
- Percentual: "5% Off" means each item will cost only 95% of its price.

When an item discount can not be applied, the next one in the priority should be tried. Discounts can not stack, only one discount type per item type is allowed.

The solution should be extensible for other types of discounts.

Example:
```
Line
---------------------------------------------------------
| ITEM NAME | PRICE | AMOUNT | DISCOUNTS | PRICE TO PAY |
---------------------------------------------------------
| coke      | 1.5   | 7      | 3x2       |          7.5 |
| coke zero | 0.5   | 2      | 3x2       |          1   |
| whisky    | 10.0  | 1      | 5%        |          9.5 |
| chips     | 2.5   | 2      | 3x2, 10%  |          4.5 |
---------------------------------------------------------
TOTAL PRICE:                                       22.5
```

## Setup and Execution
In order to setup the project, first clone this repo:

```
$ git clone https://github.com/MarcAtrapalo/functional-koans
```

Then install all required modules:

```
$ cd functional-koans
$ npm install
```

If you want to test the exercises, just executing this command will execute the tests:

```
$ npm test
```

## Exercises
Each exercise's goals are described within the tests.
Try to make the tests pass by filling in the blanks or fixing the broken code.

Note you can run just the tests for one exercise by suffixing the `describe` block with `.only` as follows:

```javascript
describe.only('1. Hello World', () => {
    ...
});
```