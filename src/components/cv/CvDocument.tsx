import { cv } from "@/data/cv";
import { contactIcons } from "@/components/cv/contactIcons";

// Print-only layout: this is what `window.print()` and `npm run cv:pdf` turn into the PDF.
// Colors are fixed (not theme variables) so the PDF looks the same from light or dark mode.

function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-[3mm] flex items-center gap-2 font-heading text-[12.5px] font-bold uppercase tracking-[0.05em] text-[#0f172a]">
            <span aria-hidden="true" className="h-[13px] w-[4px] rounded-full bg-gradient-to-b from-[#22d3ee] to-[#8b5cf6]" />
            {children}
            <span aria-hidden="true" className="h-px flex-1 bg-[#e2e8f0]" />
        </h2>
    );
}

function SideHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-[2mm] border-b border-[#cbd5e1] pb-[1mm] font-heading text-[11px] font-bold uppercase tracking-[0.05em] text-[#0f172a]">
            {children}
        </h2>
    );
}

/** Keeps a heading on the same page as its first entry */
function Section({ title, items }: { title: string; items: React.ReactNode[] }) {
    const [first, ...rest] = items;

    return (
        <section className="mt-[6mm] first:mt-0">
            <div className="cv-avoid">
                <Heading>{title}</Heading>
                {first}
            </div>
            {rest}
        </section>
    );
}

