import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071226] text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 font-bold text-xl">
            HM
          </div>

          <div>
            <h2 className="font-bold">Hritik Mune</h2>
            <p className="text-xs text-blue-300">
              Full Stack Developer • Portfolio
            </p>
          </div>
        </div>

        <div className="hidden gap-8 font-medium md:flex">
          <a href="#education" className="hover:text-cyan-400">
            Education
          </a>
          <a href="#experience" className="hover:text-cyan-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-cyan-400">
            Projects
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3 md:px-12">
        
        {/* Introduction */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl md:col-span-2">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hritik
            </span>
            . I build thoughtful, reliable websites.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-blue-200">
            I design full-stack applications and enjoy making UIs that are
            both beautiful and fast. This portfolio demonstrates my skills,
            experience, projects, and technical journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold transition hover:scale-105"
            >
              See Projects →
            </a>

            <a
              href="/Hritik_Mune_SDE_Resume.pdf"
              download="Hritik_Mune_SDE_Resume.pdf"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl">
          <Image
            src="/Profile.jpeg"
            alt="Hritik Mune"
            width={150}
            height={150}
            priority
            className="h-32 w-32 rounded-2xl object-cover"
          />

          <h2 className="mt-6 text-xl font-bold">
            Full-Stack Developer
          </h2>

          <p className="mt-1 text-sm text-blue-300">
            Java • SQL • HTML/CSS • JS
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              Full-stack
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              DevOps
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
              UI/UX
            </span>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="mx-auto max-w-6xl px-6 py-8 md:px-12"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Education</h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="font-bold">
                Bachelor of Engineering — Electronics & Telecommunication
              </h3>
              <p className="mt-2 text-blue-300">
                YCCE — 2021 - 2025
              </p>
              <p className="mt-2 text-blue-200">
                CGPA: 7.75/10
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="font-bold">Junior College</h3>
              <p className="mt-2 text-blue-300">
                Government Technical College — 2019 - 2021
              </p>
              <p className="mt-2 text-blue-200">
                Percentage: 92.50%
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <h3 className="font-bold">Secondary Education</h3>
              <p className="mt-2 text-blue-300">
                Saraswati Vidyalaya — 2019
              </p>
              <p className="mt-2 text-blue-200">
                Percentage: 81.20%
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="mx-auto max-w-6xl px-6 py-8 md:px-12"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Experience</h2>

          <div className="mt-6 rounded-xl bg-white/5 p-6">
            <h3 className="text-xl font-bold">
              Intern — Web Developer
            </h3>

            <p className="mt-2 text-blue-300">
              Fosters Digital Services • Jan 2025 - Jun 2025
            </p>

            <p className="mt-4 text-blue-200">
              Collaborated on end-to-end web application development using
              React.js and Node.js aligned with Agile sprint cycles.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-6xl px-6 py-8 md:px-12"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-bold">Projects</h2>

          <div className="mt-6 grid gap-5 md:grid-cols-3">

            <div className="rounded-xl bg-white/5 p-6 transition hover:-translate-y-1">
              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-300">
                Web
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Solar Panel Cleaner
              </h3>

              <p className="mt-3 text-blue-200">
                IoT-enabled Arduino prototype that automates panel cleaning
                with remote monitoring.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 transition hover:-translate-y-1">
              <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
                Mobile
              </span>

              <h3 className="mt-5 text-xl font-bold">
                Attendance Manager
              </h3>

              <p className="mt-3 text-blue-200">
                Java + SQL application for recording and analyzing attendance
                with CSV export.
              </p>
            </div>

            <div className="rounded-xl bg-white/5 p-6 transition hover:-translate-y-1">
              <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
                Tool
              </span>

              <h3 className="mt-5 text-xl font-bold">
                DSA Practice
              </h3>

              <p className="mt-3 text-blue-200">
                Practice website that organizes problems by topic with
                progress tracking.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-blue-300">
        © Hritik Mune • Software Developer
        <br />
        Thanks for visiting my portfolio.
      </footer>

    </main>
  );
}