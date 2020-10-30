<template>
<b-container>
  <b-row>
    <b-col>
      <headline title="Optionen"></headline>
    </b-col>
  </b-row>
  <b-row class="my-3">
    <b-col>
      <b-list-group>
        <b-list-group-item :to="{ name: 'About'}">Über die App</b-list-group-item>
        <b-list-group-item :to="{ name: 'Team'}">Das Team</b-list-group-item>
        <b-list-group-item :to="{ name: 'Privacy'}">Datenschutz</b-list-group-item>
        <b-list-group-item :to="{ name: 'Imprint'}">Impressum</b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
</b-container>
</template>
