<template>
  <div>
    <h1>Dictionary</h1>
    <DictGroup title="testing 1">
      <DictLemma term="wawa" />
      <DictLemma term="melisma" />
      <DictLemma term="akesi" />
    </DictGroup>
    <DictGroup title="testing 2">
      <DictLemma term="ala" />
      <DictLemma term="anpa" />
    </DictGroup>
    <DictGroup title="testing 3">
      <DictLemma term="tonsi" />
    </DictGroup>


    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="status === 'error'">Error:
      <code>{{ error }}</code>
    </p>
    <div v-else>
      <div v-for="(word, key) in dictionary" :key="key">
        <dl>
          <dt>
            <NuxtLink :to="`/${key}`">
              {{ word.lemma }}
            </NuxtLink>
          </dt>
          <dd
            v-if="word.definitions && word.definitions.en">
            {{ word.definitions.en }}
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Word {
    lemma: string
    subtitle?: string
    definitions?: {
      en?: string
    }
  }

  const {
    data: dictionary,
    status,
    error,
  } = useFetch<Word[]>("/api/dictionary")
</script>
