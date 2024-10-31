<template>
    <div class="poll">
      <h1>{{ poll.question }}</h1>
      <div class="options">
        <div v-for="option in poll.options" :key="option.id" class="option">
          <button @click="vote(option.id)" class="vote-button">
            {{ option.choice }}
          </button>
          <span class="count">{{ option.count }} votes</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  export default {
    setup() {
      const poll = ref(null);
  
      const fetchPoll = async () => {
        const response = await axios.get('http://localhost:3000/poll');
        poll.value = response.data;
      };
  
      const vote = async (optionId) => {
        const response = await axios.post('http://localhost:3000/vote', { optionId });
        poll.value = response.data.poll;
      };
  
      onMounted(fetchPoll);
  
      return { poll, vote };
    },
  };
  </script>
  
  <style scoped>
  .poll {
    text-align: center;
  }
  
  .options {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f1f3f5;
    padding: 10px 20px;
    border-radius: 8px;
  }
  
  .vote-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 16px;
  }
  
  .vote-button:hover {
    background-color: #0056b3;
  }
  
  .count {
    font-weight: bold;
    color: #555;
  }
  </style>
  