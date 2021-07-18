<template>
  <TheBanner
    title="find her"
    extra="sneakers search engine"
    @searchSend="search"
  />
  <div v-if="isLoading">
    <Card :data="sneaker" />
  </div>
</template>

<script setup>
import TheBanner from "./components/banner/TheBanner.vue"
import Card from "./components/Card.vue"

ref: sneaker = {}
ref: isLoading = false
ref: href = ""
ref: dataSize = {}
const stores = ["stockx", "goat", "flight club", "klekt"]

const getResults = async (query) => {
  // const url = "https://serverless-api.fafaa.workers.dev"
  const url = "http://127.0.0.1:8787"

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: { "Content-Type": "application/json" },
  })
  return res.json()
}

const getSize = async () => {
  const url = `https://stockx.com/api/products/${href}?includes=market`
  const res = await fetch(url, { method: "GET" })
  return res.json()
}

const search = async (key) => {
  const results = await getResults(key)
  sneaker = results
  isLoading = true
  href = sneaker.Products[0].urlKey
  dataSize = await getSize()
}
</script>

<style></style>
