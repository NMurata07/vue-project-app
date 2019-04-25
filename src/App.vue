<template>
  <div id="app">
    <h1>
      My todos
    </h1>
    <!-- <ul>
      <ToDoItem v-for="todo in todos" :todo="todo" v-bind:key="todo.id" @delete="deleteTodo" />
    </ul> -->
    <SearchForm v-model="searchFormData" :searchFormData="searchFormData" />
    <!-- <input type="text" v-model="searchFormData.placeName">
    <el-date-picker v-model="searchFormData.checkInDate" type="datetime" placeholder="チェックインの日付"></el-date-picker>
    <el-date-picker v-model="searchFormData.checkOutDate" type="datetime" placeholder="チェックアウトの日付"></el-date-picker> -->
    <!-- <form @submit.prevent="addTodo">
      <input type="text" v-model="newTodo">
      <input type="submit" value="Add">
    </form> -->
  </div>
</template>


<script>
import SearchForm from './components/SearchForm.vue'

export default {
  name: 'app',
  components: {
    SearchForm
  },
  data() {
    return {
      searchFormData: {
        placeName: '',
        checkInDate: '',
        checkOutDate: ''
      }
    }
  }
  // methods: {
  //   addTodo: function() {
  //     const newId = Math.max.apply(null, this.todos.map(t => t.id)) + 1;
  //     this.todos.push({ id: newId, text: this.newTodo });
  //     this.newTodo = '';
  //   },
  //   deleteTodo: function(todo) {
  //     this.todos = this.todos.filter(item => item !== todo);
  //   },
  // },
  // computed: {
  //   remaining: function() {
  //     return this.todos.filter(function(todo) {
  //       return !todo.isDone;
  //     });
  //   }
  // }
}
</script>

<style>
</style>
