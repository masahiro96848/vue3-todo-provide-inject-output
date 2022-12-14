<template>
    <div class="container">
        <h1 class="title">Todo List</h1>
        <AddTodo />
        <!-- todoListのエリア -->
        <TodoList />
    </div>
</template>

<script setup lang="ts">
import AddTodo from './components/ AddTodo.vue'
import TodoList from './components/TodoList.vue'
</script>
