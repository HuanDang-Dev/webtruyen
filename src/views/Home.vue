<template>
  <div class="home">
    <NavigationComponent></NavigationComponent>
    <BackgroundComponent></BackgroundComponent>
    <div class="main-body height-100vh pt-4">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-8 pr-0">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">TRUYỆN ĐỀ CỬ</h5>
                    <div class=" d-flex flex-row">
                      <ul class="col-3" v-for="item in truyenDeCu" :key="item.id">
                      <li>
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
                    <div class=" d-flex flex-row">
                      <ul class="col-3" v-for="item in truyenVip" :key="item.id">
                        <li>
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
                          <button type="button" class="btn btn-secondary">Ngôn Tình</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = true, ngontinh= false, teen = false">
                          <button type="button" class="btn btn-secondary">Tiên Hiệp</button>
                        </div>
                        <div class="mx-2" @click="tienhiep = false, ngontinh= false, teen = true">
                          <button type="button" class="btn btn-secondary">Truyện Teen</button>
                        </div>
                      </div>
                      <div class="d-flex flex-column">
                          <ul class="py-1 my-0" v-if="ngontinh">
                            <li class="d-flex flex-row text-justify border-item" v-for="item in truyenNgonTinh" :key="item.id">
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                                <p class="mx-2">{{item.time}}</p>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="tienhiep">
                            <li class="d-flex flex-row text-justify border-item" v-for="item in truyenTienHiep" :key="item.id">
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                                <p class="mx-2">{{item.time}}</p>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0" v-if="teen">
                            <li class="d-flex flex-row text-justify border-item" v-for="item in truyenTeen" :key="item.id">
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                                <p class="mx-2">{{item.time}}</p>
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
                    <div class=" d-flex flex-row">
                      <ul class="col-3" v-for="item in truyenFull" :key="item.id">
                        <li>
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
                  <div class="d-flex flex-row">
                    <div class="col-6">
                      <a href="#">
                        <img src="/img/logo.png">
                      </a>
                    </div>
                    <div class=" d-flex flex-column col-6">
                      <ul class="review-item mb-0" v-for="item in truyenNgan" :key="item.id"> 
                        <li class="d-flex flex-row news-item"> 
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6>
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

          <div class="col-4">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="d-flex flex-row">
                    <div class="card-body">
                      <h5 class="card-title text-left">REVIEW TRUYỆN</h5>
                      <ul class="review-item mb-0" v-for="item in reviewTruyen" :key="item.id"> 
                        <li class="d-flex flex-row news-item"> 
                          <a :href=item.link :title=item.title>
                            <img :src=item.src :alt=item.title>
                          </a> 
                          <h6 class="px-2">
                            <a :href=item.link :title=item.title>{{item.title}}</a>
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
                  <div class="d-flex flex-row">
                    <div class="card-body">
                      <h5 class="card-title text-left">TOP TRUYỆN HAY </h5>
                      <ul class="review-item mb-0" v-for="item in topTruyenHay" :key="item.id"> 
                        <li class="d-flex flex-row news-item text-justify border-item"> 
                          <div class="px-3 py-3 text-09 text-primary">
                            <h3>{{item.id}}</h3>
                          </div>
                          <h6 class="py-3">
                            <a :href=item.link :title=item.title>{{item.title}}</a>
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
                  <div class="d-flex flex-row">
                    <div class="card-body">
                      <h5 class="card-title text-left">TOP TRUYỆN MỚI ĐĂNG </h5>
                      <ul class="review-item mb-0" v-for="item in topTruyenMoiDang" :key="item.id"> 
                        <li class="d-flex flex-row news-item text-justify border-item"> 
                          <div class="px-3 py-3 text-09 text-primary">
                            <h3>{{item.id}}</h3>
                          </div>
                          <h6 class="py-3">
                            <a :href=item.link :title=item.title>{{item.title}}</a>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
// @ is an alias to /src
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BackgroundComponent from "@/components/BackgroundComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "home",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent
  },
  data() {
    return {
      reviewTruyen: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        }
      ],
      topTruyenHay: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 1
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 2
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 3
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 4
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 5
        }
      ],
      topTruyenMoiDang: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 1
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 2
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 3
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 4
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          id: 5
        }
      ],
      truyenNgan: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          title: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
        }
      ],
      truyenDeCu: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ],
      truyenVip: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ],
      ngontinh: true,
      tienhiep: false,
      teen: false,
      truyenNgonTinh: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenTienHiep: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenTeen: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "3 giờ trước"
        }
      ],
      truyenFull: [
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        },
        {
          link: "https://webtruyen.com/review/top-truyen-tien-hiep-hai-huoc-hay-nhat/",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          src: "/img/logo.png"
        }
      ]
  };
}
};
</script>
<style scoped>
.news-item {
  height: 60px;
}
.review-item{
  height: 60px;
}
h6{
  font-size: 14px;
}
ul > li {
  list-style: none;
}
.border-item {
  height: 40px;
  border-top: 2px dashed #cfcfcf;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
</style>