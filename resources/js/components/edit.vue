<template>
    <form v-on:submit.prevent='editpost'>
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" id="title" v-model='post.title'>
  </div>
  <div class="form-group">
    <label for="body">Body:</label>
    <input type="text" class="form-control" id="body" v-model='post.body'>
  </div>  
  <button type="submit" class="btn btn-info">Change</button>
</form>
</template>
<script>
    export default{
        data:function(){
            return { post:{
                title:'',
                body:''
            }}
        },
        created:function(){
            let url = `http://localhost:8000/api/posts/${this.$route.params.id}`;
            axios.get(url).then(resp => this.post = resp.data);
        },
        methods:{
            editpost:function(){
                let uri = `http://localhost:8000/api/posts/${this.$route.params.id}`;
                axios.patch(uri,this.post).then(resp => this.$router.push('/'));
            }
        }
    }
</script>