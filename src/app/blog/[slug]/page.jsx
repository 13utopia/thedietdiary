import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | Shivangi Pancholi`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ marginBottom: '32px' }}>
          <Link href="/blog" style={{ fontSize: '0.9rem', fontWeight: 600 }}>
            ← Back to Blog
          </Link>
        </div>

        <span className="badge">{post.category}</span>
        <h1 style={{ fontSize: '2.6rem', margin: '12px 0 16px' }}>{post.title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '32px' }}>
          Published on {post.date} by Shivangi Pancholi
        </p>

        <div className="glass-card" style={{ padding: '16px', borderRadius: 'var(--radius-lg)', marginBottom: '40px' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
          />
        </div>

        <div className="glass-card" style={{ padding: '40px', lineHeight: 1.8, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link href="/pricing" className="btn-primary">
            Ready to Transform Your Diet? Book A Consultation →
          </Link>
        </div>
      </div>
    </article>
  );
}
