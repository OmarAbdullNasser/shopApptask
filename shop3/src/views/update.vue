<template>
  <main>
    <div class="container-lg">
      <!--search box-->
      <div class="row g-3 align-items-center m-4">
            <div class="col-auto">
                <label for="inputPassword6" class="col-form-label">Enter id of Product:</label>
            </div>
            <div class="col-auto">
                <input type="number" id="inputPassword6" class="form-control" min=1 v-model="id" >
            </div>

             <div class="col-auto">
               <button type="submit" class="col btn btn-primary m-3" @click="get_single()">Get!</button>
            </div>
            
    </div>


      <div class="row justify-content-start   my-2 border rounded "  v-if="typeof {product} !='undefined'">
          <form @submit="handleSubmit">
            <div class="col mb-3">
                <label for="exampleInputEmail1" class="form-label "> title</label>
                <input type="text" class="form-control" id="exampleInputEmail1"  :placeholder="product.title" v-model="title"  >
            </div>

            <div class="col mb-3">
                <label class="form-label ">price</label>
                <input type="number" class="form-control"  :placeholder="product.price" v-model="price">
            </div>

            <div class="col mb-3">
                <label  class="form-label ">category</label>
                <input type="text" class="form-control"   :placeholder="product.category" v-model="category"  >
            </div>
            <button type="submit" class="col btn btn-primary m-3" @click="update()" >Update</button>
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
      id:'',  
    title:'',
    price:'',
    category:'',
    product:[]
    }
  },
   
  methods:{
       get_single(){
        axios.get(`https://fakestoreapi.com/products/${this.id}`)
        .then((res)=>{this.product=res.data})
        .catch(err=> console.log(err.message))},
       

      update(){
          axios.put(`https://fakestoreapi.com/products/${this.id}`,{
               title: this.title,
                price: this.price,
                description: "lorem ipsum set",
                image: "https://i.pravatar.cc",
                category: this.category,
          }).then(function (res) {
              console.log(res.data)
               console.log("done ya bro2")
               
            })
            .catch(function (error) {
                console.log(error);
            });
          

      },

      handleSubmit(e){
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