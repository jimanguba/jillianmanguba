<template>
  <div id="app">
    <div>
      <VueWriter :array="arr" />
      <div class="socials">
        <a href="https://www.linkedin.com/in/jillianmanguba24" target="_blank" rel="noopener">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/jimanguba" target="_blank" rel="noopener">
          <i class="fab fa-github"></i>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener">
          <i class="fas fa-file-alt"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return { arr: ["Jillian Manguba"] };
  },
};
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: hsl(350, 100%, 88%);
  text-align: center;
  flex-direction: column;
}

.is-typed {
  font-family: 'Monaco', monospace;
  font-size: 4vw;
}

.socials {
  margin-top: 1rem;
}

.socials a {
  margin: 0 10px;
  font-size: 2rem;
  color: #333;
  transition: color 0.3s ease;
}

.socials a:hover {
  color: hsl(350, 80%, 50%);
}
</style>
