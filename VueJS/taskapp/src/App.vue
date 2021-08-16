<template>
  <div id="app">
    <TaskManager :tasks="tasks" />
  </div>
</template>

<script>
import TaskManager from "./components/TaskManager.vue";

export default {
  name: "App",
  components: {
    TaskManager,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          completed: false,
        },
        {
          id: 2,
          title: "Task 2",
          completed: false,
        },
        {
          id: 3,
          title: "Task 3",
          completed: false,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
