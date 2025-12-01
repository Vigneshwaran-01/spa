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
      content: "SpamCloud helped us stop ransomware attempts and ensured our online operations never halt.",
      author: "IT Manager",
      company: "Chennai Fintech Firm",
      rating: 5
    },
    {
      content: "We switched from expensive hardware firewalls. Better security, lower cost perfect smart move for us.",
      author: "Principal",
      company: "Top Educational Institution in Tamil Nadu",
      rating: 5
    },
    {
      content: "The managed support is the best part. They monitor everything and i had no worries.",
      author: "CIO",
      company: "Growing IT Company (OMR, Chennai)",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Firewall Network Security by spamcloud | Firewall services</title>
        <meta name="description" content="Get reliable firewall services from SpamCloud, providing firewall in network security for 18+ years. Protect your business with our advanced threat filtering system" />
        <meta name="keywords" content="Firewall services, Firewall in network security" />
        <link rel="canonical" href="https://spamcloud/services/firewall-network-security/" />
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

          <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
            
            <div className="flex flex-col lg:flex-row items-end lg:items-end justify-between gap-12 lg:gap-24 pb-16">
              
              <div className="lg:w-1/2">
                 <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-8 bg-blue-500"></div>
                    <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">
                      Firewall Network Security
                    </span>
                 </div>
                 
                 <h1 className="text-5xl lg:text-5xl font-bold tracking-tight text-left text-white leading-[1.05]">
                  Protect your network with Cloud Managed Firewall services
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                     Built for Indian Businesses
                   </span>
                 </h1>
              </div>

              <div className="lg:w-1/2 pb-2">
                <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
SpamCloud delivers firewall solutions as part of its network security offerings designed for schools, IT companies, banks, SaaS providers, and SMEs. Fully managed by certified security experts
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                    Protect My Network
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                  
                  <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-300 transition-colors bg-transparent border border-slate-700 rounded-lg hover:text-white hover:border-slate-500">
                    Talk to a Cybersecurity Specialist
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="absolute bottom-0 w-full bg-white/[0.02] border-t border-white/5 backdrop-blur-sm">
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
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 lg:px-12">
            
            <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-20">
              
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-red-700 text-xs font-bold uppercase tracking-wider mb-6">
                  The Modern Threat
                </div>
                
                <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  Why Modern Businesses Need a <br />
                  <span className="text-red-600">Firewall</span>
                </h2>

                <div className="prose prose-lg text-slate-600 space-y-8">
                  <p className="leading-relaxed">
                    Cyber attacks happen by entering your network silently. Without strong firewall protection, an Unknown intrusion can spread malware to steal Data from unsecured access points, leading to Downtime and business disruption. Always protect your network with a Firewall to save your business
                  </p>

                  <div className="relative pl-6 border-l-2 border-red-600">
                    <p className="text-slate-800 font-medium">
                      SpamCloud's advanced firewall solutions provide the critical first line of defense, ensuring your business stays protected from evolving cyber threats.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 w-full pl-0 lg:pl-10">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 shadow-[0_4px_20px_-10px_rgba(239,68,68,0.1)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <Radar className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Real-time Threat Detection</h3>
                      <p className="text-slate-600">Advanced AI-powered monitoring</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Block unauthorized access attempts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Prevent data breaches</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-slate-700">Maintain business continuity</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

  <section className="py-24 bg-[#020617] relative overflow-hidden">
      
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            Let SpamCloud handle the firewall.<br/> 
            So you can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">focus on your business.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE MENU (Before SpamCloud) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-2">Before SpamCloud</div>
            {transformationData.map((item, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`cursor-pointer group relative p-6 rounded-xl border transition-all duration-300 ease-out ${
                  activeIndex === index 
                    ? "bg-slate-800/50 border-blue-500/50 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]" 
                    : "bg-slate-900/30 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Icon Box */}
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
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

                  {/* Arrow Indicator */}
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    activeIndex === index ? "text-blue-400 opacity-100 translate-x-0" : "text-slate-600 opacity-0 -translate-x-4"
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: THE VIEWPORT (After SpamCloud & How We Make It Happen) */}
          <div className="lg:col-span-7 relative h-full min-h-[420px]">
            {transformationData.map((item, index) => (
              <div 
                key={index}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  activeIndex === index 
                    ? "opacity-100 translate-y-0 z-10" 
                    : "opacity-0 translate-y-8 z-0 pointer-events-none"
                }`}
              >
                {/* The "Card" Container */}
                <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden flex flex-col justify-between group shadow-2xl">
                  
                  {/* Decorative Glow inside card */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
                  
                  {/* Content Top: After SpamCloud */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                      <Shield className="w-3 h-3" /> After SpamCloud
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                      {item.solution}
                    </h3>
                    
                    {/* How We Make It Happen */}
                    <div className="mt-4 p-5 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <p className="text-xs text-blue-400 font-bold uppercase mb-2">How We Make It Happen</p>
                        <p className="text-slate-200 text-xl font-medium leading-relaxed">
                          {item.description}
                        </p>
                    </div>
                  </div>

                  {/* Content Bottom / Visuals */}
                  <div className="relative z-10 mt-8 pt-8 border-t border-slate-800/50 flex items-end justify-between">
                     <div>
                        <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Outcome</p>
                        <p className="text-2xl font-bold text-white tracking-tight">{item.stat}</p>
                     </div>
                     
                     <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 animate-pulse">
                        <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                     </div>
                  </div>

                  {/* Background Tech Pattern */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:1rem_1rem] [mask-image:linear-gradient(to_top,black,transparent)] pointer-events-none"></div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
        {/* Specification Section */}
        <section className="py-24 bg-[#020817] text-white relative overflow-hidden">
          
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                What's Included in <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">SpamCloud Firewall Services</span>
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

        {/* Pricing Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pricing made for <span className="text-blue-600">Indian users</span>
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Per-ID Security Plan</h3>
                        <p className="text-sm text-slate-600">Best For SMEs & IT offices</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <IndianRupee className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Cost Effective</h3>
                        <p className="text-sm text-slate-600">Affordable monthly pricing</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Bulk Discounts</h3>
                        <p className="text-sm text-slate-600">Special pricing for 100+ IDs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Annual Subscription</h3>
                        <p className="text-sm text-slate-600">Save with yearly plans</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                    Request a Custom Pricing Proposal
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Our trusted <span className="text-blue-600">customers</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-blue-100 mb-4" />
                  
                  <p className="text-slate-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.author}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-[#020817] text-white relative overflow-hidden">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Protect every device, every user, every location with SpamCloud's enterprise-grade network security
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                Protect My Network
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-300 transition-colors bg-transparent border border-slate-700 rounded-lg hover:text-white hover:border-slate-500">
                Talk to a Cybersecurity Specialist
              </button>
            </div>

          </div>
        </section>

        {/* Lead Generation Section */}
        <section className="relative w-full py-16 lg:py-20 bg-slate-50 overflow-hidden" id="contact">
          
          <div className="absolute inset-0 bg-white" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60 pointer-events-none" />
          
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              <div className="flex flex-col justify-center">
                <div>
                  <span className="inline-block py-1 px-3 rounded-md bg-blue-100/50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5">
                    Contact Sales
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                    Tailored security for <br/>
                    <span className="text-blue-600">
                      your specific needs.
                    </span>
                  </h2>
                  
                  <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                    Pricing varies based on endpoints & add-ons. Let's build the perfect package for your infrastructure together.
                  </p>
                </div>

                <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm relative max-w-md">
                  <Quote className="absolute top-4 right-4 w-6 h-6 text-blue-100" />
                  <div className="flex gap-0.5 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <div key={star} className="w-3.5 h-3.5 text-amber-400 fill-amber-400">★</div>
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm font-medium mb-4 italic">
                    "Experts advised exactly what we needed for scale. Seamless support."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                      C
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">CTO</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wide">SaaS Firm, Chennai</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8">
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Get a Quote</h3>
                    <p className="text-sm text-slate-500">Fill out the form and we'll get back to you.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Name</label>
                        <div className="relative group">
                          <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input 
                            type="text" 
                            name="name"
                            required
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Company</label>
                        <div className="relative group">
                          <Building2 className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input 
                            type="text" 
                            name="company"
                            required
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="Tech Ltd"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input 
                            type="email" 
                            name="email"
                            required
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="you@work.com"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone</label>
                        <div className="relative group">
                          <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                            placeholder="+91 987..."
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Service</label>
                      <div className="relative group">
                        <select 
                          name="service"
                          required
                          className="w-full pl-3 pr-10 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer"
                          value={formData.service}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select a solution...</option>
                          {services.map((svc, i) => (
                            <option key={i} value={svc}>{svc}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-blue-500" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Message</label>
                      <div className="relative group">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <textarea 
                          name="message"
                          rows={2}
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none"
                          placeholder="Brief details..."
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                    >
                      Submit Request <ArrowRight className="w-4 h-4" />
                    </button>

                  </form>
                </div>
              </div>

            </div>
          </div>

          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
              <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={() => setShowPopup(false)}
              />
              <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl transform transition-all animate-bounce-in text-center">
                <button 
                  onClick={() => setShowPopup(false)}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4 text-slate-400" />
                </button>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Received!</h3>
                <p className="text-slate-500 text-sm mb-6">
                  Our expert will contact you shortly.
                </p>
                <button 
                  onClick={() => setShowPopup(false)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <style>{`
            @keyframes bounce-in {
              0% { opacity: 0; transform: scale(0.95); }
              100% { opacity: 1; transform: scale(1); }
            }
            .animate-bounce-in {
              animation: bounce-in 0.15s ease-out forwards;
            }
          `}</style>

        </section>
           
      </div>
    </>
  );
}
