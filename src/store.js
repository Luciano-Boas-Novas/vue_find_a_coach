import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state: () => {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'John',
          lastName: 'Doe',
          areas: ['frontend', 'carrer'],
          description: 'Experienced life coach...',
          hourlyRate: 50
        },
        {
          id: 'c2',
          firstName: 'Luciano',
          lastName: 'Santiago',
          areas: ['frontend', 'carrer'],
          description: 'Experienced life coach...',
          hourlyRate: 50
        },
        {
          id: 'c3',
          firstName: 'Amenic',
          lastName: 'Santiago',
          areas: ['Wordpress', ''],
          description: 'Experienced life coach...',
          hourlyRate: 50
        }

      ]
    };
  }
});
