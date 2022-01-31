import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaList } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Changelog')
        .icon(() => <FaList />)
        .child(
          S.document().schemaType('siteChangelog').documentId('siteChangelog')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteChangelog'].includes(listItem.getId())
      )
    ]);
