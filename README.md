<h1 align="center">
 Gridsome
</h1>

<p align="center">
    <img  src="https://gridsome.org/logos/only-logo.svg" alt="gridsome logo"/>
</p>

> Introduction to Gridsome by creating a resume

---

<h2 align="center">
 Table of contents
</h2>

[1- Demo, link to the site](#demo)  
[2- Functions](#functions)  
[3- Install Gridsome](#install-gridsome)  
[4- Install Dependencies](#install-dependencies)  
[5- Delete useless files and folders](#delete-useless-files-and-folders)  
[6- Add](#add)  
[7- Import](#import)

---

## Demo

Here is the [No LINK yet]() to my resume in gridsome.

---

## Functions

- **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
- **Bootstrap & Bootstrap Vue -** Powerful styling and layout with styled Vue components.
- **Sass -** Professional grade CSS extension with many features.
- **Vetur -** VsCode extension for Vuejs files.

---

## Install Gridsome

run the following lines.

**1. Install Gridsome on global**

```sh
sudo npm install --global @gridsome/cli
```

**2. Create your first Gridsome resume directory**

```sh
gridsome create my-fisrt-gridsome-resume https://github.com/LokeCarlsson/gridsome-starter-resume.git
```

**3. Go into your directory**

```sh
cd my-fisrt-gridsome-resume
```

**4. Start a local development server locally**

```sh
gridsome develop
```

**5. Start a local development server locally**

Now you can go to your favorite browser and open your local hosted site bye typing one of following links.

- Local: http://localhost:8080/
- Network: http://192.168.0.159:8080/

To explore GraphQL data go to: http://localhost:8080/___explore (optionnal)

---

## Install Dependencies

Go into your folder (mon-premier-gridsome) install all these dependencies.

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

## Delete useless files and folders

You can delete :

- **/static** folder.
- **gridsome.server.js** file.
- **readme** file in the /component folder.

---

## Add

### 1. Components

For our example here, we are gonna need some components.  
We're gonna make one component per resume object.

Go to the **/components** folder and you can create 7 files (each named as you prefer) :

- **About.vue**
  This one will serve you to write a little about what you are doing and what you are searching for (Job, internship).

* **Laguages.vue**
  This one will serve you to write the languages you know.

* **Education.vue**
  This one will serve you to write your degrees and schools.

* **Experience.vue**
  This one will serve you to write the internships you did , or jobs.

- **Interests.vue**
  This one will serve you to write your hobbies, your favorite to do.

- **Nav.vue**
  This one will be like a MENU.

- **Skills.vue**
  This one will serve you to write the technologies you learned, the web languages you know (php, html, etc...).

> after creating all these files you can copy-paste the following lines in each file.

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

### 2. Pages

Go to the **/pages** folder and you can create a file named **404.vue** , and you can copy and paste the following lines in the file.

```sh
<template>
  <Layout>
    <h1 class="p-3 p-lg-5 d-flex align-items-center">
      Nothing here to see! 404 Error.
    </h1>
  </Layout>
</template>
```

### 3. Default

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

---

## Import

Now that everything is set up, and every file is created we can beggin by **importing** all **Components** in the **Index.vue** file. This is our main file.

Each Vue file has 3 tags in it:

- the first one is **< template >**
- the second one is **< script >**
- the third one is **< style >**

### Template Tage

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
