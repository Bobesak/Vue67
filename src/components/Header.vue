<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header-left">
    <div class="Logo"></div>
    </div>
    <div class="header-right">
      <p class="Titles">Bobes</p>
      <p class="Titles">About Me</p>
      <p class="Titles">Skills</p>
      <p class="Titles">Projects</p>
    </div>
  </div>
</template>

<style scoped>
.header{
  display: flex;
  width: 80%;
  height: 20%;
  border-radius: 30px;
  border: 3px solid black;
  justify-self: center;
  
  
  .header-right{
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    .Titles{
      Font-Size: 24px;
      text-shadow: #444444 0 1px 1px;
    }
  }
  
  .header-left{
    width: 25%;
    display: flex;
    justify-content: left;
    align-items: center;
    .Logo{
      aspect-ratio: 1/1;
      width: 150px;
      background-image: url("src/assets/Logo.svg");
      background-size : cover;
      background-position: center center;
    }
  }
}
</style>