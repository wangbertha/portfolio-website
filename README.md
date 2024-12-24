# Portfolio Website

## Description

My version of a portfolio website, using TypeScript & React and hosted with Netlify. Check out [my deployment!](wangbertha.com)

Follow the instructions below to use this as a template for your own portfolio website! You are not required to attribute me, but I would appreciate it if you do!

**Prerequisites:** These instructions require knowledge of [the command-line interface](https://www.theodinproject.com/lessons/foundations-command-line-basics) and [git](https://git-scm.com/doc)/GitHub. It also requires a [GitHub account](https://github.com/), and installation of [Node.JS](https://nodejs.org/en/download/prebuilt-installer/current) and a code editor (such as [Visual Studio Code](https://code.visualstudio.com/download)).

**Development:** The contents of the app are structured in React files `/src`. React aims to make code organization and readability easier (Ex. Using components). Preview the app in real-time from `/src` to help you iterate on your edits.

**Production:** The code from `/src` needs to be transpiled and bundled into JavaScript so it can be read by the browser's JavaScript Engine. Vite in the Node environment handles this! The bundled code is sent to `/dist`. Preview the app from `/dist` to make sure the contents translated over as expected.

**Deployment:** How do I publish my app to the web? There are many options. One of them is to use a GitHub + Netlify combination to get your link ready to share with your network.

## Development

1. [Fork this repository](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) from GitHub. This allows you to create your own version, while giving you the option to stay connected to my version and import any changes I may make.

2. Set up the project in your local computer. Navigate to the folder where you'd like to house your project, and [clone your forked repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

   * Note: To check that it is the forked repository and not the main repository, make sure your GitHub username is present within the repository URL. `git clone https://github.com/YOUR-USERNAME/portfolio-website`

3. Install code packages that this project uses by running `npm install`.

   * Code packages ("dependencies") are like little bundles that can be installed to allow certain features to be developed more easily. The list of bundles are tracked in `package.json`. These bundles of code can take up a lot of space, so instead of uploading them to GitHub, `npm install` handily references `package.json` and installs everything listed there. It also makes it easier to understand which packages were used to develop the app.

   * The lists are found under `dependencies` and `devDependencies`. `dependencies` is the list of packages required for production mode, and `devDependencies` is the list required for development mode. Why the distinction? Often, there are packages that aid the development of React code or bug-detection that are no longer relevant once the code is transpiled to the browser-friendly JavaScript.

4. To preview the app in development mode, run `npm run dev`.

   * `package.json` is key here too! This project uses Vite to run the preview, and we define the command for this under `scripts` in `package.json`. You'll see this come up for other commands later on.

5. Dig into the code, and edit it to your heart's content! Much of the content is stored away in `/data`, but deciding to change little nuances and adding additional features can help you learn the anatomy of this project.

## Production Mode

1. Remember how we need to transpile and bundle the React code from `/src` into JavaScript? Run `npm run build` to do this, and notice that a new `/dist` folder is created (or updated, if you ran this before). This is the production code.

   * Notice another use of the `scripts` from `package.json` here!

2. It's not uncommon to find issues in the production code. For example, maybe a relative path defined in `/src` no longer applies in `/dist` (not speaking from experience or anything...). Run `npm run preview` to preview the app from the *production* code. Examine and test it for issues.

## Deployment

1. Does the production code look great, and are you itching to share it with your friends? There are many great, simple services that will help you here. For example, deploy your app directly from your GitHub repository (it will automatically sync to any new changes pushed there as well) with [Netlify](https://app.netlify.com/start).

2. Share your link and celebrate!

   * Your link will look a little something like this: `[unique text].netlify.app/`
