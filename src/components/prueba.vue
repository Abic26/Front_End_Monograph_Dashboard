<template>
    <div class="general">
      <!-- Modal de actualización -->
      <div class="modal" :style="{ display: showModal ? 'block' : 'none' }">
      <div class="modal-content">
        <span class="close" @click="closeUpdateModal">&times;</span>
        <!-- Formulario de actualización -->
        <form @submit.prevent="updateUser">
        
          <div class="form-group"><label for="name">Name:</label><br>
          <input v-model="updatedName" id="name" type="text"></div>
        
          <div class="form-group"><label for="email">Email:</label><br>
          <input v-model="updatedEmail" id="email" type="text"></div>
            
          <div class="form-group"><label for="name">Phone:</label><br>
          <input v-model="updatedPhone" id="phone" type="text"></div>
          <button class="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
    </div>
    <br><br>
    <div class="search">
      <input  v-model="searchTerm" placeholder="SEARCH NAME"> <br><br>
      <button class="btn btn-info" @click="listUsers">Change Users</button>
    </div>
      <table class="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UPDATE ////// DELETE</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="index">
            <td>{{ user.name.first }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button class="btn btn-success" @click="showUpdateModal(index)">Update</button>
              <button class="btn btn-danger" @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [],
        searchTerm: '',
        showModal: false,
        updatedName: '',
        updatedEmail: '',
        updatedPhone: '',
        updateUserIndex: -1,
      };
    },
    methods: {
      async listUsers() {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        this.users = data.results;
      },
      async updateUser(index) {
        if (this.updateUserIndex !== -1) {
          this.users[this.updateUserIndex].name.first = this.updatedName;
          this.users[this.updateUserIndex].email = this.updatedEmail;
          this.users[this.updateUserIndex].phone = this.updatedPhone;
          this.closeUpdateModal();
     
        }
      },
      showUpdateModal(index) {
        console.log('xxxxxx');
        this.updateUserIndex = index;
        this.updatedName = this.users[index].name.first;
        this.updatedEmail = this.users[index].email; 
        this.updatedPhone = this.users[index].phone;
        this.showModal = true;
      },
      closeUpdateModal() {
        this.showModal = false;
        this.updatedName = '';
        this.updateUserIndex = -1;
      },
      deleteUser(index) {
    const confirmDelete = confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      this.users.splice(index, 1);
    }
  },
    },
    computed: {
      filteredUsers() {
        const searchTerm = this.searchTerm.toLowerCase();
        return this.users.filter(user => {
          const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
          return fullName.includes(searchTerm);
        });
      },
    },
  };
  </script>
  
  <style>
body{
    background: hsl(207, 33%, 95%);
    color: black;
}  
.general{
    background: hsl(204, 59%, 87%);
    height: 900px;
    width: 800px;
    border-radius: 15px;
    padding: 0px 20px 0 20px;
    font-size: 15px;
}
th{
    color: white;
}

  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(185, 14, 14, 0.7); */
  }
  
  .modal-content {
      display: block;
    background-color: white;
    margin: 15% auto;
    padding: 40px 150px 50px 150px;
    height: 35%;
    width: 50%;
  }

  
   
  
  .close {
    color: #aaa;
    float: top;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: rgb(244, 243, 243);
    text-decoration: none;
    cursor: pointer;
  }
  .user-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.user-table th,
.user-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #990a0a;
}

.user-table th {
  background-color: #1141d2;
}
.form-group {
  margin-bottom: 10px;
}
  </style>
  