import type { Metadata } from "next";
import ContactClientPage from "@/components/ContactClientPage";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Opal Peptide for ordering inquiries, bulk pricing, institutional accounts, CoA requests, and compliance questions. Email inquiry@opalpeptide.com.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
