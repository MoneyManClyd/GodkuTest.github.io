"use client";

import { Header } from "@/components/Header";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, BookText, ServerCrash, Info, ChevronLeft } from "lucide-react";

export default function DocumentationPage() {
  const [showAndroidDocs, setShowAndroidDocs] = useState(false);
  const [showIosDocs, setShowIosDocs] = useState(false);
  const [showBotDocs, setShowBotDocs] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleAndroidClick = () => {
    setShowAndroidDocs(true);
    setShowIosDocs(false);
    setShowBotDocs(false);
  };

  const handleIosClick = () => {
    setShowIosDocs(true);
    setShowAndroidDocs(false);
    setShowBotDocs(false);
  };

  const handleBotClick = () => {
    setShowBotDocs(true);
    setShowAndroidDocs(false);
    setShowIosDocs(false);
  };

  const goBack = () => {
    setShowAndroidDocs(false);
    setShowIosDocs(false);
    setShowBotDocs(false);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Header />

      <main className="pt-20 relative">
        {/* Grid Pattern Background */}
        <div className="grid-pattern absolute inset-0 w-full h-full pointer-events-none" />

        <section className="relative py-24 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-dbz-blue/20 to-transparent opacity-50 blur-xl" />
            </motion.div>

            <motion.div
              className="text-center mb-16 max-w-3xl mx-auto"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={fadeInUp}
            >
              <h1 className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 ${showAndroidDocs || showIosDocs || showBotDocs ? 'hidden' : ''}`}>
                Documentation & FAQ
              </h1>
              <p className={`text-white/70 text-lg mb-8 ${showAndroidDocs || showIosDocs || showBotDocs ? 'hidden' : ''}`}>
                Choose a category below to view documentation about the Godku Project mod.
              </p>
            </motion.div>

            <motion.h1
              className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 text-center ${!showAndroidDocs ? 'hidden' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showAndroidDocs ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Android Documentation
            </motion.h1>

            <motion.h1
              className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 text-center ${!showIosDocs ? 'hidden' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showIosDocs ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              iOS Documentation
            </motion.h1>

            <motion.h1
              className={`text-3xl md:text-4xl font-bold gradient-heading mb-6 text-center ${!showBotDocs ? 'hidden' : ''}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showBotDocs ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              Modding Bot Documentation
            </motion.h1>

            <motion.div
              className={`flex flex-wrap justify-center gap-8 ${showAndroidDocs || showIosDocs || showBotDocs ? 'hidden' : ''}`}
              variants={container}
              initial="hidden"
              animate={isLoaded ? "show" : "hidden"}
            >
              <motion.div
                className="download-card group relative"
                variants={item}
                onClick={handleAndroidClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src="/GodkuWebsite/images/android-icon.png"
                    alt="Android"
                    width={80}
                    height={80}
                    className="mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-orange text-transparent bg-clip-text">Android</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-dbz-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>

              <motion.div
                className="download-card group relative"
                variants={item}
                onClick={handleIosClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src="/GodkuWebsite/images/ios-icon.png"
                    alt="iOS"
                    width={80}
                    height={80}
                    className="mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-blue text-transparent bg-clip-text">iOS</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-dbz-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>

              <motion.div
                className="download-card group relative"
                variants={item}
                onClick={handleBotClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative z-10 flex flex-col items-center">
                  <Image
                    src="/GodkuWebsite/images/discord-icon.png"
                    alt="Discord Bot"
                    width={80}
                    height={80}
                    className="mb-6 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-dbz-yellow text-transparent bg-clip-text">Modding Bot</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-dbz-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </motion.div>
            </motion.div>

            {/* Android Documentation Content */}
            {showAndroidDocs && (
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-orange bg-clip-text text-transparent">Installation Guide</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 1: Download the APK</h3>
                      <p className="text-white/70">
                        Go to the download section and select the appropriate version for your device.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 2: Install the APK</h3>
                      <p className="text-white/70">
                        Enable "Unknown Sources" in your device settings and install the downloaded APK.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 3: Configure the Mod</h3>
                      <p className="text-white/70">
                        Open the app and follow the on-screen instructions to configure the mod options.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-orange bg-clip-text text-transparent">Troubleshooting</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Installation Issues</h3>
                      <p className="text-white/70">
                        If you can't install the APK, ensure you have enabled "Unknown Sources" in your settings. Some devices may require additional permissions.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">App Crashes</h3>
                      <p className="text-white/70">
                        If the app crashes, try restarting your device. Make sure you have sufficient storage space available.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Performance Issues</h3>
                      <p className="text-white/70">
                        For optimal performance, close other apps running in the background. Try using the "Essential" version if you have an older device.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white mx-auto transition-colors"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                  onClick={goBack}
                >
                  <ChevronLeft size={18} />
                  <span>Go Back</span>
                </button>
              </motion.div>
            )}

            {/* iOS Documentation Content */}
            {showIosDocs && (
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-blue bg-clip-text text-transparent">iOS Installation Guide</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 1: Prepare Your Device</h3>
                      <p className="text-white/70">
                        Ensure your device is running iOS 12 or later. Some features may require a newer iOS version.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 2: Download and Install</h3>
                      <p className="text-white/70">
                        Follow the download link and install using the provided instructions. You may need to confirm installation through device settings.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Step 3: Trust the Developer</h3>
                      <p className="text-white/70">
                        Go to Settings {'->'} General {'->'} Device Management, and trust the developer certificate.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-blue bg-clip-text text-transparent">Frequently Asked Questions</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">How do I update the mod?</h3>
                      <p className="text-white/70">
                        Download the latest version from our website and install it over the existing app. Your settings will be preserved.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Is this mod safe for my device?</h3>
                      <p className="text-white/70">
                        Yes, our mods are developed with safety in mind and don't include any harmful code. They're regularly tested and updated.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Can I get banned for using this mod?</h3>
                      <p className="text-white/70">
                        We recommend using these mods for offline gameplay or on private servers. Online use is at your own risk.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white mx-auto transition-colors"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                  onClick={goBack}
                >
                  <ChevronLeft size={18} />
                  <span>Go Back</span>
                </button>
              </motion.div>
            )}

            {/* Modding Bot Documentation Content */}
            {showBotDocs && (
              <motion.div
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent">Discord Bot Commands</h2>

                  <div className="space-y-6">
                    <div className="glass-card p-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">!help</h3>
                      <p className="text-white/70">
                        Displays a list of all available commands and their descriptions.
                      </p>
                    </div>

                    <div className="glass-card p-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">!godly</h3>
                      <p className="text-white/70">
                        Max your equipments to Godly Level. (Usable in PVP !)
                      </p>
                    </div>

                    <div className="glass-card p-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">!ultimate</h3>
                      <p className="text-white/70">
                        Max your characters stars, zenkai, soulboost and artboost ! (Not usable in PVP)
                      </p>
                    </div>

                    <div className="glass-card p-4">
                      <h3 className="text-xl font-semibold mb-2 text-white">!skip_tuto</h3>
                      <p className="text-white/70">
                        Complete the tutorial on your account instantly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-8 mb-10">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-dbz-yellow bg-clip-text text-transparent">How to Join</h2>

                  <div className="space-y-6">
                    <p className="text-white/70">
                      Join our Discord server to access the modding bot and community support:
                    </p>

                    <a
                      href="https://www.discord.gg/godkuproject"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-dbz-blue/20 hover:bg-dbz-blue/30 transition-all duration-300 p-4 rounded-lg flex items-center justify-center gap-3 border border-white/10 hover:border-white/20"
                    >
                      <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={24} height={24} />
                      <span className="text-white font-semibold">Join Discord Server</span>
                    </a>
                  </div>
                </div>

                <button
                  className="flex items-center gap-2 text-white/80 hover:text-white mx-auto transition-colors"
                  style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
                  onClick={goBack}
                >
                  <ChevronLeft size={18} />
                  <span>Go Back</span>
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 bg-dark-dark mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <Image
                  src="/GodkuWebsite/images/logo.png"
                  alt="Godku Logo"
                  width={30}
                  height={30}
                  className="mr-2 rounded-full"
                />
                <span className="text-lg font-semibold text-white">Godku Project</span>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0">
                <a href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </a>
                <a href="/download" className="text-white/70 hover:text-white transition-colors">
                  Download
                </a>
                <a href="/documentation" className="text-white/70 hover:text-white transition-colors">
                  Documentation
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.discord.gg/godkuproject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <Image src="/GodkuWebsite/images/discord-icon.png" alt="Discord" width={24} height={24} />
                </a>
                <a
                  href="https://www.youtube.com/@GodkuProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@godkuprojectreborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
              <p>&copy; {new Date().getFullYear()} Godku Project. Created by Darklaser38. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
