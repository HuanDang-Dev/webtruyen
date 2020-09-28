<template>
  <div class="footer-component text-black py-2 pt-4 text-09">
    <div class="container">
      <div class="row m-0 p-0 text-left">
        <div class="col-md-5 col-sm-6 m-0 px-5">
          <h5>
            <img class="footer-logo-img" src="/img/logo.png" alt />
            Doc Truyen Online
          </h5>
          <p
            class="text-left"
          >Chào mừng bạn đến với Webtruyen - Thế Giới Truyện Tiên Hiệp Huyền Ảo. Webtruyen (Webtruyen hay gọi tắt "Wt") là một nền tảng nội dung số trên internet, nơi thành viên có thể tự do xuất bản những nội dung tiếng Việt như: Tiểu thuyết, light novel, truyện ngắn hoặc thơ văn khác. Với những chức năng được cải tiến liên tục, Webtruyen sẽ mang lại cho Tác giả sáng tác truyện, Dịch giả đăng truyện và Người đọc truyện online những trải nghiệm tuyệt vời nhất. Đừng ngại đăng ký tài khoản tại Webtruyen, chỉ mất 30s và hoàn toàn miễn phí.</p>
        </div>
        <div class="col-md-2 col-sm-6 m-0 p-1">
          <ul class="text-left list-nostyle">
              <li>Truyện Huyền Huyễn</li>
              <li>Truyện Kiếm Hiệp</li>
              <li>Truyện Lịch Sử</li>
              <li>Truyện Ngôn Tình</li>
              <li>Truyện Tiên Hiệp</li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-6 m-0 p-1">
          <ul class="text-left list-nostyle">
              <li>Truyện Trinh Thám </li>
              <li>Truyện Hệ Thống</li>
              <li>Truyện Quân Sự</li>
              <li>Truyện Xuyên Không</li>
              <li>Truyện Linh Dị</li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-6 m-0 p-1">
            <h5>Lien he</h5>
            <ul class="text-left list-nostyle d-inline-block social-icon">
                <li>
                    <img src="/img/social/facebook.png" alt=""> face/Webtruyen
                </li>
                <li>
                    <img src="/img/social/google.png" alt=""> google/Webtruyen
                </li>
                <li>
                    <img src="/img/social/skype.png" alt=""> skype/Webtruyen
                </li>
            </ul>
        </div>
      </div>
      <div class="row m-0 p-0 pt-2 border-top text-left pl-5">
          <div class="col-6 p-0">
              <ul class="list-nostyle d-flex flex-wrap">
                  <li class="pr-2 vs-navbar-before">
                    <a href="/news" class="p-0">News</a>
                    <span class="vs-navbar-after" style="background: rgb(255, 255, 255);"></span>
                  </li>
                  <li class="vs-navbar-before">
                    <a href="/feedback" class="p-0">Feedback</a>
                    <span class="vs-navbar-after" style="background: rgb(255, 255, 255);"></span>
                  </li>
              </ul>
          </div>
          <div class="col-6 p-0">
              <ul class="list-nostyle d-flex flex-wrap">
                  <li class="pr-2 vs-navbar-before">
                    <a href="/news" class="p-0">Private policy</a>
                    <span class="vs-navbar-after" style="background: rgb(255, 255, 255);"></span>
                  </li>
                  <li class="pr-2 vs-navbar-before">
                    <a href="/news" class="p-0">Term of us</a>
                    <span class="vs-navbar-after" style="background: rgb(255, 255, 255);"></span>
                  </li>
                  <li class="pr-2 vs-navbar-before">
                    Hotline :093950824
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {},
  data() {
    return {
      activeItem: 0,
      search: ""
    };
  }
};
</script>

<style scoped>
.vs-navbar-before{
  position: relative;
  padding: 5px 10px;
}
.border-top{
  border-top: 1px solid #989898 !important;
}
.vs-navbar-after{
  width: 0;
  height: 2px;
  left: 50%;
  bottom: 0;
  -webkit-transform: translate(-50%);
  transform: translate(-50%);
  background: 31,116,255;
  position: absolute;
  -webkit-transition: all .25s ease;
  transition: all .25s ease;
  z-index: 10;
}
.list-nostyle a{
  color: inherit;
  text-decoration: none;
}
.list-nostyle a:hover~.vs-navbar-after {
    width: 70%;
}
.partner-card{
    width: 50px;
    height: 50px;
    overflow: hidden;
    margin:5px;
}
.partner-card img{
    height: 100%;
}
.footer-logo-img {
  height: 30px !important;
}
.border-0 {
  border: none !important;
  outline: none !important;
  color: #fff !important;
}
.vs-navbar {
  box-shadow: none;
}
.vs-navbar--btn-responsive .btn-responsive-line {
  background-color: #fff !important;
  color: #fff !important;
  background: none;
}
.social-icon img{
    width: 30px;
    height: 30px;
}
</style>
