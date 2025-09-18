import multiTomlLoader from "../utils/multi-toml-loader"

export default defineEventHandler(async (event) => {
  return multiTomlLoader("categories")
})
