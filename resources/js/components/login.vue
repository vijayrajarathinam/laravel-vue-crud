<template>
    <div class="card col-md-4" style="margin: 0 auto;">
        <article class="card-body">
            <h4 class="card-title text-center mb-4 mt-1">Shop</h4>
            <hr>
            <p class="text-success text-center">login</p>
            <form v-on:submit.prevent="login">
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                        </div>
                        <input name="" class="form-control" placeholder="Email" v-model="data.email" type="email">
                    </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                        </div>
                        <input class="form-control" placeholder="******" v-model="data.password" type="password">
                    </div> <!-- input-group.// -->
                </div> <!-- form-group// -->
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-block"> Login  </button>
                </div> <!-- form-group// -->
                <p class="text-center"><a href="#" class="btn">Forgot password?</a></p>
            </form>
        </article>
    </div> <!-- card.// -->

</template> <!-- col.// -->
<script>
    export default{
        data:function(){
            return {
                data:{
                    email:'',
                    password:''
                }
            }
        },
        methods:{
            login:function(){
                let uri = `http://localhost:8000/api/login`;
                console.log(this.data);
                axios.post(uri,this.data).then(resp => {
                    localStorage.setItem("token", resp.data.token);
                    this.$router.push('/');
                });
            }
        }
    }
</script>    