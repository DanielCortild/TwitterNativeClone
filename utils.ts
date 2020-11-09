import moment from 'moment';

export const fromNowTwitter = (time: string): string => {
  let ms = moment
    .duration(moment().diff(time), 'milliseconds')
    .as('milliseconds');
  switch (true) {
    case ms < moment.duration(1, 'minute').as('milliseconds'):
      return Math.max(Math.floor(ms / 1000)).toString() + 's';
    case ms < moment.duration(1, 'hour').as('milliseconds'):
      return Math.max(Math.floor(ms / 60000)).toString() + 'm';
    case ms < moment.duration(1, 'day').as('milliseconds'):
      return Math.max(Math.floor(ms / 3600000)).toString() + 'h';
    case ms < moment.duration(1, 'year').as('milliseconds'):
      return moment(time).format('D MMM');
    default:
      return moment(time).format('MMM YYYY');
  }
};
