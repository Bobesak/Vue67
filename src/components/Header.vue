<script setup lang="ts">

import {onMounted, onUnmounted} from "vue";

function sex() {
  const header = document.querySelector('header');
  if(!header) return;
  if(window.scrollY > 0){
    header.classList.add('scrolled');
    
  }else{
    header.classList.remove('scrolled');
  }
}

onMounted(() => {
      document.addEventListener("scroll", sex);
      document.onload = sex;
});

onUnmounted(() =>{
  document.removeEventListener("scroll", sex);
});

</script>

<template>
  <header class>
    <div class="navbar">
    <div class="header-left">
    <div class="Logo"></div>
      <p class="Titles">Bobes</p>

    </div>
    <div class="header-right">
      <RouterLink to="/" class="Titles"><a>About Me</a></RouterLink>
      <RouterLink to="/Skills" class="Titles"><a>Skills</a></RouterLink>
      <p class="Titles">Projects</p>`
    </div>
    </div>
  </header>
</template>

<style scoped>
header{
  display: flex;
  width: 80%;
  height: 20%;
  border-radius: 30px;
  border: 3px solid black;
  margin: 0 auto;
  background-color: White;
  
  .navbar{
    display: flex;
    width: 100%;
    height: 20%;
    border-radius: 30px;
    margin: 0 auto;

    .header-right{
      display: flex;
      width: 55%;
      justify-content: space-around;
      align-items: center;

      a{
        text-decoration: none;
      }
    }
    .Titles{
      color: black;
      Font-Size: 30px;
      text-shadow: #444444 0 1px 1px;
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
}
header:is(.scrolled){
  position: fixed;
  margin-top:0;
  display: flex;
  width: 80%;
  height: 20%;
  border-radius: 30px;
  border: 3px solid black;
  margin: 0 auto;
  background-color: White;
}
</style>