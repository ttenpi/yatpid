<template>
  <header class="main-top-bar">
    <h1>
      <NuxtLink to="/">yatpid</NuxtLink>
    </h1>
  </header>
</template>

<style>
  .main-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--c-bg2, #fff1);
    color: white;
    border-bottom: 2px solid #444;
    height: 60px;
  }

  .main-top-bar h1 {
    margin: 0;
    font-size: 24px;
    font-style: italic;
    text-transform: uppercase;
  }
</style>
