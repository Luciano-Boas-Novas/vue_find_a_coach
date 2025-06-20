<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Reach out now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
  <section>
    <base-card>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>
<script>
import { computed } from 'vue';
import { useStore } from '../../store';
import { RouterLink, useRoute } from 'vue-router'; 

export default {
  props: ['id'],
  setup() {
    const route = useRoute();
    const store = useStore();

    const coachId = route.params.id;
    const selectedCoach = store.coaches.find(coach => coach.id === coachId);

    const fullName = computed(() => {
      return `${selectedCoach.firstName} ${selectedCoach.lastName}`;
    });

    const rate = computed(() => selectedCoach.hourlyRate);
    const areas = computed(() => selectedCoach.areas);
    const description = computed(() => selectedCoach.description);
    const contactLink = computed(() => `/coaches/${coachId}/contact`);

    return {
      fullName,
      rate,
      areas,
      description,
      contactLink
    };
  }
}
</script>
