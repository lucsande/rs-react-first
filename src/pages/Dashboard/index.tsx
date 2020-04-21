import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import CardContainer from '../../components/CardContainer';

import formatValue from '../../utils/formatValue';

import { Container, TableContainer } from './styles';

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
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');
      const { total, income, outcome } = response.data.balance;

      setTransactions([...transactions, response.data.transactions]);
      setBalance({ ...balance, total, income, outcome });
    }

    loadTransactions();
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
              bgColor: '#FF872C'
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
              <tr>
                <td className="title">Computer</td>
                <td className="income">R$ 5.000,00</td>
                <td>Sell</td>
                <td>20/04/2020</td>
              </tr>
              <tr>
                <td className="title">Website Hosting</td>
                <td className="outcome">- R$ 1.000,00</td>
                <td>Hosting</td>
                <td>19/04/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
