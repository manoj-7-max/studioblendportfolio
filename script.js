/* CURSOR GLOW */
document.addEventListener('mousemove',e=>{
  const g=document.getElementById('cursorGlow');
  g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';
});

/* PARTICLES */
(function(){
  const canvas=document.getElementById('particles');
  const ctx=canvas.getContext('2d');
  let W,H,pts=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  resize();window.addEventListener('resize',resize);
  for(let i=0;i<70;i++){
    pts.push({x:Math.random()*2000,y:Math.random()*1200,
      vx:(Math.random()-0.5)*0.25,vy:(Math.random()-0.5)*0.25,
      r:Math.random()*1.8+0.4,o:Math.random()*0.4+0.1});
  }
  function draw(){
    ctx.clearRect(0,0,W,H);
    pts.forEach(p=>{
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;if(p.y<0||p.y>H)p.vy*=-1;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(212,168,83,${p.o})`;ctx.fill();
    });
    pts.forEach((a,i)=>{pts.slice(i+1).forEach(b=>{
      const d=Math.hypot(a.x-b.x,a.y-b.y);
      if(d<130){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
        ctx.strokeStyle=`rgba(212,168,83,${0.08*(1-d/130)})`;ctx.lineWidth=0.6;ctx.stroke();}
    });});
    requestAnimationFrame(draw);
  }
  draw();
})();

/* SCROLL PROGRESS */
window.addEventListener('scroll',()=>{
  const s=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  document.getElementById('progress-bar').style.width=s+'%';
});

/* FADE UP */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
},{threshold:0.08});
document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));

/* CHART */
const chartObs=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    document.querySelectorAll('.chart-bar-fill').forEach((bar,i)=>{
      setTimeout(()=>{bar.style.width=bar.dataset.width;},i*180);
    });
  }
},{threshold:0.3});
const cs=document.getElementById('chartSection');if(cs)chartObs.observe(cs);

/* COUNTER */
const counterObs=new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
    document.querySelectorAll('.stat-num[data-target]').forEach(el=>{
      const target=parseInt(el.dataset.target);
      const suffix=el.dataset.suffix||'+';
      let cur=0;const step=target/50;
      const t=setInterval(()=>{
        cur=Math.min(cur+step,target);
        el.textContent=Math.floor(cur)+suffix;
        if(cur>=target)clearInterval(t);
      },30);
    });
    counterObs.disconnect();
  }
},{threshold:0.5});
const hs=document.querySelector('.hero-stats');if(hs)counterObs.observe(hs);

/* MOBILE MENU */
function toggleMenu(){
  const links=document.querySelector('.nav-links');
  const isOpen=links.style.display==='flex';
  if(isOpen){links.style.display='none';}
  else{links.style.cssText='display:flex;flex-direction:column;position:fixed;top:70px;left:0;right:0;background:rgba(8,8,8,0.98);padding:2rem;gap:1.5rem;border-bottom:1px solid rgba(212,168,83,0.15);z-index:199;';}
}
document.querySelectorAll('.nav-links a').forEach(a=>{
  a.addEventListener('click',()=>{document.querySelector('.nav-links').style.display='none';});
});

/* FAQ */
function toggleFaq(el){
  const item=el.parentElement;
  const isOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!isOpen)item.classList.add('open');
}

/* PORTFOLIO FILTER */
function filterPortfolio(cat,btn){
  document.querySelectorAll('.p-tab').forEach(t=>t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.p-card').forEach(card=>{
    const show=cat==='all'||card.dataset.cat===cat;
    card.style.display=show?'block':'none';
  });
}

/* WHATSAPP FORM */
function handleSubmit(){
  const name=document.getElementById('f-name').value.trim();
  const phone=document.getElementById('f-phone').value.trim();
  const email=document.getElementById('f-email').value.trim();
  const service=document.getElementById('f-service').value;
  const msg=document.getElementById('f-msg').value.trim();
  if(!name||!phone){alert('Please enter your name and phone number.');return;}
  const text='🌟 *New Enquiry — StudioBlend*%0A%0A'+
    '👤 *Name:* '+encodeURIComponent(name)+'%0A'+
    '📱 *Phone:* '+encodeURIComponent(phone)+'%0A'+
    '✉️ *Email:* '+encodeURIComponent(email||'Not provided')+'%0A'+
    '🛠️ *Service:* '+encodeURIComponent(service)+'%0A'+
    '💬 *Message:* '+encodeURIComponent(msg||'No message');
  window.open('https://wa.me/918610511096?text='+text,'_blank');
  const btn=document.querySelector('.btn-submit');
  btn.textContent='✓ Opening WhatsApp...';btn.style.background='#25D366';btn.style.color='#fff';
  setTimeout(()=>{btn.textContent='📲 Send via WhatsApp';btn.style.background='linear-gradient(135deg,var(--gold),var(--gold-dark))';btn.style.color='#000';},4000);
}