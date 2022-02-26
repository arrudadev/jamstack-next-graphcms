# Setup GraphCMS

First you must create your account on [GraphCMS](https://graphcms.com/) and create a project.

For create the project use the Blog template.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/blog-project-template.png" height="500" width="100%" alt="Blog project template" />

And select a region to create the project.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/region.png" height="500" width="100%" alt="Region" />

Select the community plan (Free).

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/plans.png" height="500" width="100%" alt="Plans" />

Select the invite later button.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/invite-members.png" height="500" width="100%" alt="Invite plans" />

After that, the project already been successfully created. And you can access the project dashboard.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/dashboard.png" height="500" width="100%" alt="Dashboard" />

First away you must create the Home Page content.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/page-content.png" height="500" width="100%" alt="Page content" />

Create the Home Page content and press Save and Publish.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/home-page-content.png" height="500" width="100%" alt="Home Page content" />

Do the same with the Blog Page.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/blog-page-content.png" height="500" width="100%" alt="Blog Page content" />

After that all the content that is needed was configured. Now you need to copy the GraphCMS Content API Url to setup the environment variables.

Enter in the Settings -> API Access page and copy the Content API Url.

You need to setup the NEXT_PUBLIC_GRAPHCMS_CONTENT_API_URL and GRAPHCMS_SCHEMA_PATH keys with this value.

<img src="https://raw.githubusercontent.com/arrudadev/jamstack-next-graphcms/main/docs/assets/graphcms/settings.png" height="500" width="100%" alt="Settings" />
