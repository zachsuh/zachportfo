import type { ReactNode } from "react";

const TERMS: Record<string, string> = {
  om: "The private market equivalent of a prospectus — highlights the property and presents the investment opportunity to potential buyers.",
  prospectus:
    "A formal SEC-required document for public securities offerings, detailing investment risks, financial performance, and business strategy.",
  boe: "A quick check on whether a deal makes sense at the asking price, covering revenue, vacancy, NOI, cap rate, and rough debt sizing.",
  "prop-rel":
    "Direct relationships built with property owners, operators, or brokers — used to find deals before they hit the market.",
  "off-market":
    "Proactively finding deals not publicly listed by reaching out directly to property owners.",
  noi: "Income an asset generates after operating costs, but before debt service (mortgage payments).",
  "cap-rate":
    "NOI ÷ purchase price. Selling at a higher cap rate than you bought means you lost value, even if NOI didn't change.",
  "debt-sizing":
    "Estimating how much a lender will loan on a property, using LTV and DSCR as the two determining tests.",
  ioi: "A non-binding signal sent to a seller with the price range you'd consider, after reviewing the deal at a high level.",
  loi: "More specific than an IOI. Comes after high-level diligence but before full due diligence and before the PSA.",
  psa: "The legal contract governing the sale. Once signed, both parties are bound — the seller must sell, the buyer must buy.",
  ic: "The firm's internal decision gate. Approves, conditionally approves, or kills deals based on thesis, underwriting, and risk.",
  ltv: "Caps the loan as a percentage of the property's value — one of two tests lenders use to size debt.",
  dscr: "Lenders require NOI to be at least 1.25x annual debt service, ensuring income covers mortgage payments with a cushion.",
  coc: "Cash flow after debt service ÷ equity invested. Your annual return on your equity check while holding the asset.",
};

function Term({
  id,
  href,
  children,
}: {
  id: string;
  href?: string;
  children: ReactNode;
}) {
  return (
    <span className="term-wrapper">
      <a href={href ?? `#def-${id}`} className="term-link">
        {children}
      </a>
      <span className="term-tooltip">{TERMS[id]}</span>
    </span>
  );
}

