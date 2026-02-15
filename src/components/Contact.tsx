import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { useSite } from "../context/SiteContext";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const { addMessage } = useSite();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!formData.mobile.trim()) {
      toast.error("Please enter your mobile number");
      return;
    }

    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to local context for admin panel
      addMessage({
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        service: formData.service,
        message: formData.message,
      });

      // WhatsApp Logic
      const whatsappMessage = `*New Customer Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Mobile:* ${formData.mobile}\n*Service Needed:* ${formData.service}\n*Message:* ${formData.message}`;
      // Use the business phone number
      const whatsappNumber = "918610511096";

      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      toast.success("Redirecting to WhatsApp to send your message...");

      // Reset form
      setFormData({ name: "", email: "", mobile: "", service: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[#20C7B4]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#F8C94E]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl mb-4 text-[#20C7B4]"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#36454F]/70 max-w-2xl mx-auto"
          >
            Ready to elevate your brand? Get in touch and let's create something
            amazing.
          </motion.p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="name" className="text-[#36454F]">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="mt-2 border-[#20C7B4]/30 focus:border-[#20C7B4] focus:ring-[#20C7B4] rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="email" className="text-[#36454F]">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="mt-2 border-[#20C7B4]/30 focus:border-[#20C7B4] focus:ring-[#20C7B4] rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 }}
              >
                <Label htmlFor="mobile" className="text-[#36454F]">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  placeholder="+91 1234567890"
                  className="mt-2 border-[#20C7B4]/30 focus:border-[#20C7B4] focus:ring-[#20C7B4] rounded-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Label htmlFor="service" className="text-[#36454F]">
                  Service Needed
                </Label>
                <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="mt-2 border-[#20C7B4]/30 focus:border-[#20C7B4] focus:ring-[#20C7B4] rounded-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Video Editing">Video Editing</SelectItem>
                    <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                    <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                    <SelectItem value="Branding & Content Strategy">Branding & Content Strategy</SelectItem>
                    <SelectItem value="Multiple Services">Multiple Services</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.65 }}
              >
                <Label htmlFor="message" className="text-[#36454F]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="mt-2 border-[#20C7B4]/30 focus:border-[#20C7B4] focus:ring-[#20C7B4] rounded-lg resize-none"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#20C7B4] hover:bg-[#F8C94E] text-white hover:text-[#36454F] transition-all duration-300 rounded-full py-6 group"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[#36454F] mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {[
                  { Icon: Mail, text: "studioblend0@gmail.com", link: "mailto:studioblend0@gmail.com" },
                  { Icon: Phone, text: "+91 8610511096", link: "https://wa.me/918610511096" },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#20C7B4]/10 flex items-center justify-center">
                      <item.Icon className="w-5 h-5 text-[#20C7B4]" />
                    </div>
                    <span className="text-[#36454F]/80">{item.text}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-[#36454F] mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#20C7B4] hover:bg-[#F8C94E] flex items-center justify-center transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 text-white group-hover:text-[#36454F]" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}