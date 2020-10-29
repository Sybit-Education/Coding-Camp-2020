<template>
  <div class="card-body">
    <div class="flip-card">
      <div class="card-front">
        <div class="card-content">
          <div class="card-text"><p>{{ impulse.title }}</p></div>
          <div class="card-text card-text-space"><p v-html="impulse.description"></p></div></div>
        <div class="card-background">
          <img src="@/assets/cards/Card-blue.svg">
        </div>
      </div>
      <div class="card-back">
        <div class="card-content">
          <div class="card-text"><p v-html="impulse.forMe"></p></div>
          <div class="card-text card-text-space"><p v-html="impulse.forWorld"></p></div>
        </div>
        <div class="card-background">
          <img src="@/assets/cards/Card-blue.svg">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    impulse: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
.card-body{
  margin-left: auto;
  margin-right: auto;
  width: 263px;
  position:relative;
  padding: 0;
  height: 409px;
}

.card-background{
  width: 100%;
}

.card-background img{
  width: 100%;
}

.card-content{
  position: absolute;
  height: 100%;
  width: 100%;
}

.card-text{
  height: 50%;
  text-align: start;
  padding-top: 25px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  word-wrap: break-word;
}

.card-text-space{
  padding-top: 30px;
}

.flip-card{
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card-body:hover .flip-card{
  transform: rotateY(180deg);
}

.card-front,
.card-back{
  position: absolute;
  backface-visibility: hidden;
}

.card-back{
  transform: rotateY(180deg);
}

</style>
