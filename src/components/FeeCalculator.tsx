import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, CheckCircle } from 'lucide-react';

const FeeCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [fromCurrency, setFromCurrency] = useState('CAD');
  const [toCurrency, setToCurrency] = useState('USD');

  const exchangeRate = 0.7203;
  const flowPayFee = 7.50;
  const bankFee = 45.00;
  const flowPayTotal = (amount * exchangeRate) - flowPayFee;
  const bankTotal = (amount * exchangeRate) - bankFee;
  const savings = bankFee - flowPayFee;

  return (
    <section className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6">
            So sánh{' '}
            <span className="text-lime-400 font-medium">chi phí thực</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Xem bạn tiết kiệm được bao nhiều với FlowPay so với các ngân hàng truyền thống. 
            Chúng tôi sử dụng tỷ giá thực với phí minh bạch.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 mb-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Calculator className="text-lime-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">
                Máy tính chuyển tiền
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Bạn gửi
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600 focus:border-lime-400 focus:outline-none"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    <option value="CAD">CAD</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <ArrowRight className="text-slate-400" size={32} />
              </div>

              <div>
                <label className="block text-slate-400 text-sm mb-2">
                  Người nhận được
                </label>
                <div className="relative">
                  <div className="w-full bg-slate-700 text-white text-2xl p-4 rounded-xl border border-slate-600">
                    {(amount * exchangeRate).toFixed(2)}
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white px-3 py-1 rounded-lg text-sm"
                  >
                    <option value="USD">USD</option>
                    <option value="CAD">CAD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center text-slate-400 mb-6">
              Tỷ giá: 1 {fromCurrency} = {exchangeRate} {toCurrency}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-lime-400/10 to-emerald-400/10 border-2 border-lime-400/30 rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-lime-400/20 rounded-full blur-xl" />
              <div className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="text-lime-400" size={24} />
                  <h3 className="text-2xl font-semibold text-white">FlowPay</h3>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Phí chuyển tiền</span>
                    <span className="text-white">${flowPayFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tỷ giá</span>
                    <span className="text-white">{exchangeRate}</span>
                  </div>
                  <div className="border-t border-slate-600 pt-3">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-white">Tổng người nhận được</span>
                      <span className="text-lime-400">${flowPayTotal.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                Ngân hàng truyền thống
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Phí chuyển tiền</span>
                  <span className="text-white">${bankFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Tỷ giá</span>
                  <span className="text-white">{(exchangeRate * 0.97).toFixed(4)}</span>
                </div>
                <div className="border-t border-slate-600 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-white">Tổng người nhận được</span>
                    <span className="text-red-400">${bankTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8 p-6 bg-lime-400/10 border border-lime-400/30 rounded-2xl"
          >
            <div className="text-3xl font-bold text-lime-400 mb-2">
              Bạn tiết kiệm ${savings.toFixed(2)}
            </div>
            <div className="text-slate-300">
              Đó là {((savings / amount) * 100).toFixed(1)}% tiền nhiều hơn cho người nhận
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculator;