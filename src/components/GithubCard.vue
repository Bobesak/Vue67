<template>
  <div class="github-card" v-if="user">
    <img :src="user.avatar_url" alt="Avatar" class="avatar" />
    <div class="info">
      <h2><a :href="user.html_url" target="_blank">{{ user.name || user.login }}</a></h2>
      <p>{{ user.bio }}</p>
      <p v-if="user.location">📍 {{ user.location }}</p>
      <p>👥 {{ user.followers }} followers • {{ user.following }} following</p>
      <p>📦 {{ user.public_repos }} public repos</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)
const username = 'Bobesak' // ← change this to your GitHub username

onMounted(async () => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`)
    user.value = await res.json()
  } catch (error) {
    console.error('GitHub API error:', error)
  }
})
</script>

<style scoped>
.github-card {
  display: flex;
  align-items: center;
  background: #f6f8fa;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  max-width: 400px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
}
.info h2 {
  margin: 0;
  font-size: 1.2rem;
}
.info a {
  text-decoration: none;
  color: #0366d6;
}
.info p {
  margin: 0.2rem 0;
  color: #333;
  font-size: 0.9rem;
}
</style>