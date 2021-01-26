# Hugo Template

This is a boilerplate for using [Hugo](https://gohugo.io/) as a static site generator, [Webpack](https://webpack.js.org/) as your asset pipeline and [TailwindCSS](https://tailwindcss.com/docs/animation) for your styles.

This project is heavily inspired by the great work done in [Victor Hugo](https://github.com/netlify-templates/victor-hugo)

## Usage

### Prerequisites

You need to have node and yarn (or npm) installed in order to use this template.

Next, clone this repository and run:

```
yarn install
```

### Development

When you are working on the website use:

```
yarn start
```

This will run Hugo and Webpack Dev Server. You can then visit http://localhost:4000/ - or a new browser window opened already - to preview the website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### Static build

To build a static version of the website into the `/dist` folder run:

```
yarn run build
```

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- - [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.
Now Netlify will build and deploy your site whenever you push to git.

You can also click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jduff/hugo-template)
