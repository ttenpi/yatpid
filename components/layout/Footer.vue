<template>
  <footer>
    <hr>
    <nav>
      <ul>
        <li>
          <NuxtLink to="https://tenpi.li/mi">tonsi tenpi
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">about
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="https://github.com/ttenpi/yatpid">
            GitHub</NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="https://github.com/ttenpi/yatpid/blob/main/assets/data/dataset.toml">
            Dataset</NuxtLink>
        </li>
      </ul>
    </nav>
    <p>code licensed under <NuxtLink
        to="https://github.com/ttenpi/yatpid/blob/main/LICENSE.md">
        OQL</NuxtLink>
    </p>
    <p>dataset licensed under <NuxtLink to="">CC0</NuxtLink></p>
  </footer>
</template>

<style>
  footer > nav ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
</style>
