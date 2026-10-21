import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.dirname(fileURLToPath(import.meta.url));
const data=JSON.parse(await fs.readFile(path.join(root,'sessions.json'),'utf8'));
const html=(await fs.readFile(path.join(root,'layout.html'),'utf8')).replace('@@DATA@@',JSON.stringify(data).replaceAll('<','\\u003c'));
await fs.writeFile(path.join(root,'index.html'),html);
console.log('Built static SCM guide from inspected catalog data; no catalog retrieval.');
