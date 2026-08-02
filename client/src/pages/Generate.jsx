import { useEffect, useState } from "react";
import API from "../services/api";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [credits, setCredits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/user/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCredits(res.data.user.credits);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenerate = async () => {
    setIsLoading(true);

    if (!prompt) {
      setIsLoading(false);
      alert("Please enter a prompt");
      return;
    }

    if (credits < 10) {
      setIsLoading(false);
      alert("Not enough credits. Please upgrade your plan.");
      return;
    }

   try {

    let demoCode = "";
let aiSuccess = false;

/*try {

const aiResponse = await API.post("/ai/generate", {
prompt,
});

demoCode = aiResponse.data.code;
aiSuccess = true;

}
catch(aiError){

console.log("AI Failed, Using Template");

}*/

  let title = "Generated Website";

if (prompt.toLowerCase().includes("portfolio")) {
  title = "Portfolio Website";
}
else if (prompt.toLowerCase().includes("restaurant")) {
  title = "Restaurant Website";
}
else if (prompt.toLowerCase().includes("college")) {
  title = "College Website";
}
else if (prompt.toLowerCase().includes("blog")) {
  title = "Blog Website";
}
else if (prompt.toLowerCase().includes("ecommerce")) {
  title = "Ecommerce Website";
}
else if (prompt.toLowerCase().includes("hospital")) {
  title = "Hospital Website";
}
else if (prompt.toLowerCase().includes("gym")) {
  title = "Gym Website";
}
else if (prompt.toLowerCase().includes("school")) {
  title = "School Website";
}
else if (prompt.toLowerCase().includes("event")) {
  title = "Event Management Website";
}
else if (prompt.toLowerCase().includes("business")) {
  title = "Business Website";
}
else if (prompt.toLowerCase().includes("recipe")) {
  title = "Recipe Generator";
}
else if (prompt.toLowerCase().includes("gaming")) {
  title = "Gaming Website";
}
else if (prompt.toLowerCase().includes("real state")) {
  title = "Real State Property";
}
else if (prompt.toLowerCase().includes("job portal")) {
  title = "Job Portal";
}
else if (prompt.toLowerCase().includes("landing")) {
  title = "Landing Page";
}


//if (!aiSuccess) {
if (prompt.toLowerCase().includes("portfolio")) {

  demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MCA Graduate Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;600;700;800&display=swap');

        :root {
            --bg-dark: #0f172a;       /* Deep slate blue background */
            --card-dark: #1e293b;     /* Card background */
            --accent-glow: #38bdf8;   /* Cyber/Tech Blue */
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --border-color: #334155;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.3s ease;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            overflow-x: hidden;
        }

        /* Global Classes */
        .section-padding {
            padding: 10rem 8% 4rem;
        }

        .heading {
            font-size: 3.2rem;
            font-weight: 800;
            margin-bottom: 5rem;
            position: relative;
            display: inline-block;
        }

        .heading::after {
            content: '';
            position: absolute;
            bottom: -10px; left: 0;
            width: 50px; height: 4px;
            background-color: var(--accent-glow);
            border-radius: 2px;
        }

        .code-font {
            font-family: 'Fira Code', monospace;
            color: var(--accent-glow);
        }

        /* Header Navigation */
        header {
            position: fixed;
            top: 0; left: 0; right: 0;
            background-color: rgba(15, 23, 42, 0.9);
            backdrop-filter: blur(12px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            border-bottom: 1px solid var(--border-color);
        }

        .logo {
            font-size: 2.2rem;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .logo span {
            color: var(--accent-glow);
        }

        .navbar {
            display: flex;
        }

        .navbar a {
            color: var(--text-main);
            font-size: 1.5rem;
            font-weight: 500;
            margin-left: 3.5rem;
        }

        .navbar a:hover {
            color: var(--accent-glow);
        }

        #menu-btn {
            display: none;
            font-size: 2.2rem;
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            min-height: 95vh;
            display: flex;
            align-items: center;
            background: radial-gradient(circle at 90% 10%, rgba(56, 189, 248, 0.08) 0%, transparent 40%);
            padding-top: 12rem;
        }

        .hero-container {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr;
            gap: 4rem;
            align-items: center;
            width: 100%;
        }

        .hero-content .subtitle {
            font-size: 1.6rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
        }

        .hero-content h1 {
            font-size: 5.5rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 2rem;
            letter-spacing: -1px;
        }

        .hero-content h1 span {
            background: linear-gradient(to right, #38bdf8, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-content p {
            font-size: 1.7rem;
            color: var(--text-muted);
            line-height: 1.7;
            margin-bottom: 3.5rem;
            max-width: 60rem;
        }

        .cta-buttons {
            display: flex;
            gap: 2rem;
        }

        .btn {
            padding: 1.2rem 3rem;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
        }

        .btn-primary {
            background-color: var(--accent-glow);
            color: var(--bg-dark);
            border: 1px solid var(--accent-glow);
        }

        .btn-primary:hover {
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
            transform: translateY(-2px);
        }

        .btn-secondary {
            background-color: transparent;
            color: var(--text-main);
            border: 1px solid var(--border-color);
        }

        .btn-secondary:hover {
            border-color: var(--accent-glow);
            background-color: rgba(56, 189, 248, 0.03);
        }

        /* Terminal Illustration Box */
        .hero-illustration {
            background-color: var(--card-dark);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .terminal-header {
            display: flex;
            gap: 8px;
            margin-bottom: 2rem;
        }

        .terminal-dot {
            width: 12px; height: 12px;
            border-radius: 50%;
        }
        .dot-r { background-color: #ef4444; }
        .dot-y { background-color: #eab308; }
        .dot-g { background-color: #22c55e; }

        .terminal-body p {
            font-size: 1.4rem;
            line-height: 2;
            margin-bottom: 1rem;
        }

        /* Education & Skills Section */
        .skills-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
        }

        .education-timeline .item {
            border-left: 2px solid var(--border-color);
            padding-left: 2.5rem;
            position: relative;
            padding-bottom: 3rem;
        }

        .education-timeline .item::before {
            content: '';
            position: absolute;
            left: -7px; top: 5px;
            width: 12px; height: 12px;
            background-color: var(--accent-glow);
            border-radius: 50%;
        }

        .education-timeline h3 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .education-timeline h4 { font-size: 1.4rem; color: var(--accent-glow); margin-bottom: 0.5rem; font-weight: 500;}
        .education-timeline span { font-size: 1.3rem; color: var(--text-muted); }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
            gap: 1.5rem;
        }

        .skill-card {
            background-color: var(--card-dark);
            border: 1px solid var(--border-color);
            padding: 2rem;
            text-align: center;
            border-radius: 8px;
        }

        .skill-card:hover {
            border-color: var(--accent-glow);
            transform: translateY(-3px);
        }

        .skill-card i {
            font-size: 3rem;
            color: var(--accent-glow);
            margin-bottom: 1rem;
        }

        .skill-card p { font-size: 1.4rem; font-weight: 500; }

        /* Projects Section */
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
            gap: 3rem;
        }

        .project-card {
            background-color: var(--card-dark);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            padding: 3rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            border-color: rgba(56, 189, 248, 0.3);
        }

        .project-icon-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            color: var(--text-muted);
        }

        .project-icon-box i.folder { font-size: 3.5rem; color: var(--accent-glow); }
        .project-icon-box .links i { font-size: 1.8rem; margin-left: 1.5rem; cursor: pointer; color: var(--text-main);}
        .project-icon-box .links i:hover { color: var(--accent-glow); }

        .project-card h3 { font-size: 2rem; margin-bottom: 1.5rem; font-weight: 700; }
        .project-card p { font-size: 1.4rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2.5rem; }

        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 1.2rem;
        }

        .project-tech span {
            font-size: 1.2rem;
            background-color: rgba(56, 189, 248, 0.06);
            color: var(--accent-glow);
            padding: 0.4rem 1.2rem;
            border-radius: 20px;
            border: 1px solid rgba(56, 189, 248, 0.15);
        }

        /* Contact Section */
        .contact-container {
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 5rem;
            background-color: var(--card-dark);
            border: 1px solid var(--border-color);
            padding: 5rem;
            border-radius: 16px;
        }

        .contact-info h3 { font-size: 2.4rem; margin-bottom: 1.5rem; }
        .contact-info p { font-size: 1.5rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 3rem; }
        
        .info-details .item {
            display: flex;
            align-items: center;
            margin-bottom: 2rem;
            font-size: 1.5rem;
        }

        .info-details .item i {
            font-size: 1.8rem;
            color: var(--accent-glow);
            margin-right: 1.5rem;
            width: 25px;
        }

        .contact-form form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .contact-form .full-width { grid-column: span 2; }

        .contact-form input, .contact-form textarea {
            width: 100%;
            background-color: var(--bg-dark);
            border: 1px solid var(--border-color);
            padding: 1.5rem;
            color: var(--text-main);
            border-radius: 8px;
            font-size: 1.4rem;
        }

        .contact-form input:focus, .contact-form textarea:focus {
            border-color: var(--accent-glow);
            outline: none;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 4rem 0;
            border-top: 1px solid var(--border-color);
            margin-top: 6rem;
            font-size: 1.4rem;
            color: var(--text-muted);
        }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            .hero-container, .skills-container, .contact-container {
                grid-template-columns: 1fr;
            }
            .hero-illustration { order: -1; max-width: 50rem; margin: 0 auto; }
            .hero-content { text-align: center; }
            .hero-content p { margin: 2rem auto 3.5rem; }
            .cta-buttons { justify-content: center; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: var(--bg-dark);
                border-top: 1px solid var(--border-color);
                flex-direction: column;
                padding: 2rem 0;
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 8%; font-size: 1.8rem; }
            .hero-content h1 { font-size: 4rem; }
            .contact-container { padding: 3rem; }
            .contact-form form { grid-template-columns: 1fr; }
            .contact-form .full-width { grid-column: span 1; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <header>
        <div class="logo">M<span>CA</span>_Dev</div>
        
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">Education & Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <section class="hero section-padding" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <p class="subtitle code-font">Hi, my name is</p>
                <h1>Rahul <span>Sharma</span></h1>
                <p>An aspiring Software Engineer pursuing my <b>Master of Computer Applications (MCA)</b>. Focused on building robust backend systems, full-stack web applications, and resolving complex algorithmic problems.</p>
                <div class="cta-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Let's Talk</a>
                </div>
            </div>
            
            <div class="hero-illustration">
                <div class="terminal-header">
                    <div class="terminal-dot dot-r"></div>
                    <div class="terminal-dot dot-y"></div>
                    <div class="terminal-dot dot-g"></div>
                </div>
                <div class="terminal-body code-font">
                    <p>> student.currentDegree = "MCA";</p>
                    <p>> student.skills = ["Java", "Python", "MERN Stack", "SQL"];</p>
                    <p>> student.lookingFor = "SDE Internships / Jobs";</p>
                    <p>> student.status = "Ready to code! 🚀";</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="about">
        <div class="skills-container">
            <div>
                <h2 class="heading">Education</h2>
                <div class="education-timeline">
                    <div class="item">
                        <h3>Master of Computer Applications (MCA)</h3>
                        <h4>ABC Institute of Technology</h4>
                        <span>2024 - 2026 | CGPA: 8.5 (Current)</span>
                    </div>
                    <div class="item">
                        <h3>Bachelor of Computer Applications (BCA)</h3>
                        <h4>XYZ University</h4>
                        <span>2021 - 2024 | Percentage: 78%</span>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="heading">Technical Stack</h2>
                <div class="skills-grid">
                    <div class="skill-card">
                        <i class="fab fa-java"></i>
                        <p>Java Core</p>
                    </div>
                    <div class="skill-card">
                        <i class="fab fa-python"></i>
                        <p>Python</p>
                    </div>
                    <div class="skill-card">
                        <i class="fab fa-node-js"></i>
                        <p>MERN Stack</p>
                    </div>
                    <div class="skill-card">
                        <i class="fas fa-database"></i>
                        <p>SQL / NoSQL</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="projects">
        <h2 class="heading">Academic & Personal Projects</h2>
        
        <div class="projects-grid">
            <div class="project-card">
                <div>
                    <div class="project-icon-box">
                        <i class="far fa-folder folder"></i>
                        <div class="links">
                            <i class="fab fa-github"></i>
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    <h3>E-Learning Portal API</h3>
                    <p>Designed a microservice architecture based RESTful API platform for student course registration and automated quiz evaluation modules.</p>
                </div>
                <div class="project-tech">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>JWT</span>
                </div>
            </div>

            <div class="project-card">
                <div>
                    <div class="project-icon-box">
                        <i class="far fa-folder folder"></i>
                        <div class="links">
                            <i class="fab fa-github"></i>
                            <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                    <h3>Smart Inventory System</h3>
                    <p>A desktop-based management program built for tracking inventory flows, creating dynamic analytical graphs, and auto-billing generation.</p>
                </div>
                <div class="project-tech">
                    <span>Java Swing</span>
                    <span>JDBC</span>
                    <span>MySQL</span>
                </div>
            </div>

            <div class="project-card">
                <div>
                    <div class="project-icon-box">
                        <i class="far fa-folder folder"></i>
                        <div class="links">
                            <i class="fab fa-github"></i>
                        </div>
                    </div>
                    <h3>Algorithm Visualizer</h3>
                    <p>Web application to help computer science students visualize sorting algorithms like Bubble, Quick, and Merge sort in real-time speed.</p>
                </div>
                <div class="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="contact">
        <h2 class="heading">Get In Touch</h2>
        
        <div class="contact-container">
            <div class="contact-info">
                <h3>Let's collaborate!</h3>
                <p>I am actively looking for software development internship roles and full-stack positions. Drop a message, I will revert within 24 hours.</p>
                <div class="info-details">
                    <div class="item">
                        <i class="fas fa-envelope"></i>
                        <span>rahul.mca@email.com</span>
                    </div>
                    <div class="item">
                        <i class="fas fa-phone-alt"></i>
                        <span>+91 9876543210</span>
                    </div>
                    <div class="item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>New Delhi, India</span>
                    </div>
                </div>
            </div>

            <div class="contact-form">
                <form action="#">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <input type="text" class="full-width" placeholder="Subject">
                    <textarea class="full-width" rows="5" placeholder="Your Message Here..." required></textarea>
                    <button type="submit" class="btn btn-primary full-width">Send Message</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2026 Rahul Sharma. Built from scratch using pure HTML & CSS.</p>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("restaurant")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Saffron Room | Fine Dine Luxury Restaurant</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');

        :root {
            --warm-crimson: #bc3a3a;     /* Sophisticated Food Crimson */
            --luxury-gold: #dfb160;      /* Fine Dine Champagne Gold */
            --deep-coal: #121418;        /* Ultra Premium Charcoal Slate */
            --bg-cream: #faf7f2;         /* Warm Appetizing White Canvas */
            --text-dark: #22252a;
            --border-split: #e8e2d5;
            --card-shadow: 0 12px 30px rgba(18, 20, 24, 0.05);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.25s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
        }

        body {
            background-color: var(--bg-cream);
            color: var(--text-dark);
            line-height: 1.6;
        }

        h1, h2, h3, .restaurant-logo {
            font-family: 'Cormorant Garamond', serif;
            color: var(--deep-coal);
        }

        /* Standard Layout System */
        .section-padding {
            padding: 10rem 8% 5rem;
        }

        .heading-container {
            text-align: center;
            margin-bottom: 7rem;
        }

        .heading-container h2 {
            font-size: 4.2rem;
            font-weight: 700;
            letter-spacing: -0.5px;
            margin-bottom: 1.5rem;
        }

        .heading-container h2 span {
            color: var(--warm-crimson);
        }

        .heading-container p {
            font-size: 1.6rem;
            color: #718096;
            max-width: 50rem;
            margin: 0 auto;
            font-style: italic;
        }

        .btn {
            display: inline-block;
            padding: 1.4rem 3.4rem;
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            border-radius: 0px; /* Sharp classic upscale borders */
            cursor: pointer;
            border: none;
            text-align: center;
        }

        .btn-crimson {
            background-color: var(--warm-crimson);
            color: white;
        }

        .btn-crimson:hover {
            background-color: #9b2c2c;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(188, 58, 58, 0.2);
        }

        .btn-outline {
            background-color: transparent;
            color: var(--deep-coal);
            border: 1px solid var(--deep-coal);
        }

        .btn-outline:hover {
            background-color: var(--deep-coal);
            color: white;
        }

        /* Glassmorphic Fixed Navigation Header */
        header {
            position: fixed;
            top: 0; left: 0; right: 0;
            background-color: rgba(250, 247, 242, 0.9);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2.2rem 8%;
            z-index: 1000;
            border-bottom: 1px solid var(--border-split);
        }

        .restaurant-logo {
            font-size: 2.8rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: var(--deep-coal);
        }

        .restaurant-logo span { color: var(--warm-crimson); }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: var(--text-dark);
            font-size: 1.4rem;
            font-weight: 500;
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-left: 4.5rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--warm-crimson);
        }

        #menu-btn {
            display: none;
            font-size: 2.2rem;
            color: var(--deep-coal);
            cursor: pointer;
        }

        /* Immersive Epicurean Hero Banner */
        .hero {
            min-height: 90vh;
            background: linear-gradient(rgba(18, 20, 24, 0.4), rgba(18, 20, 24, 0.45)), 
                        url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920') no-repeat center center/cover;
            display: flex;
            align-items: center;
            padding: 8rem 8% 0;
        }

        .hero-content {
            max-width: 75rem;
        }

        .hero-content h3 {
            font-size: 1.6rem;
            color: var(--luxury-gold);
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .hero-content h1 {
            color: white;
            font-size: 6.4rem;
            line-height: 1.15;
            font-weight: 600;
            margin-bottom: 3rem;
        }

        .hero-content p {
            font-size: 1.8rem;
            color: #e2e8f0;
            margin-bottom: 4rem;
            font-weight: 300;
            max-width: 60rem;
        }

        .hero-action-layout {
            display: flex;
            gap: 2rem;
        }

        /* Split-Architecture Culinary Menu Display */
        .menu-matrix-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
        }

        .menu-column h3 {
            font-size: 2.8rem;
            border-bottom: 2px solid var(--luxury-gold);
            padding-bottom: 1rem;
            margin-bottom: 3.5rem;
            font-weight: 600;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .menu-column h3 i { font-size: 2rem; color: var(--warm-crimson); }

        .menu-item-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 3rem;
        }

        .item-details { max-width: 75%; }
        .item-details h4 { font-size: 1.8rem; color: var(--deep-coal); margin-bottom: 0.5rem; font-weight: 600; }
        .item-details p { font-size: 1.4rem; color: #718096; line-height: 1.5; }
        
        .item-price {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem;
            font-weight: 700;
            color: var(--warm-crimson);
            border-bottom: 1px dashed var(--luxury-gold);
            padding-left: 1rem;
        }

        /* Immersive Chef Showcase Section */
        .story-container {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 6rem;
            align-items: center;
        }

        .story-visual img {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border: 12px solid white;
            box-shadow: var(--card-shadow);
        }

        .story-content h2 { font-size: 4rem; margin-bottom: 2rem; }
        .story-content p { font-size: 1.6rem; color: #4a5568; margin-bottom: 2.5rem; line-height: 1.75; }

        /* Integrated Reservation Matrix Block */
        .reserve-wrapper {
            background-color: white;
            border: 1px solid var(--border-split);
            box-shadow: var(--card-shadow);
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            overflow: hidden;
        }

        .reserve-meta-panel {
            background: linear-gradient(rgba(18, 20, 24, 0.9), rgba(18, 20, 24, 0.95)), 
                        url('https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600') no-repeat center center/cover;
            color: white;
            padding: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .reserve-meta-panel h3 { color: white; font-size: 3.4rem; margin-bottom: 2rem; }
        .reserve-meta-panel p { color: #cbd5e1; font-size: 1.5rem; line-height: 1.7; margin-bottom: 4rem; }

        .operational-hour {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #2d3748;
            padding: 1.2rem 0;
            font-size: 1.45rem;
        }
        .operational-hour span:last-child { color: var(--luxury-gold); }

        .reserve-form-panel { padding: 6rem; }
        .reserve-form-panel h3 { font-size: 2.6rem; margin-bottom: 3rem; font-weight: 600; }

        .reservation-inputs-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
        }

        .span-full { grid-column: span 2; }

        .reservation-inputs-grid input, .reservation-inputs-grid select, .reservation-inputs-grid textarea {
            width: 100%;
            padding: 1.5rem;
            background-color: var(--bg-cream);
            border: 1px solid var(--border-split);
            color: var(--deep-coal);
            font-size: 1.4rem;
        }

        .reservation-inputs-grid input:focus, .reservation-inputs-grid select:focus, .reservation-inputs-grid textarea:focus {
            outline: none;
            border-color: var(--warm-crimson);
            background-color: white;
        }

        /* Classic Luxury Footer Grid */
        footer {
            background-color: var(--deep-coal);
            color: #a0aec0;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 5rem;
            padding: 8rem 8% 4rem;
            border-top: 3px solid var(--luxury-gold);
        }

        .footer-block h3 { color: white; font-size: 2.2rem; margin-bottom: 2.5rem; }
        .footer-block p { font-size: 1.45rem; line-height: 1.8; }
        
        .social-row { margin-top: 2rem; }
        .social-row a {
            display: inline-block;
            width: 4rem; height: 4rem;
            line-height: 4rem;
            background-color: #1a1e24;
            color: var(--luxury-gold);
            text-align: center;
            margin-right: 1rem;
            font-size: 1.5rem;
        }
        .social-row a:hover { background-color: var(--warm-crimson); color: white; }

        .footer-block ul li { margin-bottom: 1.2rem; }
        .footer-block ul li a { font-size: 1.45rem; color: #a0aec0; }
        .footer-block ul li a:hover { color: var(--luxury-gold); padding-left: 6px; }

        /* Multi-tier Responsive Media Queries */
        @media (max-width: 1024px) {
            html { font-size: 55%; }
            .menu-matrix-grid, .story-container, .reserve-wrapper { grid-template-columns: 1fr; }
            .story-visual { order: -1; }
            .hero-content { text-align: center; }
            .hero-action-layout { justify-content: center; }
            .section-padding { padding: 8rem 4% 4rem; }
            footer { padding: 8rem 4% 4rem; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: var(--bg-cream);
                flex-direction: column;
                padding: 2.5rem 0;
                box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                border-top: 1px solid var(--border-split);
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 0; font-size: 1.8rem; }
            .reservation-inputs-grid { grid-template-columns: 1fr; }
            .span-full { grid-column: span 1; }
            .reserve-meta-panel, .reserve-form-panel { padding: 4rem 3rem; }
        }
    </style>
</head>
<body>

    <!-- CSS State Controller For Responsive Mobile Nav -->
    <input type="checkbox" id="menu-toggle" style="display: none;">

    <!-- Navigation Header Panel -->
    <header>
        <div class="restaurant-logo">The Saffron<span> Room.</span></div>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#menu">Menu</a>
            <a href="#story">Our Story</a>
            <a href="#reserve">Reservations</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <!-- Culinary Immersive Showcase Banner -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h3>Exquisite Gastronomy Experience</h3>
            <h1>Crafting Artistry From Rare Ingredients</h1>
            <p>Step inside a sanctuary of fine epicurean heritage where complex operational baking configurations blend flawlessly with premium traditional charcoal spices.</p>
            <div class="hero-action-layout">
                <a href="#reserve" class="btn btn-crimson">Book A Table</a>
                <a href="#menu" class="btn btn-outline" style="color: white; border-color: white;">View Menu</a>
            </div>
        </div>
    </section>

    <!-- Traditional Culinary Menu Grid Catalog -->
    <section class="section-padding" id="menu">
        <div class="heading-container">
            <p>Curated Culinary Expressions</p>
            <h2>Explore Our <span>Seasonal Menu</span></h2>
        </div>

        <div class="menu-matrix-grid">
            <!-- Left Side: Starters & Appetizers -->
            <div class="menu-column">
                <h3>Pre-Mains / Hors d'œuvre <i class="fas fa-seedling"></i></h3>
                
                <div class="menu-item-row">
                    <div class="item-details">
                        <h4>Charred Truffle Broccolini</h4>
                        <p>Infused with aged almond milk emulsion, smoked rock salt logic patterns, and premium garlic drizzle extract.</p>
                    </div>
                    <span class="item-price">$18</span>
                </div>

                <div class="menu-item-row">
                    <div class="item-details">
                        <h4>Saffron Infused Ricotta Crostini</h4>
                        <p>Crispy wood-fired sourdough crust layer loaded with whipped goat milk curd and wild forest honey syrup.</p>
                    </div>
                    <span class="item-price">$22</span>
                </div>
            </div>

            <!-- Right Side: Masterpiece Main Courses -->
            <div class="menu-column">
                <h3>Signature Entrées <i class="fas fa-utensils"></i></h3>
                
                <div class="menu-item-row">
                    <div class="item-details">
                        <h4>Slow-Braised Rosemary Lamb Shank</h4>
                        <p>Simmered for 12 hours over structural wood embers, served over rich truffle potato puree and glazed baby carrots.</p>
                    </div>
                    <span class="item-price">$46</span>
                </div>

                <div class="menu-item-row">
                    <div class="item-details">
                        <h4>Pan-Seared Chilean Sea Bass</h4>
                        <p>Resting cleanly inside an aromatic wild lemongrass broth matrix, topped with charred asparagus and ginger crystals.</p>
                    </div>
                    <span class="item-price">$52</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Chef Artistry Narrative Row Section -->
    <section class="section-padding" id="story" style="background-color: #f3ede2;">
        <div class="story-container">
            <div class="story-visual">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600" alt="Executive Culinary Artist Organizing Plate">
            </div>
            <div class="story-content">
                <h2>A Masterclass In Aesthetic Flavour Synthetics</h2>
                <p>Founded by international culinary visionaries, The Saffron Room combines computational precision cooking techniques with age-old flame smoke traditions to construct dishes that tell stories.</p>
                <p>Every single spice leaf, structural plating logic layout, and wine pairing variable is engineered directly by specialists to ensure your culinary verification is unforgettable.</p>
                <a href="#reserve" class="btn btn-outline">Learn More Policies</a>
            </div>
        </div>
    </section>

    <!-- Table Intake Inquiry Block Module -->
    <section class="section-padding" id="reserve">
        <div class="reserve-wrapper">
            <!-- Panel Information Data -->
            <div class="reserve-meta-panel">
                <h3>Secure Your Dining Suite</h3>
                <p>Due to high multi-tier dining configuration traffic, we highly recommend finalizing your weekend slot validations at least 48 hours in advance.</p>
                
                <div class="operational-hour">
                    <span>Monday - Thursday</span>
                    <span>12:00 PM - 11:00 PM</span>
                </div>
                <div class="operational-hour">
                    <span>Friday - Sunday</span>
                    <span>11:30 AM - Midnight</span>
                </div>
                
                <p style="margin-top: 3rem; font-size: 1.4rem; color: var(--luxury-gold);"><i class="fas fa-phone-alt"></i> Priority Hotline: +1 (555) 992-3344</p>
            </div>

            <!-- Panel Entry Form Fields -->
            <div class="reserve-form-panel">
                <h3>Table Reservation Request</h3>
                <form class="reservation-inputs-grid" action="#" onsubmit="event.preventDefault(); alert('Reservation submitted! Our guest relations desk will verify your seating via SMS within 15 minutes.');">
                    <input type="text" placeholder="Your Full Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Mobile Verification Number" required>
                    
                    <select required>
                        <option value="" disabled selected>Guests Allocation Size</option>
                        <option value="2">2 Guests (Intimate Counter)</option>
                        <option value="4">4 Guests (Standard Lounge)</option>
                        <option value="8">8+ Guests (Private Dining Hall)</option>
                    </select>

                    <input type="date" required>
                    <input type="time" required>
                    
                    <div class="span-full">
                        <textarea rows="3" placeholder="Please mention specific food allergy warnings, dietary codes (Vegan, Jain, Gluten-Free), or occasion highlights here..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-crimson span-full">Confirm Dinner Booking</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Culinary Premium Footer Layout -->
    <footer>
        <div class="footer-block">
            <h3>The Saffron Room</h3>
            <p>Elevating physical sensory indulgence into an absolute fine art form. Every dish layout mapped precisely to standard world-class flavor parameters.</p>
            <div class="social-row">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-tripadvisor"></i></a>
            </div>
        </div>

        <div class="footer-block">
            <h3>Navigation & Rules</h3>
            <ul>
                <li><a href="#menu">A La Carte Dinner Menu</a></li>
                <li><a href="#reserve">Private Corporate Lounge Hire</a></li>
                <li><a href="#">Dress Code Protocols</a></li>
            </ul>
        </div>

        <div class="footer-block">
            <h3>Enquiry Desk</h3>
            <p><i class="fas fa-map-marker-alt" style="color: var(--luxury-gold); margin-right: 8px;"></i> 77 Culinary Lane, Michelin Boulevard, NY</p>
            <p style="margin-top: 1.5rem;"><i class="fas fa-envelope" style="color: var(--luxury-gold); margin-right: 8px;"></i> concierge@saffron-room.luxury</p>
        </div>
    </footer>

</body>
</html>
`;

}

else if (prompt.toLowerCase().includes("college")) {

  demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apex University | Shaping Futures</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Work+Sans:wght@300;400;500;600;700&display=swap');

        :root {
            --primary-blue: #0f2d59;   /* Classic University Navy */
            --accent-gold: #d4af37;    /* Premium Gold Accent */
            --bg-light: #f8fafc;
            --text-dark: #1e293b;
            --text-muted: #64748b;
            --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Work Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            transition: all 0.3s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
        }

        /* Reusable Components */
        .section-padding {
            padding: 8rem 8% 4rem;
        }

        .heading-container {
            text-align: center;
            margin-bottom: 5rem;
        }

        .heading-container h2 {
            font-family: 'Merriweather', serif;
            font-size: 3.6rem;
            color: var(--primary-blue);
            margin-bottom: 1rem;
        }

        .heading-container p {
            font-size: 1.6rem;
            color: var(--text-muted);
        }

        .btn {
            display: inline-block;
            padding: 1.2rem 3rem;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 4px;
            cursor: pointer;
        }

        .btn-gold {
            background-color: var(--accent-gold);
            color: var(--primary-blue);
        }

        .btn-gold:hover {
            background-color: #bfa030;
            transform: translateY(-2px);
        }

        .btn-outline {
            background-color: transparent;
            color: white;
            border: 2px solid white;
        }

        .btn-outline:hover {
            background-color: white;
            color: var(--primary-blue);
        }

        /* Top Bar & Header Nav */
        .top-bar {
            background-color: var(--primary-blue);
            color: white;
            display: flex;
            justify-content: space-between;
            padding: 1rem 8%;
            font-size: 1.3rem;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .top-bar a { color: white; margin-left: 2rem; }
        .top-bar .info span { margin-right: 2rem; }

        header {
            position: sticky;
            top: 0;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            box-shadow: 0 2px 15px rgba(0,0,0,0.05);
        }

        .logo h1 {
            font-family: 'Merriweather', serif;
            font-size: 2.6rem;
            color: var(--primary-blue);
            font-weight: 700;
        }

        .logo h1 span { color: var(--accent-gold); }

        .navbar { display: flex; align-items: center; }
        .navbar a {
            color: var(--primary-blue);
            font-size: 1.6rem;
            font-weight: 500;
            margin-left: 3.5rem;
        }
        .navbar a:hover { color: var(--accent-gold); }

        #menu-btn { display: none; font-size: 2.2rem; color: var(--primary-blue); cursor: pointer; }

        /* Hero Banner */
        .hero {
            min-height: 75vh;
            background: linear-gradient(rgba(15, 45, 89, 0.75), rgba(15, 45, 89, 0.75)), 
                        url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920') no-repeat center center/cover;
            display: flex;
            align-items: center;
            color: white;
            padding: 0 8%;
        }

        .hero-content { max-width: 80rem; }
        .hero-content h3 { font-size: 1.8rem; color: var(--accent-gold); letter-spacing: 2px; margin-bottom: 1.5rem; }
        .hero-content h1 { font-family: 'Merriweather', serif; font-size: 5.5rem; line-height: 1.2; margin-bottom: 2.5rem; }
        .hero-content p { font-size: 1.8rem; line-height: 1.6; margin-bottom: 3.5rem; opacity: 0.9; }
        .hero-btns { display: flex; gap: 2rem; }

        /* Stats Counter Section */
        .stats-bar {
            background-color: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 3rem;
            padding: 4rem 8%;
            text-align: center;
            box-shadow: var(--card-shadow);
            margin-top: -5rem;
            position: relative;
            z-index: 10;
            border-radius: 4px;
            margin-left: 8%; margin-right: 8%;
        }

        .stat-item h2 { font-size: 3.6rem; color: var(--primary-blue); margin-bottom: 0.5rem; }
        .stat-item p { font-size: 1.4rem; color: var(--text-muted); font-weight: 500; text-transform: uppercase; }

        /* About / Welcome Section */
        .about-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
            align-items: center;
        }

        .about-text h3 { font-family: 'Merriweather', serif; font-size: 2.8rem; color: var(--primary-blue); margin-bottom: 2rem; }
        .about-text p { font-size: 1.5rem; color: var(--text-muted); line-height: 1.8; margin-bottom: 2rem; }
        .about-img img { width: 100%; border-radius: 8px; box-shadow: var(--card-shadow); }

        /* Academics / Courses Section */
        .courses-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 3rem;
        }

        .course-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
        }

        .course-card:hover { transform: translateY(-5px); }
        .course-card img { width: 100%; height: 200px; object-fit: cover; }
        .course-content { padding: 3rem; }
        .course-content h3 { font-family: 'Merriweather', serif; font-size: 2rem; color: var(--primary-blue); margin-bottom: 1.5rem; }
        .course-content p { font-size: 1.4rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 2rem; }
        .course-content a { font-size: 1.4rem; color: var(--accent-gold); font-weight: 600; }

        /* Campus Facilities */
        .facility-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 2.5rem;
        }

        .facility-box {
            background-color: white;
            padding: 4rem 3rem;
            text-align: center;
            border-radius: 4px;
            border-bottom: 3px solid transparent;
            box-shadow: var(--card-shadow);
        }

        .facility-box:hover { border-color: var(--accent-gold); }
        .facility-box i { font-size: 4rem; color: var(--primary-blue); margin-bottom: 2rem; }
        .facility-box h3 { font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem; }

        /* Footer Section */
        footer {
            background-color: #0b1e3a;
            color: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 4rem;
            padding: 6rem 8% 4rem;
            margin-top: 6rem;
        }

        .footer-box h3 { font-family: 'Merriweather', serif; font-size: 1.8rem; color: var(--accent-gold); margin-bottom: 2.5rem; }
        .footer-box p { font-size: 1.4rem; color: #a4b3cb; line-height: 1.8; margin-bottom: 1.5rem; }
        .footer-box ul li { margin-bottom: 1.2rem; }
        .footer-box ul li a { font-size: 1.4rem; color: #a4b3cb; }
        .footer-box ul li a:hover { color: white; padding-left: 5px; }

        .social-links a {
            display: inline-block;
            width: 3.5rem; height: 3.5rem;
            line-height: 3.5rem;
            background-color: #16325c;
            color: white;
            text-align: center;
            border-radius: 4px;
            margin-right: 1rem;
            font-size: 1.4rem;
        }
        .social-links a:hover { background-color: var(--accent-gold); color: var(--primary-blue); }

        /* Mobile View Menu System */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            .top-bar { display: none; }
            header { padding: 2rem 4%; }
            .section-padding { padding: 6rem 4%; }
            .stats-bar { margin-left: 4%; margin-right: 4%; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                flex-direction: column;
                padding: 2rem 0;
                box-shadow: 0 10px 15px rgba(0,0,0,0.05);
                border-top: 1px solid #e2e8f0;
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 0; font-size: 1.8rem; }
            .hero-content h1 { font-size: 4rem; }
            .about-container { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <div class="top-bar">
        <div class="info">
            <span><i class="fas fa-phone"></i> +1 (800) 123-4567</span>
            <span><i class="fas fa-envelope"></i> admissions@apex.edu</span>
        </div>
        <div class="links">
            <a href="#">Alumni</a>
            <a href="#">Student Portal</a>
            <a href="#">Careers</a>
        </div>
    </div>

    <header>
        <div class="logo">
            <h1>APEX<span>.</span></h1>
        </div>
        
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#academics">Academics</a>
            <a href="#campus">Campus Life</a>
            <a href="#contact">Contact</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h3>WELCOME TO APEX UNIVERSITY</h3>
            <h1>Inspiration, Innovation, and Excellence</h1>
            <p>Empowering global leaders of tomorrow with tech-driven academic courses, world-class infrastructure facilities, and distinguished faculty groups.</p>
            <div class="hero-btns">
                <a href="#academics" class="btn btn-gold">Explore Programs</a>
                <a href="#contact" class="btn btn-outline">Apply Now 2026</a>
            </div>
        </div>
    </section>

    <div class="stats-bar">
        <div class="stat-item">
            <h2>15,000+</h2>
            <p>Active Students</p>
        </div>
        <div class="stat-item">
            <h2>120+</h2>
            <p>Academic Courses</p>
        </div>
        <div class="stat-item">
            <h2>450+</h2>
            <p>Global Corporate Partners</p>
        </div>
        <div class="stat-item">
            <h2>#15</h2>
            <p>National Ranking</p>
        </div>
    </div>

    <section class="section-padding" id="about">
        <div class="about-container">
            <div class="about-text">
                <h3>Our Visionary Journey to Educational Excellence</h3>
                <p>Founded with a solid dream of holistic growth, Apex University represents a premier center of advanced higher learning modules. We blend conventional ethos with technical integrations perfectly.</p>
                <p>We invite bright tech minds, researchers, and creators to experience an ecosystem where academic conceptualization converts smoothly into actionable corporate innovations.</p>
                <a href="#" class="btn btn-gold" style="margin-top: 1rem;">Read Chancellor's Message</a>
            </div>
            <div class="about-img">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600" alt="University Campus Life">
            </div>
        </div>
    </section>

    <section class="section-padding" id="academics" style="background-color: #f1f5f9;">
        <div class="heading-container">
            <h2>Our Academic Departments</h2>
            <p>Find your tailored career path from deep curated professional learning streams.</p>
        </div>

        <div class="courses-grid">
            <div class="course-card">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400" alt="Engineering">
                <div class="course-content">
                    <h3>School of Technology</h3>
                    <p>Advance your skillset inside cutting-edge fields like Artificial Intelligence, Cyber Security, Cloud, and Software Engineering tracks.</p>
                    <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="course-card">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400" alt="Management">
                <div class="course-content">
                    <h3>Business & Management</h3>
                    <p>Develop leadership management intelligence, business analytics models, and corporate strategy expertise using experiential corporate setups.</p>
                    <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
            <div class="course-card">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=400" alt="Sciences">
                <div class="course-content">
                    <h3>Research & Sciences</h3>
                    <p>Unlock molecular discoveries, bio-informatics patterns, and quantum research models overseen by premier laboratory infrastructure setups.</p>
                    <a href="#">Learn More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="campus">
        <div class="heading-container">
            <h2>Campus Facilities & Life</h2>
            <p>An exceptional environment engineered to support growth outside conventional classroom boundaries.</p>
        </div>

        <div class="facility-grid">
            <div class="facility-box">
                <i class="fas fa-book-reader"></i>
                <h3>Digital Library</h3>
                <p>24/7 online resource accessibility featuring millions of premium journal copies and research volumes.</p>
            </div>
            <div class="facility-box">
                <i class="fas fa-flask"></i>
                <h3>Advanced Labs</h3>
                <p>Fully updated corporate sponsored testing configurations suited for practical applications.</p>
            </div>
            <div class="facility-box">
                <i class="fas fa-running"></i>
                <h3>Sports Complex</h3>
                <p>Olympic-grade sports fields, indoor dynamic basketball configurations, and modern health complexes.</p>
            </div>
            <div class="facility-box">
                <i class="fas fa-hotel"></i>
                <h3>Modern Hostels</h3>
                <p>Comfortable secure residential configurations providing homelike standard spaces for dynamic students.</p>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="footer-box">
            <h3 style="color: white; font-size: 2.2rem;">APEX UNIV.</h3>
            <p>Shaping visionary global student sets via standardized ethical academic paths, elite corporate tracking networks, and modern discovery setups.</p>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
        </div>

        <div class="footer-box">
            <h3>Quick Portals</h3>
            <ul>
                <li><a href="#">Admission Guidelines</a></li>
                <li><a href="#">Examination Cell</a></li>
                <li><a href="#">Research Publications</a></li>
                <li><a href="#">Scholarships 2026</a></li>
            </ul>
        </div>

        <div class="footer-box">
            <h3>Contact Address</h3>
            <p><i class="fas fa-map-marker-alt" style="color: var(--accent-gold); margin-right: 10px;"></i> 45 University Road, Education Hub, New York</p>
            <p><i class="fas fa-phone" style="color: var(--accent-gold); margin-right: 10px;"></i> +1 (555) 321-7890</p>
            <p><i class="fas fa-envelope" style="color: var(--accent-gold); margin-right: 10px;"></i> support@apexuniversity.edu</p>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("blog")) {

  demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The DevLog | Insights, Code & Tech Trends</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

        :root {
            --primary-dark: #0f172a;   /* Slate 900 */
            --accent-purple: #6366f1;  /* Indigo 500 */
            --accent-teal: #14b8a6;    /* Teal 500 */
            --bg-light: #f8fafc;       /* Slate 50 */
            --text-main: #334155;      /* Slate 700 */
            --text-heading: #1e293b;   /* Slate 800 */
            --border-color: #e2e8f0;   /* Slate 200 */
            --card-shadow: 0 4px 20px rgba(15, 23, 42, 0.03);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
            list-style: none;
            transition: all 0.25s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-main);
            font-family: 'Inter', sans-serif;
            line-height: 1.7;
        }

        /* Common Layout Structure */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 4%;
        }

        h1, h2, h3, h4 {
            color: var(--text-heading);
            font-weight: 700;
        }

        /* Header Navigation */
        header {
            background-color: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid var(--border-color);
            position: sticky;
            top: 0;
            z-index: 1000;
            padding: 2rem 0;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-family: 'Fira Code', monospace;
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--primary-dark);
        }

        .logo span { color: var(--accent-purple); }

        .nav-links { display: flex; align-items: center; }
        .nav-links a {
            color: var(--text-main);
            font-size: 1.5rem;
            font-weight: 500;
            margin-left: 3rem;
        }
        .nav-links a:hover, .nav-links a.active { color: var(--accent-purple); }
        
        .subscribe-btn {
            background-color: var(--primary-dark);
            color: white !important;
            padding: 0.8rem 2rem;
            border-radius: 6px;
        }
        .subscribe-btn:hover { background-color: var(--accent-purple); }

        #menu-toggle { display: none; }
        .menu-icon { display: none; font-size: 2.2rem; color: var(--primary-dark); cursor: pointer; }

        /* Hero Featured Post Banner */
        .featured-hero {
            padding: 5rem 0;
            margin-bottom: 4rem;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
            gap: 4rem;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            border: 1px solid var(--border-color);
        }

        .hero-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            min-height: 350px;
        }

        .hero-content {
            padding: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .tag {
            display: inline-block;
            padding: 0.4rem 1.2rem;
            background-color: #eeecff;
            color: var(--accent-purple);
            font-size: 1.2rem;
            font-weight: 600;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 1px;
            width: max-content;
            margin-bottom: 1.5rem;
        }

        .tag.teal { background-color: #e6f9f7; color: var(--accent-teal); }

        .hero-content h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.6rem;
            line-height: 1.3;
            margin-bottom: 1.5rem;
        }

        .hero-content p {
            font-size: 1.5rem;
            color: var(--text-main);
            margin-bottom: 2.5rem;
        }

        .meta-info {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            font-size: 1.3rem;
            color: #94a3b8;
        }
        .meta-info img {
            width: 3.5rem; height: 3.5rem;
            border-radius: 50%;
            object-fit: cover;
        }
        .meta-info .author-name { color: var(--text-heading); font-weight: 600; }

        /* Main Feed Layout */
        .main-layout {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 5rem;
            padding-bottom: 8rem;
        }

        /* Post Cards Feed */
        .posts-feed {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 4rem;
            align-content: start;
        }

        .blog-card {
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .blog-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .card-img img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .card-body {
            padding: 2.5rem;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .card-body h2 {
            font-family: 'Playfair Display', serif;
            font-size: 2.2rem;
            line-height: 1.4;
            margin-bottom: 1.2rem;
        }
        .card-body h2 a { color: var(--text-heading); }
        .card-body h2 a:hover { color: var(--accent-purple); }

        .card-body p {
            font-size: 1.4rem;
            color: var(--text-main);
            margin-bottom: 2rem;
            flex-grow: 1;
        }

        /* Sidebar Widgets */
        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 4rem;
        }

        .widget {
            background-color: white;
            border-radius: 8px;
            padding: 3rem;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
        }

        .widget-title {
            font-size: 1.6rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 2rem;
            position: relative;
            padding-bottom: 1rem;
            border-bottom: 2px solid var(--border-color);
        }
        .widget-title::after {
            content: '';
            position: absolute;
            bottom: -2px; left: 0;
            width: 50px; height: 2px;
            background-color: var(--accent-purple);
        }

        .about-widget { text-align: center; }
        .about-widget img {
            width: 100px; height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1.5rem;
            border: 3px solid #eeecff;
        }
        .about-widget h3 { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .about-widget p { font-size: 1.35rem; color: var(--text-main); margin-bottom: 1.5rem; }

        .social-icons a {
            display: inline-block;
            width: 3.2rem; height: 3.2rem;
            line-height: 3.2rem;
            background-color: var(--bg-light);
            color: var(--text-main);
            border-radius: 50%;
            margin: 0 0.4rem;
            font-size: 1.4rem;
        }
        .social-icons a:hover { background-color: var(--accent-purple); color: white; }

        .tags-cloud { display: flex; flex-wrap: wrap; gap: 1rem; }
        .tags-cloud a {
            display: block;
            padding: 0.5rem 1.2rem;
            background-color: var(--bg-light);
            color: var(--text-main);
            font-size: 1.3rem;
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }
        .tags-cloud a:hover { border-color: var(--accent-purple); color: var(--accent-purple); }

        /* Footer */
        footer {
            background-color: var(--primary-dark);
            color: #94a3b8;
            padding: 4rem 0;
            text-align: center;
            font-size: 1.4rem;
            border-top: 1px solid rgba(255,255,255,0.05);
        }
        footer p span { color: white; font-weight: 500; }

        /* Responsive Breakpoints */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            .hero-grid { grid-template-columns: 1fr; }
            .hero-img img { min-height: 250px; max-height: 300px; }
            .main-layout { grid-template-columns: 1fr; gap: 4rem; }
            .sidebar { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        }

        @media (max-width: 768px) {
            .menu-icon { display: block; }
            .nav-links {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                flex-direction: column;
                padding: 2rem 0;
                border-bottom: 1px solid var(--border-color);
                box-shadow: 0 10px 15px rgba(0,0,0,0.03);
                display: none;
            }
            .nav-links a { margin: 1.5rem 0; font-size: 1.7rem; }
            .subscribe-btn { margin-top: 1rem; }
            #menu-toggle:checked ~ .nav-links { display: flex; }
            .sidebar { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <!-- Header Navigation Section -->
    <header>
        <div class="container nav-container">
            <input type="checkbox" id="menu-toggle">
            <div class="logo">&lt;The<span>DevLog</span> /&gt;</div>
            
            <nav class="nav-links">
                <a href="#" class="active">Articles</a>
                <a href="#">Tutorials</a>
                <a href="#">Newsletter</a>
                <a href="#">About</a>
                <a href="#" class="subscribe-btn">Subscribe</a>
            </nav>

            <label for="menu-toggle" class="menu-icon">
                <i class="fas fa-bars"></i>
            </label>
        </div>
    </header>

    <!-- Hero Banner: Featured Article -->
    <section class="container featured-hero">
        <div class="hero-grid">
            <div class="hero-img">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" alt="Cybersecurity Concept">
            </div>
            <div class="hero-content">
                <span class="tag">Security</span>
                <h1>The Future of Web Security Architecture in 2026</h1>
                <p>As decentralized infrastructure modules and AI-driven automated security threats expand, conventional protocols are breaking down. Here is a definitive setup map for tokenized zero-trust ecosystems.</p>
                <div class="meta-info">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150" alt="Author Profile">
                    <div>
                        <p class="author-name">Ananya Sharma</p>
                        <p>June 24, 2026 • 8 min read</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Grid Content: Post Feed & Sidebar -->
    <main class="container main-layout">
        
        <!-- Grid Items Left: Main Cards Feed -->
        <section class="posts-feed">
            
            <!-- Card 1 -->
            <article class="blog-card">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500" alt="Frontend Code Setup">
                </div>
                <div class="card-body">
                    <span class="tag teal">Engineering</span>
                    <h2><a href="#">Mastering Micro-Frontends Architecture</a></h2>
                    <p>Break up monolithic frontend dependencies into small operational engineering segments that coordinate efficiently across runtime domains.</p>
                    <div class="meta-info">
                        <div>
                            <p class="author-name">Rohit Verma</p>
                            <p>June 20, 2026 • 5 min read</p>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Card 2 -->
            <article class="blog-card">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=500" alt="Data Systems Network">
                </div>
                <div class="card-body">
                    <span class="tag">Database</span>
                    <h2><a href="#">SQL vs. NoSQL Performance Scaling Tests</a></h2>
                    <p>A comprehensive data breakdown comparing indexed read queries across modern relational setups and high-throughput dynamic document storage layers.</p>
                    <div class="meta-info">
                        <div>
                            <p class="author-name">Amit Patel</p>
                            <p>June 18, 2026 • 6 min read</p>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Card 3 -->
            <article class="blog-card">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=500" alt="Git Version Control UI">
                </div>
                <div class="card-body">
                    <span class="tag teal">DevOps</span>
                    <h2><a href="#">Clean Git Strategies For High Performance Teams</a></h2>
                    <p>Avoid messy merge conflicts and tangled histories. Learn the structural patterns for standard cherry-picks and rebase logic.</p>
                    <div class="meta-info">
                        <div>
                            <p class="author-name">Karan Joshi</p>
                            <p>June 15, 2026 • 4 min read</p>
                        </div>
                    </div>
                </div>
            </article>

        </section>

        <!-- Grid Items Right: Sidebar Widgets -->
        <aside class="sidebar">
            
            <!-- About Author Block -->
            <div class="widget about-widget">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150" alt="Editor Profile Picture">
                <h3>Hi, I'm Rahul Kabir</h3>
                <p>Full-Stack developer and system architect. I write actionable deep-dives on backend engine setups, API structural design, and clean database engineering patterns.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-github"></i></a>
                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>

            <!-- Tags Filter Block -->
            <div class="widget">
                <h4 class="widget-title">Popular Categories</h4>
                <div class="tags-cloud">
                    <a href="#">JavaScript</a>
                    <a href="#">Python</a>
                    <a href="#">DevOps</a>
                    <a href="#">AWS</a>
                    <a href="#">React</a>
                    <a href="#">System Design</a>
                    <a href="#">MySQL</a>
                </div>
            </div>

        </aside>
    </main>

    <!-- Footer Copyright Panel -->
    <footer>
        <div class="container">
            <p>&copy; 2026 <span>TheDevLog</span>. Engineered with clean semantic markup layouts.</p>
        </div>
    </footer>

</body>
</html>
`;

}else if (prompt.toLowerCase().includes("ecommerce")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexShop | Modern E-Commerce</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
            --primary-color: #4f46e5; /* Modern Indigo */
            --accent-color: #f43f5e;  /* Rose/Pink for sale badges */
            --bg-color: #fafafa;
            --card-bg: #ffffff;
            --text-dark: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            transition: all 0.3s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-dark);
        }

        /* Utility Components */
        .btn {
            display: inline-block;
            padding: 1.2rem 3rem;
            background-color: var(--primary-color);
            color: white;
            font-size: 1.4rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            border: none;
        }

        .btn:hover {
            opacity: 0.9;
            transform: translateY(-2px);
        }

        .section-padding {
            padding: 8rem 8%;
        }

        .heading {
            text-align: center;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 4rem;
        }

        .heading span {
            color: var(--primary-color);
        }

        /* Header & Navigation */
        header {
            position: fixed;
            top: 0; left: 0; right: 0;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            border-bottom: 1px solid var(--border-color);
        }

        .logo {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--text-dark);
        }

        .logo span {
            color: var(--primary-color);
        }

        .navbar {
            display: flex;
        }

        .navbar a {
            font-size: 1.6rem;
            font-weight: 500;
            color: var(--text-dark);
            margin-left: 3rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--primary-color);
        }

        .icons {
            display: flex;
            align-items: center;
        }

        .icons i {
            font-size: 2rem;
            color: var(--text-dark);
            margin-left: 2.5rem;
            cursor: pointer;
            position: relative;
        }

        .icons i:hover {
            color: var(--primary-color);
        }

        .icons .badge {
            position: absolute;
            top: -8px; right: -10px;
            background-color: var(--accent-color);
            color: white;
            font-size: 1rem;
            padding: 0.2rem 0.6rem;
            border-radius: 50%;
        }

        #menu-btn {
            display: none;
        }

        /* Hero Section */
        .hero {
            min-height: 90vh;
            background: linear-gradient(135deg, #f5f7ff 0%, #e4ecff 100%);
            display: flex;
            align-items: center;
            padding: 12rem 8% 6rem;
        }

        .hero-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-content h3 {
            font-size: 1.8rem;
            color: var(--primary-color);
            font-weight: 700;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .hero-content h1 {
            font-size: 5.5rem;
            line-height: 1.2;
            font-weight: 800;
            margin-bottom: 2rem;
        }

        .hero-content p {
            font-size: 1.6rem;
            color: var(--text-muted);
            line-height: 1.6;
            margin-bottom: 3rem;
        }

        .hero-image {
            text-align: center;
        }

        .hero-image img {
            width: 85%;
            animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
        }

        /* Categories Section */
        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 2.5rem;
        }

        .category-card {
            background-color: var(--card-bg);
            border-radius: 12px;
            padding: 3rem;
            text-align: center;
            border: 1px solid var(--border-color);
            cursor: pointer;
        }

        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.05);
            border-color: var(--primary-color);
        }

        .category-card i {
            font-size: 4rem;
            color: var(--primary-color);
            margin-bottom: 1.5rem;
        }

        .category-card h3 {
            font-size: 1.8rem;
            font-weight: 600;
        }

        /* Products Section */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
            gap: 3rem;
        }

        .product-card {
            background-color: var(--card-bg);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            position: relative;
        }

        .product-card:hover {
            box-shadow: 0 15px 30px rgba(0,0,0,0.08);
            transform: translateY(-5px);
        }

        .product-tag {
            position: absolute;
            top: 1.5rem; left: 1.5rem;
            background-color: var(--accent-color);
            color: white;
            font-size: 1.2rem;
            font-weight: 600;
            padding: 0.4rem 1.2rem;
            border-radius: 20px;
            z-index: 1;
        }

        .product-img-box {
            background-color: #f8fafc;
            padding: 4rem 2rem;
            text-align: center;
            position: relative;
        }

        .product-img-box img {
            height: 200px;
            object-fit: contain;
        }

        .product-info {
            padding: 2.5rem;
        }

        .product-info .category {
            font-size: 1.2rem;
            color: var(--text-muted);
            text-transform: uppercase;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .product-info h3 {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .stars {
            color: #ffb800;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
        }

        .price-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .price {
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-dark);
        }

        .price span {
            font-size: 1.4rem;
            color: var(--text-muted);
            text-decoration: line-through;
            margin-left: 0.5rem;
            font-weight: 400;
        }

        .add-to-cart {
            width: 4rem; height: 4rem;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            cursor: pointer;
        }

        .add-to-cart:hover {
            background-color: var(--text-dark);
        }

        /* Footer Section */
        footer {
            background-color: var(--text-dark);
            color: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
            gap: 4rem;
            padding: 6rem 8%;
        }

        .footer-box h3 {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2rem;
            position: relative;
        }

        .footer-box p {
            font-size: 1.4rem;
            color: #94a3b8;
            line-height: 1.8;
            margin-bottom: 2rem;
        }

        .footer-box ul li {
            margin-bottom: 1.2rem;
        }

        .footer-box ul li a {
            font-size: 1.4rem;
            color: #94a3b8;
        }

        .footer-box ul li a:hover {
            color: white;
            padding-left: 5px;
        }

        .social-icons a {
            display: inline-block;
            width: 4rem; height: 4rem;
            line-height: 4rem;
            background-color: #293548;
            color: white;
            text-align: center;
            border-radius: 50%;
            font-size: 1.6rem;
            margin-right: 1rem;
        }

        .social-icons a:hover {
            background-color: var(--primary-color);
        }

        /* Responsive Media Queries */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            header { padding: 2rem 4%; }
            .section-padding { padding: 6rem 4%; }
            footer { padding: 6rem 4%; }
        }

        @media (max-width: 768px) {
            #menu-btn {
                display: block;
                font-size: 2.2rem;
                margin-left: 2rem;
            }

            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                border-top: 1px solid var(--border-color);
                flex-direction: column;
                padding: 2rem 0;
                display: none; /* Toggle behavior requires simple logic, handled via CSS check or hidden visually */
            }

            /* Responsive standard toggle for css only menu */
            #menu-toggle:checked ~ .navbar {
                display: flex;
            }

            .navbar a {
                margin: 1.5rem 4%;
                font-size: 1.8rem;
            }

            .hero-container {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-content h1 {
                font-size: 4rem;
            }

            .hero-image {
                order: -1;
            }
            
            .hero-image img {
                width: 60%;
            }
        }

        @media (max-width: 450px) {
            html { font-size: 50%; }
            .hero-image img { width: 80%; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <header>
        <a href="#" class="logo">Nex<span>Shop</span></a>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#footer">About</a>
        </nav>

        <div class="icons">
            <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
            <i class="fas fa-search"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-shopping-bag"><span class="badge">3</span></i>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <h3>NEW ARRIVALS 2026</h3>
                <h1>Elevate Your Everyday Style</h1>
                <p>Discover premium gadgets, trending fashion, and sleek accessories crafted for modern life. Experience shopping simplified with fast, free delivery.</p>
                <a href="#products" class="btn">Shop Collection <i class="fas fa-arrow-right" style="margin-left: 8px;"></i></a>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600" alt="Featured Product">
            </div>
        </div>
    </section>

    <section class="section-padding" id="categories">
        <h2 class="heading">Shop by <span>Categories</span></h2>
        <div class="categories-grid">
            <div class="category-card">
                <i class="fas fa-laptop"></i>
                <h3>Electronics</h3>
            </div>
            <div class="category-card">
                <i class="fas fa-shirt"></i>
                <h3>Fashion</h3>
            </div>
            <div class="category-card">
                <i class="fas fa-clock"></i>
                <h3>Accessories</h3>
            </div>
            <div class="category-card">
                <i class="fas fa-couch"></i>
                <h3>Home Decor</h3>
            </div>
        </div>
    </section>

    <section class="section-padding" id="products">
        <h2 class="heading">Trending <span>Products</span></h2>
        
        <div class="products-grid">
            <div class="product-card">
                <div class="product-tag">Sale</div>
                <div class="product-img-box">
                    <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" alt="Product">
                </div>
                <div class="product-info">
                    <div class="category">Audio</div>
                    <h3>Premium Wireless Headphones</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                    </div>
                    <div class="price-box">
                        <div class="price">$199.00 <span>$249.00</span></div>
                        <div class="add-to-cart"><i class="fas fa-shopping-cart"></i></div>
                    </div>
                </div>
            </div>

            <div class="product-card">
                <div class="product-img-box">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400" alt="Product">
                </div>
                <div class="product-info">
                    <div class="category">Accessories</div>
                    <h3>Minimalist Smart Watch V2</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="price-box">
                        <div class="price">$299.00</div>
                        <div class="add-to-cart"><i class="fas fa-shopping-cart"></i></div>
                    </div>
                </div>
            </div>

            <div class="product-card">
                <div class="product-tag">New</div>
                <div class="product-img-box">
                    <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400" alt="Product">
                </div>
                <div class="product-info">
                    <div class="category">Audio</div>
                    <h3>Pro Noise Cancelling Earbuds</h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <div class="price-box">
                        <div class="price">$129.00</div>
                        <div class="add-to-cart"><i class="fas fa-shopping-cart"></i></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer id="footer">
        <div class="footer-box">
            <a href="#" class="logo" style="color: white; margin-bottom: 1.5rem; display: inline-block;">Nex<span>Shop</span></a>
            <p>Your ultimate destination for curated premium lifestyle and technological essentials. Built for modern convenience.</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <div class="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#">Track Orders</a></li>
            </ul>
        </div>

        <div class="footer-box">
            <h3>Contact Support</h3>
            <p><i class="fas fa-envelope" style="color: var(--primary-color); margin-right: 10px;"></i> hello@nexshop.com</p>
            <p><i class="fas fa-phone" style="color: var(--primary-color); margin-right: 10px;"></i> +1 (555) 019-2834</p>
            <p><i class="fas fa-map-marker-alt" style="color: var(--primary-color); margin-right: 10px;"></i> 5th Avenue, New York, NY</p>
        </div>
    </footer>

</body>
</html>
`;

}

else if (prompt.toLowerCase().includes("hospital")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CarePulse | Modern Healthcare Hospital</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
            --primary-medical: #0ea5e9;  /* Trustworthy Clinical Blue */
            --dark-navy: #0f172a;        /* Deep Premium Navy */
            --emergency-red: #ef4444;    /* Alert Red */
            --bg-soft: #f8fafc;          /* Clinical Clean Light Gray */
            --text-dark: #334155;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --card-shadow: 0 10px 25px rgba(15, 23, 42, 0.04);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.3s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
        }

        body {
            background-color: var(--bg-soft);
            color: var(--text-dark);
            line-height: 1.6;
        }

        /* Utility Components */
        .section-padding {
            padding: 10rem 8% 4rem;
        }

        .heading-box {
            text-align: center;
            margin-bottom: 6rem;
        }

        .heading-box h2 {
            font-size: 3.4rem;
            color: var(--dark-navy);
            font-weight: 800;
            margin-bottom: 1.5rem;
        }

        .heading-box p {
            font-size: 1.6rem;
            color: var(--text-muted);
            max-width: 60rem;
            margin: 0 auto;
        }

        .btn {
            display: inline-block;
            padding: 1.2rem 3rem;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            border: none;
        }

        .btn-blue {
            background-color: var(--primary-medical);
            color: white;
        }

        .btn-blue:hover {
            background-color: #0284c7;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(14, 165, 233, 0.3);
        }

        /* Emergency Alert Top Bar */
        .emergency-top-bar {
            background-color: var(--dark-navy);
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 8%;
            font-size: 1.3rem;
            font-weight: 500;
            border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .emergency-link {
            color: var(--emergency-red);
            font-weight: 700;
            animation: pulse 2s infinite;
        }

        @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.5; }
            100% { opacity: 1; }
        }

        /* Navigation Header */
        header {
            position: sticky;
            top: 0;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0,0,0,0.02);
            border-bottom: 1px solid var(--border-color);
        }

        .logo {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--dark-navy);
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .logo i {
            color: var(--primary-medical);
        }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: var(--dark-navy);
            font-size: 1.5rem;
            font-weight: 600;
            margin-left: 3.5rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--primary-medical);
        }

        #menu-btn {
            display: none;
            font-size: 2.2rem;
            color: var(--dark-navy);
            cursor: pointer;
        }

        /* Hero Banner Section */
        .hero {
            min-height: 80vh;
            background: linear-gradient(135deg, #e0f2fe 0%, #f0fdfa 100%);
            display: flex;
            align-items: center;
            padding: 6rem 8%;
        }

        .hero-container {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 6rem;
            align-items: center;
            width: 100%;
        }

        .hero-content h3 {
            font-size: 1.6rem;
            color: var(--primary-medical);
            font-weight: 700;
            letter-spacing: 2px;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
        }

        .hero-content h1 {
            font-size: 5.2rem;
            color: var(--dark-navy);
            line-height: 1.15;
            font-weight: 800;
            margin-bottom: 2.5rem;
        }

        .hero-content p {
            font-size: 1.7rem;
            color: var(--text-muted);
            line-height: 1.7;
            margin-bottom: 3.5rem;
        }

        .hero-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);
        }

        /* Stats Feature Bar */
        .features-bar {
            background-color: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
            gap: 3rem;
            padding: 4rem;
            border-radius: 16px;
            box-shadow: var(--card-shadow);
            margin-top: -6rem;
            position: relative;
            z-index: 10;
            margin-left: 8%; margin-right: 8%;
            border: 1px solid var(--border-color);
        }

        .feat-item {
            display: flex;
            align-items: center;
            gap: 2rem;
        }

        .feat-item i {
            font-size: 3rem;
            color: var(--primary-medical);
            background-color: #e0f2fe;
            padding: 1.5rem;
            border-radius: 12px;
        }

        .feat-item h4 { font-size: 1.8rem; color: var(--dark-navy); margin-bottom: 0.3rem; }
        .feat-item p { font-size: 1.4rem; color: var(--text-muted); }

        /* Departments Section */
        .dept-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
            gap: 3rem;
        }

        .dept-card {
            background-color: white;
            padding: 4rem 3rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
        }

        .dept-card:hover {
            border-color: var(--primary-medical);
            transform: translateY(-5px);
        }

        .dept-card i {
            font-size: 3.5rem;
            color: var(--primary-medical);
            margin-bottom: 2.5rem;
            display: inline-block;
        }

        .dept-card h3 {
            font-size: 2.1rem;
            color: var(--dark-navy);
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .dept-card p {
            font-size: 1.45rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        /* Doctors Specialists Team */
        .doctors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
            gap: 3rem;
        }

        .doc-card {
            background-color: white;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
            text-align: center;
        }

        .doc-img {
            background-color: #f1f5f9;
            padding-top: 2rem;
            height: 280px;
            overflow: hidden;
        }

        .doc-img img {
            height: 100%;
            width: auto;
            object-fit: cover;
        }

        .doc-info {
            padding: 2.5rem;
        }

        .doc-info h3 {
            font-size: 1.9rem;
            color: var(--dark-navy);
            margin-bottom: 0.5rem;
        }

        .doc-info p {
            font-size: 1.4rem;
            color: var(--primary-medical);
            font-weight: 600;
            margin-bottom: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .doc-social a {
            color: var(--text-muted);
            margin: 0 0.8rem;
            font-size: 1.5rem;
        }

        .doc-social a:hover { color: var(--primary-medical); }

        /* Appointment & Form Layout */
        .appointment-box {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 6rem;
            background-color: white;
            border-radius: 20px;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
            overflow: hidden;
        }

        .app-details {
            background-color: var(--dark-navy);
            color: white;
            padding: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .app-details h3 { font-size: 3rem; margin-bottom: 2rem; font-weight: 800; }
        .app-details p { font-size: 1.5rem; color: #94a3b8; line-height: 1.7; margin-bottom: 4rem; }

        .working-hours .time-row {
            display: flex;
            justify-content: space-between;
            font-size: 1.45rem;
            padding: 1.2rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .app-form-wrapper {
            padding: 6rem;
        }

        .app-form-wrapper h3 { font-size: 2.6rem; color: var(--dark-navy); margin-bottom: 3rem; }

        .main-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .form-group-full { grid-column: span 2; }

        .main-form input, .main-form select, .main-form textarea {
            width: 100%;
            background-color: var(--bg-soft);
            border: 1px solid var(--border-color);
            padding: 1.5rem;
            border-radius: 8px;
            font-size: 1.4rem;
            color: var(--dark-navy);
        }

        .main-form input:focus, .main-form select:focus, .main-form textarea:focus {
            outline: none;
            border-color: var(--primary-medical);
            background-color: white;
        }

        /* Footer Section */
        footer {
            background-color: #0b0f19;
            color: #94a3b8;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 4rem;
            padding: 8rem 8% 4rem;
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-box h3 {
            color: white;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
        }

        .footer-box p { font-size: 1.45rem; line-height: 1.7; margin-bottom: 2rem; }
        .footer-box ul li { margin-bottom: 1.2rem; }
        .footer-box ul li a { font-size: 1.45rem; color: #94a3b8; }
        .footer-box ul li a:hover { color: white; padding-left: 6px; }

        .footer-contact-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            font-size: 1.45rem;
            margin-bottom: 1.5rem;
        }

        .footer-contact-item i { color: var(--primary-medical); font-size: 1.6rem; }

        /* Responsive Layout Breaking Logic */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            .emergency-top-bar { display: none; }
            .hero-container, .appointment-box { grid-template-columns: 1fr; }
            .hero-content { text-align: center; }
            .hero-image { display: none; }
            .features-bar { margin-left: 4%; margin-right: 4%; }
            .section-padding { padding: 8rem 4% 4rem; }
            footer { padding: 8rem 4% 4rem; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                flex-direction: column;
                padding: 2.5rem 0;
                border-top: 1px solid var(--border-color);
                box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 0; font-size: 1.8rem; }
            .main-form { grid-template-columns: 1fr; }
            .form-group-full { grid-column: span 1; }
            .app-details, .app-form-wrapper { padding: 4rem 3rem; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <div class="emergency-top-bar">
        <div>
            <span><i class="fas fa-clock" style="margin-right: 8px;"></i> Working Hours: 24/7 Available</span>
        </div>
        <div>
            <span>Emergency Hotline: <a href="tel:911" class="emergency-link"><i class="fas fa-phone-alt"></i> Call 102 / 911</a></span>
        </div>
    </div>

    <header>
        <div class="logo">
            <i class="fas fa-heartbeat"></i> Care<span>Pulse</span>
        </div>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#departments">Departments</a>
            <a href="#doctors">Specialists</a>
            <a href="#appointment">Book Appointment</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <section class="hero" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <h3>Your Health, Our Priority</h3>
                <h1>Exceptional Medical Care You Can Trust</h1>
                <p>CarePulse Hospital offers a complete range of modern diagnostic evaluation protocols, premium clinical consulting, and multi-specialty surgical services tailored precisely for your family's safety.</p>
                <a href="#appointment" class="btn btn-blue">Book Free Consultation</a>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800" alt="Hospital Clinic Infrastructure">
            </div>
        </div>
    </section>

    <div class="features-bar">
        <div class="feat-item">
            <i class="fas fa-user-shield"></i>
            <div>
                <h4>Certified Experts</h4>
                <p>Top-tier global medical practitioners</p>
            </div>
        </div>
        <div class="feat-item">
            <i class="fas fa-notes-medical"></i>
            <div>
                <h4>Modern Pharmacy</h4>
                <p>24 Hours quick-dispense lab access</p>
            </div>
        </div>
        <div class="feat-item">
            <i class="fas fa-ambulance"></i>
            <div>
                <h4>Emergency ICU</h4>
                <p>Rapid response ambulance systems</p>
            </div>
        </div>
    </div>

    <section class="section-padding" id="departments">
        <div class="heading-box">
            <h2>Our Specialized Departments</h2>
            <p>Explore world-class diagnostic treatment plans overseen by dedicated therapeutic specialty groups.</p>
        </div>

        <div class="dept-grid">
            <div class="dept-card">
                <i class="fas fa-heart"></i>
                <h3>Cardiology</h3>
                <p>Advanced cardiac evaluation, angiography screenings, heart-failure management, and intensive monitoring configurations.</p>
            </div>
            <div class="dept-card">
                <i class="fas fa-brain"></i>
                <h3>Neurology Sciences</h3>
                <p>Treatment mapping for neuro-muscular complications, comprehensive stroke intervention plans, and spinal recovery tracks.</p>
            </div>
            <div class="dept-card">
                <i class="fas fa-baby"></i>
                <h3>Pediatrics & Care</h3>
                <p>Delivering gentle medical consulting, preventative vaccination charts, and holistic wellness monitoring layouts for toddlers.</p>
            </div>
        </div>
    </section>

    <section class="section-padding" id="doctors" style="background-color: white;">
        <div class="heading-box">
            <h2>Meet Our Expert Doctors</h2>
            <p>Our senior clinical specialists bring decades of global operational experience across complex academic treatments.</p>
        </div>

        <div class="doctors-grid">
            <div class="doc-card">
                <div class="doc-img">
                    <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400" alt="Specialist Practitioner">
                </div>
                <div class="doc-info">
                    <h3>Dr. Arjan Dev</h3>
                    <p>Chief Cardiologist</p>
                    <div class="doc-social">
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="doc-card">
                <div class="doc-img">
                    <img src="https://images.unsplash.com/photo-1594824813573-246434e33963?q=80&w=400" alt="Specialist Practitioner">
                </div>
                <div class="doc-info">
                    <h3>Dr. Sarah Jenkins</h3>
                    <p>Senior Neurologist</p>
                    <div class="doc-social">
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="doc-card">
                <div class="doc-img">
                    <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400" alt="Specialist Practitioner">
                </div>
                <div class="doc-info">
                    <h3>Dr. Michael Chang</h3>
                    <p>Pediatrics Specialist</p>
                    <div class="doc-social">
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="appointment">
        <div class="appointment-box">
            <div class="app-details">
                <h3>Need Immediate Clinical Consulting?</h3>
                <p>Fill out our simplified digital portal layout. Our customer management helpdesk will auto-assign your query token code to the preferred specialist team instantly.</p>
                
                <div class="working-hours">
                    <div class="time-row"><span>Monday - Friday</span> <span>8:00 AM - 8:00 PM</span></div>
                    <div class="time-row"><span>Saturday</span> <span>9:00 AM - 5:00 PM</span></div>
                    <div class="time-row"><span>Emergency ICU Unit</span> <span>24 Hours Open</span></div>
                </div>
            </div>

            <div class="app-form-wrapper">
                <h3>Schedule Appointment</h3>
                <form class="main-form" action="#" onsubmit="event.preventDefault(); alert('Appointment requested successfully!');">
                    <input type="text" placeholder="Patient Full Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Contact Mobile Number" required>
                    
                    <select required>
                        <option value="" disabled selected>Choose Department</option>
                        <option value="cardio">Cardiology</option>
                        <option value="neuro">Neurology Sciences</option>
                        <option value="pediatrics">Pediatrics & Care</option>
                    </select>
                    
                    <input type="date" required>
                    <input type="time" required>
                    
                    <div class="form-group-full">
                        <textarea rows="4" placeholder="Briefly explain symptoms or medical history..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-blue form-group-full">Confirm Request Booking</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-box">
            <h3 style="color: white; font-size: 2.2rem;"><i class="fas fa-heartbeat" style="color: var(--primary-medical); margin-right: 8px;"></i>CarePulse</h3>
            <p>Providing premium diagnostic care and human-centric medical therapy solutions. Dedicated to transforming global community healthcare networks daily.</p>
        </div>

        <div class="footer-box">
            <h3>Quick Services</h3>
            <ul>
                <li><a href="#departments">Cardiology Unit</a></li>
                <li><a href="#departments">Neurology Department</a></li>
                <li><a href="#departments">Pediatric Health Consultation</a></li>
                <li><a href="#">Diagnostic Lab Results</a></li>
            </ul>
        </div>

        <div class="footer-box">
            <h3>Contact Desk</h3>
            <div class="footer-contact-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>744 Clinical Avenue, Medical Zone, New York, NY</span>
            </div>
            <div class="footer-contact-item">
                <i class="fas fa-phone-alt"></i>
                <span>+1 (555) 019-8833</span>
            </div>
            <div class="footer-contact-item">
                <i class="fas fa-envelope"></i>
                <span>support@carepulse-hospital.com</span>
            </div>
        </div>
    </footer>

</body>
</html>
`;

}

else if (prompt.toLowerCase().includes("gym")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlexFitness | Premium Gym</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');

        :root {
            --primary-color: #ff4a57; /* Gym Accent Color */
            --bg-color: #111;
            --card-bg: #1a1a1a;
            --text-color: #fff;
            --muted-color: #aaa;
        }

        * {
            font-family: 'Poppins', sans-serif;
            margin: 0; padding: 0;
            box-sizing: border-box;
            outline: none; border: none;
            text-decoration: none;
            transition: all .2s linear;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
            overflow-x: hidden;
            scroll-behavior: smooth;
        }

        body {
            background: var(--bg-color);
            color: var(--text-color);
        }

        section {
            padding: 8rem 7%;
        }

        .heading {
            text-align: center;
            font-size: 4rem;
            margin-bottom: 5rem;
            text-transform: uppercase;
        }

        .heading span {
            color: var(--primary-color);
        }

        .btn {
            display: inline-block;
            padding: 1rem 3rem;
            background: var(--primary-color);
            color: var(--text-color);
            font-size: 1.7rem;
            font-weight: 600;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
        }

        .btn:hover {
            letter-spacing: 1px;
            opacity: 0.9;
        }

        /* Header Navbar Section */
        .header {
            position: fixed;
            top: 0; left: 0; right: 0;
            z-index: 1000;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 2rem 7%;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .header .logo {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--text-color);
        }

        .header .logo span {
            color: var(--primary-color);
        }

        .header .navbar a {
            font-size: 1.7rem;
            margin-left: 2.5rem;
            color: var(--text-color);
        }

        .header .navbar a:hover {
            color: var(--primary-color);
        }

        #menu-bar {
            display: none;
        }

        .header label {
            font-size: 2.5rem;
            color: var(--text-color);
            cursor: pointer;
            display: none;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
                        url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1920') no-repeat;
            background-size: cover;
            background-position: center;
        }

        .hero-content {
            max-width: 60rem;
        }

        .hero-content h3 {
            font-size: 2.5rem;
            color: var(--primary-color);
            letter-spacing: 3px;
        }

        .hero-content h1 {
            font-size: 6rem;
            color: var(--text-color);
            text-transform: uppercase;
            margin: 1.5rem 0;
        }

        .hero-content h1 span {
            color: transparent;
            -webkit-text-stroke: 1px var(--text-color);
        }

        .hero-content p {
            font-size: 1.6rem;
            color: var(--muted-color);
            line-height: 2;
            margin-bottom: 2rem;
        }

        /* Services Section */
        .services .box-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 2.5rem;
        }

        .services .box {
            background: var(--card-bg);
            padding: 4rem 3rem;
            text-align: center;
            border-radius: 5px;
            border: 1px solid transparent;
        }

        .services .box:hover {
            border-color: var(--primary-color);
            transform: translateY(-5px);
        }

        .services .box i {
            font-size: 5rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
        }

        .services .box h3 {
            font-size: 2.2rem;
            margin-bottom: 1.5rem;
        }

        .services .box p {
            font-size: 1.4rem;
            color: var(--muted-color);
            line-height: 1.8;
        }

        /* Pricing Section */
        .plans .box-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 3rem;
            align-items: center;
        }

        .plans .plan-card {
            background: var(--card-bg);
            padding: 4rem 3rem;
            text-align: center;
            border-radius: 5px;
            position: relative;
            overflow: hidden;
        }

        .plans .plan-card.active {
            border: 2px solid var(--primary-color);
        }

        .plans .badge {
            position: absolute;
            top: 2rem; right: -4rem;
            background: var(--primary-color);
            color: var(--text-color);
            font-size: 1.2rem;
            font-weight: bold;
            padding: 0.5rem 4rem;
            transform: rotate(45deg);
        }

        .plans .plan-card h3 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        .plans .price {
            font-size: 5rem;
            font-weight: 800;
            color: var(--primary-color);
            margin-bottom: 2.5rem;
        }

        .plans .price span {
            font-size: 2rem;
            color: var(--muted-color);
        }

        .plans .plan-card ul {
            list-style: none;
            margin-bottom: 3rem;
        }

        .plans .plan-card ul li {
            font-size: 1.6rem;
            padding: 1rem 0;
            color: var(--muted-color);
        }

        .plans .plan-card ul li i {
            margin-right: 1rem;
        }

        .plans .plan-card ul li .fa-check { color: #27ae60; }
        .plans .plan-card ul li .fa-times { color: #c0392b; }

        /* Footer Section */
        .footer {
            background: #0a0a0a;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 3rem;
            border-top: 1px solid rgba(255,255,255,0.05);
        }

        .footer-box h3 {
            font-size: 2.2rem;
            margin-bottom: 2rem;
            color: var(--text-color);
        }

        .footer-box p {
            font-size: 1.5rem;
            color: var(--muted-color);
            line-height: 2;
            margin-bottom: 1.5rem;
        }

        .footer-box p i {
            color: var(--primary-color);
            margin-right: 1rem;
        }

        .footer-box .share a {
            height: 4.5rem; width: 4.5rem;
            line-height: 4.5rem;
            font-size: 1.8rem;
            background: var(--card-bg);
            color: var(--text-color);
            border-radius: 50%;
            margin-right: 1rem;
            text-align: center;
            display: inline-block;
        }

        .footer-box .share a:hover {
            background: var(--primary-color);
        }

        /* Media Queries (Responsiveness) */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            header { padding: 2rem 4%; }
            section { padding: 6rem 4%; }
        }

        @media (max-width: 768px) {
            header label { display: block; }
            
            header .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background: #000;
                border-top: 1px solid rgba(255,255,255,0.1);
                clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            }

            #menu-bar:checked ~ .navbar {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            }

            header .navbar a {
                display: block;
                margin: 2rem;
                font-size: 2rem;
            }

            .hero-content h1 { font-size: 4.5rem; }
        }

        @media (max-width: 450px) {
            html { font-size: 50%; }
        }
    </style>
