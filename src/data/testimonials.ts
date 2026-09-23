export type Testimonial = {
  name: string;
  role: string;
  text: string;
  /** Short highlight shown as the card title */
  highlight: string;
  rating: number;
  /**
   * Client photo, e.g. "/images/testimonials/ahmed-khan.webp".
   * Leave empty to show the coloured initials avatar.
   */
  image?: string;
  /** Optional: company or project name shown under the role */
  company?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    role: "Startup Founder",
    highlight: "Made our product feel professional",
    text: "Zubair transformed our basic landing page into a clean, premium interface. The layout, spacing, and animations made our product feel much more professional.",
    rating: 5,
  },
  {
    name: "Sarah Ali",
    role: "Business Owner",
    highlight: "Customers see our brand differently",
    text: "The redesign improved how customers perceive our brand. The website now feels modern, responsive, and much easier to navigate on mobile.",
    rating: 5,
  },
  {
    name: "Usman Tariq",
    role: "Freelance Client",
    highlight: "Far better than what we had before",
    text: "Very smooth experience working with him. Clean code, fast delivery, and the UI quality was far better than what we had before.",
    rating: 5,
  },
];
