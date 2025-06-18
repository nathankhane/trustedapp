"use client";

import Image from "next/image";

const partners = [
  {
    name: "Slack",
    url: "https://img.logo.dev/slack.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Notion",
    url: "https://img.logo.dev/notion.so?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Airtable",
    url: "https://img.logo.dev/airtable.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Stripe",
    url: "https://img.logo.dev/stripe.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Figma",
    url: "https://img.logo.dev/figma.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "HubSpot",
    url: "https://img.logo.dev/hubspot.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Salesforce",
    url: "https://img.logo.dev/salesforce.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Atlassian",
    url: "https://img.logo.dev/atlassian.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Twilio",
    url: "https://img.logo.dev/twilio.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Intercom",
    url: "https://img.logo.dev/intercom.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
  {
    name: "Asana",
    url: "https://img.logo.dev/asana.com?token=pk_PpNpi60oTAGi9nays7FAIg&format=png&retina=true",
  },
];

export default function LogoCloud() {
  return (
    <section className="py-16">
      <h3 className="text-center text-sm font-medium text-muted-foreground mb-10">
        Your favourite companies are our partners.
      </h3>
      <div className="mx-auto max-w-5xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-6 place-items-center">
        {partners.map(({ name, url }) => (
          <Image
            key={name}
            src={url}
            alt={`${name} logo`}
            height={20}
            width={60}
            className="opacity-80 sm:grayscale hover:opacity-100 hover:grayscale-0 transition"
            unoptimized
          />
        ))}
      </div>
    </section>
  );
}
