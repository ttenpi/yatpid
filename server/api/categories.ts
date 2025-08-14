import tomlLoader from "~/utils/toml-loader"

export default defineEventHandler(async (event) => {
  const data = tomlLoader("dataset.toml")

  return data.categories
})
