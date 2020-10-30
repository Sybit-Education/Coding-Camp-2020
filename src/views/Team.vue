<template>
<b-container>
  <b-row>
    <b-col>
      <headline title="Das Team"></headline>
    </b-col>
  </b-row>
  <b-row class="my-3">
    <b-col>
      <h2>Coding Camp 2020</h2>
      <p>Das <a target="_blank" href="https://coding-camp.sybit.de">Sybit Coding Camp 2020</a>, welches
        durch die Firma Sybit GmbH ins Leben gerufen wurde, hat im Jahr 2020 das Projekt
        zu „Sei ein Held - rette die Welt“ gestartet.
      </p><p>
        Die <a target="_blank" href="https://inspectad.wixsite.com/seieinheld">Initiative</a> wurde von
        Fabienne Schwarz-Loy ins Leben gerufen, um die Welt ein Stück besser zu machen.
        Um ein Held zu sein, setzt Fabienne sogenannte Impulse ein, welche die
        Möglichkeit geben sich mit dem Thema „Umweltschutz“ und weiteren wichtigen Gesellschaftlichen
        Aspekten auseinanderzusetzen.
      </p><p>
        Die Umsetzung dieser Idee erfolgte mithilfe von 10 Schüler*innen, 12 Azubis sowie einem
        Betreuer/Ausbilder von Sybit, welche 5 Tage lang im Coding Camp im Milchwerk in Radolfzell
        daran arbeiteten. Die Schüler*innen hatten die Challenge nach fünf Tagen selbstständiger
        Entwicklungszeit bei einem remote Go-Live vor weiteren Sybit Mitarbeitern*innen
        ihre Web-App zu präsentieren.
      </p>
    </b-col>
  </b-row>
  <b-row>
    <b-col class="px-0">
      <b-img :src="team" fluid alt="Das Sybit Coding Camp 2020 Team"/>
    </b-col>
  </b-row>
  <b-row class="d-flex justify-content-between names">
    <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-md-start align-items-center">
        <p>Mario Sieg</p>
        <p>Alexander Temirbulatow</p>
        <p>Jonas Degener</p>
        <p>Cedric Lange</p>
        <p>Mirko Pleli</p>
        <p>Enrico Franke</p>
        <p>Stephan Strittmatter</p>
        <p>Maren Bräckow</p>
    </b-col>
    <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-md-center align-items-center">
        <p>Manuel Metzger</p>
        <p>Paul Huber</p>
        <p>Aaliyah Dere</p>
        <p>Alexander Herrmann</p>
        <p>Robin Gundlach</p>
        <p>Arian Januzi</p>
        <p>Elias Frank</p>
        <p>Emely Langer</p>
    </b-col>
    <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-md-end align-items-center">
        <p>Lukas Moßbrugger</p>
        <p>Lasse Schneider</p>
        <p>Christian Wolter</p>
        <p>Nicolaj Lerch</p>
        <p>Daniele Suppa</p>
        <p>Raphael Schnick</p>
        <p>Oliver Schönherr</p>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
export default {
  computed: {
    team () {
      return require('@/assets/team.jpg')
    }
  }
}
</script>
<style scoped lang="scss">
.names {
    padding-top: 45px;
}
</style>
