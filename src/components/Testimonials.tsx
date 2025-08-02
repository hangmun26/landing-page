import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Nguyễn Văn An',
    role: 'CEO',
    company: 'TechStart Vietnam',
    rating: 5,
    text: 'TechFlow đã giúp chúng tôi xây dựng một nền tảng e-commerce hoàn hảo. Đội ngũ chuyên nghiệp và sản phẩm chất lượng cao.',
    avatar: '👨‍💼'
  },
  {
    name: 'Trần Thị Bình',
    role: 'Marketing Director',
    company: 'Digital Solutions',
    rating: 5,
    text: 'Dịch vụ digital marketing của TechFlow đã giúp tăng 300% lượng khách hàng tiềm năng cho công ty chúng tôi.',
    avatar: '👩‍💼'
  },
  {
    name: 'Lê Minh Cường',
    role: 'Founder',
    company: 'StartupXYZ',
    rating: 5,
    text: 'Ứng dụng mobile do TechFlow phát triển có giao diện đẹp và hiệu suất tuyệt vời. Rất hài lòng với kết quả.',
    avatar: '👨‍💻'
  },
  {
    name: 'Phạm Thu Dung',
    role: 'Product Manager',
    company: 'InnovateCorp',
    rating: 5,
    text: 'Đội ngũ TechFlow luôn lắng nghe và đưa ra những giải pháp sáng tạo phù hợp với nhu cầu của chúng tôi.',
    avatar: '👩‍💻'
  },
  {
    name: 'Hoàng Văn Em',
    role: 'CTO',
    company: 'FutureTech',
    rating: 5,
    text: 'Chất lượng code và kiến trúc hệ thống do TechFlow xây dựng rất ấn tượng. Đáng tin cậy và bảo mật cao.',
    avatar: '👨‍🔬'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Khách hàng{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              nói gì
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-800 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-800 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex space-x-6"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-80 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="text-slate-600 mb-4" size={24} />

                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center space-x-3">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-slate-400 text-sm">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-6 bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-slate-600" />
            <div className="text-slate-400">
              Dựa trên 1,000+ đánh giá
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;