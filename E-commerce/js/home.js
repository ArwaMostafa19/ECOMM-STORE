const products = [
    {
        "id": 1,
        "name": "Premium Headphones",
        "price": 199.00,
        "category": "Electronics",
        "description": "Noise-canceling wireless headphones with 30-hour battery life.",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500"
    },
    {
        "id": 2,
        "name": "Urban Cotton Hoodie",
        "price": 45.00,
        "category": "Fashion",
        "description": "Premium heavyweight cotton hoodie for maximum comfort and style.",
        "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500"
    },
    {
        "id": 3,
        "name": "Minimalist Indoor Plant",
        "price": 25.00,
        "category": "Home Decor",
        "description": "Easy-to-maintain succulent in a handcrafted ceramic white vase.",
        "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500"
    },
    {
        "id": 4,
        "name": "Classic Sunglasses",
        "price": 120.00,
        "category": "Accessories",
        "description": "UV-protected polarized lenses with a durable metal frame.",
        "image": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=500"
    },
    {
        "id": 5,
        "name": "Retro Camera",
        "price": 89.00,
        "category": "Electronics",
        "description": "Capture memories in style with our classic film-inspired camera.",
        "image": "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=500"
    },
    {
        "id": 6,
        "name": "Streetwear Sneakers",
        "price": 110.00,
        "category": "Fashion",
        "description": "Breathable sports shoes with cushioned soles for everyday use.",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=500"
    },
    {
        "id": 7,
        "name": "Classic Leather Watch",
        "price": 150.00,
        "category": "Accessories",
        "description": "Elegant timepiece with a genuine leather strap and sapphire glass.",
        "image": "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=500"
    },
    {
        "id": 8,
        "name": "Anti-Theft Backpack",
        "price": 75.00,
        "category": "Accessories",
        "description": "Water-resistant travel bag with a hidden USB charging port.",
        "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=500"
    },
    {
        "id": 9,
        "name": "Midnight Essence EDP",
        "price": 95.00,
        "category": "Accessories",
        "description": "A long-lasting, sophisticated fragrance for special occasions.",
        "image": "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=500"
    },
    {
        "id": 10,
        "name": "Premium Journal Set",
        "price": 20.00,
        "category": "Home Decor",
        "description": "Hand-stitched leather notebook with high-quality recycled paper.",
        "image": "https://images.unsplash.com/photo-1531346878377-a5be20888e57?q=80&w=500"
    },
    {
        "id": 11,
        "name": "Nordic Lounge Chair",
        "price": 210.00,
        "category": "Home Decor",
        "description": "Minimalist wooden chair with premium fabric upholstery.",
        "image": "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500"
    },
    {
        "id": 12,
        "name": "RGB Mechanical Keyboard",
        "price": 85.00,
        "category": "Electronics",
        "description": "Tactile switches with customizable RGB lighting.",
        "image": "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500"
    },
    {
        "id": 13,
        "name": "Insulated Sports Bottle",
        "price": 25.00,
        "category": "Accessories",
        "description": "Stainless steel vacuum insulated bottle keeps drinks cold for 24h.",
        "image": "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?w=500"
    },
    {
        "id": 14,
        "name": "Vintage Denim Jacket",
        "price": 65.00,
        "category": "Fashion",
        "description": "Classic blue denim jacket with a relaxed fit.",
        "image": "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?w=500"
    },
    {
        "id": 15,
        "name": "Slim Leather Wallet",
        "price": 40.00,
        "category": "Accessories",
        "description": "Genuine leather bi-fold wallet with RFID blocking.",
        "image": "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=500"
    },
    {
        "id": 16,
        "name": "French Press Brewer",
        "price": 30.00,
        "category": "Home Decor",
        "description": "Borosilicate glass coffee press for the perfect brew.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_Op-s1yte6d5cQ55oF3EX3rbrkjrG31c-w&s"
    },
    {
        "id": 17,
        "name": "20,000mAh Power Bank",
        "price": 45.00,
        "category": "Electronics",
        "description": "Fast-charging portable battery with dual USB-C ports.",
        "image": "https://coolnutindia.com/wp-content/uploads/2023/11/post-01-27000-mAh.jpg"
    },
    {
        "id": 18,
        "name": "Luxury Scented Candle",
        "price": 18.00,
        "category": "Home Decor",
        "description": "Hand-poured soy wax candle with lavender and vanilla.",
        "image": "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=500"
    },
    {
        "id": 19,
        "name": "Smart Fitness Watch",
        "price": 149.00,
        "category": "Electronics",
        "description": "Heart rate and sleep tracking with a vibrant AMOLED display.",
        "image": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=500"
    },
    {
        "id": 20,
        "name": "White Canvas Sneakers",
        "price": 55.00,
        "category": "Fashion",
        "description": "Minimalist low-top sneakers perfect for any casual outfit.",
        "image": "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=500"
    },
    {
        "id": 21,
        "name": "Wooden Coffee Table",
        "price": 180.00,
        "category": "Home Decor",
        "description": "Solid oak wood table with a natural grain finish.",
        "image": "https://i.pinimg.com/736x/6b/27/24/6b2724cd4ec8013e4b537cd1c5a8893d.jpg"
    },
    {
        "id": 22,
        "name": "Silver Link Bracelet",
        "price": 65.00,
        "category": "Accessories",
        "description": "Sterling silver chain bracelet with a secure lobster clasp.",
        "image": "https://i.pinimg.com/736x/3c/da/97/3cda97652f34383ec19abfb9e4173b98.jpg"
    },
    {
        "id": 23,
        "name": "Mechanical Gaming Mouse",
        "price": 59.00,
        "category": "Electronics",
        "description": "Ultra-fast response with customizable DPI and RGB lighting.",
        "image": "https://i.pinimg.com/736x/64/c7/ed/64c7ed6c9001090fddea78cf4273eb01.jpg"
    },
    {
        "id": 24,
        "name": "Leather Biker Jacket",
        "price": 220.00,
        "category": "Fashion",
        "description": "Authentic black leather jacket with silver zipper details.",
        "image": "https://i.pinimg.com/736x/24/d0/13/24d0139ccffa9407a1e76d2d0036d67b.jpg"
    },
    {
        "id": 25,
        "name": "Abstract Canvas Art",
        "price": 45.00,
        "category": "Home Decor",
        "description": "Modern colorful abstract painting to brighten any room.",
        "image": "https://i.pinimg.com/1200x/54/36/f8/5436f85c859865810a383c1ac6cbd54f.jpg"
    },
    {
        "id": 26,
        "name": "Travel Toiletry Kit",
        "price": 30.00,
        "category": "Accessories",
        "description": "Waterproof hanging organizer for all your grooming essentials.",
        "image": "https://i.pinimg.com/1200x/60/7f/9b/607f9b7bd3a28f9768cef1c65d25ab03.jpg"
    },
    {
        "id": 27,
        "name": "Noise Canceling Buds",
        "price": 125.00,
        "category": "Electronics",
        "description": "Compact TWS earbuds with deep bass and ANC technology.",
        "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=500"
    },
    {
        "id": 28,
        "name": "Denim Skirt",
        "price": 40.00,
        "category": "Fashion",
        "description": "High-waisted blue denim skirt with a distressed hem.",
        "image": "https://i.pinimg.com/1200x/b4/5b/26/b45b26fd711c37b8c72e95f20b2c0e1d.jpg"
    },
    {
        "id": 29,
        "name": "Scented Soy Candle",
        "price": 15.00,
        "category": "Home Decor",
        "description": "Natural soy wax with a refreshing citrus and sea salt scent.",
        "image": "https://i.pinimg.com/736x/aa/79/b0/aa79b09411a5e0df8c6adc2b354d4fae.jpg"
    },
    {
        "id": 30,
        "name": "Aviator Sunglasses",
        "price": 135.00,
        "category": "Accessories",
        "description": "Classic gold-frame aviators with polarized dark green lenses.",
        "image": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=500"
    },
    {
        "id": 31,
        "name": "Portable Bluetooth Speaker",
        "price": 65.00,
        "category": "Electronics",
        "description": "Rugged waterproof speaker for outdoor adventures.",
        "image": "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=500"
    },
    {
        "id": 32,
        "name": "Floral Summer Dress",
        "price": 70.00,
        "category": "Fashion",
        "description": "Lightweight flowy dress with a vibrant floral pattern.",
        "image": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=500"
    },
    {
        "id": 33,
        "name": "Ceramic Flower Vase",
        "price": 35.00,
        "category": "Home Decor",
        "description": "Matte finish ceramic vase in an elegant terracotta color.",
        "image": "https://i.pinimg.com/736x/1d/54/c9/1d54c9a32a561b616a4ac84c016abec9.jpg"
    },
    {
        "id": 34,
        "name": "Leather Passport Holder",
        "price": 25.00,
        "category": "Accessories",
        "description": "Keep your documents safe in this slim genuine leather holder.",
        "image": "https://i.pinimg.com/1200x/18/45/bc/1845bc350d83a673848ecfa28e763868.jpg"
    },
    {
        "id": 35,
        "name": "External Hard Drive 2TB",
        "price": 85.00,
        "category": "Electronics",
        "description": "High-capacity portable storage for all your big files.",
        "image": "https://i.pinimg.com/1200x/2c/48/95/2c4895499d9b14d9243ff989af590ce2.jpg"
    },
    {
        "id": 36,
        "name": "Casual Polo Shirt",
        "price": 35.00,
        "category": "Fashion",
        "description": "Classic fit navy polo shirt made from 100% pique cotton.",
        "image": "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=500"
    },
    {
        "id": 37,
        "name": "Soft Wool Rug",
        "price": 120.00,
        "category": "Home Decor",
        "description": "Hand-tufted cream rug that adds warmth to any space.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vl_eHctY0xFcBRWMChZ6yU55P0xZ3WW8uw&s"
    },
    {
        "id": 38,
        "name": "Mens Silk Tie",
        "price": 45.00,
        "category": "Accessories",
        "description": "Premium silk tie with a sophisticated paisley pattern.",
        "image": "https://i.pinimg.com/1200x/a8/a4/61/a8a461174ae70bc71132f2a05f815233.jpg"
    },
    {
        "id": 39,
        "name": "Desktop Monitor Stand",
        "price": 49.00,
        "category": "Electronics",
        "description": "Ergonomic aluminum stand to keep your desk organized.",
        "image": "https://i.pinimg.com/736x/e9/ba/50/e9ba5020f14c1ca978a169b2a6f9478f.jpg"
    },
    {
        "id": 40,
        "name": "Sportswear",
        "price": 50.00,
        "category": "Fashion",
        "description": "Comfortable athletic Sportswear with built-in compression liner.",
        "image": "https://i.pinimg.com/736x/c9/f6/0a/c9f60ae8aeaf2caed76e87c3baa807e2.jpg"
    },
    {
        "id": 41,
        "name": "Modern Floor Lamp",
        "price": 95.00,
        "category": "Home Decor",
        "description": "Sleek tripod lamp with a linen shade for soft lighting.",
        "image": "https://i.pinimg.com/736x/4e/73/e9/4e73e9c6f840e47de5d032cda6daa11a.jpg"
    },
    {
        "id": 42,
        "name": "Sports Duffle Bag",
        "price": 55.00,
        "category": "Accessories",
        "description": "Spacious gym bag with a separate ventilated shoe compartment.",
        "image": "https://i.pinimg.com/736x/9a/71/95/9a7195411a8f5f3c608b78ff97832338.jpg"
    },
    {
        "id": 43,
        "name": "Tablet Stylus Pen",
        "price": 35.00,
        "category": "Electronics",
        "description": "High-precision stylus with palm rejection for artists.",
        "image": "https://i.pinimg.com/736x/2a/15/ce/2a15ce5d095152b582bf051294bd736b.jpg"
    },
    {
        "id": 44,
        "name": "Linen Trousers",
        "price": 60.00,
        "category": "Fashion",
        "description": "Breathable beige linen pants for a relaxed summer look.",
        "image": "https://i.pinimg.com/736x/fb/92/be/fb92bebc8bcfa1fc9bbc14dac72a81d7.jpg"
    },
    {
        "id": 45,
        "name": "Desk Organizer Set",
        "price": 22.00,
        "category": "Home Decor",
        "description": "Wooden tray and pencil holder for a tidy workspace.",
        "image": "https://i.pinimg.com/1200x/3b/1a/ce/3b1ace9e96cd940b8d24e2925975421f.jpg"
    },
    {
        "id": 46,
        "name": "Laptop Sleeve 13\"",
        "price": 25.00,
        "category": "Accessories",
        "description": "Padded felt sleeve to protect your laptop from scratches.",
        "image": "https://i.pinimg.com/1200x/51/4a/9c/514a9c82cd3344ab354458d26078150a.jpg"
    },
    {
        "id": 47,
        "name": "USB-C Hub Adapter",
        "price": 42.00,
        "category": "Electronics",
        "description": "6-in-1 adapter with HDMI, USB 3.0, and SD card slots.",
        "image": "https://i.pinimg.com/1200x/6d/60/ed/6d60eda7a6675ad389b1fae5909edb14.jpg"
    },
    {
        "id": 48,
        "name": "Classic Trench Coat",
        "price": 140.00,
        "category": "Fashion",
        "description": "Water-resistant tan trench coat with a belted waist.",
        "image": "https://i.pinimg.com/736x/f6/48/05/f64805fbfe8ee89df181b618252ee586.jpg"
    },
    {
        "id": 49,
        "name": "Wall Mounted Mirror",
        "price": 75.00,
        "category": "Home Decor",
        "description": "Round gold-framed mirror to add depth to your hallway.",
        "image": "https://i.pinimg.com/736x/20/e1/1c/20e11cc0c0741ed25f4861a0ff1c6833.jpg"
    },
    {
        "id": 50,
        "name": "Leather Card Case",
        "price": 20.00,
        "category": "Accessories",
        "description": "Slim minimalist card wallet in pebble-grain leather.",
        "image": "https://i.pinimg.com/736x/86/6d/da/866dda5aa2adde434c1f09703468c638.jpg"
    },
    {
        "id": 51,
        "name": "Webcam 4K Ultra HD",
        "price": 110.00,
        "category": "Electronics",
        "description": "Perfect for streaming and video calls with built-in mic.",
        "image": "https://i.pinimg.com/736x/7a/ed/89/7aed89ff6d0825933dd053854ea219f4.jpg"
    },
    {
        "id": 52,
        "name": "Knit Scarf",
        "price": 25.00,
        "category": "Fashion",
        "description": "Chunky knit scarf in grey, perfect for cold weather.",
        "image": "https://i.pinimg.com/736x/63/93/a8/6393a82e3b12165481c492008027f41b.jpg"
    },
    {
        "id": 53,
        "name": "Decorative Cushion",
        "price": 18.00,
        "category": "Home Decor",
        "description": "Soft velvet pillow cover with a geometric gold pattern.",
        "image": "https://i.pinimg.com/736x/ff/e4/3f/ffe43fc3425b2dc6670cb621deb95034.jpg"
    },
    {
        "id": 54,
        "name": "Gold Hoop Earrings",
        "price": 45.00,
        "category": "Accessories",
        "description": "Medium-sized 14k gold hoops for a classic daily look.",
        "image": "https://i.pinimg.com/736x/43/c4/0e/43c40e70ea0dee7c25be994ad52b287a.jpg"
    },
    {
        "id": 55,
        "name": "Mini Projector",
        "price": 190.00,
        "category": "Electronics",
        "description": "Portable cinema experience with built-in Wi-Fi and apps.",
        "image": "https://i.pinimg.com/736x/cf/51/48/cf514899db59feef49125d85f854b5ad.jpg"
    },
    {
        "id": 56,
        "name": "Pleated Midi Skirt",
        "price": 50.00,
        "category": "Fashion",
        "description": "Elegant emerald green pleated skirt with a satin finish.",
        "image": "https://i.pinimg.com/1200x/61/60/f5/6160f54bd2d66862ba32817133cd4ca2.jpg"
    },
    {
        "id": 57,
        "name": "Floating Wall Shelves",
        "price": 40.00,
        "category": "Home Decor",
        "description": "Set of 3 minimalist wooden shelves for books and plants.",
        "image": "https://i.pinimg.com/736x/92/bb/1b/92bb1bcacde331b1dc1b964e6c85d260.jpg"
    },
    {
        "id": 58,
        "name": "Automatic Umbrella",
        "price": 22.00,
        "category": "Accessories",
        "description": "Windproof compact umbrella with an easy one-click open.",
        "image": "https://i.pinimg.com/736x/fa/4d/f0/fa4df09ceacdde7530ecf08406ba7f1a.jpg"
    }


];


