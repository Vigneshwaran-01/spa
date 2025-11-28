import React from "react";
import Head from "next/head";
import { Meteors } from "@/components/ui/meteors";
import {
  Shield,
  ArrowRight,
  AlertTriangle,
  Activity,
  Server,
  Check,
  CheckCircle ,
  Lock,
  Terminal,
  ShieldAlert,
  CheckCircle2,
  FileText,
  AlertOctagon
} from "lucide-react";
import { 
  Search,
 LayoutDashboard,
  Cpu, 
  Zap ,
  Globe
} from 'lucide-react';

import { 
  ShieldCheck, 
  Mail, 
  Headphones, 
  MapPin 
} from 'lucide-react';
  const features = [
    {
      id: "01",
      title: "IPS Firewall Core",
      desc: "Real-time ransomware and intrusion blocking at the network edge.",
      icon: Server,
      color: "bg-blue-600"
    },
    {
      id: "02",
      title: "WAF (Web App Firewall)",
      desc: "Stops injection attacks, bots and data theft at the application layer.",
      icon: Globe,
      color: "bg-indigo-600"
    },
    {
      id: "03",
      title: "Endpoint Protection",
      desc: "Isolates compromised devices instantly to prevent lateral movement.",
      icon: ShieldCheck,
      color: "bg-violet-600"
    },
    {
      id: "04",
      title: "Anti-Spam & Mail Security",
      desc: "Incoming and outgoing filtering to prevent payload delivery and abuse.",
      icon: Mail,
      color: "bg-emerald-600"
    },
    {
      id: "05",
      title: "24/7 SOC Monitoring",
      desc: "For businesses that cannot afford downtime or delayed incident response.",
      icon: Headphones,
      color: "bg-amber-600"
    },
    {
      id: "06",
      title: "Local Support & Pricing",
      desc: "Better SLAs at half the global cost, with local Indian expertise.",
      icon: MapPin,
      color: "bg-rose-600"
    }
  ];


const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/40 border border-slate-800 hover:bg-slate-800/40 transition-all duration-300 overflow-hidden">
      
      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute -inset-[100px] bg-gradient-to-r from-transparent via-blue-900/10 to-transparent blur-xl transform rotate-45" />
      </div>

      <div className="relative p-8 h-full flex flex-col">
        {/* Decorator Dots */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-800 group-hover:bg-blue-500 transition-colors" />

        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 shadow-inner group-hover:scale-110 group-hover:border-slate-700 transition-all duration-300">
          {icon}
        </div>

        <h3 className="text-lg font-bold text-slate-100 mb-3 group-hover:text-blue-200 transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
          {description}
        </p>

        {/* Bottom subtle border glow */}
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent group-hover:w-full transition-all duration-700 opacity-50" />
      </div>
    </div>
  );
};





export default function Immunify360Security() {
  return (
    <>
      <Head>
        <title>
          Advanced Intrusion Prevention System by SpamCloud to stop Ransomware mail
        </title>
        <meta
          name="description"
          content="Strengthen your network security stack with SpamCloud's Advanced Intrusion Prevention System and stop Ransomware mail attacks with our advanced intrusion protection"
        />
        <link
          rel="canonical"
          href="https://spamcloud.in/services/immunify360-security"
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* HERO SECTION */}
<section className="relative w-full min-h-screen overflow-hidden bg-[#020617] text-white selection:bg-blue-500/30 font-sans flex items-center justify-center">
      
      {/* --- Background Elements --- */}
      {/* Deep Violet Glow */}
      <div className="absolute top-[-20%] left-[20%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Texture */}
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] lg:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      {/* --- Main Container --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full py-20 lg:py-0">
        
        {/* ==========================================
            LEFT COLUMN: Text & Messaging
            Aligned left on desktop, center on mobile
           ========================================== */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-20">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/20 text-blue-200 text-xs font-medium tracking-wide w-fit mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Immunify360 Active • Email Gateway
          </div>

          <h1 className="text-5xl lg:text-left  sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6 text-white">
            Stop Ransomware <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100 drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]">
              At The Door.
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 lg:border-l-2 lg:border-slate-800 lg:pl-6">
            Your inbox is the front door. We install a <span className="text-white font-semibold">military-grade prism</span> that filters malicious payloads before they ever reach your employees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full space-y-2 ">
  <button className="flex-1 group flex items-center justify-center gap-2 
    text-white font-semibold text-sm bg-blue-600 hover:bg-blue-500 
    px-6 py-4 h-14 rounded-full transition-all 
    shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
    Protect My Inbox
    <ArrowRight className="w-4 h-5 transition-transform group-hover:translate-x-1" />
  </button>

   <button className="flex-2 flex items-center justify-center 
    h-14 px-6 text-slate-300 border border-slate-800 
    hover:border-slate-600 rounded-full hover:bg-slate-900/50 
    backdrop-blur-sm transition-all">
    Live Demo
  </button>
