<template>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">Your E-Mail</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">Message</label>
        <textarea rows="5" id="message" v-model.trim="message"></textarea>
      </div>
      <p class="errors" v-if="!formIsValid">Please enter a valid email and non-empty message.</p>
      <div class="actions">
        <base-button>Send Message</base-button>
      </div>
    </form>
  </template>
  <script>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStore } from '../../store';
  
  export default {
    setup() {
      const email = ref('')
      const message = ref('')
      const route = useRoute()
      const router = useRouter()
      const store = useStore();
  
      function submitForm() {
        const coachId = route.params.id
        store.addRequest({
        coachId,
        userEmail: email.value,
        message: message.value
        })
        router.replace('/coaches');
      }
      return {
        email,
        message,
        submitForm
      }
    }
  }
  </script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>