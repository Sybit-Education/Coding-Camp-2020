<template>
  <div>
    <main-header :headerTitle="'Highscore'"></main-header>
    <b-table
      id="challengeStatsList"
      ref="challengeStatsTaable"
      :items="items"
      :fields="fields" primary-key="id"
      hover
    >
    </b-table>
  </div>
</template>
<script>
import MainHeader from '@/components/_base/Header'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Highscore',
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
    }
  }
}
</script>
