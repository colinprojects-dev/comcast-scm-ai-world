/* UTC calendar events derived from the catalog's explicitly published PDT times. */
globalThis.SCMCalendar=(()=>{
 const encode=new TextEncoder();
 const escape=v=>String(v??'').replaceAll('\\','\\\\').replace(/\r\n|\n|\r/g,'\\n').replaceAll(';','\\;').replaceAll(',','\\,');
 function fold(line){let out='',chunk='',limit=75;for(const char of line){if(encode.encode(chunk+char).length>limit){out+=chunk+'\r\n ';chunk='';limit=74;}chunk+=char;}return out+chunk;}
 const date=v=>v.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}Z$/,'Z');
 const instant=(o,n)=>date(new Date(new Date(o.dateISO+'T00:00:00Z').getTime()+(n+420)*60000));
 function create(rows,stamp=new Date()){
  const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//SCM Investment Guide//Oracle AI World 2026//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:Oracle AI World 2026 SCM planning agenda'];
  for(const r of rows){const title=r.o.sourceTitle||r.s.title,url=r.o.sourceUrl||r.s.url;lines.push('BEGIN:VEVENT','UID:'+r.key+'@scm-ai-world-guide.local','DTSTAMP:'+date(stamp),'DTSTART:'+instant(r.o,r.o.start),'DTEND:'+instant(r.o,r.o.end),'SUMMARY:'+escape(title),'LOCATION:'+escape(r.o.location),'DESCRIPTION:'+escape('Tentative planning choice, not registration. Published catalog time: '+r.o.time+'.\n'+r.s.why+'\n'+r.s.value+(r.s.closed?'\nCatalog: fully booked, registration closed. Only attend with an existing confirmed place.':'')+'\n'+url),'URL:'+url,'STATUS:TENTATIVE','TRANSP:OPAQUE','END:VEVENT');}
  lines.push('END:VCALENDAR');return lines.map(fold).join('\r\n')+'\r\n';
 }
 return{create};
})();
