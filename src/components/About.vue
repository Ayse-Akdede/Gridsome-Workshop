<template>
  <section id="about">
    <div class="w-100">
      <h1 class="mb-0">
        Ayse
        <span class="text-primary">AKDEDE</span>
      </h1>
      <div class="subheading mb-5">
        Herstal · 0466/03.56.35 ·
        <a href="mailto:name@email.com">ayseazize.akdede@gmail.com</a>
      </div>
      <p class="lead mb-5">
        Je suis actuellement en formation à BeCode Liège en tant que
        Développeuse Web Junior.
      </p>

      <div class="social-icons">
        <li class="icons">
          <font-awesome :icon="['fa', 'phone']" />
        </li>

        <a
          title="Click on me to go to my linkedin profile"
          href="https://linkedin.com/in/ayse-akdede/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'linkedin']" />
        </a>

        <a
          title="Click on me to go to my github  profile"
          href="https://github.com/Ayse-Akdede"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome :icon="['fab', 'github']" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.social-icons a {
  cursor: pointer;

  height: 3.5rem;
  width: 3.5rem;
  background-color: #007bff;
  border-radius: 100%;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-right: 0.5rem;

  @media (max-width: 380px) {
    margin-right: 0.5rem;
  }

  @media (max-width: 350px) {
    margin-right: 0.2rem;
  }
}

.social-icons a:last-child {
  margin-right: 0;
}

.social-icons a:hover {
  background-color: #0050a7;
}
.icons {
  height: 3.5rem;
  width: 3.5rem;
  background-color: #007bff;
  border-radius: 100%;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-right: 0.5rem;
}
</style>
