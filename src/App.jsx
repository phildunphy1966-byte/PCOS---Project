import React, { useEffect, useMemo, useState } from "react";
import { routes } from "./routes";
import ProgressTracker from "./components/ProgressTracker";
import MythsAndFacts from "./components/MythsAndFacts";
import SearchGroundedAssistant from "./components/SearchGroundedAssistant";
import VoiceCompanion from "./components/VoiceCompanion";
import LearningInsightsChart from "./components/LearningInsightsChart";
import SymptomTracker from "./components/SymptomTracker";
import UnderstandingPcosTabular from "./components/UnderstandingPcosTabular";
import LandingPage from "./components/LandingPage";
import SupportSection from "./components/SupportSection";
import {
  SUPPORT_RESOURCES_LIST,
  URGENT_CHECKIN_SIGNS,
} from "./utils/supportGuide";
import {
  PCOS_MYTHS_AND_FACTS,
  QUIZ_QUESTIONS,
  TRACKABLE_ARTICLES,
} from "./data/learningContent";
import {
  clearProgressState,
  DEFAULT_STREAK,
  loadProgressState,
  recordDailyActivity,
  saveProgressState,
  toggleCompletedId,
} from "./utils/progress";
import {
  clearTrackerLogs,
  deleteTrackerLog,
  loadTrackerLogs,
  saveTrackerLogs,
  upsertTrackerLog,
} from "./utils/tracker";

