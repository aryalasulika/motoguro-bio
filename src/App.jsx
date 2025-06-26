import React from 'react'
import './App.css'
import logo from './assets/logo.webp'
import SocialStats from './components/SocialStats'
import OperatingHours from './components/OperatingHours'

function App() {
  const links = [
    {
      title: "Website Utama",
      description: "Kunjungi website resmi Motoguro",
      url: "https://www.motoguro.tech",
      icon: "🌐"
    },
    {
      title: "Layanan Cuci Motor",
      description: "Paket cuci motor premium dan perawatan",
      url: "https://motoguro.com/services",
      icon: "🧽"
    },
    {
      title: "Reservasi WhatsApp",
      description: "Chat untuk booking jadwal cuci motor",
      url: "https://wa.me/6281234567890",
      icon: "�"
    },
    {
      title: "Instagram",
      description: "Lihat hasil cuci motor dan promo terbaru",
      url: "https://instagram.com/motoguro",
      icon: "📸"
    },
    {
      title: "Testimoni Customer",
      description: "Review dan feedback pelanggan",
      url: "https://motoguro.com/testimonials",
      icon: "⭐"
    },
    {
      title: "Daftar Harga",
      description: "Paket layanan dan tarif cuci motor",
      url: "https://motoguro.com/pricing",
      icon: "�"
    },
    {
      title: "Lokasi & Kontak",
      description: "Alamat workshop dan jam operasional",
      url: "https://maps.google.com/motoguro",
      icon: "📍"
    }
  ];

  return (
    <div className="app">
      <div className="container">
        {/* Profile Section */}
        <div className="profile-section">
          <div className="profile-image">
            <img src={logo} alt="Motoguro Logo" />
          </div>
          <h1 className="profile-name">MOTOGURO</h1>
          <p className="profile-bio">
            🏍️ Jasa Cuci Motor Premium<br/>
            ✨ Perawatan Motor Berkualitas Tinggi<br/>
            📱 Reservasi via WhatsApp
          </p>
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Customer</span>
            </div>
            <div className="stat">
              <span className="stat-number">5★</span>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat">
              <span className="stat-number">Premium</span>
              <span className="stat-label">Service</span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="links-section">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <div className="link-icon">{link.icon}</div>
              <div className="link-content">
                <h3 className="link-title">{link.title}</h3>
                <p className="link-description">{link.description}</p>
              </div>
              <div className="link-arrow">→</div>
            </a>
          ))}
        </div>

        {/* Additional Components */}
        <SocialStats />
        <OperatingHours />

        {/* Footer */}
        <div className="footer">
          <p>© 2025 Motoguro. All rights reserved.</p>
          <p>Made with ❤️ for premium bike wash service</p>
        </div>
      </div>
    </div>
  )
}

export default App
