<template>
    <section>
<base-badge>
  <h2>Reach out now</h2>
  <header>
    <base-button link :to="contactLink">Contact</base-button>
  </header>
  <router-view></router-view>
</base-badge>
</section>

<section>
<base-badge>
  <base-card
    v-for="area in areas"
    :key="area"
    :type="area"
    :title="area"
  />
  <p>{{ description }}</p>
</base-badge>
</section>


</template>
<script>
import { computed } from 'vue';

export default {
props:['id'],
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
