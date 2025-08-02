import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute top-32 right-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4"
      >
        <div className="flex items-center space-x-2 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-current" />
          ))}
        </div>
        <div className="text-white font-semibold">4.9/5</div>
        <div className="text-slate-400 text-sm">1000+ đánh giá</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute top-48 left-8 bg-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4"
      >
        <div className="text-blue-400 font-bold text-2xl">99.9%</div>
        <div className="text-slate-400 text-sm">Thời gian hoạt động</div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>Giải pháp công nghệ hàng đầu</span>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
        >
          Xây dựng tương lai{' '}
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            số hóa
          </span>{' '}
          của bạn
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Chúng tôi cung cấp các giải pháp công nghệ tiên tiến giúp doanh nghiệp 
          của bạn phát triển mạnh mẽ trong thời đại số.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center space-x-2"
          >
            <span>Khám phá ngay</span>
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-slate-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all inline-flex items-center space-x-2"
          >
            <Play size={20} />
            <span>Xem demo</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400"
        >
          Được tin tưởng bởi hơn 10,000+ doanh nghiệp trên toàn thế giới
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;