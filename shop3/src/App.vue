<template>
  <main>
      <!--Header-->
    <div class="container-xlg header">
      <div class=" row justify-content-center  align-items-center text-center bg-dark text-white">
        <div class="col-md-6">
             <router-link class="link" to="/" @click="flag=true">Our Shop</router-link>  
              <!--search box-->
        </div>
        <div class="search col-md-6 d-flex">
            <input type="text" class="form-control w-50 mx-2"  placeholder="Search for Product by Id.." v-model="id">
            <button type="button" class="btn btn-light btn-outline-success btn-search " @click="get_single()">Get</button>
         </div>
      </div>
      <div class="row justify-content-center  align-items-center text-center bg-dark text-white">
        <div id="nav">
      <router-link class="link" to="/Add" @click="flag=false">Add Product </router-link>  
      <router-link class="link" to="/Delete" @click="flag=false">Delete Product</router-link>
       <router-link class="link" to="/upadete" @click="flag=false">Update Product</router-link>
      </div>
      </div>
        <router-view />

          <div class="row justify-content-center  align-items-center text-center my-2 border rounded" v-show="flag" @click="get()">
          <div class="card col-md-3 m-2 h-50" v-for="product of Products " :key="product.id" v-show="Show" >
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
    Products:[],
    flag:true, 
    id:"",
    Show:true
    
    }
  },
   
   mounted(){
     
      axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
        this.Products=res.data
        
        })
        .catch(err=> console.log(err.message))   
        
   },
   methods:{
     get(){
       axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
        this.Products=res.data
        
        })
        .catch(err=> console.log(err.message)) 
     },
      get_single(){
        this.Products.forEach(product => {
          if (product.id != this.id){
            this.Show=false
          }else{
             this.Show=true
          }
        });
        }
   }
 
 
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.btn-search{
  appearance: none;
  outline: none;
}
.link{
  text-decoration: none;
  color:#fff;
  font-size: 30px;
  margin: 20px;
}
.link:hover{
  color: #fff;
}
</style>
