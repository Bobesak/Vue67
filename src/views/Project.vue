
<script>
import RepoCard from '/src/components/RepoCard.vue';

const projects = [
  "cool-project",
  "another-repo",
  "my-favorite-repo"
];
</script>
<template>
  <div class="MainBody">
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
</style>