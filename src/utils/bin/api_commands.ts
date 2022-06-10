// // List of commands that require API calls

import { getQuote } from '../api';
import { getReadme } from '../api';
import { getWeather } from '../api';

export const projects = async (args: string[]): Promise<string> => {
  return `
╭────────────────────── pybash1/befit ───────────────────────╮ ╭────────────────────── rrpm-org/rrpm ───────────────────────╮
│ ╔════════════════════════════════════════════════════════╗ │ │ ╔════════════════════════════════════════════════════════╗ │
│ ║               BeFit - Fitness Tracker                  ║ │ │ ║    RRPM - Remote Repository and Project Management     ║ │
│ ╚════════════════════════════════════════════════════════╝ │ │ ╚════════════════════════════════════════════════════════╝ │
│                                                            │ │                                                            │
│ BeFit is an all in one modern fitness tracker. It logs     │ │ RRPM is a command line tool to track, clone, and organize  │
│ workouts, exercises, and much more, while providing you    │ │ remote repositories and your projects. It also has an      │
│ with and extensive list of 800+ exercises (with detailed   │ │ universal tool to generate different project structures    │
│ instructions)! It can also help you meditate and show your │ │ platform independently! Which leverages the  use of other  │
│ fitness score.                                             │ │ command line tools.                                        │
╰────────────────────────────────────────────────────────────╯ ╰────────────────────────────────────────────────────────────╯

╭──────────────── CutCode-org/CutCode-svelte ────────────────╮ ╭──────────────────── pastegram/backend ─────────────────────╮
│ ╔════════════════════════════════════════════════════════╗ │ │ ╔════════════════════════════════════════════════════════╗ │
│ ║                    CutCode Website                     ║ │ │ ║                  Pastegram - Backend                   ║ │
│ ╚════════════════════════════════════════════════════════╝ │ │ ╚════════════════════════════════════════════════════════╝ │
│                                                            │ │                                                            │
│ CutCode's official website, rewritten in Svelte which      │ │ Pastegram's backend migrated and rewritten in Python       │
│ displays binaries based on client's operating system.      │ │ (FastAPI), with Deta as a Database. It is a GitHub Gists   │
│                                                            │ │ like pasting service.                                      │
╰────────────────────────────────────────────────────────────╯ ╰────────────────────────────────────────────────────────────╯

╭────────────────── Cotidie-project/backend ─────────────────╮ ╭───────────────────── pybash1/openauth ─────────────────────╮
│ ╔════════════════════════════════════════════════════════╗ │ │ ╔════════════════════════════════════════════════════════╗ │
│ ║                    Cotidie - Backend                   ║ │ │ ║   OpenAuth - The open source authentication library    ║ │
│ ╚════════════════════════════════════════════════════════╝ │ │ ╚════════════════════════════════════════════════════════╝ │
│                                                            │ │                                                            │
│ Cotidie is a daily planner, that plans your day/week for   │ │ OpenAuth is a library that does authentication for you,    │
│ you from a list of tasks.                                  │ │ but on your resources. It has magic links, but on your     │
│                                                            │ │ mail server! Paswordless OAuth, but your database! And     │
│                                                            │ │ expanding to much more!                                    │
╰────────────────────────────────────────────────────────────╯ ╰────────────────────────────────────────────────────────────╯
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
