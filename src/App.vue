<template>
  <TheBanner
    title="find her"
    extra="sneakers search engine"
    @searchSend="search"
  />
  {{ sneaker }}
</template>

<script setup>
import TheBanner from "./components/banner/TheBanner.vue"

ref: sneaker = {}
const stores = ["stockx", "goat", "flight club", "klekt"]

const getResults = async (query) => {
  const url = "https://serverless-api.fafaa.workers.dev"

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  })
  return res.json()
}

const search = async (key) => {
  const results = await getResults(key)
  sneaker = results
}
</script>

<style></style>
