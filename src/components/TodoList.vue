<template>
    <div class="container">
        <AddTodo />
        <TodoItem />
    </div>
</template>

<script setup lang="ts">
import AddTodo from './AddTodo.vue'
import TodoItem from './TodoItem.vue'
import { useFilterValue } from '../composables/useFilterValue'

const { filterTodoItems } = useFilterValue()
</script>
