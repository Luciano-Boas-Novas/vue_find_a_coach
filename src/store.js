import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state: () => {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'John',
          lastName: 'Doe',
          description: 'Experienced life coach...',
          hourlyRate: 50
        }
      ]
    };
  }
});
