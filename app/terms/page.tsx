"use client";

/**
 * Terms — minimum-legal stub (spec S11).
 * Two paragraphs. Not a content page.
 */

import Link from "next/link";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Wordmark } from "@/components/ui";

export default function TermsPage() {
  const { lang } = useLang();
  const t = content.termsPage;

  return (
    <main className="min-h-screen bg-bone py-s7">
      <Container className="max-w-reading">
        <Link href="/" aria-label="Watad — home">
          <Wordmark variant="ink" className="h-7 w-auto" />
        </Link>

        <h1 className="mt-s6 text-h2-m font-semibold text-ink md:text-h2">
          {t.title[lang]}
        </h1>

        <div className="mt-s4 space-y-s3">
          {t.body.map((para, i) => (
            <p key={i} className="text-body-m text-ink md:text-body">
              {para[lang]}
            </p>
          ))}
        </div>

        <Link
          href="/"
          className="mt-s6 inline-block text-body-m text-teal underline-offset-4 hover:underline"
        >
          {t.back[lang]}
        </Link>
      </Container>
    </main>
  );
}
