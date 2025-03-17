import { createServer } from 'node:http';
import { handler } from './dist/server/entry.mjs';

const PORT = process.env.PORT || 8001;
const server = createServer(handler);

server.listen(PORT, () => {
	console.log(`🚀 Server running on http://localhost:${PORT}`);
});
