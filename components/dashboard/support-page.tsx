"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  ChevronRight, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight, 
  BookOpen, 
  FileText, 
  ShieldAlert, 
  ClipboardCheck, 
  GraduationCap, 
  CreditCard,
  Video,
  ExternalLink,
  MessageCircle,
  Calendar,
  X,
  UploadCloud,
  Info
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// Category definitions matching the design
const CATEGORIES = [
  {
    id: "portal-basics",
    title: "Portal Basics",
    count: 12,
    icon: BookOpen,
    bgColor: "bg-blue-50 text-blue-600",
  },
  {
    id: "documents",
    title: "Documents & Downloads",
    count: 15,
    icon: FileText,
    bgColor: "bg-emerald-50 text-emerald-600",
  },
  {
    id: "rams",
    title: "RAMS Builder",
    count: 10,
    icon: ShieldAlert,
    bgColor: "bg-purple-50 text-purple-600",
  },
  {
    id: "checklists",
    title: "Checklists",
    count: 8,
    icon: ClipboardCheck,
    bgColor: "bg-amber-50 text-amber-600",
  },
  {
    id: "training",
    title: "Training",
    count: 6,
    icon: GraduationCap,
    bgColor: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "billing",
    title: "Subscription & Billing",
    count: 9,
    icon: CreditCard,
    bgColor: "bg-rose-50 text-rose-600",
  },
];

// Guide definition details
interface Guide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  instructions: string[];
}

const GUIDES: Guide[] = [
  {
    id: "saved-files",
    title: "Navigating My Saved Files",
    category: "Portal Basics",
    readTime: "3 min read",
    instructions: [
      "Open My Saved Files from the left sidebar.",
      "Use the search bar to find files by name.",
      "Use filters to sort by type, project, source, or date.",
      "Click Download to save a copy.",
      "Use More actions to manage file options."
    ]
  },
  {
    id: "doc-search",
    title: "Searching the Document Library",
    category: "Documents & Downloads",
    readTime: "4 min read",
    instructions: [
      "Open Document Library from the sidebar.",
      "Type keywords in the search bar.",
      "Use the filter dropdowns to narrow search by category.",
      "View preview or download directly."
    ]
  },
  {
    id: "file-export",
    title: "Exporting Files to PDF and Word",
    category: "Documents & Downloads",
    readTime: "2 min read",
    instructions: [
      "Select the document you wish to export.",
      "Click the Export button at the top of the file view.",
      "Choose PDF or Word format from the options.",
      "Wait for compilation and download completes."
    ]
  },
  {
    id: "rams-create",
    title: "Creating Your First RAMS Document",
    category: "RAMS Builder",
    readTime: "15 min read",
    instructions: [
      "Click RAMS Builder from the navigation menu.",
      "Click Create New RAMS to start a new document.",
      "Fill out company, site, and activity details.",
      "Add hazards, control measures, and risk scores.",
      "Finalize and sign the document, then download PDF."
    ]
  },
  {
    id: "checklist-submit",
    title: "Submitting Checklist Completion",
    category: "Checklists",
    readTime: "5 min read",
    instructions: [
      "Navigate to Checklist Completion page.",
      "Select the checklist template you want to fill.",
      "Go through each item, check off status, and add comments or photo attachments.",
      "Submit and sign the completed form."
    ]
  },
  {
    id: "training-access",
    title: "Accessing Training Courses",
    category: "Training",
    readTime: "6 min read",
    instructions: [
      "Open Training page.",
      "Browse courses, and click Enroll on the selected course.",
      "Watch modules and take quizzes to complete.",
      "Download training certificate upon completion."
    ]
  }
];

const FAQS = [
  {
    question: "How do I download a document?",
    answer: "To download any document, click on the document title in the library or files list, then click the download icon (arrow down) in the action buttons group."
  },
  {
    question: "Where are my invoices?",
    answer: "Your invoices can be accessed from the Manage Subscription page under the \"Latest Invoice\" card or your general booking history."
  },
  {
    question: "Can I add more users?",
    answer: "Yes! To add more users to your portal plan, go to Account Settings or contact our support team to request extra seat licenses."
  }
];

