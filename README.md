<h1 align="center">
 Gridsome
</h1>

<p align="center">
    <img  src="https://gridsome.org/logos/only-logo.svg" alt="gridsome logo"/>
</p>

:sparkles: Introduction a Gridsome, un framework de VueJs, en créant un cv et le déployant sur Netlify:sparkles:

---

<h2 align="center">
 Table des matières
</h2>

[1- Mon cv en ligne ](#1-mon-cv)  
[2- Technologies utilisées](#2-technologies-utilisées)  
[3- Installer Gridsome](#3-installer-gridsome)  
[4- Installer les dépendances](#4-installer-les-dépendances)  
[5- Suppression](#5-suppressions)  
[6- Ajouts](#6-ajouts)  
[7- Importer](#7-importer)  
[8- le fichier js main](#8-le-fichier-js-main)  
[9- Déployer Gridsome](#9-déployer-gridsome)
[10- Version anglais du workshop || English Version of this workshop](#1-demo)

---

## 1. Mon cv

Voici le [lien](https://first-gridsome-cv-akdede.netlify.com/) vers mon cv en ligne réalisé avec gridsome.

---

## 2. Technologies utilisées

- **Gridsome -** Un framework de Vue.js & GraphQL qui génène des fichiers statiques.
- **Bootstrap & Bootstrap Vue -** Outil qui rend la conception d’un projet web plus facile et rapide.
- **Sass -** Pré-processeur pour le langage CSS
- **Vetur -** Extension de Visual Studio Code pour Vuejs.

---

## 3. Installer Gridsome

Pour installer gridsome il faut taper les lignes de commandes suivantes dans le terminal.

**1. Installer Gridsome en global**

```sh
sudo npm install --global @gridsome/cli
```

or

```sh
npm install --global @gridsome/cli
```

**2. Créer ton dossier gridsome qui contiendra ton projet**

```sh
gridsome create mon-premier-cv-gridsome
```

**3. Aller dans le dossier du projet**

```sh
cd mon-premier-cv-gridsome
```

**4. Lancer un serveur de développement en local**

```sh
gridsome develop
```

**5. Accèdes au serveur local**

Maintenant, tu peux ouvrir ton navigateur favorit et accéder à ton serveur local en cliquant simultanément sur CTRL + le-lien.

- Local: http://localhost:8080/
- Network: http://192.168.0.159:8080/

To explore GraphQL data go to: http://localhost:8080/___explore (optionnal)

---

## 4. Installer les dépendances

Pour ce projet, nous aurons besoin de dépendances.  
Aller au dossier du projet (mon-premier-cv-gridsome), ouvrez un terminal et commencez à installer les dépendances.

**Scroll**

Afin de pouvoir accéder aux sujets souhaité lors du click dans le menu nous aurons besoin de la dépendance SCROLL.

```sh
npm install --save vue-scrollto
```

**Bootstrap-vue**

```sh
npm install --save bootstrap-vue
```

**Bootstrap**

```sh
npm install --save bootstrap
```

**Node Sass & SASS Loader**

```sh
npm install sass-loader node-sass webpack --save-dev
```

**Icônes et SVG Font-Awesome**

Pour pouvoir avoir des icônes et logo sans avoir à les enregistrer, nous aurons besoin de ces dépendances.

```sh
npm i --save @fortawesome/fontawesome-svg-core
```

```sh
npm i --save @fortawesome/vue-fontawesome
```

```sh
npm i --save @fortawesome/free-solid-svg-icons
```

## 5. Suppressions

Pour commencer , il faudra supprimer les dossiers et fichiers inutiles :

- **/static** folder.
- **gridsome.server.js** file.
- **readme** file in the /component folder.

---

## 6. Ajouts

### 6.1. Components

Dans ce project nous aurons besoin de plusieurs sujet, et pour chaque sujet nous allons créer des composants.

Se rendre dans le dossier **/components** et dedans tu peux y créer 9 fichiers.

> Le nombre de fichier a créer dépendra entièrement de toi et des sujets que tu voudra ajouter à ton CV. Tu peux en créer plus et tu peux en créer moins.

Vous pouvez tout à fait changer le nom des fichiers.

- **About.vue**
  Ecrire ton profil, Ce que tu fais (formation , étude) et ce que tu recherches (stage, cdi, cdd, travail).

- **Contact.vue**
  Noter les divers moyen de te contacter.  
  Examples : Gsm, Mail, LinkedIn, GitHub, Facebook, Twitter, etc..

- **Informations.vue**
  Informer les gens de tes situations diverses.  
   Examples : Permis de conduire, voiture/moto, date de naissances, âge, ville ou tu habites, etc..

- **Laguages.vue**
  Ecrire les diverses langues que tu connais.

- **Education.vue**
  Citer les formations et études que tu as fait.

- **Experience.vue**
  Citer tes expériences professionnelles. (job, stage, bénévolat, hackatons)

- **Interests.vue**
  Enumérer tes hobbies. (Bouquiner, cinéma, sports, ...)

- **Nav.vue**
  Ce fichier ci nous servira pour créer le menu.

- **Skills.vue**
  Citer toutes les technologies informatiques que tu connais (php, html, sass, css, angular, ...).

**Après avoir créer tous ces fichiers, tu peux copier coller les lignes de codes suivantes dans chaques fichiers.**

Remplace NOM_DE_FICHIER par le nom réel du fichier.

```sh
<template>
  <section id="NOM_DE_FICHIER">
    <div>
      <h1>Page NOM_DE_FICHIER</h1>
    </div>
  </section>
</template>
```

Nous changerons ça plus tard.

### 6.2. Pages

Se rendre dans le dossier **/pages** créer le fichier nommé **404.vue**.  
Ensuite, copies et colles les lignes de codes dans le fichier que tu viens de créer.

```sh
<template>
  <Layout>
    <h1 class="p-3 p-lg-5 d-flex align-items-center">
      Rien à voir car ERREUR.
    </h1>
  </Layout>
</template>
```

### 6.3. Default

Se rendre dans le dossier **/layouts** et ouvrir le fichier **Default.vue** et y placer le code suivant.

```sh
<template>
  <div class="layout">
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav
  }
};
</script>
```

### 6.4. Styles & images

Dans le dossier **/src** créer 1 nouveau dossier nommé **assets**.  
Dans le dossier **/assets** créer 2 nouveaux dossiers :

- images
- styles

Se rendre dans le dossier **/styles** et créer 4 fichiers :

- \_global.scss
- \_nav.scss
- \_resume.scss
- main.scss

Ensuite, ouvrir le fichier **main.scss** et copier-coller le code suivant.

```sh
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

@import "nav.scss";
@import "global.scss";
@import "resume.scss"
```

---

## 7. Importer

Maintenant que tous les dossiers et fichiers sont créés, nous pouvons commencer par **importer** tous les **composants** dans le fichier **Index.vue**.

### Template Tag

Copier coller le code suiavnt dans le fichier **Index.vue** entre les balises **< template >**.

```sh
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
      <Languages />
    </div>
  </Layout>
```

### Script Tag

Copier coller le code suivant dans le fichier **Index.vue** entre les balises **< script >**.

```sh
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interest,
    Languages
  },
  metaInfo: {
    title: "Gridsome Resume"
  }
};
```

---

## 8. le fichier js main

Se rendre dans le dossier **/src** et ouvrir le fichier main.js et copier-coller tout le code.  
Si tu veux rajouter d'autre icones ou svg, il te suffit de rajouter le nom de l'icone souhaité entre les parenthèses du code suivant `library.add(faEXEMPLE_DE_ICON);`.  
Le nom de l'icone peut être facilement trouvé sur le site [font-awesome](https://fontawesome.com/icons?d=gallery).

```sh
import DefaultLayout from "~/layouts/Default.vue";

import VueScrollTo from "vue-scrollto";
import BootstrapVue from "bootstrap-vue";

import "./assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faTrophy,
  faRss,
  faCheck,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarker,
  faBirthdayCake,
  faPaperclip
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faGit,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faVuejs,
  faBootstrap,
  faLaravel
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faGit,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faWordpress,
  faNpm,
  faRss,
  faCheck,
  faVuejs,
  faPhone,
  faEnvelope,
  faCar,
  faMapMarker,
  faBirthdayCake,
  faBootstrap,
  faLaravel,
  faPaperclip
);

// Here is some examples but you can add any other icon by typing in the library.add(ADD_HERE_ANY_NAME_OF_ICON);

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);

  Vue.component("font-awesome", FontAwesomeIcon);
}
```

---

## 9. Déployer Gridsome

Pour ce projet j'ai décidé de déployer le cv sur [Netlify](https://www.netlify.com/).

**Créer un repository**

Pour déployer ton cv sur netlify il faut que tu ais un repository sur GitHub contenant tous les fichiers et dossiers.

- Créer un repository
- Clôner ton repository localement avec la commande : "git clone ..."
- Copier-coller le contenu de ton dossier projet (mon-premier-cv-gridsome) dans le nouveau dossier.
- Add, commit et push.

**S'enregistrer sur netlify**

Afin de déployer un site sur GitHub il faut se créer un compte.  
Il est préférable de créer un compte Netlify avec son compte github.

**Déployer**

Dans la page d'accueil de netlify tu verras le bouton **New site from Git** ou **nouveau site à partir de Git**

- Clique sur le bouton cité ci-dessus.
- Sélectionne ton compte GitHub.
- Choisis ton repository contenant ton project.

**Ajoute ces paramétrages**

Sous **Build Command** tapez:`gridsome build`  
Sous **Publish directory** tapez:`dist`

**Changements et mise à jours**

Afin de changer ou mettre à jour so CV, il suffira de `add` , `commit` et `push` les changements.

---

<h1 align="center">
 English version : Gridsome
</h1>

---

<h2 align="center">
 Table of contents
</h2>

[1- Demo, link to the site](#1-demo)  
[2- Functions](#2-functions)  
[3- Install Gridsome](#3-install-gridsome)  
[4- Install Dependencies](#4-install-dependencies)  
[5- Delete useless files and folders](#5-delete-useless-files-and-folders)  
[6- Add](#6-add)  
[7- Import](#7-import)  
[8- Main.js file](#8-main-js-file)  
[9- Deploy Gridsome in Netlify](#9-deploy-gridsome)

---

## 1. Demo

Here is the [link](https://first-gridsome-cv-akdede.netlify.com/) to my resume in gridsome.

---

## 2. Functions

- **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
- **Bootstrap & Bootstrap Vue -** Powerful styling and layout with styled Vue components.
- **Sass -** Professional grade CSS extension with many features.
- **Vetur -** VsCode extension for Vuejs files.

---

## 3. Install Gridsome

To install gridsome you'll need to run the following lines.

**1. Install Gridsome on global**

```sh
sudo npm install --global @gridsome/cli
```

or

```sh
npm install --global @gridsome/cli
```

**2. Create your first Gridsome resume directory**

```sh
gridsome create my-first-gridsome-resume
```

**3. Go into your directory**

```sh
cd my-first-gridsome-resume
```

**4. Start a local development server**

```sh
gridsome develop
```

**5. Start a local development server**

Now you can go to your favorite browser and open your locally hosted site by clicking CTRL + Link.

- Local: http://localhost:8080/
- Network: http://192.168.0.159:8080/

To explore GraphQL data go to: http://localhost:8080/___explore (optionnal)

---

## 4. Install Dependencies

For our project we need some dependencies.  
Go into your folder (my-first-gridsome-resume) , open a Terminal and start installing all these dependencies.

**Scroll**

We're making a single page app here, so that we can go from one subject to the other we need the SCROLL dependency.

```sh
npm install --save vue-scrollto
```

**Bootstrap-vue**

```sh
npm install --save bootstrap-vue
```

**Bootstrap**

```sh
npm install --save bootstrap
```

**Node Sass & SASS Loader**

```sh
npm install sass-loader node-sass webpack --save-dev
```

---

**Font awesome icons and svg**

```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/vue-fontawesome
npm i --save @fortawesome/free-solid-svg-icons
```

## 5. Delete useless files and folders

You can delete :

- **/static** folder.
- **gridsome.server.js** file.
- **readme** file in the /component folder.

---

## 6. Add

### 6.1. Components

For our example here, we are gonna need some components.  
We're gonna make one component per resume object.

Go to the **/components** folder and you can create 9 files (each named as you prefer) :

> you can also create less or more files it's up to you.

- **About.vue**
  This one will serve you to write a little about what you are doing and what you are searching for (Job, internship).

- **Contact.vue**
  This one will serve you to put in your contact informations (phone number, email, linkedin, github, twitter, facebook,...).

- **Informations.vue**
  This one will serve you to put more informations about yourself (examples : driver's license, car/motorbike, living town, date of birth).

- **Laguages.vue**
  This one will serve you to write the languages you know.

- **Education.vue**
  This one will serve you to write your degrees and schools.

* **Experience.vue**
  This one will serve you to write the internships you did , or jobs.

- **Interests.vue**
  This one will serve you to write your hobbies, your favorite to do.

- **Nav.vue**
  This one will be like a MENU.

- **Skills.vue**
  This one will serve you to write the technologies you learned, the web languages you know (php, html, etc...).

---

> **after creating all these files you can copy-paste the following lines in each file.**

---

Instead of NAME_OF_FILE you can write the real file name.

```sh
<template>
  <section id="NAME-OF-FILE">
    <div>
      <h1>This is the NAME-OF-FILE page</h1>
    </div>
  </section>
</template>
```

We'll change it later.

### 6.2. Pages

Go to the **/pages** folder and you can create a file named **404.vue** , and you can copy and paste the following lines in the file.

```sh
<template>
  <Layout>
    <h1 class="p-3 p-lg-5 d-flex align-items-center">
      Nothing here to see!.
    </h1>
  </Layout>
</template>
```

### 6.3. Default

Go to the **/layouts** folder and open the **Default.vue** file , and put the following lines in the file.

```sh
<template>
  <div class="layout">
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    Nav
  }
};
</script>
```

### 6.4. Styles & images

In the **/src** folder create 1 new folder named **assets**.  
In this **/assets** folder create 2 new folders :

- images
- styles

Go to the **/styles** folder and create 4 files :

- \_global.scss
- \_nav.scss
- \_resume.scss
- main.scss

Now open the main.scss file and copy-paste the following lines in it.

```sh
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

@import "nav.scss";
@import "global.scss";
@import "resume.scss"
```

---

## 7. Import

Now that everything is set up, and every file is created we can beggin by **importing** all **Components** in the **Index.vue** file. This is our main file.

Each Vue file has 3 tags in it:

- the first one is **< template >**
- the second one is **< script >**
- the third one is **< style >**

### Template Tag

Put the following lines in the **Index.vue** file between the **< template >** tags.

```sh
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
      <Languages />
    </div>
  </Layout>
```

### Script Tag

Put the following lines in the **Index.vue** file between the **< script >** tags.

```sh
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Languages from "../components/Languages";

export default {
  components: {
    About,
    Experience,
    Education,
    Skills,
    Interest,
    Languages
  },
  metaInfo: {
    title: "Gridsome Resume"
  }
};
```

---

## 8. Main js file

Import everything in the main.js file

```
import DefaultLayout from "~/layouts/Default.vue";

import VueScrollTo from "vue-scrollto";
import BootstrapVue from "bootstrap-vue";

import "./assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faTrophy, faRss, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faHtml5,
  faJsSquare,
  faCss3Alt,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faGithub,
  faTwitter,
  faFacebook,
  faLinkedin,
  faTrophy,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faAngular,
  faReact,
  faNodeJs,
  faSass,
  faLess,
  faWordpress,
  faGulp,
  faGrunt,
  faNpm,
  faRss,
  faCheck
);

// Here is some examples but you can add any other icon by typing in the library.add(ADD_HERE_ANY_NAME_OF_ICON);

export default function(Vue, { router, head, isClient }) {
  Vue.use(VueScrollTo);
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);

  Vue.component("font-awesome", FontAwesomeIcon);
}
```

---

## 9. Deploy Gridsome

For this project I decided to deploy my site in [Netlify](https://www.netlify.com/).

To deploy your first gridsome cv in Netlify, you'll need to push all your work in GitHub.

**Registration in netlify**

You need to register yourself in Netlify for that you can use your github account.

**Deploy**

In the main page of netlify you'll see the button **New site from Git**

- Select your account
- Choose you're repository from GitHub, GitLab, or Bitbucket.

**Add these build settings:**

Under **Build Command** enter:`gridsome build`  
Under **Publish directory** enter:`dist`

**Changes and updates**

To change or update your CV, you simply need to `add` , `commit` and `push`your changes.
