<script setup lang="ts">
import { ref } from 'vue';
const showCText = ref(false);
const showUtext = ref(false);
const showVtext = ref(false);
const showHtext = ref(false);
const showRtext = ref(false);
</script>

<template>
<div class="MainBody">
  <div class="main">
    <header class="main-header">
      Skills
    </header>
    <div class="main-content">
      <div class="InfoModule">
        <p class="Text" :class="{ visible: showCText }">
          My First Language I learned and probably the one I enjoy working with the most.<br>
          I'm still a beginner but I'm aspiring to work with C# in the future.
        </p>
        <div class="SkillLogo"
             @mouseenter="showCText = true" @mouseleave="showCText = false">
          <img src="/src/assets/CSharp.svg" class="Image">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Text" :class="{ visible: showUtext }">
          Unity is the reason i got into coding originally and remains my hobby to this day. <br>
          i love messing around and learning how the engine functions work, albeit a newbie im trying to learn
        </p>
        <div class="SkillLogo"
             @mouseenter="showUtext = true" @mouseleave="showUtext = false">
          <img src="/src/assets/Unity.svg" class="Image">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Text" :class="{ visible: showVtext }">
          I'm currently learning Vue.js — my first framework and my first step into web development.<br> Building websites is new to me, but I'm learning as I go and hope to make this one look great!        </p>
        <div class="SkillLogo"
             @mouseenter="showVtext = true" @mouseleave="showVtext = false">
          <img src="/src/assets/vue.svg" class="Image"
               >
        </div>
      </div>
      <div class="InfoModule">
        <p class="Text" :class="{ visible: showHtext }">
          started learning it in school and found out it was fun. <br>
          So i thought to myself basic knowledge wouldnt hurt and learnt a bit properly :p
        </p>
        <div class="SkillLogo"
             @mouseenter="showHtext = true" @mouseleave="showHtext = false">
          <img src="/src/assets/HTML5.svg" class="Image"
               >
        </div>
      </div>
      <div class="InfoModule">
        <p class="Text" :class="{ visible: showRtext }">
          I was introduced to Rider by a friend and have been using it since then, while it doesnt offer as much support as VSC i love it <br>
          Rider is the goat <3
        </p>
        <div class="SkillLogo"
             @mouseenter="showRtext = true" @mouseleave="showRtext = false">
          <img src="/src/assets/Rider.svg" class="Image"
               >
        </div>
      </div>
      
    </div>
  </div>
</div>
</template>
<style scoped>

.MainBody
{
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 30px;
  border: #444444 1px solid;
  margin: 40px auto 0;
  text-wrap: wrap;
  height: 1200px;
  background: white;
}
  .main-header {
    font-size: 60px;
    text-align: right;
    padding-top: 15px;
    padding-left: 20px;
    padding-right: 14.2%;
    box-shadow: 0px 15px 10px -12px #444444;
    border-bottom: #444 2px solid;
    letter-spacing: 4px;
  }
  
  .SkillLogo {
    display:flex;
    max-width: 20vh;
    max-height: 20vh;
    
    outline: #444444 1px solid;
    border-radius: 30px;
    box-shadow: 2px 2px 8px #444444;
    justify-content: center;
    align-items: center;
    align-self: center;    
    aspect-ratio: 1/1;


  }
  .Image {
    object-fit: cover;
    object-position: center center;
    width: 40%;
    height: 40%;
  }

  .InfoModule {
    justify-content: space-around;
    display: flex;
    flex-direction: column-reverse;
    font-size: 25px;
    max-height: 32%;
    max-width: 32%;
  }

  .main-content {
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 16px;
  }

  .Text { 
    max-width: 100%;
    max-height: 48%;
    font-size: 1.4rem;
    word-wrap: normal;
    text-wrap: wrap;

    /* Text je vždy v layoutu, ale neviditelný */
    opacity: 0;
    visibility: hidden;

    /* Přechod opacity */
    transition: opacity 0.67s ease,
    border-radius 0.67s ease;
    

  }
  .Text.visible {
    border-radius: 30px;
    border-top: #444444 1px solid;
    border-bottom: #444444 1px solid;
    padding: 10px;
    opacity: 1;
    visibility: visible;
  }
</style>
