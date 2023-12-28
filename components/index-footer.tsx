import { Text } from 'krado-react';

export default function IndexFooter() {
  return (
    <Text
      variant="body.footnote"
      sx={{
        color: 'surface.regular',
        fontWeight: 400,
        fontSize: ['0.5em', 1]
      }}
    >
      Copyright © 2023 Imsety. All rights reserved.
    </Text>
  );
}
