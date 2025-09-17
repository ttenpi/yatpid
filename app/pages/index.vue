<template>
  <div>
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
