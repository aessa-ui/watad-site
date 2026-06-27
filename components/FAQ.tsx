"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";
import { content } from "@/lib/content";
import { Container, Section, SectionHeader } from "./ui";
import { Reveal } from "./Reveal";

export function FAQ() {
  const { lang } = useLang();
  const f = content.faq;

  return (
    <Section id="faq" tone="softbone">
      <Container>
        <Reveal>
          <SectionHeader overline={f.overline[lang]} heading={f.h2[lang]} rule />
        </Reveal>

        <Reveal>
          <Accordion.Root
            type="single"
            collapsible
            className="mt-s6 divide-y divide-line"
          >
            {f.items.map((item, i) => (
              <Accordion.Item key={i} value={`item-${i}`} className="group">
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between gap-s4 py-s4 text-start text-body-m font-medium text-ink transition-colors duration-150 hover:text-teal data-[state=open]:text-teal md:text-body">
                    <span>{item.q[lang]}</span>
                    <ChevronDown
                      className="h-5 w-5 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="grid overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="overflow-hidden">
                    <p className="pb-s4 text-body-m leading-relaxed text-muted">
                      {item.a[lang]}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </Container>
    </Section>
  );
}
