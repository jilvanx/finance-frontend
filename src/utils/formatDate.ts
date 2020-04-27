import { format, parseISO } from 'date-fns';

const formatDate = (value: Date): string => {
  const parsedDate = parseISO(value.toString());
  return format(parsedDate, 'dd/MM/YYY');
};

export default formatDate;
