export default function NewsHero() {
  return (
    <section className="bg-[#132651] w-full py-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1760px] px-4 md:px-20 flex flex-col items-center text-center gap-[24px]">
        <div className="bg-white/10 px-[12px] py-[4px] rounded-full">
          <span className="text-[14px] font-bold text-[#f0a500]">News & Updates</span>
        </div>
        <div className="flex flex-col gap-[20px] max-w-[952px]">
          <h1 className="text-[40px] font-bold text-[#f7f8fa] leading-[1.2]">
            Latest Health & Safety News
          </h1>
          <p className="text-[16px] text-[#f3f5f8] leading-[1.6]">
            Stay up to date with legislation changes, industry guidance, and practical advice from Alan Ludewig Consulting.
          </p>
        </div>
      </div>
    </section>
  );
}
