<template>
    <li>
      {{ firstName }} {{ lastName }} - {{ hourlyRate }}$
    </li>
  </template>
  
  <script>
  export default {
    props: ['firstName',
      'lastName',
      'hourlyRate',],
    }
  
  </script>
  