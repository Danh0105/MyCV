import React from "react";
import avatar from './assets/avatar.jpg'
import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";


const Header = () => {
  const age = getAge("2000-05-01"); // 01/05/2000

  return (
    <header className="mb-4" role="banner">
      <div className="d-flex align-items-start gap-3">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Portrait of Nguyen Xuan Danh"
          className="rounded-circle shadow-sm avatar-lg flex-shrink-0"
          width={112}
          height={112}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
        />

        {/* Text block */}
        <div>
          <h1 className="h2 mb-2 text-dark">NGUYEN XUAN DANH</h1>

          <p className="fs-5 fw-semibold text-primary mb-2">
            Backend-focused Full-stack Developer (NestJS | ReactJS | PostgreSQL)
          </p>

          <p className="mb-1">
            <span aria-label="Location">📍</span> Go Vap, Ho Chi Minh City &nbsp;|&nbsp;
            <span aria-label="Phone">📞</span>{" "}
            <a className="link-body-emphasis" href="tel:+84326968216">+84 326 968 216</a>
            &nbsp;|&nbsp; <span aria-label="Email">✉️</span>{" "}
            <a className="link-primary" href="mailto:danh010500@gmail.com">danh010500@gmail.com</a>
          </p>

          <p className="link-muted mb-0">
            🔗 GitHub:{" "}
            <a
              href="https://github.com/Danh0105"
              target="_blank"
              rel="noopener noreferrer"
              className="link-body-emphasis"
            >
              github.com/Danh0105
            </a>
            &nbsp;|&nbsp; 🔗 Portfolio:{" "}
            <a
              href="https://shorturl.at/mryPU"
              target="_blank"
              rel="noopener noreferrer"
              className="link-body-emphasis"
            >
              https://shorturl.at/mryPU
            </a>
          </p>

          {/* 👉 DOB line */}
          <p className="mt-2 text-muted small" aria-label="Date of birth">
            🎂 DOB: <span className="text-body">01 May 2000</span> &nbsp;•&nbsp; Age: {age}
          </p>
        </div>
      </div>
    </header>
  );
};

const getAge = (iso) => {
  const dob = new Date(iso);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  return age;
};


