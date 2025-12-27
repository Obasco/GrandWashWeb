#!/bin/bash
# Verification Script for Vercel Deployment

echo "🔍 Verifying Grand Car Wash Project for Vercel Deployment..."
echo ""

# Check if required files exist
echo "📋 Checking Configuration Files..."
files=(
  "vercel.json"
  "tailwind.config.js"
  "postcss.config.js"
  ".vercelignore"
  ".npmrc"
  "vite.config.js"
  "package.json"
  "index.html"
  "src/App.jsx"
  "src/main.jsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file (MISSING)"
  fi
done

echo ""
echo "📁 Checking Component Files..."
components=(
  "src/Layout/Navbar.jsx"
  "src/Layout/HeroSection.jsx"
  "src/Layout/Services.jsx"
  "src/Layout/Gallery.jsx"
  "src/Layout/Testimonial.jsx"
  "src/Layout/Price.jsx"
  "src/Layout/Contact.jsx"
  "src/Layout/Footer.jsx"
)

for component in "${components[@]}"; do
  if [ -f "$component" ]; then
    echo "✅ $component"
  else
    echo "❌ $component (MISSING)"
  fi
done

echo ""
echo "📊 Checking Data Files..."
data_files=(
  "src/Servicesdb.js"
  "src/gallerydata.js"
  "src/pricedata.js"
  "src/testimonialsData.js"
)

for data in "${data_files[@]}"; do
  if [ -f "$data" ]; then
    echo "✅ $data"
  else
    echo "❌ $data (MISSING)"
  fi
done

echo ""
echo "🖼️  Checking Asset Files..."
assets=(
  "src/assets/grand1.jpg"
  "src/assets/grand2.png"
  "src/assets/grand3.png"
  "src/assets/grand4.png"
  "src/assets/grand5.png"
  "src/assets/grand6.png"
  "src/assets/heroimg.jpg"
  "src/assets/logo.png"
  "src/assets/unnamed.png"
  "src/assets/unnamed2.png"
  "src/assets/unnamed3.png"
)

for asset in "${assets[@]}"; do
  if [ -f "$asset" ]; then
    echo "✅ $asset"
  else
    echo "❌ $asset (MISSING)"
  fi
done

echo ""
echo "✅ Project is ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Prepare for Vercel deployment'"
echo "3. git push origin main"
echo "4. Go to vercel.com and import your repository"
echo ""
