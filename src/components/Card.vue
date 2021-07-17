<template>
  <div border="1 solid gray-500" class="w-33vw" p="x-2">
    <img
      :src="data.Products[0].media.thumbUrl"
      :alt="data.Products[0].shortDescription"
    />
    <p><span>sku:</span>{{ data.Products[0].styleId }}</p>
    <p><span>colors:</span>{{ data.Products[0].colorway }}</p>
    <p><span>gender:</span>{{ data.Products[0].gender }}</p>
    <p><span>retail price:</span>{{ data.Products[0].retailPrice }}</p>
    <p><span>release date:</span>{{ data.Products[0].releaseDate }}</p>
    <p>
      <span>short description:</span>{{ data.Products[0].shortDescription }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
