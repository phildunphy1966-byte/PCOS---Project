# How to use this package in Google AI Studio

1. Push the complete extracted folder to a new GitHub repository. Keep the folder structure unchanged.
2. In Google AI Studio, import the GitHub repository (or upload the dossier/configuration files if using a fresh build workspace).
3. Provide `01_PROJECT_BRIEF/PCOS_Unlocked_Complete_Project_Dossier.md`, all files in `02_JSON_CONFIG/`, the SVGs in `05_ASSETS/diagrams/`, and `03_PROMPTS/GOOGLE_AI_STUDIO_MASTER_PROMPT.md` as project context.
4. Paste the master prompt and ask AI Studio to implement the complete application. The dossier and JSON files are the specification; they are not a running website by themselves.
5. Ask AI Studio to implement and test every route, not just the homepage. Use `01_PROJECT_BRIEF/PCOS_Unlocked_Complete_Project_Dossier.md` Part 6 as the canonical route list.
6. After generation, run the app, fix dependency/build errors, test direct nested routes and refresh, and verify mobile, keyboard and reduced-motion behaviour.
7. Deploy only after clinical content, source links, privacy and accessibility have been reviewed.

## Important technical note
This package is a GitHub-ready specification and asset bundle for AI Studio to generate the frontend. It intentionally does not pretend that a functioning website has already been built. If AI Studio creates a Vite/React project, keep its generated `package.json` and lockfile consistent with the installed dependencies. Do not paste the JSON configuration files into `package.json`.
