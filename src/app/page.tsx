"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
  FiMoon,
  FiSend,
  FiSun
} from "react-icons/fi";
import {
  achievements,
  certifications,
  experience,
  heroMetrics,
  identityCards,
  profile,
  projects,
  skillCloud,
  skills,
  socials
} from "@/data/portfolio";

const navItems = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyanbrand">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{text}</p>
    </motion.div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = stored ? stored === "dark" : prefersDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    window.localStorage.setItem("theme", nextDark ? "dark" : "light");
  }

  return (
    <button
      aria-label="Toggle color theme"
      onClick={toggleTheme}
      className="grid size-10 place-items-center rounded-full border border-slate-300/70 bg-white/70 text-slate-800 shadow-sm backdrop-blur transition hover:border-cyanbrand dark:border-white/15 dark:bg-white/10 dark:text-white"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink">
            AK
          </span>
          <span className="hidden font-display text-sm font-semibold text-slate-950 dark:text-white sm:block">
            Abhishek Kumar
          </span>
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-ink"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.resumeUrl}
            className="hidden items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-cyanbrand hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyanbrand sm:flex"
          >
            <FiDownload /> Resume
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-ai-grid bg-[size:44px_44px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <motion.div
        animate={{ x: [0, 70, -20, 0], y: [0, -40, 50, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyanbrand/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 40, 0], y: [0, 60, -20, 0], scale: [1, 0.95, 1.12, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[12%] top-[26%] h-80 w-80 rounded-full bg-mintbrand/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-dashed border-cyanbrand/25"
      />
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">
      <AnimatedBackground />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanbrand/30 bg-cyanbrand/10 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur dark:text-cyan-100">
            <span className="size-2 rounded-full bg-mintbrand shadow-[0_0_18px_rgba(69,245,168,.9)]" />
            Available for AI/ML, Data, and GenAI roles
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Building intelligent systems from data, models, and LLM workflows.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            {profile.role}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            {profile.headline}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyanbrand px-6 py-3 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-mintbrand"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-bold text-slate-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyanbrand dark:border-white/15 dark:bg-white/10 dark:text-white"
            >
              <FiMail /> Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyanbrand hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
              >
                <item.icon /> {item.name}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/20 bg-white/70 p-5 shadow-soft backdrop-blur-2xl dark:bg-white/10">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 p-5 text-white shadow-glow dark:border-white/10">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-cyan-200">AI Engineer Console</p>
                  <h2 className="font-display text-2xl font-semibold">{profile.name}</h2>
                </div>
                <span className="rounded-full bg-mintbrand/15 px-3 py-1 text-xs font-semibold text-mintbrand">
                  Online
                </span>
              </div>
              <div className="space-y-3">
                {[
                  "Analyzing ERP data across 150+ schools",
                  "Training ML and deep learning models",
                  "Designing LangChain and agentic AI workflows",
                  "Shipping dashboards, APIs, and GenAI prototypes"
                ].map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + index * 0.12 }}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyanbrand/15 text-xs font-bold text-cyanbrand">
                      0{index + 1}
                    </span>
                    <span className="text-sm text-slate-200">{line}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <p className="font-display text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-300">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <Image
                  src="/ai-systems-preview.png"
                  alt="AI systems dashboard preview with neural network and analytics panels"
                  width={1100}
                  height={620}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A practical AI builder with a data analyst's discipline."
          text="I like working at the point where data, ML, and real business problems meet - I've done analytics work and built AI products, so I can talk to both sides."
        />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06] sm:p-8"
          >
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              I&apos;m an AI/ML Engineer and Data Analyst. I enjoy taking messy datasets and turning them into something useful - dashboards, models, or automated pipelines that actually solve a problem instead of just looking good in a report.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              My work so far has covered ERP analytics, dashboard building, process automation, a production AI deployment, NLP projects, and multi-agent systems. I like the mix - one day it&apos;s cleaning up messy Excel/ERP data, the next it&apos;s debugging why an LLM agent won&apos;t stop looping.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Right now I&apos;m going deeper into agentic AI and LLM applications, and trying to get better at building things that hold up outside a notebook.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              I am passionate about building scalable AI systems that combine data, automation, and
              intelligent decision-making to create measurable business impact.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {identityCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
              >
                <card.icon className="mb-4 text-3xl text-cyanbrand" />
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and technologies I work with."
          text="Mostly Python-based - covers building models, analyzing data, and shipping small prototypes end to end."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.group}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-2xl bg-cyanbrand/15 text-2xl text-cyanbrand">
                  <group.icon />
                </span>
                <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                  {group.group}
                </h3>
              </div>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-cyanbrand via-mintbrand to-coralbrand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {skillCloud.map((skill) => (
            <motion.span
              key={skill.name}
              whileHover={{ y: -3 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200"
            >
              <skill.icon className="text-cyanbrand" /> {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked so far."
          text="Currently doing ERP analytics full-time, with a couple of data science internships before that."
          />
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyanbrand via-mintbrand to-transparent md:left-1/2" />
          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={item.company}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${index % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"}`}
              >
                <span
                  className={`absolute left-1.5 top-7 size-5 rounded-full border-4 border-white shadow-glow dark:border-ink ${
                    index % 2 === 0
                      ? "bg-cyanbrand md:left-auto md:right-[-10px]"
                      : "bg-mintbrand md:left-[-10px]"
                  }`}
                />
                <div className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-cyanbrand/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-200">
                      {item.type}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                    {item.company}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const featured = useMemo(() => projects.slice(0, 5), []);

  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="A few projects I've built."
          text="For each one - the problem I was solving, what I built, the stack I used, and what came out of it."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <div className="group h-full rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-cyanbrand/60 dark:border-white/10 dark:bg-white/[0.06]">
                <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="rounded-full bg-mintbrand/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-mintbrand">
                      {project.label}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold text-slate-950 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-cyanbrand hover:text-cyan-700 dark:border-white/10 dark:text-slate-200"
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.demo}
                      aria-label={`${project.title} live demo`}
                      className="grid size-10 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-cyanbrand hover:text-ink dark:bg-white dark:text-ink"
                    >
                      <FiArrowUpRight />
                    </a>
                  </div>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Problem</p>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Solution</p>
                    <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{project.solution}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Key Features</p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="rounded-2xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-cyanbrand/25 bg-cyanbrand/10 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-200">
                    Impact
                  </p>
                  <p className="mt-2 leading-7 text-slate-700 dark:text-slate-200">{project.impact}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications and courses I've completed."
          text="Covers AI foundations, GenAI, Data Science, Python, Excel, and a bit of industrial IoT."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-3xl border border-slate-200 bg-white/75 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="mb-5 inline-flex rounded-full bg-coralbrand/15 px-3 py-1 text-xs font-bold text-red-600 dark:text-coralbrand">
                {cert.badge}
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">{cert.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{cert.issuer}</p>
              <p className="mt-4 text-sm font-semibold text-cyan-700 dark:text-cyan-200">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GithubSection() {
  return (
    <section id="github" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-glow dark:border-white/10 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-cyanbrand">
                GitHub
              </p>
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                Most of my work lives here.
              </h2>
              <p className="mt-4 leading-7 text-slate-300">
                A few of my pinned repos - document verification, a multi-agent research assistant, a LangChain chatbot, NLP classification, and time-series forecasting. Check the READMEs for setup and details.
              </p>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-cyanbrand"
              >
                <FiGithub /> Visit GitHub
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {projects.map((project) => (
                <div key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <p className="font-semibold text-white">{project.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{project.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="A quick look at what I've done."
          text="Some highlights from my work and resume, in one place."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-3xl border border-slate-200 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
            >
              <span className="mb-4 grid size-10 place-items-center rounded-full bg-cyanbrand/15 font-display text-lg font-semibold text-cyan-700 dark:text-cyanbrand">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-200">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Open to AI, data, and GenAI opportunities."
          text="Reach out if you're hiring, want to collaborate, or just want to talk about a project."
        />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
             Let&apos;s build something useful.
            </h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              I&apos;m looking at AI/ML engineering, data analytics, LLM application development, and agentic AI roles - anywhere I can actually ship things, not just prototype them.
            </p>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 text-slate-700 transition hover:bg-cyanbrand/15 dark:bg-white/10 dark:text-slate-200">
                <FiMail className="text-cyanbrand" /> {profile.email}
              </a>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-100 p-4 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <FiMapPin className="text-cyanbrand" /> {profile.location}
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyanbrand dark:border-white/10 dark:text-slate-200"
                >
                  <item.icon /> {item.name}
                </a>
              ))}
            </div>
          </div>
          <form
            action={`mailto:${profile.email}`}
            method="post"
            encType="text/plain"
            className="rounded-3xl border border-slate-200 bg-white/75 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/[0.06]"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
                <input name="name" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyanbrand dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </label>
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                Email
                <input type="email" name="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyanbrand dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </label>
            </div>
            <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
              <textarea name="message" required rows={6} className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyanbrand dark:border-white/10 dark:bg-white/10 dark:text-white" />
            </label>
            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyanbrand hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-cyanbrand sm:w-auto">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-4 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400 sm:px-6 lg:px-8">
      <p>(c) {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
    </footer>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <main className="min-h-screen bg-paper text-slate-950 transition-colors dark:bg-ink dark:text-white">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-cyanbrand via-mintbrand to-coralbrand"
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubSection />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
