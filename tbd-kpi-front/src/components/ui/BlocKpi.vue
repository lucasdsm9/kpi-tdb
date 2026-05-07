<script setup>
defineProps({
  title: { type: String, required: true },
  value: { type: String, required: true },
})
</script>

<template>
  <div class="bg-white rounded-2xl shadow-sm p-5 w-56 flex flex-col gap-4">
    <div class="flex items-start justify-between">
      <span class="text-sm text-gray-500 font-medium">{{ title }}</span>
      <div class="rounded-md w-7 h-7"></div>
    </div>

    <p class="text-4xl font-bold text-gray-900 leading-none">{{ value }}</p>

  </div>
</template>
