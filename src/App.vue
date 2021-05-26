<template>
  <div id="app">
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
        Music Blockchain
      </a>
      <ul class="navbar-nav px-3" style="flex-direction:initial;">
        <li class="nav-item text-nowrap px-2">
          <a class="nav-link" href="#">註冊</a>
        </li>
        <li class="nav-item text-nowrap px-2">
          <a class="nav-link" href="#/login">登入</a>
        </li>
      </ul>
    </header>

    <div class="container-fluid">
      <div class="row">
        <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <div class="position-sticky pt-3">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/shopping">
                  全部音樂
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/shopping">
                  熱播排行
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>音樂人專區</span>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">
                  作品上傳與版稅
                </a>
              </li>
            </ul>

            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>我的帳戶</span>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">
                  收藏歌曲
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">
                  收藏歌單
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">
                  聆聽記錄
                </a>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">Dev Mode</h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/payments">
                  Go to Payments
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 offset-md-2"> 
          <router-view/>
        </main>
      </div>
    </div>


    
  </div>
</template>

<script type="javascript">
  import '@/assets/css/vendor/bootstrap.min.css'
  import '@/assets/css/app.scss'
  export default {
    name: 'App',
    data: () => ({}),
    components: {},
    methods:{
      redirectPath(path){
        this.$router.push(path)
      },
    }
  }
</script>

