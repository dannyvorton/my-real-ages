# App Data Flow

This diagram shows how data moves from `App.vue` into the component tree in `vue/src/components`.

```text
App.vue
  ├─ defines reactive refs:
  │    birthDate
  │    deathDate
  ├─ renders components:
  │    HeaderCp
  │    ScriptureCp
  │    DateCp
  │    AgeCp
  │    FooterCp
  └─ passes data via v-model bindings:
       DateCp <─ v-model:birthDate="birthDate"
                 v-model:deathDate="deathDate"
       AgeCp  <─ v-model:birthDate="birthDate"
                 v-model:deathDate="deathDate"
```

- `App.vue` owns the source of truth for `birthDate` and `deathDate`.
- `DateCp` receives those values and emits updates when the user changes the date inputs.
- `AgeCp` receives the same reactive values and recalculates displayed age output.
- `HeaderCp`, `ScriptureCp`, and `FooterCp` render static content and do not receive the date data.
