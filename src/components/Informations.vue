<template>
  <section class="resume-section" id="informations">
    <div class="w-100">
      <h1 class="mb-5">Informations</h1>

      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="J'ai une voiture" class="icons">
            <font-awesome :icon="['fa', 'car']" />
          </li>
        </div>
        <div>Permis B et voiture</div>
      </div>

      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="J'ai une voiture" class="icons">
            <font-awesome :icon="['fa', 'birthday-cake']" />
          </li>
        </div>
        <div>Née à Liège, le 06/05/1997</div>
      </div>

      <div class="inline-block">
        <div class="social-icons contact-icons">
          <li title="J'ai une voiture" class="icons">
            <font-awesome :icon="['fa', 'map-marker']" />
          </li>
        </div>
        <div>Herstal</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-icons {
  margin: 3px;
}

.inline-block {
  display: flex;
  align-items: center;
}
</style>
