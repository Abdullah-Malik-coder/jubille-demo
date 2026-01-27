// import React, { useMemo, useState } from 'react'
// import { MessageCircle, X } from 'lucide-react'
// import { chatbotFaq } from '../data/chatbotFaq.js'

// export default function Chatbot() {
//   const [open, setOpen] = useState(false)
//   const [selected, setSelected] = useState(null)

//   const qs = useMemo(() => chatbotFaq.map((i) => i.q), [])

//   return (
//     <div className="fixed bottom-5 right-5 z-50">
//       {open ? (
//         <div className="w-[330px] max-w-[calc(100vw-40px)] rounded-2xl border border-white/10 bg-ink-900/95 p-4 text-white shadow-soft backdrop-blur">
//           <div className="flex items-center justify-between">
//             <div>
//               <div className="text-sm font-extrabold">Quick Help</div>
//               <div className="text-xs text-white/60">Edit questions in <code className="text-white/80">chatbotFaq.js</code></div>
//             </div>
//             <button
//               onClick={() => {
//                 setOpen(false)
//                 setSelected(null)
//               }}
//               className="rounded-xl p-2 text-white/80 hover:bg-white/10 hover:text-white"
//               aria-label="Close chatbot"
//             >
//               <X size={18} />
//             </button>
//           </div>

//           <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white/70">
//             {selected ? selected.a : 'Select a question below — or jump to Contact to send an inquiry.'}
//           </div>

//           <div className="mt-3 max-h-52 space-y-2 overflow-auto pr-1">
//             {chatbotFaq.map((item) => (
//               <button
//                 key={item.q}
//                 onClick={() => setSelected(item)}
//                 className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/80 hover:bg-white/10"
//               >
//                 {item.q}
//               </button>
//             ))}
//           </div>

//           <div className="mt-3 text-xs text-white/60">
//             Tip: add more answers later — this is a simple frontend FAQ bot.
//           </div>
//         </div>
//       ) : null}

//       <button
//         onClick={() => setOpen((v) => !v)}
//         className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-bold text-white shadow-soft hover:bg-brand-800"
//         aria-label="Open chatbot"
//       >
//         <MessageCircle size={18} />
//         Chat
//       </button>
//     </div>
//   )
// }


import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { chatbotKnowledge } from "../data/chatbotFaq";

function findReply(message) {
  const text = message.toLowerCase();

  for (const item of chatbotKnowledge) {
    if (item.keywords.includes("*")) continue;
    if (item.keywords.some((k) => text.includes(k))) return item.answer;
  }

  return chatbotKnowledge.find((i) => i.keywords.includes("*"))?.answer || "Please use the Contact page for more details.";
}

function MessageBubble({ from, text, onContactClick }) {
  const hasContact = text.includes("[[CONTACT_LINK]]");
  const clean = text.replace("[[CONTACT_LINK]]", "").trim();

  return (
    <div
      className={[
        "max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-5",
        from === "user"
          ? "ml-auto bg-brand-700 text-white"
          : "bg-white/10 text-white/90",
      ].join(" ")}
    >
      {clean}

      {hasContact ? (
        <div className="mt-3">
          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-semibold text-white hover:bg-white/15"
          >
            Go to Contact <ArrowRight size={14} />
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default function Chatbot() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => [
    {
      from: "bot",
      text:
        "Hello 👋 I’m Jubilee Apparel assistant. Ask me about products, OEM/private label, fabrics, sampling, MOQ, lead time, quality, packaging, or export.",
    },
  ]);

  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  const send = () => {
    const msg = input.trim();
    if (!msg) return;

    const reply = findReply(msg);

    setMessages((prev) => [
      ...prev,
      { from: "user", text: msg },
      { from: "bot", text: reply },
    ]);
    setInput("");
  };

  const goContact = () => {
    setOpen(false);              // ✅ close chatbot
    setInput("");
    navigate("/contact");        // ✅ go to contact page
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="w-[360px] max-w-[calc(100vw-40px)] overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 text-white shadow-soft backdrop-blur">
          {/* header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <div className="text-sm font-extrabold">Jubilee Apparel Chat</div>
              <div className="text-[11px] text-white/60">
                Ask anything about products, OEM programs & export.
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-xl p-2 text-white/80 hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X size={18} />
            </button>
          </div>

          {/* messages */}
          <div
            ref={listRef}
            className="h-72 space-y-3 overflow-y-auto px-4 py-3"
          >
            {messages.map((m, idx) => (
              <MessageBubble
                key={idx}
                from={m.from}
                text={m.text}
                onContactClick={goContact}
              />
            ))}
          </div>

          {/* input */}
          <div className="border-t border-white/10 p-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Type your question..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
              />
              <button
                onClick={send}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-700 px-3 py-2 text-sm font-bold text-white hover:bg-brand-800"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>

            {/* quick actions */}
            <div className="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setMessages((p) => [
                    ...p,
                    { from: "user", text: "What products do you manufacture?" },
                    { from: "bot", text: findReply("products manufacture") },
                  ]);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 hover:bg-white/10"
              >
                Products
              </button>
              <button
                type="button"
                onClick={() => {
                  setMessages((p) => [
                    ...p,
                    { from: "user", text: "What is your daily production capacity?" },
                    { from: "bot", text: findReply("capacity per day") },
                  ]);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-white/80 hover:bg-white/10"
              >
                Capacity
              </button>
              <button
                type="button"
                onClick={goContact}
                className="rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/15"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {/* launcher */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-4 py-3 text-sm font-bold text-white shadow-soft hover:bg-brand-800"
        aria-label="Open chatbot"
      >
        <MessageCircle size={18} />
        Chat
      </button>
    </div>
  );
}


