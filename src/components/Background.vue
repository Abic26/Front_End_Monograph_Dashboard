<template>
    <div class="background"></div>
    <slot></slot>
</template>
<style>
body{
    background: white;
    overflow-x: hidden;
}
.background{
    padding: 3rem;
    z-index: -1;
    width: 800px;
    height: 480px;
    position: absolute;
    top: 0px;
    right: 0; 
    background: hsl(207, 33%, 95%);
    border-radius: 0px 0px 0px 109px;
    -webkit-border-radius: 0px 0px 0px 109px;
    -moz-border-radius: 0px 0px 0px 109px;

}
@media (max-width: 768px) {
  .background {
    margin-right: -110px;
    z-index: -3;
    height: 400px; 
    width: 360px;
}
}

</style>