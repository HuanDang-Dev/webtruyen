<template>
  <div class="navigation-component background-color">
    <vs-navbar
      class="nabarx container py-0 text-left"
      color="#2C7ABE"
      text-color="#FFFFFF"
      active-text-color="rgba(255,255,255,1)"
    >
      <div slot="title">
        <vs-navbar-title class="text-white my-1 d-flex">
          <img class="logo-img mx-2" src="/img/logo.png" alt="">
          <h4 class="mt-2">Doc truyen online</h4>
        </vs-navbar-title>
      </div>
      <vs-navbar-item class="mx-2" index="0">
        <a class=" text-09" href="/">Home</a>
      </vs-navbar-item>
      <vs-navbar-item class="mx-2" index="1" style="height: 40px">
        
        <vs-dropdown class="text-white text-justify align-content">
          <a href="/category" class="d-flex text-09">
            Thể loại
          </a>

          <vs-dropdown-menu>
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
      <vs-navbar-item class="mx-2" index="2">
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
      <vs-navbar-item class="mx-2" index="3">
        <a class=" text-09" href="/news">News</a>
      </vs-navbar-item>
      <div class="d-flex align-items-center">
        <vs-input class="px-0 ml-2 mx-1" placeholder="Search" v-model="search"/>
        <vs-button color="white" type="gradient" icon="search"></vs-button>
      </div>

      <div class="">
        <vs-button class="border-0 ml-2 text-08" @click="activePrompt = true" color="#F60" type="gradient" icon="person" size="small">Đăng Nhập</vs-button>
        <vs-prompt
          class="d-flex text-center text-justify"
          color="primary"
          @cancel="valMultipe.email='',valMultipe.password=''"
          title="Đăng Nhập"
          buttons-hidden
          :is-valid="validName"
          :active.sync="activePrompt">
          <div class="con-exemple-prompt d-flex text-left flex-column text-justify">
            <div class="px-2 my-2">
              <vs-input class="form-input" label="Email" placeholder="Email" v-model="valMultipe.email"/>
            </div>
            <div class="px-2 my-2">
              <vs-input class="form-input" label="Password" placeholder="Password" v-model="valMultipe.password"/>
            </div>

            <div class="mr-3 mt-2">
              <vs-alert class="mx-2 my-2" :active="!validName" color="danger" icon="new_releases" >
                Fields can not be empty please enter the data
              </vs-alert>
            </div>

            <div class="px-2 py-2">
              <vs-checkbox class="left-content" v-model="checkBox">Ghi nhớ mật khẩu</vs-checkbox>
            </div>

            <vs-button class="mx-2 mt-4" color="primary" type="border">Đăng Nhập</vs-button>

            <div class="mx-2 my-1">
              <a href="#">Quên mật khẩu?</a>
            </div>
          </div>
        </vs-prompt>
      </div>

      <vs-button class="text-08 ml-2" to="/" color="#F60" type="gradient" icon="person_add" size="small">Đăng Ký</vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationComponent",
  props: {},
  data() {
    return {
      search: "",
      activePrompt: false,
      valMultipe:{
        email:'',
        password:''
      },
      checkBox:true
    };
  },
  computed:{
    validName(){
      return (this.valMultipe.email.length > 0 && this.valMultipe.password.length > 0)
    }
  },
  methods:{
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
</style>
