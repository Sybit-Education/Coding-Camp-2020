<template>
<div v-if="showIt" class="safari-how2 fixed-bottom">
  <div class="modal-header">
    <h5 class="modal-title">Zum Home-Screen hinzufügen</h5>
    <button
      type="button"
      class="close"
      data-dismiss="modal"
      aria-label="Close"
      @click="close()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <ol>
      <li>
        Verwende die Teilen-Funktion
        <img
          class="share-icon"
          height="22" alt="Share Button"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy5
            3My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC44OCAyNy4yNSI+PGRlZnM+PHN0eWxlPi
            5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiMyMzFmMjA7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5TY
            WZhcmlfU2hhcmU8L3RpdGxlPjxwb2x5bGluZSBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMTMuMTMg
            OCAyMC4zOCA4IDIwLjM4IDI2Ljc1IDAuNSAyNi43NSAwLjUgOCA3LjUgOCIvPjxsaW5lIGNsYXN
            zPSJjbHMtMSIgeDE9IjEwLjQ0IiB5MT0iMTciIHgyPSIxMC40NCIvPjxsaW5lIGNsYXNzPSJjbH
            MtMSIgeDE9IjEwLjQ4IiB5MT0iMC4zOCIgeDI9IjE1LjI4IiB5Mj0iNS4xOCIvPjxsaW5lIGNsY
            XNzPSJjbHMtMSIgeDE9IjEwLjQ0IiB5MT0iMC4zOCIgeDI9IjUuNjQiIHkyPSI1LjE4Ii8+PC9z
            dmc+" />
          {{whereIsShare}} im Browser.

      </li>
      <li>
        Scrolle (falls notwendig), um den Button "Zum Home-Bildschirm
        <img
          class="plus-icon"
          height="22"
          alt="Add to Home Screen Button"
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMiIgZGF0YS1uYW1lPSJMYXllciAyIiB4bWxucz0iaHR0cDovL3d3dy5
            3My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNSAzNSI+PHRpdGxlPlNhZmFyaV9BMkhTPC
            90aXRsZT48cmVjdCB3aWR0aD0iMzUiIGhlaWdodD0iMzUiIHJ4PSI4IiByeT0iOCIgc3R5bGU9I
            mZpbGw6IzhmOGY4ZiIvPjxsaW5lIHgxPSIyNC43NSIgeTE9IjE3LjUiIHgyPSIxMC4yNSIgeTI9
            IjE3LjUiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLXdpZHRoOjJweCIvPjx
            saW5lIHgxPSIxNy41IiB5MT0iMTAuMjUiIHgyPSIxNy41IiB5Mj0iMjQuNzUiIHN0eWxlPSJmaW
            xsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLXdpZHRoOjJweCIvPjwvc3ZnPg==" />"
        zu finden.
      </li>
      <li>Nach dem Ausführen ist die App direkt auf dem Home-Screen.</li>
    </ol>
  </div>
</div>
</template>

<script>
import { a2hsService } from './a2hs.service'
export default {
  name: 'A2HSSafari',
  data () {
    return {
      showIt: true
    }
  },
  methods: {
    close () {
      this.showIt = false
    }
  },
  computed: {
    whereIsShare () {
      return a2hsService.whereIsShare
    }
  }
}
</script>
<style lang="scss" scoped>
.safari-how2 {
  border: 1px solid rgba(0, 0, 0, 0.2);
  // padding: 10px;
  margin: 10px 5px 80px 5px;
  border-radius: 0.3rem;
  background-color: #ffc107;
  z-index: 9999;
}
</style>
