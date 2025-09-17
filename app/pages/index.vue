<template>
  <div>
    <DictGroupContainer>
      <!-- load a DictGroup for each semantic category -->
      <DictGroup
        v-for="(category, catIdx) in categories?.semantic?.order"
        :key="catIdx" :title="category">
        <!-- use a template v-for wrapper so v-if can reference `word` safely -->
        <template
          v-for="(word, wordIdx) in (dictionary || [])"
          :key="wordIdx">
          <!-- load a DictEntry if the first semantic category matches -->
          <DictEntry
            v-if="word.categories?.semantic && word.categories.semantic[0] === category"
            :term="word.lemma" />
        </template>
      </DictGroup>
    </DictGroupContainer>
  </div>
</template>

<script setup lang="ts">
  interface Word {
    lemma: string
    subtitle?: string
    definitions?: {
      en?: string
    }
    categories?: {
      semantic?: string[]
    }
  }

  interface Category {
    order: string[]
  }

  const {
    data: dictionary,
    status: dictionaryStatus,
    error: dictionaryError,
  } = useFetch<Word[]>("/api/dictionary")

  const {
    data: categories,
    status: categoriesStatus,
    error: categoriesError
  } = useFetch<Record<string, Category>>("/api/categories")

</script>