const sliderData = [
    {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000",
        title: "Upgrade Your Lifestyle",
        p: "High-quality products delivered straight to your door."
    },
    {
        image: "https://i.pinimg.com/736x/bb/85/97/bb85979b594c00ce7987eab4b5f17cc7.jpg",
        title: "New Summer Collection",
        p: "Discover the latest trends in urban fashion."
    },
    {
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80",
        title: "Modern Electronics",
        p: "Cutting-edge technology for your daily needs."
    }
];

let currentIndex = 0;
let cartItems = [];
let currentUser = null;
let cartCounter;
const initApp = async () => {
    const app = document.getElementById('app');

    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');


    if (userId) {
        try {
            const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${userId}`);
            if (response.ok) {
                currentUser = await response.json();
            }
        } catch (error) {
            console.error("User not found on API");
        }
    }
    Object.assign(document.body.style, {
        margin: "0",
        padding: "0",
        boxSizing: "border-box",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f9f9f9f5",
        color: "#333"
    });


    const nav = document.createElement('nav');
    Object.assign(nav.style, {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid #eee",
        top: "0",
        zIndex: "100",
        position: "fixed"
    });

    const logo = document.createElement('div');
    Object.assign(logo.style, { fontWeight: "700", fontSize: "24px", letterSpacing: "1px" });
    logo.textContent = "ECOMM";
    const logoSpan = document.createElement('span');
    logoSpan.textContent = "STORE";
    logoSpan.style.color = "#ff4757";
    logo.appendChild(logoSpan);

    const ul = document.createElement('ul');
    Object.assign(ul.style, { listStyle: "none", display: "flex", gap: "20px", alignItems: "center" });

    ['Home', 'Products'].forEach(text => {
        const li = document.createElement('li');
        li.style.marginLeft = "30px";
        const a = document.createElement('a');
        a.classList.add('nav-link-item');
        a.href = "#";
        a.textContent = text;


        Object.assign(a.style, {
            textDecoration: "none",
            color: "#333",
            fontWeight: "500",
            transition: "all 0.3s ease",
            padding: "10px 20px",
            borderRadius: "5px"
        });


        if (text === 'Home') {
            a.style.background = "#ff4757";
            a.style.color = "white";
        }

        a.onclick = (e) => {
            e.preventDefault();


            document.querySelectorAll('.nav-link-item').forEach(link => {
                link.style.background = "transparent";
                link.style.color = "#333";
            });


            a.style.background = "#ff4757";
            a.style.color = "white";

            const sections = document.querySelectorAll('section');

            if (text === 'Products') {

                if (sections[0]) sections[0].style.display = 'none';
                if (sections[1]) {
                    sections[1].style.display = 'flex';
                    sections[1].style.marginTop = '100px';
                }
                if (sections[2]) sections[2].style.display = 'block';
            }
            else if (text === 'Home') {

                if (sections[0]) sections[0].style.display = 'flex';
                if (sections[1]) {
                    sections[1].style.display = 'flex';
                    sections[1].style.marginTop = '0px';
                }
                if (sections[2]) sections[2].style.display = 'block';
            }

            const detailsPage = document.getElementById('product-details-page');
            if (detailsPage) detailsPage.remove();

            window.scrollTo({ top: 0, behavior: "smooth" });
        };

        a.onmouseover = () => {
            if (a.style.background !== "rgb(255, 71, 87)") {
                a.style.backgroundColor = "#f0f0f0";
            }
        };
        a.onmouseout = () => {
            if (a.style.background !== "rgb(255, 71, 87)") {
                a.style.backgroundColor = "transparent";
            }
        };

        li.appendChild(a);
        ul.appendChild(li);
    });


    const cartLi = document.createElement('li');
    cartLi.style.marginLeft = "30px";
    const cartA = document.createElement('a');
    cartA.href = "#";
    cartA.textContent = "Cart(0)";
    cartCounter = cartA;
    cartA.style.padding = "20px 20px"
    cartA.onmouseover = () => {
        cartA.style.backgroundColor = "#f0f0f0";
    }

    cartA.onmouseout = () => {
        cartA.style.backgroundColor = "transparent";
    }

    cartA.onclick = (e) => {
        if (currentUser) {
            window.location.href = `cartItems.html?userId=${currentUser.id}`;
        } else {
            //alert("Please login first");
            window.location.href = "signIn.html";
        }
    }
    Object.assign(cartA.style, { textDecoration: "none", color: "#333", fontWeight: "500" });
    cartLi.appendChild(cartA);
    ul.appendChild(cartLi);

    nav.append(logo, ul);


    const firstImageUrl = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000';

    const customSliderStyle = document.createElement('style');
    customSliderStyle.textContent = `
    #slider-section {
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${firstImageUrl}');
        background-size: cover;
        background-position: center;
        min-height: 500px;
        transition: background-image 0.8s ease-in-out,opacity 0.5s ease-in-out; 
    }
`;

    document.head.appendChild(customSliderStyle);
    const heading = document.createElement('section');
    heading.id = 'slider-section';
    Object.assign(heading.style, {
        height: "80vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        transition: "background-image 0.8s ease-in-out, opacity 0.5s ease-in-out",
        backgroundSize: "cover",
        backgroundPosition: "center"
    });

    const updateSlider = () => {
        const data = sliderData[currentIndex];
        heading.style.opacity = "0.7";
        setTimeout(() => {
            heading.style.background = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.image}')`;
            heading.style.backgroundSize = "cover";
            heading.style.backgroundPosition = "center";
            h1.textContent = data.title;
            pText.textContent = data.p;
            heading.style.opacity = "1";
        }, 400);

        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentIndex ? "#ff4757" : "rgba(255,255,255,0.5)";
        });
    };
    const hContent = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = "Upgrade Your Lifestyle";
    Object.assign(h1.style, { fontSize: "48px", marginBottom: "20px" });

    const pText = document.createElement('p');
    pText.textContent = "High-quality products delivered straight to your door.";
    Object.assign(pText.style, { fontSize: "20px", marginBottom: "30px", maxWidth: "600px" });

    const cta = document.createElement('a');
    cta.textContent = "Shop Now";
    Object.assign(cta.style, {
        padding: "15px 30px",
        backgroundColor: "#ff4757",
        color: "white",
        borderRadius: "10px",
        fontSize: "18px",
        textDecoration: "none",
        fontWeight: "500",
        transition: "0.3s",
        cursor: "pointer"
    });

    cta.onmouseover = () => cta.style.backgroundColor = "#ff6b81";
    cta.onmouseout = () => cta.style.backgroundColor = "#ff4757";

    hContent.append(h1, pText, cta);
    heading.appendChild(hContent);

    const createArrow = (direction) => {
        const arrow = document.createElement('button');
        arrow.innerHTML = direction === 'left' ? '&#10229;' : '&#10230;';
        Object.assign(arrow.style, {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            color: "white",
            border: "none",
            padding: "10px",
            cursor: "pointer",
            fontSize: "24px",
            borderRadius: "50%",
            [direction]: "20px",
            transition: "0.3s",
            zIndex: "10",
            color: "#ff4757",
            fontSize: "30px"
        });
        arrow.onmouseover = () => arrow.style.backgroundColor = "rgba(0,0,0,0.7)";
        arrow.onmouseout = () => arrow.style.backgroundColor = "transparent";
        return arrow;
    };

    const leftArrow = createArrow('left');
    const rightArrow = createArrow('right');

    leftArrow.onclick = () => {
        currentIndex = (currentIndex - 1 + sliderData.length) % sliderData.length;
        updateSlider();
    }

    rightArrow.onclick = () => {
        currentIndex = (currentIndex + 1) % sliderData.length;
        updateSlider();
    }

    heading.append(leftArrow, rightArrow);

    const dotsContainer = document.createElement('div');
    Object.assign(dotsContainer.style, {
        position: "absolute",
        bottom: "30px",
        display: "flex",
        gap: "10px"
    });

    const dots = sliderData.map((_, index) => {
        const dot = document.createElement('div');
        Object.assign(dot.style, {
            width: "12px", height: "12px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.5)",
            cursor: "pointer",
            transition: "0.3s"
        });
        dot.onclick = () => {
            currentIndex = index;
            updateSlider();
        };

        dotsContainer.appendChild(dot);
        return dot;
    });

    heading.appendChild(dotsContainer);

    setInterval(() => {
        currentIndex = (currentIndex + 1) % sliderData.length;
        updateSlider()
    }, 5000);
    const catNav = document.createElement('section');
    Object.assign(catNav.style, { display: "flex", justifyContent: "center", gap: "10px", padding: "50px 20px", backgroundColor: "#fff" });

    ['All', 'Electronics', 'Fashion', 'Home Decor'].forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        Object.assign(btn.style, {
            padding: "10px 20px",
            border: "1px solid #ddd",
            background: cat === 'All' ? "#ff4757" : "white",
            color: cat === 'All' ? "white" : "#333",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "0.3s",
            width: "200px",
            fontSize: "15px"
        });

        btn.onclick = () => {

            const currentPrice = priceSlider.value;
            renderProducts(cat, currentPrice);

            document.querySelectorAll('.cat-btn').forEach(b => {
                b.style.background = "white";
                b.style.color = "#333";
            });
            btn.style.background = "#ff4757";
            btn.style.color = "white";
        };
        btn.classList.add('cat-btn');
        catNav.appendChild(btn);
    });


    const filterSection = document.createElement('div');
    filterSection.id = "filter-section-id";
    Object.assign(filterSection.style, {
        width: "90%",
        maxWidth: "600px",
        margin: "0 auto 30px",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginTop: "10px"
    });

    const priceLable = document.createElement('label');
    priceLable.textContent = "Max Price: ";
    priceLable.style.display = "block";
    priceLable.style.marginBottom = "15px";

    const maxPrice = Math.max(...products.map(p => p.price));
    const priceDisplay = document.createElement('span');
    priceDisplay.id = "price-value";
    priceDisplay.textContent = `${maxPrice}`;
    Object.assign(priceDisplay.style, {
        color: "#ff4757",
        fontWeight: "bold",
        marginLeft: "5px"
    });

    priceLable.appendChild(priceDisplay);

    const priceSlider = document.createElement('input');
    priceSlider.type = "range";
    priceSlider.min = "0";
    priceSlider.max = maxPrice;
    priceSlider.value = maxPrice;
    Object.assign(priceSlider.style, {
        width: "100%",
        cursor: "pointer",
        accentColor: "#ff4757",
    });
    let currentCategory = 'All';

    priceSlider.oninput = (e) => {
        const val = e.target.value;
        priceDisplay.textContent = `$${val}`;
        renderProducts(currentCategory, val);
    };

    filterSection.append(priceLable, priceSlider);
    const productsSection = document.createElement('section');
    Object.assign(productsSection.style, { padding: "50px 20px", backgroundColor: "#fff", textAlign: "center" });

    const grid = document.createElement('div');
    Object.assign(grid.style, {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "30px",
        alignItems: "start"
    });

    const animateCard = (element, delay) => {
        element.animate([
            { opacity: 0, transform: 'translateY(30px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 600,
            easing: 'ease-out',
            delay: delay,
            fill: 'forwards'
        });
    };
    const renderProducts = (filter = 'All', maxPrice = Infinity) => {
        grid.innerHTML = '';

        currentCategory = filter;
        const list = products.filter(prod => {
            const isCorrectCat = (filter === 'All' || prod.category === filter);
            const isUnderPrice = prod.price <= maxPrice;
            return isCorrectCat && isUnderPrice;
        });

        list.forEach((prod, index) => {
            const card = document.createElement('div');
            card.style.opacity = "0";
            const isOffset = index % 2 !== 0;
            Object.assign(card.style, {
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                marginTop: isOffset ? "60px" : "0px",
                textAlign: "left",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
            });


            card.onmouseover = () => {
                card.style.marginTop = isOffset ? "55px" : "-5px";
                card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
            };

            card.onmouseout = () => {
                card.style.marginTop = isOffset ? "60px" : "0px";
                card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.05)";
            };
            animateCard(card, index * 100);
            const img = document.createElement('img');
            img.src = prod.image;
            Object.assign(img.style, {
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "15px"
            });
            card.onclick = () => {
                showProductDetails(prod);
            }
            const h3 = document.createElement('h3');
            h3.textContent = prod.name;

            const price = document.createElement('p');
            price.textContent = `$${prod.price.toFixed(2)}`;
            Object.assign(price.style, {
                color: "#ff4757",
                fontWeight: "bold",
                fontSize: "1.2rem",
                margin: "10px 0"
            });

            const addButton = document.createElement('div');
            const plusIcon = document.createElement('span');
            plusIcon.textContent = "+";
            plusIcon.style.transition = "transform 0.4s ease";
            plusIcon.style.display = "inline-block";
            addButton.appendChild(plusIcon);
            Object.assign(addButton.style, {
                position: "absolute",
                color: "white",
                paddingBottom: "10px",
                overflow: "hidden",
                right: "0",
                bottom: "0",
                width: "40px",
                height: "40px",
                backgroundColor: "#ff4757",
                color: "white",
                borderRadius: "20px 0 0px 0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "22px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.3s ease",
                zIndex: "10",
                boxShadow: "-2px -2px 10px rgba(0,0,0,0.05)"
            });

            addButton.onmouseover = (e) => {
                e.stopPropagation();
                plusIcon.style.fontSize = "30px";
                addButton.style.backgroundColor = "#ff6b81";
            };
            addButton.onmouseout = () => {
                plusIcon.style.fontSize = "22px";
                addButton.style.backgroundColor = "#ff4757";
            };
            addButton.onclick = async (e) => {
                e.stopPropagation();

                if (!currentUser) {
                    //alert("Please sign in first to add items to your cart!");
                    window.location.href = "signIn.html";
                    return;
                }


                const cartProduct = {
                    name: prod.name,
                    price: prod.price,
                    image: prod.image,
                    quantity: 1
                };

                try {
                    const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${currentUser.id}/cart`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(cartProduct)
                    });

                    if (response.ok) {

                        cartItems.push(prod);
                        cartCounter.textContent = `Cart (${cartItems.length})`;

                        addButton.style.backgroundColor = "#2ecc71";
                        plusIcon.textContent = "✓";
                        setTimeout(() => {
                            addButton.style.backgroundColor = "#ff4757";
                            plusIcon.textContent = "+";
                        }, 800);
                    }
                }
                catch (error) {
                    console.error("Error adding to API cart:", error);
                    alert("Something went wrong!");
                }

            }
            const desc = document.createElement('p');
            desc.textContent = prod.description;
            Object.assign(desc.style, { fontSize: "0.9rem", color: "#777", lineHeight: "1.4" });

            card.append(img, h3, price, desc, addButton);
            grid.appendChild(card);
        });

    }
    productsSection.appendChild(grid);
    app.appendChild(productsSection);
    const footer = document.createElement('footer');
    Object.assign(footer.style, { background: "#000", color: "white", padding: "60px 8% 30px", fontFamily: "Arial, sans-serif" });

    const footerTop = document.createElement('div');
    Object.assign(footerTop.style, { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px" });


    const leftSide = document.createElement('div');
    leftSide.innerHTML = `<h2 style="margin-bottom:10px; font-weight:700;">ECOMM<span style="color:#ff4757;">STORE</span></h2>
                          <p style="color:#aaa; font-size:14px; max-width:350px; line-height:1.6;">We want to help bring talented students and unique startups together.</p>`;


    const rightSide = document.createElement('div');
    Object.assign(rightSide.style, { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "20px" });


    const socialsDiv = document.createElement('div');
    socialsDiv.style.display = "flex"; socialsDiv.style.gap = "15px";

    const socialMedia = [
        { name: 'FB', url: 'https://cdn-icons-png.flaticon.com/512/81/81341.png' },
        { name: 'TW', url: 'https://cdn-icons-png.flaticon.com/512/733/733579.png' },
        { name: 'IG', url: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png' }
    ];

    socialMedia.forEach(item => {
        const circle = document.createElement('div');
        Object.assign(circle.style, { width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#fff", display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer", transition: "0.3s" });
        const icon = document.createElement('img');
        icon.src = item.url; Object.assign(icon.style, { width: "18px", filter: "brightness(0)" });
        circle.appendChild(icon);
        socialsDiv.appendChild(circle);
    });

    const createAuthButton = (text, isNewAuth) => {
        const btn = document.createElement('button');
        btn.textContent = text;
        Object.assign(btn.style, {
            padding: "10px 25px", border: "1px solid #ff4757", borderRadius: "5px",
            backgroundColor: isNewAuth ? "#ff4757" : "transparent",
            color: isNewAuth ? "white" : "#fff", cursor: "pointer", fontWeight: "600", fontSize: "16px"
        });
        btn.onmouseover = () => { btn.style.transform = "scale(1.1)"; btn.style.backgroundColor = "#ff4757"; btn.style.color = "white"; };
        btn.onmouseout = () => { btn.style.transform = "translateY(0)"; btn.style.backgroundColor = isNewAuth ? "#ff4757" : "transparent"; btn.style.color = isNewAuth ? "white" : "#fff"; };
        btn.onclick = () => {
            window.location.href = isNewAuth ? "signUp.html" : "signIn.html";
        }
        return btn;
    };

    const authContainer = document.createElement('div');
    authContainer.style.display = "flex";
    authContainer.style.gap = "12px";



    if (currentUser) {
        const welcomeText = document.createElement('span');
        welcomeText.textContent = `Hello, ${currentUser.name} `;
        welcomeText.style.color = "white";

        const logoutBtn = createAuthButton("Logout", true);
        logoutBtn.onclick = () => {
            window.location.href = "home.html";
        };
        authContainer.append(welcomeText, logoutBtn);

        try {
            const cartRes = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${currentUser.id}/cart`);
            if (cartRes.ok) {
                const data = await cartRes.json();
                cartItems = data;
                cartCounter.textContent = `Cart (${cartItems.length})`;
            }
        } catch (e) {
            console.log("Error loading initial cart");
        }
    } else {
        authContainer.append(createAuthButton("Sign Up", true), createAuthButton("Login", false));
    }
    rightSide.append(socialsDiv, authContainer);
    footerTop.append(leftSide, rightSide);

    const line = document.createElement('hr');
    Object.assign(line.style, { border: "none", borderTop: "1px solid #333", marginBottom: "20px" });

    const copyright = document.createElement('div');
    copyright.innerHTML = `&copy; 2024 ECOMMSTORE. All rights reserved.`;
    copyright.style.color = "#777"; copyright.style.fontSize = "13px";

    footer.append(footerTop, line, copyright);
    app.append(nav, heading, catNav, filterSection, productsSection, footer);


    renderProducts('All');

    const upButton = document.createElement('div');
    upButton.innerHTML = '&#8593;';
    Object.assign(upButton.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        backgroundColor: "#ff4757",
        color: "white",
        border: "none",
        cursor: "pointer",
        zIndex: "2000",
        display: "none",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "24px",
        fontWeight: "bold",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease"
    })

    upButton.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    document.body.appendChild(upButton);

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            upButton.style.display = "flex";
        } else {
            upButton.style.display = "none";
        }
    }
};

