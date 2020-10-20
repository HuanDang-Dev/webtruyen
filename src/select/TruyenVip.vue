<template>
  <div class="truyenvip">
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
                    <h5 class="card-title text-left">Truyện Vip</h5>
                    <div class=" d-flex flex-column">
                      <div class="d-flex flex-row my-2">
                        <div class="mx-2" @click="truyenfull = true, truyenkfull = false">
                          <button type="button" class="btn btn-info">Truyện Full</button>
                        </div>
                        <div class="mx-2" @click="truyenkfull = true, truyenfull = false ">
                          <button type="button" class="btn btn-info">Truyện chưa full</button>
                        </div>
                      </div>
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

                      <div class="d-flex flex-column" v-if="truyenfull">
                          <ul class="py-1 my-0 my-2" v-if="ngontinh">
                            <li class="d-flex flex-row text-justify border-item py-3" v-for="item in truyenNgonTinh" :key="item.id">
                              <a href="#" class="image-item my-1">
                                <img :src=item.image alt="" />
                              </a>
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0 my-2" v-if="tienhiep">
                            <li class="d-flex flex-row text-justify border-item py-3" v-for="item in truyenTienHiep" :key="item.id">
                               <a href="#" class="image-item my-1">
                                <img :src=item.image alt="" />
                              </a>
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                              </div>
                            </li>
                          </ul>
                          <ul class="py-1 my-0 my-2" v-if="teen">
                            <li class="d-flex flex-row text-justify border-item py-3" v-for="item in truyenTeen" :key="item.id">
                               <a href="#" class="image-item my-1">
                                <img :src=item.image alt="" />
                              </a>
                              <h6 class="card-text col-8 text-left my-0 py-2">
                                <a :href=item.link>{{item.text}}</a>
                              </h6>
                              <div class="col-4 d-flex text-08 my-0 py-2">
                                <p class="mx-2">{{item.chuong}}</p>
                              </div>
                            </li>
                          </ul>
                      </div>
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
  name: "TruyenVip",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent,
    SlideBar
  },
  data() {
    return {
      ngontinh: true,
      tienhiep: false,
      teen: false,
      truyenfull: false,
      truyenkfull: false,
      truyenNgonTinh: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        }
      ],
      truyenTienHiep: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        }
      ],
      truyenTeen: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          image: "/img/logo.png"
        }
      ]
    }
  }
};
</script>
<style scoped>
ul > li {
  list-style: none;
}
.border-item {
  height: 80px;
  border-top: 2px dashed #cfcfcf;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
.image-item {
  display: block;
  width: 35px;
  flex-shrink: 0;
}
.image-item img {
  max-width: 100%;
  vertical-align: middle;
}
</style>