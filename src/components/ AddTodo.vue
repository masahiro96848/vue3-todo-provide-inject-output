<template>
    <section class="container-area">
        <form action="" @submit.prevent="addTodoFunc">
            <input
                v-model="inputValue"
                @input="onInputTodo"
                class="input-area"
                placeholder="Todoを追加"
                type="text"
            />
        </form>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodo } from '../store/todo/useTodo'
import { useInputValue } from '../composables/useInputValue'

interface Props {
    todo: string
}

interface Emits {
    (event: 'update:todo', todo: string): void
}

const { inputValue } = useInputValue()
const { addTodo } = useTodo()

const addTodoFunc = () => {
    addTodo(inputValue.value)
    inputValue.value = ''
}

const props = defineProps<Props>()

const emit = defineEmits<Emits>()

const handleAddTodo = (): void => {
    emit('addTodo')
}

const onInputTodo = (event: Event): void => {
    const element = event.target as HTMLInputElement
    const inputTodo = String(element.value)
    emit('update:todo', inputTodo)
}
</script>
