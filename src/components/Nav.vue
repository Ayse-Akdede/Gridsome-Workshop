<template>
  <nav id="sideNav" class="list-group">
    <!-- Photo -->
    <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
      <span class="d-block d-lg-none">Ayse Akdede</span>
      <span class="d-none d-lg-block">
        <g-image
          alt="Image of ayse"
          src="../assets/images/profil.jpg"
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span>
    </div>
    <!-- navigation part  -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a selected class="nav-link" v-on:click.prevent="$scrollTo('#about')">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#contact')">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#informations')">Informations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#experience')">Expériences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#education')">Formations</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')">Compétences</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#langue')">Langues</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="$scrollTo('#interest')">Hobbies</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
</style>