document.addEventListener('DOMContentLoaded', initApp);

const showProductDetails = (product) => {
    const sections = document.querySelectorAll('section');
    const heading = sections[0];
    const catNav = sections[1];
    const productsSection = sections[2];
    const filterSection = document.getElementById('filter-section-id');
    heading.style.display = 'none';
    catNav.style.display = 'none';
    productsSection.style.display = 'none';
    filterSection.style.display = 'none';

    const detailsContainer = document.createElement('div');
    detailsContainer.id = 'product-details-page';
    Object.assign(detailsContainer.style, {
        padding: "120px 8% 50px",
        backgroundColor: "#fff",
        minHeight: "100vh",
        animation: "fadeIn 0.5s ease"
    });

    const backBtn = document.createElement('button');
    backBtn.innerHTML = "&#10229; Back to Products";
    Object.assign(backBtn.style, {
        border: "none",
        background: "none",
        color: "#777",
        cursor: "pointer",
        marginBottom: "30px",
        fontSize: "16px",
        fontWeight: "600"
    });

    backBtn.onclick = () => {
        detailsContainer.remove();
        heading.style.display = 'flex';
        catNav.style.display = 'flex';
        productsSection.style.display = 'block';
        window.scrollTo(0, 0);
    };

    const mainInfo = document.createElement('div');
    Object.assign(mainInfo.style, {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "50px",
        marginBottom: "80px"
    });

    const productImg = document.createElement('img');
    productImg.src = product.image;
    Object.assign(productImg.style, {
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    });

    const infoContent = document.createElement('div');

    const catText = document.createElement('p');
    catText.textContent = product.category;
    Object.assign(catText.style, {
        color: "#ff4757",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "1px",
        marginBottom: "10px"
    });

    const prodTitle = document.createElement('h1');
    prodTitle.textContent = product.name;
    Object.assign(prodTitle.style, {
        fontSize: "40px",
        marginBottom: "15px",
        color: "#000"
    });

    const prodPrice = document.createElement('p');
    prodPrice.textContent = `$${product.price.toFixed(2)}`;
    Object.assign(prodPrice.style, {
        fontSize: "28px",
        color: "#333",
        fontWeight: "bold",
        marginBottom: "25px"
    });

    const divider = document.createElement('div');
    Object.assign(divider.style, {
        width: "50px",
        height: "3px",
        background: "#ff4757",
        marginBottom: "25px"
    });

    const prodDesc = document.createElement('p');
    prodDesc.textContent = product.description;
    Object.assign(prodDesc.style, {
        color: "#666",
        lineHeight: "1.8",
        fontSize: "17px",
        marginBottom: "40px"
    });

    const bigAddBtn = document.createElement('button');
    bigAddBtn.textContent = "ADD TO CART";
    Object.assign(bigAddBtn.style, {
        padding: "18px 50px",
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s"
    });

    bigAddBtn.onmouseover = () => bigAddBtn.style.backgroundColor = "#ff4757";
    bigAddBtn.onmouseout = () => bigAddBtn.style.backgroundColor = "#000";

    bigAddBtn.onclick = async (e) => {
        e.stopPropagation();

        if (!currentUser) {
            //alert("Please sign in first to add items to your cart!");
            window.location.href = "signIn.html";
            return;
        }


        const cartProduct = {
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        };

        try {
            const response = await fetch(`https://6989f94cc04d974bc6a0fecc.mockapi.io/users/${currentUser.id}/cart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(cartProduct)
            });

            if (response.ok) {

                cartItems.push(product);
                cartCounter.textContent = `Cart (${cartItems.length})`;

                bigAddBtn.style.backgroundColor = "#2ecc71";
                setTimeout(() => {
                    bigAddBtn.style.backgroundColor = "#ff4757";
                }, 800);
            }
        }
        catch (error) {
            console.error("Error adding to API cart:", error);
            alert("Something went wrong!");
        }
    }

    infoContent.append(catText, prodTitle, prodPrice, divider, prodDesc, bigAddBtn);
    mainInfo.append(productImg, infoContent);

    const relatedSection = document.createElement('div');

    const relatedTitle = document.createElement('h2');
    relatedTitle.textContent = "Related Products";
    Object.assign(relatedTitle.style, {
        marginBottom: "30px",
        fontSize: "24px",
        borderLeft: "5px solid #ff4757",
        paddingLeft: "15px"
    });

    const relatedGrid = document.createElement('div');
    Object.assign(relatedGrid.style, {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
    });

    const relatedItem = products.filter(p => p.category == product.category && p.id !== product.id).slice(0, 4);


    relatedItem.forEach(item => {
        const itemCard = document.createElement('div');
        Object.assign(itemCard.style, {
            cursor: "pointer",
            transition: "0.3s",
            textAlign: "center"
        });

        const rImg = document.createElement('img');
        rImg.src = item.image;
        Object.assign(rImg.style, {
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "10px"
        });

        const rName = document.createElement('h4');
        rName.textContent = item.name;
        rName.style.fontSize = "15px";
        rName.style.marginBottom = "5px";

        const rPrice = document.createElement('p');
        rPrice.textContent = `$${item.price.toFixed(2)}`;
        Object.assign(rPrice.style, { color: "#ff4757", fontWeight: "bold" });

        itemCard.append(rImg, rName, rPrice);

        itemCard.onclick = () => {
            detailsContainer.remove();
            showProductDetails(item);
            window.scrollTo(0, 0);
        };
        relatedGrid.appendChild(itemCard);
    });

    relatedSection.append(relatedTitle, relatedGrid);
    detailsContainer.append(backBtn, mainInfo, relatedSection);
    const app = document.getElementById('app');
    const footer = document.querySelector('footer');
    app.insertBefore(detailsContainer, footer);

    window.scrollTo(0, 0);
};

const styleTag = document.createElement('style');
styleTag.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }`;
document.head.appendChild(styleTag);

