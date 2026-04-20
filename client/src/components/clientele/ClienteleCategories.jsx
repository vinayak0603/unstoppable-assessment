import React from 'react';
import './ClienteleCategories.css';

const ClienteleCategories = () => {
  const categories = [
    {
      title: "STARTUPS",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=500",
      hasDot: true,
    },
    {
      title: "FAMILY BUSINESSES",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=500",
    },
    {
      title: "ENTERPRISES",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=500",
    }
  ];

  return (
    <div className="clientele-categories-section">
      <div className="clientele-categories-container mt-10">
        {categories.map((cat, index) => (
          <div key={index} className="clientele-category-card">
            <div
              className="category-card-bg"
              style={{ backgroundImage: `url(${cat.image})` }}
            ></div>
            <div className="category-card-overlay"></div>
            <div className="category-card-content">
              <h2 className="category-card-title">{cat.title}</h2>
              {cat.hasDot && <div className="category-card-dot"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClienteleCategories;
