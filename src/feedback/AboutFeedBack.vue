<template>
  <div class="feedback">
    <NavigationComponent></NavigationComponent>
    <BackgroundComponent></BackgroundComponent>
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

export default {
  name: "feedback",
  components: {
    NavigationComponent,
    FooterComponent,
    BackgroundComponent,
    ContactComponent
  }
};
</script>
