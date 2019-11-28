<template>
  <div id="app">    
      <igHeader/>      
      <router-view /> 
      <igFooter/>
  </div>
</template>

<script>
import igHeader from "@/components/Header";
import igFooter from "@/components/Footer";

export default {
  name:"App",
  components:{
    igHeader,
    igFooter
  }
};
</script>