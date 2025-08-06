# Portfolio Website - MERN Stack

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring dynamic content management.

## 🌟 Features

### Frontend
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Smooth theme switching with localStorage persistence
- **Animations**: Framer Motion animations throughout the interface
- **Single-Page Layout**: Smooth scroll navigation between sections
- **Interactive Components**: 3D tilt effects, hover animations, and micro-interactions

### Sections
- **Hero Section**: Typewriter animation, call-to-action buttons
- **About Section**: Circular profile image, animated skills, social links
- **Projects Section**: Interactive project cards with 3D effects
- **Contact Section**: Floating form with auto-resizing textarea

### Backend
- **RESTful API**: Complete CRUD operations
- **Security**: Helmet, rate limiting, CORS protection
- **Database**: MongoDB with Mongoose ODM
- **Validation**: Input validation and sanitization

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio-00
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   cd client && npm install
   
   # Install server dependencies
   cd ../server && npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

4. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   
   # Or start them separately:
   # Terminal 1: Start server
   cd server && npm run dev
   
   # Terminal 2: Start client
   cd client && npm start
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 📁 Project Structure

```
my-portfolio-00/
├── client/                 # React Frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── profile.jpg     # Your profile picture
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom hooks
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # Global styles
│   └── package.json
├── server/                 # Node.js Backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Custom middleware
│   ├── config/           # Configuration files
│   └── uploads/          # Uploaded images
└── package.json
```

## 🔧 Configuration

### Customization

1. **Update Personal Information**
   - Edit hero section data in the database
   - Update about section with your bio and skills
   - Add your social media links

2. **Add Projects**
   - Add your projects to the database
   - Include GitHub and live demo links

3. **Styling**
   - Modify `client/tailwind.config.js` for theme customization
   - Update colors, fonts, and animations in `client/src/styles/GlobalStyles.css`

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/portfolio |
| `NODE_ENV` | Environment mode | development |

## 🛠️ API Endpoints

### Public Endpoints
- `GET /api/hero` - Get hero section data
- `GET /api/about` - Get about section data
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Send contact message

## 🎨 Features in Detail

### Frontend Features
- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion powered animations
- **Interactive Elements**: Hover effects, 3D transforms
- **Form Validation**: Client-side validation with error handling
- **Loading States**: Skeleton loaders and loading spinners
- **Toast Notifications**: User feedback for actions

### Backend Features
- **Security**: Helmet, rate limiting, CORS
- **Validation**: Input sanitization and validation
- **Error Handling**: Comprehensive error handling
- **Database**: MongoDB with Mongoose schemas

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `build` folder to your hosting service

### Backend Deployment (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the server directory
3. Update the API URL in the client

### Database Setup
- Use MongoDB Atlas for production
- Update the `MONGODB_URI` environment variable

## 🔒 Security Considerations

- Enable HTTPS in production
- Set up proper CORS origins
- Implement rate limiting
- Validate all inputs

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository.

---

**Built with ❤️ using the MERN stack** 