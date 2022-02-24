<h1 align="center">
  <div style="display: inline-block;">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg" height="100" width="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" height="100" width="100" />
  </div>
  JAMStack with GraphCMS
  <br>
</h1>

<h4 align="center">A simple JAMStack app using NextJs, Graphql and GraphCMS.</h4>

<div align="center">

  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
  ![GitHub repo size](https://img.shields.io:/github/repo-size/arrudadev/jamstack-next-graphcms)

</div>

<p align="center">
  <a href="https://github.com/arrudadev/react-storybook-example/issues">Report Bug</a> •
  <a href="https://github.com/arrudadev/react-storybook-example/issues">Request Feature</a>
</p>

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/cover.gif" height="500" width="100%" alt="cover" />

<h2 id="screenshots"> :camera: Screenshots</h2>

Click to expand.<br>

| Home | Home - All in One Platform Section | Home - Pricing Section | Footer | Blog | Blog content |
| ------- | --- | --- | --- | --- | --- |
| <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/home/home.png" width="100%" alt="Home" /> | <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/home/home-all-in-one-platform-section.png" width="100%" alt="Home - All in one Platform Section" /> | <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/home/home-pricing-section.png" width="100%" alt="Home - Pricing Section" /> | <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/home/footer.png" width="100%" alt="Footer" /> | <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/blog/blog.png" width="100%" alt="Blog" /> | <img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/.github/assets/blog/blog-content.png" width="100%" alt="Blog Content" /> |

<h2 id="about-the-project"> :pencil: About The Project</h2>

<p align="justify">
  This project is a small example of a JAMStack application, a blog built with GraphCMS. The purpose of this project is to study the consumption of Graphql APIs with React and also the use of a CMS that offers an API in Graphql. In this case, GraphCMS.
</p>

<h2 id="technologies"> :computer: Technologies</h2>

This project was developed with the following technologies:

- [React](https://reactjs.org)
- [NextJs](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Graphql](https://graphql.org/)
- [GraphCMS](https://graphcms.com/)
- [Urql](https://formidable.com/open-source/urql/)
- [Tailwind CSS](https://tailwindcss.com/)

<h2 id="getting-started"> :runner: Getting Started</h2>

<p align="justify">
  To run the project locally follow these steps:
</p>

<h3 id="prerequisites"> :warning: Prerequisites</h3>

- [NodeJs](https://nodejs.org/en/) Prefer to install the LTS version.
- [Yarn](https://yarnpkg.com/) Need to install latest version prior to 2.0 version.

<h3 id="installation"> :construction_worker: Installation</h3>

<p align="justify">
  1. To clone the project, run this command:
</p>

```
git clone https://github.com/arrudadev/jamstack-next-graphcms.git
```
<p align="justify">
  2. Install dependencies:
</p>

```
yarn install
```

<p align="justify">
  3. Create your environment variables based on the examples of .env.development:
</p>

```
cp .env.development .env.local
```

<p align="justify">
  4. Fill the .env.local with the environment variables:
</p>

key|description|example
---|---|---
NEXT_PUBLIC_GRAPHCMS_CONTENT_API_URL|GraphCMS API's url (used for client request)|`https://api-sa-east-1.graphcms.com/v2/anykey/master`
GRAPHCMS_SCHEMA_PATH|GraphCMS API's url (used in graphql codegen)|`https://api-sa-east-1.graphcms.com/v2/anykey/master`

<p align="justify">
  5. Run the following command to generate Typed Queries, Mutations and, Subscriptions of the Graphql:
</p>

```
yarn codegen
```

<p align="justify">
  6. Run the following command to start the application in a development environment:
</p>

```
yarn dev
```

<p align="justify">
  7. Open the project into your browser in http://localhost:3000
</p>

<h2 id="contributing"> :octocat: Contributing</h2>

<p align="justify">
  Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
</p>

<p align="justify">
  If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue. Don't forget to give the project a star! Thanks again!
</p>

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/amazing-feature`)
3. Commit your Changes (`git commit -m 'feat: Add some Amazing Feature'`)
4. Push to the Branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**After your pull request is merged**, you can safely delete your branch.

For more information read the [Contributing Guidelines](https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/CONTRIBUTING.md).
