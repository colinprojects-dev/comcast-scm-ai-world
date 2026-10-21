import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url)),port=Number(process.env.PORT||8799);
const allow=['index.html','sessions.json','catalog-ui.js','agenda-core.js','agenda.js','calendar.js','discovery.js','agenda.css','.nojekyll'];
http.createServer((req,res)=>{let p=new URL(req.url,'http://localhost').pathname;const base='/scm-ai-world/';if(p==='/scm-ai-world'){res.writeHead(302,{Location:base});res.end();return;}if(p.startsWith(base))p=p.slice(base.length-1);const name=p==='/'?'index.html':p.slice(1);if(!allow.includes(name)){res.writeHead(404);res.end('Not found');return;}res.writeHead(200,{'Content-Type':name.endsWith('.html')?'text/html; charset=utf-8':name.endsWith('.js')?'text/javascript; charset=utf-8':name.endsWith('.css')?'text/css; charset=utf-8':'application/json; charset=utf-8','Cache-Control':'no-store'});fs.createReadStream(path.join(root,name)).pipe(res);}).listen(port,'127.0.0.1',()=>console.log('SCM guide preview: http://127.0.0.1:'+port+'/ and /scm-ai-world/'));
