export default function Home() {
  return (
    <main className="minimal-page">
      <article className="minimal-card">
        <header className="minimal-header">
          <h1>Zachary Suh</h1>
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
          </a>
        </p>

        <section className="intro">
          <img
            className="intro-photo"
            src="/zach.jpg"
            alt="Portrait"
            width={160}
            height={110}
          />
          <p>
            I&apos;m a 2x founder focused on building systems that solve real,
            lived problems. I&apos;ve worked across healthcare, government
            consulting, fintech, and hospitality without being tied to any one
            industry. I&apos;m drawn to problems I&apos;ve experienced
            firsthand, those tend to matter more and have clearer paths to
            solving. That&apos;s led me to build companies like HomePlate and
            Grownups, both rooted in problems I cared deeply about.
          </p>
        </section>

        <section className="build-section" id="work">
          <p className="section-lead">Here&apos;s what I&apos;ve been building:</p>
          <ul>
            <li>
              Built{" "}
              <a
                className="highlight-link"
                href="https://www.homeplate.care/"
                target="_blank"
                rel="noreferrer"
              >
                HomePlate
              </a>
              , a platform turning idle senior living kitchens into medically
              tailored meal subscription businesses for seniors aging at home.
              Scaled from 0 to $4K in revenue and 42 meal boxes delivered in
              the first month with no paid marketing. Collaborated with Goodwin
              Senior Living on menu design across 4 campuses. Covered by Fox
              News, Yahoo News, and DC News. Learned how broken senior food
              logistics is, and how much leverage exists by operating inside the
              supply chain.
            </li>
            <li>
              Worked on growth at{" "}
              <a
                className="highlight-link"
                href="https://www.ycombinator.com/companies/browser-buddy"
                target="_blank"
                rel="noreferrer"
              >
                Browser Buddy
              </a>{" "}
              (YC W24), focusing on outbound and relationship-building. Built
              lead generation systems and hosted private founder/investor
              dinners in San Francisco that turned into high-trust
              relationships. Came in as a freshman with no network and broke
              into high-signal circles through consistent, direct outreach.
            </li>
            <li>
              Founded{" "}
              <a
                className="highlight-link"
                href="https://grownups-vc.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Grownups
              </a>
              , a consulting firm working with founders across fintech, real
              estate, and private equity. Closed $100K in contracts in the
              first month with no product or external support. Focused on
              identifying real problems and securing commitment before building,
              developing strong sales intuition and speed of execution.
            </li>
            <li>
              Worked on a research project studying how students think and
              solve problems. Led sessions with elementary and middle school
              students and structured 60+ hours of data used to train a
              multi-persona language model. Research was later published on{" "}
              <a
                className="highlight-link"
                href="https://arxiv.org/pdf/2601.17962"
                target="_blank"
                rel="noreferrer"
              >
                arXiv
              </a>
              .
            </li>
            <li>
              Led{" "}
              <a
                className="highlight-link"
                href="https://www.hackfaxpatriothacks.org/"
                target="_blank"
                rel="noreferrer"
              >
                PatriotHacks
              </a>{" "}
              as President, organizing three hackathons with $200K in
              sponsorships and 1,500 participants. Built partnerships with
              companies like Palantir, Microsoft, Salesforce, and ManTech.
            </li>
            <li>
              Received a{" "}
              <a
                className="highlight-link"
                href="https://honorscollege.gmu.edu/admissions/university-scholars"
                target="_blank"
                rel="noreferrer"
              >
                full academic scholarship
              </a>{" "}
              to George Mason University, awarded to top students for academic
              performance and leadership.
            </li>
          </ul>
        </section>

        <section className="build-section">
          <h2>Speaking, Judging &amp; Mentorship</h2>
          <ul>
            <li>
              Speaker at KCSC Gala, presenting on senior care fragmentation and
              solutions through HomePlate.
            </li>
            <li>
              Speaker at ProductFest 2024 &amp; 2025, sharing innovative
              student-built systems and products.
            </li>
            <li>
              Mentor for Patriot Pitch Korea 2026 in Incheon, supporting
              early-stage founders.
            </li>
          </ul>
        </section>

        <section className="build-section">
          <h2>Programs &amp; Communities</h2>
          <ul>
            <li>
              Entrepreneur in Residence at NQB8, led by Auren Hoffman -{" "}
              <a href="https://nqb8.com/" target="_blank" rel="noreferrer">
                nqb8.com
              </a>
            </li>
            <li>
              Participant in Curtin Ignition (Perth, Australia) -{" "}
              <a
                href="https://www.curtin.edu.au/study/professional-development/executive-education/ignition/"
                target="_blank"
                rel="noreferrer"
              >
                Curtin Ignition
              </a>
            </li>
            <li>
              Mentor at MIX Incubator (GMU), supporting teams that went on to
              win $30K+ -{" "}
              <a
                href="https://www.mix.gmu.edu/featured-entrepreneurs"
                target="_blank"
                rel="noreferrer"
              >
                MIX Incubator
              </a>
            </li>
            <li>
              President of PatriotHacks, scaling to $200K in sponsorships and
              1,500 participants while building relationships with Series B
              startups and companies like Microsoft and Palantir -{" "}
              <a
                href="https://www.hackfaxpatriothacks.org/"
                target="_blank"
                rel="noreferrer"
              >
                PatriotHacks
              </a>
            </li>
          </ul>
        </section>

        <section className="build-section" id="news">
          <p className="section-lead">Me in the news :)</p>
          <ul>
            <li>
              <a
                href="https://www.fox5dc.com/video/fmc-88fpy4e21c2setps"
                target="_blank"
                rel="noreferrer"
              >
                Fox 5 DC
              </a>
            </li>
            <li>
              <a
                href="https://www.gmu.edu/news/2026-03/student-tasting-start-success-meal-delivery-service-seniors"
                target="_blank"
                rel="noreferrer"
              >
                George Mason University
              </a>
            </li>
            <li>
              <a
                href="https://patch.com/virginia/fairfaxcity/gmu-students-startup-home-plate-delivers-medically-tailored-meals-fairfax"
                target="_blank"
                rel="noreferrer"
              >
                Patch
              </a>
            </li>
            <li>
              <a
                href="https://wtop.com/virginia/2025/07/virginia-college-student-works-to-help-seniors-eat-healthier-through-meal-plan-service-elderly-eats/"
                target="_blank"
                rel="noreferrer"
              >
                WTOP
              </a>
            </li>
            <li>
              <a
                href="https://www.loudounnow.com/news/aldie-student-wins-top-prize-in-george-mason-pitch-competition/article_b9eed53e-3afe-11ef-8f3e-5b30053c810b.html"
                target="_blank"
                rel="noreferrer"
              >
                Loudoun Now
              </a>
            </li>
            <li>
              <a
                href="https://www.potomaclocal.com/2024/06/24/elderlyeats-students-venture-wins-top-honors-at-george-mason-university/"
                target="_blank"
                rel="noreferrer"
              >
                Potomac Local
              </a>
            </li>
            <li>
              <a
                href="https://www.fairfaxtimes.com/articles/gmu-student-tastes-success-with-senior-meal-delivery-service/article_37ceb509-6ec2-4cfe-868d-0a5182737904.html"
                target="_blank"
                rel="noreferrer"
              >
                Fairfax Times
              </a>
            </li>
          </ul>
        </section>

        <section className="build-section" id="recipes">
          <h2>Side Experiments</h2>
          <p>
            I love food and cooking! I regularly experiment with recipes and
            share them through my cooking content{" "}
            <a
              className="highlight-link"
              href="https://www.instagram.com/zachinthekitchen/"
              target="_blank"
              rel="noreferrer"
            >
              @zachinthekitchen
            </a>{" "}
            :)
          </p>
          <div className="food-grid" aria-label="Food photos">
            <figure className="food-item">
              <img src="/food/food1.png" alt="15 layer potato pave" />
              <figcaption>15 layer potato pave</figcaption>
            </figure>
            <figure className="food-item">
              <img
                src="/food/food2.png"
                alt="Hong Kong french toast with fresh fruits"
              />
              <figcaption>HK Style Toast</figcaption>
            </figure>
            <figure className="food-item">
              <img src="/food/food3.png" alt="Fresh sourdough" />
              <figcaption>Sourdough</figcaption>
            </figure>
            <figure className="food-item">
              <img src="/food/food4.png" alt="Cold soba" />
              <figcaption>Soba Noodles</figcaption>
            </figure>
          </div>
        </section>
      </article>
    </main>
  );
}
