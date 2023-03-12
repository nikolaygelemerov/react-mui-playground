import express from 'express';
import path from 'path';

const server = express();

const PORT = process.env.PORT || 8090;

const staticMiddleware = express.static('dist');

server.use(staticMiddleware);

server.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'));
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
