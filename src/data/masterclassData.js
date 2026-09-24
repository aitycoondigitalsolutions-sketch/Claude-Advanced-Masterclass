export const CURRICULUM_DATA = [
  {
    hour: "01",
    time: "00:00 - 01:00 EST",
    title: "Modern LLM Stack, Structured Schemas & Function Calling",
    badge: "The Mental Models & Mechanics",
    demoTag: "Live Demo: Structured Extraction Engine",
    topics: [
      {
        title: "Context Windows & Token Economics",
        desc: "How frontier models (Gemini, Claude 3.5, GPT-4o) compute attention, pricing trade-offs, and context cache optimization."
      },
      {
        title: "Structured Outputs & JSON Schema",
        desc: "Guaranteeing 100% type-safe JSON returns for database ingestion, API contracts, and downstream workflows."
      },
      {
        title: "Advanced Prompt Architectures",
        desc: "Chain-of-Thought, System Personas, Few-Shot Dynamic Prompt Injection, and eliminating prompt drift."
      },
      {
        title: "Hands-on Exercise",
        desc: "Build a zero-hallucination structured PDF invoice extraction pipeline in 20 minutes."
      }
    ]
  },
  {
    hour: "02",
    time: "01:00 - 02:00 EST",
    title: "Autonomous Agents, ReAct Loops & Tool Orchestration",
    badge: "Giving LLMs Hands and Memory",
    demoTag: "Live Demo: Autonomous Research Swarm",
    isCore: true,
    topics: [
      {
        title: "The ReAct Framework From Scratch",
        desc: "Implementing Thought → Action → Observation loops in TypeScript/Python without bloated external libraries."
      },
      {
        title: "Tool Calling & Sandboxed Execution",
        desc: "Granting agents web search, database querying, and code execution capabilities securely with strict guardrails."
      },
      {
        title: "Multi-Agent Swarms & Subagents",
        desc: "Coordinating specialized subagents (Researcher + Critic + Synthesizer) with supervisor trees."
      },
      {
        title: "Hands-on Exercise",
        desc: "Build an Autonomous Market Research Agent that crawls live web data and generates executive briefs."
      }
    ]
  },
  {
    hour: "03",
    time: "02:00 - 03:00 EST",
    title: "Production RAG, Guardrails & Live Deployment",
    badge: "Shipping to Real Users",
    demoTag: "Live Demo: Production API Deployment",
    topics: [
      {
        title: "Enterprise RAG Architecture",
        desc: "Hybrid search (BM25 keyword + dense embeddings), reciprocal rank fusion, and cross-encoder re-ranking."
      },
      {
        title: "Model Selection & Local LLMs",
        desc: "When to use cloud APIs vs local Ollama / Llama 3 for data privacy and zero API bills."
      },
      {
        title: "Streaming Responses & Web UI",
        desc: "Wrapping your agent loop in an SSE (Server-Sent Events) fast streaming interface with Next.js/Vite."
      },
      {
        title: "Live Open Q&A Session",
        desc: "Bring your real company projects or startup ideas for live architectural critique and debugging."
      }
    ]
  }
];

