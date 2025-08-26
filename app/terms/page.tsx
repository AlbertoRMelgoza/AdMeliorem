export const dynamic = "force-dynamic";

export default function TermsPage() {
  const wrap: React.CSSProperties = { maxWidth: 900, margin: "0 auto", padding: "24px 16px" };
  const h: React.CSSProperties = { margin: "18px 0 6px", fontSize: 18 };
  const small: React.CSSProperties = { opacity: 0.75, fontSize: 12 };
  const yellow: React.CSSProperties = { color: "#f1c40f", textDecoration: "underline" };

  return (
    <main style={wrap}>
      <h1 style={{ margin: 0, fontSize: 24 }}>Contract / Terms & Conditions</h1>
      <p style={small}>
        Not legal advice. Tailor these terms to your needs and, if required, obtain independent legal review.
      </p>

      <p>
        These Terms govern the purchase of products and services from <strong>Ad Meliorem</strong> (“we”, “us”) by the
        customer (“you”, “Client”). By checking the box on the checkout page and completing payment, you agree to be
        bound by these Terms.
      </p>

      <h2 style={h}>1. Scope of Services</h2>
      <p>
        Services may include (as purchased): culture/psychosocial risk diagnostics, workshops (e.g., SHSARC™, RCABH™),
        frameworks (e.g., Procedural Justice Framework™), assessments (e.g., COPSOQ), mediation and negotiation support,
        and related materials. Deliverables are outlined in the relevant product description and/or statement of work.
      </p>

      <h2 style={h}>2. Fees & Payment</h2>
      <p>
        Fees are in <strong>AUD</strong> and payable in advance via Stripe Checkout unless agreed otherwise in writing.
        Prices shown on the site exclude taxes unless stated. Taxes, duties or levies are your responsibility.
      </p>

      <h2 style={h}>3. Scheduling & Cancellations</h2>
      <p>
        You must provide reasonable availability for any workshops, interviews or facilitation. Cancellations or
        rescheduling with fewer than 5 business days’ notice may incur a fee up to the full session price.
      </p>

      <h2 style={h}>4. Client Responsibilities</h2>
      <p>
        You will ensure lawful, safe access to personnel and information necessary to perform the Services, and that
        participation is voluntary, respectful, and free from reprisals.
      </p>

      <h2 style={h}>5. Confidentiality & Data</h2>
      <p>
        Each party must keep confidential information confidential and use it only to deliver/receive the Services,
        subject to legal obligations and professional standards. We handle personal information in accordance with our
        privacy practices and applicable law.
      </p>

      <h2 style={h}>6. Intellectual Property</h2>
      <p>
        All frameworks, methodologies, templates, training materials and content we provide remain our intellectual
        property. You receive a non-exclusive, non-transferable licence to use deliverables internally for your own
        business purposes, unless agreed otherwise in writing.
      </p>

      <h2 style={h}>7. No Legal or Medical Advice</h2>
      <p>
        Our Services support psychosocial risk management and culture improvement. They are not legal, medical or
        psychological advice. You remain responsible for legal compliance and decision-making.
      </p>

      <h2 style={h}>8. Warranties & Liability</h2>
      <p>
        Services are provided with reasonable skill and care. To the maximum extent permitted by law, we exclude all
        implied warranties and limit our total aggregate liability arising out of the Services to the total fees paid by
        you for the specific engagement giving rise to the claim. We are not liable for indirect or consequential loss,
        loss of profit, or loss of data.
      </p>

      <h2 style={h}>9. Indemnity</h2>
      <p>
        You indemnify us against claims arising from your breach of these Terms, misuse of deliverables, or failure to
        meet legal obligations in your workplace.
      </p>

      <h2 style={h}>10. Termination</h2>
      <p>
        Either party may terminate for a material breach not remedied within 14 days of notice. Fees earned up to the
        effective termination date remain payable.
      </p>

      <h2 style={h}>11. Governing Law & Dispute Resolution</h2>
      <p>
        These Terms are governed by the laws of your principal place of business in Australia (unless agreed otherwise).
        Disputes will first be attempted via good-faith negotiation and, if needed, mediation before litigation.
      </p>

      <h2 style={h}>12. Changes</h2>
      <p>
        We may update these Terms for future purchases by posting an updated version on the website. The version agreed
        at checkout applies to your purchase.
      </p>

      <h2 style={h}>13. Acceptance</h2>
      <p>
        By ticking “I agree to the contract / terms & conditions” on the checkout page and submitting payment, you enter
        a binding agreement incorporating these Terms and the selected product descriptions.
      </p>

      <p style={{ marginTop: 24 }}>
        <a href="/checkout" style={yellow}>Back to Checkout</a>
      </p>
    </main>
  );
}
