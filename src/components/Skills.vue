<template>
  <section class="resume-section" id="skills">
    <div class="w-100">
      <h1 class="mb-5">Compétences</h1>

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
        <li title=" Bootstrap " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'bootstrap']" />
        </li>
        <li title=" Laravel " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'laravel']" />
        </li>
        <li title=" Docker " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'docker']" />
        </li>
      </ul>
      <ul>
        <li>Html</li>
        <li>Css</li>
        <li>Javascript</li>
        <li>php</li>
        <li>Angular</li>
        <li>React</li>
        <li>Nodejs</li>
        <li>Sass</li>
        <li>Wordpress</li>
        <li>Vuejs</li>
        <li>Npm</li>
        <li>Bootstrap</li>
        <li>laravel</li>
        <li>Docker</li>
      </ul>

      <div class="subheading mb-3">Application et autres</div>
      <ul class="list-inline dev-icons">
        <li title=" Github " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'github']" />
        </li>
        <li title=" Git " class="icons list-inline-item">
          <font-awesome :icon="['fab', 'git']" />
        </li>
        <li title=" Microsoft Word " class="icons list-inline-item">
          <font-awesome :icon="['fa', 'file-word']" />
        </li>
        <li title=" Microsoft Excel " class="icons list-inline-item">
          <font-awesome :icon="['fa', 'file-excel']" />
        </li>
        <li title=" Microsoft PowerPoint " class="icons list-inline-item">
          <font-awesome :icon="['fa', 'file-powerpoint']" />
        </li>
        <li title=" Microsoft Access " class="icons list-inline-item">
          <font-awesome :icon="['fa', 'database']" />
        </li>
      </ul>
    </div>

    <ul>
      <li>Git</li>
      <li>GitHub</li>
      <li>Terminal</li>
      <li>Visual Studio Code</li>
      <li>Microsoft Office (Word, Excel, Access, Publisher, PowerPoint, VBA)</li>
      <li>LibreOffice Writer</li>
    </ul>
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
