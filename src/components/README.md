# Component summaries

- `HeaderCp.vue`
  - Simple header component that renders the app title `My Real Ages`.

- `ScriptureCp.vue`
  - Shows three scripture passages with links to source references.
  - Uses responsive line breaks for better display on smaller screens.

- `DateCp.vue`
  - Renders date input fields for `birthDate` and `deathDate`.
  - Emits `update:birthDate` and `update:deathDate` events on input changes for parent components to reactively update values.

- `AgeCp.vue`
  - Calculates and displays two age formats from the provided `birthDate` and `deathDate` props.
  - Shows "Earth age" in years, months, and days, and "Heaven age" in hours, minutes, and seconds.

- `FooterCp.vue`
  - Displays the site footer with project disclaimers and current year.
  - Includes external links to GitHub, LinkedIn, and X.
