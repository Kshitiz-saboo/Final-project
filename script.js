// ===========================
// PRODUCT DATA
// ===========================
const products = [
    {
        id: 1,
        name: "Kaju Katli",
        category: "traditional",
        price: "₹450/kg",
        description: "Premium cashew fudge, our signature sweet made with pure ghee and cashews.",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Gulab Jamun",
        category: "traditional",
        price: "₹320/kg",
        description: "Soft milk-solid dumplings soaked in aromatic rose-cardamom syrup.",
        image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Chocolate Barfi",
        category: "fusion",
        price: "₹380/kg",
        description: "Traditional barfi meets Belgian chocolate - a modern twist on classics.",
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Rasmalai",
        category: "traditional",
        price: "₹400/kg",
        description: "Delicate cottage cheese patties in saffron-infused milk cream.",
        image: "https://images.unsplash.com/photo-1596040007862-0a48c9f6c13d?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Pista Roll",
        category: "fusion",
        price: "₹520/kg",
        description: "Layered pistachio and almond rolls with a hint of saffron.",
        image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        name: "Wedding Gift Box",
        category: "custom",
        price: "₹1500+",
        description: "Customized assortment of premium sweets, beautifully packaged for special occasions.",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop&sat=-20"
    },
    {
        id: 7,
        name: "Motichoor Ladoo",
        category: "traditional",
        price: "₹350/kg",
        description: "Tiny pearl-like boondi balls shaped into perfectly round ladoos.",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop&hue=30"
    },
    {
        id: 8,
        name: "Nutella Barfi",
        category: "fusion",
        price: "₹420/kg",
        description: "Creamy Nutella-infused barfi - perfect blend of East and West.",
        image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&h=300&fit=crop&sat=10"
    },
    {
        id: 9,
        name: "Corporate Gift Hamper",
        category: "custom",
        price: "₹2000+",
        description: "Premium selection for corporate gifting, customizable with your branding.",
        image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=300&fit=crop&brightness=-10"
    }
];

// ===========================
// TESTIMONIAL DATA
// ===========================
const testimonials = [
    {
        id: 1,
        text: "Surati Sweets has been our family's go-to for every celebration for over 15 years. The Kaju Katli is simply unmatched!",
        author: "Priya Mehta",
        location: "Adajan, Surat"
    },
    {
        id: 2,
        text: "Their fusion desserts are incredible! The Chocolate Barfi is my daughter's favorite. Quality and taste are always consistent.",
        author: "Amit Patel",
        location: "Vesu, Surat"
    },
    {
        id: 3,
        text: "We ordered a custom wedding gift box for 500 guests. The presentation was stunning and everyone loved the sweets!",
        author: "Neha Shah",
        location: "Pal, Surat"
    },
    {
        id: 4,
        text: "The best Gulab Jamun in Surat! Soft, perfectly sweet, and always fresh. I recommend Surati Sweets to everyone.",
        author: "Rajesh Kumar",
        location: "Athwa, Surat"
    },
    {
        id: 5,
        text: "Their corporate gift hampers helped us make a great impression on our clients. Professional service and premium quality.",
        author: "Kavita Desai",
        location: "Citylight, Surat"
    }
];

// ===========================
// MOBILE NAVIGATION
// ===========================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileOverlay = document.getElementById('mobile-overlay');
const navLinks = document.getElementById('nav-links');

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileOverlay.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});

// ===========================
// ACTIVE NAV LINK
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===========================
// RENDER PRODUCTS
// ===========================
const productsGrid = document.getElementById('products-grid');
const categoryBtns = document.querySelectorAll('.category-btn');

function renderProducts(filter = 'all') {
    productsGrid.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1}s`;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-content">
                <span class="product-category">${getCategoryLabel(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="order-btn" onclick="orderProduct('${product.name}')">Order Now</button>
                </div>
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

function getCategoryLabel(category) {
    const labels = {
        'traditional': 'Traditional',
        'fusion': 'Fusion',
        'custom': 'Custom'
    };
    return labels[category] || category;
}

function orderProduct(productName) {
    const message = encodeURIComponent(`Hi! I'd like to order ${productName} from Surati Sweets.`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
}

// Category filter functionality
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const category = btn.getAttribute('data-category');
        renderProducts(category);
    });
});

// Initial render
renderProducts();

// ===========================
// TESTIMONIALS CAROUSEL
// ===========================
const testimonialsContainer = document.getElementById('testimonials-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentTestimonial = 0;

function renderTestimonials() {
    testimonialsContainer.innerHTML = '';
    
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${index === currentTestimonial ? 'active' : ''}`;
        
        card.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">${testimonial.author}</div>
            <div class="testimonial-location">${testimonial.location}</div>
        `;
        
        testimonialsContainer.appendChild(card);
    });
}

function showTestimonial(index) {
    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => card.classList.remove('active'));
    
    if (index >= testimonials.length) {
        currentTestimonial = 0;
    } else if (index < 0) {
        currentTestimonial = testimonials.length - 1;
    } else {
        currentTestimonial = index;
    }
    
    cards[currentTestimonial].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    showTestimonial(currentTestimonial - 1);
});

nextBtn.addEventListener('click', () => {
    showTestimonial(currentTestimonial + 1);
});

// Auto-rotate testimonials
setInterval(() => {
    showTestimonial(currentTestimonial + 1);
}, 5000);

// Initial render
renderTestimonials();

// ===========================
// CONTACT FORM
// ===========================
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Show success message
    showToast('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ===========================
// SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Height of fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.stat-card, .product-card, .about-text, .about-image').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ===========================
// INITIALIZE
// ===========================
console.log('Surati Sweets website loaded successfully!');
console.log(`Total products: ${products.length}`);
console.log(`Total testimonials: ${testimonials.length}`);
