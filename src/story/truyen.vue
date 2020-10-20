<template>
  <div class="truyen">
    <NavigationComponent></NavigationComponent>
    <BackgroundComponent></BackgroundComponent>
    <div class="main-body height-100vh pt-4">
      <div class="container">
        <div class="row m-0 p-0">
          <div class="col-lg-8 pr-0">
            <div class="card mb-3 border-0">
              <div class="row no-gutters">
                <div class="col-12">
                  <div class="card-body">
                    <h5 class="card-title text-left">Truyện Vip</h5>
                    <div class="novel-info text-left">
                        <a href="/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/chuong-1.html" class="cover position-relative">
                            <img data-src="https://media.truyenyy.vn/novels/2020-04/d37990b1ed.jpg" class="zoom-me lazy loaded" title="Truyện Đồ Đệ Của Ta Đều Là Trùm Phản Diện (Dịch)" src="https://media.truyenyy.vn/novels/2020-04/d37990b1ed.jpg" data-was-processed="true">
                            <span class="novel-stripe"><span class="red">Top 7</span></span>
                            
                        </a>
                        <div class="info">
                            <h1>
                                Đồ Đệ Của Ta Đều Là Trùm Phản Diện (Dịch)
                            </h1>
                            <div class="author px-3">
                                <a class="text-dark text-black-50" href="#">Mưu Sinh Nhâm Chuyển Bồng</a>
                            </div>
                            <div class="text-08 px-3 my-2">
                              Giới thiệu
                              <p class="my-0">Khi tỉnh dậy, Lục Châu phát hiện mình đã biến thành đại ma đầu tổ sư gia cường đại nhất thế gian, hắn còn có chín tên đồ đệ tội ác chồng chất uy chấn thiên hạ.Đại đồ đệ là Giáo chủ U Minh giáo, thủ hạ dưới tay có ngàn vạn ma đầu. Nhị đồ đệ là Kiếm Ma, một lời không hợp là đại khai sát giới...</p>
                            </div>
                            <ul class="numbers list-unstyled d-flex px-3 mb-3">
                                <li class="text-09">844,215 <small class="text-muted text-06">Chữ</small></li>
                                <small class="px-2 text-09">|</small>
                                <li class="text-09">508 <small class="text-muted text-06">Chương</small></li>
                                <small class="px-2 text-09 text-muted">|</small>
                                <li class="text-09">
                                  <span class="num-format" title="" data-toggle="tooltip" data-original-title="67,686">67.7K </span> 
                                  <small class="text-muted text-06">Lượt Xem</small>
                                </li>
                                <small class="px-2 text-09 text-muted">|</small>
                                <li class="text-09">
                                  <span class="num-format" title="" data-toggle="tooltip" data-original-title="1,139">1.1K </span> 
                                  <small class="text-muted text-06">Lượt Thích</small>
                                </li>
                                <small class="px-2 text-09 text-muted">|</small>
                                <li class="text-09">
                                  <a href="/truyen/do-de-cua-ta-deu-la-trum-phan-dien-dich/kim-phieu/" target="_blank">
                                    <span class="num-format" title="" data-toggle="tooltip" data-original-title="3,054">3.1K </span>
                                  </a> 
                                  <small class="text-muted text-06">Kim Phiếu</small>
                                </li>
                            </ul>
                            <div class="px-3">
                                <a href="/doctruyen" class="btn btn-primary py-1 mr-2" role="button">Đọc Từ Đầu</a>
                                <a href="/doctruyen" class="btn btn-warning py-1 mr-2" role="button">Mua Chương VIP</a>
                            </div>
                            
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
                    <h5 class="card-title text-left">DANH SÁCH CHƯƠNG</h5>
                    <div class=" d-flex flex-column">
                      <ul class="py-1 my-0">
                        <li class="d-flex flex-row text-justify box-title pt-3">
                          <h6 class="card-text col-2 text-left my-0 py-2">
                            Chương Số
                          </h6>
                          <h6 class="card-text col-8 text-left my-0 py-2">
                            Tựa Chương
                          </h6>
                          <h6 class="col-2 my-0 py-2">
                            Thời Gian
                          </h6>
                        </li>
                      </ul>
                    </div>
                    <div class=" d-flex flex-column">
                      <ul class="py-1 my-0">
                        <li class="d-flex flex-row text-justify border-item" v-for="item in truyenNgonTinh" :key="item.id">
                          <h6 class="card-text col-2 text-left my-0 py-2">
                            <a :href=item.link>{{item.chuong}}</a>
                          </h6>
                          <h6 class="card-text col-8 text-left my-0 py-2">
                            <a :href=item.link>{{item.text}}</a>
                          </h6>
                          <div class="col-2 my-0 py-2 text-center">
                            <p class="mx-2 text-09">{{item.time}}</p>
                          </div>
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
                    <h5 class="card-title text-left">CÓ THỂ BẠN CŨNG MUỐN ĐỌC</h5>
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
                    <h5 class="card-title text-left">DANH SÁCH ỦNG HỘ CHO TRUYỆN</h5>
                    <div class="donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2 mr-auto">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                          <strong class="vipLevel vip3 ml-3" title="30%"><span>VIP 3</span></strong>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
                      </div>
                      <div>
                        <b><span>10,000</span></b>
                        <span class="ml-1">
                          VNĐ
                        </span>
                      </div>
                      <div class="text-muted ml-4">
                        <time datetime="2020-10-03T16:21:57.231Z" title="2020-10-03T23:21:57.231166+07:00">2d</time>
                      </div>
                    </div>
                    <div class="donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2 mr-auto">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                          <strong class="vipLevel vip3 ml-3" title="30%"><span>VIP 3</span></strong>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
                      </div>
                      <div>
                        <b><span>10,000</span></b>
                        <span class="ml-1">
                          VNĐ
                        </span>
                      </div>
                      <div class="text-muted ml-4">
                        <time datetime="2020-10-03T16:21:57.231Z" title="2020-10-03T23:21:57.231166+07:00">2d</time>
                      </div>
                    </div>
                    <div class="donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2 mr-auto">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                          <strong class="vipLevel vip3 ml-3" title="30%"><span>VIP 3</span></strong>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
                      </div>
                      <div>
                        <b><span>10,000</span></b>
                        <span class="ml-1">
                          VNĐ
                        </span>
                      </div>
                      <div class="text-muted ml-4">
                        <time datetime="2020-10-03T16:21:57.231Z" title="2020-10-03T23:21:57.231166+07:00">2d</time>
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
                    <h5 class="card-title text-left">LỜI BÌNH TỪ ĐỌC GIẢ</h5>
                    <div class="donateItem vipUser mb-4 mt-2 pt-4 d-flex box-title ">
                      <a href="#" class="avatar vipAvatar vip3">
                        <img src="https://media.truyenyy.vn/profile/2019-06/thumb_31691bbca8_40x40.jpg" alt="#">
                      </a>
                      <div class="ml-2">
                        <div class="d-flex">
                          <a href="#">
                            <strong>macdanh1712</strong>
                          </a>
                        </div>
                        <div class="text-left">Luyện Khí Tầng Sáu</div>
                        <div class="message text-left">Cố lên dịch nhé. Ra chương nhanh rồi tui lại thêm KP TLT cho. Cảm ơn nhiều.</div>
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
  name: "truyen",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent,
    SlideBar
  },
  data() {
    return {
      truyenNgonTinh: [
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 1",
          time: "6mth"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 3",
          time: "6mth"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 3",
          time: "6mth"
        },
        {
          link: "/truyen",
          text: "Top truyện tiên hiệp hài hước hay nhất đừng bỏ lỡ ",
          chuong: "chương 4",
          time: "6mth"
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
      ]
    }
  }
};
</script>
<style>
.novel-info {
  display: flex;
  border: 1px solid #ddd;
  padding: 10px;
  margin-top: 20px;
  position: relative;
  border-radius: 8px;
}
.info {
  display: flex;
  flex-direction: column;
  height: 240px;
}
.novel-stripe {
  top: 0;
  overflow: hidden;
  width: 60px;
  height: 60px;
  text-align: center;
  white-space: nowrap;
}
.novel-stripe>span.red {
  background-color: #dc3545;
}
.novel-stripe>span {
  line-height: 10px;
  right: -50%;
  bottom: 0;
  padding: 2px 0;
  transform: rotate(-45deg);
  transform-origin: left bottom;
  color: #fff;
  text-transform: uppercase;
}
.novel-stripe, .novel-stripe>span {
  font-size: 10px;
  position: absolute;
  left: 0;
}
.novel-detail .novel-info .numbers li>small {
  font-size: 10px;
  color: #aaa;
}
a:hover {
  text-decoration: none;
}
h1 {
  padding-left: 15px;
  font-size: 22px;
  font-weight: 700;
}
.border-item {
  height: 40px;
  border-top: 2px dashed #cfcfcf;
}
.box-title{
  border-top: 2px solid #cfcfcf;
}
ul > li {
  list-style: none;
}
a {
  color: #2c3e50;
  text-decoration: none;
}
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    position: relative;
    border-width: 2px;
}
.avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
}
.vipLevel {
    font-weight: 700;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 18px;
    text-align: center;
    color: #fff;
}
.vipLevel:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 0;
    margin-left: -3px;
    content: "";
    border-right: 6px solid transparent;
    border-bottom: 13px solid #968fcf;
    border-left: 4px solid transparent;
}
.vipLevel>span {
    font-size: 20px;
    line-height: 1;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    width: 4em;
    margin-top: -.5em;
    margin-left: -2em;
    transform: scale(.5);
}
.vipLevel:after {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: "";
    border-radius: 64px;
    background-color: #e1bee7;
    background-image: -webkit-linear-gradient(left,#968fcf,#323481);
    background-image: linear-gradient(90deg,#968fcf,#323481);
}
.message {
    margin-top: 15px;
    padding: 18px 20px;
    line-height: 16px;
    font-size: 13px;
    border-radius: 5px;
    position: relative;
    background: #ccdbdc;
    color: #036;
}
.message:after {
    content: "";
    position: absolute;
    top: -10px;
    left: 15px;
    border-color: #ccdbdc transparent;
    border-style: solid;
    border-width: 0 10px 10px;
    display: block;
}
</style>