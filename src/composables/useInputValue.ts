import { ref } from 'vue'

export const useInputValue = () => {
    const inputValue = ref('')

    return {
        inputValue,
    }
}
