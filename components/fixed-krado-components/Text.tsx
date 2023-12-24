import { Text as KradoReactText } from 'krado-react';

export default function Text({ ...rest }) {
  return <KradoReactText {...rest} color="text.primary" />;
}
