# PCOS Unlocked — runnable React + Vite project

This ZIP contains a runnable frontend scaffold plus the original research/design specification package.

## Run locally
1. Extract this ZIP.
2. Open the extracted `pcos_unlocked_fixed` folder in your terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Import into Google AI Studio
Import the repository root (the folder containing `package.json` and `index.html`), not the nested `project-docs` folder.
Google AI Studio must see `package.json` at the repository root.

## Important
- `package.json` defines React, React DOM and Vite dependencies.
- `src/` contains the running application.
- `public/diagrams/` contains the supplied SVG diagrams.
- `project-docs/` preserves the original dossier, JSON configuration, prompts and research notes.
- This is a working frontend foundation covering the planned routes and core interactions. Review all medical copy and sources with a qualified clinician before public launch.
- Optional age preference is stored locally in the browser only. No login, diagnosis or symptom collection is implemented.

## If Google AI Studio still shows a dependency error
Check that the imported repository root contains `package.json` (not one folder deeper). Retry the import after syncing the complete repository. If it still fails, open the dependency installation details and share the full log; the short banner alone does not identify a package-resolution cause.
