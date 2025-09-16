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
        <RouterLink to="/Project" class="Titles">Projects</RouterLink>`
      </div>
    </div>
  </header>
</template>

<style scoped>
header{
  .navbar{
    display: flex;
    width: 80%;
    height: 20%;
    border-radius: 30px;
    border-bottom: 1px solid #444444;
    margin: 0 auto;
    background-color: White;
    

    .header-right{
      display: flex;
      width: 55%;
      justify-content: right;
      align-items: center;
      gap:40px;

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
        background-image: url("src/assets/logo23.svg");
        background-size : cover;
        background-position: center center;
      }
    }
  }
}
header:is(.scrolled){
  position: fixed;
  top: 0;
  width: 100%;
}
</style>