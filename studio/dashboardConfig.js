export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619bb57bf3d033275362d4ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6zzmq2pp',
                  apiId: '28df777f-cd73-4594-b9ac-de255183bbf6'
                },
                {
                  buildHookId: '619bb57b15ce272b45b1077f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ydti493n',
                  apiId: '9c459016-88dd-45c0-9f55-984ec0dcad0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micaelup/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ydti493n.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
