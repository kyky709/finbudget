import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "FinBudget - Application de Gestion de Budget Personnel";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #34D399 0%, #059669 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <span
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Fin<span style={{ color: "#10B981" }}>Budget</span>
          </span>
        </div>

        {/* Tagline */}
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            margin: "0 60px",
            lineHeight: 1.2,
          }}
        >
          Maîtrisez vos finances,
          <br />
          <span style={{ color: "#10B981" }}>simplifiez votre vie</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "#94A3B8",
            textAlign: "center",
            margin: "24px 80px 0",
            maxWidth: "800px",
          }}
        >
          L'application #1 de gestion de budget personnel
        </p>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "48px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "32px", fontWeight: "bold", color: "#10B981" }}>
              50K+
            </span>
            <span style={{ fontSize: "18px", color: "#94A3B8" }}>utilisateurs</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "32px", fontWeight: "bold", color: "#10B981" }}>
              4.9/5
            </span>
            <span style={{ fontSize: "18px", color: "#94A3B8" }}>note moyenne</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "32px", fontWeight: "bold", color: "#10B981" }}>
              100%
            </span>
            <span style={{ fontSize: "18px", color: "#94A3B8" }}>gratuit</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
