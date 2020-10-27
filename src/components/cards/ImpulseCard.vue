<template>
   <div class="card-body">
       <div class="card-content">
           <h4>Hallo Welt</h4>
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
}
.card-content{
position: absolute;
padding: 10%;
text-align: center;
}
</style>
