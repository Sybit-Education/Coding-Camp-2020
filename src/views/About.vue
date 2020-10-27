<template>
<div class="background">
<!-- Bootstrap container für den Abstand und die mittige Platzierung !-->
<b-container center>
    <div>

        <b-row>
            <b-col>
                <!-- Überschrift  !-->
                <h1 class="u">ÜBER UNS</h1>
                <br><br>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="px-0">
                <!-- Gruppenbild !-->
                <b-img class="image" src="https://picsum.photos/1024/400/?image=41" rounded fluid-grow alt="Responsive image"></b-img>
            </b-col>
        </b-row>
        <br>
        <!-- Liste von Namen !-->
        <b-row class="d-flex justify-content-between names">

            <!-- Erste Spalte !-->
            <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-start">
                <p>Mario Sieg</p>
                <p>Alexander Temirbulatow</p>
                <p>Jonas Degener</p>
                <p>Cedric Lange</p>
                <p>Mirko Pleli</p>
                <p>Enrico Franke</p>
                <p>Stephan Strittmatter</p>
            </b-col>

            <!-- Zweite Spalte !-->
            <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-center">
                <p>Manuel Metzger</p>
                <p>Paul Huber</p>
                <p>Aaliyah Dere</p>
                <p>Alexander Herrmann</p>
                <p>Robin Gundlach</p>
                <p>Arian Januzi</p>
                <p>Elias Frank</p>
                <p>Emely Langer</p>
            </b-col>

            <!-- Dritte Spalte !-->
            <b-col cols="12" md="4" class="d-flex justify-content-start flex-column align-items-end">
                <p>Lukas Moßbrugger</p>
                <p>Lasse Schneider</p>
                <p>Christian Wolter</p>
                <p>Nicolaj Lerch</p>
                <p>Daniele Suppa</p>
                <p>Raphael Schnick</p>
                <p>Oliver Schönherr</p>
            </b-col>
        </b-row>

        <!-- Text !-->
        <h3 class="beschreibung">Das Coding Camp</h3>
        <h5 class="description">Das Coding Camp, welches durch die Firma Sybit GmbH ins Leben gerufen wurde, hat im Jahr 2020 ein Projekt zu „Sei ein Held rette die Welt“ gestartet. Diese Initiative wurde von Fabienne Schwarz-Loy ins Leben gerufen, um die Welt ein Stück besser zu machen. Um ein Held zu sein, setzt Fabienne sogenannte Impulse ein, welche die Möglichkeit geben sich mit dem Thema „Umweltschutz“ und weiteren wichtigen Gesellschaftlichen Aspekten auseinanderzusetzen. Die Umsetzung dieser Idee erfolgte mithilfe 9 Schüler, 12 Azubis sowie einem Betreuer/Ausbilder von Sybit, welche 5 Tage lang im Coding Camp im Milchwerk in Radolfzell daran arbeiteten. Die Schüler hatten die Challenge nach 5 Tagen selbstständiger Entwicklungszeit bei einem remote Go-Live vor weiteren Sybit Mitarbeitern ihre Webapp zu präsentieren.</h5>

    </div>
</b-container>
</div>
</template>

<style scoped>
.background {
    background-color: #FFFFFFFF;
}
.beschreibung {
    padding-top: 30px;

}
.description {
    border: 4px solid black;
    border-radius: 10px;
    margin-top: 35px;
    padding: 17px;
}
.names {
    padding-top: 45px;
}
.image {
    transition: box-shadow .3s;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.image:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.u {
    padding-top: 30px;
    letter-spacing: 40px;
    font-size: 400%;
    color: gray;
}
</style>
