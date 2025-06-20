<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
        <ul v-if="hasRequests">
          <RequestItem v-for="req in requests" :key="req.id" :email="req.userEmail" :message="req.message" />
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </header>
    </base-card>
  </section>
</template>

<script>
import { useStore} from '../../store';
import { computed } from 'vue';
import RequestItem from './RequestItem.vue';
    export default {
      components: {
  RequestItem,
},
        setup(){
            const store = useStore();
            const hasRequests = computed(() => store.hasRequests);
            const requests = computed(() => store.receivedRequests);
            return {
      hasRequests,
      requests,
    };
        }
    }
</script>
<style scoped>

header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>