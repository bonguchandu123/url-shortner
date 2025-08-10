# 🔗 MERN URL Shortener

A simple and efficient **URL Shortener** built using the **MERN stack** (MongoDB, Express, React, Node.js).  
It allows users to shorten long URLs and optionally track the number of visits to each shortened link through an admin page.

---

## 📹 Demo Video
🎥 Click here to watch the project demo on Google Drive



## 🚀 Live Demo
[Click here to visit the live app](https://url-shortner-vjeq.vercel.app/)

---

## 📸 Screenshot
<img width="1902" height="869" alt="Image" src="https://github.com/user-attachments/assets/2e3adf18-d7f0-4d58-84a2-6b54af03b75d" />

---

## ✨ Features
- Shorten any valid URL.
- Redirect to the original link using a shortcode.
- **Admin-only** page:
  - View all shortened URLs.
  - See visit counts for each link.
- Responsive UI for desktop and mobile.

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Deployment:** Vercel (frontend), Render/Railway (backend)

---

## 📂 Project Structure
```
project-root/
│── backend/ # Express + MongoDB API
│── frontend/ # React app
│── README.md
```

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```
## 2️⃣ Backend Setup
```
cd backend
npm install
```

## .env
```
MONGODB_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
PORT=5000
```

## 3️⃣ Frontend Setup
```
cd ../frontend
npm install

```
