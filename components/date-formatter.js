import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';

export default function DateFormatter({ dateString }) {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
