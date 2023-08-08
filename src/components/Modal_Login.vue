<template>
    <!-- Modal login page -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-10 fw-bolder text-danger" id="staticBackdropLabel">Welcome to Eglobal</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body    ">

        <div class="d-grid col-6 mx-auto col-10">
            <label class="fw-bold">User</label>
            <input type="text" v-model.trim="user" placeholder="eglobal">
            <label class="fw-bold">Password</label>
            <input type="password" placeholder="*******" v-model.trim="pass">
        </div>
      </div>
      <div class="modal-footer">
        <button type="submit" class="btn btn-danger d-grid gap-2 col-10 mx-auto" @click="mostarinfo()">Login</button>
      </div>
    </div>

</form>
  </div>
</div>
</template>
<script>
export default {
    data: ()=>({
        user:'',
        pass:'',
        Succes:{
            User:'123',
            Pass:'123'
        }

    }), methods:{
        mostarinfo(){
            let todo = {
                User_Data: this.user,
                Pass_Data:this.pass
            }
            if(this.user === this.Succes.User && this.pass === this.Succes.Pass){
                console.log(todo);
                const backdrop = document.querySelector(".modal-backdrop");
                if (backdrop) backdrop.parentNode.removeChild(backdrop);
                    this.$router.push({ name: 'index_login'});                // this.hideModal()
                // const url = `https://www.youtube.com/watch?v=i4rsSrnA-Ow&list=RDGMEM2VCIgaiSqOfVzBAjPJm-ag&index=4`;
                // window.open(url, '_blank');
                this.cleaner()
            } else{
                alert('Your user or password is damaged or incorrect')
                this.cleaner()

        }
    },
    cleaner(){
        this.user='',
        this.pass=''
    }
    }
}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');

.modal-title{
    font-family: 'Barlow Condensed', sans-serif;
    color: black;
}
label{
    color: black;
}
button.cancel{
    background:  rgb(230, 43, 43);
    color: white;
}
button.cancel:hover{
    color: rgb(230, 43, 43);
    background:white;
    border: 2px solid rgb(230, 43, 43);
}
</style>
