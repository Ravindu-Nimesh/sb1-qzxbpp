import React from 'react';
import AccountHeader from './AccountHeader';
import AccountBalance from './AccountBalance';

export default function AccountInfo() {
  return (
    <div>
      <AccountHeader />
      <AccountBalance />
    </div>
  );
}