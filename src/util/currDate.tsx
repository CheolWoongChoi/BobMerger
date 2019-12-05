import moment from 'moment';

export default function (): string {
  return moment().format('YYMMDD');
};
