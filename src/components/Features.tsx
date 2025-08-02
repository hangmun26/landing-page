import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Smartphone, Cloud, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Hiệu suất cao',
    description: 'Tối ưu hóa hiệu suất với công nghệ tiên tiến nhất, đảm bảo tốc độ xử lý nhanh chóng.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Bảo mật tuyệt đối',
    description: 'Hệ thống bảo mật đa lớp với mã hóa end-to-end, bảo vệ dữ liệu của bạn 24/7.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Smartphone,
    title: 'Tương thích đa nền tảng',
    description: 'Hoạt động mượt mà trên mọi thiết bị và hệ điều hành, từ mobile đến desktop.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Cloud,
    title: 'Đám mây thông minh',
    description: 'Lưu trữ và xử lý dữ liệu trên cloud với khả năng mở rộng không giới hạn.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: BarChart3,
    title: 'Phân tích thông minh',
    description: 'Dashboard trực quan với AI analytics giúp bạn đưa ra quyết định chính xác.',
    color: 'from-indigo-400 to-blue-500'
  },
  {
    icon: Users,
    title: 'Hỗ trợ 24/7',
    description: 'Đội ngũ chuyên gia sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi với chất lượng dịch vụ tốt nhất.',
    color: 'from-red-400 to-rose-500'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tính năng{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              vượt trội
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Khám phá những tính năng mạnh mẽ được thiết kế để đưa doanh nghiệp 
            của bạn lên một tầm cao mới.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 hover:bg-slate-900/70 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:shadow-lg transition-all`}
              >
                <feature.icon className="text-white" size={28} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
          >
            Xem tất cả tính năng
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;