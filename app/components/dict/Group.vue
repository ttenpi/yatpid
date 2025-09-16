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
    border: 2px solid var(--color, black);
    border-radius: var(--radius);
    overflow: hidden;
  }



  .dict-group-title {
    font-size: 18px;
    margin: 0;
    padding: var(--s-4);
    background-color: var(--color, black);
    text-align: center;
    color: var(--c-bg);
  }

  .dict-group-contents {
    list-style: none;
    margin: 0;
    padding: 0.1em;
  }
</style>
