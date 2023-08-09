<template>
  <div class="container  general2">
    <div class="">
      <h2 class="pt-5">Table Users <span class="text-danger fw-bold">Backend / Lavarel</span></h2><br>
      <div class="modal" :style="{ display: openModal ? 'block' : 'none' }">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <form @submit.prevent="addUser">
            <div class="form-group col-8 d-grip g-1 mx-auto">
              <label class="fs-10 fw-bolder" for="name">Nombre:</label><br>
              <input type="text" v-model="newUser.name" placeholder="userName" required>
            </div>
            <div class="form-group col-8 mx-auto">
              <label class="fs-10 fw-bolder" for="email">Email:</label><br>
              <input type="email" v-model="newUser.email" placeholder="example@gmail.com" required>
            </div>
            <div class="form-group col-8 mx-auto">
              <label class="fs-10 fw-bolder" for="phone">Phone:</label><br>
              <input type="phone" v-model="newUser.phone" placeholder="9812637" required>
            </div>
            <button class="btn btn-danger d-grid gap-2 col-8 mt-3 mx-auto" type="submit">Create User</button>
        </form>
        </div>
      </div>
      <button class="btn btn-outline-primary d-grid gap-1 col-12 mt-1 mx-auto" @click="showModal">New User</button><br>
        <h2>New User BackEnd</h2>
      <table class="table user-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in userBack" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUser: {
          name: '',
          email: '',
          phone: '',
        },
        users:[],
        userBack: [],
        openModal: false,
      };
    },
    async mounted(){
        console.log('xxmountedxxxxBackM');
        await this.listUsersBack()
    },  
    methods: {
         listUsersBack() {
        try{ 

        const url = 'https://backeglobalmonographdashboard-production.up.railway.app/api/newUsers/getusers'
        fetch(url)
          .then(response => response.json())
          .then(data => {
            this.userBack = data.users; 
          })
        }catch (error){   
            console.error("errorasdasd",error);

        }
       
      },

        addUser() {
            const url = 'https://backeglobalmonographdashboard-production.up.railway.app/api/newUsers'
            const formData = new FormData();
            formData.append("name",this.newUser.name );
            formData.append("email",this.newUser.email );
            formData.append("phone",this.newUser.phone );
        fetch(url,{
            method:"POST",
            body:formData,
            mode:'no-cors'
       
        }).then(response =>{
            console.log(response);
        })
  
        // Agregar el nuevo usuario al arreglo
        this.userBack.push({ ...this.newUser });
  
        // Limpiar el formulario después de agregar el usuario
        this.newUser.name = '';
        this.newUser.email = '';
        this.newUser.phone = '';
  
        // enviar datos a backend y db
  
        // Cerrar el modal después de agregar el usuario
        this.closeModal();
      },
      showModal() {
        this.openModal = true;
      },
      closeModal() {
        this.openModal = false;
      },
    },
  };
  </script>
  
    <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');

 
  .general2{
    background:hsl(0, 69%, 86%);
    margin-top: 40px;
   
 
    /* margin-right: -450px; */
    border-radius: 15px;
    padding: 0px 20px 10px 20px;
    font-size: 15px;
    color: black;

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
      background-color: rgba(200, 203, 199, 0.59);
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
        .general2 {
          margin-left: -20PX;
            font-size: 12px;
            width: 570px;
            height: 100%;
            padding: 5px 10px 10px 5px;
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
    color: white;
    font-size: 10;
    width: 90%;
  }    
  .user-table th,.user-table td {
            padding: 5px;
        }
    }
    </style>
  
  