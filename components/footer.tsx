"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X, MessageCircle } from "lucide-react";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-navy-900 rounded-xl shadow-lg p-8 max-w-md w-full mx-4 relative"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <div className="flex flex-col gap-6">
                <motion.a
                  href="tel:0422808175"
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="w-5 h-5 text-navy-900" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">0422808175</p>
                  </div>
                </motion.a>
                
                <motion.a
                  href="https://wa.me/0422808175"
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-navy-900" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-gray-600">0422808175</p>
                  </div>
                </motion.a>

                <motion.a
                  href="mailto:info@longlastpc.com.au"
                  target="_blank"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-navy-900" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@longlastpc.com.au</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer content */}
      <div className="w-full bg-navy-900 flex flex-col items-center justify-center py-3 px-4 text-gray-200 font-medium">
        <div className="max-w-screen-xl w-full flex flex-col items-center justify-between gap-6 md:gap-10">
          <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-between">
            <Image src="/images/logo4.png" alt="logo" width={150} height={150} />
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
                <Link className="hover:text-white transition-all duration-300" href="/#">Terms & Conditions</Link>
                <Link className="hover:text-white transition-all duration-300" href="/#">Privacy Policy</Link>
              </div>
              <p className="text-base text-gray-200">
                &copy; {new Date().getFullYear()} Longlast Pest Control. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;