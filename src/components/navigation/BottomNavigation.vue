<template>
  <b-navbar type="dark" variant="dark" fixed="bottom">
    <b-container>
      <b-navbar-nav justified align="start" style="width:100%">
        <b-nav-item to="/assigned" class="mr-2 mr-md-4">
          <vue-fontawesome icon="heart" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item to="/" class="mx-2 mx-md-4">
          <vue-fontawesome icon="home" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item to="/highscore" class="mx-2 mx-md-4">
          <vue-fontawesome icon="list-ol" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item to="/profile" class="mx-2 mx-md-4">
          <vue-fontawesome icon="user" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>

        <b-nav-item to="/options"  class="mx-2 mx-md-4">
          <vue-fontawesome icon="ellipsis-v" size="1.75" color="white"></vue-fontawesome>
        </b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>