// Section semantic + a11y-ready
const Section = ({ id, title, children }) => (
  <section id={id} className="mb-4" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`} className="section-title h6 text-uppercase text-primary fw-bold mb-2">
      {title}
    </h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, company, location, time, points, result }) => (
  <article className="mb-4" aria-label={`${role} at ${company}`}>
    <div className="d-flex justify-content-between align-items-start gap-3">
      <div>
        <div className="item-title fw-semibold">
          {role} <span className="text-muted">| {company}</span>
        </div>
        <div className="item-subtitle text-muted">{location} • {time}</div>
      </div>
      {result && <span className="kpi-badge" aria-label="Key metric">{result}</span>}
    </div>
    <ul className="mt-2 compact">
      {points.map((p, i) => <li key={i}>{p}</li>)}
    </ul>
  </article>
);

const ProjectsItem = ({ name, role, tech, period, bullets, link }) => (
  <article className="mb-4" aria-label={`Project ${name}`}>
    <div className="d-flex justify-content-between align-items-start gap-3">
      <div>
        <div className="item-title fw-semibold">{name}</div>
        <div className="item-subtitle text-muted">{role} • {tech} • {period}</div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
          aria-label={`Open live project: ${name}`}
        >
          Live
        </a>
      )}
    </div>
    <ul className="mt-2 compact">
      {bullets.map((b, i) => <li key={i}>{b}</li>)}
    </ul>
  </article>
);

export default function App() {
  const downloadPDF = () => {
    const element = document.querySelector(".cv-container");

    html2pdf()
      .set({
        margin: 0,
        filename: "Nguyen-Xuan-Danh-CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  };
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <main className="cv-container" role="main">
      {/* PAGE 1 */}
      <div className="d-flex justify-content-end mb-3 no-print">
        <button onClick={downloadPDF} className="btn btn-primary btn-sm no-print">
          ⬇️ Download CV (PDF)
        </button>

      </div>

      <div className="page1">
        <Header />

        <Section id="summary" title="Professional Summary">
          <p className="mb-0">
            Motivated Backend-focused Full-stack Developer with hands-on experience building scalable web applications using
            <strong> NestJS, ReactJS, PostgreSQL</strong>, and RESTful API architecture. Skilled in database schema design, robust backend services,
            secure payment integration, and deployment (Nginx + SSL). Passionate about performance optimization, problem-solving, and delivering
            production-ready features in Agile/Scrum environments.
          </p>
        </Section>

        <Section id="skills" title="Core Technical Skills">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold mb-2">Backend</div>
                  <div>NestJS, Node.js, Laravel (basic), RESTful APIs, Authentication, JWT, MVC/OOP</div>
                  <div className="fw-bold mt-3 mb-2">Database</div>
                  <div>PostgreSQL, MySQL, SQL Server, MongoDB, Neo4j</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold mb-2">Frontend</div>
                  <div>ReactJS, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap</div>
                  <div className="fw-bold mt-3 mb-2">DevOps & Tools</div>
                  <div>Docker, Nginx, SSL (Certbot), GitHub/GitLab, Postman, Figma (basic)</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-3 mt-1">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold mb-2">Architectures & Concepts</div>
                  <div>CRUD, MVC, OOP, API Integration, TypeORM, Microservices (basic)</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <div className="fw-bold mb-2">Development Process</div>
                  <div>Agile/Scrum, Requirement Analysis, Unit Testing, Code Review, CI/CD (basic)</div>
                </div>
              </div>
            </div>
          </div>
        </Section>


      </div>

      {/* PAGE 2 */}
      <div className="page2">
        <Section id="experience" title="Professional Experience">
          <ExperienceItem
            role="Full-stack Developer"
            company="ICHI SKILL (EdTech & E-commerce Platform)"
            location="Ho Chi Minh"
            time="2024 – Present"
            result="99% uptime"
            points={[
              "Built and maintained the KidoEdu.vn platform using ReactJS (Frontend), NestJS + PostgreSQL (Backend).",
              "Designed and optimized database structures, improving query performance by ~25% via indexing and query tuning.",
              "Developed secure REST APIs for catalog, authentication, cart, orders, and checkout flows.",
              "Integrated MoMo & VNPay payment gateways with token-based validation and error handling.",
              "Implemented JWT-based authentication & roles for users/admin dashboards.",
              "Collaborated in Agile sprints, contributing to 90% sprint task completion rate."
            ]}
          />

          <ExperienceItem
            role="Software Developer Intern"
            company="Appscyclone"
            location="Ho Chi Minh"
            time="2023"
            points={[
              "Contributed to Inventory Management System: Authentication, Roles, Locations, Assets modules using Laravel + MySQL.",
              "Implemented RBAC to enhance security, reducing unauthorized access risks by ~30%.",
              "Participated in DB design and API documentation using Postman; improved UX flows with team feedback.",
              "Collaborated in Scrum ceremonies and test case reviews."
            ]}
          />
        </Section>


      </div>
      <div className="page3">
        <Section id="projects" title="Selected Projects">
          <ProjectsItem
            name="KidoEdu.vn – Full-stack E-commerce EdTech Platform"
            role="Full-stack Developer"
            tech="ReactJS, NestJS, PostgreSQL, TypeORM, Nginx, MoMo/VNPay"
            period="2024 – Present"
            bullets={[
              "Developed a complete EdTech e-commerce system for STEM kits & educational content.",
              "Built REST APIs for product catalogs, JWT auth, cart, orders, and payments.",
              "Enhanced query performance (~20%) using indexes and query refactoring.",
              "Integrated MoMo/VNPay with server-side validation and robust error handling.",
              "Optimized responsive UI and interactive UX."
            ]}
            link="https://www.kidoedu.edu.vn/"
          />

          <ProjectsItem
            name="Inventory Management System – Appscyclone"
            role="Backend Developer Intern"
            tech="Laravel, MySQL, Blade, Bootstrap, REST APIs"
            period="2023"
            bullets={[
              "Implemented Authentication, Roles, Locations, Assets modules.",
              "Enabled RBAC; improved system reliability and access control.",
              "Contributed to DB schema and API documentation with Postman."
            ]}
          />

          <ProjectsItem
            name="Vietnam Agricultural Social Network – Recommendation Module"
            role="Full-stack & Recommendation Module Developer"
            tech="React + Vite, Laravel API, ML-based Similarity Scoring"
            period="2023"
            bullets={[
              "Built similarity matrix and ranking criteria for buyer–seller matching.",
              "Developed UI for displaying suggestions and proposals.",
              "Integrated ML logic into user-facing workflows."
            ]}
          />
        </Section>
      </div>
      <div className="page4">
        <Section id="education" title="Education">
          <div className="d-flex justify-content-between">
            <div>
              <div className="item-title fw-semibold">Bachelor of Computer Science – Can Tho University (CTU)</div>
              <div className="item-subtitle text-muted">2018 – 2023</div>
            </div>
          </div>
          <ul className="mt-2 compact">
            <li>Graduation Project: Vietnam Agricultural Social Network with Transaction Recommendation System.</li>
            <li>Focus areas: Database Design, SDLC, ML-based Recommendation.</li>
          </ul>
        </Section>

        <Section id="certs" title="Certificates">
          <div className="row">
            <div className="col-md-6">
              <div className="border rounded p-3 h-100" onClick={() => openLink('https://res.cloudinary.com/dlnkeb4dm/image/upload/v1767154668/mcutipemc62pkjbi4hnh.jpg')} style={{ cursor: 'pointer' }}>
                <div className="fw-bold">Certificate of Achievement</div>
                <div className="text-muted">Appscyclone • 2023</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3 h-100" onClick={() => openLink('https://res.cloudinary.com/dlnkeb4dm/image/upload/v1767153115/engchd8sd2s64tkuiqtm.jpg')} style={{ cursor: 'pointer' }}>
                <div className="fw-bold">Information technology engineer</div>
                <div className="text-muted">Can Tho University • 2023</div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="soft-skills" title="Soft Skills">
          <ul className="compact">
            <li>Problem-Solving & Critical Thinking</li>
            <li>Team Collaboration & Agile Communication</li>
            <li>Ownership & Accountability</li>
            <li>Self-learning & Adaptability</li>
            <li>Time Management & Task Prioritization</li>
          </ul>
        </Section>

        <Section id="process-tools" title="Development Process & Tools">
          <ul className="compact">
            <li>Agile/Scrum • Sprint Planning • Git Branch Workflow • Code Review</li>
            <li>API Documentation (Swagger/Postman) • UI Feedback Collaboration (Figma)</li>
          </ul>
        </Section>

        <Section id="languages" title="Languages">
          <div className="row">
            <div className="col-md-6">
              <div className="border rounded p-3 h-100" role="listitem">
                <div className="fw-bold">Vietnamese</div>
                <div className="text-muted">Native</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="border rounded p-3 h-100" role="listitem">
                <div className="fw-bold">English</div>
                <div className="text-muted">Intermediate (Technical reading & collaboration)</div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
