// // List of commands that require API calls

import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  return `
╭──────────────────────────────────────────────────────── <a href="https://github.com/pybash1/befit">pybash1/befit</a> ─────────────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                                  <a href="https://befit-tracker.vercel.app">BeFit - Fitness Tracker</a>                                                   ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│ BeFit is an all in one modern fitness tracker. It logs ur workouts, exercises, and much more, while providing you with an      │
│ extensive list of 800+ exercises (with detailed instructions)! It can also help you meditate and show your fitness score.      │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭──────────────────────────────────────────────────────── <a href="https://github.com/rrpm-org/rrpm">rrpm-org/rrpm</a> ─────────────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                        RRPM - Remote Repository and Project Management                                     ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│ RRPM is a command line tool to track, clone, and organize remote repositories and your projects. It also has an universal      │
│ tool to generate different project structures platform independently! Which leverages the  use of other command line tools.    │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭────────────────────────────────────────────────── <a href="https://github.com/CutCode-org/CutCode-svelte">CutCode-org/CutCode-svelte</a> ──────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                                       CutCode Website                                                      ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│         CutCode's official website, rewritten in Svelte which displays binaries based on client's operating system.            │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭───────────────────────────────────────────────────── <a href="https://github.com/pastegram/backend">pastegram/backend</a> ────────────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                                   Pastegram - Backend                                                      ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│ Pastegram's backend migrated and rewritten in Python(FastAPI), with Deta as a Database. It is a GitHub Gists like pasting      │
│ service.                                                                                                                       │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭────────────────────────────────────────────────── <a href="https://github.com/Cotidie-project/backend">Cotidie-project/backend</a> ─────────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                                   Cotidie - Backend                                                        ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│                       Cotidie is a daily planner, that plans your day/week for you from a list of tasks.                       │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯

╭───────────────────────────────────────────────────── <a href="https://github.com/pybash1/openauth">pybash1/openauth</a> ─────────────────────────────────────────────────────────╮
│ ╔════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗ │
│ ║                                    OpenAuth - The open source authentication library                                       ║ │
│ ╚════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝ │
│                                                                                                                                │
│ OpenAuth is a library that does authentication for you, but on your resources. It has magic links, but on your mail server!    │
│ Paswordless OAuth, but your database! And expanding to much more!                                                              │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
`;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = await getReadme();
  return `Opening GitHub README...\n
  ${readme}`;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = await getWeather(city);
  return weather;
};
