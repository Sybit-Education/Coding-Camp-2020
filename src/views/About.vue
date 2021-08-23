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
        Mehr Infos gibt es unter <a href="http://www.heldsein.com/">www.heldsein.com</a>
      </p>

      <h3>Spielregeln</h3>
      <ul>
        <li>
          In regelmäßigen Abständen werden neue Impulse veröffentlicht.
        </li>
        <li>
          Du kannst einen Impuls mit dem +Button als Challenge annehmen und ihn mit dem
          Haken bestätigen, sobald du diesen Impuls angewendet / erfüllt hast. Für die
          aktive Anwendung bekommst du Punkte gutgeschrieben. Je mehr Impulse du anwendest,
          umso mehr Punkte kannst du sammeln. Impulse, die mehrfach/regelmäßig angewendet
          werden können, dürfen auch mehrfach angenommen und bestätigt werden (maximal
          einmal alle 24 Stunden).
        </li>
        <li>
          Die Höhe der Punkte für einen Impuls hängt davon ab, wie aufwändig dessen Anwendung ist.
        </li>
        <li>
          In der Highscore-Liste sind dann alle Helden aufgeführt und du siehst, wie du im Vergleich
          zu den anderen Nutzern stehst und vor allem, wie viel gemeinsam schon geschafft wurde.
        </li>
        <li>
          Über den Teilen-Button können Impulse auch (über beliebige Messenger / Programme) mit
          anderen Menschen geteilt werden - du kannst also gerne auch dafür sorgen, dass weitere
          Helden hinzukommen.
        </li>
      </ul>

      <p>
        <b>Übrigens:</b> Die App muss nicht heruntergeladen werden, sondern funktioniert als Webapp.
        Wenn du sie mit einem Klick auf deinem Handy öffnen willst, dann klicke (bei Android) in
        deinem mobilen Browser einfach im Einstellungen-Menü (in der Regel 3 Punkte oder Striche)
        auf "Zum Startbildschirm hinzufügen" und schon hast du ein schönes App-Symbol auf deinem
        Bildschirm. Als Apple-Nutzer klickst du im Brower Safari auf das "Teilen"-Icon und
        anschließen auf "Zum Home-Bildschirm".
      </p>
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
