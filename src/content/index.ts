import site from "./site.json";

export const content = site;

export const global = site.global;
export const hero = site.hero;
export const intro = site.intro;
export const marquee = site.marquee;
export const why = site.why;
export const howItWorks = site.howItWorks;
export const destinations = site.destinations;
export const trips = site.trips;
export const services = site.services;
export const about = site.about;
export const testimonials = site.testimonials;
export const faq = site.faq;

export type Trip = (typeof site.trips)[number];
export type Testimonial = (typeof site.testimonials)[number];
export type Service = (typeof site.services)[number];

export default site;
