<template>
    <section class="container-area">
        <div class="input-wrap">
            <input
                type="text"
                class="input-area"
                placeholder="Todoを絞り込む"
                v-model="filterValue"
            />
        </div>
    </section>
    <section class="container-area">
        <ul v-if="filterTodoItems.length" class="list-row">
            <li v-for="todo in filterTodoItems" class="list">
                <input
                    class="input-todo-done"
                    v-model="checkboxValue"
                    type="checkbox"
                    :value="todo.id"
                    @click="doneTodo(todo.id)"
                />
                <span class="item">{{ todo.text }}</span>
                <i
                    class="fa fa-trash fa-lg"
                    aria-hidden="true"
                    @click="deleteTodo(todo.id)"
                ></i>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { useFilterValue } from '../composables/useFilterValue'
import { useTodo } from '../store/todo/useTodo'
import { useCheckboxValue } from '../composables/useCheckboxValue'

const { filterTodoItems, filterValue } = useFilterValue()
const { checkboxValue } = useCheckboxValue()
const { deleteTodo, doneTodo } = useTodo()
</script>
