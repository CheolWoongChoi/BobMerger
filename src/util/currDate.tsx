import moment from 'moment';

export default function (format: string): string {
  return moment().format(format);
};
