<template>
  <header>
    <nav>
      <router-link to="/">Blog</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <a href="#">Descrição</a>
    </nav>

    <div class="header-content">
      <img src="../assets/perfil.png" alt="Perfil" />
      <div class="text-container">
        <h1>Vitória</h1>
        <p>
          Tenho 20 anos, curso Análise e Desenvolvimento de Sistemas no IFCE Tauá.
          Atualmente cursando a cadeira de Web 2 e aprendendo sobre frameworks.
        </p>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #2d5284;
  color: white;
  padding: 60px 0;
}
nav {
  text-align: center;
  margin-bottom: 40px;
}
nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;
  gap: 40px;
  padding: 0 20px;
}
img {
  border-radius: 50%;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border: 3px solid white;
}
.text-container {
  text-align: left;
}
h1 {
  font-size: 4rem;
  margin: 0 0 10px 0;
}
p {
  font-size: 1.1rem;
  line-height: 1.4;
  max-width: 500px;
}
</style>