const mongoose = require('mongoose');

async function testAtlas() {
  try {
    console.log('🔧 Testing MongoDB Atlas Connection...\n');
    
    const MONGODB_URI = 'mongodb+srv://davsis1993:DJ8lKgguUWX70xPP@cluster0.8yuqkkn.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0';
    
    console.log('Connecting to MongoDB Atlas...');
    const conn = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
    
    // Test creating a collection
    const testCollection = conn.connection.collection('test');
    await testCollection.insertOne({ test: 'connection', timestamp: new Date() });
    console.log('✅ Database write test successful');
    
    await mongoose.connection.close();
    console.log('✅ Connection closed successfully');
    
  } catch (error) {
    console.error('❌ MongoDB Atlas test failed:', error.message);
  }
}

testAtlas(); 