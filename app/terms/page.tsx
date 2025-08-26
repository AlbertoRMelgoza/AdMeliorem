// app/terms/page.tsx
export const dynamic = "force-dynamic";

export default function TermsPage() {
  const wrap: React.CSSProperties = { maxWidth: 900, margin: "0 auto", padding: "24px 16px" };
  const h1: React.CSSProperties = { margin: 0, fontSize: 24 };
  const h2: React.CSSProperties = { margin: "18px 0 6px", fontSize: 18 };
  const p:  React.CSSProperties = { margin: "8px 0" };
  const small: React.CSSProperties = { opacity: 0.75, fontSize: 12, marginTop: 6 };
  const yellow: React.CSSProperties = { color: "#f1c40f", textDecoration: "underline" };

  return (
    <main style={wrap}>
      <h1 style={h1}>Ad Meliorem — Terms & Conditions</h1>
      <p style={small}>Effective Date: 26/08/2025 · ABN: 93 710 507 818</p>

      <h2 style={h2}>1. Acceptance of Terms</h2>
      <p style={p}>
        By purchasing or using any services or products from Ad Meliorem (ABN: 93 710 507 818), you (“client” or
        “customer”) agree to these Terms and Conditions. This agreement is legally binding from the moment of purchase
        or subscription.
      </p>

      <h2 style={h2}>2. Nature and Purpose of Services</h2>
      <p style={p}>Ad Meliorem is a sole practice providing corporate consulting, diagnostics, and facilitation in psychosocial risk, compliance, and organisational culture. Services include:</p>
      <ul>
        <li>Procedural Justice Framework™: Incident, complaint, and investigation process protocols to minimise liability.</li>
        <li>Culture Risk Diagnostic™: Subscription-based and modular risk diagnostics (COPSOQ, SHEQ, OCAS, Pulse Surveys).</li>
        <li>SHSARC™ and RCABH™ Workshops: Training and prevention for sexual harassment, bullying, aggression, and organisational culture harm.</li>
        <li>Mediation Services: Accredited workplace mediation for conflict and liability minimisation.</li>
        <li>Negotiation Services: Advisory, coaching, and support for high-stakes and risk-related workplace negotiation.</li>
      </ul>
      <p style={p}>
        All offerings are designed to prevent, identify, and mitigate misconduct, wrongful behaviour, and regulatory risk.
        Ad Meliorem stands for ethical conduct, fair process, and compliance.
      </p>

      <h2 style={h2}>3. No Absolute Guarantee; Limitation of Liability</h2>
      <p style={p}>
        While protocols and advice aim to significantly reduce risk, harm, and liability, the elimination of all risk
        is not guaranteed. Outcomes depend in part on client implementation and factors outside our control.
      </p>
      <p style={p}>
        <strong>Liability Cap:</strong> To the maximum extent permitted by law, the aggregate liability for any claim,
        dispute, or loss is limited to the total fees paid by you for the relevant purchased services.
      </p>
      <p style={p}>
        <strong>Fraud & Ethical Carve-Out:</strong> Nothing in these terms limits liability for any fraud, wilful
        misconduct, gross negligence, or intentional breaches of confidentiality by either party.
      </p>

      <h2 style={h2}>4. Addressing Suspected Wrongdoing or Fraud</h2>
      <p style={p}>
        If you perceive or suspect any fraud, ethical breach, or wrongful behaviour concerning the services, notify
        <a href="mailto:am@albertormelgoza.com" style={yellow}> am@albertormelgoza.com</a> immediately.
        We will investigate promptly and transparently; a third-party investigation or review and mediation may be
        arranged as appropriate. Remedial action will be taken for any substantiated finding.
      </p>

      <h2 style={h2}>5. Payment Terms</h2>
      <ul>
        <li>Fees and payment intervals are provided on the website and advised in writing.</li>
        <li>Prices are exclusive of GST unless otherwise stated and GST will be added where applicable.</li>
        <li>Payment is due within 30 days of purchase.</li>
        <li>Failure to pay may result in service suspension, late fees, and recovery action.</li>
      </ul>

      <h2 style={h2}>6. Data Ownership, Usage, and Cyber Security</h2>
      <p style={p}>
        Data generated during any engagement (including assessments, diagnostics, surveys, reports, interviews, mediation,
        or workshops) is jointly owned by you and Ad Meliorem. Aggregated or anonymised data may be used for benchmarking,
        analytics, or service improvement. All handling of organisational information follows our Privacy Policy and
        Australian law.
      </p>
      <p style={p}>
        <strong>Cyber Security & Incident Response:</strong> Data and systems are protected using up-to-date cyber security
        protocols aligned with Australian Cyber Security Centre best practice. In the event of a cyber incident, affected
        clients and (where required) regulatory bodies will be notified as soon as practicable; remediation and support will
        be provided as appropriate. Clients are responsible for the security of their own systems.
      </p>

      <h2 style={h2}>7. Intellectual Property (IP)</h2>
      <p style={p}>
        All templates, protocols, frameworks, reports, and related materials are Ad Meliorem’s intellectual property,
        licensed to you for internal, non-commercial use only.
      </p>

      <h2 style={h2}>8. Service Scope, Modifications & Interruptions</h2>
      <p style={p}>
        Service descriptions (including resources and fees) may be updated from time to time. Notice of material changes
        will be provided via email or website. We reserve the right to suspend services for non-payment, misuse, or other
        legitimate business reasons.
      </p>

      <h2 style={h2}>9. Client Responsibilities</h2>
      <p style={p}>
        Clients must provide accurate information, cooperate with protocols, and ensure proper implementation. The
        effectiveness of the work depends on your engagement and follow-through.
      </p>

      <h2 style={h2}>10. Term, Termination & Refunds</h2>
      <p style={p}>
        Subscriptions auto-renew unless cancelled at least 30 days prior. Refunds are available only for non-delivery,
        proven gross negligence, or breach of contract. Either party may terminate this agreement for breach (following
        notice and a reasonable remedy period).
      </p>

      <h2 style={h2}>11. Privacy</h2>
      <p style={p}>
        <strong>No Identifiable Information:</strong> Ad Meliorem does not collect or store names, contact details, phone
        numbers, or other personal identifiers of individuals during psychosocial risk assessments and diagnostics. In
        workshops, personal identifiers may be requested for the purpose of building value in the session; names will not
        be stored or collected for any other purpose.
      </p>
      <p style={p}>
        All data provided should be de-identified and non-attributable. If any personal information is inadvertently
        provided, it will be deleted or de-identified immediately in accordance with the Privacy Act 1988 (Cth) and the
        Australian Privacy Principles.
      </p>
      <p style={p}>
        For general business engagement (e.g., contacting Ad Meliorem), personal information voluntarily submitted will be
        securely stored, never sold, and only disclosed as required by law or with explicit client consent. For privacy
        enquiries, contact <a href="mailto:am@albertormelgoza.com" style={yellow}>am@albertormelgoza.com</a>.
      </p>

      <h2 style={h2}>12. Governing Law, Jurisdiction, and International Clients</h2>
      <p style={p}>
        These Terms are governed by the laws of Queensland, Australia. Disputes will be resolved by negotiation, mediation,
        or the courts of Queensland (non-exclusive jurisdiction). International clients are also bound by these terms unless
        otherwise agreed in writing and are responsible for compliance with local laws.
      </p>

      <h2 style={h2}>13. Dispute Resolution</h2>
      <p style={p}>
        Disputes will first be addressed through good-faith negotiation and mediation. If unresolved, the courts of
        Queensland will decide the matter unless alternative arbitration is mutually agreed.
      </p>

      <h2 style={h2}>14. Contact Information</h2>
      <p style={p}>
        For questions, concerns, or complaints about these terms or privacy, contact
        <a href="mailto:am@albertormelgoza.com" style={yellow}> am@albertormelgoza.com</a>.
      </p>

      <p style={{ ...p, marginTop: 14 }}>
        By accepting these terms and making a purchase, you confirm understanding and acceptance of all rights,
        responsibilities, and limitations set out above.
      </p>
      <p style={small}>(To be reviewed and advised by a lawyer/law firm.)</p>

      <p style={{ marginTop: 24 }}>
        <a href="/checkout" style={yellow}>Back to Checkout</a>
      </p>
    </main>
  );
}
