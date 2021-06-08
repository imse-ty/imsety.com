import { FaPaintBrush } from 'react-icons/fa';

export default {
  title: 'Project',
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
      type: 'image'
    }
  ]
};