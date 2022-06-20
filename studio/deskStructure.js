import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaSuitcase, FaList } from 'react-icons/fa';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Work page')
        .icon(() => <FaSuitcase />)
        .child(S.document().schemaType('workPage').documentId('workPage')),
      S.listItem()
        .title('Changelog')
        .icon(() => <FaList />)
        .child(
          S.document().schemaType('siteChangelog').documentId('siteChangelog')
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !['workPage', 'siteChangelog'].includes(listItem.getId())
      )
    ]);
