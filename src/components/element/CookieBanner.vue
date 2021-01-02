<template>
 <cookie-law theme="sybit"
      buttonText="Einverstanden"
      buttonClass="btn btn-primary"
      position="bottom"
      message="Um unsere Website zu optimieren und für Sie individueller zu gestalten, setzen wir Cookies für verschiedene Zwecke ein. Umfassende Informationen zu diesen Cookies finden Sie in unserer Datenschutzerklärung."
      transitionName="fade"
      buttonLinkText="Datenschutzerklärung"
      buttonLink="/privacy"
    />
</template>

<script>
import CookieLaw from 'vue-cookie-law'
export default {
  components: { CookieLaw }
}
</script>
<style lang="scss" scoped>
.Cookie--sybit {
  background: rgb(99, 99, 99);
  color: rgb(240, 238, 238);
  padding: 10px 10px;
  position: fixed;
  bottom: 5rem;
  width: 100%;
  z-index: 999;

  .Cookie__content {
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
    font-size: 9px;
  }
}
</style>
