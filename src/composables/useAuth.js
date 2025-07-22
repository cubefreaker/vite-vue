import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.js';

export function useAuth() {
  const user = ref(null);
  const loading = ref(true);

  onMounted(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      user.value = currentUser;
      loading.value = false;
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  });

  return {
    user,
    loading
  };
} 