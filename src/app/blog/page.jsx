import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

export const metadata = {
  title: 'Nutrition Blog & Recipes | Shivangi Pancholi',
  description: 'Healthy recipes, gut health guides, and dietary tips by nutritionist Shivangi Pancholi.',
};

export default function BlogPage() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 56px' }}>
          <span className="badge">Nutrition Journal</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Healthy Recipes & Articles</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            Practical advice, dietary science, and delicious wholesome recipes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {blogPosts.map((post) => (
            <div key={post.slug} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <img
                src={post.image}
                alt={post.title}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '28px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {post.category} • {post.date}
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: '10px 0 12px' }}>{post.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px', flexGrow: 1 }}>
                  {post.summary}
                </p>
                <Link href={`/blog/${post.slug}`} className="btn-secondary" style={{ textAlign: 'center', justifyContent: 'center' }}>
                  Read Full Article
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
