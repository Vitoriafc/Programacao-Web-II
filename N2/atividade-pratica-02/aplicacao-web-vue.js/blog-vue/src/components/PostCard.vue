<template>
  <div class="post-card">
    <h3>{{ titulo }}</h3>
    <p>{{ resumo }}</p>
  </div>
</template>

<script setup>
defineProps(['titulo', 'resumo'])
</script>

<style scoped>
.post-card {
  margin-bottom: 40px;
}
h3 {
  color: #2d5284;
  font-size: 1.4rem;
  margin: 0 0 8px 0;
  font-weight: bold;
}
p {
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
}
</style>