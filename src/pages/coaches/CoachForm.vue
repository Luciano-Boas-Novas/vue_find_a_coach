<template>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="name">Name
          <input type="text" id="name" v-model.trim="name" />
        </label>
      </div>
  
      <div class="form-control">
        <label for="sobrenome">Sobrenome
          <input type="text" id="sobrenome" v-model.trim="sobrenome" />
        </label>
      </div>
  
      <div class="form-control">
        <label for="descricao">Descrição
          <input type="text" id="descricao" v-model.trim="descricao" />
        </label>
      </div>
  
      <div class="form-control">
        <label for="rate">Hourly Rate
          <input type="number" id="rate" v-model.number="hourlyRate" />
        </label>
      </div>
  
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas" />
        <label for="frontend">Front-end Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas" />
        <label for="backend">Back-end Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas" />
        <label for="career">Career Coaching</label>
      </div>
  
      <base-button type="submit">Register</base-button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useStore } from '../../store.js';
  
  export default {
    setup() {
        const store = useStore();

      const name = ref('');
      const sobrenome = ref('');
      const descricao = ref('');
      const hourlyRate = ref(null);
      const areas = ref([]);
  

  
      const submitForm = () => {
        const formData = {
          name: name.value,
          sobrenome: sobrenome.value,
          desc: descricao.value,
          rate: hourlyRate.value,
          areas: areas.value,
        };
        store.saveData(formData); 
      };
  
      return {
        name,
        sobrenome,
        descricao,
        hourlyRate,
        areas,
        submitForm,
      };
    },
  };
  </script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}


</style>  