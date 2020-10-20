<template>
  <div class="news">
    <NavigationComponent></NavigationComponent>
    <BackgroundComponent></BackgroundComponent>
    <div class="container-fluid py-4 second-background">
      <div class="container-fluid py-4 second-background">
        <div class="container">
          <div class="row m-0 p-0">
            <div class="col-12 m-0 p-0">
              <h2 class="p-4 text-bold-color">NEWS</h2>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row m-0 p-0" v-for="(news,i) in data" :key="i">
          <div class="row no-gutters news-mr">
            <div class="col-md-4">
              <a  :href="news.link">
                <img
                  src="/img/news/news0.jpg"
                  class="card-img-top img-product"
                  alt="..."
                />
                </a>
            </div>
            <div class="col-md-8">
              <div class="card-body text-left">
                <h4 class="card-title primary-text">{{news.newsName}}</h4>
                <p>{{news.newsText }}</p>
                <p class="card-text">
                  <small class="text-muted">> More...</small>
                </p>
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
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavigationComponent from "@/components/NavigationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import BackgroundComponent from "@/components/BackgroundComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";

export default {
  name: "news",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent
  },
  data() {
      return {
      data: [
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
              {
                link: "/truyen",
                newsName: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
                newsText: "https://img.webtruyen.com/public/images/news/small74toptruyentienhiephaihuochaynhat.jpg"
              },
          ]
      };
  }
};
</script>

<style scoped>
.text-bold-color{
    color: #f60;
    font-weight: 700;
    display: bold;
  }
.news-mr{
  margin: 0px 0px 50px 0px;
}
.news-mr:hover{
  background-color: #eee;
}
</style>
