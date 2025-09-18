export default defineEventHandler(async (event) => {
  return multiTomlLoader("categories")
})
