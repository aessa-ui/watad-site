"use client";

/**
 * Privacy Policy — minimum-legal stub (spec S11).
 * Two paragraphs. Not a content page.
 */

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Wordmark } from "@/components/ui";

export default function PrivacyPage() {
  const { lang } = useLang();
  const p = content.privacyPage;

  return (
    <main className="min-h-screen bg-bone py-s7">
      <Container className="max-w-reading">
        <Link href="/" aria-label="Watad — home">
          <Wordmark variant="ink" className="h-7 w-auto" />
        </Link>

        <h1 className="mt-s6 text-h2-m font-semibold text-ink md:text-h2">
          {p.title[lang]}
        </h1>

        <div className="mt-s4 space-y-s3">
          {p.body.map((para, i) => (
            <p key={i} className="text-body-m text-ink md:text-body">
              {para[lang]}
            </p>
          ))}
        </div>

        <Link
          href="/"
          className="mt-s6 inline-block text-body-m text-teal underline-offset-4 hover:underline"
        >
          {p.back[lang]}
        </Link>
      </Container>
    </main>
  );
}
