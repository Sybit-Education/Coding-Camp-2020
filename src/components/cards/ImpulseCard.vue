<template>
   <div class="card-body">
       <div class="card-content">
           <div class="card-text"><p>Fahrrad fahren ist gut für die Umwelt.</p></div>
           <div class="card-text card-text-space"><p>Da man kein CO<sub>2</sub> außstöst. Das ist mehr Text um zu zeigen das hier dann alles auf die SChnauze fliegen wird. lül.</p></div>
       </div>
       <div class="card-background">
            <img  src="@/assets/cards/Card-blue.svg">
       </div>
   </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
.card-background{
width: 100%;}
.card-background img{
width: 100%;
}
.card-body{
margin-left: auto;
margin-right: auto;
width: 80%;
position:relative;
padding: 0;
height: 100%;
}
.card-content{
position: absolute;
height: 100%;
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
padding-top: 30px
}
</style>
