import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    'Dịch vụ': [
      'Phát triển Web',
      'Ứng dụng Mobile',
      'UI/UX Design',
      'Digital Marketing',
      'Quản lý dữ liệu',
      'Tư vấn công nghệ'
    ],
    'Công ty': [
      'Về chúng tôi',
      'Đội ngũ',
      'Tin tức',
      'Sự nghiệp',
      'Đối tác'
    ],
    'Hỗ trợ': [
      'Trung tâm trợ giúp',
      'Tài liệu',
      'Liên hệ',
      'FAQ',
      'Báo cáo lỗi'
    ],
    'Pháp lý': [
      'Điều khoản sử dụng',
      'Chính sách bảo mật',
      'Chính sách cookie',
      'Bảo mật dữ liệu'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="text-white" size={20} />
              </div>
              <span className="text-white font-bold text-xl">TechFlow</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Chúng tôi là đối tác công nghệ đáng tin cậy, 
              giúp doanh nghiệp của bạn phát triển trong 
              thời đại số hóa.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone size={16} />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail size={16} />
                <span>hello@techflow.vn</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin size={16} />
                <span>123 Nguyễn Huệ, Q1, TP.HCM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Đăng ký nhận tin tức
            </h3>
            <p className="text-slate-400 mb-6">
              Nhận những thông tin mới nhất về công nghệ và xu hướng phát triển.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all"
              >
                Đăng ký
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 TechFlow. Tất cả quyền được bảo lưu.
            </div>
            <div className="flex items-center space-x-6 text-slate-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;