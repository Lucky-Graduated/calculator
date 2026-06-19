# The Odin Project -> Calculator

A simple, responsive calculator built with vanilla HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## Features

- **Basic arithmetic** — addition, subtraction, multiplication, and division
- **Chained operations** — supports sequences like `5 + 3 + 2 =` without needing to press `=` after every step
- **Clear and delete** — `CLEAR` resets the calculator entirely, `DEL` removes the last digit entered
- **Divide-by-zero handling** — displays an error message instead of `Infinity` or crashing
- **Decimal support** — input numbers with decimal points
- **Live display** — shows the current number as you type, button by button
- **Responsive button feedback** — buttons scale and brighten on press/hover for tactile feel
- **Built with event delegation** — a single listener per button group handles all clicks efficiently, rather than wiring up each button individually

## Built With

- HTML5
- CSS3 (Grid layout)
- Vanilla JavaScript (no frameworks or libraries)

## How It Works

The calculator tracks three pieces of state as the user interacts with it:

- `previousInput` — the first number in the current operation
- `currentInput` — the number currently being typed
- `currentOperation` — the operator selected (`add`, `subtract`, `multiply`, `divide`)

Pressing an operator stores the number typed so far and waits for the next one. Pressing `=` evaluates the stored operation against both numbers and displays the result, which can then be used as the start of a new calculation — enabling chained operations like `5 + 3 - 2 =`.

## Getting Started

Clone the repo and open `index.html` in your browser — no build step or dependencies required.

```bash
git clone https://github.com/Lucky-Graduated/calculator.git
cd calculator
open index.html
```

## What I Learned

- Managing UI state across multiple user interactions instead of reacting to each click in isolation
- Using `event.target.dataset` for clean event delegation across grouped buttons
- Structuring CSS Grid layouts for a consistent, responsive button grid
- Debugging timing issues in state updates (e.g. reading a variable before vs. after it's reset)

## Acknowledgments

Project brief from [The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator).