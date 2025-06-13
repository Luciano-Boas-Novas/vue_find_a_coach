<template>
  <li>
    <h3>{{ firstName }} {{ lastName }}</h3>
    <p>R$ {{ hourlyRate }} / hora</p>
    <div>
      <span v-for="area in areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">

    </div>
  </li>
</template>

<script>
export default {
  props: ['firstName', 'lastName', 'hourlyRate']
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
}

h3,
h4 {
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