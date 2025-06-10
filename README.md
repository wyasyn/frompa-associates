# FROMPA & ASSOCIATES

![FROMPA & ASSOCIATES Logo](./app//opengraph-image.webp)

A modern and professional website for **FROMPA & ASSOCIATES**, Certified Public Accountants. Built using **Next.js**, **Tailwind CSS**, and the **ShadCN Design System**, this project is designed for performance, responsiveness, and ease of deployment.

---

## 🌐 Live Site

[https://frompa-associates.vercel.app/](https://frompa-associates.vercel.app/)

---

## 🚀 Deployment Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/wyasyn/frompa-associates.git
cd frompa-associates
```

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with the following values:

```env
BASE_URL=your_official_domain
RESEND_API_KEY=get_this_key_from_resend.com
EMAIL=your-email-address
```

#### 🔐 Where to Get These:

- **BASE_URL** – The production domain where the site is deployed.
- **RESEND_API_KEY** – Get your API key from [Resend.com](https://resend.com/) after creating an account.
- **EMAIL** – The sender email address (e.g., your business email or verified email from Resend).

### 4. Run the Development Server

```bash
npm run dev
```

---

## 🐳 Docker Deployment

The project includes a Dockerfile for containerized deployment.

### 1. Create `.env.production`

Create a file named `.env.production` with the same values:

```env
BASE_URL=your_official_domain
RESEND_API_KEY=get_this_key_from_resend.com
EMAIL=your-email-address
```

### 2. Build the Docker Image

```bash
docker build -t frompa-associates .
```

### 3. Run the Docker Container

```bash
docker run -d -p 3000:3000 --env-file .env.production frompa-associates
```

Now visit `http://localhost:3000` in your browser.

---

## 📁 Project Structure

```bash
frompa-and-associates/
│
├── components/         # Reusable UI components
├── pages/              # Next.js page routes
├── public/             # Static assets (logo, images)             # Global and Tailwind styles
├── .env.example        # Example environment file
├── .env.production     # Production environment variables (not committed)
├── Dockerfile          # Docker container instructions
└── README.md           # Project documentation
```

---

## 📬 Contact

For questions, reach out via:

- 📧 Email: [ywalum@gmail.com](mailto:ywalum@gmail.com)
- 🌐 [FROMPA & ASSOCIATES Website](https://frompa-associates.vercel.app/)

---

## 🛡️ License

This project is proprietary and maintained by FROMPA & ASSOCIATES. All rights reserved.

---

Let me know if you want to automatically generate the `.env.production` or update the logo path if the image is hosted externally.
