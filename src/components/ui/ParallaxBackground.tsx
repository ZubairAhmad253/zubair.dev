// Soft rainbow light orbs behind the page. GSAPProvider moves each one at a
// different speed while scrolling (data-parallax), which gives depth.
// Radial gradients instead of blur filters keep them cheap to paint.
const orbs = [
    { className: "left-[-12%] top-[8%] h-[34rem] w-[34rem]", color: "rgba(34, 211, 238, 0.14)", speed: -0.25 },
    { className: "right-[-10%] top-[30%] h-[30rem] w-[30rem]", color: "rgba(217, 70, 239, 0.12)", speed: -0.45 },
    { className: "left-[20%] top-[65%] h-[28rem] w-[28rem]", color: "rgba(251, 146, 60, 0.1)", speed: -0.15 },
    { className: "right-[15%] top-[95%] h-[26rem] w-[26rem]", color: "rgba(59, 130, 246, 0.12)", speed: -0.35 },
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
