<template>
  <div
    flex="~ col"
    justify="center"
    place="items-center"
    w="full"
    h="96"
    bg="sneakers cover center"
    title="Photo by SoleSavy on Unsplash"
  >
    <div
      backdrop="filter blur-sm"
      bg="white opacity-30"
      font="medium sans"
      border="1 solid rounded white opacity-20"
      tracking="wide"
      w="1/3"
      p="x-2 y-1"
    >
      <h1 text="3xl center uppercase white">
        {{ title }}
      </h1>
      <h2 text="2xl center capitalize white">
        {{ extra }}
      </h2>
      <TheInput @keywordSend="handleKeyword" />
    </div>
  </div>
</template>

<script setup>
import TheInput from "./TheInput.vue"

const emit = defineEmit(["searchSend"])
defineProps({
  title: {
    type: String,
    required: true,
  },
  extra: {
    type: String,
  },
})
const handleKeyword = (keyword) => {
  emit("searchSend", keyword)
}
</script>

<style lang="scss" scoped></style>
