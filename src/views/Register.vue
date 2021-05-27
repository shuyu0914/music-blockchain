<template>
    <div class='container mt-5'>
    	<form>
    		<div class="row mb-3">
				<label for="colFormLabel" class="col-sm-2 col-form-label">電子信箱</label>
					<div class="col-sm-6">
			    	<input type="email" class="form-control" id="colFormLabel" placeholder="email">
			  </div>
			</div>
			<div class="row mb-3">
			    <label for="inputPassword3" class="col-sm-2 col-form-label">建立密碼</label>
			    <div class="col-sm-6">
			      <input type="password" class="form-control" id="inputPassword3">
			    </div>
			</div>
			<div class="row mb-3">
			    <label for="inputPassword4" class="col-sm-2 col-form-label">確認密碼</label>
			    <div class="col-sm-6">
			      <input type="password" class="form-control" id="inputPassword4">
			    </div>
			</div>
			<div class="row mb-3">
			    <label for="inputPassword4" class="col-sm-2 col-form-label">使用者暱稱</label>
			    <div class="col-sm-6">
			      <input type="text" class="form-control" id="inputPassword4">
			    </div>
			</div>
			<div class="row mb-3">
			    <label for="inputPassword4" class="col-sm-2 col-form-label">您的生日</label>
			    <div class="col-sm-6">
			      <input type="date" class="form-control" id="inputPassword4">
			    </div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-2">性別</div>
				<div class="col-sm-9">
					<div class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="male">
					  <label class="form-check-label" for="inlineRadio1">男</label>
					</div>
					<div class="form-check form-check-inline">
					  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female">
					  <label class="form-check-label" for="inlineRadio2">女</label>
					</div>
				</div>
			</div>


			<hr/>
			
			<div class="col-6 offset-md-2 mt-5">
			  <button class="btn btn-info btn-block" type="button">註冊</button>
			</div>
    	</form>
    </div>
</template>

<script>


export default {
	name: 'Register',
	components: {},
	data: () => ({}),
	components: {},
	methods:{
	  redirectPath(path){
	    this.$router.push(path)
	  },
	}
}
</script>