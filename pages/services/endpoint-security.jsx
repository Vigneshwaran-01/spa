import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Meteors } from "@/components/ui/meteors";
import {
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  ShieldCheck,
  Mail,
  MailWarning,
  IndianRupee,
  X,
  Bell ,
   FileX,
   Smartphone,
   CloudOff,
    Scan,
    HardDrive,
   Fingerprint,
  Laptop ,
  Monitor ,
  Sparkles,
  RefreshCw,
  Usb,
  Cloud,
  LayoutGrid,
  CheckCircle2 ,
  MessageSquare,
  ChevronRight ,
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
  Quote ,
  User ,
  Building2 ,
  Phone,
  ChevronDown , 
  Users,
  Clock,
  Award,
  TrendingUp
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { endpointSecurityForm } from '../../lib/api';

// Load reCAPTCHA script
const loadReCaptcha = () => {
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
};

export default function SeqriteEndpointSecurity() {
 const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    phone: '',
    message: ''
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  useEffect(() => {
    loadReCaptcha();
    // Make handleRecaptchaChange globally available for reCAPTCHA callback
    window.handleRecaptchaChange = handleRecaptchaChange;
    
    return () => {
      // Clean up global function
      delete window.handleRecaptchaChange;
    };
  }, []);

  const services = [
    "Email Security",
    "Incoming Mail Filter",
    "Outgoing Mail Filter",
    "Endpoint Security",
    "Firewall",
    "Others"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate reCAPTCHA
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA verification.');
      return;
    }
    
    try {
      // Send data via API to email
      const submissionData = { 
        ...formData, 
        recaptchaToken,
        subject: `Endpoint Security Inquiry - ${formData.service}`
      };
      await endpointSecurityForm(submissionData);
      
      // Show success popup
      setShowPopup(true);
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        email: '',
        service: '',
        phone: '',
        message: ''
      });
      setRecaptchaToken('');
      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };


  const features = [
    {
      id: "01",
      title: "AI Malware + Ransomware Defense",
      desc: "Zero-day attacks and encryption trojans",
      icon: Shield,
      color: "bg-blue-600"
    },
    {
      id: "02", 
      title: "Behavioral Detection",
      desc: "File-less & in-memory attacks",
      icon: Activity,
      color: "bg-indigo-600"
    },
    {
      id: "03",
      title: "Patch + Vulnerability Management",
      desc: "Outdated Windows apps exploit",
      icon: Server,
      color: "bg-purple-600"
    },
    {
      id: "04",
      title: "Device & USB Control",
      desc: "Data theft via removable devices",
      icon: Lock,
      color: "bg-green-600"
    },
    {
      id: "05",
      title: "Web Filtering + Firewall",
      desc: "Phishing clicks & C2 connections",
      icon: Globe,
      color: "bg-orange-600"
    },
    {
      id: "06",
      title: "Cloud Console Central Management",
      desc: "Multi-site visibility & control",
      icon: Cpu,
      color: "bg-red-600"
    },
    {
      id: "07",
      title: "Application Control",
      desc: "Shadow IT & risky tools",
      icon: Terminal,
      color: "bg-yellow-600"
    },
    {
      id: "08",
      title: "Endpoint DLP",
      desc: "Accidental/external data leaks",
      icon: ShieldAlert,
      color: "bg-pink-600"
    }
  ];

  const benefits = [
    {
      title: "Hassle-free onboarding",
      desc: "Get started quickly with expert setup",
      icon: CheckCircle
    },
    {
      title: "Less complex policies to configure",
      desc: "Simplified security management",
      icon: FileText
    },
    {
      title: "Affordable foreign licensing",
      desc: "No global pricing barriers",
      icon: TrendingUp
    },
    {
      title: "Fast support from overseas L1 agents",
      desc: "24/7 expert assistance",
      icon: Headphones
    }
  ];

