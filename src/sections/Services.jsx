import { motion } from 'framer-motion';
import bt_starbucks from '../assets/bt_starbucks.jpeg';
import bt_ramada from '../assets/bt_ramada.jpeg';
import bt_space from '../assets/bt_space.jpeg';

const services = [
  'Projelendirme',
  'Mühendislik Hizmeti',
  'İnşaat Taahhüt Hizmetleri',
  'İç Dış Dekorasyon',
  'Anahtar Teslim Tadilat',
];

const Services = () => {
  return (
    <section id="services" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#555555] via-[#666666] to-[#555555]">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/6 w-80 h-80 border-2 border-white/10 rounded-3xl opacity-30"
        />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -80, 0] }}
          transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-1/5 w-96 h-96 border-2 border-gray-200/20 rounded-full opacity-20"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border-l-4 border-t-4 border-white/20 opacity-30 rotate-12"
          style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        />
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 bg-clip-text text-transparent mb-10"
        >
          Hizmetlerimiz
        </motion.h2>

        {/* İçerik: Solda Görseller, Sağda Hizmetler */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
          {/* Sol - Görsel Düzeni */}
          <div className="flex gap-4 w-full justify-center md:justify-end">
            <div className="flex flex-col gap-4">
              <motion.img
                src={bt_starbucks}
                alt="BT Davutlar"
                className="object-cover w-full max-w-[240px] h-40 rounded-xl shadow-lg transition-transform duration-300 hover:scale-115"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.img
                src={bt_ramada}
                alt="BT Ramada"
                className="object-cover w-full max-w-[240px] h-45 rounded-xl shadow-lg transition-transform duration-300 hover:scale-115"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            <motion.img
              src={bt_space}
              alt="BT Space"
              className="object-cover w-full max-w-[240px] h-[328px] self-center rounded-xl shadow-xl transition-transform duration-300 hover:scale-115"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Sağ - Hizmet Listesi */}
          <ul className="flex flex-col gap-6 items-start justify-center mt-8">
            {services.map((service, idx) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                className="group text-2xl sm:text-3xl font-semibold text-gray-200 transition-all duration-300 relative px-2 select-none"
              >
                <span className="transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-300 group-hover:to-gray-500">
                  {service}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-white via-gray-400 to-black rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <span className="block font-bold text-xl sm:text-3xl bg-gradient-to-r from-gray-300 via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-wide">
            BT Yapı İnşaat ile Her Yapı, Güvenle Yükselir.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
