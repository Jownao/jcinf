import { ImageResponse } from "next/og";

export const alt = "JCINF: Sites, Automações e Suporte Técnico";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #2563EB 55%, #3b82f6 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: 28,
            background: "rgba(255,255,255,0.14)",
            border: "2px solid rgba(255,255,255,0.35)",
            color: "white",
            fontSize: 56,
            fontWeight: 800,
            marginBottom: 44,
          }}
        >
          JC
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
          }}
        >
          Sites, Automações e
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Suporte Técnico
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.85)",
            fontSize: 30,
            fontWeight: 500,
          }}
        >
          JCINF: digitalize seu negócio, sem complicação.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
