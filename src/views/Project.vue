
<script setup lang="ts">
import RepoCard from "../components/RepoCard.vue";

const projects = [
  "Zasobnik",
    "petsimx",
];
</script>
<template>
  <div class="MainBody">
      <header class="main-header">
        Github Repositories
      </header>
    <div class="main">
      
      <RepoCard
          v-for="repo in projects"
          :key="repo"
          :repo="repo"
      />
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
.main{
  display: flex;
  justify-content: space-around;
  padding-top: 5%;
}
.main-header{
  text-align: center;
  font-size: 4rem;
}
</style>