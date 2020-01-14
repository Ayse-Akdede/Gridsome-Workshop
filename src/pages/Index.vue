<template>
  <Layout>
    <div class="container-fluid p-0">
      <About />
      <hr class="m-0" />
      <Experience />
      <hr class="m-0" />
      <Education />
      <hr class="m-0" />
      <Skills />
      <hr class="m-0" />
      <Interest />
      <hr class="m-0" />
      <Langue />
    </div>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Langue from "../components/Langue";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interest,
    Langue
  },
  metaInfo: {
    title: "Gridsome Resume"
  }
};
</script>

<style></style>
