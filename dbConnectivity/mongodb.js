const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/anime-centre')
  .then(() => console.log('mongodb connected!'))
  .catch(()=>console.log('mongodb not connected'))
  ;