</head>
<body>

    <header class="header">
        <a href="#" class="logo">FLEX<span>FITNESS</span></a>
        <input type="checkbox" id="menu-bar">
        <label for="menu-bar" class="fas fa-bars"></label>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#plans">Plans</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h3>NO PAIN, NO GAIN</h3>
            <h1>SHAPE YOUR <span>PERFECT BODY</span></h1>
            <p>Commit to be fit. From personalized training to state-of-the-art equipment, we have everything you need to reach your goals.</p>
            <a href="#plans" class="btn">Join Us Now</a>
        </div>
    </section>

    <section class="services" id="services">
        <h2 class="heading">Our <span>Services</span></h2>
        <div class="box-container">
            <div class="box">
                <i class="fas fa-dumbbell"></i>
                <h3>Weight Lifting</h3>
                <p>Free weights, lifting platforms, and expert coaches to safely boost your strength.</p>
            </div>
            <div class="box">
                <i class="fas fa-heartbeat"></i>
                <h3>Cardio Training</h3>
                <p>High-end treadmills, rowers, and ellipticals to skyrocket your endurance.</p>
            </div>
            <div class="box">
                <i class="fas fa-apple-alt"></i>
                <h3>Nutritional Plans</h3>
                <p>Custom diet guides curated by certified nutritionists tailored to your build.</p>
            </div>
        </div>
    </section>

    <section class="plans" id="plans">
        <h2 class="heading">Membership <span>Plans</span></h2>
        <div class="box-container">
            <div class="plan-card">
                <h3>Basic</h3>
                <div class="price">$29<span>/mo</span></div>
                <ul>
                    <li><i class="fas fa-check"></i> Access to Gym Floor</li>
                    <li><i class="fas fa-check"></i> Standard Locker Room</li>
                    <li><i class="fas fa-times"></i> Free Personal Trainer</li>
                    <li><i class="fas fa-times"></i> Sauna Access</li>
                </ul>
                <a href="#" class="btn">Select Plan</a>
            </div>
            <div class="plan-card active">
                <div class="badge">Popular</div>
                <h3>Premium</h3>
                <div class="price">$59<span>/mo</span></div>
                <ul>
                    <li><i class="fas fa-check"></i> 24/7 Gym Access</li>
                    <li><i class="fas fa-check"></i> Free Personal Trainer</li>
                    <li><i class="fas fa-check"></i> Group Fitness Classes</li>
                    <li><i class="fas fa-times"></i> Sauna Access</li>
                </ul>
                <a href="#" class="btn">Select Plan</a>
            </div>
            <div class="plan-card">
                <h3>Elite</h3>
                <div class="price">$99<span>/mo</span></div>
                <ul>
                    <li><i class="fas fa-check"></i> VIP 24/7 Gym Access</li>
                    <li><i class="fas fa-check"></i> Dedicated Personal Coach</li>
                    <li><i class="fas fa-check"></i> All Group Classes & Sauna</li>
                    <li><i class="fas fa-check"></i> Complimentary Nutritionist</li>
                </ul>
                <a href="#" class="btn">Select Plan</a>
            </div>
        </div>
    </section>

    <footer class="footer" id="contact">
        <div class="footer-box">
            <h3>FlexFitness</h3>
            <p>Your journey to a healthier, stronger version of yourself starts right here.</p>
            <div class="share">
                <a href="#" class="fab fa-facebook-f"></a>
                <a href="#" class="fab fa-twitter"></a>
                <a href="#" class="fab fa-instagram"></a>
            </div>
        </div>
        <div class="footer-box">
            <h3>Contact Info</h3>
            <p><i class="fas fa-phone"></i> +123-456-7890</p>
            <p><i class="fas fa-envelope"></i> info@flexfitness.com</p>
            <p><i class="fas fa-map-marker-alt"></i> 123 Muscle Street, NY</p>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("school")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bright Days International School | Learning for Life</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Quicksand:wght@400;500;600;700&display=swap');

        :root {
            --primary-green: #2ecc71;   /* Fresh, growth-oriented green */
            --accent-orange: #ff9f43;   /* Energetic playful orange */
            --sky-blue: #0ea5e9;        /* Trustworthy sky blue */
            --dark-charcoal: #2c3e50;   /* Deep text color */
            --bg-light: #fdfefe;        /* Bright white canvas */
            --card-shadow: 0 8px 24px rgba(44, 62, 80, 0.06);
            --border-radius: 12px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Quicksand', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.3s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
        }

        body {
            background-color: #fafbfc;
            color: var(--dark-charcoal);
            line-height: 1.6;
        }

        h1, h2, h3, h4 {
            font-family: 'Fredoka', sans-serif;
            color: var(--dark-charcoal);
        }

        /* Helper Classes */
        .section-padding {
            padding: 9rem 8% 4rem;
        }

        .center-heading {
            text-align: center;
            margin-bottom: 5rem;
        }

        .center-heading h2 {
            font-size: 3.5rem;
            color: var(--dark-charcoal);
            margin-bottom: 1rem;
        }

        .center-heading p {
            font-size: 1.6rem;
            color: #7f8c8d;
            max-width: 55rem;
            margin: 0 auto;
        }

        .btn {
            display: inline-block;
            padding: 1.3rem 3.2rem;
            font-size: 1.6rem;
            font-weight: 700;
            border-radius: 30px; /* Rounded playful buttons */
            cursor: pointer;
            border: none;
            text-align: center;
        }

        .btn-orange {
            background-color: var(--accent-orange);
            color: white;
            box-shadow: 0 4px 15px rgba(255, 159, 67, 0.3);
        }

        .btn-orange:hover {
            transform: translateY(-2px);
            background-color: #e68a2e;
            box-shadow: 0 6px 20px rgba(255, 159, 67, 0.4);
        }

        /* Top Alert Notice Bar */
        .notice-ticker {
            background-color: #ee5253;
            color: white;
            padding: 1rem 8%;
            font-size: 1.4rem;
            font-weight: 600;
            display: flex;
            gap: 1.5rem;
            align-items: center;
            overflow: hidden;
        }

        .notice-badge {
            background-color: white;
            color: #ee5253;
            padding: 0.2rem 1rem;
            border-radius: 4px;
            font-size: 1.2rem;
            text-transform: uppercase;
            font-weight: 700;
        }

        /* Navigation Menu Header */
        header {
            position: sticky;
            top: 0;
            background-color: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            box-shadow: 0 2px 15px rgba(0,0,0,0.02);
            border-bottom: 3px solid #f1f5f9;
        }

        .logo {
            font-size: 2.6rem;
            font-weight: 700;
            color: var(--sky-blue);
            font-family: 'Fredoka', sans-serif;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .logo i { color: var(--accent-orange); }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: var(--dark-charcoal);
            font-size: 1.6rem;
            font-weight: 600;
            margin-left: 3.5rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--primary-green);
        }

        #menu-btn {
            display: none;
            font-size: 2.4rem;
            color: var(--dark-charcoal);
            cursor: pointer;
        }

        /* Hero Banner Presentation Area */
        .hero {
            min-height: 75vh;
            background: linear-gradient(135deg, #eefaf2 0%, #e0f2fe 100%);
            display: flex;
            align-items: center;
            padding: 6rem 8%;
            border-bottom-left-radius: 60px;
            border-bottom-right-radius: 60px;
        }

        .hero-container {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 6rem;
            align-items: center;
            width: 100%;
        }

        .hero-content h3 {
            font-size: 1.8rem;
            color: var(--sky-blue);
            letter-spacing: 1px;
            margin-bottom: 1.5rem;
        }

        .hero-content h1 {
            font-size: 5rem;
            line-height: 1.2;
            margin-bottom: 2.5rem;
        }

        .hero-content h1 span { color: var(--primary-green); }

        .hero-content p {
            font-size: 1.7rem;
            color: #5f6c7d;
            margin-bottom: 3.5rem;
        }

        .hero-image img {
            width: 100%;
            border-radius: var(--border-radius);
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
            border: 8px solid white;
        }

        /* Highlights Value Cards */
        .highlights-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
            gap: 3rem;
            margin-top: -4rem;
            position: relative;
            z-index: 10;
            padding: 0 8%;
        }

        .highlight-card {
            background-color: white;
            padding: 3.5rem 3rem;
            border-radius: var(--border-radius);
            text-align: center;
            box-shadow: var(--card-shadow);
            border-bottom: 4px solid transparent;
        }

        .highlight-card:nth-child(1) { border-color: var(--primary-green); }
        .highlight-card:nth-child(2) { border-color: var(--accent-orange); }
        .highlight-card:nth-child(3) { border-color: var(--sky-blue); }

        .highlight-card i {
            font-size: 3.5rem;
            margin-bottom: 2rem;
        }
        .highlight-card:nth-child(1) i { color: var(--primary-green); }
        .highlight-card:nth-child(2) i { color: var(--accent-orange); }
        .highlight-card:nth-child(3) i { color: var(--sky-blue); }

        .highlight-card h3 { font-size: 2rem; margin-bottom: 1.2rem; }
        .highlight-card p { font-size: 1.45rem; color: #7f8c8d; }

        /* School Level / Classes Offered */
        .classes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 4rem;
        }

        .class-card {
            background-color: white;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--card-shadow);
        }

        .class-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .class-body {
            padding: 3rem;
        }

        .class-body h3 { font-size: 2.2rem; margin-bottom: 1rem; color: var(--dark-charcoal); }
        .class-body p { font-size: 1.5rem; color: #7f8c8d; margin-bottom: 2rem; }
        .class-age {
            display: inline-block;
            padding: 0.5rem 1.5rem;
            background-color: #f1f5f9;
            border-radius: 20px;
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--sky-blue);
        }

        /* Inquiry Admission Form Block */
        .admission-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6rem;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--card-shadow);
            overflow: hidden;
            border: 1px solid #f1f5f9;
        }

        .admission-info {
            background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
            color: white;
            padding: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .admission-info h3 { color: white; font-size: 3rem; margin-bottom: 2rem; }
        .admission-info p { color: #b2bec3; font-size: 1.55rem; margin-bottom: 3rem; }
        
        .contact-step {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .contact-step i {
            font-size: 2rem;
            color: var(--accent-orange);
            background-color: rgba(255,159,67,0.1);
            padding: 1.2rem;
            border-radius: 50%;
        }
        .contact-step span { font-size: 1.5rem; }

        .admission-form {
            padding: 6rem;
        }
        .admission-form h3 { font-size: 2.6rem; margin-bottom: 2.5rem; }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        .form-full { grid-column: span 2; }

        .form-grid input, .form-grid select, .form-grid textarea {
            width: 100%;
            padding: 1.4rem;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 1.45rem;
            background-color: #f8fafc;
            color: var(--dark-charcoal);
        }

        .form-grid input:focus, .form-grid select:focus, .form-grid textarea:focus {
            outline: none;
            border-color: var(--primary-green);
            background-color: white;
        }

        /* Footer Area Layout */
        footer {
            background-color: #1e272e;
            color: #d2dae2;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 4rem;
            padding: 8rem 8% 4rem;
            margin-top: 6rem;
        }

        .footer-box h3 {
            color: white;
            font-size: 2rem;
            margin-bottom: 2.5rem;
        }

        .footer-box p { font-size: 1.45rem; line-height: 1.8; margin-bottom: 2rem; }
        .footer-box ul li { margin-bottom: 1.2rem; }
        .footer-box ul li a { font-size: 1.45rem; color: #d2dae2; }
        .footer-box ul li a:hover { color: var(--accent-orange); padding-left: 6px; }

        .social-media a {
            display: inline-block;
            width: 3.8rem; height: 3.8rem;
            line-height: 3.8rem;
            background-color: #2f3640;
            color: white;
            border-radius: 50%;
            text-align: center;
            margin-right: 1rem;
            font-size: 1.5rem;
        }
        .social-media a:hover { background-color: var(--sky-blue); }

        /* Media Queries - Fully Responsive System */
        @media (max-width: 991px) {
            html { font-size: 55%; }
            .hero-container, .admission-container { grid-template-columns: 1fr; }
            .hero-image { display: none; }
            .hero-content { text-align: center; }
            .section-padding { padding: 8rem 4% 4rem; }
            .highlights-grid { padding: 0 4%; }
            footer { padding: 8rem 4% 4rem; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                flex-direction: column;
                padding: 2.5rem 0;
                box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                border-top: 2px solid #f1f5f9;
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 0; font-size: 1.8rem; }
            .form-grid { grid-template-columns: 1fr; }
            .form-full { grid-column: span 1; }
            .admission-info, .admission-form { padding: 4rem 3rem; }
        }
    </style>
</head>
<body>

    <!-- CSS Dropdown Controller for Mobile Navigation -->
    <input type="checkbox" id="menu-toggle" style="display: none;">

    <!-- Announcement Board Top Ticker -->
    <div class="notice-ticker">
        <span class="notice-badge">Notice</span>
        <marquee behavior="scroll" direction="left">Admissions open for Academic Session 2026-2027. Early bird scholarship forms are available at the main counter panel till July 15.</marquee>
    </div>

    <!-- Navigation Header Setup -->
    <header>
        <div class="logo">
            <i class="fas fa-graduation-cap"></i> BrightDays
        </div>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#highlights">Why Us</a>
            <a href="#programs">Programs</a>
            <a href="#admissions">Admissions</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <!-- Hero Interactive Welcome Banner -->
    <section class="hero" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <h3>Nurturing Curious Minds</h3>
                <h1>Where Every Child's <span>Bright Future</span> Begins</h1>
                <p>Bright Days International School blends structural creative logic modules, holistic experiential athletic training, and state-of-the-art classroom labs to give your child an unmatched global foundation.</p>
                <a href="#admissions" class="btn btn-orange">Apply Online Today</a>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800" alt="Students in Classroom Learning Setup">
            </div>
        </div>
    </section>

    <!-- Floating Strategic Values Core Highlights Grid -->
    <section class="highlights-grid" id="highlights">
        <div class="highlight-card">
            <i class="fas fa-palette"></i>
            <h3>Creative Arts</h3>
            <p>Fostering abstract emotional capability via tailored design layouts, music theory, and theatre crafts.</p>
        </div>
        <div class="highlight-card">
            <i class="fas fa-microscope"></i>
            <h3>Modern STEM Labs</h3>
            <p>Empowering logical exploration via early coding structures and dynamic scientific lab models.</p>
        </div>
        <div class="highlight-card">
            <i class="fas fa-trophy"></i>
            <h3>Elite Athletics</h3>
            <p>Nurturing strong, disciplined teamwork values across customized standard indoor and track sports setups.</p>
        </div>
    </section>

    <!-- Offered Grade Systems Grid -->
    <section class="section-padding" id="programs">
        <div class="center-heading">
            <h2>Our Learning Programs</h2>
            <p>Curated educational curriculums managed by experienced child-care specialists to align with natural cognitive age groups.</p>
        </div>

        <div class="classes-grid">
            <!-- Program 1 -->
            <div class="class-card">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=500" alt="Kindergarten Group Learning">
                <div class="class-body">
                    <h3>Primary Wing</h3>
                    <p>Building core communication competencies, alphanumeric clarity, and basic socialization paradigms through continuous tactile sensory activities.</p>
                    <span class="class-age">Age: 3 - 6 Years</span>
                </div>
            </div>
            <!-- Program 2 -->
            <div class="class-card">
                <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=500" alt="Middle School Learning">
                <div class="class-body">
                    <h3>Junior High</h3>
                    <p>Transitioning into advanced algebraic matrices, grammatical composition syntax structures, and exploratory geological survey analytics flawlessly.</p>
                    <span class="class-age">Age: 7 - 12 Years</span>
                </div>
            </div>
            <!-- Program 3 -->
            <div class="class-card">
                <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=500" alt="Senior Students Group">
                <div class="class-body">
                    <h3>Senior Secondary</h3>
                    <p>Preparing competitive tech configurations for national university tracking benchmarks, data physics logic models, and advanced language modules.</p>
                    <span class="class-age">Age: 13 - 17 Years</span>
                </div>
            </div>
        </div>
    </section>

    <!-- Admission Intake Inquiry Container Block -->
    <section class="section-padding" id="admissions" style="background-color: #f8fafc;">
        <div class="admission-container">
            <!-- Left Info Panel -->
            <div class="admission-info">
                <h3>Enroll Your Child for the 2026 Academic Term</h3>
                <p>Take the first vital leap towards unlocking a vibrant intellectual pathway for your ward. Submit an immediate entry verification token, and our administrative desk will arrange an offline counseling schedule.</p>
                
                <div class="contact-step">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Primary Avenue Campus, Block 7, Sector Green, New York</span>
                </div>
                <div class="contact-step">
                    <i class="fas fa-phone-volume"></i>
                    <span>+1 (555) 883-9911 / (555) 883-9922</span>
                </div>
            </div>

            <!-- Right Input Form Panel -->
            <div class="admission-form">
                <h3>Quick Inquiry Form</h3>
                <form class="form-grid" action="#" onsubmit="event.preventDefault(); alert('Thank you for your inquiry! Our team will call you back within 24 hours.');">
                    <input type="text" placeholder="Parent/Guardian Name" required>
                    <input type="text" placeholder="Child Full Name" required>
                    <input type="email" placeholder="Email Address" required>
                    <input type="tel" placeholder="Mobile Number" required>
                    
                    <div class="form-full">
                        <select required>
                            <option value="" disabled selected>Select Target Program Grade</option>
                            <option value="primary">Primary Wing (Age 3-6)</option>
                            <option value="junior">Junior High (Age 7-12)</option>
                            <option value="senior">Senior Secondary (Age 13-17)</option>
                        </select>
                    </div>

                    <div class="form-full">
                        <textarea rows="4" placeholder="Mention specific questions, past school background, or special talent profiles here..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-orange form-full">Submit Admission Request</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Structured Functional Footer -->
    <footer>
        <div class="footer-box">
            <h3 style="color: white; font-size: 2.2rem;"><i class="fas fa-graduation-cap" style="color: var(--accent-orange); margin-right: 8px;"></i>BrightDays</h3>
            <p>Empowering children globally through empathetic learning ecosystems, playful exploration architectures, and moral code benchmarks since 2012.</p>
            <div class="social-media">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
            </div>
        </div>

        <div class="footer-box">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#home">Home Portal</a></li>
                <li><a href="#">Academic Calendar 2026</a></li>
                <li><a href="#">School Rulebook Policy</a></li>
                <li><a href="#admissions">Fee Structure Grid</a></li>
            </ul>
        </div>

        <div class="footer-box">
            <h3>Campus Contact Desk</h3>
            <p><i class="fas fa-envelope" style="color: var(--primary-green); margin-right: 10px;"></i> contact@brightdays-school.edu</p>
            <p><i class="fas fa-headset" style="color: var(--primary-green); margin-right: 10px;"></i> Helpdesk: +1 (555) 774-1100</p>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("event")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VividEvents | Luxury Event Management & Planning</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

        :root {
            --luxury-gold: #c5a880;     /* Elegant Champagne Gold */
            --deep-obsidian: #0b0f17;   /* Ultra Premium Dark */
            --card-gray: #161c26;       /* Elevated Surface Gray */
            --text-light: #f8fafc;
            --text-muted: #94a3b8;
            --border-glow: #222e40;
            --card-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Montserrat', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.3s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
        }

        body {
            background-color: var(--deep-obsidian);
            color: var(--text-light);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* Layout Elements */
        .section-padding {
            padding: 10rem 8% 4rem;
        }

        .section-title {
            text-align: center;
            margin-bottom: 7rem;
        }

        .section-title h2 {
            font-family: 'Playfair Display', serif;
            font-size: 4rem;
            font-weight: 700;
            color: white;
            margin-bottom: 1.5rem;
            letter-spacing: 1px;
        }

        .section-title h2 span {
            color: var(--luxury-gold);
            font-style: italic;
        }

        .section-title p {
            font-size: 1.5rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 3px;
        }

        .btn {
            display: inline-block;
            padding: 1.4rem 3.5rem;
            font-size: 1.4rem;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            border-radius: 4px;
            cursor: pointer;
            border: none;
        }

        .btn-gold {
            background-color: var(--luxury-gold);
            color: var(--deep-obsidian);
        }

        .btn-gold:hover {
            background-color: #ebd0a9;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(197, 168, 128, 0.3);
        }

        .btn-outline {
            background-color: transparent;
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .btn-outline:hover {
            border-color: var(--luxury-gold);
            color: var(--luxury-gold);
        }

        /* Premium Floating Navigation Header */
        header {
            position: fixed;
            top: 0; left: 0; right: 0;
            background-color: rgba(11, 15, 23, 0.85);
            backdrop-filter: blur(15px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2.5rem 8%;
            z-index: 1000;
            border-bottom: 1px solid var(--border-glow);
        }

        .logo {
            font-family: 'Playfair Display', serif;
            font-size: 2.6rem;
            font-weight: 700;
            letter-spacing: 1px;
            color: white;
        }

        .logo span { color: var(--luxury-gold); }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: var(--text-light);
            font-size: 1.3rem;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-left: 4rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--luxury-gold);
        }

        #menu-btn {
            display: none;
            font-size: 2.4rem;
            color: white;
            cursor: pointer;
        }

        /* Cinematic Hero Presentation Banner */
        .hero {
            min-height: 100vh;
            background: linear-gradient(rgba(11, 15, 23, 0.8), rgba(11, 15, 23, 0.85)), 
                        url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1920') no-repeat center center/cover;
            display: flex;
            align-items: center;
            padding: 0 8%;
            padding-top: 8rem;
        }

        .hero-content {
            max-width: 85rem;
        }

        .hero-content h3 {
            font-size: 1.4rem;
            color: var(--luxury-gold);
            letter-spacing: 5px;
            text-transform: uppercase;
            margin-bottom: 2rem;
            font-weight: 600;
        }

        .hero-content h1 {
            font-family: 'Playfair Display', serif;
            font-size: 6.5rem;
            line-height: 1.15;
            font-weight: 700;
            margin-bottom: 3rem;
        }

        .hero-content p {
            font-size: 1.8rem;
            color: var(--text-muted);
            line-height: 1.8;
            margin-bottom: 4rem;
            font-weight: 300;
        }

        .hero-btns {
            display: flex;
            gap: 2rem;
        }

        /* Stats Counter Strip */
        .counter-strip {
            background-color: var(--card-gray);
            border: 1px solid var(--border-glow);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
            gap: 4rem;
            padding: 5rem 8%;
            text-align: center;
            box-shadow: var(--card-shadow);
        }

        .counter-item h2 {
            font-family: 'Playfair Display', serif;
            font-size: 4.5rem;
            color: var(--luxury-gold);
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .counter-item p {
            font-size: 1.2rem;
            color: var(--text-muted);
            letter-spacing: 2px;
            text-transform: uppercase;
        }

        /* Event Services Category Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
            gap: 4rem;
        }

        .service-card {
            background-color: var(--card-gray);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: var(--card-shadow);
            border: 1px solid var(--border-glow);
        }

        .service-card:hover {
            transform: translateY(-5px);
            border-color: var(--luxury-gold);
        }

        .card-img-wrapper {
            position: relative;
            height: 250px;
            overflow: hidden;
        }

        .card-img-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .card-price-badge {
            position: absolute;
            bottom: 2rem; right: 2rem;
            background-color: rgba(11, 15, 23, 0.9);
            border: 1px solid var(--luxury-gold);
            color: var(--luxury-gold);
            padding: 0.6rem 1.5rem;
            font-size: 1.2rem;
            font-weight: 600;
            letter-spacing: 1px;
            border-radius: 4px;
        }

        .service-body {
            padding: 3.5rem;
        }

        .service-body h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2.4rem;
            margin-bottom: 1.5rem;
            color: white;
        }

        .service-body p {
            font-size: 1.45rem;
            color: var(--text-muted);
            line-height: 1.7;
            margin-bottom: 2.5rem;
        }

        .service-features-list {
            font-size: 1.35rem;
            color: var(--text-light);
            margin-bottom: 3rem;
        }

        .service-features-list li {
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .service-features-list li i {
            color: var(--luxury-gold);
        }

        /* Interactive Booking Inquiry Module */
        .booking-wrapper {
            display: grid;
            grid-template-columns: 0.9fr 1.1fr;
            gap: 7rem;
            background-color: var(--card-gray);
            border: 1px solid var(--border-glow);
            border-radius: 12px;
            box-shadow: var(--card-shadow);
            overflow: hidden;
        }

        .booking-info-panel {
            background: linear-gradient(rgba(197, 168, 128, 0.04), rgba(197, 168, 128, 0.01)), #0f141c;
            padding: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-right: 1px solid var(--border-glow);
        }

        .booking-info-panel h3 {
            font-family: 'Playfair Display', serif;
            font-size: 3.2rem;
            margin-bottom: 2rem;
            color: white;
        }

        .booking-info-panel p {
            font-size: 1.5rem;
            color: var(--text-muted);
            line-height: 1.8;
            margin-bottom: 4rem;
        }

        .contact-detail-row {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 2.5rem;
            font-size: 1.5rem;
        }

        .contact-detail-row i {
            font-size: 1.8rem;
            color: var(--luxury-gold);
            background-color: rgba(197, 168, 128, 0.1);
            padding: 1.5rem;
            border-radius: 4px;
        }

        .booking-form-panel {
            padding: 6rem;
        }

        .booking-form-panel h3 {
            font-size: 2.2rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 3.5rem;
            color: white;
        }

        .event-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
        }

        .span-2 { grid-column: span 2; }

        .event-form input, .event-form select, .event-form textarea {
            width: 100%;
            background-color: var(--deep-obsidian);
            border: 1px solid var(--border-glow);
            padding: 1.6rem;
            color: white;
            font-size: 1.4rem;
            border-radius: 4px;
        }

        .event-form input:focus, .event-form select:focus, .event-form textarea:focus {
            outline: none;
            border-color: var(--luxury-gold);
        }

        /* Luxury Footer Section */
        footer {
            background-color: #06080c;
            color: var(--text-muted);
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
            gap: 5rem;
            padding: 8rem 8% 4rem;
            border-top: 1px solid var(--border-glow);
        }

        .footer-brand h3 {
            font-family: 'Playfair Display', serif;
            font-size: 2.4rem;
            color: white;
            margin-bottom: 2rem;
        }

        .footer-brand p { font-size: 1.4rem; line-height: 1.8; margin-bottom: 2.5rem; }

        .footer-social-links a {
            display: inline-block;
            width: 4rem; height: 4rem;
            line-height: 4rem;
            background-color: var(--card-gray);
            color: var(--luxury-gold);
            text-align: center;
            border-radius: 4px;
            margin-right: 1.2rem;
            font-size: 1.5rem;
            border: 1px solid var(--border-glow);
        }

        .footer-social-links a:hover {
            background-color: var(--luxury-gold);
            color: var(--deep-obsidian);
            transform: translateY(-2px);
        }

        .footer-links-box h4 {
            font-size: 1.4rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: white;
            margin-bottom: 2.5rem;
        }

        .footer-links-box ul li { margin-bottom: 1.4rem; }
        .footer-links-box ul li a { font-size: 1.4rem; color: var(--text-muted); }
        .footer-links-box ul li a:hover { color: var(--luxury-gold); padding-left: 6px; }

        /* Media Responsive View Breakpoints */
        @media (max-width: 1024px) {
            html { font-size: 55%; }
            .booking-wrapper { grid-template-columns: 1fr; }
            .booking-info-panel { border-right: none; border-bottom: 1px solid var(--border-glow); }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: var(--deep-obsidian);
                flex-direction: column;
                padding: 3rem 0;
                border-top: 1px solid var(--border-glow);
                box-shadow: 0 15px 20px rgba(0,0,0,0.5);
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 2rem 0; font-size: 1.6rem; }
            .hero-content h1 { font-size: 4.5rem; }
            .event-form { grid-template-columns: 1fr; }
            .span-2 { grid-column: span 1; }
            .section-padding { padding: 8rem 4% 4rem; }
            .booking-info-panel, .booking-form-panel { padding: 4rem 3rem; }
            footer { padding: 8rem 4% 4rem; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <header>
        <div class="logo">Vivid<span>Events</span></div>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#services">Services</a>
            <a href="#booking">Consultation</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <section class="hero" id="home">
        <div class="hero-content">
            <h3>Bespoke Event Curators</h3>
            <h1>Crafting Moments That Echo In Eternity</h1>
            <p>From high-stakes international corporate summits to highly intimate luxury weddings, we handle structural conceptualization, vendor orchestration, and flawless technical deployment seamlessly.</p>
            <div class="hero-btns">
                <a href="#services" class="btn btn-gold">Our Catalog</a>
                <a href="#booking" class="btn btn-outline">Request Quote</a>
            </div>
        </div>
    </section>

    <div class="counter-strip">
        <div class="counter-item">
            <h2>500+</h2>
            <p>Bespoke Events Executed</p>
        </div>
        <div class="counter-item">
            <h2>45+</h2>
            <p>Global Luxury Venue Ties</p>
        </div>
        <div class="counter-item">
            <h2>99.4%</h2>
            <p>Client Satisfaction Rate</p>
        </div>
        <div class="counter-item">
            <h2>12+</h2>
            <p>Years Excellence Record</p>
        </div>
    </div>

    <section class="section-padding" id="services">
        <div class="section-title">
            <p>Exclusive Experience Packages</p>
            <h2>What We Do <span>Excellently</span></h2>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <div class="card-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=500" alt="Luxury Corporate Conference Setup">
                    <span class="card-price-badge">From $4,999</span>
                </div>
                <div class="service-body">
                    <h3>Corporate Galas & Summits</h3>
                    <p>High-end technical audio-visual tracking layouts, flawless keynote stage designs, interactive check-in panels, and smooth corporate hospitality administration.</p>
                    <ul class="service-features-list">
                        <li><i class="fas fa-check"></i> Advanced Live Stream AV Setups</li>
                        <li><i class="fas fa-check"></i> Premium Catering Selection</li>
                    </ul>
                    <a href="#booking" class="btn btn-outline" style="width: 100%; text-align: center;">Inquire Details</a>
                </div>
            </div>

            <div class="service-card">
                <div class="card-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=500" alt="Bespoke Royal Wedding Decoration">
                    <span class="card-price-badge">From $9,999</span>
                </div>
                <div class="service-body">
                    <h3>Elite Royal Weddings</h3>
                    <p>Bespoke floral architecture mapping, couture light rendering modules, custom designer seating setups, and absolute end-to-end itinerary coordination.</p>
                    <ul class="service-features-list">
                        <li><i class="fas fa-check"></i> Dedicated Concierge Team</li>
                        <li><i class="fas fa-check"></i> Theme & Set Layout Mockups</li>
                    </ul>
                    <a href="#booking" class="btn btn-outline" style="width: 100%; text-align: center;">Inquire Details</a>
                </div>
            </div>

            <div class="service-card">
                <div class="card-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=500" alt="High Energy Concert Arena">
                    <span class="card-price-badge">From $7,499</span>
                </div>
                <div class="service-body">
                    <h3>Concerts & Mega Festivals</h3>
                    <p>Heavy stadium sound grid integrations, synchronization of high-intensity laser arrays, security management protocols, and crowd control mapping.</p>
                    <ul class="service-features-list">
                        <li><i class="fas fa-check"></i> Pyrotechnic Synchronization</li>
                        <li><i class="fas fa-check"></i> Multi-tier Guest Access Control</li>
                    </ul>
                    <a href="#booking" class="btn btn-outline" style="width: 100%; text-align: center;">Inquire Details</a>
                </div>
            </div>
        </div>
    </section>

    <section class="section-padding" id="booking">
        <div class="booking-wrapper">
            <div class="booking-info-panel">
                <h3>Let's Orchestrate Something Majestic</h3>
                <p>Have an explicit blueprint in mind or starting from a blank sheet? Send your initial event parameter codes, and our core experience architects will align a mood board for you.</p>
                
                <div class="contact-detail-row">
                    <i class="fas fa-map-marked-alt"></i>
                    <span>Penthouse 9, Luxury Plaza, Elite Avenue, Manhattan, NY</span>
                </div>
                <div class="contact-detail-row">
                    <i class="fas fa-envelope-open-text"></i>
                    <span>concierge@vividevents-luxury.com</span>
                </div>
            </div>

            <div class="booking-form-panel">
                <h3>Request Event Proposal</h3>
                <form class="event-form" action="#" onsubmit="event.preventDefault(); alert('Proposal request submitted successfully!');">
                    <input type="text" placeholder="Full Name" required>
                    <input type="email" placeholder="Email Address" required>
                    
                    <select required>
                        <option value="" disabled selected>Select Event Category</option>
                        <option value="corporate">Corporate Gala / Summit</option>
                        <option value="wedding">Elite Royal Wedding</option>
                        <option value="concert">Concert / Mega Festival</option>
                        <option value="other">Custom Bespoke Experience</option>
                    </select>

                    <input type="number" placeholder="Estimated Guests Count" required>
                    <input type="date" required class="span-2">
                    
                    <div class="span-2">
                        <textarea rows="4" placeholder="Describe your vision, aesthetic themes, or unique sound/light specification parameters here..."></textarea>
                    </div>

                    <button type="submit" class="btn btn-gold span-2">Initialize Consultation</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-brand">
            <h3>Vivid<span>Events</span></h3>
            <p>Redefining sensory luxury across professional event spaces globally. Every sound, light array, and texture engineered to absolute precision benchmarks.</p>
            <div class="footer-social-links">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-vimeo-v"></i></a>
            </div>
        </div>

        <div class="footer-links-box">
            <h4>Bespoke Offerings</h4>
            <ul>
                <li><a href="#services">Corporate Experiences</a></li>
                <li><a href="#services">Luxury Destination Weddings</a></li>
                <li><a href="#services">Sound Architecture Setups</a></li>
                <li><a href="#">Artist Liaison Networks</a></li>
            </ul>
        </div>

        <div class="footer-links-box">
            <h4>Legal & Portals</h4>
            <ul>
                <li><a href="#">Corporate Confidentiality</a></li>
                <li><a href="#">Vendor Compliance Code</a></li>
                <li><a href="#">Terms of Engagement</a></li>
                <li><a href="#booking">Immediate Desk Assistance</a></li>
            </ul>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("business")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stratify | Global Enterprise Consulting</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
            --primary-blue: #2563eb;    /* Deep Tech Corporate Blue */
            --dark-navy: #0f172a;       /* Premium Slate 900 */
            --bg-light: #f8fafc;        /* Clean White Grey */
            --text-main: #334155;       /* Muted Charcoal Text */
            --border-color: #e2e8f0;    /* Light Structural Splitters */
            --card-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
            transition: all 0.25s ease;
        }

        html {
            font-size: 62.5%; /* 1rem = 10px */
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-main);
            line-height: 1.6;
        }

        /* Generic Layout Helpers */
        .section-padding {
            padding: 10rem 8% 5rem;
        }

        .heading-wrapper {
            text-align: center;
            margin-bottom: 6rem;
        }

        .heading-wrapper h2 {
            font-size: 3.6rem;
            color: var(--dark-navy);
            font-weight: 800;
            margin-bottom: 1.5rem;
            letter-spacing: -0.5px;
        }

        .heading-wrapper p {
            font-size: 1.6rem;
            color: #64748b;
            max-width: 55rem;
            margin: 0 auto;
        }

        .btn {
            display: inline-block;
            padding: 1.4rem 3.2rem;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 6px;
            cursor: pointer;
            border: none;
            text-align: center;
        }

        .btn-blue {
            background-color: var(--primary-blue);
            color: white;
        }

        .btn-blue:hover {
            background-color: #1d4ed8;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
        }

        .btn-outline {
            background-color: transparent;
            color: var(--dark-navy);
            border: 2px solid var(--border-color);
        }

        .btn-outline:hover {
            border-color: var(--primary-blue);
            color: var(--primary-blue);
        }

        /* Sticky Navigation Header */
        header {
            position: sticky;
            top: 0;
            background-color: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 8%;
            z-index: 1000;
            border-bottom: 1px solid var(--border-color);
            box-shadow: 0 2px 20px rgba(0,0,0,0.01);
        }

        .logo {
            font-size: 2.4rem;
            font-weight: 800;
            color: var(--dark-navy);
            letter-spacing: -0.5px;
        }

        .logo span { color: var(--primary-blue); }

        .navbar {
            display: flex;
            align-items: center;
        }

        .navbar a {
            color: var(--text-main);
            font-size: 1.5rem;
            font-weight: 600;
            margin-left: 4rem;
        }

        .navbar a:hover, .navbar a.active {
            color: var(--primary-blue);
        }

        #menu-btn {
            display: none;
            font-size: 2.2rem;
            color: var(--dark-navy);
            cursor: pointer;
        }

        /* Hero Showcase Grid Area */
        .hero {
            min-height: 80vh;
            background: radial-gradient(circle at top right, #eff6ff 0%, #ffffff 70%);
            display: flex;
            align-items: center;
            padding: 8rem 8% 4rem;
        }

        .hero-container {
            display: grid;
            grid-template-columns: 1.12fr 0.88fr;
            gap: 6rem;
            align-items: center;
            width: 100%;
        }

        .hero-content h1 {
            font-size: 5.6rem;
            color: var(--dark-navy);
            line-height: 1.15;
            font-weight: 800;
            margin-bottom: 2.5rem;
            letter-spacing: -1.5px;
        }

        .hero-content h1 span { color: var(--primary-blue); }

        .hero-content p {
            font-size: 1.8rem;
            color: #475569;
            line-height: 1.7;
            margin-bottom: 3.5rem;
        }

        .hero-btns {
            display: flex;
            gap: 2rem;
        }

        .hero-image img {
            width: 100%;
            border-radius: 12px;
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06);
        }

        /* Structural Strategy Services Grid */
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 3.5rem;
        }

        .service-card {
            background-color: white;
            padding: 4.5rem 3.5rem;
            border-radius: 8px;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
        }

        .service-card:hover {
            border-color: var(--primary-blue);
            transform: translateY(-4px);
        }

        .service-card i {
            font-size: 3rem;
            color: var(--primary-blue);
            background-color: #eff6ff;
            padding: 1.8rem;
            border-radius: 8px;
            margin-bottom: 2.5rem;
            display: inline-block;
        }

        .service-card h3 {
            font-size: 2.2rem;
            color: var(--dark-navy);
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .service-card p {
            font-size: 1.5rem;
            color: #64748b;
            line-height: 1.65;
        }

        /* Business Statistics Metrics Section */
        .stats-banner {
            background-color: var(--dark-navy);
            color: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
            gap: 4rem;
            padding: 6rem 8%;
            text-align: center;
            border-radius: 12px;
            margin: 4rem 8% 0;
        }

        .stat-box h2 {
            font-size: 4.2rem;
            color: white;
            font-weight: 800;
            margin-bottom: 0.5rem;
            letter-spacing: -1px;
        }

        .stat-box h2 span { color: var(--primary-blue); }
        .stat-box p { font-size: 1.4rem; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px; font-weight: 500; }

        /* Integrated Conversion Lead Form */
        .lead-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 7rem;
            background-color: white;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            box-shadow: var(--card-shadow);
            overflow: hidden;
        }

        .lead-details {
            background-color: #0f172a;
            color: white;
            padding: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .lead-details h3 { font-size: 3.2rem; font-weight: 800; margin-bottom: 2rem; letter-spacing: -0.5px; }
        .lead-details p { font-size: 1.6rem; color: #94a3b8; line-height: 1.7; margin-bottom: 4rem; }

        .info-row {
            display: flex;
            align-items: center;
            gap: 2rem;
            font-size: 1.5rem;
            margin-bottom: 2.5rem;
        }

        .info-row i {
            font-size: 1.8rem;
            color: var(--primary-blue);
            background-color: rgba(37, 99, 235, 0.1);
            padding: 1.4rem;
            border-radius: 6px;
        }

        .lead-form-area {
            padding: 6rem;
        }

        .lead-form-area h3 { font-size: 2.4rem; color: var(--dark-navy); margin-bottom: 3rem; font-weight: 700; }

        .business-form {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        .full-width { grid-column: span 2; }

        .business-form input, .business-form select, .business-form textarea {
            width: 100%;
            background-color: var(--bg-light);
            border: 1px solid var(--border-color);
            padding: 1.5rem;
            border-radius: 6px;
            font-size: 1.45rem;
            color: var(--dark-navy);
        }

        .business-form input:focus, .business-form select:focus, .business-form textarea:focus {
            outline: none;
            border-color: var(--primary-blue);
            background-color: white;
        }

        /* Minimal Modern Footer */
        footer {
            background-color: #020617;
            color: #64748b;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
            gap: 4rem;
            padding: 8rem 8% 4rem;
            border-top: 1px solid var(--border-color);
        }

        .footer-item h3 {
            color: white;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
        }

        .footer-item p { font-size: 1.45rem; line-height: 1.7; margin-bottom: 2rem; }
        .footer-item ul li { margin-bottom: 1.2rem; }
        .footer-item ul li a { font-size: 1.45rem; color: #94a3b8; }
        .footer-item ul li a:hover { color: var(--primary-blue); padding-left: 6px; }

        /* Responsive Breakpoint Matrix */
        @media (max-width: 1024px) {
            html { font-size: 55%; }
            .hero-container, .lead-wrapper { grid-template-columns: 1fr; }
            .hero-content { text-align: center; }
            .hero-btns { justify-content: center; }
            .hero-image { display: none; }
            .stats-banner { margin-left: 4%; margin-right: 4%; }
            .section-padding { padding: 8rem 4% 4rem; }
            footer { padding: 8rem 4% 4rem; }
        }

        @media (max-width: 768px) {
            #menu-btn { display: block; }
            .navbar {
                position: absolute;
                top: 100%; left: 0; right: 0;
                background-color: white;
                flex-direction: column;
                padding: 2.5rem 0;
                border-top: 1px solid var(--border-color);
                box-shadow: 0 10px 20px rgba(0,0,0,0.03);
                display: none;
            }
            #menu-toggle:checked ~ .navbar { display: flex; }
            .navbar a { margin: 1.5rem 0; font-size: 1.8rem; }
            .business-form { grid-template-columns: 1fr; }
            .full-width { grid-column: span 1; }
            .lead-details, .lead-form-area { padding: 4rem 3rem; }
        }
    </style>
</head>
<body>

    <input type="checkbox" id="menu-toggle" style="display: none;">

    <header>
        <div class="logo">Stratify<span>.</span></div>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#services">Services</a>
            <a href="#stats">Impact</a>
            <a href="#contact">Contact</a>
        </nav>

        <label for="menu-toggle" id="menu-btn" class="fas fa-bars"></label>
    </header>

    <section class="hero" id="home">
        <div class="hero-container">
            <div class="hero-content">
                <h1>Scale Your Business With <span>Data-Driven</span> Strategy</h1>
                <p>Stratify helps forward-thinking companies engineer high-performance operational architectures, optimize workflows, and unlock sustainable digital revenue modules.</p>
                <div class="hero-btns">
                    <a href="#contact" class="btn btn-blue">Get Free Audit</a>
                    <a href="#services" class="btn btn-outline">Our Services</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" alt="Corporate Data Growth Analysis Charts">
            </div>
        </div>
    </section>

    <section class="section-padding" id="services">
        <div class="heading-wrapper">
            <h2>Our Core Competencies</h2>
            <p>Engineered to deliver high-yielding corporate results across modern digital market domains.</p>
        </div>

        <div class="services-grid">
            <div class="service-card">
                <i class="fas fa-chart-line"></i>
                <h3>Growth Consulting</h3>
                <p>Deep analytical performance breakdowns designed to expose market leaks and maximize scale potential velocity smoothly.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-lightbulb"></i>
                <h3>Digital Transformation</h3>
                <p>Migrating complex legacy database workflows into lightweight, scalable cloud computing architectures effortlessly.</p>
            </div>
            <div class="service-card">
                <i class="fas fa-shield-alt"></i>
                <h3>Risk Management</h3>
                <p>System security testing parameters configured to defend multi-tier pipeline systems against architectural vulnerabilities.</p>
            </div>
        </div>
    </section>

    <section class="stats-banner" id="stats">
        <div class="stat-box">
            <h2>98<span>%</span></h2>
            <p>Client Retention</p>
        </div>
        <div class="stat-box">
            <h2>$450M<span>+</span></h2>
            <p>Revenue Generated</p>
        </div>
        <div class="stat-box">
            <h2>140<span>+</span></h2>
            <p>Global Enterprises Scaled</p>
        </div>
    </section>

    <section class="section-padding" id="contact">
        <div class="lead-wrapper">
            <div class="lead-details">
                <h3>Ready to Coordinate Transformation?</h3>
                <p>Drop your product roadmap parameters. Our specialized business consulting desk will analyze your operational layout and reply within 24 hours.</p>
                
                <div class="info-row">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Financial District, Suite 440, New York, NY</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-envelope"></i>
                    <span>consulting@stratify-enterprise.com</span>
                </div>
            </div>

            <div class="lead-form-area">
                <h3>Schedule Strategy Session</h3>
                <form class="business-form" action="#" onsubmit="event.preventDefault(); alert('Strategy session request received successfully!');">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Corporate Email" required>
                    <input type="text" placeholder="Company Name" required>
                    
                    <select required>
                        <option value="" disabled selected>Target Goal</option>
                        <option value="growth">Revenue Scale Strategy</option>
                        <option value="cloud">Digital System Transformation</option>
                        <option value="security">Infrastructure Risk Management</option>
                    </select>
                    
                    <div class="full-width">
                        <textarea rows="4" placeholder="Briefly describe your operational bottlenecks or objectives..."></textarea>
                    </div>
                    
                    <button type="submit" class="btn btn-blue full-width">Send Session Request</button>
                </form>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer-item">
            <h3 style="color: white;">Stratify<span>.</span></h3>
            <p>Premium systemic enterprise modeling and structural growth design layouts engineered for maximum performance parameters globally.</p>
        </div>

        <div class="footer-item">
            <h3>Solutions</h3>
            <ul>
                <li><a href="#services">Corporate Architecture</a></li>
                <li><a href="#services">Cloud Optimization</a></li>
                <li><a href="#services">Predictive Risk Modeling</a></li>
            </ul>
        </div>

        <div class="footer-item">
            <h3>Corporate</h3>
            <ul>
                <li><a href="#">Privacy Framework</a></li>
                <li><a href="#">Compliance Guidelines</a></li>
                <li><a href="#contact">Immediate Assistance</a></li>
            </ul>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("recipe")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FlavorForge | CSS-Only Recipe Creator</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap');

        :root {
            --primary-emerald: #10b981;
            --emerald-hover: #059669;
            --dark-navy: #0f172a;
            --accent-amber: #f59e0b;
            --bg-cream: #fafaf9;
            --card-white: #ffffff;
            --text-dark: #334155;
            --text-muted: #64748b;
            --border-light: #e2e8f0;
            --shadow-sm: 0 4px 15px rgba(0, 0, 0, 0.03);
            --shadow-md: 0 12px 30px rgba(15, 23, 42, 0.08);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
        }

        html { font-size: 62.5%; }

        body {
            background-color: var(--bg-cream);
            color: var(--text-dark);
            line-height: 1.6;
        }

        h1, h2, h3, .brand-font {
            font-family: 'Playfair Display', serif;
        }

        /* --- Global Layout System --- */
        .container {
            max-width: 120rem;
            margin: 0 auto;
            padding: 0 2rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            padding: 1.4rem 2.8rem;
            font-size: 1.5rem;
            font-weight: 600;
            border-radius: 8px;
            cursor: pointer;
            border: none;
            transition: all 0.25s ease;
        }

        .btn-emerald {
            background-color: var(--primary-emerald);
            color: white;
        }

        .btn-emerald:hover {
            background-color: var(--emerald-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--border-light);
            color: var(--dark-navy);
        }

        .btn-outline:hover {
            border-color: var(--primary-emerald);
            color: var(--primary-emerald);
        }

        /* --- Header Navigation --- */
        header {
            position: sticky;
            top: 0;
            background-color: rgba(250, 250, 249, 0.9);
            backdrop-filter: blur(12px);
            z-index: 1000;
            border-bottom: 1px solid var(--border-light);
            padding: 2rem 0;
        }

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 2.8rem;
            font-weight: 700;
            color: var(--dark-navy);
        }

        .logo span { color: var(--primary-emerald); }

        .nav-links {
            display: flex;
            align-items: center;
            gap: 3.5rem;
        }

        .nav-links a {
            font-size: 1.5rem;
            color: var(--text-dark);
            font-weight: 500;
            transition: color 0.2s ease;
        }

        .nav-links a:hover { color: var(--primary-emerald); }

        /* --- Hero Header --- */
        .hero-section {
            padding: 6rem 0 3rem;
            text-align: center;
        }

        .hero-header {
            max-width: 75rem;
            margin: 0 auto;
        }

        .hero-header h1 {
            font-size: 4.8rem;
            color: var(--dark-navy);
            line-height: 1.15;
            margin-bottom: 1.5rem;
        }

        .hero-header h1 span {
            color: var(--primary-emerald);
            font-style: italic;
        }

        .hero-header p {
            font-size: 1.7rem;
            color: var(--text-muted);
        }

        /* --- Pure CSS Interactive Generator Layout --- */
        .generator-workspace {
            display: grid;
            grid-template-columns: 1fr 1.2fr;
            gap: 4rem;
            background: var(--card-white);
            border-radius: 16px;
            padding: 4rem;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-md);
            margin-bottom: 8rem;
        }

        .pantry-box h3 {
            font-size: 2.2rem;
            margin-bottom: 1rem;
            color: var(--dark-navy);
        }

        .pantry-box p {
            font-size: 1.4rem;
            color: var(--text-muted);
            margin-bottom: 2.5rem;
        }

        .section-label {
            display: block;
            font-size: 1.35rem;
            font-weight: 700;
            color: var(--dark-navy);
            margin-bottom: 1.2rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* CSS Checkbox Grid For Ingredients Selection */
        .ingredients-picker {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
            margin-bottom: 3rem;
        }

        /* Hide raw HTML checkbox inputs */
        .ingredients-picker input[type="checkbox"],
        .diet-picker input[type="radio"] {
            display: none;
        }

        /* Custom Styled Labels as Interactive Buttons */
        .chip-label {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.2rem 1.6rem;
            background-color: var(--bg-cream);
            border: 1px solid var(--border-light);
            border-radius: 8px;
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--text-dark);
            cursor: pointer;
            transition: all 0.2s ease;
            user-select: none;
        }

        .chip-label i {
            color: var(--text-muted);
            font-size: 1.4rem;
        }

        .chip-label:hover {
            border-color: var(--primary-emerald);
            background-color: #f0fdf4;
        }

        /* CSS State: When Checkbox is Checked */
        .ingredients-picker input[type="checkbox"]:checked + .chip-label {
            background-color: #ecfdf5;
            border-color: var(--primary-emerald);
            color: var(--emerald-hover);
            font-weight: 600;
        }

        .ingredients-picker input[type="checkbox"]:checked + .chip-label i {
            color: var(--primary-emerald);
        }

        .ingredients-picker input[type="checkbox"]:checked + .chip-label::after {
            content: "✓";
            margin-left: auto;
            color: var(--primary-emerald);
            font-weight: bold;
        }

        /* Diet Radio Group Styling */
        .diet-picker {
            display: flex;
            gap: 1rem;
            margin-bottom: 3rem;
        }

        .diet-picker input[type="radio"]:checked + .chip-label {
            background-color: var(--dark-navy);
            color: white;
            border-color: var(--dark-navy);
        }

        .diet-picker input[type="radio"]:checked + .chip-label i {
            color: var(--accent-amber);
        }

        /* CSS-Only Recipe Switching Trick using Hidden Radio Controllers */
        .recipe-controller {
            display: none;
        }

        /* Right Panel Container */
        .output-box {
            border-left: 1px solid var(--border-light);
            padding-left: 4rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* State 1: Default Empty Prompt */
        .recipe-card-state {
            display: none;
            animation: fadeIn 0.3s ease-in-out forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Default visible view */
        #state-default {
            display: block;
            text-align: center;
            color: var(--text-muted);
        }

        #state-default i {
            font-size: 5rem;
            color: var(--accent-amber);
            margin-bottom: 1.5rem;
        }

        #state-default h4 {
            font-size: 2rem;
            color: var(--dark-navy);
            margin-bottom: 0.8rem;
        }

        #state-default p {
            font-size: 1.4rem;
        }

        /* CSS Display Rules: Showing Target Recipe based on selected radio */
        #select-chicken:checked ~ .generator-workspace #recipe-chicken,
        #select-pasta:checked ~ .generator-workspace #recipe-pasta,
        #select-salad:checked ~ .generator-workspace #recipe-salad {
            display: block;
        }

        /* Hide default state when any recipe active */
        #select-chicken:checked ~ .generator-workspace #state-default,
        #select-pasta:checked ~ .generator-workspace #state-default,
        #select-salad:checked ~ .generator-workspace #state-default {
            display: none;
        }

        /* Generated Recipe Layout Styling */
        .recipe-header {
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--border-light);
            padding-bottom: 1.5rem;
        }

        .recipe-header h3 {
            font-size: 3rem;
            color: var(--dark-navy);
            margin-bottom: 1rem;
        }

        .recipe-badges {
            display: flex;
            gap: 2rem;
            font-size: 1.35rem;
            color: var(--text-muted);
        }

        .recipe-badges span {
            display: flex;
            align-items: center;
            gap: 0.6rem;
        }

        .recipe-badges i { color: var(--primary-emerald); }

        .recipe-body h4 {
            font-size: 1.7rem;
            margin: 2rem 0 1rem;
            color: var(--dark-navy);
        }

        .ingredients-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 2.5rem;
        }

        .ingredients-list li {
            font-size: 1.4rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .ingredients-list li::before {
            content: "•";
            color: var(--primary-emerald);
            font-size: 2rem;
            font-weight: bold;
        }

        .steps-list ol {
            padding-left: 2rem;
        }

        .steps-list li {
            font-size: 1.45rem;
            margin-bottom: 1.2rem;
            color: var(--text-dark);
        }

        /* CSS-Only Accordion Timer / Cooking Note */
        .cooking-note-box {
            margin-top: 2.5rem;
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            padding: 1.8rem;
            border-radius: 8px;
        }

        .cooking-note-box h5 {
            font-size: 1.5rem;
            color: var(--emerald-hover);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .cooking-note-box p {
            font-size: 1.3rem;
            color: var(--text-dark);
        }

        /* --- Featured Recipes Grid Section --- */
        .featured-section {
            padding: 4rem 0 8rem;
        }

        .section-title {
            text-align: center;
            margin-bottom: 5rem;
        }

        .section-title h2 {
            font-size: 3.6rem;
            color: var(--dark-navy);
            margin-bottom: 1rem;
        }

        .recipe-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
            gap: 3.5rem;
        }

        .preset-card {
            background: var(--card-white);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border-light);
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .preset-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
        }

        .preset-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
        }

        .card-content {
            padding: 2.5rem;
        }

        .card-meta {
            display: flex;
            justify-content: space-between;
            font-size: 1.3rem;
            color: var(--accent-amber);
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }

        .card-content h3 {
            font-size: 2.2rem;
            color: var(--dark-navy);
            margin-bottom: 1rem;
        }

        .card-content p {
            font-size: 1.4rem;
            color: var(--text-muted);
            margin-bottom: 2rem;
        }

        .label-btn {
            display: block;
            width: 100%;
            text-align: center;
        }

        /* Footer */
        footer {
            background-color: var(--dark-navy);
            color: #94a3b8;
            padding: 5rem 0 3rem;
            border-top: 1px solid #1e293b;
        }

        .footer-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #1e293b;
            padding-bottom: 3rem;
            margin-bottom: 3rem;
        }

        .footer-logo {
            font-size: 2.4rem;
            color: white;
        }

        .footer-logo span { color: var(--primary-emerald); }

        /* Responsive Design */
        @media (max-width: 1024px) {
            .generator-workspace { grid-template-columns: 1fr; }
            .output-box { border-left: none; border-top: 1px solid var(--border-light); padding-left: 0; padding-top: 4rem; }
        }

        @media (max-width: 640px) {
            html { font-size: 50%; }
            .ingredients-picker, .ingredients-list { grid-template-columns: 1fr; }
            .diet-picker { flex-direction: column; }
            .nav-links { display: none; }
        }
    </style>
