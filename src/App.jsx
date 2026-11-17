import React, { useEffect, useMemo, useState } from "react";
import { routes } from "./routes";

const titles = {
"/":"Home","/start":"Choose your learning route","/know-your-body":"Know your body",
"/know-your-body/anatomy":"Reproductive anatomy","/know-your-body/menstrual-cycle":"The menstrual cycle",
"/know-your-body/hormones":"Hormones and communication","/know-your-body/metabolism":"Insulin and metabolism",
"/pcos":"Understand PCOS","/pcos/features":"Features and experiences","/pcos/diagnosis":"Diagnosis and assessment",
"/pcos/health":"Health associations","/pcos/management":"Management and support",
"/pathways/women":"Female learning path","/pathways/women/experiences":"Living with PCOS",
"/pathways/women/wellbeing":"Wellbeing and self-advocacy","/pathways/allies":"Male ally path",
"/pathways/allies/support":"How to offer support","/explore":"Learn and explore","/explore/myths":"Myths and facts",
"/explore/quiz":"Knowledge check","/explore/faqs":"Frequently asked questions","/support":"Find support",
"/support/when-to-seek-help":"When to seek help","/support/appointment":"Prepare for an appointment",
"/support/resources":"Reliable resources","/about":"About PCOS Unlocked","/about/sources":"Sources and further reading",
"/about/accessibility":"Accessibility","/about/privacy":"Privacy"
};
const descriptions = {
"/know-your-body":"Build a foundation in body literacy. Explore how reproductive anatomy, hormones, the menstrual cycle and metabolism work together.",
"/know-your-body/anatomy":"A simple introduction to the organs commonly discussed in reproductive health. Bodies vary, and this educational diagram is not a diagnostic tool.",
"/know-your-body/menstrual-cycle":"The menstrual cycle is a coordinated process involving the brain, ovaries and uterus. Cycle length and patterns vary between people.",
"/know-your-body/hormones":"Hormones are chemical messengers. They help coordinate processes across the body, including reproductive function and metabolism.",
"/know-your-body/metabolism":"Insulin helps move glucose from the bloodstream into cells. Insulin resistance can be associated with PCOS, but it is not present in every person with PCOS.",
"/pcos":"Polycystic ovary syndrome (PCOS) is a common hormonal condition that can affect reproductive, metabolic and emotional health. Experiences differ widely.",
"/pcos/features":"PCOS can involve irregular ovulation, signs of higher androgen levels and polycystic ovarian appearance on ultrasound. Not everyone experiences the same features.",
"/pcos/diagnosis":"PCOS diagnosis is a clinical process. A qualified healthcare professional considers symptoms, medical history, examination and appropriate tests while excluding other causes.",
"/pcos/health":"PCOS is associated with several longer-term health considerations. Association does not mean every person will experience these outcomes.",
"/pcos/management":"There is no single approach that suits everyone. Support may include lifestyle support, symptom-focused treatment and regular conversations with qualified clinicians.",
"/pathways/women":"Explore body literacy, PCOS, diagnosis, care and wellbeing at your own pace. You do not need to share personal health information to use this site.",
"/pathways/women/experiences":"People's experiences of PCOS are diverse. Symptoms, priorities and care needs can change over time.",
"/pathways/women/wellbeing":"Wellbeing includes physical health, emotional support, respectful care and the confidence to ask questions.",
"/pathways/allies":"PCOS is a condition that affects people with ovaries. This pathway helps friends, partners and family members become informed, respectful allies.",
"/pathways/allies/support":"Listen without judgement, avoid assumptions about appearance or fertility, and ask what kind of support is actually helpful.",
"/explore":"Explore short activities and practical explainers to strengthen your understanding of PCOS and reproductive health.",
"/explore/myths":"Misinformation can make PCOS harder to understand. Explore common statements and the evidence-informed context behind them.",
"/explore/quiz":"Check what you have learned. This is an educational knowledge check, not a symptom assessment or diagnostic quiz.",
"/explore/faqs":"Quick answers to common questions about PCOS, menstrual health and getting support.",
"/support":"Find practical next steps, questions to ask and reliable places to learn more.",
"/support/when-to-seek-help":"Consider speaking with a qualified healthcare professional if changes in your cycle, symptoms or wellbeing concern you.",
"/support/appointment":"A little preparation can help you make the most of a healthcare appointment. You can print this page or use the prompts as a guide.",
"/support/resources":"Start with trusted health organisations and peer-reviewed resources. Discuss personal questions with a qualified clinician.",
"/about":"PCOS Unlocked is an educational body-literacy project focused on clear, inclusive and evidence-informed communication in the Indian context.",
"/about/sources":"The website should make its evidence traceable. Check source dates and discuss medical decisions with qualified professionals.",
"/about/accessibility":"The experience is designed for clear reading, keyboard access, responsive layouts and reduced motion.",
"/about/privacy":"This educational experience does not need an account and should not collect sensitive health information."
};
const cards = [
["Know Your Body","Understand anatomy, hormones, the menstrual cycle and metabolism","/know-your-body"],
["Understand PCOS","Explore features, diagnosis, health and management","/pcos"],
["Female Learning Path","Explore body literacy, lived experiences and wellbeing","/pathways/women"],
["Male Ally Path","Learn how to listen, understand and support","/pathways/allies"],
["Learn & Explore","Challenge myths and check what you know","/explore"],
["Find Support","Prepare for conversations and find reliable resources","/support"]
];
function Link({to,children,className=""}){return <a className={className} href={to} onClick={e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();history.pushState({}, "",to);window.dispatchEvent(new PopStateEvent("popstate"));window.scrollTo(0,0)}}>{children}</a>}
function App(){
 const [path,setPath]=useState(location.pathname.replace(/\/$/,"")||"/");
 const [menu,setMenu]=useState(false);
 const [age,setAge]=useState(localStorage.getItem("pcos-age")||"");
 const [myth,setMyth]=useState({});
 const [answer,setAnswer]=useState("");
 useEffect(()=>{const f=()=>{setPath(location.pathname.replace(/\/$/,"")||"/");setMenu(false)};addEventListener("popstate",f);return()=>removeEventListener("popstate",f)},[]);
 const title=titles[path]||"Page not found";
 const pageLinks=routes.filter(r=>r!=="/").slice(0,12);
 const home=path==="/";
 const assetFor=path.includes("anatomy")?"reproductive-anatomy.svg":path.includes("menstrual-cycle")?"menstrual-cycle.svg":path.includes("hormones")?"hormone-communication.svg":path.includes("metabolism")?"insulin-metabolism.svg":null;
 const myths=[["PCOS always means ovarian cysts.","The name can be misleading. PCOS diagnosis is based on a combination of features; ovarian cysts are not required in every case."],["Everyone with PCOS is infertile.","PCOS can affect ovulation, but many people with PCOS conceive, with or without medical support."],["PCOS happens because someone is lazy.","PCOS is a complex hormonal and metabolic condition. Blame and stigma are not helpful or accurate."],["A 28-day cycle is the only normal cycle.","Cycle patterns vary. Persistent changes or concerns are worth discussing with a qualified professional."]];
 return <div className="app">
  <header className="header"><Link to="/" className="brand"><span className="brand-mark">P</span><span>PCOS <b>Unlocked</b><small>Understand your body. Question the myths.</small></span></Link>
   <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">☰</button>
   <nav className={menu?"nav open":"nav"}><Link to="/know-your-body">Know Your Body</Link><Link to="/pcos">Understand PCOS</Link><Link to="/explore">Learn & Explore</Link><Link to="/support">Find Support</Link><Link to="/about">About</Link></nav>
  </header>
  <main>
  {home?<><section className="hero"><div className="hero-copy"><p className="eyebrow">A BODY-LITERACY & PCOS AWARENESS SPACE</p><h1>Your body deserves <em>clear answers.</em></h1><p className="lead">Explore PCOS, hormones and reproductive health through clear explanations, interactive visuals and myth-busting guides.</p><div className="actions"><Link className="btn primary" to="/pcos">Explore PCOS <span>↗</span></Link><Link className="btn secondary" to="/start">Choose your learning route</Link></div><p className="note">No judgement. No diagnosis. Just a clearer place to begin.</p></div><div className="hero-art"><div className="orb orb1"></div><div className="orb orb2"></div><div className="art-card"><span className="art-spark">✳</span><span className="art-word">Know<br/>yourself.</span><span className="art-caption">LEARN · QUESTION · UNDERSTAND</span></div></div></section>
  <section className="section"><div className="section-head"><p className="eyebrow">START WHERE YOU ARE</p><h2>Explore the parts that matter to you.</h2><p>Move through the topics in any order. You can always come back to the basics.</p></div><div className="cards">{cards.map((c,i)=><Link to={c[2]} className="topic-card" key={c[0]}><span className="card-no">0{i+1}</span><h3>{c[0]}</h3><p>{c[1]}</p><span className="arrow">↗</span></Link>)}</div></section>
  <section className="pathway"><div><p className="eyebrow">MAKE IT YOUR JOURNEY</p><h2>Choose a learning route — or explore everything.</h2><p>Age and pathway choices are optional. They help organise the learning experience, but never limit access to information.</p></div><div className="path-buttons"><Link to="/pathways/women">Female learning path ↗</Link><Link to="/pathways/allies">Male ally path ↗</Link><Link to="/explore">Explore everything ↗</Link></div></section>
  </>:<><div className="page-top"><div className="crumb"><Link to="/">Home</Link><span>/</span><span>{title}</span></div><p className="eyebrow">PCOS UNLOCKED · LEARN AT YOUR PACE</p><h1>{title}</h1><p className="lead">{descriptions[path]||"This page is part of the PCOS Unlocked learning experience."}</p></div>
   <section className="page-content">
    {assetFor&&<div className="diagram"><img src={"/diagrams/"+assetFor} alt={"Educational illustration: "+title}/></div>}
    {path==="/start"&&<div className="cards"><Link className="topic-card" to="/pathways/women"><h3>Female Learning Path</h3><p>Explore body literacy, PCOS and wellbeing.</p></Link><Link className="topic-card" to="/pathways/allies"><h3>Male Ally Path</h3><p>Learn how to support someone with PCOS.</p></Link><Link className="topic-card" to="/explore"><h3>Explore Everything</h3><p>Browse all topics without choosing a pathway.</p></Link></div>}
    {path==="/explore/myths"&&<div className="myths">{myths.map(([q,a],i)=><button className="myth" key={q} onClick={()=>setMyth({...myth,[i]:!myth[i]})}><span>{myth[i]?"FACT":"MYTH / FACT"}</span><strong>{q}</strong><p>{myth[i]?a:"Select to reveal the evidence-informed explanation."}</p></button>)}</div>}
    {path==="/explore/quiz"&&<div className="quiz"><h2>Which statement is most accurate?</h2>{["PCOS affects everyone in exactly the same way.","PCOS can involve reproductive and metabolic features, and experiences vary.","PCOS can be diagnosed from one symptom alone."].map((v,i)=><label className="choice" key={v}><input type="radio" name="quiz" value={i} checked={answer===String(i)} onChange={e=>setAnswer(e.target.value)}/>{v}</label>)}{answer!==""&&<p className="feedback">{answer==="1"?"That's right. PCOS experiences vary, and assessment considers multiple factors.":"Not quite. The most accurate answer is that PCOS experiences vary and assessment is broader than one symptom."}</p>}</div>}
    {path==="/support/appointment"&&<div className="panel"><h2>Questions you may want to ask</h2><ul><li>What could be contributing to the symptoms or cycle changes I have noticed?</li><li>Are there other conditions that should be considered?</li><li>What tests, if any, are appropriate for my age and situation?</li><li>What options are available, and what are their benefits and limitations?</li><li>When should I follow up?</li></ul><button className="btn primary" onClick={()=>window.print()}>Print this page</button></div>}
    <div className="panel"><h2>Keep exploring</h2><p>Build your understanding one topic at a time. These pages are educational and are not a substitute for individual medical advice.</p><div className="related">{cards.slice(0,4).map(c=><Link to={c[2]} key={c[0]}>{c[0]} ↗</Link>)}</div></div>
    {path==="/about/sources"&&<div className="panel"><h2>Trusted starting points</h2><ul><li><a href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome" target="_blank" rel="noreferrer">World Health Organization — PCOS fact sheet</a></li><li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/" target="_blank" rel="noreferrer">PubMed Central — research article</a></li></ul><p>Always check publication dates and consult a qualified clinician for personal health decisions.</p></div>}
    {path==="/about/accessibility"&&<div className="panel"><h2>Designed for access</h2><ul><li>Keyboard-accessible navigation and controls.</li><li>Responsive layouts for mobile, tablet and desktop.</li><li>Clear headings, readable contrast and text alternatives for diagrams.</li><li>Reduced-motion friendly visual design.</li></ul></div>}
    {path==="/about/privacy"&&<div className="panel"><h2>Your privacy matters</h2><p>This starter website does not include login, symptom tracking, diagnosis, or collection of sensitive health information. The optional age preference is stored locally in your browser and can be cleared below.</p><button className="btn secondary" onClick={()=>{localStorage.removeItem("pcos-age");setAge("")}}>Reset age preference</button></div>}
   </section>
  </>}
  <section className="age"><div><p className="eyebrow">OPTIONAL READING PREFERENCE</p><h2>Choose an age range</h2><p>This only helps tailor reading depth. You can skip or reset it at any time.</p></div><select value={age} onChange={e=>{setAge(e.target.value);e.target.value?localStorage.setItem("pcos-age",e.target.value):localStorage.removeItem("pcos-age")}}><option value="">Skip for now</option>{["Under 18","18–21","22–25","26–30","31–35","Above 35"].map(x=><option key={x}>{x}</option>)}</select></section>
  <div className="disclaimer">PCOS Unlocked is an educational resource. It does not provide a diagnosis or replace advice from a qualified healthcare professional.</div>
  </main>
  <footer><Link to="/" className="brand foot-brand"><span className="brand-mark">P</span><span>PCOS <b>Unlocked</b><small>Understand your body. Question the myths.</small></span></Link><div className="foot-links"><Link to="/about/sources">Sources</Link><Link to="/about/accessibility">Accessibility</Link><Link to="/about/privacy">Privacy</Link></div><small>Educational project · India context</small></footer>
 </div>
}
export default App;
