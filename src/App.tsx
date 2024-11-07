import React from 'react';
import AccountHeader from './components/AccountHeader';
import AccountBalance from './components/AccountBalance';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <AccountHeader />
        <AccountBalance />
        <TransactionHistory />
      </div>
    </div>
  );
}

export default App;