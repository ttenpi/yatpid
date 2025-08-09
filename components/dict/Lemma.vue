<template>
  <div>
    <div v-if="wordData" class="dict-entry">
      <div v-if="wordData.sitelenpona"
        lang="tok-x-stlnpona"
        class="term-sitelenpona">
        {{ wordData.sitelenpona[0] }}
      </div>
      <div v-else class="term-sitelenpona">
        ❔
      </div>
      <dl>
        <dt class="term-lemma">
          <NuxtLink :to="`/${props.term}`">
            {{ wordData.lemma }}
          </NuxtLink>
        </dt>
        <dd
          v-if="wordData.sitelenpona && wordData.sitelenpona[1]"
          lang="tok-x-stlnpona"
          class="term-sitelenpona-alternate">
          {{ wordData.sitelenpona[1] }}
        </dd>
        <dd v-if="wordData.definitions?.en"
          class="term-definition">
          {{ wordData.definitions.en }}
        </dd>
      </dl>
    </div>

    <!-- fallback -->
    <div v-else class="dict-entry loading">
      <div class="term-sitelenpona">
        ❔
      </div>
      <dl>
        <dt class="term-lemma">
          <NuxtLink :to="`/${props.term}`">
            {{ props.term }}
          </NuxtLink>
        </dt>
        <dd class="term-definition-loading">definition not
          found...</dd>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    term: string
  }>()

  interface Word {
    lemma: string
    sitelenpona?: string[]
    subtitle?: string
    definitions?: {
      en?: string
    }
  }

  const { data: wordData } = useFetch<Word>(`/api/dictionary?word=${props.term}`)
</script>

<style>
  .dict-entry {
    line-height: 1.2;
    display: flex;
    flex-direction: row;
    gap: var(--s-3);
  }

  .term-lemma {
    font-size: 1.2rem;
  }

  .term-sitelenpona {
    font-size: 2.3rem;
    width: 1em;
    text-align: center;
  }
</style>
