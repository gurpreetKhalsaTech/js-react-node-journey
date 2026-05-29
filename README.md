# JS / React / Node Journey

My transition from Senior Flutter Developer (7+ years) to Full-Stack JavaScript Engineer.

**Goal:** Portfolio-ready in 12 weeks — React, Node.js, TypeScript, Next.js.

## Stack I'm learning
- JavaScript (ES6+) & TypeScript
- React + Vite + Tailwind CSS
- Node.js + Express
- MongoDB + PostgreSQL (Prisma)
- Next.js (App Router)
- Testing: Vitest, React Testing Library, Playwright

## Daily Log

### Day 1 — May 25, 2026
- Set up Mac dev environment: Homebrew, nvm, Node 24 LTS, pnpm, VS Code
- Configured Git and GitHub
- Wrote and ran first Node script (`day1.js`)
- Created this repo


### Day 5 — Express REST API (CRUD)

**Project:** express-task-api

#### What I built
My first ever backend server — a REST API for a task manager built with Node.js and Express.

#### Endpoints built
- GET /tasks — list all tasks
- GET /tasks/:id — get one task by id
- POST /tasks — create a new task
- PATCH /tasks/:id — update task fields
- DELETE /tasks/:id — delete a task

#### Concepts learned
- HTTP methods and when to use each (GET, POST, PATCH, DELETE)
- REST conventions — model around resources, use methods as verbs
- Status codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 404 (Not Found)
- req.params — reading route parameters like /tasks/:id
- req.body — reading the JSON body sent in POST/PATCH requests
- parseInt(req.params.id, 10) — URL params are always strings, must convert to number
- return before error responses — prevents "headers already sent" crash
- Postman — testing APIs with GET/POST/PATCH/DELETE requests and JSON bodies

#### Bugs I hit and fixed
- req.body was undefined — Postman was set to raw + Text instead of raw + JSON
- 404 on valid routes — file wasn't saved before testing
- bcrypt build error — switched to bcryptjs (pure JS, no compilation needed)