</head>
<body>

    <!-- Header Navigation -->
    <header>
        <div class="container nav-wrapper">
            <div class="logo brand-font">Flavor<span>Forge.</span></div>
            <nav class="nav-links">
                <a href="#generator">Recipe Builder</a>
                <a href="#featured">Featured Menu</a>
            </nav>
            <a href="#generator" class="btn btn-emerald" style="padding: 1rem 2rem; font-size: 1.35rem;">
                <i class="fas fa-utensils"></i> Cook Now
            </a>
        </div>
    </header>

    <!-- Main Generator Workspace -->
    <section class="hero-section" id="generator">
        <div class="container">
            <div class="hero-header">
                <h1 class="brand-font">Pick Your Pantry & <span>Generate Recipes</span></h1>
                <p>Select your available ingredients below, choose a recipe preset, and instantly render step-by-step cooking guides without refreshing the page.</p>
            </div>
        </div>

        <!-- Hidden Radio Controllers for Pure CSS Recipe Switching -->
        <input type="radio" name="recipe_select" id="select-chicken" class="recipe-controller">
        <input type="radio" name="recipe_select" id="select-pasta" class="recipe-controller">
        <input type="radio" name="recipe_select" id="select-salad" class="recipe-controller">

        <div class="container" style="margin-top: 4rem;">
            <div class="generator-workspace">
                
                <!-- Left Input Control Area -->
                <div class="pantry-box">
                    <h3><i class="fas fa-basket-shopping" style="color: var(--primary-emerald);"></i> Select Available Ingredients</h3>
                    <p>Toggle items currently in your kitchen:</p>
                    
                    <div class="ingredients-picker">
                        <input type="checkbox" id="ing-chicken" checked>
                        <label for="ing-chicken" class="chip-label"><i class="fas fa-drumstick-bite"></i> Fresh Chicken</label>

                        <input type="checkbox" id="ing-garlic" checked>
                        <label for="ing-garlic" class="chip-label"><i class="fas fa-cubes"></i> Garlic Cloves</label>

                        <input type="checkbox" id="ing-spinach">
                        <label for="ing-spinach" class="chip-label"><i class="fas fa-leaf"></i> Baby Spinach</label>

                        <input type="checkbox" id="ing-pasta" checked>
                        <label for="ing-pasta" class="chip-label"><i class="fas fa-bowl-food"></i> Penne Pasta</label>

                        <input type="checkbox" id="ing-tomato">
                        <label for="ing-tomato" class="chip-label"><i class="fas fa-apple-whole"></i> Tomatoes</label>

                        <input type="checkbox" id="ing-cheese">
                        <label for="ing-cheese" class="chip-label"><i class="fas fa-cheese"></i> Parmesan</label>
                    </div>

                    <span class="section-label">Dietary Mode</span>
                    <div class="diet-picker">
                        <input type="radio" name="diet_mode" id="diet-all" checked>
                        <label for="diet-all" class="chip-label"><i class="fas fa-utensils"></i> Standard</label>

                        <input type="radio" name="diet_mode" id="diet-veg">
                        <label for="diet-veg" class="chip-label"><i class="fas fa-seedling"></i> Vegetarian</label>

                        <input type="radio" name="diet_mode" id="diet-keto">
                        <label for="diet-keto" class="chip-label"><i class="fas fa-fire"></i> Keto</label>
                    </div>

                    <span class="section-label">Generate Dish Option</span>
                    <div style="display: grid; gap: 1rem;">
                        <label for="select-chicken" class="btn btn-emerald">
                            <i class="fas fa-wand-magic-sparkles"></i> Generate Tuscan Garlic Chicken
                        </label>
                        <label for="select-pasta" class="btn btn-outline">
                            <i class="fas fa-wand-magic-sparkles"></i> Generate Creamy Tomato Pasta
                        </label>
                        <label for="select-salad" class="btn btn-outline">
                            <i class="fas fa-wand-magic-sparkles"></i> Generate Fresh Mediterranean Salad
                        </label>
                    </div>
                </div>

                <!-- Right Display Area (Dynamic Recipe Output) -->
                <div class="output-box">
                    
                    <!-- Default State (Shown when no recipe selected) -->
                    <div class="recipe-card-state" id="state-default">
                        <i class="fas fa-book-open"></i>
                        <h4 class="brand-font">No Recipe Generated Yet</h4>
                        <p>Click any generator button on the left to instantly reveal a recipe guide!</p>
                    </div>

                    <!-- Recipe 1: Garlic Chicken Card -->
                    <div class="recipe-card-state" id="recipe-chicken">
                        <div class="recipe-header">
                            <h3 class="brand-font">Creamy Tuscan Garlic Chicken</h3>
                            <div class="recipe-badges">
                                <span><i class="fas fa-clock"></i> 25 Mins</span>
                                <span><i class="fas fa-fire"></i> 480 kcal</span>
                                <span><i class="fas fa-gauge"></i> Medium</span>
                            </div>
                        </div>

                        <div class="recipe-body">
                            <h4>Selected Ingredients</h4>
                            <ul class="ingredients-list">
                                <li>500g Chicken Breast</li>
                                <li>4 Cloves Garlic (Minced)</li>
                                <li>1 Cup Heavy Cream / Milk</li>
                                <li>1 Cup Fresh Spinach</li>
                                <li>1/2 Cup Parmesan Cheese</li>
                                <li>2 tbsp Olive Oil</li>
                            </ul>

                            <h4>Step-By-Step Instructions</h4>
                            <div class="steps-list">
                                <ol>
                                    <li>Season chicken breasts with salt, pepper, and Italian herbs.</li>
                                    <li>Heat olive oil in a skillet over medium-high heat and sear chicken for 6 minutes per side.</li>
                                    <li>Remove chicken, add minced garlic to the pan, and sauté until fragrant (1 min).</li>
                                    <li>Pour in heavy cream and parmesan; bring to a simmer until the sauce thickens.</li>
                                    <li>Stir in spinach, return chicken to the pan, and coat thoroughly before serving.</li>
                                </ol>
                            </div>

                            <div class="cooking-note-box">
                                <h5><i class="fas fa-lightbulb"></i> Chef's Pro Tip</h5>
                                <p>Deglaze the skillet with a splash of lemon juice before adding cream for enhanced flavor!</p>
                            </div>
                        </div>
                    </div>

                    <!-- Recipe 2: Creamy Pasta Card -->
                    <div class="recipe-card-state" id="recipe-pasta">
                        <div class="recipe-header">
                            <h3 class="brand-font">Garlic Parmesan Penne Pasta</h3>
                            <div class="recipe-badges">
                                <span><i class="fas fa-clock"></i> 15 Mins</span>
                                <span><i class="fas fa-fire"></i> 390 kcal</span>
                                <span><i class="fas fa-gauge"></i> Easy</span>
                            </div>
                        </div>

                        <div class="recipe-body">
                            <h4>Selected Ingredients</h4>
                            <ul class="ingredients-list">
                                <li>300g Penne Pasta</li>
                                <li>3 Cloves Garlic</li>
                                <li>2 tbsp Butter</li>
                                <li>1/2 Cup Parmesan Cheese</li>
                                <li>Fresh Parsley</li>
                                <li>Salt & Black Pepper</li>
                            </ul>

                            <h4>Step-By-Step Instructions</h4>
                            <div class="steps-list">
                                <ol>
                                    <li>Boil penne pasta in salted water until al dente (about 10 minutes). Reserve 1/2 cup pasta water.</li>
                                    <li>Melt butter in a pan over medium heat and sauté minced garlic for 60 seconds.</li>
                                    <li>Toss drained pasta directly into the garlic butter pan.</li>
                                    <li>Add reserved pasta water and grated parmesan, stirring vigorously to form an emulsion.</li>
                                    <li>Garnish with chopped parsley and serve hot.</li>
                                </ol>
                            </div>

                            <div class="cooking-note-box">
                                <h5><i class="fas fa-lightbulb"></i> Chef's Pro Tip</h5>
                                <p>Always add pasta water gradually to achieve the ideal silky sauce consistency.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Recipe 3: Fresh Salad Card -->
                    <div class="recipe-card-state" id="recipe-salad">
                        <div class="recipe-header">
                            <h3 class="brand-font">Fresh Spinach & Tomato Salad</h3>
                            <div class="recipe-badges">
                                <span><i class="fas fa-clock"></i> 10 Mins</span>
                                <span><i class="fas fa-fire"></i> 210 kcal</span>
                                <span><i class="fas fa-gauge"></i> Super Easy</span>
                            </div>
                        </div>

                        <div class="recipe-body">
                            <h4>Selected Ingredients</h4>
                            <ul class="ingredients-list">
                                <li>2 Cups Fresh Baby Spinach</li>
                                <li>1 Cup Cherry Tomatoes (Halved)</li>
                                <li>1/4 Cup Shaved Parmesan</li>
                                <li>2 tbsp Extra Virgin Olive Oil</li>
                                <li>1 tbsp Balsamic Vinegar</li>
                                <li>Toasted Pine Nuts</li>
                            </ul>

                            <h4>Step-By-Step Instructions</h4>
                            <div class="steps-list">
                                <ol>
                                    <li>Wash and thoroughly dry the fresh baby spinach leaves.</li>
                                    <li>In a large salad bowl, combine spinach, halved cherry tomatoes, and pine nuts.</li>
                                    <li>Whisk olive oil, balsamic vinegar, salt, and pepper together in a small cup.</li>
                                    <li>Drizzle dressing over the salad right before serving and toss gently.</li>
                                    <li>Top with shaved parmesan cheese.</li>
                                </ol>
                            </div>

                            <div class="cooking-note-box">
                                <h5><i class="fas fa-lightbulb"></i> Chef's Pro Tip</h5>
                                <p>Add freshly cracked sea salt right before serving to keep greens crisp.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Featured Menu Catalog -->
    <section class="featured-section" id="featured">
        <div class="container">
            <div class="section-title">
                <h2 class="brand-font">Quick Inspiration Catalog</h2>
                <p style="font-size: 1.6rem; color: var(--text-muted);">Popular classic meals you can select above.</p>
            </div>

            <div class="recipe-grid">
                <!-- Preset Card 1 -->
                <div class="preset-card">
                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600" alt="Fresh Bowl">
                    <div class="card-content">
                        <div class="card-meta">
                            <span>Vegetarian</span>
                            <span>10 Mins</span>
                        </div>
                        <h3 class="brand-font">Fresh Spinach Salad</h3>
                        <p>Loaded with cherry tomatoes, baby spinach, parmesan shavings, and balsamic drizzle.</p>
                        <label for="select-salad" class="btn btn-outline label-btn">Select Recipe</label>
                    </div>
                </div>

                <!-- Preset Card 2 -->
                <div class="preset-card">
                    <img src="https://images.unsplash.com/photo-1621996346565-e3d5d6281270?q=80&w=600" alt="Penne Pasta">
                    <div class="card-content">
                        <div class="card-meta">
                            <span>Easy Meal</span>
                            <span>15 Mins</span>
                        </div>
                        <h3 class="brand-font">Garlic Butter Penne</h3>
                        <p>Classic Italian comfort food made with garlic, butter, parmesan cheese, and parsley.</p>
                        <label for="select-pasta" class="btn btn-outline label-btn">Select Recipe</label>
                    </div>
                </div>

                <!-- Preset Card 3 -->
                <div class="preset-card">
                    <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600" alt="Garlic Chicken">
                    <div class="card-content">
                        <div class="card-meta">
                            <span>High Protein</span>
                            <span>25 Mins</span>
                        </div>
                        <h3 class="brand-font">Tuscan Garlic Chicken</h3>
                        <p>Seared chicken breast served in a rich cream sauce with spinach and garlic.</p>
                        <label for="select-chicken" class="btn btn-outline label-btn">Select Recipe</label>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-wrapper">
                <div class="footer-logo brand-font">Flavor<span>Forge.</span></div>
                <p style="font-size: 1.4rem;">Pure HTML & CSS Kitchen Interface</p>
            </div>
            <p style="text-align: center; font-size: 1.3rem; color: #64748b;">&copy; 2026 FlavorForge. Designed with CSS sibling selectors and form state controllers.</p>
        </div>
    </footer>

