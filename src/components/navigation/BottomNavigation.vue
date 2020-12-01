<template>
  <b-navbar class="navbar" type="dark" variant="dark" fixed="bottom">
    <b-container>
      <b-navbar-nav justified align="start">
        <b-nav-item :to="{ name: 'AssignedImpulse'}" class="mr-3">
          <vue-fontawesome icon="heart" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Home'}" class="mx-3">
          <vue-fontawesome icon="home" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Highscore'}" class="mx-3">
          <vue-fontawesome icon="list-ol" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Profile'}" class="mx-3">
          <vue-fontawesome icon="user" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item :to="{ name: 'Options'}"  class="mx-3">
          <vue-fontawesome icon="ellipsis-v" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>
