<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as Coach</base-button>
      </div>

      <ul>
        <CoachItem
          v-for="coach in filteredCoaches"
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
import CoachFilter from './CoachFilter.vue';
import { useStore } from '../../store.js';
import { computed, reactive } from 'vue';

export default {
  components: {
    CoachItem,
    CoachFilter
  },

  setup() {
    const store = useStore();

    const activeFilters = reactive({
      frontend: true,
      backend: true,
      carrer: true
    });

    const setFilters = (updatedFilters) => {
      Object.assign(activeFilters, updatedFilters);
    };

    const filteredCoaches = computed(() => {
      return store.coaches.filter(coach => {
        if (activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (activeFilters.carrer && coach.areas.includes('carrer')) {
          return true;
        }
        return false;
      });
    });

    return {
      store,
      filteredCoaches,
      setFilters
    };
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
