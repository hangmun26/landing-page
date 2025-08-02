import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="text-white" size={20} />
            </div>
            <span className="text-white font-bold text-xl">Hao Nguyen Duy</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-white transition-colors">Trang chủ</a>
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Tính năng</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">Về chúng tôi</a>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Dịch vụ</a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Liên hệ</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Bắt đầu ngay
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 border-t border-slate-800"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors">Trang chủ</a>
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Tính năng</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">Về chúng tôi</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors">Dịch vụ</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Liên hệ</a>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                Bắt đầu ngay
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