export default function PECRELifecycle() {
  return (
    <main className="minimal-page">
      <article className="minimal-card">
        <header className="minimal-header">
          <h1>
            <a href="/">Zachary Suh</a>
          </h1>
        </header>
        <p className="quick-links">
          <a
            href="https://www.linkedin.com/in/zacharysuh/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          <a
            href="https://calendly.com/suhzach4/meeting-times"
            target="_blank"
            rel="noreferrer"
          >
            Chat
          </a>{" "}
          <a href="/writings">Writings</a>
        </p>

        <section className="build-section">
          <p className="section-lead">
            The Concept of the PE / CRE PE Acquisition Lifecycle
          </p>
          <p className="writing-date">May 12, 2026</p>
        </section>

        <p>
          Private equity, and finance generally, has always seemed pretty
          complicated to me. Today, I asked myself a few questions, like what
          private equity really is and what its normal lifecycle looks like.
          This is a super high-level overview of what I found: the private
          equity process is actually quite structured and fairly simple. —Zach
        </p>

        <section className="build-section">
          <h2>Step 1: Originating &amp; Deal Sourcing</h2>
          <p>
            When a larger asset, such as real estate, is being sold by a seller
            to a buyer, the seller will typically use a broker, essentially the
            middleman. The broker usually creates an{" "}
            <Term id="om">OM, or offering memorandum</Term>, which highlights
            the property and presents the investment opportunity.
          </p>
          <p>
            Buyers, such as PE firms, can also find deals through{" "}
            <Term id="prop-rel">proprietary relationships</Term> or{" "}
            <Term id="off-market">off-market outreach</Term>. The acquisition
            team reviews the OM, runs a{" "}
            <Term id="boe">back-of-the-envelope analysis</Term>, and decides
            whether the deal is worth pursuing.
          </p>
        </section>

        <section className="build-section">
          <h2>Step 2: Initial Underwriting &amp; IOI</h2>
          <p>
            The analyst builds an underwriting model in Excel. This usually
            includes pro forma, aka projected,{" "}
            <Term id="noi">NOI, net operating income</Term>,{" "}
            <Term id="cap-rate">cap rate</Term> assessment,{" "}
            <Term id="debt-sizing">debt sizing</Term>, and projected
            IRR/equity multiple.
          </p>
          <p>
            If the numbers work, the firm submits an{" "}
            <Term id="ioi">Indication of Interest</Term>, or a non-binding
            letter of intent, with a price range.
          </p>
        </section>

        <section className="build-section">
          <h2>Step 3: Due Diligence</h2>
          <p>
            After going under contract, once the{" "}
            <Term id="psa">PSA</Term> is executed, the data room opens. This
            is the most intensive phase.
          </p>
          <p>
            The team reviews every document in the virtual data room: leases
            and all clauses, operating expense invoices vs. the pro forma,
            environmental reports, permits, and more. The analyst reconciles
            the source documents against the model.
          </p>
          <p>
            Any material variance can trigger a re-trade, price renegotiation,
            or a deal kill.
          </p>
        </section>

        <section className="build-section">
          <h2>Step 4: IC Approval</h2>
          <p>
            The team prepares an{" "}
            <Term id="ic">investment committee</Term> memo summarizing the deal
            thesis, underwriting assumptions, sensitivity analysis, key risks,
            and proposed hold strategy.
          </p>
          <p>
            The IC can approve the deal, conditionally approve it subject to
            further DD or a price reduction, or kill the deal. This is the key
            internal decision gate.
          </p>
        </section>

        <section className="build-section">
          <h2>Step 5: Financing / Debt Placement</h2>
          <p>
            Simultaneously or after IC approval, the team works with a debt
            broker or direct lenders to term out financing.
          </p>
          <p>
            Lenders receive the same financials, such as T12, rent roll, and
            leases, and conduct their own underwriting. The loan terms,
            including rate,{" "}
            <Term id="ltv" href="#def-debt-sizing">
              LTV
            </Term>
            , IO period, and recourse, feed back into the equity model.
          </p>
        </section>

        <section className="build-section">
          <h2>Step 6: Closing</h2>
          <p>
            The title company coordinates closing. Legal counsel reviews the{" "}
            <Term id="psa">PSA</Term>, loan docs, and entity structure. Funds
            are wired. Asset management then takes over from acquisitions.
          </p>
        </section>

        <section className="build-section" style={{ marginTop: "24px" }}>
          <h2>CRE PE — Single-asset acquisition lifecycle</h2>
          <div className="ch-flow" style={{ marginTop: "14px" }}>

            <div className="ch-box">
              <div className="ch-lbl">Phase 1</div>
              <div className="ch-title">Origination &amp; sourcing</div>
              <div className="ch-desc">Broker sends OM · acquisitions analyst runs BOE · investment decision to pursue</div>
              <div className="ch-tags">
                <span className="ch-tag">Broker / seller</span>
                <span className="ch-tag">Acquisitions analyst</span>
                <span className="ch-tag">Docs: OM, rent roll teaser</span>
              </div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-box">
              <div className="ch-lbl">Phase 2</div>
              <div className="ch-title">Initial underwriting &amp; IOI / LOI</div>
              <div className="ch-desc">Analyst builds Excel model · cap rate, NOI, IRR, equity multiple · firm submits IOI or LOI</div>
              <div className="ch-tags">
                <span className="ch-tag">Acquisitions VP</span>
                <span className="ch-tag">Financial analyst</span>
                <span className="ch-tag">T12, rent roll, market comps</span>
              </div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-box">
              <div className="ch-lbl">Phase 3</div>
              <div className="ch-title">Due diligence (PSA executed, VDR open)</div>
              <div className="ch-desc">Lease review · opex reconciliation · PCA · environmental · title &amp; survey · source-doc variance triggers re-trade or kill</div>
              <div className="ch-tags">
                <span className="ch-tag">Legal counsel</span>
                <span className="ch-tag">3rd party engineers</span>
                <span className="ch-tag">Title / surveyor</span>
                <span className="ch-tag">Env. consultant</span>
              </div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-gate-row">
              <div className="ch-diamond">
                <div className="ch-diamond-inner">IC memo<br />&amp; approval</div>
              </div>
              <div className="ch-branch">
                <div className="ch-branch-line" />
                <div className="ch-branch-box">Re-trade / kill</div>
              </div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-box">
              <div className="ch-lbl">Phase 4 — IC approval (decision gate)</div>
              <div className="ch-desc">IC memo covers: deal thesis · underwriting assumptions · sensitivity table · risks · hold strategy</div>
              <div className="ch-desc-last">Principals + Managing Partners vote: approve / conditional / kill</div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-box">
              <div className="ch-lbl">Phase 5</div>
              <div className="ch-title">Debt placement &amp; financing</div>
              <div className="ch-desc">Debt broker / direct lender underwrites · loan terms feed back into equity model</div>
              <div className="ch-tags">
                <span className="ch-tag">Debt broker / lender</span>
                <span className="ch-tag">T12, leases, rent roll</span>
                <span className="ch-tag">Rate, LTV, IO period, recourse</span>
              </div>
            </div>

            <div className="ch-arrow" />

            <div className="ch-box">
              <div className="ch-lbl">Phase 6</div>
              <div className="ch-title">Closing</div>
              <div className="ch-desc-last">Title company coordinates · legal reviews PSA + loan docs · funds wire · asset management takes over from acquisitions</div>
            </div>

          </div>
        </section>

        <section className="build-section">
          <h2>Definitions</h2>

          <div id="def-boe" className="def-entry">
            <p className="def-term-name">
              Back-of-the-Envelope Analysis / &ldquo;Back of the Napkin&rdquo;
            </p>
            <p>
              Business analysts can&apos;t run a full Excel model on every{" "}
              <Term id="om">OM</Term> sent to them, so they do a BOE first. The
              goal is to answer: does this deal even make sense at this price?
            </p>
            <p>
              Inputs include revenue, vacancy and credit loss, operating
              expenses, <Term id="noi">NOI</Term>, implied cap rate, rough debt
              sizing, and <Term id="coc">cash-on-cash</Term>.
            </p>
          </div>

          <div id="def-prospectus" className="def-entry">
            <p className="def-term-name">Prospectus</p>
            <p>
              A prospectus is a formal legal document required by the SEC for
              new security offerings, such as stocks, bonds, and mutual funds.
              It gives investors detailed information about an
              investment&apos;s risks, financial performance, and business
              strategy.
            </p>
            <p>
              <a
                href="https://d18rn0p25nwr6d.cloudfront.net/CIK-0001018724/beae1c3e-26fc-44ce-b5eb-ed1c3f6f6d63.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Amazon&apos;s prospectus
              </a>
            </p>
          </div>

          <div id="def-om" className="def-entry">
            <p className="def-term-name">Offering Memorandum / &ldquo;OM&rdquo;</p>
            <p>
              An OM is the private market equivalent of a public company&apos;s{" "}
              <Term id="prospectus">prospectus</Term>. It contains information
              such as the business overview, investment opportunity, use of
              proceeds, financial statements, risk factors, and other key deal
              details.
            </p>
            <p>
              <a
                href="https://www.cbre.com/resources/fileassets/US-SMPL-52394/b324d9c3/b0d07518-2a0c-4e0b-ad0a-83421417a6eb.pdf"
                target="_blank"
                rel="noreferrer"
              >
                CBRE example
              </a>
            </p>
          </div>

          <div id="def-prop-rel" className="def-entry">
            <p className="def-term-name">Proprietary Relationships</p>
            <p>
              Proprietary relationships refer to direct relationships a buyer or
              investor has built with property owners, operators, or brokers.
            </p>
          </div>

          <div id="def-off-market" className="def-entry">
            <p className="def-term-name">Off-Market Outreach</p>
            <p>
              Off-market outreach is the proactive effort to find deals that
              aren&apos;t publicly listed, usually by reaching out directly to
              property owners.
            </p>
          </div>

          <div id="def-noi" className="def-entry">
            <p className="def-term-name">Net Operating Income</p>
            <p>
              Net operating income is the income an asset generates after paying
              operating costs, but before debt service. The idea is that it
              evaluates the revenue-generating capacity of a property before
              mortgage payments.
            </p>
          </div>

          <div id="def-cap-rate" className="def-entry">
            <p className="def-term-name">Implied Cap Rate</p>
            <p>
              Implied cap rate = <Term id="noi">NOI</Term> / Purchase price.
            </p>
            <p>
              Cap rate expansion means you bought at one cap rate and sold at a
              higher cap rate. For example, if you buy at a 6.5% cap and sell
              at a 7% cap, you lost value even if NOI stayed flat.
            </p>
          </div>

          <div id="def-debt-sizing" className="def-entry">
            <p className="def-term-name">Rough Debt Sizing</p>
            <p>
              Debt sizing is the process of estimating how much a lender will
              loan on a property. Lenders usually use two tests: LTV and{" "}
              <Term id="dscr">DSCR</Term>.
            </p>
            <p>
              LTV caps the loan as a percentage of the property&apos;s value.
              DSCR makes sure the property&apos;s income is enough to cover the
              debt payments. The lower of the two determines the actual loan
              amount, which then tells you how much equity you need to bring.
            </p>
          </div>

          <div id="def-dscr" className="def-entry">
            <p className="def-term-name">DSCR / Debt Service Coverage Ratio</p>
            <p>
              DSCR is how lenders check that <Term id="noi">NOI</Term> covers
              the mortgage payments with a cushion. A 1.25x DSCR means NOI
              must be at least 1.25x the annual debt service.
            </p>
          </div>

          <div id="def-coc" className="def-entry">
            <p className="def-term-name">Cash-on-Cash</p>
            <p>Cash-on-cash = cash flow after debt service ÷ equity invested.</p>
            <p>
              CoC is the year-one yield on your equity check. It answers: while
              I&apos;m holding this asset, what am I getting paid annually?
            </p>
          </div>

          <div id="def-ioi" className="def-entry">
            <p className="def-term-name">Indication of Interest</p>
            <p>
              An Indication of Interest is an earlier signal before serious
              diligence. The message it sends to the seller or broker is: we
              looked at your numbers at a high level, we&apos;re interested,
              and here is the price range we would consider.
            </p>
          </div>

          <div id="def-loi" className="def-entry">
            <p className="def-term-name">Letter of Intent / LOI</p>
            <p>
              The LOI is the later, more specific document. It comes after the
              buyer has done enough high-level diligence to have an idea of
              price and structure, but before the full due diligence deep dive
              and before the{" "}
              <Term id="psa">purchase and sale agreement</Term> is drafted.
            </p>
          </div>

          <div id="def-psa" className="def-entry">
            <p className="def-term-name">Purchase and Sale Agreement / PSA</p>
            <p>
              A PSA is the legal contract between a buyer and seller that
              governs the sale of a property.
            </p>
            <p>
              Before the PSA, everything is mostly conversation and
              negotiation. Once the PSA is signed, both parties are legally
              bound to the terms: the seller has to sell, and the buyer has to
              buy, subject to the agreed conditions.
            </p>
          </div>

          <div id="def-ic" className="def-entry">
            <p className="def-term-name">Investment Committee</p>

            <p className="def-subheading">Who Sits on the IC</p>
            <ul>
              <li>
                <strong>Managing Partners / Founders</strong> — The most senior
                people at the firm. They have final say. They&apos;ve typically
                been in the business for decades and have seen multiple market
                cycles. Their vote carries the most weight.
              </li>
              <li>
                <strong>Partners / Senior Managing Directors</strong> — Senior
                dealmakers who oversee specific deals or asset types. They
                sponsor deals to the IC, meaning they are the ones presenting
                and advocating for the investment.
              </li>
              <li>
                <strong>Chief Investment Officer / CIO</strong> — Not every
                firm has one, but when they do, the CIO is responsible for the
                overall investment strategy and portfolio. They focus on whether
                a deal fits the fund&apos;s broader thesis.
              </li>
              <li>
                <strong>Chief Financial Officer / CFO</strong> — Reviews the
                financial integrity of the deal, including fund-level
                implications, cash flow, fees, and fund structure.
              </li>
              <li>
                <strong>Head of Asset Management</strong> — Focuses on whether
                the business plan is actually executable. They have managed
                properties before and can spot unrealistic assumptions.
              </li>
              <li>
                <strong>Head of Risk</strong> — Reviews downside scenarios,
                such as what happens if the market turns, vacancy spikes, or
                interest rates rise. They make sure the firm is not taking on
                too much risk.
              </li>
              <li>
                <strong>Legal Counsel / General Counsel</strong> — Reviews
                legal risks, including title issues, lease structures,
                regulatory issues, and anything that could expose the firm to
                liability.
              </li>
            </ul>

            <p className="def-subheading">
              Who Presents to the IC, But Is Not a Voting Member
            </p>
            <p>
              These are the people who do the work and bring the deal to the
              IC:
            </p>
            <ul>
              <li>
                <strong>Vice President / Director</strong> — Runs the deal
                process, manages the analyst team, and oversees the model.
              </li>
              <li>
                <strong>Associate</strong> — Assists with underwriting, due
                diligence, and the model.
              </li>
              <li>
                <strong>Analyst</strong> — Builds the financial model,
                reconciles due diligence findings, and runs scenarios.
              </li>
            </ul>
            <p>
              The analyst and associate do the heavy lifting. The VP presents
              the deal. The IC asks hard questions and decides.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
