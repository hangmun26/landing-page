import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Liên hệ{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              với chúng tôi
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Sẵn sàng bắt đầu dự án của bạn? Hãy liên hệ với chúng tôi để được tư vấn miễn phí.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Thông tin liên hệ
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Điện thoại</div>
                    <div className="text-slate-400">+84 123 456 789</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-slate-400">hello@techflow.vn</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Địa chỉ</div>
                    <div className="text-slate-400">123 Nguyễn Huệ, Q1, TP.HCM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Giờ làm việc</div>
                    <div className="text-slate-400">T2-T6: 8:00 - 18:00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-white">
                  Tư vấn miễn phí
                </h3>
              </div>
              <p className="text-slate-300 mb-6">
                Đặt lịch tư vấn miễn phí 30 phút với chuyên gia của chúng tôi 
                để thảo luận về dự án của bạn.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all"
              >
                Đặt lịch ngay
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Gửi tin nhắn
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-400 text-sm mb-2">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="web">Phát triển Web</option>
                      <option value="mobile">Ứng dụng Mobile</option>
                      <option value="design">UI/UX Design</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="data">Quản lý dữ liệu</option>
                      <option value="consulting">Tư vấn công nghệ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-sm mb-2">
                    Tin nhắn *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white px-4 py-3 rounded-xl focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Mô tả chi tiết về dự án hoặc nhu cầu của bạn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all inline-flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Gửi tin nhắn</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;