</div>

        </div>

        {/* ==========================================
            RIGHT COLUMN: The Animation Stage
            Strictly centered within the right column
           ========================================== */}
        <div className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center perspective-[1200px] mt-10 lg:mt-0">
          
          {/* THE STAGE: A defined width container centered in the column */}
          <div className="relative w-[320px] sm:w-[500px] h-[500px] flex items-center justify-center">

            {/* 1. SECURE INBOX (Left side of Stage) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 animate-float-slow">
              <div className="relative w-32 sm:w-40 h-40 sm:h-48 bg-gradient-to-br from-slate-900 to-[#0B0F1A] border border-slate-700/50 rounded-2xl flex flex-col items-center justify-center shadow-2xl backdrop-blur-xl group">
                <div className="absolute top-[-1px] w-16 sm:w-20 h-1 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] rounded-b-lg" />
                
                <div className="p-3 sm:p-4 bg-slate-800/50 rounded-full border border-slate-700 mb-3">
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <h3 className="text-white font-semibold text-xs sm:text-sm">Inbox</h3>
                <p className="text-emerald-400/60 text-[10px] mt-1 font-mono">SECURE</p>

                {/* Papers Effect */}
                <div className="absolute -z-10 bottom-2 w-[90%] h-full bg-slate-800/30 rounded-2xl rotate-3" />
              </div>
            </div>

            {/* 2. THE PRISM (Center of Stage) */}
            <div className="absolute left-1/2 -translate-x-1/2 h-[400px] w-[4px] z-30 flex flex-col items-center justify-center">
              {/* Beam */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-80 shadow-[0_0_50px_rgba(59,130,246,0.6)]" />
              {/* Core Line */}
              <div className="absolute w-[2px] h-full bg-white opacity-50" />
              
              {/* Scanner Node */}
              <div className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-[#020617] border border-blue-500 rounded-xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)] z-40">
                <Shield className="w-5 h-5 text-white -rotate-45 fill-blue-900" />
              </div>
              
              {/* Laser Scan */}
              <div className="absolute w-[200px] sm:w-[300px] h-[2px] bg-blue-400/50  blur-sm animate-scan" />
            </div>

            {/* 3. TRAFFIC (Right side of Stage) */}
            
            {/* Safe Email (Passing) */}
            <div className="absolute top-[38%] right-0 animate-email-pass z-10 flex items-center">
               <div className="relative w-10 h-10 bg-[#0f172a] border border-emerald-500/40 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.2)] text-emerald-400">
                 <Mail className="w-5 h-5" />
               </div>
            </div>

            {/* Ransomware (Blocked) */}
            <div className="absolute top-[28%] right-0 animate-threat-block z-40 flex items-center gap-2">
               <div className="relative w-10 h-10 bg-[#1a0505] border border-rose-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.5)] text-rose-500">
                 <AlertOctagon className="w-5 h-5" />
               </div>
               <span className="hidden sm:block text-[10px] font-mono text-rose-500 bg-rose-950/80 px-1 rounded opacity-0 animate-fade-in-out">BLOCKED</span>
            </div>

            {/* Impact Flash */}
            <div className="absolute left-1/2 top-[28%] -translate-x-1/2 w-16 h-16 bg-rose-500/30 rounded-full blur-xl animate-impact opacity-0 pointer-events-none" />

          </div>
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @keyframes scan {
          0%, 100% { top: 10%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(-10px); }
        }
        @keyframes threat-block {
          0% { right: -10%; opacity: 0; transform: scale(0.9); }
          10% { opacity: 1; }
          40% { right: 42%; opacity: 1; transform: scale(1); }
          50% { right: 50%; opacity: 0; transform: scale(1.5); filter: blur(4px); }
          100% { right: 50%; opacity: 0; }
        }
        @keyframes email-pass {
          0% { right: -10%; opacity: 0; transform: scale(0.9); }
          10% { opacity: 1; }
          45% { right: 50%; transform: scale(1); filter: brightness(1.5); }
          80% { right: 85%; opacity: 1; transform: scale(0.5) rotate(-10deg); }
          85% { right: 88%; opacity: 0; }
          100% { right: 88%; opacity: 0; }
        }
        @keyframes impact {
          0%, 45% { opacity: 0; transform: scale(0.2); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes fade-in-out {
          0%, 40% { opacity: 0; }
          45% { opacity: 1; }
          55% { opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-scan { animation: scan 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-threat-block { animation: threat-block 4s cubic-bezier(0.25, 1, 0.5, 1) infinite; }
        .animate-email-pass { animation: email-pass 4s linear infinite 1s; }
        .animate-impact { animation: impact 4s linear infinite; }
        .animate-fade-in-out { animation: fade-in-out 4s linear infinite; }
      `}</style>
    </section>

        {/* PROBLEM SECTION */}
        <section className="relative w-full py-20 bg-[#020617]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                <AlertTriangle size={14} />
                Ransomware Risk
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Ransomware Doesn't Attack Loudly
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                It enters quietly through blind spots firewalls ignore.
              </p>

              <ul className="space-y-4 text-slate-300 text-sm">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>Traditional firewalls miss zero-day attacks</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>Basic antivirus can&apos;t stop AI-generated malware</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>Email gateways fail against phishing-triggered payloads</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>No visibility into SQL injections, brute force, botnets</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                  <span>
                    Slow response leads to data loss, downtime, and extortion
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 mt-6 lg:mt-0">
              <div className="relative p-8 rounded-3xl bg-slate-900/70 border border-slate-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-blue-500/5 to-transparent opacity-80" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-red-300 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4" /> Critical Insight
                  </p>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-6xl font-bold text-white">82%</span>
                  </div>
                  <p className="text-lg text-slate-100 font-medium">
                    of ransomware attacks start with undetected small intrusions.
                  </p>
                  <p className="mt-6 text-sm text-slate-400 italic">
                    These intrusions rarely show up in basic logs and silently
                    bypass traditional firewalls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIGHLIGHT / TRUST SECTION */}
      <section className="w-full bg-white py-24 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="max-w-2xl flex flex-col items-start text-left">
            {/* Badge */}
            <span className="inline-block py-1 px-3 rounded bg-blue-50 text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-6">
              Trusted in India
            </span>
            
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
              Trusted by India's leading <br className="hidden lg:block" />
              IT companies & enterprises.
            </h2>
            
            {/* Description */}
            <p className="text-lg text-slate-500 leading-relaxed">
              SpamCloud filters billions of emails every month, protecting
              teams against evolving phishing kits, account compromise attempts
              and compliance risks with <span className="font-medium text-slate-900">low-latency Indian routing.</span>
            </p>
          </div>

          {/* Right Action Area */}
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto min-w-max">
            
            {/* Primary Button */}
            <button className="group px-8 py-4 rounded-full bg-[#0f172a] hover:bg-blue-600 text-white text-sm font-bold tracking-wide transition-all duration-300 shadow-xl hover:shadow-blue-600/20 flex items-center gap-3">
              Talk to a Cybersecurity Specialist
              <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </button>
            
          
          </div>

        </div>
      </div>
    </section>

        {/* SOLUTION SECTION */}
      <section className="relative w-full py-24 bg-[#020617] overflow-hidden">
      
      {/* --- Global Background Effects --- */}
      {/* 1. Deep grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none" />
      
      {/* 2. Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-500"></span>
              <p className="text-xs font-mono font-semibold tracking-widest uppercase text-blue-400">
                System Logic // IPS Module
              </p>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Predictive Defense. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-400">
                Before the breach happens.
              </span>
            </h2>
            
            <p className="mt-6 text-lg text-slate-400 leading-relaxed border-l-2 border-slate-800 pl-4">
              Stop modern mail attacks with SpamCloud's cloud-native IPS. We move from 
              reactive patching to <span className="text-blue-300">proactive packet-level inspection</span>.
            </p>
          </div>

          {/* Glowing Badge */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative px-5  bg-slate-900 rounded-full border border-slate-800 flex items-center gap-3 shadow-xl">
              <Shield className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Powered By</p>
                <p className="text-xs font-bold text-white tracking-wide">Immunify360™ Partner</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- The Bento Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
          
          {/* Card 1: Instant Action */}
          <FeatureCard 
            icon={<Zap className="w-6 h-6 text-yellow-400" />}
            title="Zero-Latency Blocking"
            description="Detects and blocks ransomware signatures and behavioral anomalies in real-time before payloads can execute."
            delay={0}
          />

          {/* Card 2: Dashboard */}
          <FeatureCard 
            icon={<LayoutDashboard className="w-6 h-6 text-blue-400" />}
            title="Unified Command"
            description="A personalized dashboard giving you visibility into every blocked intrusion, compromised host, and risky pattern."
            delay={100}
          />

          {/* Card 3: Deep Inspection */}
          <FeatureCard 
            icon={<Search className="w-6 h-6 text-purple-400" />}
            title="Deep Packet Inspection"
            description="We inspect protocols, attachments, and headers simultaneously, closing the microscopic gaps attackers exploit."
            delay={200}
          />

          {/* Card 4: Multi-layer Firewall */}
          <FeatureCard 
            icon={<Shield className="w-6 h-6 text-emerald-400" />}
            title="Multi-Layer Firewall"
            description="WAF and IPS working in tandem to secure both the application layer and the network layer instantly."
            delay={300}
          />

          {/* Card 5: Global Protection */}
          <FeatureCard 
            icon={<Globe className="w-6 h-6 text-cyan-400" />}
            title="Global Threat Intel"
            description="Crowdsourced threat intelligence from the Immunify360 network feeds directly into your rule sets."
            delay={400}
          />

          {/* Card 6: AI Defense (Special Active Visual) */}
          <div className="group relative p-1 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="relative h-full bg-slate-950/90 backdrop-blur-sm rounded-xl p-8 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-blue-300">AI ACTIVE</span>
                </div>
              </div>

              <div className="w-12 h-12 rounded-lg bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Defense</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Advanced heuristics detect the subtle patterns behind modern, file-less, and AI-generated attacks.
              </p>

              {/* Scanning Animation Line */}
              <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-full h-32 mt-4 relative overflow-hidden rounded border border-slate-800 bg-slate-900/50">
                 {/* Fake Matrix/Code Scan Effect */}
                 <div className="absolute inset-0 opacity-20 flex flex-col text-[10px] font-mono text-blue-400 leading-tight p-2">
                    <span>Searching pattern... 0x4F</span>
                    <span>Analyzing heuristics...</span>
                    <span>Threat level: 0%</span>
                 </div>
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-[2s] ease-linear infinite" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* SECURITY STACK SECTION */}
 <section className="relative w-full py-24 bg-[#0B0F19] overflow-hidden">
      
      {/* --- Cyber Background Elements --- */}
      {/* 1. Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* 2. Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono mb-6">
            <Terminal size={12} />
            <span>ROOT_PRIVILEGE_ACCESS</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                The Full-Spectrum <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white">
                  Security Architecture
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
                An integrated defense ecosystem. We replace patched-together tools with a unified, 
                impenetrable mesh network designed for high-compliance enterprises.
              </p>
            </div>
            
            <button className="h-fit px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded border border-slate-700 hover:border-blue-500 transition-all flex items-center gap-2 group">
              View Technical Specs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* --- The "Holo-Cards" Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="group relative h-full"
            >
              {/* Card Background & Border */}
              <div className={`relative h-full bg-[#0f1623] border border-slate-800 ${feature.border} rounded-xl p-8 transition-all duration-300 hover:bg-[#131b2c] hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.15)] overflow-hidden`}>
                
                {/* Hover Glow Effect inside card */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Header: Icon + Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${feature.accent}`} />
                  </div>
                  <span className="text-4xl font-mono font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                    {feature.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Bottom Active Line (Decor) */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-30 group-hover:via-blue-500 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Status Bar (Cyber Touch) --- */}
        <div className="mt-16 border-t border-slate-800 pt-6 flex flex-wrap gap-8 justify-center lg:justify-between items-center text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">
           <div className="flex items-center gap-2">
             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
             System Status: Operational
           </div>
           <div>Encrypted via AES-256</div>
           <div>Latency: &lt; 12ms</div>
        </div>

      </div>
    </section>

        {/* HOW WE PROTECT YOU SECTION */}
        <section className="relative w-full py-20 bg-slate-950">
          <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Protect You
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                From the first packet to the last email, every request is
                inspected, scored and acted on in real time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-2">
                  Step 1
                </p>
                <h3 className="text-lg font-semibold mb-2">Detection</h3>
                <p className="text-sm text-slate-300">
                  IPS inspects every packet and flags anything unusual, from
                  anomalies to known attack patterns.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-2">
                  Step 2
                </p>
                <h3 className="text-lg font-semibold mb-2">Prevention</h3>
                <p className="text-sm text-slate-300">
                  Suspicious requests are blocked instantly, with rules updated
                  automatically from global intel.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 mb-2">
                  Step 3
                </p>
                <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                <p className="text-sm text-slate-300">
                  You get real-time notifications and dashboards that show what
                  was stopped, where and why.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                No noise. No complicated logs. Just clear insights.
              </div>
            </div>
          </div>
        </section>

        {/* IMMUNIFY360 SECTION */}
 <section className="w-full py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* =========================================
              LEFT COLUMN: Sticky Content
              (Stays fixed while you scroll the features)
             ========================================= */}
          <div className="lg:sticky lg:top-24">
            
            {/* Partner Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Official Partner
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1] mb-6">
              More protection with <br />
              <span className="text-blue-600">Immunify360.</span>
            </h2>

            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Your network gets an extra security brain that never sleeps. 
              We leverage Immunify360's AI-driven defense to predict and block attacks instantly.
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                   <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                Zero-latency integration
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                   <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                Automated incident response
              </div>
            </div>
            
            {/* Decorative "Brain" Graphic behind text */}
            <div className="absolute -left-20 top-20 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-50 -z-10" />
          </div>

          {/* =========================================
              RIGHT COLUMN: The "Neural Spine" List
              (No boxes, just connected flow)
             ========================================= */}
          <div className="relative pt-4">
            
            {/* The Vertical Connecting Line */}
            <div className="absolute left-[27px] top-4 bottom-12 w-[2px] bg-slate-100" />

            <div className="flex flex-col gap-10">
              {features.map((feature, idx) => (
                <div key={idx} className="group relative flex gap-6 items-start">
                  
                  {/* Icon Node */}
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-white border border-slate-100 group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300 flex items-center justify-center shadow-sm">
                    <feature.icon className="w-6 h-6 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>

                  {/* Hover Decoration (Subtle flash on hover) */}
                  <div className="absolute inset-y-0 -left-4 -right-4 bg-slate-50 rounded-xl opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* RESULTS + CTA SECTION */}
        <section className="relative w-full py-20 bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ransomware is getting faster. Your protection should too.
              </h2>
              <p className="text-slate-300">
                See what happens when intrusion prevention, email security and
                Immunify360 work as one stack.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  93%
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                  Drop
                </p>
                <p className="text-sm text-slate-300">
                  in suspicious traffic
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  0
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                  Incidents
                </p>
                <p className="text-sm text-slate-300">
                  ransomware incidents reported
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  56
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                  Per Month
                </p>
                <p className="text-sm text-slate-300">
                  average high-risk intrusions blocked
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">
                  40%
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mb-2">
                  Faster
                </p>
                <p className="text-sm text-slate-300">
                  performance due to cloud-native stack
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] flex items-center gap-2">
                Talk to a Solutions Consultant
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
