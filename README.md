<div style="display: flex; align-items: center; gap: 10px;">
  <a href="https://deno.com">
    <img src="https://img.shields.io/badge/deno-4f8b8b?style=flat&logo=deno&logoColor=white" alt="Made with Deno" width="100">
  </a>
  <a href="https://fresh.deno.dev">
    <img src="https://img.shields.io/badge/fresh-00bcd4?style=flat&logo=fresh&logoColor=white" alt="Made with Fresh" width="100">
  </a>
  <a href="https://pagescms.org">
    <img src="https://img.shields.io/badge/pagescms-00bcd4?style=flat&logo=pagescms&logoColor=white" alt="Made with PagesCMS" width="100">
  </a>
</div>

# Deno Fresh Portfolio Boilerplate

Inspired by Indexhibit, this portfolio boilerplate uses Deno Fresh and PagesCMS for easy content management.

## How to use:

### Create a new repo from this template:

Use the gh CLI or the GitHub website to create a new repo from this template. 
For beginners, I recommend using the GitHub website and simply clicking the "Use this template" button.

### Install Deno:

Check the [Deno installation guide](https://docs.deno.com/runtime/getting_started/installation/) for your operating system.

### Run locally:

```bash
deno task start
```

### Run in cloud with Deno Deploy:

#### Using CLI:

Install the `deployctl` command:
```bash
deno install -gArf jsr:@deno/deployctl
```

Deploy the app:
```bash
deployctl deploy
```

Note: You don't need to use the CLI to deploy the app. This can also be done through the [Deno Deploy dashboard](https://deno.com/deploy).

### Use with PagesCMS:

Connect your github profile to PagesCMS and open your cloned repo in the CMS.

## Screenshots

### Desktop

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
  <img src="static/readme-images/desktop-index.jpeg" alt="Desktop Index" width="200">
  <img src="static/readme-images/desktop-about.jpeg" alt="Desktop About" width="200">
  <img src="static/readme-images/desktop-cv.jpeg" alt="Desktop CV" width="200">
  <img src="static/readme-images/desktop-press.jpeg" alt="Desktop Press" width="200">
  <img src="static/readme-images/desktop-projects.jpeg" alt="Desktop Projects" width="200">
</div>

### Mobile

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
  <img src="static/readme-images/mobile-index.jpeg" alt="Mobile Index" width="150">
  <img src="static/readme-images/mobile-single-project.jpeg" alt="Mobile Single Project" width="150">
</div>