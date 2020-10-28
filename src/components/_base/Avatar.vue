<template>
  <div>
    <b-avatar size="5rem">
      <v-gravatar :size="40" email="user.email" />
    </b-avatar>
  </div>
</template>
<script>
import { $auth } from '@/firebase-config'

export default {
  name: 'Avatar',
  computed: {
    user () {
      return $auth.currentUser
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
