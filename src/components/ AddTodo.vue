<template>
    <section class="container-area">
        <form action="" @submit.prevent="handleAddTodo">
            <input
                :value="todo"
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
interface Props {
    todo: string
}

interface Emits {
    (event: 'update:todo', todo: string): void
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
