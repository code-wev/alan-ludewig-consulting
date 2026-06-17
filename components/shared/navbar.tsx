'use client';

import { useAuth } from '@/providers/auth-provider';
import { LayoutDashboard, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Retained Services', href: '/retained-services' },
  { label: 'News & Updates', href: '/news-updates' },
  { label: 'Free Resources', href: '/free-resources' },
  { label: 'Training', href: '/training' },
  { label: 'Contact Us', href: '/contact-us' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user, isLoading } = useAuth();

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const isDashboardRoute = pathname === '/dashboard' || pathname.startsWith('/dashboard/');
  const isNavItemActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const showLoggedInActions = !isLoading && Boolean(user);

  return (
    <header className='relative z-30 bg-[#132651] w-full font-sans'>
      <div className='mx-auto max-w-[1760px] px-4 md:px-20'>
        <div className='flex h-[100px] items-center justify-between gap-4'>
          <div className='flex items-center gap-10'>
            <Link href='/' className='shrink-0' onClick={closeMobileMenu}>
              <Image
                src='/images/logo.png'
                alt='ALC Logo'
                width={258}
                height={50}
                priority
                className='h-[50px] w-auto'
              />
            </Link>
          </div>

          <div className='flex items-center gap-8'>
            {!isDashboardRoute && (
              <nav className='hidden items-center gap-8 lg:flex'>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isNavItemActive(item.href) ? 'page' : undefined}
                    className={`text-sm transition-colors text-[#f7f8fa] leading-[1.6] ${
                      isNavItemActive(item.href) ? 'font-bold' : 'font-normal hover:text-white/80'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            <div className='hidden items-center gap-4 lg:flex'>
              {showLoggedInActions || isDashboardRoute ? (
                <Link
                  href='/dashboard'
                  aria-label='Go to dashboard'
                  className='inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-bold text-[#132651] transition-colors hover:bg-gray-100 border border-[#132651]'
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
              ) : (
                <Link
                  href='/login'
                  className='inline-flex items-center justify-center rounded-[6px] bg-white px-4 py-2 text-[12px] font-bold text-[#132651] transition-colors hover:bg-gray-100 border border-[#132651] h-[34px] min-w-[110px]'
                >
                  Member Login
                </Link>
              )}
            </div>

            <button
              type='button'
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='inline-flex items-center justify-center rounded-md p-2 text-[#f7f8fa] lg:hidden'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {!isDashboardRoute && isMobileMenuOpen && (
          <div className='absolute top-full left-0 right-0 border-t border-white/10 bg-[#132651] px-4 py-6 shadow-xl lg:hidden'>
            <nav className='flex flex-col gap-4'>
              {navItems.map((item) => (
                <Link
                  key={`mobile-${item.label}`}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`text-base text-[#f7f8fa] transition-colors ${
                    isNavItemActive(item.href) ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {!showLoggedInActions && (
                <Link
                  href='/login'
                  onClick={closeMobileMenu}
                  className='mt-4 flex h-10 items-center justify-center rounded-[6px] bg-white text-sm font-bold text-[#132651]'
                >
                  Member Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
