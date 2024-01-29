<template>
  <div id="personal-projects">
    <h1 id="personal-projects-header">projects</h1>
    <div id="personal-projects-grid">
      <div
        v-for="project in PERSONAL_PROJECTS"
        class="personal-project"
        :style="{ backgroundImage: 'url(' + project.image + ')' }"
        :key="project.link"
      >
        <div
          :onclick="'window.open(\'' + project.link + '\', \'mywindow\')'"
          class="personal-project-overlay"
          :style="{
            backgroundColor: getRandomOverlayColour()
          }"
        >
          <div>
            <h3>{{ project.name }} - {{ project.year }}</h3>
            {{ project.description }}
            <br />
            <br />
            {{ project.components.join(', ') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PERSONAL_PROJECTS } from '@/projects'

const OVERLAY_COLOURS: string[] = [
  'rgba(179, 228, 255, 0.92)',
  'rgba(250, 173, 165, 0.92)',
  'rgba(250, 234, 165, 0.92)'
]

const getRandomOverlayColour = (): string => {
  return OVERLAY_COLOURS[Math.floor(Math.random() * OVERLAY_COLOURS.length)]
}
</script>

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
  position: relative;
  border-radius: 20px;
  animation: 4s ease-in 0s slideUpBody;
  overflow: hidden;
  margin-right: 2%;
  margin-top: 2%;

  background-size: cover;
  background-repeat: no-repeat;
}

@media (min-width: 990px) {
  .personal-project {
    width: 32%;
    padding-bottom: 32%;
  }

  .personal-project:nth-child(3n + 3) {
    margin-right: 0;
  }
}

@media (min-width: 672px) and (max-width: 990px) {
  .personal-project {
    width: 49%;
    padding-bottom: 49%;
  }

  .personal-project:nth-child(2n + 2) {
    margin-right: 0;
  }
}

@media (max-width: 672px) {
  .personal-project {
    width: 100%;
    padding-bottom: 100%;
    margin-right: 0;
  }
}

.personal-project-overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  cursor: pointer;
  top: 100%;
  transition: top 0.25s;
}

.personal-project:hover > .personal-project-overlay {
  top: 0;
}

.personal-project-overlay > div {
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 5%;
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
