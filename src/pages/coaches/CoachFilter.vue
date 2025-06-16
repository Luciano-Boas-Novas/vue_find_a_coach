<template>
    <section>
      <label>
        <input type="checkbox" id="frontend" :checked="filters.frontend" @change="setFilter" />
        Frontend
      </label>
      <label>
        <input type="checkbox" id="backend" :checked="filters.backend" @change="setFilter" />
        Backend
      </label>
      <label>
        <input type="checkbox" id="carrer" :checked="filters.carrer" @change="setFilter" />
        Career
      </label>
    </section>
  </template>
  
  
<script>
import { reactive } from 'vue';
export default {
    
  emits: ['change-filter'],

  setup(props, { emit }) {
    const filters = reactive({
      frontend: true,
      backend: true,
      carrer: true
    });

    const setFilter = (event) => {
      const inputId = event.target.id;
      const isActive = event.target.checked;

      filters[inputId] = isActive;

 
      emit('change-filter', { ...filters });
    };

    return {
      filters,
      setFilter
    };
  }
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}



</style>