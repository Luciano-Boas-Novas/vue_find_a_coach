<template>
  <li>
    <h3>{{ fullName }}</h3>
    <p>R$ {{ hourlyRate }} / hora</p>
    <div>
      <base-card v-for="area in areas" :key="area"  :type="area" :title="area"> {{ area }}  </base-card>
    </div>
    <div class="actions">
      <base-button link :to="coachContactLink">Contact</base-button>
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
export default {

  props: ['id', 'firstName', 'lastName', 'hourlyRate', 'areas'],

  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    coachContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    coachDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
