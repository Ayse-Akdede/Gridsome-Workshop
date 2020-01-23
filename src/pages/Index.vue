
<template>
  <layout>
    <div class="container-fluid p-0" data-spy="scroll" data-target="#mysidebar">
      <About />
      <hr class="m-0" />
      <Contact />
      <hr class="m-0" />
      <Informations />
      <hr class="m-0" />
      <Experience />
      <hr class="m-0" />
      <Education />
      <hr class="m-0" />
      <Skills />
      <hr class="m-0" />
      <Langue />
      <hr class="m-0" />
      <Interest />
    </div>
  </layout>
</template>

<script>
import About from "../components/About";
import Contact from "../components/Contact";
import Informations from "../components/Informations";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Langue from "../components/Langue";
import Interest from "../components/Interest";

export default {
  components: {
    About,
    Contact,
    Informations,
    Experience,
    Education,
    Skills,
    Langue,
    Interest
  },
  metaInfo: {
    title: "Gridsome Resume"
  }
};
</script>

<style lang="scss">
@media (min-width: 220px) and (max-width: 768px) {
  .container-fluid {
    margin-left: 50px;
  }
}
</style>
