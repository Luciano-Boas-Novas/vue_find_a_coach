<template>
  <base-card>
    <p>Coach details go here.</p>
    <CoachForm @save-data="saveData" />
  </base-card>
</template>

<script>
import { useStore } from '../../store';
import { useRouter } from 'vue-router';
import CoachForm from './CoachForm.vue';

export default {
  components: {
    CoachForm
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const saveData = async (data) => {
      try {
        await store.saveData(data);
        router.push('/coaches');
      } catch (error) {
        alert('Erro ao salvar coach: ' + error.message);
      }
    };

    return { saveData };
  }
};
</script>
