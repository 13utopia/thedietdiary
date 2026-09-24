import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const DATA_PATH = path.join(process.cwd(), 'data', 'user-reviews.json');

const PRIVACY_IMAGES = [
  '/website-images/Peach-Salad-in-Bowl.webp',
  '/website-images/Healthy-Green-Juice-Pepper-Delight.webp',
  '/website-images/gesunde-ernaehrung.webp',
  '/website-images/client-review-diet-diary-prep.jpg',
  '/website-images/client-review-waist-progress.jpg',
  '/website-images/Lets-Connect-7.webp',
];

async function readReviews() {
  try {
    const raw = await fs.readFile(DATA_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeReviews(reviews) {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(reviews, null, 2), 'utf8');
}

function sanitize(text, max = 800) {
  return String(text || '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, max);
}

export async function GET() {
  const reviews = await readReviews();
  return NextResponse.json({ reviews });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const name = sanitize(body.name, 80);
  const role = sanitize(body.role || 'Website visitor', 120);
  const quote = sanitize(body.quote, 900);
  const rating = Math.min(5, Math.max(1, Number(body.rating) || 5));
  const result = sanitize(body.result || 'Shared a client review', 120);

  if (!name || name.length < 2) {
    return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  }
  if (!quote || quote.length < 20) {
    return NextResponse.json({ error: 'Please write a review of at least 20 characters.' }, { status: 400 });
  }

  const reviews = await readReviews();
  const image = PRIVACY_IMAGES[reviews.length % PRIVACY_IMAGES.length];

  const review = {
    id: `user-${Date.now()}`,
    name,
    role,
    rating,
    result,
    duration: 'Client review',
    hasFace: false,
    image,
    quote,
    createdAt: new Date().toISOString(),
    source: 'website',
  };

  reviews.unshift(review);
  await writeReviews(reviews.slice(0, 200));

  return NextResponse.json({ ok: true, review });
}
