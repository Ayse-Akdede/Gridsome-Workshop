<h1 align="center">
 Gridsome
</h1>

<p align="center">
    <img  src="https://gridsome.org/logos/only-logo.svg" alt="gridsome logo"/>
</p>

:sparkles: Introduction to Gridsome , a Vuejs framework by creating a responsive resume and deploy it on netlify :sparkles:

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

To deploy your first gridsome cv, you'll need to push all your work in GitHub.

**Registration in netlify**

To register yourself in Netlify you can use your github account.

**Deploy**

In the page you'll see the button **New site from Git**

- Select your account
- Choose you're repository from GitHub, GitLab, or Bitbucket.

**Add these build settings:**

Build Command:`gridsome build`  
Publish directory:`dist`

**Changes and updates**

To change or update your CV, you simply need to `add` , `commit` and `push`your changes.
