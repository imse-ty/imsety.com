import { FaStickyNote } from 'react-icons/fa';

export default {
  title: 'Posts',
  name: 'post',
  type: 'document',
  icon: FaStickyNote,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      title: 'Main Image',
      name: 'mainImage',
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
      ],
      options: {
        hotspot: true
      }
    },
    {
      title: 'Summary',
      name: 'summary',
      type: 'text',
      rows: 4
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
