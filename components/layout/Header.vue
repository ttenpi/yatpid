<template>
  <header class="main-top-bar">
    <h1>
      <NuxtLink to="/">yatpid</NuxtLink>
    </h1>
    <nav>
      <ul>
        <li>
          words
        </li>
        <li>
          learn
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  .main-top-bar {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: var(--s-1, 8px);
    background-color: var(--c-bg2, #fff1);
    color: white;
    border: 2px solid #444;
    border-radius: var(--radius);
    height: 60px;
    gap: var(--s-1);
  }

  .main-top-bar h1 {
    margin: 0;
    font-size: 24px;
    font-style: italic;
    text-transform: uppercase;
  }

  .main-top-bar nav ul {
    margin-left: auto;
    list-style: none;
    padding: 0;
    display: flex;
    gap: var(--s-1);
  }
</style>
