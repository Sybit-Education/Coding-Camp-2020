<template>
  <div id="about-view">
    <main-header :headerTitle="title"></main-header>

    <b-container>
      <b-img :src="logo" fluid-grow alt="Logo" class="my-3"/>
      <h3>Die App</h3>
      <p>
        Fabienne Schwarz-Loy hat durch <em>"Sei ein Held rette die Welt"</em> eine
        Initiative gestartet mit der spielerisch leicht, jeder etwas für die Umwelt tun kann.
      </p>
      <p>
        Wir liefern dir einmal pro Woche einen kurzen Impuls dazu, wie du in wenigen
        Sekunden und mit wenigen Gedanken oder Handgriffen die Welt rettest.
      </p>
      <p>
        <b>Der Hintergrund:</b> Unsere Welt ist unendlich schön und unendlich wertvoll.
        Das sollte so bleiben, aber leider steckt sie aktuell in ziemlich großen
        Schwierigkeiten. Daher ist jeder Mensch, der zur Rettung beiträgt, ein Held
        und wir finden, das sollte belohnt werden.
        </p>
      <p>
        Wir bieten dir Impulse zu folgenden Themen an: <br>
        Umwelt- und Klimaschutz, Gerechtigkeit, Toleranz und wie alles miteinander zusammenhängt.
      </p>
      <p>

        Das Beste daran ist, dass es nicht schwierig ist und keinem weh tut. Du sparst Geld,
        Zeit, Nerven und/oder gewinnst Gesundheit, wertvolle Erfahrungen, Einblicke und
        Gewohnheiten. Wie du das machst wird dir auf der Impulskarte genauer beschrieben.
      </p>

      <h3>Spielregeln</h3>
      <p>Die Spielregeln für "Sei ein Held rette die Welt", sind:</p>
      <ul>
        <li>Alltags Challenges bekommen weniger Punkte</li>
        <li>Aufwendigere Impulse bekommen dagegen eine höhere Punktwertung</li>
        <li>Du verlierst deine Punkte, wenn du nicht aktiv genug teilnimmst</li>
        <li>Nach Erledigung des Impulses kanst du dieses Bestätigen und erhältst dafür Punkte</li>
        <li>Du kannst nur alle 24 Stunden deine Impulse bestätigen </li>
      </ul>

      <h3>Hilfestellung</h3>
      <p>Die Hilfestellungen für "Sei ein Held rette die Welt", sind:</p>

      <ol>
        <li>
            <i aria-hidden="true" class="fa fa-heart" style="color: black; font-size: 1.25rem;"></i>
            Favoriten
            <ul>
              <li>Deine Impulskarten werden dir hier angezeit</li>
            </ul>
        </li>
        <li>
          <i aria-hidden="true" class="fa fa-home" style="color: black; font-size: 1.5rem;"></i>
          Home Botton / Startseite
          <ul>
            <li>Hier findest du neue Impulse</li>
          </ul>
        </li>
        <li>
          <i aria-hidden="true" class="fa fa-list-ol" style="color: black; font-size: 1.25rem;"></i>
          Rangliste
          <ul>
            <li>Man kann seine Punkte mit Freunden und anderen Nutzer vergleichen</li>
          </ul>
        </li>
        <li>
          <i aria-hidden="true" class="fa fa-user" style="color: black; font-size: 1.25rem;"></i>
          Profil
          <ul>
            <li>Profilbild</li>
            <li>Benutzername, E-Mail</li>
            <li>Abmeldung</li>
            <li>Account löschen</li>
          </ul>
        </li>
        <li>
            <i aria-hidden="true" class="fa fa-ellipsis-v" style="color: black; font-size: 1rem;"></i>
          Optionen

          <ul>
            <li>Man wird weitergeleitet auf: Über uns, Datenschutz, Impressum, das Team</li>
          </ul>
        </li>
      </ol>
    </b-container>
  </div>
</template>

<script>
import MainHeader from '@/components/_base/Header'

export default {
  components: {
    MainHeader
  },
  metaInfo () {
    return {
      title: this.title + ' | Sei ein Held - rette die Welt',
      meta: [
        { name: 'description', content: this.title },
        { property: 'og:title', content: this.title },
        { property: 'og:site_name', content: this.title },
        { property: 'og:type', content: 'website' },
        { name: 'robots', content: 'index,follow' }
      ]
    }
  },
  computed: {
    title () {
      return 'Über die App'
    },
    logo () {
      return require('@/assets/Logo-sei-ein-held.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-button {
  z-index: 99;
}
</style>
