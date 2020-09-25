<template>
  <div>
    <h2>{{ headerTitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    headerTitle: {
      type: String
    }
  }

}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 75px;
  background-color: $color-yellow;
}

h2{
  font-weight: bold;
  padding-left: 16px;
  line-height: 75px;
}

</style>
