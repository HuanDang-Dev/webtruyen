<template>
    <div class="post main-body height-100vh pt-4">
        <div class="container bg-white text-left">
            <div class="row d-flex flex-column">
                <div class="welcome__component">
                    <h2 class="pt-3 mt-3 text-center">Đăng truyện</h2>
                </div>
                <div class="d-flex flex-column mx-5">
                    <div class="d-flex flex-column m-4">
                        <label class="" for="">Thể loại</label>
                        <input class="p-2" type="text">
                    </div>
                    <div class="d-flex flex-column m-4">
                        <label for="">Tên truyện</label>
                        <input class="p-2" type="text">
                    </div>
                    <div class="d-flex px-4 pt-3">
                        <button class="login__btn mx-3 w-50"><a class="btn-register" href="/dangtruyen">Đăng Truyện</a></button>
                        <button class="login__btn mx-3 w-50"><a class="btn-register" href="/">Hủy</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "post",
    data() {
        return {
          
        }
    },
    methods: {
      
    }
}
</script>

<style>
    .post {
        font-size: 18px;
    }
    .login__btn{
    background: linear-gradient(to right, #6190e9, #4236f0);
    box-shadow: 0px 11px 34px -10px #6190e9;
     padding:1rem;
     width:75%;
     border:none;
     outline:none;
     border-radius: 100px;
     color:white;
     font-weight: bold;
     display:flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
    }
    .btn-register {
      color: inherit;
      text-decoration: none;
    }
    button:focus {
      outline: none;
    }
    a:hover {
      color: inherit !important;
      text-decoration: none !important;
    }
    label {
        font-size: 20px;
    }
    input {
        border: 0.5px solid #cccccc;
        border-radius: 10px;
    }
</style>