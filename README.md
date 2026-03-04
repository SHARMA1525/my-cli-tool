# Simple Node.js CLI Tool

A simple and lightweight Command-Line Interface (CLI) application built using Node.js and [Commander](https://www.npmjs.com/package/commander). This application natively provides multiple math utility commands, file information tracking, and four distinct API integrations without any complex OOP architecture.

---

## Setup Instructions

1. **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/en/) installed.
2. **Install Dependencies**: Open a terminal in the project directory and run:

```bash
npm install
```

---

## Available Commands

The CLI tool supports **10 subcommands** divided into 3 categories.

### Standard Commands

| Command | Description |
|---|---|
| `greet <name>` | Prints a simple greeting to the provided name. |
| `fileinfo <filename>` | Displays the total size (in bytes) of a specific file. |

### Math Commands

| Command | Description |
|---|---|
| `add <n1> <n2>` | Adds two numbers. |
| `sub <n1> <n2>` | Subtracts the second number from the first. |
| `mull <n1> <n2>` | Multiplies two numbers. |
| `div <n1> <n2>` | Divides the first number by the second. |

### API Integrations

| Command | Description |
|---|---|
| `github <username>` | Fetches and displays public GitHub profile info (login name and follower count). |
| `weather <city>` | Fetches current weather conditions via [wttr.in](https://wttr.in). |
| `quote` | Retrieves a random inspirational quote from [dummyjson](https://dummyjson.com). |
| `joke` | Fetches a random setup/punchline joke from the [Official Joke API](https://official-joke-api.appspot.com). |

---

## Example Usage

Run commands by executing `cli.js` with Node:

```bash
# General help
node cli.js --help

# Greet someone
node cli.js greet Hariksh
# Output: Hello Hariksh

# Add two numbers
node cli.js add 15 30
# Output: 45

# Subtract two numbers
node cli.js sub 50 20
# Output: 30

# Multiply two numbers
node cli.js mull 6 7
# Output: 42

# Divide two numbers
node cli.js div 100 4
# Output: 25

# Get a random joke
node cli.js joke
# Output:
# What do you call a fake noodle?
# An impasta.

# Get a random quote
node cli.js quote
# Output:
# "The only way to do great work is to love what you do." - Steve Jobs

# Check weather for a city
node cli.js weather London
# Output: London, City of London, Greater London, England, United Kingdom: ⛅️ +12°C

# Look up a GitHub profile
node cli.js github octocat
# Output:
# User: octocat
# Followers: 22000

# Get info about a file
node cli.js fileinfo package.json
# Output: Size: 312 bytes
```

---

## Dependencies

- [**commander**](https://www.npmjs.com/package/commander) — CLI argument parsing and command routing.
- [**axios**](https://www.npmjs.com/package/axios) — HTTP client for API requests.

Install all dependencies with:

```bash
npm install
```

---

## Project Structure

```
.
├── cli.js          # Main CLI entry point
├── package.json    # Project metadata and dependencies
└── README.md       # This file
```