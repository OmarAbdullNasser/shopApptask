<template>
  <main>
   <!--search box-->
      <div class="row g-3 align-items-center m-4">
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Enter id of Product:</label>
            </div>
            <div class="col-auto">
                <input type="number" id="inputPassword6" class="form-control" min=1 max=20 v-model="id" >
            </div>

             <div class="col-auto">
               <button type="submit" class="col btn btn-primary m-3" @click="delete_p()">Delete!</button>
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
    id:'', 
    
    }
  },
   
   methods:{
       delete_p(){
        axios.delete(`https://fakestoreapi.com/products/${this.id}`)
       .then( console.log("delete is done :)"))
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


</style>