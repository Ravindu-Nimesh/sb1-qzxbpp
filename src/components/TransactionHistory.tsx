import React from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

type Transaction = {
  id: string;
  type: 'credit' | 'debit';
  description: string;
  amount: number;
  date: string;
};

const transactions: Transaction[] = [
  {
    id: '1',
    type: 'debit',
    description: 'Cash Withdrawal',
    amount: 58400.00,
    date: '2024-11-07'
  },
  {
    id: '2',
    type: 'debit',
    description: 'COOP-Fi Purchase',
    amount: 130.25,
    date: '2024-10-22'
  },
  {
    id: '3',
    type: 'debit',
    description: 'TIM Mobile Recharge',
    amount: 17.00,
    date: '2024-10-22'
  },
  {
    id: '4',
    type: 'debit',
    description: 'Coffee Shop',
    amount: 11.50,
    date: '2024-10-22'
  },
  {
    id: '5',
    type: 'credit',
    description: 'Deposit',
    amount: 5900.00,
    date: '2024-10-17'
  }
];

export default function TransactionHistory() {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${
                transaction.type === 'credit' 
                  ? 'bg-green-500/20 text-green-500' 
                  : 'bg-red-500/20 text-red-500'
              }`}>
                {transaction.type === 'credit' 
                  ? <ArrowDownLeft className="w-5 h-5" />
                  : <ArrowUpRight className="w-5 h-5" />
                }
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-slate-400">
                  {new Date(transaction.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <p className={`font-semibold ${
              transaction.type === 'credit' 
                ? 'text-green-500' 
                : 'text-red-500'
            }`}>
              {transaction.type === 'credit' ? '+' : '-'}
              €{transaction.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}