import React, { useState } from 'react';
import { Bitcoin, Feather as Ethereum, Copy, Check } from 'lucide-react';

export const Donate: React.FC = () => {
  const [copiedBtc, setCopiedBtc] = useState(false);
  const [copiedEth, setCopiedEth] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh';
  const ethAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';

  const copyToClipboard = async (text: string, type: 'btc' | 'eth') => {
    await navigator.clipboard.writeText(text);
    if (type === 'btc') {
      setCopiedBtc(true);
      setTimeout(() => setCopiedBtc(false), 2000);
    } else {
      setCopiedEth(true);
      setTimeout(() => setCopiedEth(false), 2000);
    }
  };

  const amounts = [5, 10, 25, 50, 100];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Support VocalVerse</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Help us maintain and improve the platform by making a crypto donation
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Choose Amount</h2>
        <div className="grid grid-cols-5 gap-4 mb-6">
          {amounts.map(amount => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                selectedAmount === amount
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-purple-100 dark:hover:bg-purple-900/50'
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-6">
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative group">
            <div className="flex items-center">
              <Bitcoin className="w-8 h-8 text-orange-500 mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold">Bitcoin</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{btcAddress}</p>
              </div>
              <button
                onClick={() => copyToClipboard(btcAddress, 'btc')}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
              >
                {copiedBtc ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg relative group">
            <div className="flex items-center">
              <Ethereum className="w-8 h-8 text-blue-500 mr-4" />
              <div className="flex-1">
                <h3 className="font-semibold">Ethereum</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{ethAddress}</p>
              </div>
              <button
                onClick={() => copyToClipboard(ethAddress, 'eth')}
                className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
              >
                {copiedEth ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <p className="text-sm text-purple-800 dark:text-purple-200">
            Your contribution helps us maintain the servers, improve AI capabilities, and add more features to enhance your reading experience.
          </p>
        </div>
      </div>
    </div>
  );
};