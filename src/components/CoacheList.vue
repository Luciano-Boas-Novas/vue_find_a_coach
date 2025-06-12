<template>
  <router-view></router-view>
  <ul>
    <CoachItem
    v-for="coach in store.coaches"
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
