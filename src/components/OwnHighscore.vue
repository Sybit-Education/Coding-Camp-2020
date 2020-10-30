<template>
  <div>
    <hr class="my-3" style="border: 1px solid black">
      <b-row>
          <b-col>
                  <b-row class="px-2">
                      <b-col cols="4">
                          {{this.userPoints}}
                      </b-col>
                      <b-col cols="4">
                          Test2
                      </b-col>
                      <b-col cols="4">
                          Test3
                      </b-col>
                  </b-row>
          </b-col>
      </b-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getAllPoints: 'Userdata/getAllPoints'
    }),
    userPoints () {
      return this.getAllPoints
    }
  }
}
</script>

<style>

</style>
