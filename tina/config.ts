import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public'
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'workPage',
        label: 'Work page',
        path: 'content/work-page',
        format: 'json',
        ui: {
          global: true,
          allowedActions: {
            create: false,
            delete: false
          }
        },
        fields: [
          {
            type: 'object',
            name: 'projects',
            label: 'Projects',
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.project };
              }
            },
            fields: [
              {
                name: 'project',
                label: 'Project',
                type: 'reference',
                collections: ['project']
              }
            ]
          }
        ]
      },
      {
        name: 'project',
        label: 'Projects',
        path: 'content/projects',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitle'
          },
          {
            type: 'image',
            name: 'coverVideo',
            label: 'coverVideo'
          },
          {
            type: 'image',
            name: 'coverImage',
            label: 'Cover image'
          },
          {
            type: 'object',
            name: 'stats',
            label: 'Stats',
            list: true,
            fields: [
              {
                name: 'label',
                label: 'Label',
                type: 'string'
              },
              {
                label: 'Stat',
                name: 'stat',
                type: 'string'
              }
            ],
            ui: {
              itemProps: (item) => {
                return { label: `${item?.label} - ${item?.stat}` };
              }
            }
          },

          {
            type: 'rich-text',
            name: 'summary',
            label: 'Summary'
          },
          {
            type: 'datetime',
            name: 'publishedAt',
            label: 'Published at'
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              {
                name: 'Button',
                label: 'Button',
                fields: [
                  {
                    name: 'children',
                    label: 'Label',
                    type: 'string'
                  }
                ]
              },
              {
                name: 'ProjectGrid',
                label: 'Project grid',
                fields: [
                  {
                    type: 'object',
                    name: 'images',
                    label: 'Images',
                    list: true,
                    fields: [
                      {
                        name: 'image',
                        label: 'Image',
                        type: 'image'
                      }
                    ],
                    ui: {
                      itemProps: (item) => {
                        return {
                          label: item?.image,
                          style: {
                            height: '20vh',
                            background: `left / contain no-repeat url(${item?.image})`
                          }
                        };
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/work/${document._sys.filename}`,
          filename: {
            // if disabled, the editor can not edit the filename
            readonly: false,
            // Example of using a custom slugify function
            slugify: (values) => {
              // Values is an object containing all the values of the form. In this case it is {title?: string, topic?: string}
              return `${values?.title?.toLowerCase().replace(/ /g, '-')}`;
            }
          }
        }
      }
    ]
  }
});
