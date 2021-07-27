<template>
  <main>
    <!--Header-->
    <div class="container-lxg header">
      <div class=" row  justify-content-center  align-items-center text-center  bg-primary text-white">
        <h1 class="display-2">Our Shop</h1>
        <h4>Our Target to find what all you need here and more.... </h4>
      </div>
    </div>

  <!--opations on product-->
  <div class="container-lxg opations mt-1 mx-2 ">
      <div class="row justify-content-center  align-items-center text-center ">

        <div class="col-md-3  p-md-2 py-2">
          <button class="btn btn-dark btn-lg p-3" @click="selectedoption ='All'">
            <a > Get All Products </a>
          </button>
        </div>

        <div class="col-md-3  p-md-2 py-2">
          <button class="btn btn-success btn-lg p-3"  @click="selectedoption ='Add'">
              <a > Add Product</a>
            </button>
        </div>

        <div class="col-md-3 p-md-2 py-2">
           <button class="btn btn-warning btn-lg p-3"   @click="selectedoption ='update'">
            <a > Update Product</a>
          </button>
         </div>

        <div class="col-md-3 p-md-2 py-2">
           <button class="btn btn-danger btn-lg p-3" @click="selectedoption ='remove'" >
            <a  > Delete Product </a>
          </button>
        </div>  
      </div>
  </div>

   <!--components-->
     
  <component :is="selectedoption"></component>
  </main>
</template>

<script>
import All from './components/All.vue'
import Add from './components/add.vue'
import update from './components/update.vue'
import remove from './components/remove.vue'
export default {
  name: 'App',
  data(){
    return{
      selectedoption:''
    }
  },
  components: {
    All,
    Add,
    update,
    remove
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
.btn{
  appearance: none;
  outline: none;

}
.header{
  width: 100%;
}

 .opations a{
color: #fff;
text-decoration: none;
}
.opations a:hover{
  color:#fff
}
</style>
