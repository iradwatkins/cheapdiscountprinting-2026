export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e5128 0%, #0d260f 50%, #071408 100%)',
      color: 'white'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <h1 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>
          <span style={{ color: '#4ade80' }}>Cheap</span> Discount Printing
        </h1>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#products" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Products</a>
          <a href="#pricing" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Pricing</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none', opacity: 0.9 }}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        textAlign: 'center',
        padding: '5rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'inline-block',
          background: '#4ade80',
          color: '#071408',
          padding: '0.5rem 1rem',
          borderRadius: '20px',
          fontSize: '0.875rem',
          fontWeight: 600,
          marginBottom: '1.5rem'
        }}>
          LOWEST PRICES GUARANTEED
        </div>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700, lineHeight: 1.1 }}>
          Quality Printing<br />
          <span style={{ color: '#4ade80' }}>Without Breaking the Bank</span>
        </h2>
        <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Professional printing services at wholesale prices. Save up to 60% compared to local print shops.
        </p>
        <a href="#products" style={{
          background: '#4ade80',
          color: '#071408',
          padding: '1rem 2.5rem',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: '1.1rem'
        }}>
          Shop Now & Save
        </a>
      </section>

      {/* Products */}
      <section id="products" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Best Sellers</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: 'Business Cards', qty: '1,000', price: '$19.99', savings: 'Save 65%' },
            { name: 'Flyers (4x6)', qty: '5,000', price: '$89.99', savings: 'Save 55%' },
            { name: 'Brochures', qty: '1,000', price: '$149.99', savings: 'Save 50%' },
            { name: 'Postcards', qty: '2,500', price: '$69.99', savings: 'Save 60%' },
            { name: 'Booklets', qty: '500', price: '$299.99', savings: 'Save 45%' },
            { name: 'Banners', qty: '1', price: '$24.99', savings: 'Save 40%' },
          ].map((product, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '2rem',
              borderRadius: '12px',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <span style={{
                background: '#4ade80',
                color: '#071408',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>{product.savings}</span>
              <h4 style={{ fontSize: '1.5rem', margin: '1rem 0 0.5rem', color: 'white' }}>{product.name}</h4>
              <p style={{ opacity: 0.6, margin: '0.5rem 0' }}>{product.qty} qty</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80' }}>{product.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section style={{
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Why Choose Us?</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { icon: '💵', title: 'Lowest Prices', desc: 'Wholesale pricing for everyone' },
            { icon: '✨', title: 'Premium Quality', desc: 'Full color, premium paper stocks' },
            { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
            { icon: '⏱️', title: 'Fast Turnaround', desc: '3-5 business day standard' },
          ].map((feature, i) => (
            <div key={i} style={{ maxWidth: '200px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h4 style={{ marginBottom: '0.5rem' }}>{feature.title}</h4>
              <p style={{ opacity: 0.6, margin: 0, fontSize: '0.9rem' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{
        padding: '4rem 2rem',
        background: 'rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Get a Free Quote</h3>
        <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
          Need a custom quote? Contact us for volume discounts.
        </p>
        <a href="mailto:sales@cheapdiscountprinting.com" style={{
          color: '#4ade80',
          textDecoration: 'none',
          fontSize: '1.25rem',
          fontWeight: 600
        }}>
          sales@cheapdiscountprinting.com
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        opacity: 0.6
      }}>
        <p style={{ margin: 0 }}>&copy; 2025 Cheap Discount Printing. All rights reserved.</p>
      </footer>
    </main>
  )
}