export default function CvDocument() {
    return (
        <div className="cv-document hidden bg-white text-[#1e293b] print:block">
            <header className="bg-[#0b1220] px-[14mm] pb-[7mm] pt-[11mm] text-white">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <h1 className="font-heading text-[32px] font-extrabold leading-none tracking-[-0.01em] text-white">
                            {cv.name}
                        </h1>
                        <p className="mt-2 font-heading text-[15px] font-semibold text-[#67e8f9]">{cv.title}</p>
                    </div>

                    <dl className="flex shrink-0 gap-[2.5mm]">
                        {cv.stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="w-[22mm] rounded-lg border border-white/15 bg-white/[0.06] px-2 py-[2mm] text-center"
                            >
                                <dt className="sr-only">{stat.label}</dt>
                                <dd className="font-heading text-[18px] font-bold leading-none text-white">{stat.value}</dd>
                                <dd className="mt-1 text-[8.5px] leading-tight text-white/60">{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <ul className="mt-[5mm] flex flex-wrap gap-x-[5mm] gap-y-[1.5mm]">
                    {cv.contact.map((item) => {
                        const Icon = contactIcons[item.kind];

                        return (
                            <li key={item.kind} className="flex items-center gap-1.5 text-[10.5px] text-white/85">
                                <Icon aria-hidden="true" className="h-3 w-3 shrink-0 text-[#67e8f9]" />
                                {item.href ? <a href={item.href}>{item.label}</a> : item.label}
                            </li>
                        );
                    })}
                </ul>
            </header>
            <div aria-hidden="true" className="h-[3px] bg-[linear-gradient(90deg,#22d3ee,#8b5cf6,#d946ef,#f97316)]" />

            <div className="px-[14mm] pt-[7mm]">
                {/* Sidebar floats beside the first page; the rest of the CV then runs full width */}
                <aside className="cv-avoid float-right mb-[4mm] ml-[7mm] w-[60mm] rounded-xl bg-[#f1f5f9] p-[5mm]">
                    <section>
                        <SideHeading>Technical Skills</SideHeading>
                        <div className="space-y-[2.5mm]">
                            {cv.skills.map((group) => (
                                <div key={group.title}>
                                    <h3 className="mb-[1mm] text-[9.5px] font-bold uppercase tracking-[0.04em] text-[#4f46e5]">
                                        {group.title}
                                    </h3>
                                    <ul className="flex flex-wrap gap-[1mm]">
                                        {group.items.map((item) => (
                                            <li
                                                key={item}
                                                className="rounded border border-[#e2e8f0] bg-white px-[1.5mm] py-[0.3mm] text-[9.5px] text-[#1e293b]"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-[5mm]">
                        <SideHeading>Education</SideHeading>
                        {cv.education.map((item) => (
                            <div key={item.degree} className="text-[10.5px] leading-snug">
                                <h3 className="font-bold text-[#0f172a]">{item.degree}</h3>
                                <p className="mt-0.5 text-[#334155]">{item.school}</p>
                                <p className="mt-0.5 text-[#64748b]">
                                    {item.period} | {item.detail}
                                </p>
                            </div>
                        ))}
                    </section>

                    <section className="mt-[5mm]">
                        <SideHeading>Certifications</SideHeading>
                        <ul className="space-y-[1.5mm] text-[10.5px] leading-snug">
                            {cv.certifications.map((item) => (
                                <li key={item.name}>
                                    <span className="font-bold text-[#0f172a]">{item.name}</span>
                                    <br />
                                    <span className="text-[#64748b]">
                                        {item.issuer}, {item.year}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>

                </aside>

                <Section
                    title="Professional Summary"
                    items={[
                        <p key="summary" className="text-[12px] leading-[1.6] text-[#334155]">
                            {cv.summary}
                        </p>,
                    ]}
                />

                <Section
                    title="Professional Experience"
                    items={cv.experience.map((job, index) => (
                        <div
                            key={`${job.company}-${job.period}`}
                            className={`cv-avoid relative ml-[1mm] border-l-2 border-[#e2e8f0] pl-[5mm] ${
                                index === cv.experience.length - 1 ? "" : "pb-[4.5mm]"
                            }`}
                        >
                            <span
                                aria-hidden="true"
                                className={`absolute -left-[6px] top-[3px] h-[10px] w-[10px] rounded-full border-2 border-[#6366f1] ${
                                    index === 0 ? "bg-[#6366f1]" : "bg-white"
                                }`}
                            />
                            <div className="flex items-baseline justify-between gap-3">
                                <h3 className="font-heading text-[14px] font-bold text-[#0f172a]">{job.role}</h3>
                                <span className="shrink-0 rounded-full bg-[#eef2ff] px-[2mm] py-[0.4mm] text-[10px] font-semibold text-[#4338ca]">
                                    {job.period}
                                </span>
                            </div>
                            <p className="text-[11.5px] font-semibold text-[#4f46e5]">
                                {job.company} <span className="font-normal text-[#64748b]">| {job.location}</span>
                            </p>
                            {job.summary && <p className="mt-0.5 text-[10.5px] italic text-[#64748b]">{job.summary}</p>}
                            <ul className="mt-[1.5mm] space-y-[0.8mm]">
                                {job.highlights.map((item) => (
                                    <li key={item} className="relative pl-[3.5mm] text-[11.5px] leading-[1.5] text-[#334155]">
                                        <span
                                            aria-hidden="true"
                                            className="absolute left-0 top-[0.55em] h-[5px] w-[5px] rotate-45 bg-[#8b5cf6]"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                />

                <Section
                    title="Projects"
                    items={cv.projects.map((project) => (
                        <div
                            key={project.slug}
                            className="cv-avoid mt-[2.5mm] flow-root rounded-r-lg border-l-[3px] border-[#6366f1] bg-[#f8fafc] px-[4mm] py-[2.5mm]"
                        >
                            <h3 className="font-heading text-[12.5px] font-bold text-[#0f172a]">{project.name}</h3>
                            <p className="text-[10px] text-[#4f46e5]">
                                {project.links.map((link, index) => (
                                    <span key={link.href}>
                                        {index > 0 && <span className="text-[#94a3b8]"> | </span>}
                                        <a href={link.href}>{link.label}</a>
                                    </span>
                                ))}
                            </p>
                            <p className="mt-[1mm] text-[11px] leading-[1.5] text-[#334155]">{project.description}</p>
                            <p className="mt-[1.2mm] text-[10px] text-[#64748b]">
                                <span className="font-semibold text-[#334155]">Tech: </span>
                                {project.tech.join(", ")}
                            </p>
                        </div>
                    ))}
                />

                <Section
                    title="Languages & Personal Details"
                    items={[
                        <div key="personal" className="flow-root">
                            <dl className="grid grid-cols-4 gap-[3mm] text-[11px]">
                                {[
                                    ...cv.languages.map((item) => ({ label: item.name, value: item.level })),
                                    ...cv.personal.filter((item) => item.label !== "Location"),
                                ].map((item) => (
                                    <div key={item.label} className="rounded-lg bg-[#f1f5f9] px-[3mm] py-[2mm]">
                                        <dt className="text-[9.5px] font-bold uppercase tracking-[0.04em] text-[#4f46e5]">
                                            {item.label}
                                        </dt>
                                        <dd className="mt-0.5 font-semibold text-[#0f172a]">{item.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>,
                    ]}
                />
            </div>
        </div>
    );
}
