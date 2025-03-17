import { createServer } from 'node:http';
import { handler } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 8081; // Zmieniamy port na 8081

const server = createServer(handler);

server.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
