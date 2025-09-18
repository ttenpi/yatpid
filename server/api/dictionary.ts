export default defineEventHandler(async (event) => {
  const dictionary = multiTomlLoader("words")
  const query = getQuery(event)

  if (query.word && typeof query.word === "string") {
    const wordKey = query.word.toLowerCase()
    if (!dictionary[wordKey]) {
      throw createError({
        statusCode: 404,
        statusMessage: `{ error: "Word not found" }`,
      })
    } else {
      return dictionary[wordKey]
    }
  }

  return dictionary
})
