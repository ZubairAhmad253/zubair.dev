import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Home-screen icon for iPhone / iPad
export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #22d3ee, #8b5cf6 50%, #fb923c)",
                    color: "white",
                    fontSize: 110,
                    fontWeight: 800,
                }}
            >
                Z
            </div>
        ),
        size
    );
}
