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
            code</NuxtLink> (<NuxtLink
            to="https://github.com/ttenpi/yatpid/blob/main/LICENSE.md">
            <abbr
              title="Website code licensed under the Opinionated Queer License v1.2">OQL</abbr>
          </NuxtLink>)
        </li>
        <li>
          <NuxtLink
            to="https://github.com/ttenpi/yatpid-dataset/tree/main">
            Dataset</NuxtLink> (<NuxtLink
            to="https://github.com/ttenpi/yatpid-dataset/blob/main/LICENSE">
            <abbr
              title="Dataset licensed under CC0 1.0 Universal">CC0</abbr>
          </NuxtLink>)
        </li>
      </ul>
    </nav>
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
