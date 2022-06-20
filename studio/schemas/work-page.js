import { FaSuitcase } from 'react-icons/fa';

export default {
  title: 'Work page',
  name: 'workPage',
  type: 'document',
  icon: FaSuitcase,
  fields: [
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }] }],
      options: {
        layout: 'grid'
      }
    }
  ]
};
