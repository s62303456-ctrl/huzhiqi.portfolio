import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageCircle, Play, X, ZoomIn, ArrowUpRight, Sparkles } from 'lucide-react';

// ================= 1. 引入所有的图片 =================
import myPortrait from './Assets/images/个人照片.jpg';
import imgWechat from './Assets/images/wechat_article.png';
import imgXiaohongshu from './Assets/images/xiaohongshu.png';
import imgUI from './Assets/images/UI_design.png';
import imgGraphic from './Assets/images/graphic_design.png';
import imgEvent1 from './Assets/images/event_planning_v1.png'; 
import imgEvent2 from './Assets/images/event_planning_v2.png'; 
import imgNanfang from './Assets/images/南方财经 创意策划.png';

// ================= 2. 引入所有的视频 =================
import videoAI from './Assets/videos/AI漫剧.mp4';
import videoMG from './Assets/videos/MG动画-水务小贴士.mp4';
import videoXiaZhi from './Assets/videos/夏至人物祝福视频.mp4';
import videoChunRi from './Assets/videos/春日华师风光视频.mp4';
import videoGrammy from './Assets/videos/用格莱美慢镜头打开华师劳动者.mp4'; 

// ================= 数据配置区 =================

const skills =[
  { name: 'Ps', color: 'bg-orange-800' },
  { name: 'Ai', color: 'bg-orange-800' },
  { name: 'Pr', color: 'bg-orange-800' },
  { name: 'Excel', color: 'bg-orange-800' }
];

const categories =[
  { id: 'creative', label: '创意策划' },
  { id: 'wechat', label: '公众号推文' },
  { id: 'xiaohongshu', label: '小红书创作' },
  { id: 'ui', label: 'UI设计' },
  { id: 'graphic', label: '平面设计' }
];

const portfolioData: Record<string, any[]> = {
  creative:[{ title: "南方财经 · 创意策划", desc: "南方财经创意策划实习生作品：选题策划、文案撰写。", image: imgNanfang }],
  wechat:[{ title: "觅菓美人甲南瓜子", desc: "产品上新推文策划与文案", image: imgWechat }],
  xiaohongshu:[{ title: "天然肌肤焕活卫士", desc: "无花果干产品种草", image: imgXiaohongshu }],
  ui:[{ title: "WEIN 网站UI设计", desc: "服装电商网站全套UI设计", image: imgUI }],
  graphic:[{ title: "三星堆文化海报", desc: "探索国宝背后的传奇故事", image: imgGraphic }]
};

const eventData =[
  { 
    title: "觅菓日常品牌活动", 
    desc: "高温之夏，如何精神避暑读书会策划落地。从创意发散到现场布置，全方位调动用户参与感。", 
    image: imgEvent1 
  },
  { 
    title: "校园活动策划", 
    desc: "“智阅经典”重返霍格沃茨魔法阅读之旅。涵盖魔法课堂、魔杖工坊与Cos打卡等沉浸式互动环节，打造现象级校园传播。", 
    image: imgEvent2 
  }
];

