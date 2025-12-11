import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Meteors } from '@/components/ui/meteors';
import { Shield, ArrowRight, Server, Lock, Activity } from "lucide-react";
import { LayoutDashboard } from 'lucide-react';
import { Award, Target } from "lucide-react";
import { Cloud, Zap, UploadCloud, FileSearch, ShieldCheck, CheckCircle2 } from "lucide-react";
import { AlertTriangle, Globe, Bug, ShieldAlert, AlertCircle } from "lucide-react";



function FeatureCard({ icon, title, description, color, techLabel }) {
  // Color maps for dynamic styling
  const colorStyles = {
    blue: {
      bg: "bg-blue-500/10",
      text: "text-blue-400",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-500/20",
      iconBg: "group-hover:bg-blue-500"
    },
    emerald: {
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
      border: "group-hover:border-emerald-500/50",
      glow: "group-hover:shadow-emerald-500/20",
      iconBg: "group-hover:bg-emerald-500"
    },
    purple: {
      bg: "bg-purple-500/10",
      text: "text-purple-400",
      border: "group-hover:border-purple-500/50",
      glow: "group-hover:shadow-purple-500/20",
      iconBg: "group-hover:bg-purple-500"
    },
    orange: {
      bg: "bg-orange-500/10",
      text: "text-orange-400",
      border: "group-hover:border-orange-500/50",
      glow: "group-hover:shadow-orange-500/20",
      iconBg: "group-hover:bg-orange-500"
    }
  };

  const styles = colorStyles[color];

  return (
    <div className={`group relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 transition-all duration-300 hover:bg-slate-900/80 hover:-translate-y-1 shadow-lg ${styles.border} ${styles.glow}`}>
      
      {/* Decorative Tech Label (Top Right) */}
      <div className="absolute top-6 right-6">
        <span className="text-[10px] font-mono text-white uppercase tracking-widest border border-slate-800 px-2 py-1 rounded bg-slate-950/50">
          {techLabel}
        </span>
      </div>

      {/* Icon Container */}
      <div className={`w-14 h-14 rounded-xl ${styles.bg} border border-white/5 flex items-center justify-center ${styles.text} mb-6 transition-all duration-300 ${styles.iconBg} group-hover:text-white`}>
        {/* Clone element to force size if needed, or just render */}
        <div className="w-7 h-7">
            {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
        {description}
      </p>

      {/* Decorative Corner Lines (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
         <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      </div>
    </div>
  );
}

// --- Icons (Inline SVGs) ---



const ActivityIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="7" height="9" x="3" y="3" rx="1" />
    <rect width="7" height="5" x="14" y="3" rx="1" />
    <rect width="7" height="9" x="14" y="12" rx="1" />
    <rect width="7" height="5" x="3" y="16" rx="1" />
  </svg>
);


function StatCard({ label, value, suffix, subtext, chartVisual, highlight = false } ) {
  return (
    <div className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 
      ${highlight 
        ? 'bg-gradient-to-b from-blue-900/20 to-slate-900/60 border-blue-500/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)]' 
        : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
      }`}
    >
      {/* Top Label */}
      <div className="flex justify-between items-start mb-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{label}</p>
        {/* Simple decorative icon based on card state */}
        <div className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-green-400 shadow-[0_0_8px_#4ade80]' : 'bg-slate-600'}`}></div>
      </div>

      {/* Big Number */}
      <div className="flex items-baseline gap-1">
        <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${highlight 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200' 
          : 'text-white'
        }`}>
          {value}
        </span>
        <span className={`text-lg font-medium ${highlight ? 'text-blue-300' : 'text-slate-400'}`}>
          {suffix}
        </span>
      </div>

      {/* Visual Indicator (Chart/Bar) */}
      <div className="py-2">
        {chartVisual}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-400 leading-relaxed mt-2 border-t border-white/5 pt-3">
        {subtext}
      </p>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

function Card({ icon, title, description}) {
  return (
    <div className="group relative h-full">
      {/* Hover Gradient Border Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-slate-800/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
      
      <div className="relative h-full bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80 hover:-translate-y-1">
        {/* Icon Box */}
        <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:text-white group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>
      </div>
    </div>
  );
}

// --- Icons (SVGs) ---

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ComplianceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m9 15 2 2 4-4" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default function EmailSecurityGateway() {

      const [isClient, setIsClient] = useState(false);
  return (
    <>
      <Head>
        <title>Advanced email security gateway by SpamCloud to stop Spam mail </title>
        <meta
          name="description"
          content="Strengthen your network security stack with SpamCloud's email security gateway System and stop Ransomware mail attacks with our email security solutions"
        />
        <link rel="canonical" href="https://spamcloud/services/email-security-gateway" />
      </Head>
    <section className="relative w-full min-h-[100vh] md:min-h-[600px] bg-slate-950 text-white overflow-hidden flex flex-col justify-center pt-20 md:pt-0">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* 1. Base Background: Deep Dark Blue to match the 'SecuServe' dark aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950"></div>

      {/* 2. Central Glow: Using your Blue color to create the ambient light behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* 3. Vertical Grid Lines: Subtle blue lines to match the reference */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px)] bg-[size:6rem]"></div>
      
      {/* 4. Meteors */}
      <Meteors number={20} />

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0">
        
        {/* ALIGNMENT FIX: 'items-center' aligns the Headline (Left) and Content (Right) perfectly */}
        <div className="grid lg:grid-cols-12 gap-12 w-full lg:gap-8 items-center ">
          
          {/* LEFT COLUMN: Headline & Shield */}
          <div className="lg:col-span-7 flex flex-col mt-0  relative">
            
            {/* The Floating Shield Icon (Behind text) */}
            <Shield className="absolute -top-10 -left-10 w-32 h-32 text-blue-500/10 rotate-12 -z-10" strokeWidth={1} />
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-left tracking-tight leading-tight text-white">
              Secure Your Email Gateway 
              <span className="block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                With SpamCloud's{' '}Email Security Solutions
              </span>
            </h1>

            {/* "Designed for..." Line with Blue Accent */}
            <div className="flex items-center gap-4 mt-8 md:mt-12 pl-1">
              <div className="h-[1px] w-12 bg-blue-500"></div>
              <p className="text-blue-200 font-medium uppercase tracking-widest text-xs">
                Designed for Server Protection
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Description, Buttons, Stats */}
          <div className="lg:col-span-5  mb-1 flex flex-col lg:ml-8 mt-8 lg:mt-4">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 font-light">
              Your mail server deserves real-time defense to block spam, phishing, spoofing, malware & targeted attacks before they reach your inbox.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
               <Link href={'/contact'} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2">
                 Get Protected <ArrowRight size={18} />
               </Link>
               <Link href={'/contact'} className="w-full sm:w-auto text-slate-300 hover:text-white px-6 py-3 font-medium transition-colors text-center">
                 Talk to a solution Specialist
               </Link>
            </div>

            {/* Stats Section: Matches the 4.9L / 20k+ look from image */}
            <div className="grid grid-cols-2 gap-8 border-t border-blue-500/20 pt-8">
             
              
            </div>
          </div>

        </div>
      </div>

      {/* --- BOTTOM HORIZON CURVE --- */}
      {/* This recreates the blue curved line and glow at the bottom of the SecuServe image */}
      <div className="absolute bottom-0 w-full h-[300px] overflow-hidden z-20 pointer-events-none">
          
          {/* The Curved Line */}
          {/* bg-gradient-to-b from-blue-600/10 creates the fade below the line */}
          {/* border-blue-400/50 creates the sharp line itself */}
          {/* shadow creates the glow upwards */}
          <div className="absolute -bottom-[800px] left-1/2 -translate-x-1/2 w-[2000px] h-[1000px] border-t border-blue-400/50 rounded-[100%] bg-gradient-to-b from-blue-600/10 to-transparent shadow-[0_-10px_50px_rgba(37,99,235,0.3)]"></div>

          {/* Bottom Labels */}
          <div className="absolute bottom-4 sm:bottom-6 w-full max-w-7xl mx-auto left-0 right-0 px-4 sm:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-4 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-blue-300/40 uppercase">
             <span className="flex items-center gap-1 sm:gap-2"><Activity size={10} className="w-3 h-3 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">Malware Detection</span></span>
             <span className="hidden sm:flex items-center gap-1 sm:gap-2"><Server size={10} className="w-3 h-3 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">Server Integrity</span></span>
             <span className="flex items-center gap-1 sm:gap-2"><Lock size={10} className="w-3 h-3 sm:w-auto sm:h-auto" /> <span className="whitespace-nowrap">End-To-End Encryption</span></span>
          </div>
      </div>

    </section>
 <section className="w-full bg-white py-16 lg:py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Container: Flex on Desktop (Side by Side), Column on Mobile */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20">
          
          {/* LEFT SIDE: Typography Content */}
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Email Security Built for {" "}
              {/* Highlighted Blue Text */}
              <span className="text-blue-600">
                Modern Businesses
              </span> 
              
              {/* Continuing the bold flow like the image */}
              
            </h2>

            {/* Sub-text paragraph (Styled like the "See announcements" link in reference) */}
            <p className="mt-6 text-lg text-slate-600 font-medium max-w-2xl">
Our multi-tenant platform is engineered for MSPs and enterprises that require scalability, policy control, and deep visibility            </p>
          </div>

        <Link href={'/contact'}>
            <button className="group px-8 py-4 rounded-full bg-[#0f172a] hover:bg-blue-600 text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-xl hover:shadow-blue-600/20 flex items-center gap-3">
              Talk to a Cybersecurity Specialist
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>

        </div>
      </div>
    </section>
      <main className="min-h-screen bg-[#020617] text-white">
      

 <section className="relative w-full py-20 lg:py-14 bg-[#011333] overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* FIX 1: Changed items-start to items-stretch so both columns are equal height */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
          
          {/* LEFT COLUMN: Content */}
          <div className="flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
              <AlertCircle size={14} />
              The Security Gap
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Over 94% of cyber-attacks start from <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">email</span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              It enters quietly through blind spots where your firewall and legacy tools can’t catch them.
            </p>

            {/* Interactive Threat Tabs */}
            <div className="flex flex-col gap-6">
              
              {/* Row 1 */}
              <div className="group relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-all duration-300">
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-blue-500 group-hover:h-full transition-all duration-500 shadow-[0_0_20px_2px_rgba(59,130,246,0.6)]"></div>
                <div className="flex items-start gap-5">
                   <div className="text-slate-700 font-mono text-xl font-bold group-hover:text-blue-500 transition-colors pt-1">01</div>
                   <div>
                     <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">Phishing</h3>
                        <ShieldAlert className="w-5 h-5 text-slate-600 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        Attackers impersonate legitimate sources to trick people into revealing passwords, OTPs and sensitive information.
                     </p>
                   </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="group relative pl-8 border-l-2 border-slate-800 hover:border-cyan-500 transition-all duration-300">
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-cyan-500 group-hover:h-full transition-all duration-500 shadow-[0_0_20px_2px_rgba(6,182,212,0.6)]"></div>
                <div className="flex items-start gap-5">
                   <div className="text-slate-700 font-mono text-xl font-bold group-hover:text-cyan-500 transition-colors pt-1">02</div>
                   <div>
                     <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">Spoofed Domains</h3>
                        <Globe className="w-5 h-5 text-slate-600 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        Fake websites or email addresses created to mimic a legitimate one to bypass standard filters.
                     </p>
                   </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="group relative pl-8 border-l-2 border-slate-800 hover:border-red-500 transition-all duration-300">
                <div className="absolute left-[-2px] top-0 h-0 w-[2px] bg-red-500 group-hover:h-full transition-all duration-500 shadow-[0_0_20px_2px_rgba(239,68,68,0.6)]"></div>
                <div className="flex items-start gap-5">
                   <div className="text-slate-700 font-mono text-xl font-bold group-hover:text-red-500 transition-colors pt-1">03</div>
                   <div>
                     <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-slate-300 group-hover:text-white transition-colors">Malware Infection</h3>
                        <Bug className="w-5 h-5 text-slate-600 group-hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 duration-300" />
                     </div>
                     <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                        A cyberattack where malicious attachments execute unauthorized actions on the victim's system.
                     </p>
                   </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Glass Card */}
          {/* FIX 2: Added 'lg:h-auto' to ensure it stretches with the grid item */}
          <div className="relative mt-8 lg:mt-0 w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl blur-2xl opacity-20 transform rotate-6 scale-90"></div>
            
            {/* FIX 3: Added 'h-full' and 'flex-col justify-between' to fill space evenly */}
            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl p-8 lg:p-12">
              
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
              
              {/* Content Group 1: Header */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 bg-red-500/10 rounded-lg animate-pulse">
                        <AlertTriangle className="text-red-400 w-6 h-6" />
                    </div>
                    <span className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase">Critical Insight</span>
                </div>
              
                {/* Content Group 2: The Stat */}
                <div className="mb-8">
                    <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-4">
                        82%
                    </h3>
                    <p className="text-xl md:text-2xl text-white font-medium leading-snug">
                        mail attacks start with undetected small intrusions.
                    </p>

                    <div className="mt-6 w-full">
                      <div className="flex items-end gap-2 h-20 sm:h-24 md:h-28">
                        <div className="flex-1 h-[35%] rounded-t-full bg-gradient-to-t from-blue-950/80 to-blue-500/80"></div>
                        <div className="flex-1 h-[55%] rounded-t-full bg-gradient-to-t from-blue-950/80 to-blue-400/90"></div>
                        <div className="flex-1 h-[82%] rounded-t-full bg-gradient-to-t from-blue-950/80 to-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.7)]"></div>
                        <div className="flex-1 h-[45%] rounded-t-full bg-gradient-to-t from-blue-950/80 to-slate-300/80 opacity-70"></div>
                      </div>
                      <div className="mt-3 flex justify-between text-[10px] sm:text-xs text-slate-400">
                        <span>Phishing</span>
                        <span>Spoofed</span>
                        <span className="text-emerald-400 font-semibold">Mail attacks</span>
                        <span>Others</span>
                      </div>
                    </div>
                </div>
              </div>

              {/* Content Group 3: Footer/Quote */}
              <div className="border-t border-white/10 pt-8 mt-auto">
                <p className="text-slate-400 text-sm italic leading-relaxed">
                  "These threats never show up in your main logs, silently bypassing traditional firewalls and legacy gateways."
                </p>
              </div>

              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
 <section className="w-full py-14 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex justify-center items-center px-4 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* --- MAIN CONTAINER --- */}
      <div className="relative z-10 max-w-6xl w-full rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl ring-1 ring-white/10">
        
        {/* --- LEFT PANEL (Dark Theme - Brand Identity) --- */}
        <div className="w-full lg:w-[40%] p-10 lg:p-14 flex flex-col justify-between bg-slate-950 relative overflow-hidden">
          
          {/* Subtle Grid Background for Left Panel */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Protect Your <br/> 
              <span className="text-blue-500">Business</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              A complete email security solution built to reduce email threat volume by up to <span className="text-white font-semibold">98%</span>.
            </p>

            {/* Feature 5 (Trust Badge) */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg mb-8">
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-900/20">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-white text-sm font-bold">Integrated Enforcement</p>
                <p className="text-slate-500 text-xs font-medium mt-0.5">DKIM, DMARC & SPF Protocols</p>
              </div>
            </div>
          </div>

          {/* CTA Link */}
          <div className="relative z-10">
            <Link href={'/contact'} className="group flex items-center gap-2 text-white font-semibold text-sm bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full w-fit transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
              Get Protected Now 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* --- RIGHT PANEL (White Theme - Feature Grid) --- */}
        <div className="w-full lg:w-[60%] bg-white grid grid-cols-1 sm:grid-cols-2 border border-slate-400">
          
          {/* Card 1: Cloud Filtering (Blue) */}
          <div className="group relative h-[220px] p-4 border-b sm:border-r border-slate-100 hover:bg-slate-50 transition-colors flex flex-col justify-between ">
             <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cloud size={28} />
             </div>
             <div>
               <h3 className="text-slate-900 font-bold text-xl mb-2">Cloud Filtering</h3>
               <p className="text-slate-500 text-sm leading-relaxed">No hardware required. Filter threats in the cloud before they hit your network.</p>
             </div>
          </div>

          {/* Card 2: Real-time Updates (Emerald) */}
          <div className="group relative h-[220px] p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors flex flex-col justify-between ">
             <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap size={28} />
             </div>
             <div>
               <h3 className="text-slate-900 font-bold text-xl mb-2">Real-time Updates</h3>
               <p className="text-slate-500 text-sm leading-relaxed">Global intel feeds protect against zero-day attacks the moment they emerge.</p>
             </div>
          </div>

          {/* Card 3: Outbound Scanning (Purple) */}
          <div className="group relative h-[180px] p-4 gap-6 sm:border-r border-slate-100 transition-colors flex flex-col justify-between ">
             <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <UploadCloud size={28} />
             </div>
             <div>
               <h3 className="text-slate-900 font-bold text-xl mb-2">Outbound Scanning</h3>
               <p className="text-slate-500 text-sm leading-relaxed">Prevent IP blacklisting by detecting compromised accounts instantly.</p>
             </div>
          </div>

          {/* Card 4: Deep Sandboxing (Orange) */}
          <div className="group relative h-[180px] p-2  transition-colors flex flex-col justify-between  ">
             <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileSearch size={28} />
             </div>
             <div>
               <h3 className="text-slate-900 font-bold text-xl mb-2">Deep Sandboxing</h3>
               <p className="text-slate-500 text-sm leading-relaxed">Files are detonated in a safe environment to find hidden malware.</p>
             </div>
          </div>

        </div>

      </div>
    </section>
 <section className="relative w-full py-14 bg-slate-950 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. World Map / Network Texture (Abstract) */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/connected.png')] pointer-events-none"></div>
      
      {/* 2. Central Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADLINE --- */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Email Gateway Reduces Email Threat Volume By  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">98%</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Stopping malicious attacks in the cloud before they ever reach your server infrastructure.
          </p>
        </div>

        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* STAT CARD 1: Experience */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] text-center">
            {/* Top Highlight Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="mx-auto w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Award size={28} />
            </div>
            
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              17<span className="text-blue-500 text-3xl align-top">+</span>
            </div>
            <p className="text-lg font-semibold text-blue-100">Years Experience</p>
            <p className="text-sm text-slate-500 mt-2">Leading Indian email security</p>
          </div>

          {/* STAT CARD 2: Accuracy */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="mx-auto w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              98<span className="text-emerald-500 text-3xl align-top">%</span>
            </div>
            <p className="text-lg font-semibold text-emerald-100">Filter Accuracy</p>
            <p className="text-sm text-slate-500 mt-2">Industry-leading precision</p>
          </div>

          {/* STAT CARD 3: Uptime */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/50 border border-white/10 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="mx-auto w-14 h-14 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
              <Server size={28} />
            </div>
            
            <div className="text-5xl font-bold text-white mb-2 tracking-tight">
              100<span className="text-purple-500 text-3xl align-top">%</span>
            </div>
            <p className="text-lg font-semibold text-purple-100">Uptime SLA</p>
            <p className="text-sm text-slate-500 mt-2">Enterprise-grade reliability options</p>
          </div>

        </div>
      </div>
    </section>

        {/* <section className="py-16 lg:py-20 bg-[#020617]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <p className="text-blue-300 text-xs font-semibold tracking-[0.25em] uppercase mb-3">Solution</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3">
                  Protect Your Business From The Most Advanced Email Threats
                </h2>
                <p className="text-gray-300 max-w-2xl">
                  A complete email security solution built to reduce email threat volume by up to 98% before it ever
                  reaches your mail server.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="rounded-2xl bg-slate-900/60 border border-slate-700 p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Cloud-based filtering</h3>
                <p className="text-gray-300 text-sm">No hardware required; deploy fast with minimal changes to your infrastructure.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Real-time signature updates</h3>
                <p className="text-gray-300 text-sm">
                  Global intelligence ensures new spam, phishing and ransomware variants are blocked quickly.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Outbound threat scanning</h3>
                <p className="text-gray-300 text-sm">
                  Detect compromised accounts and stop risky emails leaving your organization.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Attachment sandboxing</h3>
                <p className="text-gray-300 text-sm">
                  Suspicious files run in isolated environments with deep file analysis before delivery.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col gap-2">
                <h3 className="font-semibold text-base">Integrated DKIM, DMARC and SPF</h3>
                <p className="text-gray-300 text-sm">
                  Enforce modern email authentication to block spoofing and brand abuse.
                </p>
              </div>
            </div>
          </div>
        </section> */}



 <section className="relative py-12 bg-[#020617] overflow-hidden">
      {/* --- Background Effects (Seamless transition) --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by India's <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Fast-Growing Businesses
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Built for organizations that cannot afford downtime. Our stack replaces generic protection 
            with a region-aware, high-performance security engine.
          </p>
        </div>

        {/* --- Grid Section --- */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Card 1: Blue - Spam Filtering */}
          <FeatureCard 
            icon={<ShieldIcon />}
            title="Spam Filtering Engine"
            description="Multi-layer heuristic scanning and language-based filtering specifically tuned for Indian spam patterns and regional campaigns."
            color="blue"
            techLabel="MOD-01 // HEURISTIC SCAN"
          />

          {/* Card 2: Emerald - Malware */}
          <FeatureCard 
            icon={<ActivityIcon />}
            title="Anti-Malware & Ransomware"
            description="Advanced AV engines with suspicious behavior detection in attachments and links to proactively block zero-day ransomware."
            color="emerald"
            techLabel="MOD-02 // BEHAVIOR ANALYSIS"
          />

          {/* Card 3: Purple - Auth */}
          <FeatureCard 
            icon={<LockIcon />}
            title="Authentication & Compliance"
            description="Full DKIM, DMARC, and SPF enforcement with TLS encryption for mail transport and strict policy-based outbound controls."
            color="purple"
            techLabel="MOD-03 // PROTOCOL ENFORCE"
          />

          {/* Card 4: Orange - Reporting */}
          <FeatureCard 
            icon={<DashboardIcon />}
            title="Quarantine & Reporting"
            description="Granular admin control over user policies, self-service release for quarantined mails, and clear, actionable forensics reporting."
            color="orange"
            techLabel="MOD-04 // ADMIN CONTROLS"
          />

        </div>
      </div>
    </section>

      <section className="relative pt-6 pb-0 bg-[#020617] overflow-hidden">
      {/* --- Background Effects --- */}
      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* 2. Blue Ambient Glow (Top Left) */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            DLP and Compliance
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Stop Data Leakage and Stay <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Compliant & Under Control
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
            SpamCloud's advanced Data Loss Prevention ensures sensitive information never 
            leaves your business unintentionally or maliciously. We provide dual-layer 
            protection designed for modern, real-world risks.
          </p>
        </div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          
          {/* Card 1 */}
          <Card 
            icon={<ShieldIcon />}
            title="Insider Threat Prevention"
            description="Blocks unauthorized data sharing, risky attachments, and forwarding by identifying intentional data extraction patterns in real-time."
          />

          {/* Card 2 */}
          <Card 
            icon={<ComplianceIcon />}
            title="Compliance Enforcement"
            description="Ensure BFSI, Healthcare, and Government compliance with automated policy rules that maintain security standards without slowing down workflow."
          />

          {/* Card 3 */}
          <Card 
            icon={<EyeIcon />}
            title="Modern IT Team DLP"
            description="Real-time content and attachment scanning with Block, Quarantine, or Manager Review modes. Includes full audit logs for forensics."
          />
          
        </div>

       
      </div>
    </section>

       <section className="relative py-20 lg:py-14 bg-[#020617] overflow-hidden">
      {/* --- Background Ambience --- */}
      {/* Grid Pattern (Consistent with previous section) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Bottom Right Glow */}
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live Impact Results
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ransomware moves fast. <br />
              <span className="text-slate-400">Your protection moves faster.</span>
            </h2>
          </div>

          <div className="flex shrink-0">
             <Link
                href="/contact"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
              >
                <span className="mr-2">Talk to a Solutions Consultant</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
          </div>
        </div>

        {/* --- Stats Grid (Dashboard Style) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Stat Card 1 */}
          <StatCard 
            label="Suspicious Traffic"
            value="93%"
            suffix="↓"
            subtext="Drop in suspicious email traffic."
            trend="positive" // Green/Blue indicator
            chartVisual={
              <div className="flex gap-1 h-8 items-end mt-4 opacity-50">
                <div className="w-2 bg-blue-500 h-full rounded-sm"></div>
                <div className="w-2 bg-blue-500 h-[80%] rounded-sm"></div>
                <div className="w-2 bg-blue-500 h-[50%] rounded-sm"></div>
                <div className="w-2 bg-blue-500 h-[20%] rounded-sm"></div>
                <div className="w-2 bg-blue-400 h-[10%] rounded-sm animate-pulse"></div>
              </div>
            }
          />

          {/* Stat Card 2 */}
          <StatCard 
            label="Ransomware Incidents"
            value="0"
            suffix=""
            subtext="Reported email-delivered payloads."
            trend="secure"
            highlight={true} // Special styling for the '0'
            chartVisual={
              <div className="h-8 w-full mt-4 border-b border-white/10 flex items-center">
                <div className="w-full h-[1px] bg-green-500/50 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
            }
          />

          {/* Stat Card 3 */}
          <StatCard 
            label="High-risk Intrusions"
            value="56"
            suffix="/mo"
            subtext="Average blocked intrusions."
            trend="warning" 
            chartVisual={
              // Abstract visualization of blocked dots
              <div className="flex gap-2 mt-4">
                 <span className="h-2 w-2 rounded-full bg-red-500/40"></span>
                 <span className="h-2 w-2 rounded-full bg-red-500/40"></span>
                 <span className="h-2 w-2 rounded-full bg-red-500"></span>
                 <span className="h-2 w-2 rounded-full bg-red-500/40"></span>
              </div>
            }
          />

           {/* Stat Card 4 */}
           <StatCard 
            label="Cloud Performance"
            value="40%"
            suffix="Faster"
            subtext="Native stack keeps mail responsive."
            trend="speed"
            chartVisual={
              <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 w-[85%] rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
              </div>
            }
          />

        </div>
      </div>
    </section>
      </main>
    </>
  );
}

