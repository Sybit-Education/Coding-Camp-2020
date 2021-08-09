<template>
  <div id="about-view">
    <main-header :headerTitle="title"></main-header>

    <b-container>
      <b-img :src="logo" fluid-grow alt="Logo" class="my-3"/>
      <h3>Die App</h3>
      <p>
        <em>"Sei ein Held rette die Welt"</em> bietet dir spielerisch leicht Impulse, wie du in 
        wenigen Sekunden, mit wenigen Handgriffen oder mit kleinen Entscheidungen die Welt 
        verbessern kannst und dabei sogar selbst Vorteile hast. Denn es ist nicht schwer und tut 
        nicht weh, im Gegenteil: du sparst dabei auch noch Geld, Zeit, Nerven und/oder gewinnst 
        Gesundheit, wertvolle Erfahrungen, Einblicke und Gewohnheiten. Eine absolute 
        Win-Win-Situation also.
      </p>
      <p>
        Denn unsere Welt ist unendlich schön und unendlich wertvoll - aber leider steckt sie aktuell 
        in ziemlich großen Schwierigkeiten. Naturkatastrophen, Pandemie, Hass, Betrug und vieles mehr 
        - es braucht viele Helden, die mit vielen kleinen Entscheidungen zur Rettung beitragen. Denn 
        die großen politischen Entscheidungen (die es selbstverständlich auch braucht) folgen oftmals 
        erst, wenn viele Menschen diese Themen vorleben und einfordern. Daher bieten wir Impulse zu 
        den Themen Klimaschutz, Toleranz, Gerechtigkeit, bewusster Konsum und wie alles miteinander 
        zusammenhängt. Es sind die vielen kleinen Schritte, aus denen die großen Ziele gebaut sind.
      </p>
      <p>
        Macht mit und tragt eure Schritte dazu bei!
      </p>
      <p>
        Mehr Infos gibt es unter <a href="http://www.heldsein.com/>www.heldsein.com</a>
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

      <p>
        Übrigens: Die App muss nicht heruntergeladen werden, sondern funktioniert als Webapp. Wenn du 
        sie mit einem Klick auf deinem Handy öffnen willst, dann klicke (bei Android) in deinem 
        mobilen Browser einfach im Einstellungen-Menü (in der Regel 3 Punkte oder Striche) auf 
        "Zum Startbildschirm hinzufügen" und schon hast du ein schönes App-Symbol auf deinem Bildschirm. 
        Als Apple-Nutzer klickst du im Brower Safari auf das "Teilen"-Icon und anschließen auf 
        "Zum Home-Bildschirm".      
      </p>
      
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
