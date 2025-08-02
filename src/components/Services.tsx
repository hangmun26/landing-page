import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Database, Cog } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Phát triển Web',
    description: 'Xây dựng website và ứng dụng web hiện đại với công nghệ tiên tiến nhất.',
    features: ['React/Next.js', 'Node.js/Express', 'TypeScript', 'API Integration'],
    price: 'Từ 15,000,000đ'
  },
  {
    icon: Smartphone,
    title: 'Ứng dụng Mobile',
    description: 'Phát triển ứng dụng di động đa nền tảng với trải nghiệm người dùng tuyệt vời.',
    features: ['React Native', 'Flutter', 'iOS/Android', 'Cross-platform'],
    price: 'Từ 25,000,000đ'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Thiết kế giao diện người dùng đẹp mắt và trải nghiệm người dùng tối ưu.',
    features: ['Figma Design', 'Prototyping', 'User Research', 'Design System'],
    price: 'Từ 8,000,000đ'
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Chiến lược marketing số toàn diện để tăng trưởng doanh nghiệp của bạn.',
    features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'],
    price: 'Từ 5,000,000đ/tháng'
  },
  {
    icon: Database,
    title: 'Quản lý dữ liệu',
    description: 'Giải pháp quản lý và phân tích dữ liệu thông minh cho doanh nghiệp.',
    features: ['Database Design', 'Data Analytics', 'Business Intelligence', 'Cloud Storage'],
    price: 'Từ 12,000,000đ'
  },
  {
    icon: Cog,
    title: 'Tư vấn công nghệ',
    description: 'Tư vấn chiến lược công nghệ và chuyển đổi số cho doanh nghiệp.',
    features: ['Tech Strategy', 'Digital Transformation', 'System Architecture', 'Training'],
    price: 'Từ 3,000,000đ/buổi'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dịch vụ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              chuyên nghiệp
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ công nghệ từ thiết kế đến phát triển, 
            giúp bạn hiện thực hóa ý tưởng thành sản phẩm.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl mb-6 group-hover:border-blue-400/40 transition-all"
              >
                <service.icon className="text-blue-400" size={28} />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-700 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-400">
                    {service.price}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all"
                  >
                    Tìm hiểu thêm
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Cần tư vấn dự án?
            </h3>
            <p className="text-slate-400 mb-6">
              Liên hệ với chúng tôi để được tư vấn miễn phí về dự án của bạn.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all"
            >
              Liên hệ ngay
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;