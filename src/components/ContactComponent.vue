<template>
  <div class="contact-component text-09">
    <div class="card border-primary-color border-radius-none">
      <div class="card-body p-0">
        <div class="row m-0 p-0">
          <div class="col-6 primary-background d-flex justify-content-center align-items-center">
            <img class="logo-img" src="/img/logo.png" alt />
          </div>
          <div class="col-6 text-left p-2">
            <div class="row w-100">
              <div class="col-12 mb-3">
                  <vs-input label="name" placeholder="John Wist" class="w-100"/>
              </div>
              <div class="col-12 mb-3">
                  <vs-input label="email" placeholder="youremail@email.com" class="w-100"/>
              </div>
              <div class="col-12 mb-3">
                  <vs-input label="phone" placeholder="+84 930.293.232" class="w-100"/>
              </div>
              <div class="col-12 mb-3">
                  <label>mesage</label>
                   <vs-textarea counter="20" label="Counter: 20"  placeholder="customer's feedback"/>
              </div>
               <div class="col-12 mb-3 text-right">
                 <vs-button color="#F60" type="filled">Send us</vs-button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactComponent",
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
.logo-img {
  width: 120px;
}
</style>
