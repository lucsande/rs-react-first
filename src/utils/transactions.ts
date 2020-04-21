import formatValue from './formatValue';
import formatDate from './formatDate';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

export const formatApiTransactions = (transactions: Transaction[]) => {
  return transactions.map((trans) => formatApiTransaction(trans));
};

export const formatApiTransaction = (trans: Transaction) => {
  return {
    ...trans,
    formattedValue: formatValue(trans.value),
    formattedDate: formatDate(new Date(trans.created_at)),
  };
};
