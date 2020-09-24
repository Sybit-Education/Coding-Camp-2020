<template>
  <div class="container">
    <main-header :headerTitle="'Über diese App'"></main-header>
    <div class="m-3">
      Lore ipsum ...
    </div>
  </div>
</template>
<script>
import MainHeader from '@/components/_base/Header'

export default {
  name: 'Highscore',
  components: {
    MainHeader
  }
}
</script>
