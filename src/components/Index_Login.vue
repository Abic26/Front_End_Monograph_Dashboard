<template>
    <div class="general">
      <!-- Modal of update -->
      <div class="modal" :style="{ display: showModal ? 'block' : 'none' }">
      <div class="modal-content">
        <span class="close" @click="closeUpdateModal">&times;</span>
        <!-- Form of update -->
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
    User search by name, email, and phone.
    <div class="search">
      <input  v-model="searchTerm" placeholder="SEARCH NAME"> <br><br>
      <button class="btn btn-info" @click="listUsers">Change Users</button>
    </div>
    <!-- User listing table. -->
      <table class="user-table">
        <thead>
          <tr>
            <th>Photo User</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>UPDATE ////// DELETE</th>

          </tr>
        </thead>
        <tbody>
          
            <tr v-for="(user, index) in filteredUsers" :key="index">
            <td> <img :src="user.picture.thumbnail"></td>
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
    async mounted() {
    console.log('xxxmountedxxx');
    await this.listUsers(); 
  },

    methods: {
      // List the users."
      async listUsers() {
        try{ 
        console.log('xxxlistarUsuariosxxx')
        const response = await fetch('https://randomuser.me/api/?results=10')
        const data = await response.json()
        console.log(data);
        this.users = data.results
        localStorage.setItem('usersLocal', JSON.stringify(this.users));

        }catch (error){   
            console.error("error",error);

        }
       
      },
      // update the users
      async updateUser(index) {
        console.log('xxxcargarxxx')

        if (this.updateUserIndex !== -1) {
          this.users[this.updateUserIndex].name.first = this.updatedName;
          this.users[this.updateUserIndex].email = this.updatedEmail
          this.users[this.updateUserIndex].phone = this.updatedPhone
          this.closeUpdateModal()
     
        }
      },
      // Activate modal for updating data."
      showUpdateModal(index) {
        console.log('xxxmodalxxx');
        this.updateUserIndex = index;
        this.updatedName = this.users[index].name.first
        this.updatedEmail = this.users[index].email
        this.updatedPhone = this.users[index].phone
        this.showModal = true
      },
      // close the modal."
      closeUpdateModal() {
        console.log('xxxcerrarxxx');

        this.showModal = false
        this.updatedName = ''
        this.updatedEmail = '' 
        this.updatedPhone = ''

        this.updateUserIndex = -1
      },
      // delete users
      deleteUser(index) {
        console.log('xxxeliminarxxx')

    const confirmDelete = confirm("Are you sure you want to delete this user, if not press the ESC key or tap in your display mobile?")
    if (confirmDelete) {
      this.users.splice(index, 1)
    }
  },
    },
    computed: {
      // user filtering by name, email, and phone.
      filteredUsers() {
        const searchTerm = this.searchTerm.toLowerCase()
        return this.users.filter(user => {
          const Name = `${user.name.first}`.toLowerCase()
          const Email = `${user.email}`.toLowerCase()
          const Phone= `${user.phone}`.toLowerCase()
          return Name.includes(searchTerm)|| Email.includes(searchTerm) || Phone.includes(searchTerm)

        });
      },
    },
  };
  </script>
  
    <style scoped>
  body{
      background: hsl(207, 33%, 95%);
  }  
  .general{
    background:hsl(0, 69%, 86%);
    height: 900px;
    width: 800px;
    border-radius: 15px;
    padding: 0px 20px 0 20px;
    font-size: 15px;
    color: black;

  }
  th{
      color: white;
  }

    .modal {
      color: black;

      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(127, 240, 123, 0.59);
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
    
    .close:hover {
      color: rgb(175, 16, 16);
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
    background:hsl(0, 100%, 68%);

  }
  .form-group {
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
        .general {
            font-size: 12px;
            width: 100%;
            height: 100%;
            padding: 0px 10px;
        }

        .modal-content {
            width: 80%;
        }
        .modal-content {
           /* display: block; */
           background-color: white;
           /* margin: 15% auto; */
           padding: 60px 30px 50px 60px;
           /* height: 35%; */
           /* width: 50%; */
    }
        .close {
        padding-top: -15px;
        color: #d87777;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

        .user-table th,
        .user-table td {
            padding: 5px;
        }
    }
    </style>
  