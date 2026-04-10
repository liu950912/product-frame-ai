const http = require('http');
const https = require('https');

const PORT = 3001;

const server = http.createServer((req, res) => {
    // 设置CORS头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // 普通代理请求
    if (req.method === 'POST' && req.url === '/proxy') {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { url, apiKey, requestBody } = JSON.parse(body);

                console.log('Proxying request to:', url);

                const urlObj = new URL(url);
                const options = {
                    hostname: urlObj.hostname,
                    port: urlObj.port || 443,
                    path: urlObj.pathname + urlObj.search,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    }
                };

                const proxyReq = https.request(options, (proxyRes) => {
                    let data = '';

                    proxyRes.on('data', chunk => {
                        data += chunk;
                    });

                    proxyRes.on('end', () => {
                        res.writeHead(proxyRes.statusCode, {
                            'Content-Type': 'application/json'
                        });
                        res.end(data);
                    });
                });

                proxyReq.on('error', (e) => {
                    console.error('Proxy error:', e);
                    res.writeHead(500);
                    res.end(JSON.stringify({ error: e.message }));
                });

                proxyReq.write(JSON.stringify(requestBody));
                proxyReq.end();

            } catch (e) {
                console.error('Parse error:', e);
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid request body' }));
            }
        });

    } else if (req.method === 'POST' && req.url === '/stream') {
        // 流式代理请求
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { url, apiKey, requestBody } = JSON.parse(body);

                console.log('Streaming request to:', url);

                const urlObj = new URL(url);
                const options = {
                    hostname: urlObj.hostname,
                    port: urlObj.port || 443,
                    path: urlObj.pathname + urlObj.search,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${apiKey}`
                    }
                };

                const proxyReq = https.request(options, (proxyRes) => {
                    // 设置SSE响应头
                    res.writeHead(200, {
                        'Content-Type': 'text/event-stream',
                        'Cache-Control': 'no-cache',
                        'Connection': 'keep-alive'
                    });

                    proxyRes.on('data', chunk => {
                        // 直接转发数据
                        res.write(chunk);
                    });

                    proxyRes.on('end', () => {
                        res.end();
                    });
                });

                proxyReq.on('error', (e) => {
                    console.error('Stream error:', e);
                    res.write(`data: ${JSON.stringify({ error: e.message })}\n\n`);
                    res.end();
                });

                proxyReq.write(JSON.stringify(requestBody));
                proxyReq.end();

            } catch (e) {
                console.error('Parse error:', e);
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid request body' }));
            }
        });

    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`API Proxy server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop');
});
