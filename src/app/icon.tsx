import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon: rainbow tile with the Z mark
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 16,
                    background: "linear-gradient(135deg, #22d3ee, #8b5cf6 50%, #fb923c)",
                    color: "white",
                    fontSize: 42,
                    fontWeight: 800,
                }}
            >
                Z
            </div>
        ),
        size
    );
}
