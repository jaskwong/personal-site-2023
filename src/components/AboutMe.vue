<template>
  <div id="about-me">
    <h1 id="about-me-header">hi, i'm jasmine :)</h1>
    <br />

    <p id="about-me-description">
      I'm from Calgary, AB and graduated from UBC in 2021. In my free time, I like to work on small
      projects, like this site, and learn new things. Currently, I'm trying to read about
      distributed systems and event driven architecture. Outside of computers, I like making
      stickers, throwing pottery, and reading.
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#about-me {
  margin: 100px var(--side-margin) 0 var(--side-margin);
  width: 50%;
}

#about-me-header {
  animation: 1s ease-in 0s slideUpHeader;
}

#about-me-description {
  line-height: 2em;
  animation: 2s ease-in 0s slideUpBody;
}

@keyframes slideUpHeader {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes slideUpBody {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  50% {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
