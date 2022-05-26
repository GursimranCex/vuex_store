<template>
  <div id="app">
    <div class="container">
      <AddTodos />
      <FIlterTodos/>
      <MyTodos />
      
    </div>
  </div>
  
</template>

<script>

import MyTodos from "./components/Todos.vue";
import AddTodos from "./components/AddTodos.vue";
import FIlterTodos from "./components/FIlterTodos.vue";

export default {
  name: "App",
  components: {
    MyTodos,
    AddTodos,
    FIlterTodos
},
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
