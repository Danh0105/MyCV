import React from "react";
import avatar from "./assets/avatar.jpg";
import html2pdf from "html2pdf.js/dist/html2pdf.bundle.min.js";

/* ================= TIỆN ÍCH ================= */
const getAge = (iso) => {
  const dob = new Date(iso);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  return age;
};

/* ================= HEADER ================= */
const Header = () => {
  const age = getAge("2000-05-01");

  return (
    <header className="mb-4">
      <div className="d-flex align-items-start gap-3">
        <img
          src={avatar}
          alt="Ảnh đại diện Nguyễn Xuân Danh"
          className="rounded-circle shadow-sm avatar-lg flex-shrink-0"
          width={112}
          height={112}
          loading="lazy"
        />

        <div>
          <h1 className="h2 mb-2 text-dark">NGUYỄN XUÂN DANH</h1>

          <p className="fs-5 fw-semibold text-primary mb-2">
            Lập trình viên Full-stack (Thiên về Backend) – NestJS | ReactJS | PostgreSQL
          </p>

          <p className="mb-1">
            📍 Gò Vấp, TP. Hồ Chí Minh &nbsp;|&nbsp;
            📞 <a href="tel:+84326968216">+84 326 968 216</a>
            &nbsp;|&nbsp; ✉️{" "}
            <a href="mailto:danh010500@gmail.com">danh010500@gmail.com</a>
          </p>

          <p className="link-muted mb-0">
            🔗 GitHub:{" "}
            <a href="https://github.com/Danh0105" target="_blank" rel="noreferrer">
              github.com/Danh0105
            </a>
            &nbsp;|&nbsp; 🔗 Portfolio:{" "}
            <a href="https://shorturl.at/mryPU" target="_blank" rel="noreferrer">
              https://shorturl.at/mryPU
            </a>
          </p>

          <p className="mt-2 text-muted small">
            🎂 Ngày sinh: 01/05/2000 • Tuổi: {age}
          </p>
        </div>
      </div>
    </header>
  );
};

/* ================= COMPONENT CHUNG ================= */
const Section = ({ id, title, children }) => (
  <section id={id} className="mb-4">
    <h2 className="section-title">{title}</h2>
    {children}
  </section>
);

const ExperienceItem = ({ role, company, location, time, points, result }) => (
  <article className="mb-4">
    <div className="d-flex justify-content-between align-items-start gap-3">
      <div>
        <div className="item-title fw-semibold">
          {role} <span className="text-muted">| {company}</span>
        </div>
        <div className="item-subtitle text-muted">
          {location} • {time}
        </div>
      </div>
      {result && <span className="kpi-badge">{result}</span>}
    </div>
    <ul className="mt-2 compact">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
  </article>
);

const ProjectsItem = ({ name, role, tech, period, bullets, link }) => (
  <article className="mb-4">
    <div className="d-flex justify-content-between align-items-start gap-3">
      <div>
        <div className="item-title fw-semibold">{name}</div>
        <div className="item-subtitle text-muted">
          {role} • {tech} • {period}
        </div>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-outline-primary"
        >
          Xem
        </a>
      )}
    </div>
    <ul className="mt-2 compact">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
  </article>
);

