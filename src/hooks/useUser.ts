import { ref, onMounted } from 'vue'
import axios from 'axios'
export function useUser(userId: string) {
  const user = ref()
  
  function fetchUser(id: string) {
    axios.get(`users/${id}`)
      .then((response: any) => (user.value = response.data))
  }

  onMounted(() => fetchUser(userId))

  return { user }
}