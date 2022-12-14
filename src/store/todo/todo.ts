import { reactive, InjectionKey, readonly } from 'vue'

// Todoの型を定義
type TodoState = {
    todoItems: {
        id: number
        text: string
    }[]
}

export const todoState = () => {
    // 管理したいstateを定義
    const state = reactive<TodoState>({
        todoItems: [],
    })

    // Todoを追加
    const addTodo = (value: string) => {
        if (!value) {
            alert('値が入力されていません')
            return
        }
        state.todoItems = [
            ...state.todoItems,
            {
                id: state.todoItems.length + 1,
                text: value,
            },
        ]
    }
    return {
        state: readonly(state),
        addTodo,
    }
}

// stateの型を生成
export type todoStateType = ReturnType<typeof todoState>

// provideメソッドに指定するInjectKeyを指定
export const todoStateKey: InjectionKey<todoStateType> = Symbol('todoState')
