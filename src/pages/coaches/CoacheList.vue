<template>
  <section>

    <div>FILTER</div>
  </section>

  <section>
    <div class="controls">
      <button @click="refreshCoaches">Refresh</button>
      <RouterLink to="/register">Registrar um Coach</RouterLink>
    </div>

    <ul>
      <CoachItem
        v-for="coach in store.coaches"
        :key="coach.id"
        :firstName="coach.firstName"
        :lastName="coach.lastName"
        :hourlyRate="coach.hourlyRate"
      />
    </ul>
  </section>
</template>

<script>
import CoachItem from './CoachItem.vue';
import { useStore } from '../../store.js';
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';

export default {
  components: {
    CoachItem,
    RouterLink
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      store.loadCoaches();
    });

   

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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
 
  justify-content: space-between;
}
</style>
