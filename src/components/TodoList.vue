<template>
    <section class="container-area">
        <ul class="list-row">
            <TodoItem />
        </ul>
    </section>
</template>

<script setup lang="ts">
import TodoItem from './TodoItem.vue'
interface Todo {
    todo: string
    todos: Array<string>
}

defineProps<Todo>()
</script>
