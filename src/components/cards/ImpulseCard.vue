<template>
  <div class="card-body">
    <div class="flip-card">
      <div class="card-front">
        <div class="card-content">
          <div class="card-text"><p>Fahrrad fahren ist gut für die Umwelt.</p></div>
          <div class="card-text card-text-space"><p>Da man kein CO<sub>2</sub> außstöst. Das ist mehr Text um zu zeigen das hier dann alles auf die Schnauze fliegen wird. lül.</p></div>
        </div>
        <div class="card-background">
          <img src="@/assets/cards/Card-blue.svg">
        </div>
      </div>
      <div class="card-back">
        <div class="card-content">
          <div class="card-text"><p>Gute Umwelt diese</p></div>
          <div class="card-text card-text-space"><p>Mehr Text</p></div>
        </div>
        <div class="card-background">
          <img src="@/assets/cards/Card-blue.svg">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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

.card-background{
width: 100%;
}

.card-background img{
width: 100%;
}

.card-body{
margin-left: auto;
margin-right: auto;
width: 263px;
position:relative;
padding: 0;
}

.card-content{
position: absolute;
height: 100%;
width: 100%;
}

.card-text{
height: 50%;
text-align: center;
padding-top: 25px;
padding-bottom: 10px;
padding-left: 15px;
padding-right: 15px;
}

.card-text-space{
padding-top: 30px;
}
</style>
