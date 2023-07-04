<template>
  <div id="menu-container">
    <ul id="menu">
      <li class="menu-item name">jasmine kwong</li>
      <li class="menu-item link">
        <a href="https://github.com/jaskwong" target="_blank">github</a>
      </li>
      <li class="menu-item link">
        <a href="https://www.linkedin.com/in/jasmine-kwong-7116a4203/" target="_blank">linkedin</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
#menu-container {
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  padding: 20px 0;
  width: calc(100vw - 20px);
  border-bottom: 1px solid black;
  background-color: white;
}

#menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  font-size: large;
  padding: 0;
  margin: 0 10%;
}

.menu-item {
  font-weight: 900;
}

.name {
  flex-grow: 10;
}

.link {
  flex-grow: 1;
}

.link > a {
  text-decoration: none;
  transition: 0.4s;
}

.link > a:link,
.link > a:visited {
  color: black;
}

.link > a:hover {
  color: grey;
}
</style>
