import { ref } from 'vue'

export const useCheckboxValue = () => {
    const checkboxValue = ref([])

    return {
        checkboxValue,
    }
}
