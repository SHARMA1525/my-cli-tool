#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Command } = require('commander');
const axios = require('axios');
const program = new Command();
const fs_1 = __importDefault(require("fs"));
program
    .command("greet <name>")
    .action((name) => console.log(`Hello ${name}`));
program
    .command("add <n1> <n2>")
    .description("Add two numbers")
    .action((n1, n2) => { console.log(Number(n1) + Number(n2)); });
program
    .command("sub <n1> <n2>")
    .description("Subtract two numbers")
    .action((n1, n2) => { console.log(Number(n1) - Number(n2)); });
program
    .command("mull <n1> <n2>")
    .description("Multiply two numbers")
    .action((n1, n2) => { console.log(Number(n1) * Number(n2)); });
program
    .command("div <n1> <n2>")
    .description("Division of two numbers")
    .action((n1, n2) => { console.log(Number(n1) / Number(n2)); });
program
    .command("joke")
    .description("Random Joke")
    .action(async () => {
    try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        console.log(response.data.setup);
        console.log(response.data.punchline);
    }
    catch (error) {
        console.log(error);
    }
});
program
    .command('quote')
    .action(async () => {
    try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        console.log(`"${response.data.quote}" - ${response.data.author}`);
    }
    catch (err) {
        console.log("Error fetching quote");
    }
});
program
    .command('weather <city>')
    .action(async (city) => {
    try {
        const response = await axios.get(`https://wttr.in/${city}?format=3`);
        console.log(response.data);
    }
    catch (err) {
        console.log("Error fetching weather");
    }
});
program
    .command('github <username>')
    .action(async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log("User:", response.data.login);
        console.log("Followers:", response.data.followers);
    }
    catch (err) {
        console.log("Error finding user");
    }
});
program
    .command('fileinfo <filename>')
    .action((filename) => {
    try {
        const stats = fs_1.default.statSync(filename);
        console.log("Size:", stats.size, "bytes");
    }
    catch (err) {
        console.log("Error:", err.message);
    }
});
program.parse();
