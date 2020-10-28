<template>
   <div class="card-body">
       <div class="card-content">
           <div class="card-text"><p>{{ impulse.title }}</p></div>
           <div class="card-text card-text-space">
             <p v-if="impulse.description" v-html="impulse.description"></p>
           </div>
       </div>
       <div class="card-background">
            <img  src="@/assets/cards/Card-blue.svg">
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