const titles = {
"/":"PCOS Unlocked","/home":"Home","/start":"Choose your learning route","/know-your-body":"Know your body",
"/know-your-body/anatomy":"Reproductive anatomy","/know-your-body/menstrual-cycle":"The menstrual cycle",
"/know-your-body/hormones":"Hormones and communication","/know-your-body/metabolism":"Insulin and metabolism",
"/pcos":"Understand PCOS","/pcos/features":"Features and experiences","/pcos/diagnosis":"Diagnosis and assessment",
"/pcos/health":"Health associations","/pcos/management":"Management and support","/pcos/nutrition":"Nutritional tips",
"/pathways/women":"Female learning path","/pathways/women/experiences":"Living with PCOS",
"/pathways/women/wellbeing":"Wellbeing and self-advocacy","/pathways/allies":"Male ally path",
"/pathways/allies/support":"How to offer support","/myths-and-facts":"Myths and facts","/tracker":"Symptom & routine tracker","/assistant":"Ask & Talk","/explore":"Learn and explore","/explore/myths":"Myths and facts",
"/explore/quiz":"Knowledge check","/explore/faqs":"Frequently asked questions","/support":"Find support","/support/expert-advice":"Expert advice",
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
"/pcos/nutrition":"Practical nutritional tips and everyday home food swaps designed for steady energy, hormone care, and shared family meals.",
"/pathways/women":"Explore body literacy, PCOS, diagnosis, care and wellbeing at your own pace. You do not need to share personal health information to use this site.",
"/pathways/women/experiences":"People's experiences of PCOS are diverse. Symptoms, priorities and care needs can change over time.",
"/pathways/women/wellbeing":"Wellbeing includes physical health, emotional support, respectful care and the confidence to ask questions.",
"/pathways/allies":"PCOS is a condition that affects people with ovaries. This pathway helps friends, partners and family members become informed, respectful allies.",
"/pathways/allies/support":"Listen without judgement, avoid assumptions about appearance or fertility, and ask what kind of support is actually helpful.",
"/explore":"Explore short activities and practical explainers to strengthen your understanding of PCOS and reproductive health.",
"/myths-and-facts":"Misinformation can make PCOS harder to understand. Explore common statements and the evidence-informed context behind them.",
"/tracker":"Log daily mood, fatigue, cycle variations, and supportive routines like 9–10k steps, supplements, protein, sleep, and water. Review your weekly patterns privately in your browser.",
"/assistant":"Ask PCOS questions backed by live Google Search grounding, or start a real-time spoken conversation to talk through body literacy and appointment prep.",
"/explore/myths":"Misinformation can make PCOS harder to understand. Explore common statements and the evidence-informed context behind them.",
"/explore/quiz":"Check what you have learned. This is an educational knowledge check, not a symptom assessment or diagnostic quiz.",
"/explore/faqs":"Quick answers to common questions about PCOS, menstrual health and getting support.",
"/support":"Explore expert specialist advice, appointment preparation checklists, and reliable places to learn more.",
"/support/expert-advice":"Understand which healthcare specialists support PCOS care, what they focus on, and practical questions to ask at your visit.",
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
["Myths & Facts","Separate common PCOS myths from evidence-informed facts","/myths-and-facts"],
["Symptom Tracker","Log daily PCOS symptoms and supportive habits weekly","/tracker"],
["Ask & Talk","Search-grounded answers and real-time voice conversations","/assistant"],
["Find Support","Read expert specialist advice, prep for visits, and find reliable resources","/support"]
];
function pushRoute(to){history.pushState({},"",to);window.dispatchEvent(new PopStateEvent("popstate"));window.scrollTo(0,0)}
function replaceRoute(to){history.replaceState({},"",to);window.dispatchEvent(new PopStateEvent("popstate"));window.scrollTo(0,0)}
function Link({to,children,className="",onNavigate}){return <a className={className} href={to} onClick={e=>{if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();if(onNavigate){onNavigate(to)}else{pushRoute(to)}}}>{children}</a>}
function App(){
 const [path,setPath]=useState(location.pathname.replace(/\/$/,"")||"/");
 const [menu,setMenu]=useState(false);
 const [age,setAge]=useState(localStorage.getItem("pcos-age")||"");
 const [myth,setMyth]=useState({});
 const initialProgress=useMemo(()=>loadProgressState(typeof window!=="undefined"?window.localStorage:null),[]);
 const [completedArticles,setCompletedArticles]=useState(initialProgress.completedArticles);
 const [quizAnswers,setQuizAnswers]=useState(initialProgress.quizAnswers);
 const [streak,setStreak]=useState(initialProgress.streak);
 const initialTrackerLogs=useMemo(()=>loadTrackerLogs(typeof window!=="undefined"?window.localStorage:null),[]);
 const [trackerLogs,setTrackerLogs]=useState(initialTrackerLogs);
 useEffect(()=>{const f=()=>{setPath(location.pathname.replace(/\/$/,"")||"/");setMenu(false)};addEventListener("popstate",f);return()=>removeEventListener("popstate",f)},[]);
 useEffect(()=>{saveProgressState(window.localStorage,{completedArticles,quizAnswers,streak})},[completedArticles,quizAnswers,streak]);
 useEffect(()=>{saveTrackerLogs(window.localStorage,trackerLogs)},[trackerLogs]);
 const touchDailyStreak=()=>{setStreak(prev=>recordDailyActivity(prev))};
 const handleNavigate=(to)=>{if(to&&to!=="/"){touchDailyStreak()}pushRoute(to)};
 const handleToggleArticle=(articleId)=>{touchDailyStreak();setCompletedArticles(prev=>toggleCompletedId(prev,articleId))};
 const handleAnswerQuiz=(questionId,optionIndex)=>{touchDailyStreak();setQuizAnswers(prev=>({...prev,[questionId]:String(optionIndex)}))};
 const handleResetProgress=()=>{setCompletedArticles([]);setQuizAnswers({});setStreak({...DEFAULT_STREAK});clearProgressState(window.localStorage)};
 const handleSaveTrackerLog=(entry)=>{touchDailyStreak();setTrackerLogs(prev=>upsertTrackerLog(prev,entry))};
 const handleDeleteTrackerLog=(dateKey)=>{setTrackerLogs(prev=>deleteTrackerLog(prev,dateKey))};
 const handleClearTrackerLogs=()=>{setTrackerLogs([]);clearTrackerLogs(window.localStorage)};
 const title=titles[path]||"Page not found";
 const pageLinks=routes.filter(r=>r!=="/"&&r!=="/home").slice(0,12);
 const autostart=typeof window!=="undefined"&&new URLSearchParams(window.location.search).get("autostart")==="1";
 const isLanding=path==="/"&&!autostart;
 const home=path==="/home"||(path==="/"&&autostart);
 const activeArticle=TRACKABLE_ARTICLES.find(a=>a.id===path);
 const isArticleDone=activeArticle?completedArticles.includes(activeArticle.id):false;
 const assetFor=path.includes("anatomy")?"reproductive-anatomy.svg":path.includes("menstrual-cycle")?"menstrual-cycle.svg":path.includes("hormones")?"hormone-communication.svg":path.includes("metabolism")?"insulin-metabolism.svg":null;
  const isMythsPage=path==="/myths-and-facts"||path==="/explore/myths";
  if(isLanding){
   return <LandingPage onAutoEnter={()=>replaceRoute("/home")} onEnter={()=>handleNavigate("/home")} onNavigate={handleNavigate}/>;
  }
  return <div className="app">
   <header className="header"><Link to="/home" className="brand" onNavigate={handleNavigate}><span className="brand-mark">P</span><span>PCOS <b>Unlocked</b><small>Understand your body. Question the myths.</small></span></Link>
    <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">☰</button>
    <nav className={menu?"nav open":"nav"}><Link to="/know-your-body" onNavigate={handleNavigate}>Know Your Body</Link><Link to="/pcos" onNavigate={handleNavigate}>Understand PCOS</Link><Link to="/myths-and-facts" onNavigate={handleNavigate}>Myths & Facts</Link><Link to="/tracker" onNavigate={handleNavigate}>Symptom Tracker</Link><Link to="/assistant" onNavigate={handleNavigate}>Ask & Talk</Link><Link to="/explore" onNavigate={handleNavigate}>Learn & Explore</Link><Link to="/support" onNavigate={handleNavigate}>Find Support</Link><Link to="/about" onNavigate={handleNavigate}>About</Link></nav>
   </header>
   <main>
   {home?<><section className="hero"><div className="hero-copy"><p className="eyebrow">A BODY-LITERACY & PCOS AWARENESS SPACE</p><h1>Your body deserves <em>clear answers.</em></h1><p className="lead">Explore PCOS, hormones and reproductive health through clear explanations, interactive visuals and myth-busting guides.</p><div className="actions"><Link className="btn primary" to="/pcos" onNavigate={handleNavigate}>Explore PCOS <span>↗</span></Link><Link className="btn secondary" to="/tracker" onNavigate={handleNavigate}>Track Symptoms & Habits</Link><Link className="btn secondary" to="/assistant" onNavigate={handleNavigate}>Ask & Talk with AI</Link></div><p className="note">No judgement. No diagnosis. Just a clearer place to begin.</p></div><div className="hero-art"><div className="orb orb1"></div><div className="orb orb2"></div><div className="art-card"><span className="art-spark">✳</span><span className="art-word">Know<br/>yourself.</span><span className="art-caption">LEARN · QUESTION · UNDERSTAND</span></div></div></section>
   <section className="section"><div className="section-head"><p className="eyebrow">START WHERE YOU ARE</p><h2>Explore the parts that matter to you.</h2><p>Move through the topics in any order. You can always come back to the basics.</p></div><div className="cards">{cards.slice(0,6).map((c,i)=><Link to={c[2]} className="topic-card" key={c[0]} onNavigate={handleNavigate}><span className="card-no">0{i+1}</span><h3>{c[0]}</h3><p>{c[1]}</p><span className="arrow">↗</span></Link>)}</div></section>
   <section className="section pcos-tabular-section" id="understand-pcos"><UnderstandingPcosTabular key="home-pcos" defaultTab="managing" onInteract={touchDailyStreak} onNavigate={handleNavigate}/></section>
   <section className="section progress-section"><ProgressTracker articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} streak={streak} onToggleArticle={handleToggleArticle} onResetProgress={handleResetProgress} onNavigate={handleNavigate}/><LearningInsightsChart articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} mythsAndFacts={PCOS_MYTHS_AND_FACTS} defaultView="progress" onInteract={touchDailyStreak}/></section>
   <section className="pathway"><div><p className="eyebrow">MAKE IT YOUR JOURNEY</p><h2>Choose a learning route — or explore everything.</h2><p>Age and pathway choices are optional. They help organise the learning experience, but never limit access to information.</p></div><div className="path-buttons"><Link to="/pathways/women" onNavigate={handleNavigate}>Female learning path ↗</Link><Link to="/pathways/allies" onNavigate={handleNavigate}>Male ally path ↗</Link><Link to="/tracker" onNavigate={handleNavigate}>Symptom & routine tracker ↗</Link><Link to="/assistant" onNavigate={handleNavigate}>Ask & Talk (Search & Voice) ↗</Link></div></section>
   </>:<><div className="page-top"><div className="crumb"><Link to="/home" onNavigate={handleNavigate}>Home</Link><span>/</span><span>{title}</span></div><p className="eyebrow">PCOS UNLOCKED · LEARN AT YOUR PACE</p><h1>{title}</h1><p className="lead">{descriptions[path]||"This page is part of the PCOS Unlocked learning experience."}</p></div>
    <section className="page-content">
     {assetFor&&<div className="diagram"><img src={"/diagrams/"+assetFor} alt={"Educational illustration: "+title}/></div>}
     {activeArticle&&<div className="article-complete-bar"><div><strong>{isArticleDone?"Article marked as completed":"Finished reading this guide?"}</strong><p>{isArticleDone?"This topic counts toward your reading progress.":"Mark this article complete to update your progress percentage."}</p></div><button type="button" className={isArticleDone?"btn secondary":"btn primary"} onClick={()=>handleToggleArticle(activeArticle.id)}>{isArticleDone?"Completed ✓ (Undo)":"Mark as completed"}</button></div>}
     {activeArticle&&<ProgressTracker articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} streak={streak} onToggleArticle={handleToggleArticle} onResetProgress={handleResetProgress} onNavigate={handleNavigate} defaultMode="articles" compact/>}
     {path==="/start"&&<div className="cards"><Link className="topic-card" to="/pathways/women" onNavigate={handleNavigate}><h3>Female Learning Path</h3><p>Explore body literacy, PCOS and wellbeing.</p></Link><Link className="topic-card" to="/pathways/allies" onNavigate={handleNavigate}><h3>Male Ally Path</h3><p>Learn how to support someone with PCOS.</p></Link><Link className="topic-card" to="/explore" onNavigate={handleNavigate}><h3>Explore Everything</h3><p>Browse all topics without choosing a pathway.</p></Link></div>}
     {path==="/explore"&&<><div className="cards"><Link className="topic-card" to="/myths-and-facts" onNavigate={handleNavigate}><span className="card-no">01</span><h3>Myths & Facts</h3><p>Challenge common PCOS misconceptions with evidence-informed context.</p><span className="arrow">↗</span></Link><Link className="topic-card" to="/tracker" onNavigate={handleNavigate}><span className="card-no">02</span><h3>Symptom Tracker</h3><p>Log daily mood, fatigue, cycle variations, and supportive routines weekly.</p><span className="arrow">↗</span></Link><Link className="topic-card" to="/assistant" onNavigate={handleNavigate}><span className="card-no">03</span><h3>Ask & Talk</h3><p>Look up evidence with Google Search or start a real-time voice chat.</p><span className="arrow">↗</span></Link><Link className="topic-card" to="/explore/quiz" onNavigate={handleNavigate}><span className="card-no">04</span><h3>Knowledge Check</h3><p>Test your understanding with four short multiple-choice questions.</p><span className="arrow">↗</span></Link><Link className="topic-card" to="/explore/faqs" onNavigate={handleNavigate}><span className="card-no">05</span><h3>FAQs</h3><p>Quick answers to common questions about PCOS and getting support.</p><span className="arrow">↗</span></Link></div><ProgressTracker articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} streak={streak} onToggleArticle={handleToggleArticle} onResetProgress={handleResetProgress} onNavigate={handleNavigate}/><LearningInsightsChart articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} mythsAndFacts={PCOS_MYTHS_AND_FACTS} defaultView="progress" onInteract={touchDailyStreak}/></>}
     {path==="/pcos"&&<UnderstandingPcosTabular key="pcos-overview" defaultTab="overview" onInteract={touchDailyStreak} onNavigate={handleNavigate}/>}
     {path==="/pcos/management"&&<UnderstandingPcosTabular key="pcos-managing" defaultTab="managing" onInteract={touchDailyStreak} onNavigate={handleNavigate}/>}
     {path==="/pcos/nutrition"&&<UnderstandingPcosTabular key="pcos-nutrition" defaultTab="nutrition" onInteract={touchDailyStreak} onNavigate={handleNavigate}/>}
     {path==="/tracker"&&<SymptomTracker logs={trackerLogs} onSaveLog={handleSaveTrackerLog} onDeleteLog={handleDeleteTrackerLog} onClearLogs={handleClearTrackerLogs}/>}
     {path==="/assistant"&&<div className="ai-hub"><SearchGroundedAssistant ageRange={age} onInteract={touchDailyStreak}/><VoiceCompanion onInteract={touchDailyStreak}/></div>}
     {isMythsPage&&<><MythsAndFacts items={PCOS_MYTHS_AND_FACTS} onInteract={touchDailyStreak}/><LearningInsightsChart articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} mythsAndFacts={PCOS_MYTHS_AND_FACTS} defaultView="topics" onInteract={touchDailyStreak}/><SearchGroundedAssistant ageRange={age} onInteract={touchDailyStreak}/></>}
     {path==="/explore/quiz"&&<div className="quiz-stack"><ProgressTracker articles={TRACKABLE_ARTICLES} questions={QUIZ_QUESTIONS} completedArticles={completedArticles} quizAnswers={quizAnswers} streak={streak} onToggleArticle={handleToggleArticle} onResetProgress={handleResetProgress} onNavigate={handleNavigate} defaultMode="quiz" compact/>{QUIZ_QUESTIONS.map((q,qIdx)=>{const selected=quizAnswers[q.id]??"";return <div className="quiz" key={q.id}><p className="eyebrow">QUESTION {qIdx+1} OF {QUIZ_QUESTIONS.length}</p><h2>{q.prompt}</h2>{q.options.map((v,i)=><label className="choice" key={v}><input type="radio" name={`quiz-${q.id}`} value={i} checked={selected===String(i)} onChange={e=>handleAnswerQuiz(q.id,e.target.value)}/>{v}</label>)}{selected!==""&&<p className="feedback">{Number(selected)===q.correctIndex?q.correctFeedback:q.incorrectFeedback}</p>}</div>})}</div>}
     {(path==="/support"||path==="/support/expert-advice")&&<SupportSection onInteract={touchDailyStreak} onNavigate={handleNavigate}/>}
     {path==="/support/when-to-seek-help"&&<div className="panel"><h2>When to check in promptly with a doctor</h2><ul>{URGENT_CHECKIN_SIGNS.map(sign=><li key={sign}>{sign}</li>)}</ul><div className="actions"><Link className="btn primary" to="/support" onNavigate={handleNavigate}>Read Expert Specialist Advice →</Link><Link className="btn secondary" to="/support/appointment" onNavigate={handleNavigate}>Prepare Appointment Questions</Link></div></div>}
     {path==="/support/resources"&&<div className="panel"><h2>Trusted starting points</h2><ul>{SUPPORT_RESOURCES_LIST.map(res=><li key={res.url}><a href={res.url} target="_blank" rel="noreferrer"><strong>{res.title}</strong></a> — {res.summary}</li>)}</ul><div className="actions"><Link className="btn primary" to="/support" onNavigate={handleNavigate}>Explore Expert Advice →</Link></div></div>}
    {path==="/support/appointment"&&<div className="panel"><h2>Questions you may want to ask</h2><ul><li>What could be contributing to the symptoms or cycle changes I have noticed?</li><li>Are there other conditions that should be considered?</li><li>What tests, if any, are appropriate for my age and situation?</li><li>What options are available, and what are their benefits and limitations?</li><li>When should I follow up?</li></ul><button className="btn primary" onClick={()=>window.print()}>Print this page</button></div>}
    <div className="panel"><h2>Keep exploring</h2><p>Build your understanding one topic at a time. These pages are educational and are not a substitute for individual medical advice.</p><div className="related">{cards.slice(0,4).map(c=><Link to={c[2]} key={c[0]}>{c[0]} ↗</Link>)}</div></div>
    {path==="/about/sources"&&<div className="panel"><h2>Trusted starting points</h2><ul><li><a href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome" target="_blank" rel="noreferrer">World Health Organization — PCOS fact sheet</a></li><li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9826643/" target="_blank" rel="noreferrer">PubMed Central — research article</a></li></ul><p>Always check publication dates and consult a qualified clinician for personal health decisions.</p></div>}
    {path==="/about/accessibility"&&<div className="panel"><h2>Designed for access</h2><ul><li>Keyboard-accessible navigation and controls.</li><li>Responsive layouts for mobile, tablet and desktop.</li><li>Clear headings, readable contrast and text alternatives for diagrams.</li><li>Reduced-motion friendly visual design.</li></ul></div>}
    {path==="/about/privacy"&&<div className="panel"><h2>Your privacy matters</h2><p>This website does not require an account or upload personal health information to a database. Optional age, learning progress, and daily symptom logs are stored locally in your browser and can be cleared below.</p><div className="actions"><button className="btn secondary" onClick={()=>{localStorage.removeItem("pcos-age");setAge("")}}>Reset age preference</button><button className="btn secondary" onClick={handleResetProgress}>Reset learning progress</button><button className="btn secondary" onClick={handleClearTrackerLogs}>Clear symptom logs</button></div></div>}
   </section>
  </>}
  <section className="age"><div><p className="eyebrow">OPTIONAL READING PREFERENCE</p><h2>Choose an age range</h2><p>This only helps tailor reading depth. You can skip or reset it at any time.</p></div><select value={age} onChange={e=>{setAge(e.target.value);e.target.value?localStorage.setItem("pcos-age",e.target.value):localStorage.removeItem("pcos-age")}}><option value="">Skip for now</option>{["Under 18","18–21","22–25","26–30","31–35","Above 35"].map(x=><option key={x}>{x}</option>)}</select></section>
  <div className="disclaimer">PCOS Unlocked is an educational resource. It does not provide a diagnosis or replace advice from a qualified healthcare professional.</div>
  </main>
  <footer><Link to="/home" className="brand foot-brand"><span className="brand-mark">P</span><span>PCOS <b>Unlocked</b><small>Understand your body. Question the myths.</small></span></Link><div className="foot-links"><Link to="/about/sources">Sources</Link><Link to="/about/accessibility">Accessibility</Link><Link to="/about/privacy">Privacy</Link></div><small>Educational project · India context</small></footer>
 </div>
}
export default App;
