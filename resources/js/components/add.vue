<template>
    <form v-on:submit.prevent='createpost'>
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" id="title" v-model='post.title'>
  </div>
  <div class="form-group">
    <label for="body">Body:</label>
    <input type="text" class="form-control" id="body" v-model='post.body'>
  </div>  
  <button type="submit" class="btn btn-info">Submit</button>
</form>
</template>
<script>
    export default{
        data:function(){
            return {post:{
                title:'',
                body:''
            }}
        },
        methods:{
            createpost:function(){
                let url = "http://localhost:8000/api/posts";
                axios.post(url,this.post).then(resp => this.$router.push('/'));
            }
        }
    }
</script>