<template>
  <section id="skills">
    <div class="w-100">
      <h2 class="mb-5">Skills</h2>

      <div class="subheading mb-3">Languages de programmations</div>
      <ul class="list-inline dev-icons">
        <li title="Html 5" class="icons list-inline-item">
          <font-awesome :icon="['fab', 'html5']" />
        </li>
        <li title=" CSS " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'css3-alt']" />
        </li>
        <li title=" JavaScript " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'js-square']" />
        </li>
        <li title=" Angular " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'angular']" />
        </li>
        <li title=" React " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'react']" />
        </li>
        <li title=" Node Js " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'node-js']" />
        </li>
        <li title=" Sass " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'sass']" />
        </li>
        <li title=" Wordpress " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'wordpress']" />
        </li>
        <li title=" Vue Js " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'vuejs']" />
        </li>
        <li title=" NPM " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'npm']" />
        </li>
      </ul>

      <div class="subheading mb-3">Application et autres</div>
      <ul class="list-inline dev-icons">
        <li title=" Github " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'github']" />
        </li>
        <li title=" Git " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'git']" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss">
.icons {
  display: inline-block;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #007bff;
  color: white !important;
  border-radius: 100%;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-right: 0.5rem;
}
</style>
