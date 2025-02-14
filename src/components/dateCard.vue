<template>
    <div class="date-card" @click="$emit('click')">
      <div class="overlay">
        <h2 class="title">{{ title }}</h2>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String, // Year or Month name
      featurePhoto: String, // Background image
    },
  };
  </script>
  
  <style scoped>
  .date-card {
    width: 100%;
    padding-top: 100%; /* 1:1 Aspect Ratio */
    position: relative;
    background-size: cover;
    background-position: center;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
  }
  
  .date-card:hover {
    transform: scale(1.05);
  }
  
  .date-card .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .date-card .title {
    color: white;
    font-size: 1.8rem;
    font-weight: bold;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    text-align: center;
  }
  </style>
  