import Vue from 'vue'
import moment from 'moment'

// see https://momentjs.com/docs/#/displaying/

Vue.filter('timestampDate', function (date) {
  if (!date) return ''

  moment.locale(navigator.language)
  return moment(date.toDate()).format('L')
})

Vue.filter('timestampDatetime', function (datetime) {
  if (!datetime) return ''

  moment.locale(navigator.language)
  return moment(datetime.toDate()).format('L LT')
})

Vue.filter('Date', function (date) {
  if (!date) return ''

  moment.locale(navigator.language)
  return moment(date).format('L')
})

Vue.filter('Datetime', function (datetime) {
  if (!datetime) return ''

  moment.locale(navigator.language)
  return moment(datetime).format('L LT')
})