export function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState("popular");
  
  // Expanded guide ID (default is the first one as in the Figma layout)
  const [expandedGuide, setExpandedGuide] = useState<string | null>("saved-files");
  
  // Expanded FAQ Index
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Feedback states
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, "yes" | "no">>({});

  // Category dropdown states
  const [catDropdownOpen, setCatDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);

  // Dialog State
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

  // Handlers
  const handleFeedback = (guideId: string, answer: "yes" | "no") => {
    setFeedbackGiven(prev => ({ ...prev, [guideId]: answer }));
    toast.success("Thank you for your feedback!");
  };

  const toggleGuide = (id: string) => {
    setExpandedGuide(prev => (prev === id ? null : id));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(prev => (prev === index ? null : index));
  };

  const handleTicketSubmit = () => {
    setIsTicketModalOpen(true);
  };

  const handleConsultationBook = () => {
    toast.success("Opening Booking Calendar...");
  };

  const handleVirtualAgentOpen = () => {
    toast.info("Connecting with Virtual Agent...");
  };

  // Filtered and Sorted Guides
  const filteredGuides = useMemo(() => {
    return GUIDES.filter(guide => {
      const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            guide.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
                             guide.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col gap-[32px] w-full max-w-[1584px] mx-auto pb-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-[6px] text-[12px] font-sans">
        <Link 
          href="/dashboard" 
          className="text-brand-secondary hover:text-brand-primary transition-colors font-medium"
        >
          Dashboard
        </Link>
        <ChevronRight size={14} className="text-brand-secondary/60" />
        <span className="text-brand-primary font-bold">How-to Guides & Support</span>
      </div>

      {/* Heading Section */}
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-[30px] font-extrabold text-brand-primary leading-tight font-sans">
          How-to Guides & Support
        </h1>
        <p className="text-[16px] text-brand-secondary font-sans">
          Find answers, usage guides, and support options to help you use the portal effectively.
        </p>
      </div>

      {/* Top Support Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Virtual Agent Card */}
        <div 
          onClick={handleVirtualAgentOpen}
          className="bg-gradient-to-r from-[#2b7fff] to-[#155dfc] rounded-[12px] p-6 md:p-8 flex flex-col gap-[16px] text-white shadow-md hover:shadow-lg cursor-pointer transition duration-300 relative overflow-hidden"
        >
          <div className="bg-white/10 w-fit p-[10px] rounded-[10px] shrink-0 border border-white/10">
            <MessageSquare className="w-[24px] h-[24px]" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold font-sans">Ask Virtual Agent</h2>
            <p className="text-[15px] text-brand-bg-main/90 font-sans leading-relaxed">
              Get instant answers to H&S questions and portal guidance from our virtual assistant.
            </p>
          </div>
          <div className="flex items-center gap-1 text-[14px] font-bold mt-2 hover:underline">
            <span>Open Virtual Agent</span>
            <ArrowRight size={16} />
          </div>
        </div>

        {/* Support Ticket Card */}
        <div 
          onClick={handleTicketSubmit}
          className="bg-gradient-to-r from-[#ad46ff] to-[#9810fa] rounded-[12px] p-6 md:p-8 flex flex-col gap-[16px] text-white shadow-md hover:shadow-lg cursor-pointer transition duration-300 relative overflow-hidden"
        >
          <div className="bg-white/10 w-fit p-[10px] rounded-[10px] shrink-0 border border-white/10">
            <HelpCircle className="w-[24px] h-[24px]" />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold font-sans">Submit Support Ticket</h2>
            <p className="text-[15px] text-brand-bg-main/90 font-sans leading-relaxed">
              Have a technical issue or account question? File a support ticket with our desk.
            </p>
          </div>
          <div className="flex items-center gap-1 text-[14px] font-bold mt-2 hover:underline">
            <span>Submit Ticket</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Search and Filters Controls */}
      <div className="bg-white border border-[#e2e8f0] p-4 rounded-[12px] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="flex items-center w-full sm:w-[371px] h-[36px] bg-white border border-[#e3e6ec] rounded-[6px] px-3 gap-2">
          <Search className="w-[18px] h-[18px] text-brand-secondary shrink-0" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-[14px] text-brand-secondary w-full font-sans"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="flex items-center gap-3 w-full sm:w-auto self-end sm:self-auto">
          
          {/* Category Dropdown */}
          <div className="relative w-1/2 sm:w-[160px]">
            <button 
              onClick={() => {
                setCatDropdownOpen(!catDropdownOpen);
                setSortDropdownOpen(false);
              }}
              className="flex items-center justify-between w-full h-[36px] bg-white border border-[#e3e6ec] rounded-[6px] px-3 text-[14px] text-brand-secondary hover:bg-slate-50 transition"
            >
              <span className="truncate">{selectedCategory ? selectedCategory : "All Categories"}</span>
              <ChevronDown size={14} className="text-brand-secondary" />
            </button>
            
            {catDropdownOpen && (
              <div className="absolute right-0 top-[40px] z-20 bg-white border border-[#e3e6ec] rounded-[6px] shadow-md py-1 w-full sm:w-[200px]">
                <button 
                  onClick={() => {
                    setSelectedCategory(null);
                    setCatDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[14px] text-brand-primary hover:bg-slate-50 font-sans"
                >
                  All Categories
                </button>
                {CATEGORIES.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.title);
                      setCatDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[14px] text-brand-primary hover:bg-slate-50 font-sans truncate"
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative w-1/2 sm:w-[170px]">
            <button 
              onClick={() => {
                setSortDropdownOpen(!sortDropdownOpen);
                setCatDropdownOpen(false);
              }}
              className="flex items-center justify-between w-full h-[36px] bg-white border border-[#e3e6ec] rounded-[6px] px-3 text-[14px] text-brand-secondary hover:bg-slate-50 transition"
            >
              <span className="truncate">Sort: {sortOrder === "popular" ? "Most Popular" : "Recent"}</span>
              <ChevronDown size={14} className="text-brand-secondary" />
            </button>
            
            {sortDropdownOpen && (
              <div className="absolute right-0 top-[40px] z-20 bg-white border border-[#e3e6ec] rounded-[6px] shadow-md py-1 w-full">
                <button 
                  onClick={() => {
                    setSortOrder("popular");
                    setSortDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[14px] text-brand-primary hover:bg-slate-50 font-sans"
                >
                  Most Popular
                </button>
                <button 
                  onClick={() => {
                    setSortOrder("recent");
                    setSortDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-[14px] text-brand-primary hover:bg-slate-50 font-sans"
                >
                  Recent
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Category Navigation Tiles Grid */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            const isCatActive = selectedCategory === cat.title;

            return (
              <div 
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(isCatActive ? null : cat.title);
                  toast.info(`Filtering guides by: ${cat.title}`);
                }}
                className={cn(
                  "bg-white border rounded-[12px] p-6 flex flex-col gap-6 cursor-pointer transition hover:shadow-md",
                  isCatActive ? "border-brand-primary shadow-sm bg-blue-50/10" : "border-[#e3e6ec]"
                )}
              >
                <div className={cn("w-12 h-12 rounded-[10px] flex items-center justify-center shrink-0", cat.bgColor)}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-[18px] font-bold text-brand-primary font-sans leading-none">
                    {cat.title}
                  </h3>
                  <span className="text-[14px] text-brand-secondary font-sans">
                    {cat.count} guides
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two-Column Popular Guides & FAQs block */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Popular Guides List */}
        <div className="lg:col-span-8 bg-white border border-[#d0d4dc] rounded-[10px] p-6 md:p-8 flex flex-col gap-6">
          <h2 className="text-[24px] font-bold text-brand-primary font-sans leading-none">
            Popular Guides
          </h2>
          
          <div className="flex flex-col gap-4 w-full">
            {filteredGuides.length > 0 ? (
              filteredGuides.map((guide) => {
                const isExpanded = expandedGuide === guide.id;

                return (
                  <div 
                    key={guide.id}
                    className="border border-[#e3e6ec] rounded-[10px] overflow-hidden flex flex-col transition"
                  >
                    {/* Header */}
                    <div 
                      onClick={() => toggleGuide(guide.id)}
                      className="px-4 py-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition gap-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-[#eff6ff] p-3 rounded-[10px] text-[#155dfc] shrink-0">
                          <BookOpen className="w-[18px] h-[18px]" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="text-[16px] font-bold text-brand-primary font-sans leading-tight">
                            {guide.title}
                          </h3>
                          <p className="text-[14px] text-brand-secondary font-sans mt-1">
                            {guide.category} &bull; {guide.readTime}
                          </p>
                        </div>
                      </div>
                      
                      {isExpanded ? (
                        <ChevronUp size={18} className="text-brand-secondary" />
                      ) : (
                        <ChevronDown size={18} className="text-brand-secondary" />
                      )}
                    </div>

                    {/* Collapsible Content */}
                    {isExpanded && (
                      <div className="bg-[#f3f5f8] border-t border-[#e3e6ec] p-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h4 className="text-[16px] font-bold text-brand-primary font-sans">
                            Instructions:
                          </h4>
                          <ul className="flex flex-col gap-2.5 text-[14px] text-brand-secondary font-sans leading-relaxed pl-1">
                            {guide.instructions.map((inst, i) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-brand-primary font-bold shrink-0">{i + 1}.</span>
                                <span>{inst}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action buttons inside expanded guide */}
                        <div className="flex flex-wrap items-center gap-3 py-3 border-t border-[#e3e6ec] mt-2">
                          <button 
                            type="button"
                            onClick={() => toast.success("Loading help video stream...")}
                            className="bg-white border border-[#e3e6ec] hover:border-brand-primary px-4 py-2 rounded-[4px] text-[13px] font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1.5 transition"
                          >
                            <Video size={14} />
                            Watch Video
                          </button>
                          <button 
                            type="button"
                            onClick={() => toast.success("Opening complete documentation guide...")}
                            className="bg-white border border-[#e3e6ec] hover:border-brand-primary px-4 py-2 rounded-[4px] text-[13px] font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1.5 transition"
                          >
                            <ExternalLink size={14} />
                            Open Full Guide
                          </button>
                          <button 
                            type="button"
                            onClick={handleTicketSubmit}
                            className="bg-white border border-[#e3e6ec] hover:border-brand-primary px-4 py-2 rounded-[4px] text-[13px] font-bold text-brand-secondary hover:text-brand-primary flex items-center gap-1.5 transition"
                          >
                            <MessageCircle size={14} />
                            Contact Support
                          </button>
                        </div>

                        {/* Helpful Feedback section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-[#e3e6ec] pt-4 gap-4">
                          <span className="text-[12px] font-bold text-brand-secondary font-sans">
                            Was this helpful?
                          </span>
                          
                          <div className="flex items-center gap-2">
                            {feedbackGiven[guide.id] ? (
                              <span className="text-[12px] text-emerald-600 font-bold font-sans">
                                Thank you for your feedback!
                              </span>
                            ) : (
                              <>
                                <button 
                                  type="button"
                                  onClick={() => handleFeedback(guide.id, "yes")}
                                  className="bg-white border border-[#e3e6ec] hover:border-brand-primary text-brand-primary text-[12px] font-bold px-4 py-1.5 rounded-[4px] transition"
                                >
                                  YES
                                </button>
                                <button 
                                  type="button"
                                  onClick={() => handleFeedback(guide.id, "no")}
                                  className="bg-white border border-[#e3e6ec] hover:border-brand-primary text-brand-primary text-[12px] font-bold px-4 py-1.5 rounded-[4px] transition"
                                >
                                  NO
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 border border-dashed border-[#e3e6ec] rounded-[10px] text-brand-secondary font-sans">
                No guides match your filter or search query.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: FAQs & Terms & Legal Info */}
        <div className="lg:col-span-4 flex flex-col gap-6 w-full">
          
          {/* FAQs Container */}
          <div className="bg-white border border-[#d0d4dc] rounded-[10px] p-6 flex flex-col gap-6 shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
            <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
              Frequently Asked
            </h2>

            <div className="flex flex-col border border-[#e2e8f0] rounded-[8px] overflow-hidden divide-y divide-[#e3e6ec] shadow-sm">
              {FAQS.map((faq, index) => {
                const isExpanded = expandedFaq === index;

                return (
                  <div key={index} className="flex flex-col">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-slate-50 transition gap-4 text-brand-primary font-sans text-[14px] font-medium"
                    >
                      <span className="truncate">{faq.question}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                    {isExpanded && (
                      <div className="bg-slate-50 p-4 text-[13px] text-brand-secondary font-sans leading-relaxed border-t border-[#e3e6ec]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terms & Legal guidance card */}
          <div className="bg-white/80 border border-[#d0d4dc] rounded-[10px] p-6 flex flex-col gap-4 shadow-[0px_1px_2px_rgba(0,0,0,0.02)]">
            <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
              Terms & Legal Guidance
            </h2>
            <p className="text-[14px] text-brand-secondary font-sans leading-relaxed">
              Review ALC portal usage guidelines, terms and conditions, and statutory health & safety compliance notices.
            </p>
            <Link 
              href="/terms" 
              className="text-[14px] font-bold text-brand-primary hover:underline flex items-center gap-1 font-sans"
            >
              <span>View Document</span>
              <ArrowRight size={14} />
            </Link>
          </div>

        </div>
      </div>

      {/* Banner: Can't Find What You Need? */}
      <div 
        className="w-full border border-[#bedbff] rounded-[10px] p-6 md:p-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 shadow-[0px_2px_12px_rgba(43,127,255,0.05)] relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #eff6ff 0%, #eee2ff 100%)"
        }}
      >
        {/* semi-transparent watermark */}
        <div className="absolute right-[20px] top-[10px] opacity-10 pointer-events-none hidden lg:block">
          <HelpCircle size={140} className="text-[#132651]" />
        </div>

        <div className="flex flex-col gap-4 z-10 lg:max-w-[70%]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[22px] font-extrabold text-brand-primary font-sans leading-tight">
              Can&apos;t Find What You Need?
            </h3>
            <p className="text-[15px] md:text-[16px] text-brand-secondary font-sans leading-relaxed">
              Our safety consultants and technical support team are here to help. Submit a ticket or book a direct calendar call.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button 
              onClick={handleTicketSubmit}
              className="bg-brand-primary hover:bg-[#1e3264] text-white text-[13px] font-bold px-5 py-3 rounded-[6px] flex items-center gap-2 shadow-sm transition"
            >
              <FileText size={16} />
              Submit Support Ticket
            </button>
            
            <button 
              onClick={handleConsultationBook}
              className="bg-white border border-brand-primary hover:bg-slate-50 text-brand-primary text-[13px] font-bold px-5 py-3 rounded-[6px] flex items-center gap-2 transition"
            >
              <Calendar size={16} />
              Book a Consultation
            </button>

            <button 
              onClick={handleVirtualAgentOpen}
              className="bg-white border border-[#2563eb] hover:bg-blue-50/50 text-[#2563eb] text-[13px] font-bold px-5 py-3 rounded-[6px] flex items-center gap-2 transition"
            >
              <MessageSquare size={16} />
              Ask Virtual Agent
            </button>
          </div>
        </div>
      </div>

      {/* Support response SLA footer */}
      <div className="border-t border-[#bedbff] pt-6 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-24">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-[14px] text-brand-secondary font-sans">Response Time</span>
          <span className="text-[20px] font-bold text-brand-primary font-sans leading-snug">Within 24 hours</span>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-[14px] text-brand-secondary font-sans">Support Hours</span>
          <span className="text-[20px] font-bold text-brand-primary font-sans leading-snug">Mon-Fri 09:00 - 17:30</span>
        </div>
      </div>

      {/* Submit Support Ticket Dialog Modal */}
      <SupportTicketModal 
        isOpen={isTicketModalOpen} 
        onClose={() => setIsTicketModalOpen(false)} 
      />

    </div>
  );
}

interface SupportTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function SupportTicketModal({ isOpen, onClose }: SupportTicketModalProps) {
  const [subject, setSubject] = useState("");
  const [category, setCategory] = useState("RAMS / Method Statement");
  const [priority, setPriority] = useState<"normal" | "urgent">("normal");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    toast.success("Support ticket submitted successfully! Ticket ID: TKT-" + Math.floor(1000 + Math.random() * 9000));
    setSubject("");
    setMessage("");
    setFile(null);
    onClose();
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const validExtensions = ["pdf", "docx", "jpg", "png"];
      const fileExt = droppedFile.name.split(".").pop()?.toLowerCase();
      if (fileExt && validExtensions.includes(fileExt)) {
        setFile(droppedFile);
      } else {
        toast.error("Unsupported file format. Please upload PDF, DOCX, JPG, or PNG.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-primary/28 px-4 py-6 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-[894px] max-h-[90vh] overflow-y-auto no-scrollbar rounded-[12px] border-[1.5px] border-[#e3e6ec] bg-white shadow-[0_24px_64px_rgba(19,38,81,0.18)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex flex-col gap-6 p-6 md:p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold text-brand-primary font-sans leading-none">
              Open Support Ticket
            </h2>
            <button 
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-full text-brand-secondary transition hover:bg-slate-100 hover:text-brand-primary"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-brand-primary font-sans">
                Subject
              </label>
              <input 
                type="text"
                required
                placeholder="Briefly describe your question"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="h-[48px] px-4 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary transition placeholder:text-[#a3acba] font-sans"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-brand-primary font-sans">
                Default Category
              </label>
              <div className="relative">
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-[48px] px-4 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary appearance-none font-sans"
                >
                  <option value="RAMS / Method Statement">RAMS / Method Statement</option>
                  <option value="Document Access">Document Access</option>
                  <option value="Site Visit Booking">Site Visit Booking</option>
                  <option value="Billing & Account">Billing & Account</option>
                  <option value="Other">Other</option>
                </select>
                <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-secondary pointer-events-none" />
              </div>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-bold text-brand-primary font-sans">
                Priority
              </span>
              <div className="flex items-center gap-6 mt-1">
                <label className="flex items-center gap-2 cursor-pointer font-sans text-[14px] text-brand-primary select-none">
                  <input 
                    type="radio" 
                    name="priority" 
                    value="normal" 
                    checked={priority === "normal"}
                    onChange={() => setPriority("normal")}
                    className="size-[16px] accent-brand-primary cursor-pointer"
                  />
                  <span>Normal</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-sans text-[14px] text-brand-primary select-none">
                  <input 
                    type="radio" 
                    name="priority" 
                    value="urgent" 
                    checked={priority === "urgent"}
                    onChange={() => setPriority("urgent")}
                    className="size-[16px] accent-brand-primary cursor-pointer"
                  />
                  <span className={cn(priority === "urgent" && "text-[#d92d20] font-bold")}>Urgent</span>
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-bold text-brand-primary font-sans">
                Message
              </label>
              <textarea 
                required
                rows={4}
                placeholder="Add a short note about this project or folder"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="px-4 py-3 border border-[#e3e6ec] bg-white rounded-[6px] text-[14px] text-brand-primary outline-none focus:border-brand-primary transition placeholder:text-[#a3acba] resize-none font-sans"
              />
            </div>

            {/* File Upload Zone */}
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-bold text-brand-primary font-sans">
                Address / Location Details
              </span>
              <div 
                className={cn(
                  "border-2 border-dashed border-[#e3e6ec] rounded-[8px] p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-white transition hover:bg-slate-50",
                  dragOver && "border-brand-primary bg-slate-50"
                )}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <input 
                  type="file" 
                  id="file-input"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.docx,.jpg,.png"
                />
                <div className="bg-[#f0f4ff] p-2.5 rounded-full text-brand-primary">
                  <UploadCloud className="w-[24px] h-[24px]" />
                </div>
                {file ? (
                  <div className="flex items-center gap-2 mt-1 z-10">
                    <span className="text-[14px] font-bold text-brand-primary truncate max-w-[250px] sm:max-w-[400px]">
                      {file.name}
                    </span>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFile(null);
                      }}
                      className="text-[#d92d20] hover:text-[#b01e16] text-[12px] font-bold underline ml-1"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <>
                    <span className="text-[14px] font-bold text-brand-primary text-center">
                      Upload supporting file or screenshot
                    </span>
                    <span className="text-[12px] text-brand-secondary text-center">
                      Supported formats: PDF, DOCX, JPG, PNG
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Info Notice Box */}
            <div className="bg-[#e4ebfe]/60 border border-[#adc6ff]/50 rounded-[8px] p-4 flex items-start gap-3">
              <Info className="w-[18px] h-[18px] text-brand-primary shrink-0 mt-0.5" />
              <p className="text-[13px] text-brand-primary font-sans leading-[1.6]">
                If your question is urgent or requires site-specific advice, you may also book a site visit or consultation.
              </p>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-start gap-4 border-t border-[#e3e6ec] pt-5">
              <button 
                type="submit"
                className="bg-brand-primary hover:bg-[#1e3264] text-white text-[13px] font-bold px-6 py-2.5 rounded-[6px] transition cursor-pointer"
              >
                Submit Ticket
              </button>
              <button 
                type="button"
                onClick={onClose}
                className="text-brand-secondary hover:text-brand-primary text-[13px] font-bold px-4 py-2.5 transition cursor-pointer"
              >
                Cancel
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}
