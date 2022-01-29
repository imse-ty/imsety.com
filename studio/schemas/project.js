import { FaPaintBrush } from 'react-icons/fa';

export default {
  title: 'Projects',
  name: 'project',
  type: 'document',
  icon: FaPaintBrush,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string'
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      rows: 4
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string'
    },
    {
      title: 'Timeline',
      name: 'timeline',
      type: 'string'
    },
    {
      title: 'Tools',
      name: 'tools',
      type: 'string'
    },
    {
      title: 'Hero alternative text',
      name: 'heroAlt',
      type: 'string'
    },
    {
      title: 'Hero URL',
      name: 'heroUrl',
      type: 'url'
    },
    {
      title: 'Published at',
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      title: 'Body',
      name: 'body',
      type: 'markdown'
    }
  ]
};
