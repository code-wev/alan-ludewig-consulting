"use client";

import { useState } from "react";
import { useAuth } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
import { DEMO_USERS } from "@/constants/demo-users";
import { Shield, Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginForm() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = DEMO_USERS.find((u) => u.email === email);
    if (user) {
      login(email);
      router.push("/dashboard");
    } else {
      setError("Invalid demo credentials.");
    }
  };

  return (
    <section className="w-full flex items-center justify-center px-4">
      <div className="w-full max-w-[420px] flex flex-col items-center">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-[12px] mb-[40px]">
          <div className="bg-[#132651] w-[56px] h-[56px] rounded-[16px] flex items-center justify-center">
            <Shield className="w-[28px] h-[28px] text-white" />
          </div>
          <h1 className="text-[20px] font-bold text-[#132651] mt-[20px]">Member Login</h1>
          <p className="text-[14px] text-[#5a6886] max-w-[388px]">
            Access your H&S document library and member resources
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="w-full bg-white border border-[#e3e6ec] rounded-[16px] p-[32px] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
            {error && (
              <div className="text-red-500 text-[12px] bg-red-50 p-3 rounded-lg border border-red-100">
                {error}
              </div>
            )}
            
            {/* Email Address */}
            <div className="flex flex-col gap-[6px]">
              <label className="text-[12px] font-bold text-[#132651]">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" 
                  required
                  className="w-full bg-[#fafbfc] border border-[#d1d8e4] rounded-[14px] pl-[40px] pr-[16px] py-[10px] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#132651]/10" 
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex items-center justify-between">
                <label className="text-[12px] font-bold text-[#132651]">Password</label>
                <Link href="#" className="text-[12px] text-[#0284c7] font-bold hover:underline">Forgot password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-[14px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#a3acba]" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button type="submit" className="w-full h-[56px] bg-[#132651] text-white font-bold rounded-[6px] hover:bg-[#1e3264] transition-colors mt-[12px]">
              Sign In
            </button>
          </form>
        </div>

        {/* FOOTER */}
        <div className="mt-[24px] text-center">
          <p className="text-[12px] text-[#5a6886]">
            Not yet a member? <Link href="/retained-services" className="text-[#132651] font-bold hover:underline">View our membership plans</Link>
          </p>
        </div>

        {/* DEMO ACCOUNTS HELPER */}
        <div className="mt-8 pt-8 border-t border-[#e3e6ec] w-full">
          <p className="text-[11px] font-bold text-[#a3acba] uppercase tracking-wider mb-4 text-center">
            Demo Accounts (Click to autofill)
          </p>
          <div className="grid gap-2">
            {DEMO_USERS.map((user) => (
              <button
                key={user.email}
                onClick={() => {
                  setEmail(user.email);
                  setPassword("password123");
                }}
                className="w-full p-3 border border-[#e3e6ec] rounded-lg text-left text-[12px] hover:bg-white transition-colors group"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#132651]">{user.email}</span>
                  <span className="text-[#a3acba] group-hover:text-[#132651]">{user.role}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
