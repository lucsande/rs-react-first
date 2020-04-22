const formatValue = (value: number): string => {
  const options = { style: 'currency', currency: 'BRL' };
  const numberFormat = Intl.NumberFormat('pt-BR', options);

  return numberFormat.format(value);
};

export default formatValue;
