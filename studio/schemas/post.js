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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    }
  ]
};
