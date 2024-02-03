# GitHub Resume Creator

A responsive React Single Page Application (SPA) built with Next.js, designed to dynamically generate a GitHub resume showcasing user profiles and repository information fetched directly from GitHub's API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Application Structure

This application consists of two main screens accessible via the following routes:

### Home Page (`/`)

A landing page with an input field for a GitHub username and a submit button.
<img width="1792" alt="Снимок экрана 2024-02-03 в 13 43 49" src="https://github.com/SerafimPoch/koitechs-github-resume/assets/20750239/12408f39-789d-47c5-8e81-b651836361ca">

### Resume Page (`/:username`)

Displays the GitHub user's profile and repository information.
<img width="1792" alt="Снимок экрана 2024-02-03 в 13 43 57" src="https://github.com/SerafimPoch/koitechs-github-resume/assets/20750239/7002fda4-268a-469c-a695-853788ac39e0">

Deployed at: https://koitechs-github-resume.vercel.app/
