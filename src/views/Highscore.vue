<template>
  <div>
    <main-header :headerTitle="title"></main-header>
    <b-container>
      <b-table
        id="challengeStatsList"
        ref="challengeStatsTaable"
        :items="items"
        :fields="fields" primary-key="id"
        hover
      >
      </b-table>
    </b-container>
  </div>
</template>
<script>
import MainHeader from '@/components/_base/Header'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Highscore',
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
  components: {
    MainHeader
  },
  data () {
    return {
      fields: [
        { key: 'rank', label: 'Rang', sortable: true },
        { key: 'user', label: 'Name', sortable: false },
        { key: 'points', label: 'Punkte', sortable: false }
      ]
    }
  },
  async mounted () {
    await this.fetchList()
    await this.getUserDataForHighscore()
  },
  methods: {
    ...mapActions('Challenge_Stats', ['fetchList']),
    ...mapActions('Userdata', ['fetchById']),
    ...mapActions('Userdata', ['getUserDataForHighscore'])
  },
  computed: {
    userIdListFiltered () {
      const userIdListUnfiltered = this.challengeStatsList.map(challenge => challenge.uid)
      const userIdListOnlyNumbers = userIdListUnfiltered.filter(point => typeof (point) === 'number')
      const userIdListFiltered = [...new Set(userIdListOnlyNumbers)]
      return userIdListFiltered
    },
    ...mapGetters({
      userData: 'Userdata/userData',
      challengeStatsList: 'Challenge_Stats/getList',
      userForHighscorePage: 'Userdata/userForHighscorePage'
    }),
    items () {
      return this.userForHighscorePage
    },
    title () {
      return 'Highscore'
    }
  }
}
</script>
