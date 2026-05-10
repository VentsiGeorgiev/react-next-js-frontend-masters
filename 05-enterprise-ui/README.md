# Enterprise UI Development: Microfrontends, Testing, & Code Quality

![Enterprise UI Development certificate](certificate/enterprise-ui-dev-v2.jpg)

## Course

This project follows the Frontend Masters course **Enterprise UI Development: Microfrontends, Testing, & Code Quality**.

Course link: <https://frontendmasters.com/courses/enterprise-ui-dev-v2/>

Instructor: Steve Kinney

## Description

Architect large, successful frontend systems. This course focuses on balancing autonomy and complexity across monoliths, microfrontends, and monorepos. It explores runtime and build-time composition, Module Federation, shared state across application boundaries, Turborepo, TypeScript project references, architectural linting, CI/CD, testing strategies, observability, and migration patterns.

The goal of this course is to build better judgment for large frontend codebases: when to keep things simple, when to split systems apart, and how to put useful guardrails around teams, builds, tests, and deployments.

## Project Structure

The runtime composition and Module Federation exercise is in:

```txt
enterprise-ui-federation/
```

The larger enterprise UI workshop project is in:

```txt
enterprise-ui-workshop/
```

The certificate image is stored in:

```txt
certificate/
```

## Federation Exercise

The `enterprise-ui-federation` project demonstrates runtime microfrontends with a host shell and a remote analytics application. It uses:

- React
- TypeScript
- pnpm workspaces
- Rsbuild
- Module Federation
- Nanostores
- Mock Service Worker

Run it from the `enterprise-ui-federation` folder:

```bash
cd enterprise-ui-federation
pnpm install
pnpm dev
```

The host app runs on `http://localhost:3000`, and the remote analytics app runs on `http://localhost:3001`.

## Workshop App

The `enterprise-ui-workshop` project focuses on scaling frontend systems with build-time composition, monorepos, shared packages, architectural constraints, and testing workflows. It includes:

- A Pulse dashboard application
- Shared UI, analytics, users, and utility packages
- Turborepo-oriented workspace structure
- TypeScript project references
- ESLint architecture rules
- MSW mocks
- Playwright end-to-end tests
- Codemod and migration exercises

Run it from the `enterprise-ui-workshop` folder:

```bash
cd enterprise-ui-workshop
pnpm install
pnpm dev
```

## Quality Checks

The workshop project includes scripts for common validation tasks:

```bash
pnpm typecheck
pnpm lint
```

The federation project includes scripts for building and type-checking all workspace packages:

```bash
pnpm build
pnpm typecheck
```

## Notes

This course is focused on frontend architecture at team and system scale. The most important trade-off running through the material is that more autonomy usually adds more operational complexity, so architecture choices should follow real team and product constraints instead of trends.
