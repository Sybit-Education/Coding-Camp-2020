<template>
  <footer>
    <cookie-law
    buttonText="Einverstanden!"
    message="Um unsere Website zu optimieren und für Sie individueller zu gestalten, setzen wir Cookies für verschiedene Zwecke ein. Einige sind essentiell während andere optional aktiviert und deaktiviert werden können. Umfassende Informationen zu diesen Cookies finden Sie in unserer Datenschutzerklärung. Dort können Sie Ihre ganz individuellen Einstellungen jederzeit über den Button unten links anpassen."
    buttonLinkText="Datenschutzerklärung"
    buttonLink="/privacy"
    ></cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw }
}

</script>
