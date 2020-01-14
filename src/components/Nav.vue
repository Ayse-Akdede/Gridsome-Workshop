<template>
  <nav id="sideNav">
    <div>
      <h1>This is the NAV page</h1>
    </div>
    <!-- navigation part  -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#experience')"
            >Experience</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#education')"
            >Education</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')"
            >Skills</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#interest')"
            >Interests</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#langue')"
            >Langue</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
.nav-item {
  cursor: pointer;
}
</style>
