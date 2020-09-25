<template>
  <b-row align-v="center">
    <b-col>
      <b-row class="text-center">
        <b-col align-h="center"><b-spinner></b-spinner></b-col>
      </b-row>
      <b-row>
        <b-col align-h="center">{{ message }}</b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'LoadingIndicator',
  props: {
    message: {
      type: String
    }
  }
}
</script>

<style>

</style>
