import tomlLoader from "~/utils/toml-loader";

export default defineEventHandler(async (event) => {
  const data = tomlLoader("dataset.toml");
  const query = getQuery(event);

  interface Word {
    lemma: string;
    [key: string]: any;
  }

  // Convert words array into object with lemmas as key
  const dictionary: Record<string, Word> = Object.fromEntries(
    data.words.map((word: Word) => [word.lemma, word]),
  );

  if (query.word && typeof query.word === "string") {
    const wordKey = query.word.toLowerCase();
    if (!dictionary[wordKey]) {
      throw createError({
        statusCode: 404,
        statusMessage: `{ error: "Word not found" }`,
      });
    } else {
      return dictionary[wordKey];
    }
  }

  return dictionary;
});
