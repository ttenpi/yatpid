<template>
  <div>
    <h1>Dictionary</h1>
    <p v-if="status === 'pending'">Loading...</p>
    <p v-else-if="status === 'error'">Error: {{ error }}</p>
    <div v-else>
      <div v-for="(word,key) in dictionary" :key="key">
        <dl>
          <dt><NuxtLink :to="`/${key}`">{{ word.lemma }}</NuxtLink></dt>
          <dd v-if="word.definitions && word.definitions.en">(EN) {{ word.definitions.en }}</dd>
          <dd v-if="word.definitions && word.definitions.nl">(NL) {{ word.definitions.nl }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Word {
  lemma: string;
  subtitle?: string;
  definitions?: {
    en?: string;
    nl?: string;
  };
}

const {
  data: dictionary,
  status,
  error,
} = useFetch<Word[]>("/api/dictionary");
</script>

<style>
dt {
  font-weight: bold;
}
</style>
