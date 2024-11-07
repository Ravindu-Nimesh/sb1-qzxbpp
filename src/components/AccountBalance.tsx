import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export default function AccountBalance() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-slate-800/50 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-green-500/20 rounded-xl">
            <Wallet className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <p className="text-sm text-slate-400">Current Balance</p>
            <p className="text-2xl font-bold">€58.75</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button 
            className="flex items-center justify-center gap-2 bg-green-500/20 text-green-500 p-3 rounded-lg hover:bg-green-500/30 transition-colors"
            onClick={() => alert("Deposit functionality coming soon!")}
          >
            <ArrowDownLeft className="w-5 h-5" />
            Deposit
          </button>
          <button 
            className="flex items-center justify-center gap-2 bg-blue-500/20 text-blue-500 p-3 rounded-lg hover:bg-blue-500/30 transition-colors"
            onClick={() => alert("Your account is currently closed. Please contact Administration")}
          >
            <ArrowUpRight className="w-5 h-5" />
            Transfer
          </button>
        </div>
      </div>
      <div className="bg-slate-800/50 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-slate-400">Monthly Income</p>
            <p className="font-medium">€10,000.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-slate-400">Monthly Spending</p>
            <p className="font-medium">€58,400.00</p>
          </div>
          <div className="h-px bg-slate-700" />
          <div className="flex justify-between items-center">
            <p className="text-slate-400">Net Flow</p>
            <p className="text-red-500 font-medium">-€58.75</p>
          </div>
        </div>
      </div>
    </div>
  );
}