const videoData =[
  { title: "慢镜头里的华师劳动者", desc: "格莱美慢镜头风格致敬劳动者", videoUrl: videoGrammy },
  { title: "春日华师风光视频", desc: "校园风光实景拍摄与后期调色", videoUrl: videoChunRi },
  { title: "AI漫剧作品", desc: "结合AI技术创作的创新漫剧短片", videoUrl: videoAI },
  { title: "MG动画-水务小贴士", desc: "趣味生动的科普向MG动画制作", videoUrl: videoMG },
  { title: "夏至人物祝福视频", desc: "人物实拍与后期温馨剪辑", videoUrl: videoXiaZhi }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('creative');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const[selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-stone-800 font-sans selection:bg-orange-200 relative overflow-hidden">
      
      {/* ====== 全局暖色氛围光晕装饰 ====== */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-300/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-rose-300/15 blur-[120px]"></div>
        <div className="absolute top-[30%] left-[60%] w-[30vw] h-[30vw] rounded-full bg-amber-300/15 blur-[100px]"></div>
      </div>

      {/* ====== 顶部导航栏 ====== */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FCF9F6]/70 backdrop-blur-xl z-40 border-b border-orange-900/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter text-orange-950">Zhiqi.Portfolio</div>
          <div className="hidden md:flex space-x-10 text-sm font-bold text-stone-500">
            <a href="#about" className="hover:text-orange-700 transition-colors">关于我</a>
            <a href="#works" className="hover:text-orange-700 transition-colors">内容创意</a>
            <a href="#events" className="hover:text-orange-700 transition-colors">活动策划</a>
            <a href="#videos" className="hover:text-orange-700 transition-colors">视频作品</a>
          </div>
        </div>
      </nav>

      {/* ====== 海报级 Banner 首页 ====== */}
      <section className="pt-32 pb-16 px-6 relative max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-[65vh] min-h-[500px] rounded-[3rem] bg-gradient-to-br from-orange-100 via-rose-50 to-amber-100 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-[0_20px_60px_rgba(234,88,12,0.1)] border border-white/60"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/40 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-orange-300/30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 text-orange-800 text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
              <Sparkles size={16} className="text-orange-500"/>
              Content Creator & Designer
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter mb-6 text-orange-950 leading-[0.9]">
              Creative<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-rose-600">Portfolio.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 font-medium leading-relaxed mb-10 max-w-xl mx-auto">
              策划、文案与设计的综合展现。<br/>
              Turning subtle ideas into impactful experiences.
            </p>
            <a href="#about" className="inline-flex items-center space-x-3 bg-orange-900 text-white px-10 py-4 rounded-full hover:bg-orange-800 hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-900/20">
              <span className="font-bold tracking-wide">探索作品</span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ====== 关于我区域 ====== */}
      <section id="about" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center bg-white/60 backdrop-blur-md p-8 md:p-16 rounded-[3rem] shadow-sm border border-white">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-5/12"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden relative shadow-2xl shadow-stone-200/50 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <img src={myPortrait} alt="胡智琪" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-7/12"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 text-orange-950 flex items-center gap-6">
                About Me
                <div className="h-1 w-20 bg-orange-200 rounded-full"></div>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-lg mb-10">
                <div className="border-b border-orange-900/10 pb-3"><span className="text-stone-400 block text-xs mb-1 uppercase tracking-widest">Name</span><span className="font-bold text-stone-800">胡智琪</span></div>
                <div className="border-b border-orange-900/10 pb-3"><span className="text-stone-400 block text-xs mb-1 uppercase tracking-widest">Gender</span><span className="font-bold text-stone-800">女</span></div>
                <div className="border-b border-orange-900/10 pb-3"><span className="text-stone-400 block text-xs mb-1 uppercase tracking-widest">University</span><span className="font-bold text-stone-800">华南师范大学</span></div>
                <div className="border-b border-orange-900/10 pb-3"><span className="text-stone-400 block text-xs mb-1 uppercase tracking-widest">Major</span><span className="font-bold text-stone-800">传播学</span></div>
              </div>

              <div className="flex flex-wrap gap-3 mb-10">
                <div className="px-5 py-2.5 bg-orange-50 border border-orange-100 rounded-full text-sm font-bold text-orange-800">✨ 自学小达人</div>
                <div className="px-5 py-2.5 bg-orange-50 border border-orange-100 rounded-full text-sm font-bold text-orange-800">🎯 敢做Leader也能认真做member</div>
                <div className="px-5 py-2.5 bg-orange-50 border border-orange-100 rounded-full text-sm font-bold text-orange-800">🔥 内驱力、执行力、意志力upup</div>
              </div>

              <div>
                <h3 className="text-xs text-stone-400 uppercase tracking-[0.2em] mb-4 font-bold">Software Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <div key={skill.name} className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm ${skill.color} shadow-lg shadow-orange-900/20`}>
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====== 内容创意区域 ====== */}
      <section id="works" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4 text-orange-950">内容创意</h2>
            <p className="text-stone-500 text-lg">新媒体时代的视觉与文案传达（点击图片可全屏鉴赏）</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === cat.id 
                    ? 'bg-orange-900 text-white shadow-xl shadow-orange-900/20 scale-105' 
                    : 'bg-white text-stone-500 hover:bg-orange-50 border border-transparent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 gap-16">
            <AnimatePresence mode="popLayout">
              {portfolioData[activeTab].map((item, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer flex flex-col items-center"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_10px_40px_rgba(234,88,12,0.08)] group-hover:shadow-[0_20px_50px_rgba(234,88,12,0.15)] transition-all duration-500 mb-6 relative border border-white/60">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-orange-900/0 group-hover:bg-orange-900/10 transition-colors duration-500 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                        <ZoomIn size={32} className="text-orange-900" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-black mb-3 text-orange-950">{item.title}</h3>
                  <p className="text-stone-500 text-xl max-w-2xl text-center">{item.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ====== 活动策划区域 ====== */}
      <section id="events" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4 text-orange-950">活动策划全案</h2>
            <p className="text-stone-500 text-lg">从灵感到落地的全链路执行展示</p>
          </div>

          <div className="flex flex-col gap-12">
            {eventData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group cursor-pointer bg-white/70 backdrop-blur-xl border border-white rounded-[2.5rem] p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center shadow-[0_15px_40px_rgba(234,88,12,0.05)] hover:shadow-[0_20px_50px_rgba(234,88,12,0.1)] transition-all duration-500"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="w-full md:w-5/12 pl-4 md:pl-8">
                  <div className="inline-block px-4 py-1.5 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-rose-100">
                    Event Planning
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-orange-950 mb-6 leading-tight">{item.title}</h3>
                  <p className="text-stone-500 text-lg leading-relaxed mb-8">{item.desc}</p>
                  
                  <div className="inline-flex items-center gap-2 text-orange-600 font-bold group-hover:text-orange-800 transition-colors">
                    <span>点击查阅详图</span>
                    <ArrowUpRight size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
                  </div>
                </div>

                <div className="w-full md:w-7/12 aspect-[4/3] md:aspect-video overflow-hidden rounded-[2rem] relative shadow-inner">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 视频作品区域 ====== */}
      <section id="videos" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black mb-4 text-orange-950">编导视频合集</h2>
            <p className="text-stone-500 text-lg">前期策划 ➔ 中期拍摄 ➔ 后期剪辑，全能型“综合手”</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {videoData.map((video, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group cursor-pointer flex flex-col items-center ${index === 0 ? 'md:col-span-2' : ''}`}
                onClick={() => setSelectedVideo(video.videoUrl)}
              >
                <div className={`w-full ${index === 0 ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'} bg-stone-900 rounded-[2rem] overflow-hidden relative mb-6 shadow-2xl shadow-stone-900/20`}>
                  <video 
                    src={`${video.videoUrl}#t=0.1`} 
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center pl-1.5 transform group-hover:scale-110 transition-all duration-500 shadow-2xl">
                      <Play size={36} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className={`${index === 0 ? 'text-3xl' : 'text-2xl'} font-black mb-2 text-orange-950`}>{video.title}</h3>
                <p className="text-stone-500 text-lg">{video.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== 联系方式区域 ====== */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden text-center z-10">
        <div className="max-w-4xl mx-auto bg-white/40 backdrop-blur-xl border border-white p-12 md:p-20 rounded-[3rem] shadow-[0_20px_60px_rgba(234,88,12,0.05)]">
          <p className="text-orange-600 tracking-[0.3em] uppercase text-sm mb-6 font-black">Let's Work Together</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-orange-950">
            期待您的<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-rose-500">面试邀请</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:15622726010" className="flex items-center space-x-3 bg-white px-8 py-5 rounded-full hover:bg-orange-50 transition-colors border border-orange-100 shadow-sm">
              <Phone className="text-orange-600" size={24} />
              <span className="font-bold text-lg text-stone-800">156 2272 6010</span>
            </a>
            <div className="flex items-center space-x-3 bg-white px-8 py-5 rounded-full border border-orange-100 shadow-sm">
              <MessageCircle className="text-green-600" size={24} />
              <span className="font-bold text-lg text-stone-800">h15728139265</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
             <a href="mailto:2092509191@qq.com" className="flex items-center space-x-3 bg-white px-8 py-5 rounded-full hover:bg-orange-50 transition-colors border border-orange-100 shadow-sm">
              <Mail className="text-blue-600" size={24} />
              <span className="font-bold text-lg text-stone-800">2092509191@qq.com</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-stone-400 text-sm font-bold tracking-widest uppercase relative z-10">
        <p>© {new Date().getFullYear()} 胡智琪. ALL RIGHTS RESERVED.</p>
      </footer>

      {/* ====== 弹窗区域 ====== */}

      {/* 1. 视频播放弹窗 */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-stone-900/95 backdrop-blur-2xl"
            onClick={() => setSelectedVideo(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedVideo(null)}>
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-7xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={e => e.stopPropagation()}
            >
              <video src={selectedVideo} controls autoPlay className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. 图片放大弹窗 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-16 bg-stone-900/95 backdrop-blur-2xl cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors" onClick={() => setSelectedImage(null)}>
              <X size={40} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full h-full flex justify-center items-center"
              onClick={e => e.stopPropagation()}
            >
              <img src={selectedImage} alt="作品放大图" className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}