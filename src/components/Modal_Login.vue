<template>
    <!-- Modal login page -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <form >
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-10" id="staticBackdropLabel">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div>
            <label>User</label><br>
            <input type="text" v-model.trim="user">
        </div>
        <div>
            <label>Password</label><br>
            <input type="password" v-model.trim="pass">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn cancel" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success" @click="mostarinfo()">Send</button>

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
            User:'abic26',
            Pass:'abic26'
        }

    }), methods:{
        mostarinfo(){
            let todo = {
                User_Data: this.user,
                Pass_Data:this.pass
            }
            if(this.user === this.Succes.User && this.pass === this.Succes.Pass){
                console.log(todo);
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
