import React, { useState } from 'react';
import { Send, CreditCard, Wallet, Download, X } from 'lucide-react';

export default function QuickActions() {
  const [showError, setShowError] = useState(false);

  const actions = [
    { 
      icon: Send, 
      label: 'Transfer', 
      color: 'bg-purple-500',
      onClick: () => setShowError(true)
    },
    { 
      icon: CreditCard, 
      label: 'Pay Bills', 
      color: 'bg-pink-500',
      onClick: () => {}
    },
    { 
      icon: Wallet, 
      label: 'Top Up', 
      color: 'bg-orange-500',
      onClick: () => {}
    },
    { 
      icon: Download, 
      label: 'Statement', 
      color: 'bg-green-500',
      onClick: () => {}
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {actions.map(({ icon: Icon, label, color, onClick }) => (
          <button
            key={label}
            onClick={onClick}
            className="bg-slate-800/50 hover:bg-slate-700/50 transition-colors p-4 rounded-xl flex flex-col items-center gap-3"
          >
            <span className={`${color} p-3 rounded-lg`}>
              <Icon className="w-6 h-6" />
            </span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>

      {showError && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full relative animate-in fade-in duration-200">
            <button 
              onClick={() => setShowError(false)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                <X className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Account Closed</h3>
              <p className="text-slate-400">
                Your account is currently closed. Please contact Administration.
              </p>
              <button
                onClick={() => setShowError(false)}
                className="mt-6 bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}