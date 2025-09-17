<template>
  <div>
    <div v-if="wordData" class="dict-entry">
      <div v-if="wordData.sitelenpona" lang="tok-x-stlnpona"
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

    <!-- loading fallback -->
    <div v-else-if="wordStatus === 'pending'"
      class="dict-entry loading">
      <div class="term-sitelenpona"></div>
      <dl>
        <dt class="term-lemma loading">
          <NuxtLink :to="`/${props.term}`">
            {{ props.term }}
          </NuxtLink>
        </dt>
        <dd class="term-definition-loading">[loading...]
        </dd>
      </dl>
    </div>

    <!-- error fallback -->
    <div v-else-if="wordError" class="dict-entry error">
      <div class="term-sitelenpona">
        ❔
      </div>
      <dl>
        <dt class="term-lemma error">
          <NuxtLink :to="`/${props.term}`">
            {{ props.term }}
          </NuxtLink>
        </dt>
        <dd class="term-definition-loading">[definition not
          found...]</dd>
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

  const {
    data: wordData,
    status: wordStatus,
    error: wordError
  } = useFetch<Word>(`/api/dictionary?word=${props.term}`)
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
    font-weight: bold;
  }

  .term-lemma.loading {
    opacity: 0.5;
  }

  .term-lemma.error {
    color: var(--c-danger);
  }

  .term-sitelenpona {
    font-size: 2.3rem;
    width: 1em;
    text-align: center;
  }
</style>
