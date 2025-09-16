<template>
  <section class="dict-group">
    <h2 class="dict-group-title">{{ props.title }}</h2>
    <li class="dict-group-contents">
      <slot />
    </li>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string
  }>()
</script>

<style>
  .dict-group {
    border: 2px solid var(--color);
    border-radius: var(--radius);
    overflow: hidden;
  }

  .dict-group:nth-of-type(15n+1) {
    --color: var(--c-theme1);
  }
  .dict-group:nth-of-type(15n+2) {
    --color: var(--c-theme2);
  }
  .dict-group:nth-of-type(15n+3) {
    --color: var(--c-theme3);
  }
  .dict-group:nth-of-type(15n+4) {
    --color: var(--c-theme4);
  }
  .dict-group:nth-of-type(15n+5) {
    --color: var(--c-theme5);
  }
  .dict-group:nth-of-type(15n+6) {
    --color: var(--c-theme6);
  }
  .dict-group:nth-of-type(15n+7) {
    --color: var(--c-theme7);
  }
  .dict-group:nth-of-type(15n+8) {
    --color: var(--c-theme8);
  }
  .dict-group:nth-of-type(15n+9) {
    --color: var(--c-theme9);
  }
  .dict-group:nth-of-type(15n+10) {
    --color: var(--c-theme10);
  }
  .dict-group:nth-of-type(15n+11) {
    --color: var(--c-theme11);
  }
  .dict-group:nth-of-type(15n+12) {
    --color: var(--c-theme12);
  }
  .dict-group:nth-of-type(15n+13) {
    --color: var(--c-theme13);
  }
  .dict-group:nth-of-type(15n+14) {
    --color: var(--c-theme14);
  }
  .dict-group:nth-of-type(15n+15) {
    --color: var(--c-theme15);
  }

  .dict-group-title {
    font-size: 18px;
    margin: 0;
    padding: var(--s-4);
    background-color: var(--color);
    text-align: center;
    color: var(--c-bg);
  }

  .dict-group-contents {
    list-style: none;
    margin: 0;
    padding: 0.1em;
  }
</style>
