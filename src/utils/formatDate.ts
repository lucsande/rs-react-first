const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('en-GB').format(date);

export default formatDate;
