-- =====================================================
-- DATABASE SETUP SQL FOR MANHAR TOTAL SOLUTION
-- =====================================================

-- Create database (run this first in psql or pgAdmin):
-- CREATE DATABASE manhar_solution;

-- =====================================================
-- USERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- GALLERY IMAGES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS gallery_images (
    id SERIAL PRIMARY KEY,
    image_url TEXT NOT NULL,
    uploaded_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- CUSTOMER REVIEWS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS customer_reviews (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- INSERT SAMPLE REVIEWS (Optional - for demo)
-- =====================================================
INSERT INTO customer_reviews (name, rating, message) VALUES
    ('Rajesh Kumar', 5, 'Excellent service! The team helped me get my Aadhaar and PAN card done very quickly. Highly recommended!'),
    ('Priya Sharma', 5, 'Very professional approach. They guided me through the entire GST registration process.'),
    ('Amit Patel', 4, 'Good insurance services. The team is knowledgeable and patient.'),
    ('Sneha Reddy', 5, 'Best documentation service in town. Quick and reliable!'),
    ('Mohammad Khan', 5, 'Got my passport application processed smoothly. Thank you!');

-- =====================================================
-- INDEXES FOR BETTER PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_gallery_uploaded_at ON gallery_images(uploaded_at DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_created_at ON customer_reviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- =====================================================
-- VERIFY TABLES
-- =====================================================
-- \dt users
-- \dt gallery_images
-- \dt customer_reviews
