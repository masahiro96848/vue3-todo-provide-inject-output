<template>
    <div class="container">
        <h1 class="title">Todo List</h1>
        <AddTodo v-model:todo="todo" @add-todo="handleAddTodo" />
        <!-- todoListのエリア -->
        <TodoList :todo="todo" :todos="todos" />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, provide } from 'vue'
import AddTodo from './components/ AddTodo.vue'
import TodoList from './components/TodoList.vue'
import { Todo } from './interface/Todo'

const state = reactive<Todo>({
    todo: '',
    todos: [],
})

const todo = ref('')
const todos = ref<Array<string>>([])

const handleAddTodo = () => {
    if (todo.value === '') {
        return
    }
    todos.value.push(todo.value)
    todo.value = ''
}
</script>
