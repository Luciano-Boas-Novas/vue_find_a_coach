<template>
  <router-view></router-view>
  <ul>
    <CoachItem
      :key="coach.id"
      :firstName="coach.firstName"
      :lastName="coach.lastName"
      :hourlyRate="coach.hourlyRate"

    ></CoachItem>

  </ul>
</template>

<script>
import CoachItem from './CoachItem.vue';
import { useStore } from '../store.js'
export default {
  components: {
    CoachItem
  },
  setup(){
    const store = useStore();

    return { store };
  }
}
</script>
<style>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
  background: #f9f9f9;      
  border-radius: 8px;        
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
