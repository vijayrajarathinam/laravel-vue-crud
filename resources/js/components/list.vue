<template id='post-list'>
    <div class="row">
        <div class="pull-right">
        <router-link class='btn btn-xs btn-primary' v-bind:to="{path:'/add'}">
            <span class="glyphicon glyphicon-plus"></span> Add
        </router-link>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='(post, index) in posts'>
                    <td>{{ index+1 }}</td>
                    <td>{{ post.title }}</td>
                    <td>{{ post.body }}</td>
                    <td>
                       <router-link class='btn btn-info btn-xs' v-bind:to="{name:'Detail',params:{id:post.id}}"><span class="glyphicon glyphicon-list"></span></router-link>
                       <router-link class='btn btn-warning btn-xs' v-bind:to="{name:'Edit',params:{id:post.id}}"><span class="glyphicon glyphicon-pencil"></span></router-link>
                       <router-link class='btn btn-danger btn-xs' v-bind:to="{name:'Delete',params:{id:post.id}}"><span class="glyphicon glyphicon-trash"></span></router-link>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
</template>
<script>
    export default{
        data:function(){
            return {posts:''}
        },
        created:function(){
            let url = "http://localhost:8000/api/posts";
            axios.get(url).then(resp => this.posts = resp.data);        
        },
        computed: {
            filteredPosts: function(){
                if(this.posts.length){
                    return this.posts;
                }
            }
        }
    }
</script>