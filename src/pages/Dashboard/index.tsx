import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import CardContainer from '../../components/CardContainer';

import { formatApiTransactions } from '../../utils/transactions';

import { Container, TableContainer } from './styles';
import { format } from 'path';

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

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    api.get('/transactions').then((response) => {
      const { total, income, outcome } = response.data.balance;
      const formattedTrans = formatApiTransactions(response.data.transactions);

      setBalance({ ...balance, total, income, outcome });
      setTransactions(formattedTrans);
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer
          cards={[
            {
              title: 'Entradas',
              mainText: balance.income || null,
              type: 'income',
            },
            {
              title: 'Saídas',
              mainText: balance.outcome || null,
              type: 'outcome',
            },
            {
              title: 'Total',
              mainText: balance.total || null,
              type: 'total',
              bgColor: '#FF872C',
            },
          ]}
        ></CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trans) => (
                <tr key={trans.id}>
                  <td className="title">{trans.title}</td>
                  <td className={trans.type}>{trans.formattedValue}</td>
                  <td>{trans.category.title}</td>
                  <td>{trans.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
