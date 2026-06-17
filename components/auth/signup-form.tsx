"use client";

import { useState } from "react";
import { Shield, Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo signup logic
    router.push("/login");
  };

  return (
    <section className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-[12px] mb-[40px]">
          <div className="bg-[#132651] w-[56px] h-[56px] rounded-[16px] flex items-center justify-center">
            <Shield className="w-[28px] h-[28px] text-white" />
          </div>
          <h1 className="text-[20px] font-bold text-[#132651] mt-[20px]">Create an Account</h1>
          <p className="text-[14px] text-[#5a6886] max-w-[388px]">
            Join to access H&S documents and member resources
          </p>
        </div>

        {/* SIGNUP CARD */}
        <div className="w-full bg-white border border-[#e3e6ec] rounded-[16px] p-[32px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-[12px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">First Name</label>
                <div className="relative">
                  <User className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="John" 
                    required
                    className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] pl-[40px] pr-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[6px]">
                <label className="text-[12px] font-bold text-[#132651]">Last Name</label>
                <input 
                  type="text" 
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  placeholder="Smith" 
                  required
                  className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="you@example.com" 
                  required
                  className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] pl-[40px] pr-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">Password</label>
              <div className="relative">
                <Lock className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••" 
                  required
                  className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[40px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#a3acba] hover:text-[#132651]"
                >
                  {showPassword ? <EyeOff className="w-[16px] h-[16px]" /> : <Eye className="w-[16px] h-[16px]" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                <input 
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="••••••••" 
                  required
                  className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] px-[40px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                />
                <button 
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#a3acba] hover:text-[#132651]"
                >
                  {showConfirmPassword ? <EyeOff className="w-[16px] h-[16px]" /> : <Eye className="w-[16px] h-[16px]" />}
                </button>
              </div>
            </div>

            <button type="submit" className="w-full h-[56px] bg-[#132651] text-white font-bold rounded-[6px] hover:bg-[#1e3264] transition-colors mt-[12px]">
              Create Account
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <div className="mt-[24px] text-center">
          <p className="text-[12px] text-[#5a6886]">
            Already have an account? <Link href="/login" className="text-[#132651] font-bold hover:underline">Log in</Link>
          </p>
        </div>

      </div>
    </section>
  );
}
