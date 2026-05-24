import { createClient } from '@sanity/client';
import imageUrlBuilder  from '@sanity/image-url';
import dotenv           from 'dotenv';

dotenv.config();

export const client = createClient({
  projectId:  process.env.SANITY_PROJECT_ID,
  dataset:    process.env.SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn:     true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) =>
  builder.image(source).auto('format').fit('max');

// ── Queries ─────────────────────────────────────────────────

export const getSettings = () =>
  client.fetch(`*[_type == "siteSettings"][0]`);

export const getProducts = () =>
  client.fetch(`*[_type == "product"] | order(order asc) {
    _id, name, category, description, price, unit,
    "imageUrl": image.asset->url,
    featured, inStock, order
  }`);

export const getServices = () =>
  client.fetch(`*[_type == "service"] | order(order asc) {
    _id, title, description, details,
    "imageUrl": image.asset->url,
    order
  }`);

export const getTestimonials = () =>
  client.fetch(`*[_type == "testimonial"] | order(_createdAt desc) {
    _id, company, author, role, quote,
    "avatarUrl": avatar.asset->url
  }`);
