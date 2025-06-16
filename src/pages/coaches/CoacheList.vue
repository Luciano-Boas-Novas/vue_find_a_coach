<template>
  <section>
    <div>FILTER</div>
  </section>

  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Registrar um Coach</base-button>
      </div>

      <ul>
        <CoachItem
          v-for="coach in store.coaches"
          :key="coach.id"
          :id="coach.id"
          :firstName="coach.firstName"
          :lastName="coach.lastName"
          :hourlyRate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
    </base-card>
  </section>
</template>

<script>
import CoachItem from './CoachItem.vue';
import { useStore } from '../../store.js';


export default {
  components: {
    CoachItem
  },

  setup() {
    const store = useStore();

  

    return { store };
  }
};
</script>

<style scoped>
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
