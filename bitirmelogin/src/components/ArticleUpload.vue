<template>
  
    <div id="app">
      <div class="container">
        <div class="form-container">
          <h1>New Submission</h1>
          <form @submit.prevent="submitArticle">
          <h2><label for="title">Enter Title Of Manuscript*:</label></h2>
          <input v-model="article.title" id="title" placeholder="Enter Title Of Manuscript" type="text" required >
         
            <h2><label for="manuscriptType">Type of Manuscript:</label></h2>
 
            <select v-model="article.manuscriptType" id="manuscriptType" required>
              <option value="Research">Research</option>
              <option value="Review">Review</option>
              <option value="Case Study">Case Study</option>
             
            </select>
     
            <h2><label for="abstract">Add Abstract:</label></h2>
           
            <textarea v-model="article.abstract" id="abstract" rows="5" placeholder="Write Abstract..." required></textarea>
          
            <h2><label for="keywords">Enter Keywords:</label></h2>
          
            <textarea v-model="article.keyword" id="keyword" rows="5" placeholder="Write Keywords..." required></textarea>
            
           
            <h2><label for="workArea">Select Work Area:</label></h2>
        
          <input v-model="article.workArea" id="workArea" type="radio" value="Natural Science" required>
          <label for="workArea"> Natural Science</label>
          
          <br>
          <input v-model="article.workArea" id="workArea" type="radio" value="Engineering Science" required>
          <label for="workArea"> Engineering Science</label>

          <br>
          
            <h2><label for="message">Your Message:</label></h2>
            
            <textarea v-model="article.message" placeholder="Write yoru message" id="message" rows="5" required></textarea>
            <br>
            <h2>Please suggest three referees:</h2>
            <h3>At least one referee must be out of your country</h3>
          <div v-for="(referee, index) in article.referees" :key="index">
           
            <input v-model="referee.name" :id="'name' + index" placeholder="Reiviewer's Name Surname" type="text" required>

            <input v-model="referee.email" :id="'email' + index" placeholder="Reiviewer's E-mail" type="email" required>

            
            <input v-model="referee.university" :id="'university' + index" placeholder="Reiviewer's University" type="text" required>
          </div>
          <br>
          <h2><label for="message">Being Reiviewer:</label></h2>
          <input v-model="article.workArea" id="beingReiviewer" type="checkbox" value="Yes">
          <label for="workArea"> I am Accepting to be a Reiviewer</label>
          <br>
          <h2>Please Add, Edit or Remove Authors</h2>

       <h3>Current Author List:</h3>
        <ul>
          <option>Yakup Kutlu</option>
          <li v-for="(author, index) in article.authors" :key="index">{{ author.name }}</li>
        </ul>

        <input v-model="newAuthor" placeholder="Enter Author Name" />
        <button @click="addCustomAuthor" class="add-author-button">Add Author </button>

        <h2>Choose Corresponding Authors:</h2>
        <select v-model="article.correspondingAuthors" >
          <option>Yakup Kutlu</option>
          <option v-for="(author, index) in article.authors" :key="index" :value="author.id">{{ author.name }}</option>
        </select>
        <br>
       <h2><label for="manuscriptFile">Upload Manuscript File:</label></h2>
        <input type="file" id="manuscriptFile" accept=".pdf, .doc, .docx" class="file-button"  @change="handleFileUpload" required>
        <br>
        <br>
        <h2>Compilance with Ethical Standarts</h2>
        <h3><label for="ethicalStandarts"> Plesae declare whether the results of the study involve human and/or animal rights:</label></h3>
        <input v-model="article.humanRights" id="ethicalStandarts" type="radio" value="yes" required>
        <label for="ethicalStandarts"> Yes     </label>
        <input v-model="article.humanRights" id="ethicalStandarts" type="radio" value="no" required>
        <label for="ethicalStandarts"> No </label>
        <br>
        <br>
        <h3>If "YES", Please fill Statement for The Ethics Committee Approval Form and attach it below:</h3>
        <input type="file" accept=".pdf, .doc, .docx" class="file-button" @change="handleEthicsFormUpload" required>
        <br>
        <br>
          
            <button class="submit-button" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ArticleSubmission',
    data() {
      return {
        article: {
          title: '',
          manuscriptType: '',
          abstract: '',
          keyword:  '',
          workArea: [],
          message: '',
          referees: [
          { name: '', email: '', university: '' },
          { name: '', email: '', university: '' },
          { name: '', email: '', university: '' },
        ],
          beingReivier: [],
          article: {
        authors: [
          { id: 1, name: 'Ahmet' },
          { id: 2, name: 'Author 2' },
          // Add other authors as needed
        ],
        correspondingAuthors: [],
        // Other article data goes here
        newAuthor: '',
        manuscriptFile: null,
        etichalStandarts:'',
        ethicsForm: null,
      },
      
        },
      };
    },
    methods: {
      addAuthor() {
      this.article.authors.push({ id: Date.now(), name: '' });
      },
      
      submitArticle() {
        // Makale verilerini sunucuya gönderme işlemleri burada yapılabilir
        console.log('Makale başvurusu gönderildi:', this.article);
      },
      handleFileUpload(event) {
      this.manuscriptFile = event.target.files[0];
      },
      handleEthicsFormUpload(event) {
      this.article.ethicsForm = event.target.files[0];
      },
    },
  };
  </script>
  
  <style scoped>
h1{
  font-size : 35px;
  color: #fffb00;
  

}
h2{
  font-size:  28px;
  color: #fffb00;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Dikeyde üstten hizalama */
  margin-top: 100px; /* Yukarıdan boşluk */
  margin-left: 130px; /* Sağdan boşluk */
}

.form-container {
  width: 800px;
  padding: 20px;
  border: 1px solid #fffb00;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

}
.submit-button {
  margin-top: 20px;
  background-color: #fffb00;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

.add-author-button {
  margin-top: 20px;
  background-color: #fffb00;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 5px 20px;
  cursor: pointer;
}
.file-button {
  margin-top: 20px;
  background-color: #fffb00;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 5px 20px;
  cursor: pointer;
}


</style>