import { useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';
import { SectionHeading } from './Skills';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  message: z.string().trim().min(10, 'Message should be at least 10 characters.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [showToast, setShowToast] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Portfolio contact from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;

    setShowToast(true);
    reset();
    setTimeout(() => setShowToast(false), 4500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something"
          description="Reach out directly, or send a message below — it opens a pre-filled email in your mail app."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-3">
            <ContactLink
              icon={<Mail size={16} />}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactLink
              icon={<MessageCircle size={16} />}
              label="WhatsApp"
              value={profile.phone}
              href={profile.whatsappUrl}
            />
            <ContactLink
              icon={<Linkedin size={16} />}
              label="LinkedIn"
              value="in/azizaslam36"
              href={profile.linkedin}
            />
            <ContactLink
              icon={<Github size={16} />}
              label="GitHub"
              value={`@${profile.githubUsername}`}
              href={profile.github}
            />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-2xl surface p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register('name')}
                  type="text"
                  autoComplete="name"
                  className="input-field"
                  aria-invalid={!!errors.name}
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  {...register('email')}
                  type="email"
                  autoComplete="email"
                  className="input-field"
                  aria-invalid={!!errors.email}
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message" error={errors.message?.message}>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="input-field resize-none"
                  aria-invalid={!!errors.message}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-electric dark:bg-lime px-6 py-3 font-mono text-xs uppercase tracking-wide text-white dark:text-navy-950 hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            role="status"
            className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-navy-950 dark:bg-white px-5 py-3 text-sm text-white dark:text-navy-950 shadow-lg"
          >
            <CheckCircle2 size={16} className="text-lime dark:text-electric" />
            Email draft opened — send it from your mail app.
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-wide text-ink-500 dark:text-paper-100/50">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-xs text-red-500 dark:text-red-400">{error}</span>
      )}
    </label>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 rounded-xl surface px-4 py-3.5 hover:border-electric dark:hover:border-lime transition-colors"
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper-100 dark:bg-navy-700/60 text-electric dark:text-lime">
        {icon}
      </span>
      <span>
        <span className="block font-mono text-[10px] uppercase tracking-wide text-ink-500 dark:text-paper-100/45">
          {label}
        </span>
        <span className="block text-sm font-medium text-ink-900 dark:text-paper-100">{value}</span>
      </span>
    </a>
  );
}
