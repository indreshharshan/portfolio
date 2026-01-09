# 🌐 Indresh Harshan – Personal Portfolio Website

A professional and responsive personal portfolio website built to showcase my skills, projects, achievements, and experience in Artificial Intelligence, Machine Learning, and Web Development.

🔗 **Live Website:** https://portfolioindresh.vercel.app

---

## 📖 Project Description

This portfolio website acts as a digital resume and personal branding platform.  
It highlights my technical expertise, academic background, real-world projects, and achievements while providing a functional contact form for direct communication.

The project is developed using modern frontend technologies with a strong focus on performance, responsiveness, and clean UI/UX design.

---

## 🎯 Objectives of the Project

- To build a professional personal portfolio website
- To showcase projects, skills, and achievements effectively
- To create a responsive and visually appealing UI
- To integrate a working contact form without backend complexity
- To deploy a fast and scalable frontend application

---

## 🧠 Technology Stack

### Frontend
- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- Framer Motion
- React Hook Form

### Email Service
- EmailJS

### Deployment
- Vercel

---

## ✨ Key Features

- Fully responsive design (mobile, tablet, desktop)
- Clean and modern UI
- Smooth animations and transitions
- Dark mode support
- Projects and achievements showcase
- Functional contact form using EmailJS
- Optimized performance and fast loading

---

## 🗂️ Project Structure

```text
portfolio/
│
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .gitignore
├── index.html
├── package.json
└── README.md
⚙️ Environment Variables Setup

Create a .env file in the root directory and add:

VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key


Add the same values in Vercel → Project Settings → Environment Variables during deployment.

🚀 Installation & Local Setup
git clone https://github.com/indreshharshan/your-portfolio-repo.git
cd your-portfolio-repo
npm install
npm run dev

🔄 System Workflow

User visits the portfolio website

React frontend loads content and animations

User submits the contact form

EmailJS sends the message to the registered email

Message is received instantly

🔐 Security & Best Practices

Environment variables protected using .env

No sensitive keys pushed to GitHub

EmailJS public key used securely

Deployed on Vercel infrastructure

🌐 Deployment

The application is deployed using Vercel.

Steps:

Push code to GitHub

Import repository into Vercel

Add environment variables

Deploy

👨‍💻 Author

Indresh Harshan

🌐 Portfolio: https://portfolioindresh.vercel.app

🐙 GitHub: https://github.com/indreshharshan

📧 Email: indreshharshan26@gmail.com

📄 License

This project is licensed under the MIT License.

🌟 Conclusion

This portfolio website reflects my technical skills, creativity, and professionalism.
It is built using industry-standard tools and best practices, making it suitable for showcasing my profile to recruiters and collaborators.
