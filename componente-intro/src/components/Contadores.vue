<template>
  <div class="contadores">
     <app-contador/>
  </div>
</template>

<script>
import Contador from './Contador.vue'
export default {
 components: {'app-contador': Contador}
}
</script>

<style>
.contadores span{
    border-bottom: 1px solid #ccc;
    height: 30px;
    border-radius: 15px;
}

.contadores button{
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background-color: coral;
    color: #fff;
    margin-left: 10px;
    outline: none;
}
</style>