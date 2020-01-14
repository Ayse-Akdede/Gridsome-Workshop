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

[1- Demo, link to the site](#1-demo)  
[2- Functions](#2-functions)  
[3- Install Gridsome](#3-install)
[4- Install Dependencies](#4-install-dependencies)

---

## 1- Demo

Here is the [No LINK yet]() to my site.

---

## 2- Functions

- **Gridsome -** Vue.js & GraphQL powered framework genrating static files.
- **Bootstrap & Bootstrap Vue -** Powerful styling and layout with styled Vue components.
- **Sass -** Professional grade CSS extension with many features.

---

## 3- Install Gridsome

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

## 4 - Install Dependencies

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
