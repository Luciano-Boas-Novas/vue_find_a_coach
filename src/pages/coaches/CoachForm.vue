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
        <textarea id="descricao" v-model.trim="descricao" rows="4"></textarea>
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

export default {
  setup(props, { emit }) {
    const name = ref('');
    const sobrenome = ref('');
    const descricao = ref('');
    const hourlyRate = ref(null);
    const areas = ref([]);
    const errors = ref([]);  

    const validateForm = () => {
      errors.value = [];

      if (!name.value.trim()) {
        errors.value.push('O nome é obrigatório.');
      }
      if (!sobrenome.value.trim()) {
        errors.value.push('O sobrenome é obrigatório.');
      }
      if (!descricao.value.trim()) {
        errors.value.push('A descrição é obrigatória.');
      }
      if (!hourlyRate.value || hourlyRate.value <= 0) {
        errors.value.push('A taxa por hora deve ser maior que zero.');
      }
      if (areas.value.length === 0) {
        errors.value.push('Selecione pelo menos uma área de atuação.');
      }

      return errors.value.length === 0;
    };

    const submitForm = () => {
      if (!validateForm()) {
        console.warn('Formulário inválido:', errors.value);
        return;
      }
      const formData = {
        firstName: name.value,
        lastName: sobrenome.value,
        description: descricao.value,
        hourlyRate: hourlyRate.value,
        areas: areas.value
      };
      emit('save-data', formData);
    };

    return {
      name,
      sobrenome,
      descricao,
      hourlyRate,
      areas,
      errors,
      submitForm
    };
  }
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