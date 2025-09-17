<template>
  <section class="dict-group" :id="'semantic-' +
    props.title">
    <h2 class="dict-group-title">{{ props.title }}</h2>
    <div class="dict-group-contents">
      <slot />
    </div>
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
    font-size: 1.4rem;
    margin: 0;
    padding: var(--s-5) var(--s-3) var(--s-3);
    background-color: var(--color, black);
    text-align: center;
    color: var(--c-bg);
  }

  .dict-group-contents {
    display: flex;
    flex-direction: column;
    gap: var(--s-5);
    padding: var(--s-3);
  }
</style>
