import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing',
  description: 'Pricing Page',
 keywords: ['Pricing', 'Uriel']
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing Page</span>
    </>
  );
}
