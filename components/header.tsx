/** @jsxImportSource theme-ui */

import RightTriangle from '@/public/right-triangle.svg';

export default function Header() {
  return (
    <div sx={{ position: 'sticky', zIndex: 50 }}>
      <RightTriangle sx={{ fill: 'text.primary' }} />
    </div>
  );
}