/* ================= APP ================= */
export default function App() {
  const downloadPDF = () => {
    const element = document.querySelector(".cv-container");
    const noPrintEls = element.querySelectorAll(".no-print");

    // 1️⃣ Ẩn nút trước khi export
    noPrintEls.forEach(el => (el.style.display = "none"));

    html2pdf()
      .set({
        margin: 0,
        filename: "Nguyen-Xuan-Danh-CV.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save()
      .then(() => {
        // 2️⃣ Hiện lại sau khi export xong
        noPrintEls.forEach(el => (el.style.display = ""));
      });
  };


  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main className="cv-container">
      {/*    <div className="d-flex justify-content-end mb-3 no-print">
        <button onClick={downloadPDF} className="btn btn-primary btn-sm">
          ⬇️ Tải CV (PDF)
        </button>
      </div> */}


      {/* ===== TRANG 1 ===== */}
      <div className="page">
        <Header />

        <Section id="summary" title="Tóm tắt chuyên môn">
          <p>
            Lập trình viên Full-stack thiên về Backend, có kinh nghiệm xây dựng
            ứng dụng web mở rộng với <strong>NestJS, ReactJS, PostgreSQL</strong>.
            Thành thạo thiết kế CSDL, phát triển API REST, tích hợp thanh toán,
            triển khai hệ thống thực tế và làm việc theo mô hình Agile/Scrum.
          </p>
        </Section>
        <Section id="experience" title="Kinh nghiệm làm việc">
          <ExperienceItem
            role="Lập trình viên Full-stack"
            company="ICHI SKILL (Nền tảng EdTech & Thương mại điện tử)"
            location="TP. Hồ Chí Minh"
            time="2024 – Nay"
            result="99% uptime"
            points={[
              "Xây dựng và vận hành nền tảng KidoEdu.vn bằng ReactJS và NestJS.",
              "Thiết kế CSDL, tối ưu truy vấn giúp cải thiện hiệu năng ~25%.",
              "Phát triển API cho sản phẩm, giỏ hàng, đơn hàng và thanh toán.",
              "Tích hợp cổng thanh toán MoMo và VNPay.",
            ]}
          />

          <ExperienceItem
            role="Thực tập sinh lập trình"
            company="Appscyclone"
            location="TP. Hồ Chí Minh"
            time="2023"
            points={[
              "Tham gia xây dựng hệ thống quản lý kho bằng Laravel & MySQL.",
              "Triển khai phân quyền người dùng (RBAC).",
              "Hỗ trợ thiết kế CSDL và tài liệu API.",
            ]}
          />
        </Section>
        <Section id="projects" title="Dự án tiêu biểu">
          <ProjectsItem
            name="KidoEdu.vn – Nền tảng EdTech"
            role="Lập trình viên Full-stack"
            tech="ReactJS, NestJS, PostgreSQL"
            period="2024 – Nay"
            bullets={[
              "Xây dựng hệ thống thương mại điện tử cho giáo dục STEM.",
              "Phát triển API, xác thực JWT và thanh toán trực tuyến.",
            ]}
            link="https://www.kidoedu.edu.vn/"
          />
        </Section>

        <Section id="education" title="Học vấn">
          <div
            className="item-title fw-semibold"
            style={{ cursor: "pointer", color: "#0d6efd" }}
            onClick={() =>
              openLink(
                "https://res.cloudinary.com/dlnkeb4dm/image/upload/v1767153115/engchd8sd2s64tkuiqtm.jpg"
              )
            }
          >
            Kỹ sư Công nghệ Thông tin – Đại học Cần Thơ
            <span className="text-muted small ms-1">(Nhấn để xem)</span>
          </div>
          <div className="item-subtitle text-muted">2018 – 2023</div>
        </Section>

        <Section id="certs" title="Chứng chỉ">
          <div className="row">
            <div className="col-md-6">
              <div
                className="border rounded p-3 h-100"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  openLink(
                    "https://res.cloudinary.com/dlnkeb4dm/image/upload/v1767154668/mcutipemc62pkjbi4hnh.jpg"
                  )
                }
              >
                <div className="fw-bold">
                  Chứng nhận hoàn thành
                  <span className="text-muted small"> (Nhấn để xem)</span>
                </div>
                <div className="text-muted">Appscyclone • 2023</div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="border rounded p-3 h-100"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  openLink(
                    "https://res.cloudinary.com/dlnkeb4dm/image/upload/v1767153115/engchd8sd2s64tkuiqtm.jpg"
                  )
                }
              >
                <div className="fw-bold">
                  Kỹ sư Công nghệ Thông tin
                  <span className="text-muted small"> (Nhấn để xem)</span>
                </div>
                <div className="text-muted">Đại học Cần Thơ • 2023</div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main >
  );
}
