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
        <p class="Ctext" :class="{ visible: showCText }">
          My First Language I learned and probably the one I enjoy working with the most.<br>
          I'm still a beginner but I'm aspiring to work with C# in the future.
        </p>
        <div class="SkillLogo"
             @mouseenter="showCText = true" @mouseleave="showCText = false">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Utext" :class="{ visible: showUtext }">
          Unity is the reason i got into coding originally and remains my hobby to this day. <br>
          i love messing around and learning how the engine functions work, albeit a newbie im trying to learn
        </p>
        <div class="USkillLogo"
             @mouseenter="showUtext = true" @mouseleave="showUtext = false">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Vtext" :class="{ visible: showVtext }">
          Vue.Js is the first and latest framework im trying to learn (as im typing this) and its my first step into the web world. <br>
          Webpage making as a whole is new to me so im learning on the go and hopefully ill get good enough to make this web good looking :D
        </p>
        <div class="VSkillLogo"
             @mouseenter="showVtext = true" @mouseleave="showVtext = false">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Htext" :class="{ visible: showHtext }">
          started learning it in school and found out it was fun. <br>
          So i thought to myself basic knowledge wouldnt hurt and learnt a bit properly :p
        </p>
        <div class="HSkillLogo"
             @mouseenter="showHtext = true" @mouseleave="showHtext = false">
        </div>
      </div>
      <div class="InfoModule">
        <p class="Rtext" :class="{ visible: showRtext }">
          I was introduced to Rider by a friend and have been using it since then, while it doesnt offer as much support as VSC i love it <br>
          Rider is the goat <3
        </p>
        <div class="RSkillLogo"
             @mouseenter="showRtext = true" @mouseleave="showRtext = false">
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
  .SkillLogo {
    min-width: 120px;
    min-height: 120px;
    width: 20%;
    height: 20%;
    background-image: url("src/assets/CSharp.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    outline: #444444 1px solid;
    border-radius: 30px;
    margin-left: 30px;
    box-shadow: 2px 2px 8px #444444;
  }  
  .USkillLogo {
    min-width: 120px;
    min-height: 120px;
    width: 20%;
    height: 20%;
    background-image: url("src/assets/Unity.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    outline: #444444 1px solid;
    border-radius: 30px;
    margin-left: 30px;
    box-shadow: 2px 2px 8px #444444;
  }
  .VSkillLogo {
    min-width: 120px;
    min-height: 120px;
    width: 20%;
    height: 20%;
    background-image: url("src/assets/vue.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    outline: #444444 1px solid;
    border-radius: 30px;
    margin-left: 30px;
    box-shadow: 2px 2px 8px #444444;
  }
  .HSkillLogo {
    min-width: 120px;
    min-height: 120px;
    width: 20%;
    height: 20%;
    background-image: url("src/assets/HTML5.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    outline: #444444 1px solid;
    border-radius: 30px;
    margin-left: 30px;
    box-shadow: 2px 2px 8px #444444;
  } 
  .RSkillLogo {
    min-width: 120px;
    min-height: 120px;
    width: 20%;
    height: 20%;
    background-image: url("src/assets/Rider.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    outline: #444444 1px solid;
    border-radius: 30px;
    margin-left: 30px;
    box-shadow: 2px 2px 8px #444444;
  }

  .main-header {
    font-size: 60px;
    text-align: left;
    border-top: #444444 1px solid;
    border-radius: 30px;
    padding-top: 15px;
    padding-left: 20px;
  }

  .InfoModule {
    justify-content: center;
    display: flex;
    flex-direction: row;
    font-size: 25px;
    align-items: center; /* zarovnat vertikálně */
    gap: 20px; /* mezera mezi logem a textem */
  }

  .main-content {
    margin-bottom: 40px;
  }

  /* Přidáno pro plynulé zobrazení textu bez poskakování */
  .Ctext {
    max-width: 60%;
    font-size: 23px;

    /* Text je vždy v layoutu, ale neviditelný */
    opacity: 0;
    visibility: hidden;

    /* Přechod opacity */
    transition: opacity 0.67s ease,
    border-radius 0.67s ease;

    /* Minimální šířka, aby text zabíral místo i když je neviditelný */
    min-width: 900px; 
    max-width: 900px;
    min-height: 150px;
    max-height: 150px;
  }

  /* Viditelný text */
  .Ctext.visible {
    border-radius: 30px;
    border-top: #444444 1px solid;
    border-bottom: #444444 1px solid;
    padding: 10px;
    opacity: 1;
    visibility: visible;
  } 
.Rtext {
    max-width: 60%;
    font-size: 23px;

    /* Text je vždy v layoutu, ale neviditelný */
    opacity: 0;
    visibility: hidden;

    /* Přechod opacity */
    transition: opacity 0.67s ease,
    border-radius 0.67s ease;

    /* Minimální šířka, aby text zabíral místo i když je neviditelný */
    min-width: 900px; 
    max-width: 900px;
    min-height: 150px;
    max-height: 150px;
  }

  /* Viditelný text */
  .Rtext.visible {
    border-radius: 30px;
    border-top: #444444 1px solid;
    border-bottom: #444444 1px solid;
    padding: 10px;
    opacity: 1;
    visibility: visible;
  } 
  .Utext {
    max-width: 60%;
    font-size: 23px;

    /* Text je vždy v layoutu, ale neviditelný */
    opacity: 0;
    visibility: hidden;

    /* Přechod opacity */
    transition: opacity 0.67s ease,
    border-radius 0.67s ease;

    /* Minimální šířka, aby text zabíral místo i když je neviditelný */
    min-width: 900px;
    max-width: 900px;
    min-height: 150px;
    max-height: 150px;
  }

  /* Viditelný text */
  .Utext.visible {
    border-radius: 30px;
    border-top: #444444 1px solid;
    border-bottom: #444444 1px solid;
    padding: 10px;
    opacity: 1;
    visibility: visible;
  }
  .Vtext {
    max-width: 60%;
    font-size: 23px;

    /* Text je vždy v layoutu, ale neviditelný */
    opacity: 0;
    visibility: hidden;

    /* Přechod opacity */
    transition: opacity 0.67s ease,
    border-radius 0.67s ease;

    /* Minimální šířka, aby text zabíral místo i když je neviditelný */
    min-width: 900px;
    max-width: 900px;
    min-height: 150px;
    max-height: 150px;
  }

  /* Viditelný text */
  .Vtext.visible {
    border-radius: 30px;
    border-top: #444444 1px solid;
    border-bottom: #444444 1px solid;
    padding: 10px;
    opacity: 1;
    visibility: visible;
  }
.Htext {
  max-width: 60%;
  font-size: 23px;

  /* Text je vždy v layoutu, ale neviditelný */
  opacity: 0;
  visibility: hidden;

  /* Přechod opacity */
  transition: opacity 0.67s ease,
  border-radius 0.67s ease;

  /* Minimální šířka, aby text zabíral místo i když je neviditelný */
  min-width: 900px;
  max-width: 900px;
  min-height: 150px;
  max-height: 150px;
}

/* Viditelný text */
.Htext.visible {
  border-radius: 30px;
  border-top: #444444 1px solid;
  border-bottom: #444444 1px solid;
  padding: 10px;
  opacity: 1;
  visibility: visible;
}
  
</style>
