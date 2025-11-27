import React from "react";
import Head from "next/head";
import { Meteors } from "@/components/ui/meteors";
import {
  Shield,
  ArrowRight,
  AlertTriangle,
  Activity,
  Server,
  Lock,
  Terminal,
  ShieldAlert,
  CheckCircle2,
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
          content="Strengthen your network security stack with SpamClouds Advanced Intrusion Prevention System and stop Ransomware mail attacks with our advanced intrusion protection"
        />
        <link
          rel="canonical"
          href="https://spamcloud.in/services/immunify360-security"
        />
      </Head>

      <main className="min-h-screen bg-slate-950 text-white">
        {/* HERO SECTION */}
      <section className="relative w-full min-h-[800px] overflow-hidden flex items-center py-24 bg-[#020617] text-white selection:bg-blue-500/30">
      
      {/* --- Background Layers --- */}
      
      {/* 1. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617]" />
      
      {/* 2. Cyber Grid with Perspective */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* 3. Ambient Glow (Spotlight effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[100px] pointer-events-none mix-blend-screen" />
      
      {/* 4. Meteors Animation */}
      <Meteors number={20} />

      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-medium w-fit mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System Operational • Threat Level Zero
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop Ransomware <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              At The Door.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-8">
            Your network deserves military-grade defense powered by <span className="text-white font-semibold">SpamCloud + Immunify360</span>. 
            We intercept 99.9% of intrusion vectors before they touch your infrastructure.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span className="relative flex items-center gap-2">
                Protect My Network <ArrowRight size={18} />
              </span>
            </button>
            
            <button className="px-8 py-4 text-slate-300 hover:text-white font-medium transition-all border border-slate-700 hover:border-slate-500 rounded-lg bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50">
              Talk to a Specialist
            </button>
          </div>

          {/* Trust/Stats Footer */}
          <div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500 border-t border-slate-800/50 pt-6">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-500" /> 17+ Years Expertise
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" /> &lt; 24h Deployment
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The "HUD" Visual */}
        {/* Designed to look like an active security dashboard/scanner */}
        <div className="lg:col-span-5 relative perspective-[2000px]">
          
          {/* Decorative glowing orb behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[80px] -z-10 animate-pulse" />

          {/* The Glass Card Container */}
          <div className="relative bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl transform transition-transform hover:scale-[1.02] duration-500 hover:shadow-[0_0_50px_rgba(30,58,138,0.2)]">
            
            {/* Header of the fake UI */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-700/50 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">Real-time Protection</h3>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Monitoring
                  </p>
                </div>
              </div>
              <Activity className="text-slate-500 w-5 h-5" />
            </div>

            {/* Feature Grid inside the card */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Ransomware Blocked", desc: "99% entry vector elimination", icon: Lock, color: "text-rose-400" },
                { title: "IPS Engine", desc: "Cloud-native heuristic scanning", icon: Cpu, color: "text-blue-400" },
                { title: "Local Support", desc: "Dedicated Indian support team", icon: Server, color: "text-indigo-400" },
              ].map((item, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800/50 hover:border-blue-500/30 transition-all duration-300 hover:bg-slate-900/80">
                  <div className={`mt-1 p-2 rounded-md bg-slate-900 border border-slate-800 group-hover:border-slate-700 transition-colors`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-medium text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
                </div>
              ))}
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 animate-scan pointer-events-none" />
          </div>
          
          {/* Floating Elements for 3D effect */}
          <div className="absolute -right-6 -bottom-6 p-4 bg-[#0f172a] border border-slate-700 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-300">Scanning... 24ms</span>
          </div>

        </div>
      </div>

      {/* CSS for custom animations if not in tailwind.config */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
      `}</style>
    </section>

        {/* PROBLEM SECTION */}
        <section className="relative w-full py-20 bg-[#020617]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
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
        <section className="w-full bg-white py-20 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 mb-4">
                Trusted in India
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                Trusted by India's leading IT companies, hosting providers &
                enterprises
              </h2>
              <p className="text-lg text-slate-600">
                SpamCloud filters billions of emails every month, protecting
                teams against evolving phishing kits, account compromise attempts
                and compliance risks with low-latency Indian routing.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 w-full lg:w-auto">
              <div className="px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-semibold flex items-center gap-2 shadow-md">
                Talk to a Cybersecurity Specialist
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-xs text-slate-500 uppercase tracking-[0.25em]">
                Indian data centers b7 MSP ready  b7 Enterprise support
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
            <div className="relative px-5 py-2.5 bg-slate-900 rounded-full border border-slate-800 flex items-center gap-3 shadow-xl">
              <Shield className="w-5 h-5 text-emerald-400 fill-emerald-400/10" />
              <div>
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
        <section className="w-full py-20 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                More protection with Immunify360
              </h2>
              <p className="text-slate-600 mb-4">
                Because we&apos;re Immunify360 partners, your network gets an
                extra security brain that never sleeps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                Proactive malware blocking
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                Kernel-level protection
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                Reputation management
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                Advanced WAF
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                Global threat intelligence feeds
              </div>
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 text-sm text-slate-700">
                OS-level attack prevention
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
