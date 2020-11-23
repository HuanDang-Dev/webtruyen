<template>
  <div class="home">
    <NavigationComponent @handleSearch="handleClickInParent" ></NavigationComponent>
    <BackgroundComponent></BackgroundComponent>
    <div class="main-body height-100vh pt-4">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-lg-8 pr-0">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN ĐỀ CỬ</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li  class="col-md-3 col-sm-6 my-3" v-for="item in truyenDeCu" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a href="">{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN VIP</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li  class="col-md-3 col-sm-6 my-3" v-for="item in truyenVip" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a href="">{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN MỚI CẬP NHẬT</h5>
                    <div class=" d-flex flex-column">
                      <div class="d-flex flex-row my-2">
                        <div class="mx-2" @click="tienhiep = false, ngontinh= true, teen = false">
                          <button type="button" class="btn btn-info">Ngôn Tình</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = true, ngontinh= false, teen = false">
                          <button type="button" class="btn btn-info">Tiên Hiệp</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = false, ngontinh= false, teen = true">
                          <button type="button" class="btn btn-info">Truyện Teen</button>
                        </div>
                      </div>
                      <div class="d-flex flex-column">
                          <ul class="py-1 my-0" v-if="ngontinh">
                            <li v-for="item in truyenNgonTinh" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="tienhiep">
                            <li v-for="item in truyenTienHiep" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="teen">
                            <li v-for="item in truyenTeen" :key="item.id">
                              <div class="d-flex flex-row border-item">
                                <h6 class="card-text col-8 text-left my-0 pt-3">
                                <a :href=item.link>{{item.text}}</a>
                                </h6>
                                <div class="col-4 d-flex text-08 my-0 pt-3">
                                  <p class="mx-2">{{item.chuong}}</p>
                                  <p class="mx-2">{{item.time}}</p>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN FULL</h5>
                    <div>
                      <ul class="d-flex row mb-0">
                        <li class="col-md-3 col-sm-6 my-3" v-for="item in truyenFull" :key="item.id">
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="card-text">
                            <a href="">{{item.text}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="card-body">
                <h5 class="card-title text-left">TRUYỆN NGẮN</h5>
                  <div class="d-flex row">
                    <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center py-5">
                      <a href="#">
                        <img src="/img/logo.png">
                      </a>
                    </div>
                    <div class="d-flex flex-column col-md-6 col-sm-12 text-left">
                      <ul class="review-item mb-0" v-for="item in truyenNgan" :key="item.id"> 
                        <li class="d-flex flex-row news-item"> 
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="pl-2">
                            <a :href=item.link :title=item.title>Top 7 truyện ngôn tình hay nhất Trung Quốc phải đọc một lần trong đời</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SlideBar></SlideBar>
        </div>
      </div>
    </div>
    <div class="container-fluid py-4 second-background">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-12 m-0 p-0">
            <ContactComponent></ContactComponent>
          </div>
        </div>
      </div>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BackgroundComponent from "@/components/BackgroundComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import SlideBar from "@/components/SlideBar.vue";

export default {
  name: "home",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent,
    SlideBar
  },
  data() {
    return {
      search:"",
      truyenNgan: [
        {
          link: "/truyen",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "/truyen",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "/truyen",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "/truyen",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "/truyen",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        }
      ],
      truyenDeCu: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ],
      truyenVip: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ],
      ngontinh: true,
      tienhiep: false,
      teen: false,
      truyenNgonTinh: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenTienHiep: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenTeen: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenFull: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ]
          }
  },
  methods:{
    handleClickInParent: function (search) {
      this.search = search
    }
  }
};
</script>
<style scoped>
ul > li {
  list-style: none;
}
.border-item {
  border-top: 2px dashed #cfcfcf;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>