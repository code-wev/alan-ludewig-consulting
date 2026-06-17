import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex min-h-screen flex-col bg-[#f7f8fa]'>
      <Navbar />
      <main className='relative z-10 flex-1 flex flex-col items-center justify-center py-[80px]'>
        {children}
      </main>
      <Footer />
    </div>
  );
}
