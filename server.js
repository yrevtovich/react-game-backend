const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/statistics', require('./routes/statistics'));

const PORT = 8000;
const mongoURI = 'mongodb+srv://yrevtovich:r8cswpdu@cluster0.aikah.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

async function start() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start();

// import logger from 'morgan';
// import cors from 'cors';
// import connect from './connect';
// import { HttpException } from './exceptions/HttpExpection';
// import authRouter from './routes/users';
// import boardRouter from './routes/boards';
// import columnRouter from './routes/columns';
// import cardsRouter from './routes/cards';

// const app: Application = express();

// app.use(logger('dev'));
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use('/api/auth', authRouter);
// app.use('/api/board', boardRouter);
// app.use('/api/column', columnRouter);
// app.use('/api/cards', cardsRouter);

// app.use((req: Request, res: Response) => {
//   res.json({
//     statusCode: 404,
//   });
// });

// app.use( (err: HttpException, req: Request, res: Response) => {
//   res.json({
//     statusCode: 500,
//     message: err.message,
//     stack: err.stack,
//   });
// });

// const uri = process.env.MONGODB_URI || 'mongodb+srv://licht:rsclone@rsclone.clvvf.mongodb.net/rsclone?retryWrites=true&w=majority';

// connect({ uri });

// export default app;