const securityData = [
  {
    capability: "AI Malware + Ransomware Defense",
    protection: "Zero-day attacks and encryption trojans",
    icon: Sparkles
  },
  {
    capability: "Behavioral Detection",
    protection: "File-less & in-memory attacks",
    icon: Activity
  },
  {
    capability: "Patch + Vulnerability Management",
    protection: "Outdated Windows apps exploit",
    icon: RefreshCw
  },
  {
    capability: "Device & USB Control",
    protection: "Data theft via removable devices",
    icon: Usb
  },
  {
    capability: "Web Filtering + Firewall",
    protection: "Phishing clicks & C2 connections",
    icon: Globe
  },
  {
    capability: "Cloud Console Central Management",
    protection: "Multi-site visibility & control",
    icon: Cloud
  },
  {
    capability: "Application Control",
    protection: "Shadow IT & risky tools",
    icon: LayoutGrid
  },
  {
    capability: "Endpoint DLP",
    protection: "Accidental/external data leaks",
    icon: Lock
  }
];

const dlpScenarios = [
  {
    icon: HardDrive,
    scenario: "Employee copies client database to personal USB.",
    risk: "Critical IP Theft",
    action: "USB Port Blocked"
  },
  {
    icon: MailWarning,
    scenario: "Accidental email attachment of payroll.xlsx.",
    risk: "Compliance Violation",
    action: "Transfer Aborted"
  },
  {
    icon: FileX,
    scenario: "Uploading confidential roadmap to public cloud.",
    risk: "Competitor Espionage",
    action: "Upload Restricted"
  }
];
const comparisonData = [
  {
    riskTitle: "Ransomware Attacks",
    riskDesc: "Malware attempting to encrypt critical business files for ransom.",
    solutionTitle: "Behavioral Detection",
    solutionDesc: "Blocks encryption attempts instantly based on suspicious activity patterns.",
    icon: ShieldCheck
  },
  {
    riskTitle: "Data Leakage",
    riskDesc: "Employees copying sensitive client data to personal USB drives or emails.",
    solutionTitle: "Data Loss Prevention (DLP)",
    solutionDesc: "Strict policy enforcement prevents unauthorized data transfer via USB or Web.",
    icon: Lock
  },
  {
    riskTitle: "Uncontrolled Devices",
    riskDesc: "Unknown USBs or hard drives introducing malware to the network.",
    solutionTitle: "Advanced Device Control",
    solutionDesc: "Whitelists only authorized devices; blocks all other external connections.",
    icon: Activity
  },
  {
    riskTitle: "Phishing & Malicious Sites",
    riskDesc: "Users accidentally clicking links to fake banking or login pages.",
    solutionTitle: "Web Security & Filtering",
    solutionDesc: "Automatically blocks access to known malicious and non-compliant URLs.",
    icon: Globe
  },
  {
    riskTitle: "Shadow IT",
    riskDesc: "Unapproved software installations causing system vulnerabilities.",
    solutionTitle: "Asset Management",
    solutionDesc: "Complete visibility and control over hardware and software inventory.",
    icon: Cpu
  }
];
const featuresData = [
  {
    threat: "Zero-day attacks and encryption trojans",
    capability: "AI Malware + Ransomware Defense",
    icon: Sparkles
  },
  {
    threat: "File-less & in-memory attacks",
    capability: "Behavioral Detection",
    icon: Activity
  },
  {
    threat: "Outdated Windows apps exploit",
    capability: "Patch + Vulnerability Management",
    icon: RefreshCw
  },
  {
    threat: "Data theft via removable devices",
    capability: "Device & USB Control",
    icon: Usb
  },
  {
    threat: "Phishing clicks & C2 connections",
    capability: "Web Filtering + Firewall",
    icon: Globe
  },
  {
    threat: "Multi-site visibility & control issues",
    capability: "Cloud Console Central Management",
    icon: Cloud
  },
  {
    threat: "Shadow IT & risky tools",
    capability: "Application Control",
    icon: LayoutGrid
  },
  {
    threat: "Accidental/external data leaks",
    capability: "Endpoint DLP",
    icon: Lock
  }
];
const riskPoints = [
  {
    icon: Smartphone,
    title: "Shadow IT & Messaging",
    desc: "A well known employee can share a sensitive file over WhatsApp or personal chat apps.",
    protection: "App Blocking & Monitoring"
  },
  {
    icon: CloudOff,
    title: "Unsanctioned Uploads",
    desc: "The contractor mistakenly uploads customer info to a personal Google Drive or Dropbox.",
    protection: "Web Upload Filtering"
  },
  {
    icon: Usb,
    title: "Physical Media Loss",
    desc: "A USB drive containing critical business data goes missing in transit.",
    protection: "Device Encryption & Control"
  }
];
  return (
    <>
      <Head>
        <title>Endpoint Security and cybersecurity solution by spamCloud</title>
        <meta name="description" content="Protect your devices from ransomware attacks and data theft with fully managed Endpoint Security. Hosted and supported by spamCloud’s cybersecurity solution" />
        <meta name="keywords" content="endpoint security, email cybersecurity solution" />
        <link rel="canonical" href="https://spamcloud/services/endpoint-security" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
<section className="relative min-h-[85vh] flex flex-col justify-center bg-[#020817] text-white overflow-hidden font-sans border-b border-white/5">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      {/* 1. Deep Blue Base with Vignette */}
      <div className="absolute inset-0 bg-[#020817]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-blue-950/20 to-[#020817]"></div>
      </div>

      {/* 2. Technical Vertical Grid Lines (Static, Minimal) */}
      <div className="absolute inset-0 w-full h-full" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', 
             backgroundSize: '12% 100%' 
           }}>
      </div>
      
      {/* 3. Horizontal "Horizon" Line (Glowing Divider) */}
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* --- CONTENT CONTAINER --- */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center py-16 lg:py-0">
        
        {/* Main Split Layout */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-24 pb-6 lg:pb-16">
          
          {/* LEFT: Massive Headline */}
          <div className="lg:w-1/2 text-center lg:text-left">
             <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-blue-500"></div>
                <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.2em]">
                  Seqrite Endpoint Security
                </span>
             </div>
             
             <h1 className="text-3xl text-left sm:text-4xl md:text-4xl lg:text-4xl font-bold tracking-tight text-white leading-[1.05]">
               Endpoint Security with Enterprise-Grade Protection 
               <span className="text-transparent ml-2 bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                Built for Every Businesses
               </span>
             </h1>
          </div>

          {/* RIGHT: Description & CTA (Aligned to bottom) */}
          <div className="lg:w-1/2 pb-2 text-left flex flex-col justify-center lg:text-left">
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-lg  lg:mx-0">
Modern security without global pricing barriers. Fully managed by Seqrite security experts

            </p>

            <div className="flex flex-col  sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link href={'/contact'} className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-full  hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]">
                Protect My Devices
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              
              <button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-300 transition-colors bg-transparent border border-slate-700 rounded-full  hover:text-white hover:border-slate-500">
                <Link href={'/contact'} className="text-white">
                Talk to a Cybersecurity Specialist
                </Link>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* --- FOOTER / BADGES (Below the horizon line) --- */}
      <div className="w-full bg-white/[0.02] border-t border-white/5 backdrop-blur-sm md:absolute md:bottom-0">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Badge 1 */}
            <div className="py-6 flex items-center gap-4 md:pr-6">
              <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wide">Trusted by IT Teams</h3>
                {/* <p className="text-xs text-slate-500 mt-0.5">Windows, macOS & Linux</p> */}
              </div>
            </div>

            {/* Badge 2 */}
            <div className="py-6 flex items-center gap-4 md:px-6">
              <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wide">Hosted & Supported in India</h3>
                {/* <p className="text-xs text-slate-500 mt-0.5">Anti-Ransomware Engine</p> */}
              </div>
            </div>

            {/* Badge 3 */}
            <div className="py-6 flex items-center gap-4 md:pl-6">
              <div className="p-2 bg-blue-500/10 rounded text-blue-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wide"> Fastest Deployment</h3>
                {/* <p className="text-xs text-slate-500 mt-0.5">Unified Cloud Console</p> */}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>

        {/* Section 2: Why Businesses Choose Managed Endpoint Security */}
 <section className="py-16 lg:py-14 bg-white border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: The Narrative */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            {/* Badge */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"/>
              The Modern Approach
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Why Businesses Choose <br className="hidden sm:block" />
              <span className="text-blue-600 relative inline-block">
                Managed Endpoint Security
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>

            <div className="prose prose-lg text-slate-600 space-y-6 lg:space-y-8">
              {/* The "Problem" */}
              <p className="leading-relaxed text-base sm:text-lg">
                When cybercriminals innovate, <span className="text-red-500 font-semibold line-through decoration-2 decoration-red-500/40">traditional antivirus software</span> simply can't keep up. Today's businesses need a layered, proactive approach that continuously adapts to new attacks.
              </p>

              {/* The "Solution" Quote Block */}
              <div className="relative pl-6 border-l-4 border-blue-600 bg-slate-50/50 py-2 rounded-r-lg">
                <p className="text-slate-800 font-medium italic text-base sm:text-lg">
                  "Seqrite  removes the burden from your IT team. Instead of troubleshooting agents, you get a <span className="text-blue-600 not-italic font-bold">fully managed protection stack</span> that keeps business moving."
                </p>
              </div>

             
            </div>
          </div>

          {/* RIGHT COLUMN: The Benefits Grid */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Design Element: Gradient Curve */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 via-blue-50/20 to-transparent rounded-bl-full -mr-6 -mt-6 pointer-events-none transition-transform duration-500 group-hover:scale-150" />
                  
                  {/* Design Element: Tech Cross */}
                  <div className="absolute top-4 right-4 text-slate-300 group-hover:text-blue-400 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    
                    {/* Icon Container */}
                    <div className="w-12 h-12 mb-4 bg-white group-hover:bg-blue-600 rounded-xl border border-blue-100 group-hover:border-blue-600 shadow-sm flex items-center justify-center text-blue-600  transition-all duration-300">
                       <benefit.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-4">
                        {benefit.description}
                      </p>
                      {/* Visual Accent Line */}
                      <div className="h-1 w-6 bg-slate-300 group-hover:w-12 group-hover:bg-blue-500 rounded-full transition-all duration-300" />
                    </div>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

        {/* Section 3: Included Features for Windows */}
 <section className="py-14 bg-[#020617] relative overflow-hidden">
      
      {/* Background Decor (Subtle Glows) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Included Features for <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Windows</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See exactly how Seqrite neutralizes the specific risks targeting your infrastructure.
          </p>
        </div>

        {/* --- COMPARISON TABLE HEADER (Desktop) --- */}
        <div className="hidden md:grid grid-cols-2 gap-8 mb-10 max-w-5xl mx-auto relative">
          
          {/* Left Header: The Threat */}
          <div className="bg-red-950/20 border border-red-500/20 p-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_15px_-5px_rgba(239,68,68,0.1)]">
            <div className="p-1.5 bg-red-500/10 rounded-full text-red-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span className="font-bold text-red-400 tracking-wide uppercase text-sm">What it Protects You From</span>
          </div>

          {/* Center VS Badge */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#020617] p-2 rounded-full border border-slate-800">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-white text-[10px] font-extrabold tracking-widest border border-slate-700">
              VS
            </span>
          </div>

          {/* Right Header: The Capability */}
          <div className="bg-blue-950/20 border border-blue-500/20 p-4 rounded-xl flex items-center justify-center gap-3 shadow-[0_0_15px_-5px_rgba(59,130,246,0.1)]">
            <div className="p-1.5 bg-blue-500/10 rounded-full text-blue-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-bold text-blue-400 tracking-wide uppercase text-sm">Security Capability</span>
          </div>
        </div>


        {/* --- COMPARISON ROWS --- */}
        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {featuresData.map((item, index) => (
            <div key={index} className="relative grid md:grid-cols-2 group">
              
              {/* Central Connector Line (The Spine) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 group-hover:bg-blue-500/50 transition-colors duration-500"></div>
              
              {/* Central Icon Bubble */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#020617] border border-slate-700 rounded-full items-center justify-center text-slate-500 group-hover:border-blue-500 group-hover:text-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                <item.icon className="w-5 h-5" />
              </div>

              {/* LEFT SIDE: The Threat (Dark Red Mode) */}
              <div className="bg-slate-900/40 backdrop-blur-sm border-l-4 border-l-red-500 md:border-l-0 md:border-r md:border-r-red-900/30 p-6 md:p-8 rounded-l-2xl border-y border-white/5 md:text-right hover:bg-red-500/5 transition-colors duration-300 flex flex-col justify-center min-h-[100px]">
                <div className="flex md:hidden items-center gap-2 mb-2 text-red-400 font-bold text-xs uppercase tracking-widest">
                  <AlertTriangle className="w-4 h-4" /> Risk
                </div>
                <h3 className="text-lg font-medium text-slate-300 leading-tight group-hover:text-red-300 transition-colors">
                  {item.threat}
                </h3>
              </div>

              {/* RIGHT SIDE: The Capability (Dark Blue Mode) */}
              <div className="bg-slate-900/80 backdrop-blur-sm border-l-4 border-l-blue-500 md:border-l md:border-l-blue-900/30 p-6 md:p-8 rounded-r-2xl border-y border-white/5 border-r border-white/5 md:group-hover:bg-emerald-700/60 transition-all duration-300 flex flex-col justify-center min-h-[100px]">
                 <div className="flex md:hidden items-center gap-2 mb-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4" /> Solution
                </div>
                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                  {item.capability}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

 

        {/* Section 5: Managed By Experts */}
<section className="relative py-12 md:py-16 lg:py-14 bg-white overflow-hidden">
  {/* Decorative Background Blob - Adjusted for mobile */}
  <div className="absolute top-0 right-0 w-full sm:w-[500px] h-[400px] sm:h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 sm:translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 xl:gap-24">
      {/* LEFT: Visual (The "Expert" Representation) */}
      <div className="w-full lg:w-1/2 relative mt-8 lg:mt-0">
       <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
          Managed By Experts, <br className="hidden sm:block" />
          <span className="text-blue-600">Trusted By Businesses</span>
        </h2>
        {/* Main Image Container */}
        <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl border border-slate-100 bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 opacity-90"></div>
          
          {/* Mock UI/Dashboard Elements */}
          <div className="relative p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] flex flex-col justify-center items-center text-center">
            <Image 
              src={'https://res.cloudinary.com/daggx9p24/image/upload/v1764570317/115347_alyoe6.jpg'} 
              width={700} 
              height={550} 
              alt="SpamCloud SOC Dashboard"
              className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-[1.02]"
              priority
            />              
          </div>
        </div>

        {/* Floating Badge - Adjusted for mobile */}
        <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4 animate-bounce-slow">
          <div className="flex -space-x-2 sm:-space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">AS</div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-800 border-2 border-white flex items-center justify-center text-xs text-white">+5</div>
          </div>
          <div>
            <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Security Team</p>
            <p className="text-xs sm:text-sm font-bold text-slate-900">24/7 Response</p>
          </div>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="w-full lg:w-1/2 lg:mt-14  ">
       

        {/* The Points List */}
        <div className="space-y-4 sm:space-y-6  mb-8 sm:mb-10">
          {/* Point 1 */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="mt-0.5 sm:mt-1 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Monitors Alerts</h3>
              <p className="text-sm text-slate-500">We filter the noise. Real-time monitoring means we catch anomalies before they become breaches.</p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="mt-0.5 sm:mt-1 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600">
              <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Responds to Incidents</h3>
              <p className="text-sm text-slate-500">Immediate containment and remediation actions are taken by experts the moment a threat is verified.</p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="mt-0.5 sm:mt-1 flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Sends Monthly Reports</h3>
              <p className="text-sm text-slate-500">Transparent executive summaries showing compliance status, threats blocked, and system health.</p>
            </div>
          </div>
        </div>

        {/* CTA - Made full width on mobile */}
        <div className="w-full sm:w-auto">
          <Link href={'/contact'} className="w-full sm:w-auto rounded-full group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-200 bg-slate-900  hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30">
            Talk to a Cybersecurity Specialist
            <ArrowRight className="ml-2 w-4 h-6 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>



 <section className="py-14 bg-[#020817] text-white relative overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      {/* Blue Glow behind the table */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/15 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1]"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
            Why Seqrite  outperforms <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              international brands
            </span>
          </h2>
        </div>

        {/* --- COMPACT TABLE CONTAINER (Glassmorphism) --- */}
        <div className="max-w-5xl mx-auto overflow-x-auto rounded-xl border border-white/10 shadow-2xl bg-[#0B1120]/50 backdrop-blur-sm scroll-smooth">
          <div className="min-w-[900px]"> 
          {/* GRID HEADER */}
          <div className="grid grid-cols-12 min-w-[650px] bg-white/5 border-b border-white/10">
            
            {/* Empty Corner */}
            <div className="col-span-4 md:col-span-5 p-4 text-xs font-bold text-slate-500 uppercase tracking-widest flex items-end">
              Comparison Feature
            </div>
            
            {/* SpamCloud Header (Highlighted) */}
            <div className="col-span-4 md:col-span-3 bg-gradient-to-b from-blue-600 to-blue-700 p-4 relative border-t border-blue-400/50">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-900 text-blue-200 text-[9px] font-bold px-2 py-0.5 rounded-b shadow-sm uppercase tracking-wide border border-blue-500/30">
                Best Choice
              </div>
              <div className="pt-2 text-center">
                <div className="flex justify-center mb-1">
                   <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <h3 className="text-white font-bold text-sm md:text-base leading-tight">Seqrite </h3>
              </div>
            </div>

            {/* Competitors Header */}
            <div className=" md:block col-span-2 p-4 text-center border-l border-white/5">
               <h3 className="font-bold text-slate-500 text-sm mt-3">Sophos</h3>
            </div>
            <div className=" md:block col-span-2 p-4 text-center border-l border-white/5">
               <h3 className="font-bold text-slate-500 text-sm mt-3">CrowdStrike</h3>
            </div>
          </div>

          {/* --- ROW 1: Optimization --- */}
          <div className="grid grid-cols-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              Optimized for Indian Windows
            </div>
            {/* SpamCloud */}
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <div className="flex text-amber-400 gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current drop-shadow-[0_0_5px_rgba(251,191,36,0.5)]" />)}
               </div>
            </div>
            {/* Competitors */}
            <div className=" md:flex col-span-2 p-4 justify-center">
               <div className="flex text-slate-600 gap-0.5">
                  {[1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-500/50 text-amber-500/50" />)}
                  <Star className="w-3.5 h-3.5" />
               </div>
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <div className="flex text-slate-600 gap-0.5">
                  {[1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-500/50 text-amber-500/50" />)}
                  <Star className="w-3.5 h-3.5" />
               </div>
            </div>
          </div>

          {/* --- ROW 2: Pricing --- */}
          <div className="grid grid-cols-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              No global pricing barriers
            </div>
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <Check className="w-5 h-5 text-emerald-400 bg-emerald-500/20 rounded-full p-1 border border-emerald-500/30" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center">
               <X className="w-5 h-5 text-slate-700" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <X className="w-5 h-5 text-slate-700" />
            </div>
          </div>

          {/* --- ROW 3: DLP --- */}
          <div className="grid grid-cols-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              Built-in DLP included
            </div>
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <Check className="w-5 h-5 text-emerald-400 bg-emerald-500/20 rounded-full p-1 border border-emerald-500/30" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center">
               <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">ADD-ON</span>
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <span className="text-[10px] font-bold text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">ADD-ON</span>
            </div>
          </div>

          {/* --- ROW 4: Local Support --- */}
          <div className="grid grid-cols-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              Local deployment + support
            </div>
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <div className="flex items-center gap-1 bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs font-bold border border-blue-500/30">
                 <MapPin className="w-3 h-3" /> INDIA
               </div>
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center">
               <X className="w-5 h-5 text-slate-700" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <X className="w-5 h-5 text-slate-700" />
            </div>
          </div>

          {/* --- ROW 5: Compliance --- */}
          <div className="grid grid-cols-12 border-b border-white/5 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              Compliance reporting
            </div>
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <Check className="w-5 h-5 text-emerald-400 bg-emerald-500/20 rounded-full p-1 border border-emerald-500/30" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center">
               <Check className="w-5 h-5 text-slate-600" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <Check className="w-5 h-5 text-slate-600" />
            </div>
          </div>

          {/* --- ROW 6: Cost --- */}
          <div className="grid grid-cols-12 items-center hover:bg-white/[0.02] transition-colors">
            <div className="col-span-4 md:col-span-5 p-4 text-sm font-medium text-slate-300">
              Lower cost of ownership
            </div>
            <div className="col-span-4 md:col-span-3 p-4 bg-blue-500/10 border-x border-b border-blue-500/20 flex justify-center shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]">
               <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                 <IndianRupee className="w-3 h-3" /> Best Value
               </div>
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center">
               <X className="w-5 h-5 text-slate-700" />
            </div>
            <div className=" md:flex col-span-2 p-4 justify-center border-l border-white/5">
               <X className="w-5 h-5 text-slate-700" />
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>

        {/* Lead Generation Section */}
  <section className="relative w-full py-16 lg:py-14 bg-slate-50 overflow-hidden" id="contact">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60 pointer-events-none" />
      
      {/* Blue Blur Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* =========================================
              LEFT COLUMN: Copy & Testimonial
             ========================================= */}
          <div className="flex flex-col justify-center">
            <div>
              <span className="inline-block py-1 px-3 rounded-md bg-blue-100/50 text-blue-700 text-xs font-bold tracking-wider uppercase mb-5">
                Contact Sales
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Tailored security for <br/>
                <span className=" text-blue-600">
                  your specific needs.
                </span>
              </h2>
              
              <p className="text-base text-slate-500 mb-8 leading-relaxed max-w-md">
                Pricing varies based on endpoints & add-ons. Let's build the perfect package for your infrastructure together.
              </p>
            </div>

            {/* Compact Testimonial */}
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200 shadow-sm relative max-w-md">
              <Quote className="absolute top-4 right-4 w-6 h-6 text-blue-100" />
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <div key={star} className="w-3.5 h-3.5 text-amber-400 fill-amber-400">★</div>
                ))}
              </div>
              <p className="text-slate-700 text-sm font-medium mb-4 italic">
                “Experts advised exactly what we needed for scale. Seamless support.”
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

          {/* =========================================
              RIGHT COLUMN: The Compact Form
             ========================================= */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 md:p-8">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">Get a Quote</h3>
                <p className="text-sm text-slate-500">Fill out the form and we'll get back to you.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name */}
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

                  {/* Company */}
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
                  {/* Email */}
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

                  {/* Phone */}
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

                {/* Service Selection */}
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

                {/* Message */}
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

                {/* reCAPTCHA */}
                <div className="flex justify-center mt-4">
                  <div
                    className="g-recaptcha"
                    data-sitekey="6LdZCCgsAAAAAFbAoWl5Z3W_bFiUVuyuDmmFM8Nv"
                    data-callback="handleRecaptchaChange"
                  ></div>
                </div>

                {/* CTA Button */}
                <button 
                  type="submit"
                  className="w-full py-3 mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 text-sm"
                >
                  Submit Request <ArrowRight className="w-4 h-4" />
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================
          SUCCESS POPUP
         ========================================= */}
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
