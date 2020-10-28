<template>
    <div>
      <h1 class="heading">{{ title }}</h1>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped lang="scss">
.heading {
  margin-top: 30px;
}
</style>