</body>
</html>
`;

}

else if (prompt.toLowerCase().includes("gaming")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEXUS | Next-Gen Gaming Realm</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Rajdhani:wght@500;600;700&display=swap');

        :root {
            --neon-cyan: #00f0ff;
            --neon-purple: #7000ff;
            --neon-pink: #ff0055;
            --bg-dark: #070913;
            --bg-card: rgba(18, 22, 41, 0.7);
            --text-main: #f1f5f9;
            --text-muted: #94a3b8;
            --border-glow: rgba(0, 240, 255, 0.2);
            --shadow-neon: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Rajdhani', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-dark);
            color: var(--text-main);
            overflow-x: hidden;
            line-height: 1.5;
        }

        /* Sci-Fi Grid Background */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: 
                linear-gradient(rgba(0, 240, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 240, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            z-index: -1;
            pointer-events: none;
        }

        h1, h2, h3, .heading-font {
            font-family: 'Orbitron', sans-serif;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Buttons */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 14px 32px;
            font-family: 'Orbitron', sans-serif;
            font-size: 0.9rem;
            font-weight: 700;
            color: #fff;
            background: linear-gradient(135deg, var(--neon-purple), var(--neon-cyan));
            border: none;
            clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 25px rgba(0, 240, 255, 0.6);
            filter: brightness(1.2);
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--neon-cyan);
            color: var(--neon-cyan);
            clip-path: none;
            border-radius: 4px;
        }

        .btn-outline:hover {
            background: var(--neon-cyan);
            color: var(--bg-dark);
        }

        /* Navigation */
        header {
            position: sticky;
            top: 0;
            background: rgba(7, 9, 19, 0.85);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-glow);
            z-index: 1000;
            padding: 20px 0;
        }

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 900;
            color: #fff;
        }

        .logo span {
            color: var(--neon-cyan);
            text-shadow: 0 0 10px var(--neon-cyan);
        }

        .nav-links {
            display: flex;
            gap: 30px;
        }

        .nav-links a {
            color: var(--text-muted);
            font-weight: 600;
            font-size: 1.1rem;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: var(--neon-cyan);
            text-shadow: 0 0 8px var(--neon-cyan);
        }

        /* Hero Section */
        .hero {
            padding: 100px 0 60px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .hero-text h1 {
            font-size: 3.5rem;
            line-height: 1.1;
            margin-bottom: 20px;
        }

        .hero-text h1 span {
            background: linear-gradient(45deg, var(--neon-cyan), var(--neon-pink));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .hero-text p {
            font-size: 1.2rem;
            color: var(--text-muted);
            margin-bottom: 35px;
        }

        .hero-btn-group {
            display: flex;
            gap: 20px;
        }

        .hero-img-box {
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid var(--border-glow);
            box-shadow: var(--shadow-neon);
        }

        .hero-img-box img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
        }

        .hero-img-box:hover img {
            transform: scale(1.05);
        }

        /* Stats Section */
        .stats-bar {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
            background: var(--bg-card);
            border: 1px solid var(--border-glow);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 80px;
            text-align: center;
        }

        .stat-item h3 {
            font-size: 2.2rem;
            color: var(--neon-cyan);
            margin-bottom: 5px;
        }

        .stat-item p {
            color: var(--text-muted);
            font-size: 1rem;
            font-weight: 600;
        }

        /* Section Title */
        .section-header {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-header h2 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .section-header p {
            color: var(--neon-cyan);
            font-weight: 700;
            letter-spacing: 2px;
        }

        /* Games Grid */
        .games-section {
            padding-bottom: 100px;
        }

        .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .game-card {
            background: var(--bg-card);
            border-radius: 12px;
            border: 1px solid var(--border-glow);
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
        }

        .game-card:hover {
            transform: translateY(-8px);
            border-color: var(--neon-cyan);
            box-shadow: var(--shadow-neon);
        }

        .game-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .game-info {
            padding: 20px;
        }

        .game-category {
            font-size: 0.85rem;
            color: var(--neon-pink);
            font-weight: 700;
            text-transform: uppercase;
        }

        .game-info h3 {
            font-size: 1.4rem;
            margin: 8px 0;
        }

        .game-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        .rating i {
            color: #ffc107;
        }

        /* Tournaments Section */
        .tournaments-section {
            padding-bottom: 100px;
        }

        .tournament-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .tournament-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr auto;
            align-items: center;
            background: var(--bg-card);
            padding: 20px 30px;
            border-radius: 12px;
            border: 1px solid var(--border-glow);
            gap: 20px;
        }

        .tournament-item:hover {
            border-color: var(--neon-purple);
        }

        .tourney-title h4 {
            font-size: 1.2rem;
        }

        .tourney-title p {
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .tourney-stat span {
            display: block;
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        .tourney-stat strong {
            color: var(--neon-cyan);
            font-size: 1.1rem;
        }

        /* Footer */
        footer {
            background: rgba(4, 6, 12, 0.95);
            border-top: 1px solid var(--border-glow);
            padding: 60px 0 30px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 40px;
        }

        .footer-brand p {
            color: var(--text-muted);
            margin-top: 15px;
            max-width: 300px;
        }

        .footer-col h4 {
            color: #fff;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }

        .footer-col ul li {
            margin-bottom: 10px;
        }

        .footer-col ul a {
            color: var(--text-muted);
            transition: color 0.3s;
        }

        .footer-col ul a:hover {
            color: var(--neon-cyan);
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
            .hero {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .hero-btn-group {
                justify-content: center;
            }
            .tournament-item {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 600px) {
            .nav-links {
                display: none;
            }
            .stats-bar {
                grid-template-columns: repeat(2, 1fr);
            }
            .hero-text h1 {
                font-size: 2.5rem;
            }
            .footer-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>

    <!-- Header Navigation -->
    <header>
        <div class="container nav-wrapper">
            <a href="#" class="logo heading-font">NEX<span>US</span></a>
            <nav class="nav-links">
                <a href="#hero">Home</a>
                <a href="#games">Games</a>
                <a href="#tournaments">Tournaments</a>
                <a href="#community">Community</a>
            </nav>
            <a href="#tournaments" class="btn btn-outline">Join Arena</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="container hero" id="hero">
        <div class="hero-text">
            <h1 class="heading-font">Enter The Next <span>Dimension</span> Of Gaming</h1>
            <p>Join millions of players worldwide. Compete in high-stakes tournaments, explore vibrant virtual worlds, and climb global leaderboards.</p>
            <div class="hero-btn-group">
                <a href="#games" class="btn"><i class="fas fa-gamepad"></i> Explore Games</a>
                <a href="#tournaments" class="btn btn-outline"><i class="fas fa-trophy"></i> Tournaments</a>
            </div>
        </div>
        <div class="hero-img-box">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800" alt="Cyberpunk Gaming Set">
        </div>
    </section>

    <!-- Stats Bar -->
    <div class="container">
        <div class="stats-bar">
            <div class="stat-item">
                <h3 class="heading-font">2.4M</h3>
                <p>Active Players</p>
            </div>
            <div class="stat-item">
                <h3 class="heading-font">$500K</h3>
                <p>Prize Pools</p>
            </div>
            <div class="stat-item">
                <h3 class="heading-font">150+</h3>
                <p>Pro Tournaments</p>
            </div>
            <div class="stat-item">
                <h3 class="heading-font">99.9%</h3>
                <p>Uptime Servers</p>
            </div>
        </div>
    </div>

    <!-- Trending Games Section -->
    <section class="container games-section" id="games">
        <div class="section-header">
            <p>POPULAR TITLES</p>
            <h2 class="heading-font">Trending Games</h2>
        </div>

        <div class="games-grid">
            <!-- Game Card 1 -->
            <div class="game-card">
                <img src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600" alt="Cyber Warfare">
                <div class="game-info">
                    <span class="game-category">Action / FPS</span>
                    <h3 class="heading-font">Cyber Warfare 2099</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Futuristic tactical shooter set in a dystopian metropolis.</p>
                    <div class="game-meta">
                        <span class="rating"><i class="fas fa-star"></i> 4.9</span>
                        <span><i class="fas fa-user"></i> 120k Live</span>
                    </div>
                </div>
            </div>

            <!-- Game Card 2 -->
            <div class="game-card">
                <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600" alt="Aether Legends">
                <div class="game-info">
                    <span class="game-category">RPG / Open World</span>
                    <h3 class="heading-font">Aether Legends</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">Embark on an epic fantasy journey with mythical beasts.</p>
                    <div class="game-meta">
                        <span class="rating"><i class="fas fa-star"></i> 4.8</span>
                        <span><i class="fas fa-user"></i> 85k Live</span>
                    </div>
                </div>
            </div>

            <!-- Game Card 3 -->
            <div class="game-card">
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600" alt="Neon Velocity">
                <div class="game-info">
                    <span class="game-category">Racing / Arcade</span>
                    <h3 class="heading-font">Neon Velocity</h3>
                    <p style="color: var(--text-muted); font-size: 0.95rem;">High-speed antigravity racing through neon-lit highways.</p>
                    <div class="game-meta">
                        <span class="rating"><i class="fas fa-star"></i> 4.7</span>
                        <span><i class="fas fa-user"></i> 45k Live</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Tournaments Section -->
    <section class="container tournaments-section" id="tournaments">
        <div class="section-header">
            <p>COMPETE & WIN</p>
            <h2 class="heading-font">Active Tournaments</h2>
        </div>

        <div class="tournament-list">
            <!-- Item 1 -->
            <div class="tournament-item">
                <div class="tourney-title">
                    <h4 class="heading-font">Cyber Championship Season 4</h4>
                    <p>Game: Cyber Warfare 2099</p>
                </div>
                <div class="tourney-stat">
                    <span>Prize Pool</span>
                    <strong>$100,000</strong>
                </div>
                <div class="tourney-stat">
                    <span>Teams</span>
                    <strong>64 / 64 Full</strong>
                </div>
                <div class="tourney-stat">
                    <span>Status</span>
                    <strong style="color: var(--neon-pink);">LIVE NOW</strong>
                </div>
                <a href="#" class="btn btn-outline" style="font-size: 0.8rem; padding: 10px 20px;">Watch Stream</a>
            </div>

            <!-- Item 2 -->
            <div class="tournament-item">
                <div class="tourney-title">
                    <h4 class="heading-font">Aether Guild Showdown</h4>
                    <p>Game: Aether Legends</p>
                </div>
                <div class="tourney-stat">
                    <span>Prize Pool</span>
                    <strong>$50,000</strong>
                </div>
                <div class="tourney-stat">
                    <span>Teams</span>
                    <strong>28 / 32 Open</strong>
                </div>
                <div class="tourney-stat">
                    <span>Starts In</span>
                    <strong style="color: var(--neon-cyan);">2 Days</strong>
                </div>
                <a href="#" class="btn" style="font-size: 0.8rem; padding: 10px 20px;">Register</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="logo heading-font">NEX<span>US</span></a>
                    <p>The ultimate destination for competitive esports, community hubs, and next-gen gaming content.</p>
                </div>
                <div class="footer-col">
                    <h4 class="heading-font">Navigation</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#games">Games</a></li>
                        <li><a href="#tournaments">Tournaments</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="heading-font">Platform</h4>
                    <ul>
                        <li><a href="#">Leaderboards</a></li>
                        <li><a href="#">Server Status</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4 class="heading-font">Social</h4>
                    <ul>
                        <li><a href="#"><i class="fab fa-discord"></i> Discord</a></li>
                        <li><a href="#"><i class="fab fa-twitch"></i> Twitch</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 NEXUS Gaming Realm. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("real state")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUXE | Premium Real Estate & Properties</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap');

        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #0f172a;
            --accent: #f59e0b;
            --bg-light: #f8fafc;
            --card-bg: #ffffff;
            --text-dark: #1e293b;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05);
            --radius: 12px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-dark);
            line-height: 1.6;
        }

        h1, h2, h3, .serif-font {
            font-family: 'Playfair Display', serif;
        }

        .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* --- Buttons --- */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 12px 24px;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: var(--radius);
            cursor: pointer;
            border: none;
            transition: all 0.25s ease;
        }

        .btn-primary {
            background-color: var(--primary);
            color: #ffffff;
        }

        .btn-primary:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--border);
            color: var(--text-dark);
        }

        .btn-outline:hover {
            border-color: var(--primary);
            color: var(--primary);
        }

        /* --- Header Navigation --- */
        header {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
            z-index: 1000;
            padding: 18px 0;
        }

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--secondary);
            letter-spacing: -0.5px;
        }

        .logo span { color: var(--primary); }

        .nav-links {
            display: flex;
            gap: 32px;
        }

        .nav-links a {
            color: var(--text-dark);
            font-weight: 500;
            font-size: 1rem;
            transition: color 0.2s ease;
        }

        .nav-links a:hover { color: var(--primary); }

        /* --- Hero Section & Search Bar --- */
        .hero {
            position: relative;
            padding: 90px 0 120px;
            background: linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), 
                        url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600') center/cover no-repeat;
            color: #ffffff;
            text-align: center;
        }

        .hero-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .hero h1 {
            font-size: 3.8rem;
            line-height: 1.15;
            margin-bottom: 16px;
        }

        .hero p {
            font-size: 1.2rem;
            color: #cbd5e1;
            margin-bottom: 40px;
        }

        /* Search Filter Box */
        .search-container {
            background: #ffffff;
            padding: 20px;
            border-radius: var(--radius);
            box-shadow: var(--shadow-lg);
            max-width: 1000px;
            margin: 0 auto;
            color: var(--text-dark);
        }

        .search-form {
            display: grid;
            grid-template-columns: repeat(4, 1fr) auto;
            gap: 16px;
            align-items: center;
        }

        .filter-group {
            display: flex;
            flex-direction: column;
            text-align: left;
        }

        .filter-group label {
            font-size: 0.8rem;
            font-weight: 700;
            text-transform: uppercase;
            color: var(--text-muted);
            margin-bottom: 6px;
            letter-spacing: 0.5px;
        }

        .filter-group select, 
        .filter-group input {
            padding: 10px 14px;
            border: 1px solid var(--border);
            border-radius: 8px;
            font-size: 0.95rem;
            outline: none;
            background: #ffffff;
            color: var(--text-dark);
        }

        .filter-group select:focus, 
        .filter-group input:focus {
            border-color: var(--primary);
        }

        /* --- Featured Properties Grid --- */
        .properties-section {
            padding: 90px 0;
        }

        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 48px;
        }

        .section-header h2 {
            font-size: 2.4rem;
            color: var(--secondary);
        }

        .section-header p {
            color: var(--text-muted);
            font-size: 1.05rem;
        }

        .property-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 32px;
        }

        .property-card {
            background: var(--card-bg);
            border-radius: var(--radius);
            border: 1px solid var(--border);
            overflow: hidden;
            box-shadow: var(--shadow-sm);
            transition: all 0.3s ease;
        }

        .property-card:hover {
            transform: translateY(-8px);
            box-shadow: var(--shadow-lg);
        }

        .property-image {
            position: relative;
            height: 240px;
            overflow: hidden;
        }

        .property-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .property-card:hover .property-image img {
            transform: scale(1.05);
        }

        .badge {
            position: absolute;
            top: 16px;
            left: 16px;
            padding: 6px 12px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            border-radius: 6px;
            color: #ffffff;
        }

        .badge-sale { background-color: var(--primary); }
        .badge-rent { background-color: var(--accent); }

        .price-tag {
            position: absolute;
            bottom: 16px;
            right: 16px;
            background: rgba(15, 23, 42, 0.85);
            backdrop-filter: blur(8px);
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 1.1rem;
        }

        .property-details {
            padding: 24px;
        }

        .property-location {
            font-size: 0.85rem;
            color: var(--text-muted);
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .property-title {
            font-size: 1.3rem;
            color: var(--secondary);
            margin-bottom: 16px;
            font-weight: 700;
        }

        .property-features {
            display: flex;
            justify-content: space-between;
            padding-top: 16px;
            border-top: 1px solid var(--border);
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .property-features span {
            display: flex;
            align-items: center;
            gap: 6px;
        }

        /* --- Why Choose Us --- */
        .features-section {
            background: #ffffff;
            padding: 90px 0;
            border-top: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            margin-top: 48px;
        }

        .feature-box {
            text-align: center;
            padding: 32px;
            border-radius: var(--radius);
            background: var(--bg-light);
            border: 1px solid var(--border);
        }

        .feature-icon {
            width: 64px;
            height: 64px;
            background: #dbeafe;
            color: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin: 0 auto 20px;
        }

        .feature-box h3 {
            font-size: 1.3rem;
            margin-bottom: 12px;
            color: var(--secondary);
        }

        .feature-box p {
            color: var(--text-muted);
            font-size: 0.95rem;
        }

        /* --- Footer --- */
        footer {
            background-color: var(--secondary);
            color: #94a3b8;
            padding: 80px 0 30px;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 60px;
        }

        .footer-brand .logo { color: #ffffff; }

        .footer-brand p {
            margin-top: 16px;
            max-width: 320px;
            font-size: 0.95rem;
        }

        .footer-col h4 {
            color: #ffffff;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }

        .footer-col ul li {
            margin-bottom: 12px;
        }

        .footer-col ul a {
            color: #94a3b8;
            transition: color 0.2s;
        }

        .footer-col ul a:hover {
            color: #ffffff;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #1e293b;
            font-size: 0.9rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
            .search-form {
                grid-template-columns: repeat(2, 1fr);
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 640px) {
            .hero h1 { font-size: 2.5rem; }
            .search-form { grid-template-columns: 1fr; }
            .nav-links { display: none; }
            .property-grid { grid-template-columns: 1fr; }
            .footer-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <!-- Navigation Header -->
    <header>
        <div class="container nav-wrapper">
            <a href="#" class="logo">LUXE<span>.</span></a>
            <nav class="nav-links">
                <a href="#hero">Home</a>
                <a href="#properties">Properties</a>
                <a href="#features">Why Us</a>
                <a href="#contact">Contact</a>
            </nav>
            <a href="#properties" class="btn btn-primary">
                <i class="fas fa-plus-circle"></i> Post Property
            </a>
        </div>
    </header>

    <!-- Hero Section with Search Bar -->
    <section class="hero" id="hero">
        <div class="container hero-content">
            <h1 class="serif-font">Find Your Dream Home With Confidence</h1>
            <p>Explore luxury villas, modern apartments, and prime estates tailored to your lifestyle.</p>
            
            <!-- Filter Bar -->
            <div class="search-container">
                <form class="search-form" action="#">
                    <div class="filter-group">
                        <label>Location</label>
                        <input type="text" placeholder="e.g. California, Miami">
                    </div>
                    <div class="filter-group">
                        <label>Property Type</label>
                        <select>
                            <option>All Types</option>
                            <option>Villa</option>
                            <option>Apartment</option>
                            <option>Penthouse</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Status</label>
                        <select>
                            <option>For Sale</option>
                            <option>For Rent</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Max Price</label>
                        <select>
                            <option>Any Price</option>
                            <option>$500,000</option>
                            <option>$1,000,000</option>
                            <option>$2,500,000+</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary" style="height: 45px; align-self: flex-end;">
                        <i class="fas fa-search"></i> Search
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Featured Property Listings Section -->
    <section class="properties-section" id="properties">
        <div class="container">
            <div class="section-header">
                <div>
                    <h2 class="serif-font">Featured Listings</h2>
                    <p>Handpicked properties available for buy & rent</p>
                </div>
                <a href="#" class="btn btn-outline">View All Listings <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="property-grid">
                <!-- Property Card 1 -->
                <div class="property-card">
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=800" alt="Modern Villa">
                        <span class="badge badge-sale">For Sale</span>
                        <span class="price-tag">$1,850,000</span>
                    </div>
                    <div class="property-details">
                        <div class="property-location"><i class="fas fa-map-marker-alt"></i> Beverly Hills, CA</div>
                        <h3 class="property-title">The Grand Horizon Villa</h3>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> 4 Beds</span>
                            <span><i class="fas fa-bath"></i> 3 Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> 3,800 sqft</span>
                        </div>
                    </div>
                </div>

                <!-- Property Card 2 -->
                <div class="property-card">
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" alt="Penthouse">
                        <span class="badge badge-rent">For Rent</span>
                        <span class="price-tag">$4,500 / mo</span>
                    </div>
                    <div class="property-details">
                        <div class="property-location"><i class="fas fa-map-marker-alt"></i> Brickell, Miami, FL</div>
                        <h3 class="property-title">Skyline Luxury Penthouse</h3>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> 3 Beds</span>
                            <span><i class="fas fa-bath"></i> 2 Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> 2,200 sqft</span>
                        </div>
                    </div>
                </div>

                <!-- Property Card 3 -->
                <div class="property-card">
                    <div class="property-image">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" alt="Suburban House">
                        <span class="badge badge-sale">For Sale</span>
                        <span class="price-tag">$920,000</span>
                    </div>
                    <div class="property-details">
                        <div class="property-location"><i class="fas fa-map-marker-alt"></i> Austin, TX</div>
                        <h3 class="property-title">Modern Architectural Home</h3>
                        <div class="property-features">
                            <span><i class="fas fa-bed"></i> 5 Beds</span>
                            <span><i class="fas fa-bath"></i> 4 Baths</span>
                            <span><i class="fas fa-ruler-combined"></i> 4,100 sqft</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="features-section" id="features">
        <div class="container">
            <div style="text-align: center; max-width: 600px; margin: 0 auto;">
                <h2 class="serif-font" style="font-size: 2.2rem;">Why Choose LUXE?</h2>
                <p style="color: var(--text-muted);">Providing seamless buying, selling, and renting experiences with complete transparency.</p>
            </div>

            <div class="features-grid">
                <div class="feature-box">
                    <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3>Verified Properties</h3>
                    <p>Every listing goes through a rigorous legal and structural inspection process.</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon"><i class="fas fa-user-tie"></i></div>
                    <h3>Expert Local Agents</h3>
                    <p>Our experienced agents guide you through every legal and financial step smoothly.</p>
                </div>
                <div class="feature-box">
                    <div class="feature-icon"><i class="fas fa-hand-holding-usd"></i></div>
                    <h3>Transparent Pricing</h3>
                    <p>Zero hidden commissions or unexpected fee structures during closing.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer id="contact">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="logo">LUXE<span>.</span></a>
                    <p>Connecting homebuyers with extraordinary properties through unmatched expertise and local insights.</p>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#properties">Featured Properties</a></li>
                        <li><a href="#features">Services</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Property Types</h4>
                    <ul>
                        <li><a href="#">Luxury Villas</a></li>
                        <li><a href="#">Modern Apartments</a></li>
                        <li><a href="#">Commercial Space</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><i class="fas fa-envelope"></i> info@luxerealestate.com</li>
                        <li><i class="fas fa-phone"></i> +1 (800) 123-4567</li>
                        <li><i class="fas fa-map-marker-alt"></i> 100 Wilshire Blvd, LA</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 LUXE Real Estate Platform. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("job portal")) {

demoCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CAREERHUB | Find Your Next Opportunity</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        /* Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        :root {
            --primary: #4f46e5;
            --primary-hover: #4338ca;
            --secondary: #0f172a;
            --accent-green: #10b981;
            --bg-light: #f8fafc;
            --card-white: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --border-color: #e2e8f0;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
            --shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
            --radius-md: 10px;
            --radius-lg: 16px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
            text-decoration: none;
            list-style: none;
            scroll-behavior: smooth;
        }

        body {
            background-color: var(--bg-light);
            color: var(--text-main);
            line-height: 1.6;
        }

        .container {
            max-width: 1240px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* --- Buttons --- */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            padding: 12px 24px;
            font-size: 0.95rem;
            font-weight: 600;
            border-radius: var(--radius-md);
            cursor: pointer;
            border: none;
            transition: all 0.25s ease;
        }

        .btn-primary {
            background-color: var(--primary);
            color: #ffffff;
        }

        .btn-primary:hover {
            background-color: var(--primary-hover);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(79, 70, 229, 0.25);
        }

        .btn-outline {
            background: transparent;
            border: 1px solid var(--border-color);
            color: var(--text-main);
        }

        .btn-outline:hover {
            border-color: var(--primary);
            color: var(--primary);
            background-color: #eef2ff;
        }

        /* --- Header / Navigation --- */
        header {
            position: sticky;
            top: 0;
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border-color);
            z-index: 1000;
            padding: 18px 0;
        }

        .nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.6rem;
            font-weight: 800;
            color: var(--secondary);
            letter-spacing: -0.5px;
        }

        .logo span { color: var(--primary); }

        .nav-links {
            display: flex;
            gap: 32px;
        }

        .nav-links a {
            color: var(--text-main);
            font-weight: 600;
            font-size: 0.95rem;
            transition: color 0.2s ease;
        }

        .nav-links a:hover { color: var(--primary); }

        .nav-actions {
            display: flex;
            gap: 12px;
        }

        /* --- Hero Section & Search Bar --- */
        .hero-section {
            padding: 80px 0 100px;
            background: linear-gradient(180deg, #eef2ff 0%, var(--bg-light) 100%);
            text-align: center;
        }

        .hero-content {
            max-width: 820px;
            margin: 0 auto;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 6px 16px;
            background: #e0e7ff;
            color: var(--primary);
            font-size: 0.85rem;
            font-weight: 700;
            border-radius: 50px;
            margin-bottom: 20px;
        }

        .hero-content h1 {
            font-size: 3.5rem;
            font-weight: 800;
            line-height: 1.15;
            color: var(--secondary);
            margin-bottom: 20px;
            letter-spacing: -1px;
        }

        .hero-content h1 span {
            color: var(--primary);
        }

        .hero-content p {
            font-size: 1.15rem;
            color: var(--text-muted);
            margin-bottom: 40px;
        }

        /* Search Box */
        .search-box {
            background: var(--card-white);
            padding: 12px;
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--border-color);
            display: grid;
            grid-template-columns: 1.2fr 1fr 1fr auto;
            gap: 12px;
            align-items: center;
        }

        .search-field {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 16px;
            background: var(--bg-light);
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
        }

        .search-field i {
            color: var(--primary);
            font-size: 1.1rem;
        }

        .search-field input,
        .search-field select {
            border: none;
            outline: none;
            background: transparent;
            width: 100%;
            font-size: 0.95rem;
            color: var(--text-main);
        }

        /* --- Category Pills --- */
        .categories-section {
            padding: 60px 0;
        }

        .section-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .section-header h2 {
            font-size: 2.2rem;
            color: var(--secondary);
            font-weight: 800;
            margin-bottom: 8px;
        }

        .section-header p {
            color: var(--text-muted);
            font-size: 1rem;
        }

        .category-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 20px;
        }

        .category-card {
            background: var(--card-white);
            padding: 24px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
            display: flex;
            align-items: center;
            gap: 16px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .category-card:hover {
            transform: translateY(-4px);
            border-color: var(--primary);
            box-shadow: var(--shadow-sm);
        }

        .category-icon {
            width: 50px;
            height: 50px;
            background: #eef2ff;
            color: var(--primary);
            border-radius: var(--radius-md);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }

        .category-info h3 {
            font-size: 1.1rem;
            color: var(--secondary);
            font-weight: 700;
        }

        .category-info span {
            font-size: 0.85rem;
            color: var(--text-muted);
        }

        /* --- Job Listings Grid --- */
        .jobs-section {
            padding: 40px 0 90px;
        }

        .jobs-wrapper {
            display: grid;
            grid-template-columns: 280px 1fr;
            gap: 32px;
        }

        /* Filter Sidebar */
        .filter-sidebar {
            background: var(--card-white);
            padding: 24px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
            height: fit-content;
        }

        .filter-group {
            margin-bottom: 24px;
            padding-bottom: 20px;
            border-bottom: 1px solid var(--border-color);
        }

        .filter-group:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .filter-title {
            font-size: 1rem;
            font-weight: 700;
            color: var(--secondary);
            margin-bottom: 14px;
        }

        .filter-option {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 0.9rem;
            color: var(--text-muted);
            cursor: pointer;
        }

        .filter-option input[type="checkbox"] {
            accent-color: var(--primary);
            width: 16px;
            height: 16px;
        }

        /* Job Cards List */
        .jobs-list {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .job-card {
            background: var(--card-white);
            padding: 24px;
            border-radius: var(--radius-md);
            border: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.25s ease;
            box-shadow: var(--shadow-sm);
        }

        .job-card:hover {
            border-color: var(--primary);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .company-logo {
            width: 56px;
            height: 56px;
            border-radius: var(--radius-md);
            background: var(--bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.6rem;
            color: var(--secondary);
            border: 1px solid var(--border-color);
            flex-shrink: 0;
        }

        .job-details {
            display: flex;
            gap: 20px;
            align-items: center;
        }

        .job-info h3 {
            font-size: 1.2rem;
            color: var(--secondary);
            font-weight: 700;
            margin-bottom: 4px;
        }

        .company-name {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .job-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tag {
            padding: 4px 12px;
            background: var(--bg-light);
            border: 1px solid var(--border-color);
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-muted);
        }

        .tag-type {
            background: #ecfdf5;
            color: var(--accent-green);
            border-color: #a7f3d0;
        }

        .job-action {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 12px;
        }

        .salary {
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--secondary);
        }

        .posted-time {
            font-size: 0.8rem;
            color: var(--text-muted);
        }

        /* --- Footer --- */
        footer {
            background-color: var(--secondary);
            color: #94a3b8;
            padding: 80px 0 30px;
            border-top: 1px solid var(--border-color);
        }

        .footer-grid {
            display: grid;
            grid-template-columns: 2fr repeat(3, 1fr);
            gap: 40px;
            margin-bottom: 60px;
        }

        .footer-brand .logo { color: #ffffff; }

        .footer-brand p {
            margin-top: 16px;
            max-width: 320px;
            font-size: 0.95rem;
        }

        .footer-col h4 {
            color: #ffffff;
            font-size: 1.05rem;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .footer-col ul li {
            margin-bottom: 12px;
        }

        .footer-col ul a {
            color: #94a3b8;
            transition: color 0.2s;
        }

        .footer-col ul a:hover {
            color: #ffffff;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #1e293b;
            font-size: 0.9rem;
        }

        /* --- Responsive Design --- */
        @media (max-width: 1024px) {
            .jobs-wrapper {
                grid-template-columns: 1fr;
            }
            .filter-sidebar {
                display: none;
            }
            .search-box {
                grid-template-columns: 1fr 1fr;
            }
            .footer-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        @media (max-width: 640px) {
            .hero-content h1 { font-size: 2.4rem; }
            .search-box { grid-template-columns: 1fr; }
            .nav-links { display: none; }
            .job-card {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
            }
            .job-action {
                align-items: flex-start;
                width: 100%;
                flex-direction: row;
                justify-content: space-between;
            }
            .footer-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <!-- Header Navigation -->
    <header>
        <div class="container nav-wrapper">
            <a href="#" class="logo">CAREER<span>HUB.</span></a>
            <nav class="nav-links">
                <a href="#hero">Home</a>
                <a href="#jobs">Find Jobs</a>
                <a href="#categories">Categories</a>
                <a href="#companies">Companies</a>
            </nav>
            <div class="nav-actions">
                <a href="#" class="btn btn-outline">Sign In</a>
                <a href="#" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Post a Job</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section" id="hero">
        <div class="container hero-content">
            <div class="hero-badge"><i class="fas fa-fire"></i> Over 10,000+ Active Listings</div>
            <h1>Find The Job That Fits Your <span>Life & Future</span></h1>
            <p>Connect with top tech companies, startups, and remote teams hiring world-class talent right now.</p>

            <!-- Search Form -->
            <div class="search-box">
                <div class="search-field">
                    <i class="fas fa-search"></i>
                    <input type="text" placeholder="Job title, skill, or keyword...">
                </div>
                <div class="search-field">
                    <i class="fas fa-map-marker-alt"></i>
                    <input type="text" placeholder="City or 'Remote'">
                </div>
                <div class="search-field">
                    <i class="fas fa-briefcase"></i>
                    <select>
                        <option>All Types</option>
                        <option>Full Time</option>
                        <option>Part Time</option>
                        <option>Contract</option>
                    </select>
                </div>
                <button class="btn btn-primary" style="padding: 14px 28px;">Search</button>
            </div>
        </div>
    </section>

    <!-- Popular Categories -->
    <section class="categories-section" id="categories">
        <div class="container">
            <div class="section-header">
                <h2>Explore Popular Categories</h2>
                <p>Browse open roles organized by specialized departments</p>
            </div>

            <div class="category-grid">
                <div class="category-card">
                    <div class="category-icon"><i class="fas fa-code"></i></div>
                    <div class="category-info">
                        <h3>Software Dev</h3>
                        <span>1,420 Jobs Available</span>
                    </div>
                </div>

                <div class="category-card">
                    <div class="category-icon"><i class="fas fa-palette"></i></div>
                    <div class="category-info">
                        <h3>UI/UX Design</h3>
                        <span>680 Jobs Available</span>
                    </div>
                </div>

                <div class="category-card">
                    <div class="category-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="category-info">
                        <h3>Marketing</h3>
                        <span>510 Jobs Available</span>
                    </div>
                </div>

                <div class="category-card">
                    <div class="category-icon"><i class="fas fa-database"></i></div>
                    <div class="category-info">
                        <h3>Data Science</h3>
                        <span>390 Jobs Available</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Main Job Listings Workspace -->
    <section class="jobs-section" id="jobs">
        <div class="container">
            <div class="section-header" style="text-align: left; margin-bottom: 30px;">
                <h2>Featured Openings</h2>
                <p>Handpicked career opportunities updated daily</p>
            </div>

            <div class="jobs-wrapper">
                
                <!-- Filter Sidebar -->
                <aside class="filter-sidebar">
                    <div class="filter-group">
                        <div class="filter-title">Job Type</div>
                        <label class="filter-option"><input type="checkbox" checked> Full Time</label>
                        <label class="filter-option"><input type="checkbox"> Part Time</label>
                        <label class="filter-option"><input type="checkbox" checked> Remote</label>
                        <label class="filter-option"><input type="checkbox"> Internship</label>
                    </div>

                    <div class="filter-group">
                        <div class="filter-title">Experience Level</div>
                        <label class="filter-option"><input type="checkbox"> Entry Level</label>
                        <label class="filter-option"><input type="checkbox" checked> Mid Level</label>
                        <label class="filter-option"><input type="checkbox" checked> Senior Level</label>
                    </div>

                    <div class="filter-group">
                        <div class="filter-title">Salary Range</div>
                        <label class="filter-option"><input type="checkbox"> $50k - $80k</label>
                        <label class="filter-option"><input type="checkbox" checked> $80k - $120k</label>
                        <label class="filter-option"><input type="checkbox"> $120k+</label>
                    </div>
                </aside>

                <!-- Job Cards Container -->
                <div class="jobs-list">
                    
                    <!-- Job Card 1 -->
                    <div class="job-card">
                        <div class="job-details">
                            <div class="company-logo"><i class="fab fa-google"></i></div>
                            <div class="job-info">
                                <h3>Senior Full Stack Java Engineer</h3>
                                <div class="company-name">
                                    <span>Google LLC</span> • <span>California, US (Remote)</span>
                                </div>
                                <div class="job-tags">
                                    <span class="tag tag-type">Full Time</span>
                                    <span class="tag">Java</span>
                                    <span class="tag">Spring Boot</span>
                                    <span class="tag">MySQL</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-action">
                            <span class="salary">$130,000 / yr</span>
                            <a href="#" class="btn btn-outline">Apply Now</a>
                            <span class="posted-time">2 hours ago</span>
                        </div>
                    </div>

                    <!-- Job Card 2 -->
                    <div class="job-card">
                        <div class="job-details">
                            <div class="company-logo"><i class="fab fa-spotify"></i></div>
                            <div class="job-info">
                                <h3>Product Designer (UI/UX)</h3>
                                <div class="company-name">
                                    <span>Spotify</span> • <span>New York, NY</span>
                                </div>
                                <div class="job-tags">
                                    <span class="tag tag-type">Full Time</span>
                                    <span class="tag">Figma</span>
                                    <span class="tag">Design System</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-action">
                            <span class="salary">$115,000 / yr</span>
                            <a href="#" class="btn btn-outline">Apply Now</a>
                            <span class="posted-time">5 hours ago</span>
                        </div>
                    </div>

                    <!-- Job Card 3 -->
                    <div class="job-card">
                        <div class="job-details">
                            <div class="company-logo"><i class="fab fa-amazon"></i></div>
                            <div class="job-info">
                                <h3>Cloud DevOps Specialist</h3>
                                <div class="company-name">
                                    <span>Amazon Web Services</span> • <span>Seattle, WA</span>
                                </div>
                                <div class="job-tags">
                                    <span class="tag tag-type">Full Time</span>
                                    <span class="tag">AWS</span>
                                    <span class="tag">Docker</span>
                                    <span class="tag">Kubernetes</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-action">
                            <span class="salary">$145,000 / yr</span>
                            <a href="#" class="btn btn-outline">Apply Now</a>
                            <span class="posted-time">1 day ago</span>
                        </div>
                    </div>

                    <!-- Job Card 4 -->
                    <div class="job-card">
                        <div class="job-details">
                            <div class="company-logo"><i class="fab fa-github"></i></div>
                            <div class="job-info">
                                <h3>Frontend React Developer</h3>
                                <div class="company-name">
                                    <span>GitHub</span> • <span>Remote</span>
                                </div>
                                <div class="job-tags">
                                    <span class="tag tag-type">Contract</span>
                                    <span class="tag">React</span>
                                    <span class="tag">TypeScript</span>
                                </div>
                            </div>
                        </div>
                        <div class="job-action">
                            <span class="salary">$95,000 / yr</span>
                            <a href="#" class="btn btn-outline">Apply Now</a>
                            <span class="posted-time">2 days ago</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="logo">CAREER<span>HUB.</span></a>
                    <p>Empowering professionals to build rewarding careers and helping businesses hire top-tier talent effortlessly.</p>
                </div>
                <div class="footer-col">
                    <h4>For Job Seekers</h4>
                    <ul>
                        <li><a href="#">Search Jobs</a></li>
                        <li><a href="#">Career Advice</a></li>
                        <li><a href="#">Resume Builder</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>For Employers</h4>
                    <ul>
                        <li><a href="#">Post a Job</a></li>
                        <li><a href="#">Browse Candidates</a></li>
                        <li><a href="#">Recruitment Pricing</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 CAREERHUB Platform. All rights reserved.</p>
            </div>
        </div>
    </footer>

</body>
</html>
`;

}
else if (prompt.toLowerCase().includes("landing")) {

demoCode = `
<!DOCTYPE html>
<html>
<head>
<title>Landing Page</title>

<style>

body{
font-family:Arial;
margin:0;
text-align:center;
background:#111827;
color:white;
}

.hero{
padding:100px 20px;
}

button{
padding:15px 30px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
}

</style>

</head>

<body>

<div class="hero">

<h1>Grow Your Business Faster</h1>

<p>
Launch your startup with our platform.
</p>

<button>
Get Started
</button>

</div>

</body>

</html>
`;

}

