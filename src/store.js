import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state: () => ({
    requests: [],
    coaches: [
      {
        id: 'c1',
        firstName: 'John',
        lastName: 'Doe',
        areas: ['frontend', 'career'],
        description: 'Experienced life coach...',
        hourlyRate: 50,
        messages: [{
          coachId: '',
          email: '',
          message: ''
        }],
      },
      {
        id: 'c2',
        firstName: 'Luciano',
        lastName: 'Santiago',
        areas: ['frontend', 'career'],
        description: 'Experienced life coach...',
        hourlyRate: 50,
        messages: [{
          coachId: '',
          email: '',
          message: ''
        }],
      },
      {
        id: 'c3',
        firstName: 'Amenic',
        lastName: 'Santiago',
        areas: ['Wordpress', 'htrtr'],
        description: 'Experienced life coach...',
        hourlyRate: 50,
      }
    ]
  }),
  actions: {
    saveData(data) {
      const newCoach = {
        id: 'c' + (this.coaches.length + 1),
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.description,
        hourlyRate: data.hourlyRate
      };
      this.coaches.push(newCoach);
    },
    addRequest({ coachId, userEmail, message }) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId,
        userEmail,
        message,
      };
      this.requests.push(newRequest);
    }
  },
  getters: {
    hasRequests: (state) => state.requests.length > 0,
    receivedRequests: (state) => state.requests
  }
});
