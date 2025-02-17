<template>
  <p><NuxtLink to="/">back to dictionary</NuxtLink></p>
  <hr />
  <h1>{{ wordData ? wordData.lemma : route.params.word }}</h1>
  <p v-if="status === 'pending'">Loading...</p>
  <p v-if="error">Error: {{ error }}</p>
  <div v-else-if="wordData">
    <dl>
      <dt v-if="wordData">{{ wordData.lemma }}</dt>
      <dd v-if="wordData && wordData.definitions && wordData.definitions.en">
        (EN) {{ wordData.definitions.en }}
      </dd>
      <dd v-if="wordData && wordData.definitions && wordData.definitions.nl">
        (NL) {{ wordData.definitions.nl }}
      </dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
interface WordData {
  lemma?: string;
  definitions?: {
    en?: string;
    nl?: string;
  };
}

const route = useRoute();
const {
  data: wordData,
  status,
  error,
} = useFetch<WordData>(`/api/dictionary?word=${route.params.word}`);
</script>
