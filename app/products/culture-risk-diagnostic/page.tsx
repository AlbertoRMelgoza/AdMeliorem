import Image from "next/image";
import type { CSSProperties } from "react";

export const metadata = {
  title: "Culture Risk Diagnostic™ — Ad Meliorem",
  description:
    "A forensic cultural assessment with leading indicators, risk scores and evidence of due diligence.",
};

export default function CRDPage() {
  const wrap: CSSProperties = { maxWidth: 1000, margin: "28px auto", padding: "0 16px", lineHeight: 1.65 };
  const card: CSSProperties = { background: "#111", border: "1px solid #222", borderRadius: 12, padding: 16, marginTop: 24 };

  return (
    <main style={wrap}>
      <h1 style={{ marginTop: 0 }}>Culture Risk Diagnostic™</h1>
      <p>
        The Culture Risk Diagnostic™ is a forensic assessment that maps hotspots and provides leading indicators, risk
        scores and due-diligence evidence. After the first mention, Culture Risk Diagnostic is used without the mark for
        readability.
      </p>

      {/* AdMeliorem\public\Images\culture.jpg */}
      <div style={{ display: "flex", justifyContent: "center", margin: "24px 0" }}>
        <Image
          src="/Images/culture.jpg" // 
          alt="Culture Risk Diagnostic illustration"
          width={800}
          height={400}
          style={{ borderRadius: 12 }}
        />
      </div>

      {/* Purposes + tools */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>The Culture Risk Diagnostic serves two purposes</h2>
        <p>
          Depending on organisational needs, five reliable and validated tools can be applied to provide a 360° view of
          hidden culture risks or to evaluate the broader business environment:
        </p>
        <ol>
          <li>
            <strong>COPSOQ (Copenhagen Psychosocial Questionnaire)</strong> → Measures the psychosocial risk environment,
            flagging existing risks and emerging hazards.
          </li>
          <li>
            <strong>SEQ (Sexual Experience Questionnaire)</strong> → Captures data on sexist remarks, inappropriate sexual
            advances, unwanted sexual attention, and sexual coercion. Results identify risk concentrations by unit or
            department and allow hazards to be isolated.
          </li>
          <li>
            <strong>OCAS (Overt–Covert Aggression Scale)</strong> → Assesses both overt and covert wrongful behaviours,
            including aggression, bullying, and harassment.
          </li>
          <li>
            <strong>WFBS (Workplace Feelings &amp; Behaviour Survey)</strong> → Evaluates in-group favouritism and covert
            harmful behaviours by capturing perceptions and feelings; developed and validated in Australia.
          </li>
          <li>
            <strong>IAT (Implicit Association Test)</strong> → Surfaces hidden biases and unconscious attitudes toward
            outgroups, exposing cultural drivers of exclusion and unsafe dynamics; delivered in collaboration with Harvard
            University.
          </li>
        </ol>
      </section>

      {/* Deliverable */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverable</h2>
        <p>
          A regulator-ready report for key stakeholders with cultural risk scores and hazard mapping. The report is designed
          to withstand regulator scrutiny, proving that leadership actively monitors and manages psychosocial culture risks
          while also giving detailed insight into the organisation’s cultural environment — providing precise leading
          indicators on possible harm.
        </p>
      </section>

      {/* Why Organisations Purchase It */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Why organisations purchase it</h2>
        <ul>
          <li>
            As a strategic risk control that turns culture into a measured, managed, and defensible governance area through
            qualitative and quantitative methods.
          </li>
          <li>
            To assess whether the organisation provides a psychosocially safe environment, particularly in relation to
            high-liability hazards like sexual harassment, aggression, bullying, and harassment.
          </li>
          <li>
            To gain leading indicators of risk — an early warning system before incidents multiply (Risk Culture).
          </li>
          <li>To isolate liability to individual behaviour by proving culture is monitored and controlled.</li>
          <li>To satisfy regulators, who already investigate culture when claims escalate.</li>
          <li>
            To give boards and executives defensible evidence of due diligence in the highest-liability hazard category:
            organisational culture.
          </li>
          <li>To transform your codes of conduct and code of ethics.</li>
        </ul>
      </section>

      {/* Existing Deliverables block with CTA */}
      <section style={card}>
        <h2 style={{ marginTop: 0 }}>Deliverables (summary)</h2>
        <ul>
          <li>Validated survey instruments (e.g., COPSOQ, SEQ) and targeted interviews</li>
          <li>Key Culture Risk Indicators with thresholds and trend views</li>
          <li>Actionable Prevention Plan items for leadership</li>
        </ul>
        <p style={{ marginTop: 12 }}>
          <a
            href="/contact"
            style={{
              background: "#f1c40f",
              color: "#000",
              padding: "10px 18px",
              borderRadius: 6,
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Discuss CRD →
          </a>
        </p>
      </section>
    </main>
  );
}

