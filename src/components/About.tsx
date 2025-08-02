import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';

const stats = [
  { number: '10K+', label: 'Khách hàng hài lòng' },
  { number: '99.9%', label: 'Thời gian hoạt động' },
  { number: '50+', label: 'Quốc gia phục vụ' },
  { number: '24/7', label: 'Hỗ trợ khách hàng' }
];

const values = [
  {
    icon: Award,
    title: 'Chất lượng hàng đầu',
    description: 'Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất.'
  },
  {
    icon: Target,
    title: 'Tập trung khách hàng',
    description: 'Đặt nhu cầu và sự hài lòng của khách hàng lên hàng đầu trong mọi quyết định.'
  },
  {
    icon: Heart,
    title: 'Đam mê công nghệ',
    description: 'Yêu thích và không ngừng khám phá những công nghệ mới nhất.'
  },
  {
    icon: Lightbulb,
    title: 'Đổi mới sáng tạo',
    description: 'Luôn tìm kiếm những giải pháp sáng tạo để giải quyết thách thức.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Về{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              chúng tôi
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Chúng tôi là đội ngũ các chuyên gia công nghệ đam mê, với sứ mệnh 
            mang đến những giải pháp số hóa tiên tiến nhất cho doanh nghiệp.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-400 text-lg">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Câu chuyện của chúng tôi
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Được thành lập vào năm 2020, TechFlow bắt đầu với một tầm nhìn đơn giản: 
              làm cho công nghệ trở nên dễ tiếp cận và hữu ích cho mọi doanh nghiệp. 
              Từ một startup nhỏ, chúng tôi đã phát triển thành một công ty công nghệ 
              hàng đầu với hơn 10,000 khách hàng trên toàn thế giới.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ngày hôm nay, chúng tôi tiếp tục cam kết mang đến những giải pháp 
              công nghệ tiên tiến nhất, giúp doanh nghiệp của bạn thành công 
              trong thời đại số hóa.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl mb-6"
              >
                <value.icon className="text-blue-400" size={28} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {value.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;