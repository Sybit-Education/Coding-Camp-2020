<template>
<div>
    <b-avatar  v-b-modal="`modal-${impulseId}`" variant="primary" size="2.5rem"><vue-fontawesome icon="share-alt" color="primary" size="1"></vue-fontawesome></b-avatar>
     <b-modal :id="`modal-${impulseId}`" hide-footer>
         <template v-slot:modal-title>
      Teile den Impuls mit dem Titel: <br> <br>{{title}}
        </template>
        <b-row class="text-center">
          <b-col><b-button data-action="share/whatsapp/share" href="whatsapp://send?text=Hello%20World!" variant="success" pill ><vue-fontawesome  icon="whatsapp" color="white" size="2"></vue-fontawesome></b-button></b-col>
          <b-col><b-button variant="danger" @click="shareEmail" pill><vue-fontawesome  icon="envelope" color="white" size="2"></vue-fontawesome></b-button></b-col>
          <b-col><b-button variant="primary" @click="shareTwitter" pill><vue-fontawesome  icon="twitter" color="white" size="2"></vue-fontawesome></b-button></b-col>
         <b-col><b-button :href="facebookLink" target="_blank" variant="primary" pill ><vue-fontawesome  icon="facebook" color="white" size="2"></vue-fontawesome></b-button></b-col>
        </b-row>
         <b-button variant="info" class="mt-3" block @click="$bvModal.hide(`modal-${impulseId}`)">schließen</b-button>
    </b-modal>
</div>
</template>

<script>
export default {
  props: {
    impulseId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    facebookLink () {
      return 'https://www.facebook.com/sharer/sharer.php?u=sybit.de'
    }
  },
  methods: {
    shareTwitter () {
      // Opens a pop-up with twitter sharing dialog
      var shareURL = 'http://twitter.com/share?' // url base
      // params
      var params = {
        url: process.env.VUE_APP_ROOT,
        text: 'Ich bin ein Held und rette die Welt, ich achte nun darauf: ' + this.title,
        hashtags: 'umwelt,naturschutz '
      }
      for (var prop in params) shareURL += '&' + prop + '=' + encodeURIComponent(params[prop])
      window.open(shareURL, '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0')
    },
    shareEmail () {
      const message = 'Ich bin ein Held und rette die Welt, ich achte nun darauf: ' + this.title +
      ' Schau dir mal die app an: ' + process.env.VUE_APP_ROOT
      window.location.href = 'mailto:?subject=Subject&body=' + message
    }
  }
}
</script>

<style>
</style>
