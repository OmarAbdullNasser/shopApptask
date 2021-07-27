<template>
  <main>
    <div class="container-lg">
      
      <div class="row justify-content-center  align-items-center text-center my-2 border rounded">

            <div class="card col-md-3 m-2 h-50" v-for="product of Products " :key="product.id" >
              <img :src="product.image" class="img-fluid rounded-start">
              <div class="card-body">
                <h5 class="card-title">{{ product.title}}</h5>
                <span> {{ product.price}} </span>
                <span class="d-block"> {{ product.category}} </span>
              </div>
            </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';


export default {
  name: 'App',
  data (){
    return{
    Products:[]
    }
  },
   
   mounted(){
     axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
        this.Products=res.data
        
        })
        .catch(err=> console.log(err.message)) 
        
        
   },
 
 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}


</style>