<template>
      <div class="general container-fluid">
      <div class="container">
      <!-- Modal of update -->
      <div class="modal" :style="{ display: showModal ? 'block' : 'none' }">
      <div class="modal-content">
        <span class="close" @click="closeUpdateModal">&times;</span>        
        <!-- Form of update -->
        <form @submit.prevent="updateUser">
        
          <div class="form-group col-8 mx-auto"><label class="fs-10 fw-bolder" for="name">Name:</label><br>
          <input v-model="updatedName" id="name" type="text"></div>
        
          <div class="form-group col-8 mx-auto"><label class="fs-10 fw-bolder" for="email">Email:</label><br>
          <input v-model="updatedEmail" id="email" type="text"></div>
            
          <div class="form-group col-8 mx-auto"><label class="fs-10 fw-bolder" for="name">Phone:</label><br>
          <input v-model="updatedPhone" id="phone" type="text"></div>
          <button class="btn btn-danger d-grid gap-2 col-8 mt-3 mx-auto" type="submit">Save</button>
        </form>
      </div>
    </div>
    <br><br>
    <h2 class="pb-2">
    Table <a class="fs-1" href="https://randomuser.me/" target="_blank"> randomuser.me</a> Api
    </h2>
    <div class="search">
      <div class="input-group">
        <select class="form-select-sm" aria-label="Default select example">
          <option selected>Search by</option>
          <option value="Name">Name</option>
          <option value="Email">Email</option>
          <option value="Phone">Phone</option>  
        </select>
      <input  v-model="searchTerm" class="form-control" placeholder="SEARCH"> <br><br>
      </div>
      <br>
      <button class="btn btn-outline-success d-grid gap-1 col-12 mt-1 mx-auto" @click="listUsers">Change Users</button>

    </div>
    <!-- User listing table. -->
    <div class="Table">
      <table class="table user-table">
        <thead>
          <tr>
            <th scope="col">Photo User</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Update User</th>
            <th scope="col">Delete User</th>


          </tr>
        </thead>
        <tbody>
          
            <tr v-for="(user, index) in filteredUsers" :key="index">
            <td scope="row"> <img :src="user.picture.thumbnail"></td>
            <td scope="row">{{ user.name.first }}</td>
            <td scope="row">{{ user.email }}</td>
            <td scope="row">{{ user.phone }}</td>
            <td scope="row">
              <button class="btn btn-success table" @click="showUpdateModal(index)">Update</button>
            </td>
            <td scope="row">
              <button class="btn btn-danger table" @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>  
    </div>
    <div class="tableB">
    <Table_Back />
  </div>
  </template>
  
  <script>
import Table_Back from './Table_Back.vue';
  export default {
    components:{
      Table_Back
    },
    
    
    data() {
      return {
        title: '',
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
      tableBack(){
        this.$router.push({ name: 'tabla_back'});                // this.hideModal()

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
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');

  .general{
    background:hsl(0, 69%, 86%);
    height: auto;
    width: auto;
    margin-top: 100px;
    margin-left: -500px;
    border-radius: 15px;
    padding: 0px 20px 10px 20px;
    font-size: 15px;
    color: black;

  }
  .tableB{
    position: absolute;
    margin-top: -1105px;
    margin-left: 350px;
  }
  h2{
    font-family: 'Barlow Condensed', sans-serif;
    font-weight:  bolder;
  }
  a{
    font-family: 'Barlow Condensed', sans-serif;
    font-weight:  bolder;
    border-bottom: 2px solid rgb(60, 207, 78);
  }
  th{
      color: white;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight:  bolder;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight:  bolder;
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
      background-color: rgba(132, 137, 132, 0.59);
    }
    
    .modal-content {
      display: block;
      background-color: white;
      margin: 15% auto;
      padding: 10px 150px 50px 150px;
      height: 35%;
      width: 30%;
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
    margin-left: 0; /* Eliminamos el margen izquierdo */
    text-align: center; /* Centramos el contenido */
  }
  .tableB {
    position: static; /* Cambiamos la posición a estática */
    margin-top: 20px; /* Ajustamos el margen superior */
    margin-left: 0; /* Eliminamos el margen izquierdo */
  }

        .modal-content {
            width: 100%;
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
  button.table{
    color: #aaaaaa00;
    /* font-size: 10; */
    width: 10px;
  }    
  .user-table th,.user-table td {
            padding: 5px;
        }
    }
    </style>
  