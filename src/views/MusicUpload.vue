<template>
    <div class='container mt-5'>
    	<h5 class="mb-5">開始上傳您的作品</h5>
    	<form>
    		<div class="row mb-3">
				<label for="colFormLabel" class="col-sm-2 col-form-label">曲目名稱</label>
					<div class="col-sm-6">
			    	<input class="form-control" id="colFormLabel" v-model="music.name">
			  </div>
			</div>
			<div class="row mb-3">
			    <label class="col-sm-2 col-form-label">曲目描述</label>
			    <div class="col-sm-6">
			      <input class="form-control" v-model="music.description">
			    </div>
			</div>
			<div class="row mb-3">
			    <label class="col-sm-2 col-form-label">上架發表日期</label>
			    <div class="col-sm-6">
			      <input type="date" class="form-control" v-model="music.putonDate">
			    </div>
			</div>
			<div class="row mb-3">
				<label  class="col-sm-2 col-form-label">合約授權年限</label>
			    <div class="col-sm-6">
			      	<select class="form-control" v-model="music.year">
					  <option value="1">1</option>
					  <option value="2">2</option>
					  <option value="3">3</option>
					</select>
			    </div>
			</div>
			<div class="row mb-3">
				<div class="col-sm-2">版稅分配比例</div>
				<div class="col-sm-3">
					<label class="form-label">作曲者</label>
					<input type="number" class="form-control" v-model="music.ratio.composer"> %
				</div>
				<div class="col-sm-3">
					<label class="form-label">原始著作權公司(OP)</label>
					<input type="number" class="form-control" v-model="music.ratio.op"> %
				</div>
				<div class="col-sm-3">
					<label class="form-label">代理版權公司(SP)</label>
					<input type="number" class="form-control" v-model="music.ratio.sp"> %
				</div>
			</div>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">作品檔案</label>
				<div class="col-sm-6">
					<input type="file" class="form-control" accept=".mp3" @change="onMusicFileChange">
				</div>
			</div>
			<div class="row mb-3">
				<label class="col-sm-2 col-form-label">作品封面</label>
				<div class="col-sm-6">
					<input type="file" class="form-control" accept=".png,.jpeg,.jpg"
					@change="onImgFileChange">
				</div>
			</div>

			<div id="preview">
		    <img v-if="imgSrc" :src="imgSrc" />
		  </div>


			<hr/>
			
			<div class="col-6 offset-md-2 mt-5">
			  <button class="btn btn-info btn-block" type="button">上傳</button>
			</div>
    	</form>
    </div>
</template>

<script>


export default {
	name: 'MusicUpload',
	components: {},
	data: () => ({
		imgSrc:null,
		music:{
			name:'',
			description:'',
			putonDate:'',
			year:'',
			ratio:{composer:'',op:'',sp:''},
			item:'',
			img:''
		}
	}),
	components: {},
	methods:{
	  redirectPath(path){
	    this.$router.push(path)
	  },
	  onMusicFileChange(e){
	  	this.music.item = e.target.files[0];
	  	console.log("music.item = ",this.music.item)
	  },
	  onImgFileChange(e) {
	    const file = e.target.files[0];
	    this.imgSrc = URL.createObjectURL(file);
	    this.music.img = file
	  }
	}
}
</script>