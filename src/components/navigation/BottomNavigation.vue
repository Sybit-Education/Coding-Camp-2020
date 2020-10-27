<template>
    <b-container fluid class="navigation">
  <b-row>
    <b-col class="d-flex justify-content-center">
      <router-link :to="{ name: 'About'}">
        <vue-fontawesome icon="users" size="1.5" color="white"></vue-fontawesome>
        </router-link>
    </b-col>
    <b-col class="d-flex justify-content-center">
        <router-link :to="{ name: 'Home'}">
<vue-fontawesome icon="home" size="2.0" color="white"></vue-fontawesome>
        </router-link>
    </b-col>
    <b-col class="d-flex justify-content-center">
      <router-link :to="{ name: 'Highscore'}">
      <vue-fontawesome icon="list-ol" size="1.75" color="white"></vue-fontawesome>
      </router-link>
    </b-col>
    <b-col class="d-flex justify-content-center">
      <router-link :to="{ name: 'Profile'}">
      <vue-fontawesome icon="user" size="1.75" color="white"></vue-fontawesome>
      </router-link>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.navigation{
  position: fixed;
  bottom: 0px;
  background-color: #333;
  padding: 20px;
}
</style>
