<template>
    <section class="container-area">
        <h1 class="title">Todo List</h1>
        <form action="" @submit.prevent="addTodoFunc">
            <input
                v-model="inputValue"
                class="input-area"
                placeholder="Todoを追加"
                type="text"
            />
        </form>
    </section>
</template>

<script setup lang="ts">
import { useTodo } from '../store/todo/useTodo'
import { useInputValue } from '../composables/useInputValue'

const { inputValue } = useInputValue()
const { addTodo } = useTodo()

const addTodoFunc = () => {
    addTodo(inputValue.value)
    inputValue.value = ''
}
</script>
