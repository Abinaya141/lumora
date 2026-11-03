import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim())
      return setStatus({ type: "error", message: "Enter your email address." });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
      return setStatus({
        type: "error",
        message: "Enter a valid email, like name@example.com.",
      });
    setStatus({
      type: "success",
      message: "Subscribed. Your 15% code is on its way.",
    });
    setEmail("");
  };

  return (
    <section id="contact" className="bg-ink py-20 text-white lg:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <h2 className="font-display text-4xl sm:text-5xl">Stay in the Loop.</h2>
        <p className="mt-4 text-white/70">
          New arrivals and private offers, once a week.
        </p>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            aria-invalid={status.type === "error"}
            className="flex-1 border border-white/30 bg-transparent px-5 py-4 text-sm outline-none placeholder:text-white/40 focus:border-clay"
          />
          <button
            type="submit"
            className="bg-clay px-8 py-4 text-sm font-semibold transition hover:bg-white hover:text-ink"
          >
            Subscribe
          </button>
        </form>
        <p
          role="status"
          className={`mt-4 min-h-5 text-sm ${status.type === "error" ? "text-red-300" : "text-clay"}`}
        >
          {status.message}
        </p>
      </div>
    </section>
  );
}
