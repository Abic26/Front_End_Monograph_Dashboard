<template>
    <div>
      <button @click="showUpdateModal">Actualizar datos</button>
  
      <!-- Modal de actualización -->
      <div class="modal" v-if="showModal">
        <div class="modal-content">
          <span class="close" @click="closeUpdateModal">&times;</span>
          <form @submit.prevent="updateUser">
            <label for="name">Nombre:</label>
            <input v-model="updatedName" id="name" type="text">
            <button type="submit">Guardar</button>
          </form>
        </div>
      </div>
  
      <input v-model="searchTerm" placeholder="Buscar por nombre">
      <button @click="listUsers">Cargar Usuarios</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="index">
            <td>{{ user.name.first }} {{ user.name.last }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button @click="showUpdateModal(index)">Actualizar</button>
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
        updateUserIndex: -1,
      };
    },
    methods: {
      async listUsers() {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        this.users = data.results;
        // this.updateLocalStorage();  // Puedes agregar esto si es necesario
      },
      updateUser() {
        if (this.updateUserIndex !== -1) {
          this.users[this.updateUserIndex].name.first = this.updatedName;
          this.closeUpdateModal();
        }
      },
      showUpdateModal(index) {
        this.updateUserIndex = index;
        this.updatedName = this.users[index].name.first;
        this.showModal = true;
      },
      closeUpdateModal() {
        this.showModal = false;
        this.updatedName = '';
        this.updateUserIndex = -1;
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
  /* ... Estilos existentes ... */
  
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .modal-content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    width: 70%;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  