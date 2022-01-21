import { constants } from './constants/constants';

const previewSecret = 'iWKy9eeb.3X7a4f2hpZW';
const projectUrl = constants.siteUrl;

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
