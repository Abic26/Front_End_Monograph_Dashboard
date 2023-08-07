<template>
 <!--main content -->
    <main>   
    <div class="container">
        <div class="box1">
            <h5><span>NEW</span>  MONOGRAPH DASHBOARD</h5>
                <div>
                    <h1><strong>POWERFUL INSIGHTS <br> INTO YOUR TEAM</strong></h1>
                    <p>Project planning and time tracking <br> for agile teams</p>
                </div>
                <div class="buttons">
                    <button class="button1">SCHEDULE A DEMO</button>
                    <button class="button2">TO SEE A PREVIEW</button>

                </div>
        </div>
        <!-- svg main content -->
        <div class="box2">
            <img class="imgDevices" src="/illustration-devices.svg" alt="">
        </div>
    </div>

    </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');

.container {
  display: flex;


  /* background: red; */
}

.box {
  padding: 20px;
}

.box1 {
    color: black;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    flex: 1;
    margin-left: -15.5vh;
    font-family: 'Barlow Condensed', sans-serif;
    padding-top: 50px;
}
h1 strong{
   font-family: 'Barlow Condensed', sans-serif;
    font-size: 105px;
    padding-bottom:15px ;
    font-weight: 900;
    letter-spacing: -3px;
    font-weight: bolder;

}

.box2 {
    z-index: 3;
    flex: 1; 
    margin-left: 55.5vh;
    display: flex;
    justify-content: flex-end; 
    

}
h5{
  font-weight: 900;
    letter-spacing: 8px;
    color: #00000076;
    padding-bottom: 15px;
   font-family: 'Barlow Condensed', sans-serif;
}
span{
   font-family: 'Barlow Condensed', sans-serif;
    text-align: center;
    color: #fff;
    background-color: #000;
    border-radius: 150px 150px 150px 150px;
    padding:5px 10px 5px 15px; 
    font-weight: bolder;   
}

p{
    font-size: 30px;

}

.buttons{
    padding: 10px 0px 30px 0px;
}
.button1{
    background:hsl(0, 100%, 68%);
    color: white    ;
    padding: 15px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    width: 25vh;

}
.button1:hover{
    background:white;
    color: hsl(0, 100%, 68%);
    padding: 15px;
    font-weight: 700;
    border: 2px solid hsl(0, 100%, 68%);

}
.button2{
    background:white;
    color: #00000076;
    padding: 15px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    margin-right: 10px;
    letter-spacing: 2px;


}
.button2:hover{
    background:white;
    padding: 15px;
    font-weight: 700;
    border: 2px solid rgb(230, 43, 43);

}
.imgDevices{
  /* background: red; */
  margin-left: 210px;
  width: 1080px;
  height: 555px;
  overflow: hidden;
  
}
@media (max-width: 768px) {
  .container {
    padding-top: 90px;
    width: 53vh;
    flex-direction: column-reverse;
  }
  
  .box1 {
    padding-top: 1px;
    margin-left: 0;
    position: relative;
  }
  .box1 h5{
    padding-top: 90px;
    font-size: 20px;
    letter-spacing: 7px;
    font-weight: 900;
  }
  h1 strong{
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 65px; 
    font-weight: 700;

  }

  .box2 {
    margin-left: -230px;
  }
  
.imgDevices{
  width: 700px;
  height: 200px;
}
}


</style>

