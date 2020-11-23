<template>
  <div class="navigation-component background-color">
    <vs-navbar
      class="nabarx container py-0 text-left py-1"
      color="#2C7ABE"
      text-color="#FFFFFF"
      active-text-color="rgba(255,255,255,1)"
    >
      <div slot="title">
        <vs-navbar-title class="text-white my-1 d-flex align-items-center">
          <img class="logo-img mx-2" src="/images/logo.png" alt="">
          <h4 class="mt-2">Doc truyen online</h4>
        </vs-navbar-title>
      </div>
      <vs-navbar-item class="mx-2" index="0">
        <a class=" text-09" href="/">Home</a>
      </vs-navbar-item>
      <vs-navbar-item class="mx-2 my-2" index="1">
        
        <vs-dropdown class="text-white text-justify align-content">
          <a href="/category" class="d-flex text-09">
            Thể loại
          </a>

          <vs-dropdown-menu right>
            <div class=" d-flex flex-row">
              <div>
                <vs-dropdown-item>
                 <a href="/ngontinh" class="d-flex">
                 <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Ngôn Tình
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/tienhiep" class="d-flex">
                  <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Tiên Hiệp
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/kiemhiep" class="d-flex">
                  <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Kiếm Hiệp
                  </a>
                </vs-dropdown-item>
              </div>
              <div>
                <vs-dropdown-item>
                  <a href="/truyenteen" class="d-flex">
                  <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Truyện Teen
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/truyenma" class="d-flex">
                  <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Truyện Ma
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/lichsu" class="d-flex">
                  <vs-icon class="px-1" icon="loyalty"></vs-icon>
                    Lịch Sử
                  </a>
                </vs-dropdown-item>
              </div>
            </div>
          </vs-dropdown-menu>
        </vs-dropdown>

      </vs-navbar-item>
      <vs-navbar-item class="mx-2 my-2" index="2">
        <vs-dropdown class="text-white text-justify align-content">
          <a href="/search" class="d-flex text-09">
            Sắp xếp
          </a>
          <vs-dropdown-menu>
            <div class=" d-flex flex-row text-black-50">
              <div>
                <vs-dropdown-item>
                 <a href="/truyenvip" class="d-flex">
                 <vs-icon class="px-1" icon="grade"></vs-icon>
                    Truyện Vip
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/truyenmoicapnhat" class="d-flex">
                  <vs-icon class="px-1" icon="autorenew"></vs-icon>
                    Mới Cập Nhật
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/truyenyeuthich" class="d-flex">
                  <vs-icon class="px-1" icon="favorite"></vs-icon>
                    Truyện Yêu Thích
                  </a>
                </vs-dropdown-item>
              </div>
              <div>
                <vs-dropdown-item>
                  <a href="/truyendecu" class="d-flex">
                  <vs-icon class="px-1" icon="trending_up"></vs-icon>
                    Truyện Đề Cử
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/truyenxemnhieu" class="d-flex">
                  <vs-icon class="px-1" icon="visibility"></vs-icon>
                    Truyện Xem Nhiều
                  </a>
                </vs-dropdown-item>
                <vs-dropdown-item divider>
                  <a href="/truyenfull" class="d-flex">
                  <vs-icon class="px-1" icon="signal_cellular_alt"></vs-icon>
                    Truyện Full
                  </a>
                </vs-dropdown-item>
              </div>
            </div>
          </vs-dropdown-menu>
        </vs-dropdown>
      </vs-navbar-item>
      <vs-navbar-item class="mx-2 my-2" index="3">
        <a class=" text-09" href="/news">News</a>
      </vs-navbar-item>
      <div class="d-flex align-items-center">
        <vs-input class="px-0 ml-2 mx-1" placeholder="Search" type="text" v-model="search"/>
        <vs-button color="white" type="gradient" icon="search" :href=link @click="dataSreach"></vs-button>
      </div>

      <div class="pl-1 ml-1">
        <a href="/login">
          <div class="d-flex align-items-center text-white">
            <h6 class="pt-2">Đăng nhập</h6>
          </div>
        </a>
      </div>
      <div class="pl-3 ml-3">
        <a href="/post">
          <div class="d-flex align-items-center text-white">
            <i class="far fa-user-circle pr-2 btn-icon-big"></i>
            <h6 class="pt-2">Đăng truyện</h6>
          </div>
        </a>
      </div>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {
      search: "",
      activePrompt: false,
      valMultipe:{
        email:'',
        password:''
      },
      checkBox:true,
      link: ''
    };
  },
  computed:{
    validName(){
      return (this.valMultipe.email.length > 0 && this.valMultipe.password.length > 0)
    }
  },
  methods:{
    dataSreach: function() {
      if(this.search){
        this.link = '/search/' + this.search;
      }
    },
    acceptAlert(){
      this.$vs.notify({
        color:'success',
        title:'Accept Selected',
        text:'Lorem ipsum dolor sit amet, consectetur'
      })
    },
    close(){
      this.$vs.notify({
        color:'danger',
        title:'Closed',
        text:'You close a dialog!'
      })
    },
  }
};
</script>

<style scoped>
.background-color{
  background-color: #2C7ABE;
}
.logo-img{
  height: 50px !important;
}
.border-0{
  border: none !important;
  outline: none !important;
  color: #FFF !important;
}
.vs-navbar{
  box-shadow: none;
}
.vs-navbar--btn-responsive .btn-responsive-line{
  background-color:#FFF !important;
  color:#FFF !important;
  background:none;
}
a {
  outline: none;
  text-decoration: none !important;
  color: #2c3e50;
  font-size: 14px;
}
.form-input{
  width: auto !important;
}
.left-content{
  justify-content: left;
}
.left-content input {
  padding: 10px;
}
i {
  font-size: 20px;
}
</style>
