<template>
  <nav>
    <NuxtLink to="/">back to dictionary</NuxtLink>
  </nav>
  <hr />

  <h1>
    {{ wordData ? wordData.lemma : route.params.word }}
  </h1>

  <!-- Loading status (hidden if loaded) -->
  <p v-if="status === 'pending'">Loading...</p>
  <div v-if="error">
    <p><strong>Word not found</strong></p>
    <p>
      <code>{{ error }}</code>
    </p>
  </div>

  <div v-else-if="wordData">
    <dl>
      <!-- Lemma -->
      <dt>
        {{ wordData.lemma }}
      </dt>
      <!-- Subtitle -->
      <small v-if="wordData.subtitle">
        ({{ wordData.subtitle }})
      </small>
      <!-- Data -->
      <dd v-if="wordData && wordData.semanticCategory">
        (Categories: {{ wordData.semanticCategory }})
      </dd>
      <!-- Definition EN -->
      <dd
        v-if="wordData && wordData.definitions && wordData.definitions.en">
        (EN) {{ wordData.definitions.en }}
      </dd>
      <!-- Definition NL -->
      <dd
        v-if="wordData && wordData.definitions && wordData.definitions.nl">
        (NL) {{ wordData.definitions.nl }}
      </dd>
    </dl>

    <!-- Examples -->
    <section class="examples"
      v-if="wordData && wordData.example">
      <h2>Examples:</h2>
      <dl v-for="(example, index) in wordData.example"
        :key="index">
        <dt>
          {{ example.tok }}
        </dt>
        <small v-if="example.subtitle">
          ({{ example.subtitle }})
        </small>
        <dd v-if="example.en">(EN) {{ example.en }}</dd>
        <dd v-if="example.nl">(NL) {{ example.nl }}</dd>
      </dl>
    </section>

  </div>
</template>

<script setup lang="ts">
  interface WordData {
    lemma?: string
    subtitle?: string
    semanticCategory?: Array<string>
    definitions?: {
      en?: string
      nl?: string
    }
    example?: Array<{
      subtitle?: string
      tok: string
      en?: string
      nl?: string
    }>
  }

  const route = useRoute()
  const {
    data: wordData,
    status,
    error,
  } = useFetch<WordData>(`/api/dictionary?word=${route.params.word}`)
</script>