export const PROJECTS_DATA = [
  {
    id: "researcher",
    title: "Autonomous Web Researcher Agent",
    tagline: "PROJECT 01 • AUTONOMOUS AGENT",
    desc: "An intelligent autonomous agent equipped with search, web scraping, and semantic synthesis tools. Given a broad prompt like 'Analyze top 5 competitors in AI developer tools', it decomposes tasks, crawls pages, synthesizes sources, and outputs an executive Markdown report with cited links.",
    stack: ["TypeScript", "Cheerio / Puppeteer", "Claude 3.5 API", "Structured JSON Schema"],
    codeSnippet: `// ReAct Loop Executor:
const researchAgent = new Agent({
  model: "claude-3-5-sonnet",
  tools: [webSearchTool, pageScraperTool, markdownCompiler],
  systemPrompt: "You are an autonomous research analyst. Verify all claims."
});

const report = await researchAgent.run({
  task: "Synthesize 2026 AI Agent market dynamics and cost reduction strategies."
});`
  },
  {
    id: "rag",
    title: "Enterprise Multi-Document RAG Engine",
    tagline: "PROJECT 02 • PRODUCTION RAG",
    desc: "A production-grade Retrieval-Augmented Generation pipeline built to handle thousands of messy PDFs, Notion docs, and SQL databases without hallucinations. Features hybrid BM25 + dense vector embeddings and a cross-encoder re-ranker for 99.4% factual accuracy.",
    stack: ["Python", "pgvector / Qdrant", "Cohere Re-ranker", "FastEmbed"],
    codeSnippet: `# Hybrid Dense + Keyword Retrieval
def retrieve_and_rerank(user_query: str, top_k: int = 5):
    dense_results = vector_db.similarity_search(user_query, k=20)
    bm25_results = keyword_index.search(user_query, k=20)
    merged = reciprocal_rank_fusion(dense_results, bm25_results)
    
    # Cross-encoder eliminates hallucinations
    final_chunks = cross_encoder.rank(query=user_query, docs=merged)[:top_k]
    return generate_grounded_answer(user_query, final_chunks)`
  },
  {
    id: "reviewer",
    title: "Automated Code Review & Bug Hunting Agent",
    tagline: "PROJECT 03 • WORKFLOW AUTOMATION",
    desc: "An automated GitHub PR reviewer that clones pull requests, statically analyzes changes, identifies subtle security flaws and performance regressions, generates corrected diffs, and posts review comments directly to GitHub.",
    stack: ["Node.js", "Octokit (GitHub API)", "Tree-sitter", "Local Llama 3 / Ollama"],
    codeSnippet: `// Automated GitHub Review Webhook Hook
export async function onPullRequestReceived(event: PREvent) {
  const diff = await fetchPRDiff(event.pullNumber);
  const astAnalysis = parseAST(diff.changedFiles);
  
  const reviewAgent = new CodeReviewAgent({ maxDiffTokens: 16000 });
  const review = await reviewAgent.analyze(diff, astAnalysis);
  
  if (review.hasHighRiskVulnerabilities) {
    await postPRComment(event.pullNumber, review.generateFixMarkdown());
  }
}`
  }
];

export const BONUSES_DATA = [
  {
    title: "4 Production GitHub Starter Repos",
    value: "$299 Value",
    desc: "Clean, modular, fully typed starter kits for TypeScript and Python. Preconfigured with vector DB connectors, tool wrappers, and CI/CD pipelines.",
    benefit: "Full Commercial License Included",
    iconName: "FolderGit2"
  },
  {
    title: "2026 AI Agent Architecture Blueprint",
    value: "$199 Value",
    desc: "High-resolution system diagrams, decision trees (When to use RAG vs Fine-Tuning vs Context), and cost optimization flowcharts.",
    benefit: "PDF + Figma Source Files",
    iconName: "FileText"
  },
  {
    title: "Lifetime HD Recording + Timestamps",
    value: "$249 Value",
    desc: "Can't make it live? Every registrant gets unlimited lifetime access to 4K recording, searchable video transcripts, and code commit history.",
    benefit: "Delivered within 6 hours of live call",
    iconName: "Video"
  },
  {
    title: "Private AI Builders Discord Community",
    value: "$250 Value",
    desc: "Join 1,200+ senior engineers, founders, and AI practitioners. Share architecture reviews, troubleshoot bugs, and discover high-paying contracts.",
    benefit: "1-Year Access Included",
    iconName: "MessagesSquare"
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: "I spent three weeks struggling through confusing LangChain and LlamaIndex documentation. In Hour 2 of this masterclass, the ReAct loop finally clicked. The starter repo alone saved our startup at least a month of engineering time.",
    name: "David K.",
    role: "Senior Full-Stack Engineer at FinTech Corp",
    initials: "DK",
    badgeColor: "bg-purple-500/20 text-purple-300"
  },
  {
    quote: "The density of information in 3 hours is unmatched. No fluff, no endless introductory talk about 'what is artificial intelligence'. We were building tool-calling functions within the first 25 minutes. Worth 10x the ticket price.",
    name: "Sarah L.",
    role: "Founding Engineer at YC S23 Startup",
    initials: "SL",
    badgeColor: "bg-cyan-500/20 text-cyan-300",
    isFeatured: true
  },
  {
    quote: "As a Product Manager trying to evaluate vendor claims, this gave me the exact technical literacy I needed. I can now properly spec AI features and understand token latency, evaluation frameworks, and agent guardrails.",
    name: "Michael R.",
    role: "Lead AI Product Manager",
    initials: "MR",
    badgeColor: "bg-emerald-500/20 text-emerald-400"
  }
];

