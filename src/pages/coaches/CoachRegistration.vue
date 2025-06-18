<template>
    <base-card>
    <p>Coach details go here.</p>
    <CoachForm @save-data="saveData"></CoachForm>
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
  
      const saveData = (data) => {
        store.saveData(data);
        router.push('/coaches'); 
      };
  
      return { saveData };
    }
  };
  </script>
  