else {

  demoCode = `
<!DOCTYPE html>
<html>
<head>
<title>Generated Website</title>
</head>
<body>

<h1>AI Generated Website</h1>

<p>${prompt}</p>

</body>
</html>
`;

}

      setGeneratedCode(demoCode);

      const token = localStorage.getItem("token");

      const res = await API.post(
        "/project/save",
        {
          title,
          prompt,
          generatedCode: demoCode,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCredits(res.data.remainingCredits);

      alert(
        `Website Generated Successfully. Remaining Credits: ${res.data.remainingCredits}`
      );
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Failed to save project"
      );
    }

    setIsLoading(false);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">

  <h1 className="text-4xl font-bold mb-6">
    AI Website Builder
  </h1>

  <div className="flex gap-6">

    {/* Left Side */}

    <div className="w-1/3 bg-gray-900 p-6 rounded-lg">

      <h2 className="text-2xl font-bold mb-4">
        Enter Prompt
      </h2>

      <p className="mb-4">
        Credits Remaining: {credits}
      </p>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Create portfolio website..."
        className="w-full h-[300px] bg-gray-800 p-4 rounded-lg"
      />

      <button
        onClick={handleGenerate}
        disabled={isLoading}
        className="mt-4 w-full bg-blue-600 py-3 rounded-lg"
      >
        {isLoading
          ? "Generating..."
          : "Generate Website"}
      </button>

    </div>

    {/* Right Side */}

    <div className="flex-1 bg-gray-900 p-6 rounded-lg">

      <h2 className="text-2xl font-bold mb-4">
        Live Preview
      </h2>

      {generatedCode ?  (

        <iframe
          title="preview"
          srcDoc={generatedCode}
          className="w-full h-[700px] bg-white rounded-lg"
        />

      ) : (

        <div className="h-[700px] flex items-center justify-center text-gray-400">
          Generate a website to preview here
        </div>

      )}

    </div>

  </div>

</div>
  );
};

export default Generate;