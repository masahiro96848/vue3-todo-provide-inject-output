import { inject } from 'vue'
import { todoStateKey } from './todo'

export const useTodo = () => {
    const state = inject(todoStateKey)

    if (!state) {
        throw new Error('No Global Key')
    }

    return state
}
