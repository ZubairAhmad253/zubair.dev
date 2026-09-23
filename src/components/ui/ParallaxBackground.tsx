// Soft rainbow light orbs behind the page. GSAPProvider moves each one at a
// different speed while scrolling (data-parallax), which gives depth.
// Radial gradients instead of blur filters keep them cheap to paint.
const orbs = [
    { className: "left-[-12%] top-[8%] h-[40rem] w-[40rem]", color: "rgba(34, 211, 238, 0.22)", speed: -0.3 },
    { className: "right-[-10%] top-[35%] h-[36rem] w-[36rem]", color: "rgba(217, 70, 239, 0.2)", speed: -0.7 },
    { className: "left-[20%] top-[70%] h-[32rem] w-[32rem]", color: "rgba(251, 146, 60, 0.16)", speed: -0.2 },
    { className: "right-[15%] top-[100%] h-[30rem] w-[30rem]", color: "rgba(59, 130, 246, 0.18)", speed: -0.5 },
];

export default function ParallaxBackground() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-[5] overflow-hidden print:hidden">
            {orbs.map((orb) => (
                <span
                    key={orb.className}
                    data-parallax={orb.speed}
                    data-parallax-fixed
                    className={`absolute rounded-full ${orb.className}`}
                    style={{ background: `radial-gradient(circle, ${orb.color}, transparent 65%)` }}
                />
            ))}
        </div>
    );
}
