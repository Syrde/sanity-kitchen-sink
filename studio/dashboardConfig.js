export default {
  widgets: [
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
                  buildHookId: '62a2260d2963db0510e0e3ae',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ktbas5ri',
                  apiId: '8e112406-dd05-4a12-bd7b-da4c9529ca17'
                },
                {
                  buildHookId: '62a2260d54b5a20a525e1bc4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-rtq5mzjx',
                  apiId: '62600efd-da75-4071-ada1-aad7950ab96e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Syrde/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-rtq5mzjx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
