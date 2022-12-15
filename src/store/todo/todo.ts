import { reactive, InjectionKey, readonly } from 'vue'

// Todoの型を定義
type TodoState = {
    todoItems: {
        id: number
        text: string
        done: boolean
    }[]
}

export const todoState = () => {
    // 管理したいstateを定義
    const state = reactive<TodoState>({
        todoItems: [],
    })
    console.log(state)

    // Todoを追加
    const addTodo = (value: string) => {
        if (!value) {
            alert('値が入力されていません')
            return
        }
        state.todoItems = state.todoItems = [
            ...state.todoItems,
            {
                id: state.todoItems.length + 1,
                text: value,
                done: false,
            },
        ]
    }

    // Todo削除機能
    const deleteTodo = (id: number) => {
        state.todoItems = state.todoItems.filter((todo) => todo.id !== id)
    }

    // Todo完了機能
    const doneTodo = (id: number) => {
        const todo = state.todoItems.find((item) => item.id === id)
        if (!todo) {
            return
        }
        todo.done = !todo.done
    }

    return {
        state: readonly(state),
        addTodo,
        deleteTodo,
        doneTodo,
    }
}

// stateの型を生成
export type todoStateType = ReturnType<typeof todoState>

// provideメソッドに指定するInjectKeyを指定
export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState')
