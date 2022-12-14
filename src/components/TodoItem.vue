<template>
    <section class="container-area">
        <ul class="list-row">
            <li v-for="todo in filterTodoItems" class="list">
                <span class="item">{{ todo.text }}</span>
                <i class="fa fa-trash fa-lg" aria-hidden="true"></i>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { useFilterValue } from '../composables/useFilterValue'

const { filterTodoItems } = useFilterValue()
</script>
