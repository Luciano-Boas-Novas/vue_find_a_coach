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
    async saveData(data) {

      const coachesResponse = await fetch('https://back-end-coaches-default-rtdb.firebaseio.com/coaches.json');
      if (!coachesResponse.ok) {
        throw new Error('Erro ao buscar coaches');
      }
      const coachesData = await coachesResponse.json();
    
      
      const ids = coachesData ? Object.keys(coachesData) : [];
      let maxIdNumber = 0;
      ids.forEach(id => {
    
        const numberPart = parseInt(id.replace('c', ''));
        if (!isNaN(numberPart) && numberPart > maxIdNumber) {
          maxIdNumber = numberPart;
        }
      });
    

      const newId = 'c' + (maxIdNumber + 1);
    

      const newCoach = {
        firstName: data.firstName,
        lastName: data.lastName,
        areas: data.areas,
        description: data.description,
        hourlyRate: data.hourlyRate
      };
    
   
      const response = await fetch(`https://back-end-coaches-default-rtdb.firebaseio.com/coaches/${newId}.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCoach)
      });
    
      if (!response.ok) {
        throw new Error('Erro ao salvar no Firebase.');
      }
    
 
      this.coaches.push({ ...newCoach, id: newId });
    },
    
   
    
    
    addRequest({ coachId, userEmail, message }) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId,
        userEmail,
        message,
      };
      this.requests.push(newRequest);
    },
    setCoachea(payload){
      this.coaches = payload;
    },
    async loadCoaches(){
     const response = 
     await fetch(`https://back-end-coaches-default-rtdb.firebaseio.com/coaches.json`);
     const responseData = await response.json();
     const coaches = [];

     for(const key in responseData){
        const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate
        };
     }
     coaches.push(coach);
    }
  },
  getters: {
    hasRequests: (state) => state.requests.length > 0,
    receivedRequests: (state) => state.requests
  }
});
