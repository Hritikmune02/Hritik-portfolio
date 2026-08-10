"use client";
import React from "react";
export default function ContactPage() {
  return (
    <div className="card fade-in space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="text-slate-400 text-sm">
        Feel free to reach out for collaborations, job opportunities, or if you just
        want to say hello. I usually reply within 24–48 hours.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT BOX — DIRECT CONTACT INFO */}
        <div className="card tilt space-y-4">
          <h2 className="text-xl font-semibold">Contact Information</h2>

          <p className="text-sm">
            📧 <span className="text-cyan-300 font-semibold">
              your-email@gmail.com
            </span>
          </p>

          <p className="text-sm">
            📞 <span className="text-cyan-300 font-semibold">
              +91 0000000000
            </span>
          </p>

          <p className="text-sm">
            🔗 <a 
              href="https://linkedin.com/in/your-link"
              target="_blank" 
              className="text-cyan-300 hover:underline"
            >
              LinkedIn Profile
            </a>
          </p>

          <p className="text-sm">
            💻 <a 
              href="https://github.com/your-github"
              target="_blank" 
              className="text-cyan-300 hover:underline"
            >
              GitHub Profile
            </a>
          </p>

          <a 
            href="/Hritik_Mune_Resume.pdf"
            download
            className="inline-block mt-3 px-4 py-2 rounded-xl bg-gradient-to-r
                       from-violet-500 to-cyan-400 font-semibold text-black shadow-lg"
          >
            ⬇️ Download Resume
          </a>
        </div>

        {/* RIGHT BOX — CONTACT FORM (FAKE SUBMIT) */}
        <form 
          onSubmit={(e) => { 
            e.preventDefault(); 
            alert("Message sent! I will reply soon."); 
          }} 
          className="card tilt space-y-4"
        >
          <h2 className="text-xl font-semibold">Send me a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-slate-900/60 border border-slate-700 rounded-lg 
                       px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full bg-slate-900/60 border border-slate-700 rounded-lg 
                       px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-cyan-400"
          />

          <textarea
            placeholder="Your Message"
            required
            className="w-full bg-slate-900/60 border border-slate-700 rounded-lg 
                       px-3 py-2 text-sm min-h-[120px] outline-none focus:ring-1
                       focus:ring-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 
                       text-black font-semibold shadow hover:opacity-90"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
}
