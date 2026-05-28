<script setup>
  import { ref } from 'vue';
  import { formatISO } from 'date-fns';

  import HeaderCp from './components/HeaderCp.vue';
  import ScriptureCp from './components/ScriptureCp.vue';
  import DateCp from './components/DateCp.vue';
  import AgeCp from './components/AgeCp.vue';
  import FooterCp from './components/FooterCp.vue';

  const today = formatISO(new Date(), { representation: 'date' });
  const birthDate = ref(today);
  const deathDate = ref(today);
</script>

<template>
  <HeaderCp />
  <ScriptureCp />
  <DateCp v-model:birthDate="birthDate" v-model:deathDate="deathDate" />
  <AgeCp v-model:birthDate="birthDate" v-model:deathDate="deathDate" />
  <FooterCp />
</template>

<style scoped></style>
