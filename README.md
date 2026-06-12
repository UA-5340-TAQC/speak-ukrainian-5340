# speak-ukrainian-5340

End-to-end UI test automation project for the Speak Ukrainian website, built with Playwright and TypeScript.

**Version:** 1.0.0  
**Last updated:** 2026-06-12

## 📊 Test Reports

[![Allure Report](https://img.shields.io/badge/Allure-View%20Report-brightgreen?logo=allure)](https://UA-5340-TAQC.github.io/speak-ukrainian-5340/main/index.html)

## Features

- Cross-browser UI testing (Chromium, Firefox, WebKit)
- Page Object Model structure for maintainable test code
- Environment-driven runtime config via `.env` (`BASE_URL`, `HEADLESS`)
- Test diagnostics on failures (`trace`, `screenshot`, `video`)
- Allure result generation for richer reporting
- CI execution on pushes and pull requests

## Tech stack

- Playwright Test
- TypeScript
- ESLint + Prettier
- dotenv

## Prerequisites

- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Installation

1. Install dependencies:

```bash
npm ci
```

Use `npm install` instead of `npm ci` only when you are intentionally updating `package-lock.json`.

2. Install Playwright browsers:

```bash
npx playwright install
```

## Environment setup

This project reads runtime settings from a local `.env` file via `config/env.ts`.

Create `.env` in the project root and add:

```env
BASE_URL=https://your-target-url.example
HEADLESS=false
```

`HEADLESS` defaults to `true` when not set. Use `HEADLESS=false` for local headed runs.

## Run tests

Run all tests (all configured browsers):

```bash
npm test
```

Run for one browser:

```bash
npx playwright test --project=chromium
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run a specific spec file:

```bash
npx playwright test tests/speak-ukrainian.example.spec.ts
```

Run the standard local quality check pipeline:

```bash
npm run pc
```

## Reports

After execution, open the Playwright report:

```bash
npm run report
```

## Lint and formatting

```bash
npm run lint
npm run lint:fix
npm run format
```

`npm run format` runs `prettier --write .` and formats the whole repository.

## CI

GitHub Actions workflow is defined in `.github/workflows/playwright.yml` and runs on pushes and pull requests to `main`.

Pipeline steps:

- Install dependencies with `npm ci`
- Check formatting with `npx prettier --check .`
- Run ESLint
- Install Playwright browsers with OS dependencies
- Execute Playwright tests
- Upload `playwright-report` artifact

## Project structure

```text
config/          Environment and shared config
fixtures/        Custom Playwright fixtures
pages/           Page objects and UI components
tests/           Test specs
```

## Notes

- `playwright.config.ts` is configured for Chromium, Firefox, and WebKit projects.
- Reporters are configured as `list` and `allure-playwright`.
- `headless` is controlled by `HEADLESS` from environment config.
