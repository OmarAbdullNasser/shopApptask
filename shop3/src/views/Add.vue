<template>
  <main>
    <div class="container-lg">
      
      <div class="row justify-content-start   my-2 border rounded">
          <form>
            <div class="col mb-3">
                <label for="exampleInputEmail1" class="form-label "> title</label>
                <input type="text" class="form-control" id="exampleInputEmail1" v-model="title">
            </div>

            <div class="col mb-3">
                <label class="form-label ">price</label>
                <input type="number" class="form-control" v-model="price">
            </div>

            <div class="col mb-3">
                <label  class="form-label ">category</label>
                <input type="text" class="form-control"  v-model="category">
            </div>
            <button type="submit" class="col btn btn-primary m-3" @click="Add" >Add</button>
        </form>
          
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
    title:'',
    price:'',
    category:''
    }
  },
   
  methods:{
      Add(e){
          axios.post("https://fakestoreapi.com/products",{
               title: this.title,
                price: this.price,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: this.category,
          }).then(function (response) {
                console.log(response);
                console.log("done good work")
            })
            .catch(function (error) {
                console.log(error);
            });

            e.preventDefault();

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