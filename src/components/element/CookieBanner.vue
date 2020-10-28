<template>
  <footer>
    <cookie-law
    buttonText="Einverstanden!"
    message="Um unsere Website zu optimieren und für Sie individueller zu gestalten, setzen wir Cookies für verschiedene Zwecke ein. Umfassende Informationen zu diesen Cookies finden Sie in unserer Datenschutzerklärung."
    buttonLinkText="Datenschutzerklärung"
    buttonLink="/privacy"
    />
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw }
}

</script>
