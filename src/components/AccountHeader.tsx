import React from 'react';
import { User, CreditCard } from 'lucide-react';

export default function AccountHeader() {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <User className="w-8 h-8 text-blue-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Waruna Prasad</h1>
            <div className="flex items-center gap-2 text-slate-400">
              <CreditCard className="w-4 h-4" />
              <span>••••</span>
              <span>••••</span>
              <span>••••</span>
              <span>4789</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-400">Account Status</p>
          <p className="text-red-500 font-medium">Closed</p>
        </div>
      </div>
    </div>
  );
}