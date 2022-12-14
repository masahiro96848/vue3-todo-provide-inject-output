<template>
    <section class="container-area">
        <ul class="list-row">
            <li v-for="todo in todos" class="list">
                <span class="item">{{ todo }}</span>
                <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
            </li>
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
