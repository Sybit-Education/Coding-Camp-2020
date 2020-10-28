<template>
  <footer>
    <cookie-law theme="Cookie Cookie--bottom Cookie--royal--rounded"
                buttonText="Einverstanden!"
                message="Um unsere Website zu optimieren und für Sie individueller zu gestalten, setzen wir Cookies für verschiedene Zwecke ein. Umfassende Informationen zu diesen Cookies finden Sie in unserer Datenschutzerklärung."
                buttonLinkText="Datenschutzerklärung"
                buttonLink="/privacy">
    </cookie-law>
  </footer>
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw }
}
</script>
