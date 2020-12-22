<template>
<div class="update-dialog" v-if="prompt">
  <div class="update-dialog__content">
    Es gibt eine neue Version der App. Soll diese geladen werden?
  </div>
  <div class="update-dialog__actions">
    <button
      class="update-dialog__button update-dialog__button--confirm"
      @click="update"
    >
      Aktualisieren
    </button>
    <button
      class="update-dialog__button update-dialog__button--cancel"
      @click="prompt = false"
    >
      Abbrechen
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'UpdateDialog',
  data () {
    return {
      prompt: false
    }
  },
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.prompt = true
      })
    }
  },
  methods: {
    async update () {
      this.prompt = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    }
  }
}
</script>

<style lang="scss">
.update-dialog {
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 12px;
  max-width: 576px;
  color: white;
  background-color: #2c3e50;
  text-align: left;
  &__actions {
    display: flex;
    margin-top: 8px;
  }
  &__button {
    margin-right: 8px;
    &--confirm {
      margin-left: auto;
    }
  }
}
</style>
