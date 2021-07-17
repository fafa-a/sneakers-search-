<template>
  <div m="y-3">
    <input
      type="text"
      placeholder="type sku"
      border="1 solid gray rounded lg"
      bg="white opacity-90"
      w="14rem"
      v-model="keyword"
      @keydown.enter="sendKeyword"
    />
    <button
      text="white"
      bg="red-500"
      border="rounded lg"
      font="medium sans"
      p="x-1"
      @click="sendKeyword"
    >
      Search
    </button>
  </div>
</template>
<script name="TheInput" setup>
ref: keyword = ""
const emit = defineEmit(["keywordSend"])

const sendKeyword = () => {
  emit("keywordSend", keyword)
  keyword = ""
}
</script>
