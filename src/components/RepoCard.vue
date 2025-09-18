<script setup lang="ts">
import { ref, onMounted } from "vue";

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

async function fetchRepo(repo: string) {
  const url = `https://api.github.com/repos/Bobesak/${repo}`;
  const response = await fetch(url, {
    headers: {
      accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
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
  <div v-if="repoData" class="repo-card">
    <h2>{{ repoData.name }}</h2>
    <p v-if="repoData.description">{{ repoData.description }}</p>
    <p>⭐ {{ repoData.stargazers_count }} | 🍴 {{ repoData.forks_count }}</p>
    <p v-if="repoData.language">📝 {{ repoData.language }}</p>
    <a :href="repoData.html_url" target="_blank">View on GitHub</a>
  </div>
  <p v-else>Loading…</p>
</template>

<style scoped>
.repo-card {
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.repo-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.repo-card h2 {
  margin: 0 0 8px;
}
.repo-card a {
  color: #0366d6;
  text-decoration: none;
}
.repo-card a:hover {
  text-decoration: underline;
}
</style>
