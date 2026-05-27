<script setup>
  import {
    parseISO,
    differenceInYears,
    addYears,
    differenceInMonths,
    addMonths,
    differenceInDays,
  } from 'date-fns';

  const props = defineProps({
    birthDate: { type: String, required: true },
    deathDate: { type: String, required: true },
  });

  const earthAge = () => {
    const birth = parseISO(props.birthDate);
    const death = parseISO(props.deathDate);

    const years = differenceInYears(death, birth);
    const adjustedYears = addYears(birth, years);

    const months = differenceInMonths(death, adjustedYears);
    const adjustedMonths = addMonths(adjustedYears, months);

    const days = differenceInDays(death, adjustedMonths);

    return { years, months, days };
  };

  const heavenAge = () => {
    const birth = parseISO(props.birthDate);
    const death = parseISO(props.deathDate);
    const DAYS_IN_YEAR = 365.2425;

    const earthSeconds = (death.getTime() - birth.getTime()) / 1000;
    const sec = earthSeconds / 1000 / DAYS_IN_YEAR;

    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = Math.round(sec % 60);

    return { hours, minutes, seconds };
  };
</script>

<template>
  <h2>My Real Ages Are</h2>
  <div class="real-ages">
    <div class="label">
      <p>Earth age:</p>
    </div>
    <div class="age">
      <p>{{ earthAge().years }} year(s)</p>
      <p>{{ earthAge().months }} month(s)</p>
      <p>{{ earthAge().days }} day(s)</p>
    </div>
  </div>
  <div class="real-ages">
    <div class="label">
      <p>Heaven age:</p>
    </div>
    <div class="age">
      <p>{{ heavenAge().hours }} hour(s)</p>
      <p>{{ heavenAge().minutes }} minute(s)</p>
      <p>{{ heavenAge().seconds }} second(s)</p>
    </div>
  </div>
</template>

<style scoped>
  h2 {
    text-align: center;
  }
  .real-ages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .age {
    text-align: left;
  }
</style>
