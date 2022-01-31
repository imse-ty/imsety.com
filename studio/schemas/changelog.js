import { FaList } from 'react-icons/fa';

export default {
  title: 'Site changelog',
  name: 'siteChangelog',
  type: 'document',
  icon: FaList,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Body',
      name: 'body',
      type: 'markdown'
    }
  ]
};
