import React, { useState } from "react";
import Head from "next/head";
import { Meteors } from "@/components/ui/meteors";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  ShieldCheck,
  CloudCog,
  Mail,
  GlobeLock,
  MailWarning,
  XCircle ,
  ArrowDown ,
  IndianRupee,
  X,
  Bell,
  FileX,
  Smartphone,
  CloudOff,
  Scan,
  HardDrive,
  Fingerprint,
  Laptop,
  Monitor,
  Sparkles,
  RefreshCw,
  Usb,
  Cloud,
  LayoutGrid,
  CheckCircle2,
  MessageSquare,
  ChevronRight,
  Headphones,
  MapPin,
  Cpu,
  Zap,
  Globe,
  Server,
  AlertTriangle,
  Activity,
  Check,
  Terminal,
  ShieldAlert,
  FileText,
  AlertOctagon,
  Star,
  Quote,
  User,
  Building2,
  Phone,
  ChevronDown,
  Users,
  Clock,
  Award,
  TrendingUp,
  Wifi,
  Network,
  Firewall,
  Eye,
  EyeOff,
  Search,
  Ban,
  Filter,
  Settings,
  Database,
  Router,
  ShieldX,
  Globe2,
  CloudShield,
  LockKeyhole,
  Key,
  ShieldHalf,
  Radar
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FirewallNetworkSecurity() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',     
    company: '',
    email: '',
    service: '',
    phone: '',
    message: ''
  });
 const [activeIndex, setActiveIndex] = useState(0);

 const transformationData = [
    {
      id: 0,
      title: "Visibility", // Short label for menu
      threat: "Limited visibility into network threats",
      solution: "Full visibility dashboard with live alerts",
      description: "Managed monitoring + threat analytics",
      icon: Eye,
      stat: "Live Alerts"
    },
    {
      id: 1,
      title: "Maintenance",
      threat: "On-prem firewall maintenance burden",
      solution: "Fully cloud-managed security + auto updates",
      description: "Centralized cloud control",
      icon: CloudCog,
      stat: "Auto Updates"
    },
    {
      id: 2,
      title: "Cost",
      threat: "Expensive global vendor AMC costs",
      solution: "Affordable per-ID pricing designed for India",
      description: "Local support + bulk discounts",
      icon: IndianRupee,
      stat: "Local Support"
    },
    {
      id: 3,
      title: "Security",
      threat: "Risks from unsafe browsing & ports",
      solution: "Intelligent filtering + IPS + URL control",
      description: "Real-time policy enforcement",
      icon: GlobeLock,
      stat: "Real-time"
    }
  ];

  const services = [
    "Firewall Network Security",
    "Email Security",
    "Incoming Mail Filter",
    "Outgoing Mail Filter",
    "Endpoint Security",
    "Others"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setShowPopup(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      service: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const specifications = [
    {
      id: "01",
      title: "Intrusion Prevention System (IPS)",
      desc: "Detect and block exploit attempts before it compromise.",
      icon: ShieldAlert,
      color: "bg-red-600"
    },
    {
      id: "02",
      title: "Layer 7 Application Firewall",
      desc: "Protect business apps from advanced attacks.",
      icon: ShieldHalf,
      color: "bg-orange-600"
    },
    {
      id: "03",
      title: "Web & URL Filtering",
      desc: "Stop users from accessing malicious/illegal sites.",
      icon: Filter,
      color: "bg-yellow-600"
    },
    {
      id: "04",
      title: "Ransomware & Malware Shield",
      desc: "Threat intelligence updates every few minutes.",
      icon: ShieldX,
      color: "bg-purple-600"
    },
    {
      id: "05",
      title: "Bandwidth & User Access Control",
      desc: "Prioritise business apps. Restrict non-productive usage.",
      icon: Settings,
      color: "bg-blue-600"
    },
    {
      id: "06",
      title: "VPN & Secure Remote Access",
      desc: "Safe access for the remote workforce.",
      icon: LockKeyhole,
      color: "bg-green-600"
    }
  ];


 const testimonials = [
    {
      rating: 5,
      content: "SpamCloud helped us stop ransomware attempts and ensured our online operations never halt.",
      author: "IT Manager",
      company: "Chennai Fintech Firm",
    },
    {
      rating: 5,
      content: "We switched from expensive hardware firewalls. Better security, lower cost perfect smart move for us.",
      author: "Principal",
      company: "Top Educational Institution in Tamil Nadu",
    },
    {
      rating: 5,
      content: "The managed support is the best part. They monitor everything and i had no worries.",
      author: "CIO",
      company: "Growing IT Company (OMR, Chennai)",
    }
  ];

  return (
    <>
      <Head>
        <title>Protect your network with SpamCloud Firewall in network security</title>
        <meta name="description" content="Get reliable firewall services from SpamCloud, providing firewall in network security for 18+ years. Protect your business with our advanced threat filtering system" />
        <meta name="keywords" content="Firewall services, Firewall in network security" />
        <link rel="canonical" href="https://spamcloud/services/firewall" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex flex-col justify-center bg-[#020817] text-white overflow-hidden font-sans border-b border-white/5">
          
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[#020817]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-blue-950/20 to-[#020817]"></div>
          </div>

          <div className="absolute inset-0 w-full h-full" 
               style={{ 
                 backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
                 backgroundSize: '12% 100%' 
               }}>
          </div>
          
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center py-16 lg:py-0">
            
            <div className="flex flex-col lg:flex-row items-start lg:items-end  justify-between gap-10 lg:gap-24 pb-6 lg:pb-16">
              
              <div className="lg:w-1/2 text-left lg:text-left">
                 <div className="flex items-center gap-3 ">
                    <div className="h-px w-8 bg-blue-500"></div>
                    <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">
                      Firewall Network Security
                    </span>
                 </div>
                 
                 <h1 className="text-3xl text-left pt-0  sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.05]">
                  Protect your network with Cloud Managed  
                   <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                      Firewall services
                   </span>
                 </h1>
              </div>

              <div className="lg:w-1/2 lg:pb-8 text-left lg:text-left ">
                <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8   lg:mx-0">
Next-generation firewall protection for schools, IT firms, banks, SaaS platforms, and SMEs, monitored and managed end-to-end by certified professionals                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full rounded-full sm:w-auto justify-center lg:justify-start">
                  <Link href={'/contact'} className="inline-flex items-center rounded-full justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600  hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                    Protect My Network
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                  
                  <button className="inline-flex items-center rounded-full justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-300 transition-colors bg-transparent border border-slate-700  hover:text-white hover:border-slate-500">
                   <Link href={'/contact'} className="text-white">
                    Talk to a Cybersecurity Specialist
                    </Link>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full bg-white/[0.02] border-t border-white/5 backdrop-blur-sm md:absolute md:bottom-0">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                
                <div className="py-6 flex items-center gap-4 md:pr-6">
                  <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                    <Wifi className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Affordable hardware</h3>
                  </div>
                </div>

                <div className="py-6 flex items-center gap-4 md:px-6">
                  <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">Global Standard Security</h3>
                  </div>
                </div>

                <div className="py-6 flex items-center gap-4 md:pl-6">
                  <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white tracking-wide">18+ Years Experience</h3>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </section>

        {/* Why Section */}
       <section className="py-16 lg:py-14 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: The Narrative */}
          <div className="w-full h-[100%] my-0  p-0 lg:w-1/2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              The Modern Threat
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Modern Businesses Need a <br className="hidden sm:block" />
              <span className="text-red-600 relative inline-block">
                Next-Gen Firewall
                {/* Decorative Underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="prose prose-lg text-slate-600 space-y-6">
              <p className="leading-relaxed text-base sm:text-lg">
                Cyber attacks happen by entering your network silently. Without strong firewall protection, an <span className="font-semibold text-red-600">unknown intrusion</span> can spread malware to steal data from unsecured access points.
              </p>
              
              <p className="leading-relaxed text-base sm:text-lg">
                This often leads to severe downtime and business disruption. A robust firewall isn't just a tool; it's the barrier that keeps your business operational.
              </p>

              {/* Stats / Highlight Row */}
              <div className="grid grid-cols-2 gap-4 mt-14 pt-10 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-500 font-medium">Network Surveillance</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">99.9%</div>
                  <div className="text-sm text-slate-500 font-medium">Threat Block Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Visual Card */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-0 pl-0 lg:pl-10">
            <div className="relative group">
              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-200 to-orange-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl border border-red-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
                
                {/* Header Section of Card */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50/50 p-4 sm:p-8 border-b border-red-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-red-100 flex items-center justify-center">
                        <Radar className="w-7 h-7 text-red-600 animate-pulse" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Threat Detection</h3>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Activity className="w-4 h-4 text-green-500" />
                          <p className="text-sm font-medium text-slate-600">System Active & Scanning</p>
                        </div>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className="hidden sm:flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 text-xs font-bold text-slate-600 shadow-sm">
                       <Lock className="w-3 h-3" /> SECURE
                    </div>
                  </div>
                </div>
                
                {/* Content Section of Card */}
                <div className="p-4 sm:p-8  space-y-5">
                   
                   {/* List Item 1 */}
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-default">
                    <div className="mt-1">
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Blocks Unauthorized Access</h4>
                      <p className="text-sm text-slate-500 mt-1">Automatically rejects unverified IP addresses attempting to connect.</p>
                    </div>
                  </div>

                  {/* List Item 2 */}
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-default">
                    <div className="mt-1">
                      <CheckCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Prevents Data Leaks</h4>
                      <p className="text-sm text-slate-500 mt-1">Deep packet inspection ensures sensitive data doesn't leave the network.</p>
                    </div>
                  </div>

                  {/* List Item 3 */}
                  <div className="flex items-start gap-4 pb-0 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-default">
                    <div className="mt-1">
                      <Activity className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Business Continuity</h4>
                      <p className="text-sm text-slate-500 mt-1">Reduces downtime risks by filtering out DDoS attacks instantly.</p>
                    </div>
                  </div>

                </div>

                {/* Decorative Progress Bar at bottom */}
                {/* <div className="h-1.5 w-full bg-slate-100">
                    <div className="h-full bg-red-500 w-[92%] rounded-r-full" />
                </div> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

 <section className="py-16 lg:py-14 bg-[#020617] relative overflow-hidden">
      
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] lg:w-[600px] h-[300px] bg-blue-600/20 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Let us handle your firewall, 
<br className="hidden sm:block"/> 
            So you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-slate-400">focus on your business.</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE MENU */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold w-fit uppercase tracking-wider mb-2 lg:mb-6">
              <Shield className="w-3 h-3" /> Without firewall 
            </div>
            
            {transformationData.map((item, index) => (
              <div 
                key={index}
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`cursor-pointer group relative p-4 lg:p-5 rounded-xl border transition-all duration-300 ease-out ${
                  activeIndex === index 
                    ? "bg-slate-800/50 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]" 
                    : "bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className={`w-10 h-10 shrink-0 rounded-lg flex items-center justify-center transition-colors ${
                      activeIndex === index ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-500 group-hover:text-slate-300"
                    }`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <p className={`text-sm font-medium transition-colors ${
                        activeIndex === index ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                      }`}>
                         {item.threat}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                    activeIndex === index ? "text-blue-400 opacity-100 translate-x-0" : "text-slate-600 opacity-0 -translate-x-4 hidden lg:block"
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: THE VIEWPORT */}
          {/* 
             MODIFICATION: 
             lg:h-[450px] sets a fixed, reduced height for desktop only.
             Mobile relies on h-auto (natural height).
          */}
          <div className="lg:col-span-7 relative w-full lg:h-[450px]">
            
            {transformationData.map((item, index) => (
              <div 
                key={index}
                className={`
                  transition-all duration-500 ease-in-out
                  /* Mobile: Only show active, relative positioning */
                  ${activeIndex === index ? 'block relative opacity-100 translate-y-0' : 'hidden opacity-0 translate-y-4'}
                  /* Desktop: Absolute positioning to overlap */
                  lg:block lg:absolute lg:inset-0 
                  ${activeIndex === index ? 'lg:z-10 lg:opacity-100 lg:translate-y-0' : 'lg:z-0 lg:opacity-0 lg:translate-y-8 lg:pointer-events-none'}
                `}
              > 
                 {/* Badge */}
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 lg:mb-6">
                      <Shield className="w-3 h-3" /> With firewall
                 </div>

                {/* 
                   Card Container 
                   Mobile: h-auto (grows with text)
                   Desktop: h-full (fills the 450px container)
                */}
                <div className="h-auto lg:h-[400px] bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 lg:p-10 relative overflow-hidden flex flex-col justify-between group shadow-2xl">
                  
                  {/* Decorative Glow inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                      {item.solution}
                    </h3>
                    
                    {/* How We Make It Happen */}
                    <div className="mt-2 p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-blue-400 font-bold uppercase mb-2">How We Make It Happen</p>
                        <p className="text-slate-200 text-lg font-medium leading-relaxed">
                          {item.description}
                        </p>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-4 border-t border-slate-800/50 flex items-end justify-between">
                     <div>
                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Outcome</p>
                        <p className="text-xl lg:text-2xl font-bold text-white tracking-tight">{item.stat}</p>
                     </div>
                     
                     <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 animate-pulse">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                     </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"></div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
        {/* Specification Section */}
        <section className="pt-10  pb-0 bg-[#020817] text-white relative overflow-hidden">
          
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                What's Included in <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">Firewall Services</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Comprehensive security features managed by our expert team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:bg-slate-900/60 transition-all duration-300 group">
                  <div className={`w-14 h-14 ${spec.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <spec.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {spec.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400 italic">
                SpamCloud manages all features; no IT burden on you.
              </p>
            </div>

          </div>
        </section>

 <section className="relative py-20 lg:py-14 bg-[#020617] overflow-hidden">

      {/* Background Ambience (Subtle glow to match previous sections) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container ml-6 relative z-10 mx-auto pl-8 lg:pl-16 md:pl-16">

        {/* Header - Centered on Mobile, Left on Desktop */}
        <div className="max-w-3xl mb-12 lg:mb-16 text-center lg:text-left mx-auto lg:mx-0">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">
            Pricing
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Flexible Pricing Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Indian Businesses</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg mt-4 max-w-xl mx-auto lg:mx-0">
            Simple, predictable pricing designed for SMEs, IT offices, and enterprise teams. No hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:ml-[10rem] lg:ml-[10rem] lg:gap-6 items-center">

          {/* Left Column – Feature List */}
          <div className="flex flex-col justify-center space-y-5">

            {/* Feature Card 1 */}
            <div className="group flex items-start sm:items-center gap-5 p-6 border border-slate-800 bg-slate-900/50 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                <Users className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-100 transition-colors">Per-ID Security Plan</h3>
                <p className="text-slate-400 text-sm mt-1">Ideal for SMEs & IT offices requiring granular control.</p>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="group flex items-start sm:items-center gap-5 p-6 border border-slate-800 bg-slate-900/50 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                <IndianRupee className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-100 transition-colors">Cost Effective</h3>
                <p className="text-slate-400 text-sm mt-1">Affordable month-on-month pricing structure.</p>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="group flex items-start sm:items-center gap-5 p-6 border border-slate-800 bg-slate-900/50 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-blue-400 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-blue-100 transition-colors">Bulk Discounts</h3>
                <p className="text-slate-400 text-sm mt-1">Special volume pricing for organizations with 100+ users.</p>
              </div>
            </div>

          </div>

          {/* Right Column – CTA Card */}
          <div className="w-full h-full flex">
            <div className=" flex flex-col justify-between p-4 sm:p-12 border border-blue-500/30 bg-gradient-to-b from-slate-900 to-[#020617] rounded-3xl relative overflow-hidden shadow-2xl">

              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400"></div>
              
              <div className="flex flex-col items-center text-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-8 relative">
                   <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-ping opacity-20"></div>
                   <Clock className="w-9 h-9 text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">Annual Subscription</h3>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-400/30 bg-blue-500/10 text-blue-300 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" /> 
                  Recommended Choice
                </div>
                
                <p className="text-slate-400 mt-8 mb-8 text-sm leading-relaxed max-w-xs mx-auto">
                   Get complete peace of mind with our yearly plan. Includes priority support and free setup.
                </p>
              </div>

              {/* Button */}
              <Link href={'/contact'} className="group w-full py-4 px-6 flex items-center justify-center gap-2 font-bold uppercase tracking-wider text-white text-sm rounded-xl bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
                Request Custom Proposal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

            </div>
          </div>

        </div>

      </div>
    </section>



        {/* Testimonial Section */}
      <section className="relative py-14 bg-slate-950 overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      {/* Glow Effect Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-medium mb-6">
            <ShieldCheck className="w-3 h-3 fill-blue-300" />
            <span>Enterprise Grade Security</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">industry leaders</span>.
          </h2>
          <p className="text-slate-400 text-lg">
            See how organizations across Tamil Nadu are securing their infrastructure with SpamCloud.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900/80 hover:-translate-y-1"
            >
              {/* Gradient Border Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon & Rating */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-blue-500/30 transition-colors">
                    <Quote className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                    ))}
                  </div>
                </div>
                
                {/* Content */}
                <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light">
                  "{testimonial.content}"
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 p-[1px]">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-sm font-bold text-white">
                      {testimonial.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

        {/* Final CTA Section */}
        {/* <section className="py-10 bg-[#020817] text-white relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container space-y-4 mx-auto px-6 lg:px-12 relative z-10 text-center">
            
            <div className="text-center mb-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Protect Your Devices with <span className="bg-gradient-to-r from-blue-400 to-slate-400 bg-clip-text text-transparent">Enterprices-Grade security</span>
              </h2>
              
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="inline-flex  rounded-full items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600  hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                Protect My Network
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <button className="inline-flex rounded-full items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-300 transition-colors bg-transparent border border-slate-700  hover:text-white hover:border-slate-500">
                Talk to a Cybersecurity Specialist
              </button>
            </div>

          </div>
        </section> */}

    
           
      </div>
    </>
  );
}
