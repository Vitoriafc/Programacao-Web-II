<script setup>
import Header from '../components/Header.vue'
import PostCard from '../components/PostCard.vue'
</script>

<template>
  <div>
    <Header />
    <main>
      <h2>Últimas do blog</h2>
      
      <PostCard 
        titulo="5 dicas para sua carreira profissional" 
        resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
      />
      <PostCard 
        titulo="5 dicas para sua carreira profissional" 
        resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
      />
      <PostCard 
        titulo="5 dicas para sua carreira profissional" 
        resumo="Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" 
      />

      <div class="ver-tudo">
        <a href="#">Ver tudo</a>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  max-width: 800px;
  margin: 50px auto;
  padding: 0 20px;
}
h2 {
  font-size: 2.2rem;
  margin-bottom: 30px;
}
.ver-tudo {
  text-align: center;
  margin-top: 20px;
}
.ver-tudo a {
  color: #2d5284;
  font-weight: bold;
  text-decoration: none;
}
</style>