import Vue from 'vue';
import axios from 'axios';

const App = new Vue({
  el: '#vue-app',
  data: {
    dataArr: [] as any[]  
  },
  mounted() {
    this.fetchData();  
  },
  methods: {
    fetchData() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.dataArr = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }
});