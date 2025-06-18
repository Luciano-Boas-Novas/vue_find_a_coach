import { defineStore } from "pinia";

export const useStore = defineStore('store', {
  state: () => {
    return {
      messages:[{
        coachId: '',
        email:'',
        message:''
      }],
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
          areas: ['Wordpress', 'htrtr'],
          description: 'Experienced life coach...',
          hourlyRate: 50
        }

      ]
    };
  },
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
    }
  }
}
);
