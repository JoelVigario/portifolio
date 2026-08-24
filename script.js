document.getElementById('year').textContent = new Date().getFullYear();

// --- language toggle ---
const btnPt = document.getElementById('btn-pt');
const btnEn = document.getElementById('btn-en');
function setLang(lang){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.classList.toggle('lang-active', el.getAttribute('data-i18n')===lang);
  });
  document.querySelectorAll('[data-i18n-block]').forEach(el=>{
    el.classList.toggle('lang-active', el.getAttribute('data-i18n-block')===lang);
  });
  btnPt.classList.toggle('active', lang==='pt');
  btnEn.classList.toggle('active', lang==='en');
  document.documentElement.lang = lang;
  roles = lang==='pt' ? rolesPt : rolesEn;
  roleIndex=0; charIndex=0; deleting=false;
  document.getElementById('role-text').textContent='';
  typeRole();
}
btnPt.addEventListener('click',()=>setLang('pt'));
btnEn.addEventListener('click',()=>setLang('en'));

// --- typewriter role text ---
const rolesPt=['Back-end Developer','Designer Gráfico','Empreendedor'];
const rolesEn=['Back-end Developer','Graphic Designer','Entrepreneur'];
let roles=rolesPt;
let roleIndex=0, charIndex=0, deleting=false;
const roleEl=document.getElementById('role-text');
let typewriterTimer=null;
function typeRole(){
  clearTimeout(typewriterTimer);
  const current=roles[roleIndex];
  if(!deleting){
    charIndex++;
    roleEl.textContent=current.slice(0,charIndex);
    if(charIndex===current.length){deleting=true;typewriterTimer=setTimeout(typeRole,1400);return;}
  } else {
    charIndex--;
    roleEl.textContent=current.slice(0,charIndex);
    if(charIndex===0){deleting=false;roleIndex=(roleIndex+1)%roles.length;}
  }
  typewriterTimer=setTimeout(typeRole, deleting?40:80);
}

setLang('pt');