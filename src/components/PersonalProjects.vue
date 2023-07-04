<template>
  <div id="personal-projects">
    <h1 id="personal-projects-header">projects</h1>
    <div id="personal-projects-grid">
      <div class="personal-project"></div>
      <div class="personal-project"></div>
      <div class="personal-project"></div>
      <div class="personal-project"></div>
      <div class="personal-project"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#personal-projects {
  padding: 0;
  margin: 5% var(--side-margin) 0 var(--side-margin);
}

#personal-projects-grid {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

#personal-projects-header {
  animation: 3s ease-in 0s slideUpHeader;
}

.personal-project {
  height: 0;
  width: 32%;
  padding-bottom: 32%;
  background-color: rgba(125, 125, 125, 0.1);
  margin-right: 2%;
  margin-top: 2%;
  border-radius: 20px;
  animation: 4s ease-in 0s slideUpBody;
}

#personal-projects .personal-project:nth-child(3n + 3) {
  margin-right: 0;
}

@keyframes slideUpHeader {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  66% {
    transform: translateY(20px);
    opacity: 0;
  }
}

@keyframes slideUpBody {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  75% {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
