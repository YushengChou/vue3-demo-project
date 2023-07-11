import { useFetch } from '@vueuse/core'

const state = reactive({
  isLoading: false,
  result: [],
  error: null,
})

export function useFetchMenu() {
  const fetchMenu = async () => {
    state.isLoading = true
    const { data } = await useFetch('/menu')
    state.result = data.value
    state.isLoading = false
  }

  return {
    ...toRefs(state),
    fetchMenu,
  }
}
