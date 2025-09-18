<script setup lang="ts">
import {ref, onMounted} from "vue";

const props = defineProps<{ repo: string }>();
interface Repo {
  name: string;
  description?: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
}
const repoData = ref<Repo | null>(null);
function buildRepoURL(repo: string): string {
  return `https://api.github.com/repos/Bobesak/${repo}`;
}
async function fetchRepo( repo:string)
{
  const url = buildRepoURL(repo);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
  const data = await response.json();
  return data;
}

onMounted(async () => {
  repoData.value = await fetchRepo(props.repo);
});



</script>

<template>
  <div v-if="repoData">
    <h2>{{ repoData.name }}</h2>
  </div>
  <p v-else>Loading…</p>
</template>

<style scoped>

</style>