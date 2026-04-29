export function Footer() {
  return (
    <footer className="w-full border-t border-t-[#DDE3EA] mt-auto bg-gradient-to-b from-[#F7FAFF] to-white">
      <div className="max-w-[1280px] mx-auto py-10 px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] font-semibold tracking-[0.08em] text-slate-900 uppercase">
            Techstack Vehicle Data Sandbox
          </span>
          <p className="text-xs font-normal text-slate-600/90">
            Controlled test environment for automation purposes only.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            className="text-xs font-medium text-slate-600 hover:text-[#315EA8] hover:underline underline-offset-4 decoration-[#315EA8]/60"
            href="#"
          >
            Documentation
          </a>
          <a
            className="text-xs font-medium text-slate-600 hover:text-[#315EA8] hover:underline underline-offset-4 decoration-[#315EA8]/60"
            href="#"
          >
            API Reference
          </a>
          <a
            className="text-xs font-medium text-slate-600 hover:text-[#315EA8] hover:underline underline-offset-4 decoration-[#315EA8]/60"
            href="#"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  )
}

