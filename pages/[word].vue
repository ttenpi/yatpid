<template>
  <p><NuxtLink to="/">back to dictionary</NuxtLink></p>
  <hr />
  <h1>{{ wordData ? wordData.lemma : route.params.word }}</h1>
  <p v-if="status === 'pending'">Loading...</p>
  <div v-if="error">
    <p><strong>Word not found</strong></p>
    <p>
      Error: <code>{{ error }}</code>
    </p>
  </div>
  <div v-else-if="wordData">
    <dl>
      <dt v-if="wordData">
        {{ wordData.lemma }}
        <em v-if="wordData.subtitle">({{ wordData.subtitle }})</em>
      </dt>
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
  subtitle?: string;
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
