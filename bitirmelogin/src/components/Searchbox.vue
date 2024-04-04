<template>
  <div class="search-container">
    <div class="search-box">
      <input
        type="text"
        v-model="searchTerm"
        placeholder="Search..."
        @input="handleSearch"
      />
      <ul v-if="searchResults.length > 0" class="search-results">
        <li v-for="(result, index) in searchResults" :key="index">
          {{ result }}
        </li>
      </ul>
      <p v-else class="no-results" v-if="searchTerm && !searching">No results found.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      searching: false,
      searchResults: []
    };
  },
  methods: {
    handleSearch() {
      if (this.searchTerm.trim() === '') {
        this.searchResults = [];
        return;
      }

      // Simulate async search (you may replace this with an actual API call)
      this.searching = true;
      setTimeout(() => {
        // Simulated search results (replace this with your actual search logic)
        this.searchResults = ['Result 1', 'Result 2', 'Result 3'].filter(result =>
          result.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.searching = false;
      }, 500);
    }
  }
};
</script>

<style scoped>
.search-container {
  width: 60%; /* Tam ekran genişliği */
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0);
  padding: 10px 20px;
  display: flex; /* Flexbox kullanımı */
  justify-content: center; /* İçeriği yatayda ortala */
}

.search-box {
  position: relative;
  width: 900px;
  background-color: #363636;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #363636;
  border-radius: 5px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #363636;
  border: 1px solid #8b8b8b;
  border-top: none;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

.search-results li {
  padding: 10px;
  cursor: pointer;
}

.no-results {
  margin-top: 10px;
  font-style: italic;
}
</style>
