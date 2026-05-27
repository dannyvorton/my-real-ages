<script setup>
  const props = defineProps({
    birthDate: { type: String, required: true },
    deathDate: { type: String, required: true },
  });

  const emit = defineEmits(['update:birthDate', 'update:deathDate']);
</script>

<template>
  <h2>Enter Dates For Your Real Ages</h2>
  <div class="date-input">
    <p class="date-label">Birth date:</p>
    <input
      type="date"
      :value="props.birthDate"
      @change="emit('update:birthDate', $event.target.value)"
    />
  </div>
  <div class="date-input">
    <p class="date-label">Current or death date:</p>
    <input
      type="date"
      :value="props.deathDate"
      @change="emit('update:deathDate', $event.target.value)"
    />
  </div>
</template>

<style scoped>
  h2 {
    text-align: center;
  }
  input {
    width: max-content;
  }
  .date-input {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
  .date-label {
    text-align: right;
  }
</style>
