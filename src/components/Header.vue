<script setup lang="ts">

</script>

<template>
  <div class="header">
    <div class="header-left">
      <a class="Hover" href="https://chatgpt.com/" target="_blank">
        <button class="goat">Click me</button>
      </a>
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
  width: 100%;
  height: 20%;
  
  
  .header-right{
    display: flex;
    justify-content: space-around;
    width: 50%;
    .Titles{
      Font-Size: 16px;

    }
  }
  
  .header-left{
    width: 50%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 5%;
    .goat{
      width: 80px;
      Font-Size: 16px;
      background : #1F1F1F;
      border-radius: 25px;
      text-align: center;
      color: white;
    }
    .goat:hover{
      border-color: #1F1F1F;
      box-shadow: 0 0 6px #1F1F1F;
    }
  }
}
</style>