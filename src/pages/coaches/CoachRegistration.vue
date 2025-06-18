<template>
    <base-card>
    <p>Coach details go here.</p>
    <CoachForm @save-data="saveData"></CoachForm>
    </base-card>
  </template>
  
  <script>
  import CoachForm from './CoachForm.vue';
  
  export default {
    components: {
      CoachForm
    },
   
  };
  </script>
  