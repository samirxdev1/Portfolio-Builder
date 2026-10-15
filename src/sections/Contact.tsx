import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAILJS_SERVICE_ID = "service_j6qst99";
const EMAILJS_TEMPLATE_ID = "template_contact";
const EMAILJS_PUBLIC_KEY = "0hIlNieRWqN6KAInR";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msgLength, setMsgLength] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current.reset();
      setMsgLength(0);
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#282B4A] text-[#EEEBDA] selection:bg-[#EEEBDA] selection:text-[#282B4A]">
      <div className="mx-auto max-w-[1100px] px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#EEEBDA]">
              Let's Build Something.
            </h2>
            <p className="mt-3 text-base text-[#EEEBDA]/70">
              Open for freelance opportunities, full-time roles, and technical collaborations.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <Reveal delay={100} className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#EEEBDA]/20 bg-[#EEEBDA]/5 text-[#EEEBDA]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#EEEBDA]/60">Email</p>
                  <a 
                    href="mailto:mansurisamir493@gmail.com" 
                    className="text-base sm:text-lg font-medium text-[#EEEBDA] hover:underline"
                  >
                    mansurisamir493@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#EEEBDA]/20 bg-[#EEEBDA]/5 text-[#EEEBDA]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#EEEBDA]/60">Phone</p>
                  <a 
                    href="tel:+919409593511" 
                    className="text-base sm:text-lg font-medium text-[#EEEBDA] hover:underline"
                  >
                    Temporary Not Available 
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#EEEBDA]/20 bg-[#EEEBDA]/5 text-[#EEEBDA]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#EEEBDA]/60">Location</p>
                  <p className="text-base sm:text-lg font-medium text-[#EEEBDA]">
                    Godhra, Gujarat, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[#EEEBDA]/20 bg-[#EEEBDA]/5 text-[#EEEBDA]">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#EEEBDA]/60">Availability</p>
                  <p className="text-base sm:text-lg font-medium text-[#EEEBDA]">
                    Mon–Sat, 9AM–9PM IST
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border-l border-[#EEEBDA]/30 pl-4 py-1">
                <p className="text-sm italic text-[#EEEBDA]/70">
                  "I typically reply within 24 hours."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Minimal Form with Bottom-Border Inputs */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-6 rounded-lg border border-[#EEEBDA]/15 bg-[#EEEBDA]/5 p-6 sm:p-10"
              >
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#EEEBDA]/70">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    className="w-full border-b border-[#EEEBDA]/20 bg-transparent py-2.5 text-[#EEEBDA] text-base outline-none transition-colors focus:border-[#EEEBDA] placeholder-[#EEEBDA]/30"
                    placeholder="Samir Mansuri"
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#EEEBDA]/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    required
                    className="w-full border-b border-[#EEEBDA]/20 bg-transparent py-2.5 text-[#EEEBDA] text-base outline-none transition-colors focus:border-[#EEEBDA] placeholder-[#EEEBDA]/30"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-[#EEEBDA]/70">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full border-b border-[#EEEBDA]/20 bg-transparent py-2.5 text-[#EEEBDA] text-base outline-none transition-colors focus:border-[#EEEBDA] placeholder-[#EEEBDA]/30"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 relative">
                  <div className="flex justify-between items-center">
                    <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#EEEBDA]/70">
                      Your Message
                    </label>
                    <span className="font-mono text-xs text-[#EEEBDA]/50">
                      {msgLength} / 500
                    </span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={500}
                    onChange={(e) => setMsgLength(e.target.value.length)}
                    className="w-full resize-none border-b border-[#EEEBDA]/20 bg-transparent py-2.5 text-[#EEEBDA] text-base outline-none transition-colors focus:border-[#EEEBDA] placeholder-[#EEEBDA]/30"
                    placeholder="Describe your project, timeline, and goals..."
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={cn(
                    "mt-2 flex w-full items-center justify-center gap-2 rounded-md py-3.5 px-6 font-medium text-sm transition-all duration-150 cursor-pointer active:scale-[0.98]",
                    status === "success" 
                      ? "bg-emerald-600 text-white" 
                      : status === "error" 
                      ? "bg-red-500 text-white" 
                      : "bg-[#EEEBDA] text-[#282B4A] hover:bg-white",
                    status === "loading" && "opacity-80 cursor-not-allowed"
                  )}
                >
                  {status === "idle" && <><Send size={16} /> Send Message</>}
                  {status === "loading" && <><Loader2 size={16} className="animate-spin" /> Sending...</>}
                  {status === "success" && <><CheckCircle2 size={16} /> Message Sent Successfully</>}
                  {status === "error" && <>Try Again</>}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
