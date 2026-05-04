<script setup></script>

<template>
  <h2>Enter Dates For Your Real Ages</h2>
  <div class="date-input">
    <p class="date-label">Birth date:</p>
    <input type="date" v-model="birthDate" />
  </div>
  <div class="date-input">
    <p class="date-label">Current or death date:</p>
    <input type="date" v-model="deathDate" />
  </div>
</template>

<style scoped>
  h2 {
    text-align: center;
  }
  .date-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .date-label {
    text-align: right;
  }
</style>
