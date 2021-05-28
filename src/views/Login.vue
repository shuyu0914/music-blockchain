<template>
    <div class='container mt-5'>
    	<form>
    		<div class="row mb-3">
				<label for="colFormLabel" class="col-sm-2 col-form-label">帳號</label>
					<div class="col-sm-6">
			    	<input type="email" v-model="account" class="form-control" id="colFormLabel" placeholder="email">
			  </div>
			</div>
			<div class="row mb-5">
			    <label class="col-sm-2 col-form-label">Password</label>
			    <div class="col-sm-6">
			      <input type="password" class="form-control" v-model="password">
			    </div>
			</div>
			<hr/>
			<div class="col-6 offset-md-2 mt-5">
			  <button class="btn btn-info btn-block" type="button" @click="login">登入</button>
			</div>
    	</form>
    </div>
</template>

<script>


export default {
	name: 'Login',
	components: {},
	data: () => ({
		account:'',
		password:''
	}),
	components: {},
	methods:{
	  redirectPath(path){
	    this.$router.push(path)
	  },
	  login(){
	  	//TODO
	  }
	}
}
</script>