export const PRICING_DATA = [
  {
    id: "general",
    name: "General Access Pass",
    tierLabel: "Standard",
    price: 49,
    originalPrice: 149,
    discount: "Save 67%",
    description: "Perfect for engineers who want to join live, ask questions, and learn the fundamentals.",
    features: [
      "Live 3-Hour Interactive Masterclass",
      "Live Chat Q&A Participation",
      "14-Day Access to HD Recording",
      "Core Code Samples & Exercise Files"
    ],
    buttonText: "Choose General Pass",
    isFeatured: false
  },
  {
    id: "vip",
    name: "VIP All-Access Pass",
    tierLabel: "VIP All-Access",
    price: 99,
    originalPrice: 299,
    discount: "Save 67%",
    description: "Complete career acceleration package with source repos, community, and lifetime access.",
    features: [
      "Everything in General Pass, plus:",
      "Lifetime HD Recording Replay with transcripts",
      "All 4 Production GitHub Starter Repos + Updates",
      "2026 AI Architecture Blueprint & Prompt Vault ($300 value)",
      "1-Year Private Builders Discord Community Access",
      "Official Masterclass Completion Certificate",
      "Priority live Q&A queue with the instructor"
    ],
    buttonText: "Claim VIP All-Access Seat",
    isFeatured: true
  },
  {
    id: "team",
    name: "Team Pack (5 Seats)",
    tierLabel: "Corporate / Team",
    price: 349,
    originalPrice: 899,
    discount: "Save 61%",
    description: "Upskill your entire engineering or product team in one afternoon.",
    features: [
      "5x VIP All-Access Passes for your team",
      "Private 30-Min Architecture Consultation call for your team's project",
      "Commercial team repo licensing",
      "Direct corporate invoice & expense documentation"
    ],
    buttonText: "Choose Team Pack",
    isFeatured: false
  }
];

export const FAQ_DATA = [
  {
    question: "What if I can't attend live at the scheduled time?",
    answer: "No problem at all! Every registered attendee receives access to the full high-definition recording, searchable transcripts, slides, and all GitHub starter code within 6 hours after the live session finishes. You can watch at your own pace anytime."
  },
  {
    question: "What are the technical prerequisites?",
    answer: "Basic familiarity with either JavaScript/TypeScript or Python is helpful, but you do NOT need prior AI/ML experience or a math degree. We explain architectures visually from first principles and provide plug-and-play templates."
  },
  {
    question: "Do I need expensive GPU setups or API credits?",
    answer: "No expensive hardware is needed! All code runs on standard laptops (Mac, Windows, or Linux). We show you how to use free API tiers, lightweight local models using Ollama, or cost-efficient endpoints that cost pennies to run."
  },
  {
    question: "Can I get this expensed through my employer's learning budget?",
    answer: "Yes! Most companies allow employees to expense professional development courses. As soon as you sign up, you'll receive a detailed PDF invoice and receipt suitable for corporate reimbursement."
  },
  {
    question: "How does the 30-day money back guarantee work?",
    answer: "We are 100% confident in the value of this masterclass. If you attend or watch the recording and decide it didn't deliver tremendous value, simply email us within 30 days and we'll issue a full refund to your original payment method. No questions asked."
  }
];

export const SOCIAL_ATTENDEES = [
  { name: "Elena R. from Berlin", action: "Just reserved a VIP Pass", time: "1 min ago" },
  { name: "Liam T. from Austin", action: "Claimed General Admission", time: "3 mins ago" },
  { name: "Carlos M. from San Francisco", action: "Booked Team Pack (5 Seats)", time: "6 mins ago" },
  { name: "Priya S. from Bangalore", action: "Just reserved a VIP Pass", time: "8 mins ago" }
];
