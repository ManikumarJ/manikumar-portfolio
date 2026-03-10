import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEnvelope, BsTelephone, BsGeoAlt, BsGithub, BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ycb7duu", "template_nnn1hos", form.current, {
        publicKey: "wieqLLlqo1Q8XC-jY",
      })
      .then(
        () => {
          toast.success("Message sent successfully ");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message ");
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-indigo-500">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a question or want to work together? Leave a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-lg">
                    <BsEnvelope size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <a
                      href="mailto:manikumarj6@gmail.com"
                      className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors"
                    >
                      manikumarj6@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-lg">
                    <BsTelephone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Phone
                    </p>
                    <a
                      href="tel:+918248915910"
                      className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-500 transition-colors"
                    >
                      +91 8248915910
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500 rounded-lg">
                    <BsGeoAlt size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Connect on social media:
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/ManikumarJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg"
                  >
                    <BsGithub size={24} />
                  </a>

                  <a
                    href="https://linkedin.com/in/manikumarj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg"
                  >
                    <BsLinkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <form ref={form} className="space-y-6" onSubmit={sendEmail}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Manikumar"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="mani@example.com"
                  className="w-full px-4 py-3 rounded-xl border"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Let's build something amazing together..."
                  className="w-full px-4 py-3 rounded-xl border resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </section>
  );
};

export default Contact;