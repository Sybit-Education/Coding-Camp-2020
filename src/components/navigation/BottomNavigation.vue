<template>
  <b-navbar class="navbar" type="dark" variant="dark" fixed="bottom">
    <b-container>
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'AssignedImpulse'}">
          <vue-fontawesome icon="heart" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Home'}">
          <vue-fontawesome icon="home" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Highscore'}">
          <vue-fontawesome icon="list-ol" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Profile'}">
          <vue-fontawesome icon="user" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item :to="{ name: 'Options'}" right>
          <vue-fontawesome icon="ellipsis-v" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
}
</script>
