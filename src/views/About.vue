<template>
<div>
<b-container center>
    <div>
        <b-row>
            <b-col>
                <div>
                  <headline title="Über uns"></headline>
                </div>
                <br><br>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="px-0">
                <!-- Gruppenbild !-->
                <b-img src="https://picsum.photos/1024/400/?image=41" rounded fluid-grow alt="Responsive image"></b-img>
            </b-col>
        </b-row>
        <br>
        <b-row class="d-flex justify-content-between names">
            <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-md-start align-items-center">
                <p>Mario Sieg</p>
                <p>Alexander Temirbulatow</p>
                <p>Jonas Degener</p>
                <p>Cedric Lange</p>
                <p>Mirko Pleli</p>
                <p>Enrico Franke</p>
                <p>Stephan Strittmatter</p>
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
      <b-row class="my-3">
        <b-col>
          <p>Coding Camp 2020</p>
          <p>Das <a target="_blank" href="https://coding-camp.sybit.de">Sybit Coding Camp 2020</a>, welches durch die Firma Sybit GmbH ins Leben gerufen wurde, hat im Jahr 2020 ein Projekt
            zu „Sei ein Held rette die Welt“ gestartet. Diese Initiative wurde von Fabienne Schwarz-Loy ins Leben gerufen,
            um die Welt ein Stück besser zu machen. Um ein Held zu sein, setzt Fabienne sogenannte Impulse ein, welche die
            Möglichkeit geben sich mit dem Thema „Umweltschutz“ und weiteren wichtigen Gesellschaftlichen Aspekten auseinanderzusetzen.
            Die Umsetzung dieser Idee erfolgte mithilfe 9 Schüler, 12 Azubis sowie einem Betreuer/Ausbilder von Sybit,
            welche 5 Tage lang im Coding Camp im Milchwerk in Radolfzell daran arbeiteten. Die Schüler hatten die Challenge nach
            5 Tagen selbstständiger Entwicklungszeit bei einem remote Go-Live vor weiteren Sybit Mitarbeitern ihre Web-App zu präsentieren.</p>
        </b-col>
      </b-row>
    </div>
</b-container>
</div>
</template>

<style scoped lang="scss">
.names {
    padding-top: 45px;
}
</style>
