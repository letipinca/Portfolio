/* Case-study content for the Portfolio detail views.
   Block types:
     { h: "heading" }
     { p: "paragraph" }
     { html: "trusted inline markup" }
     { gallery: [ { src, alt } ] }
     { v: { id, caption } }                     -> placeholder frame
     { v: { src, alt, caption, crop } }         -> real image
   descriptor : one context line shown under the title (small, light)
   subtitle   : optional italic line under the title
   brands[]   : rendered as "Name. Name. Name." under the descriptor (no label) */
window.DETAIL_CONTENT = {
  nespresso: {
    banner: "Business Intelligence & Strategic Reasoning",
    title: "Brand Repositioning & Omnichannels Strategy: Nespresso",
    type: "Academic Project",
    projectDate: "Apr 2025",
    descriptor: "Brand repositioning — Premium FMCG — Consumer research",
    pdfs: [],
    keywords: [
      "Brand repositioning for Gen Z acquisition",
      "Market Research & Strategic Frameworks",
      "Primary qualitative research (Nespresso CRC, Sion 2023)",
      "Sustainability communication strategy",
      "Omnichannel consumer journey mapping"
    ],
    brands: ["Nespresso", "Lavazza", "Illy", "Dolce Gusto"],
    blocks: [
      { h: "The Brief & Problem Space" },
      { p: "Nespresso holds an undisputed leadership position in the premium single-serve coffee market, present in over 80 countries with a distribution model built on exclusivity and aspirational brand equity. Yet beneath this apparent strength lies a structural risk: an ageing active customer base increasingly at odds with the brand's long-term growth ambitions." },
      { p: "This project was initiated following a direct visit to Nespresso's Customer Relations Centre in Sion, Switzerland (October 2023), during which brand representatives identified three strategic priorities (premium image maintenance, future market vision, and innovation) and explicitly acknowledged the urgency of acquiring younger consumers. This primary qualitative insight formed the foundation of the subsequent strategic analysis." },
      { p: "The central challenge: how does a luxury-positioned brand attract consumers aged 18–30, who are financially constrained yet aspirationally aligned, without diluting the premium equity that defines it?" },
      { h: "Rationale & Strategic Methodology" },
      { p: "To map the full competitive and contextual landscape, I applied a layered analytical framework: PESTEL to identify macro-environmental forces shaping consumer behaviour (particularly the accelerating relevance of sustainability as a purchasing driver), Porter's Five Forces to assess competitive pressure following Nespresso's patent expiration, a 4P Marketing Mix audit to surface distribution and communication gaps, and a SWOT synthesis to prioritise the most actionable strategic levers." },
      { p: "Three key insights emerged from this analysis:" },
      { p: "First, Nespresso's selective distribution model, its greatest brand asset, simultaneously acts as an acquisition barrier for younger consumers who have lower spontaneous brand encounter rates. Second, sustainability communication, while strategically important, risks generating anxiety and disengagement among the very demographic Nespresso is trying to reach, a phenomenon I identified as \"sustainability fatigue.\" Third, the dominant cultural shift away from hustle culture toward slow living and self-care rituals creates an underexploited brand alignment opportunity for a product that is, at its core, a daily ritual." },
      { v: { src: "img/Nespresso 1.png", alt: "Positioning map plotting Nespresso against competitors on Brand Premium-ness and Gen Z Accessibility", narrow: true, caption: "Visual 1. The Positioning Map: a two-axis map plotting Nespresso against competitors (Lavazza, Illy, Dolce Gusto, private-label capsules) on Brand Premium-ness (vertical) and Gen Z Accessibility (horizontal)." } },
      { h: "Proposed Solution & Core Strategy" },
      { p: "The strategy rests on two integrated pillars:" },
      { p: "Pillar 1: Reframe the ritual, not the product. Rather than repositioning Nespresso as a \"younger\" brand (which would risk alienating its existing base), the proposed campaign reframes the consumption moment itself. The creative concept, internally defined as La Coccola (The Comfort Ritual), positions Nespresso as the anchor of a slow, intentional daily routine: the antithesis of hustle culture. This is communicated through organic product placement with lifestyle content creators across Instagram and TikTok, prioritising ambient authenticity over direct sponsorship formats." },
      { p: "Pillar 2: Make sustainability invisible by making it unconditional. The #MadeWithLoveNespresso initiative removes the cognitive burden of sustainability from the purchase decision entirely. A QR code placed on all packaging, replacing the generic \"Made in [country]\" label, gives sustainability-conscious consumers on-demand access to the brand's full environmental commitments, while leaving the core experience uninterrupted for consumers who don't wish to engage with that layer. The strategic premise: Nespresso's target consumer has already chosen to invest in quality. The message becomes \"sustainability has already been handled for you\", a shift from obligation to trust." },
      { v: { src: "img/Nespresso 2.png", alt: "The Two-Pillar Strategy Map for Nespresso, Reframe the Ritual and Make Sustainability Unconditional", narrow: true, caption: "Visual 2. The Two-Pillar Strategy Map: Pillar 1 (Reframe the Ritual): target, channels, content format, tone of voice. Pillar 2 (Make Sustainability Unconditional): QR code mechanic, key message, associated KPI." } },
      { h: "Success Metrics & Business Impact" },
      { p: "The effectiveness of this strategy would be measured across three dimensions: acquisition (new customer registrations in the 18–30 demographic, tracked via boutique visits and digital sign-ups post-campaign), engagement (TikTok and Instagram organic reach and save rate among target age cohort, benchmarked against category average), and brand perception (Net Promoter Score shift among younger segments, measured through pre/post campaign surveys at Nespresso Boutiques)." },
      { p: "A secondary indicator: QR code scan rate as a proxy for sustainability engagement depth, distinguishing passive brand trust from active environmental interest." },
      { h: "What I Would Do Differently Today" },
      { html: '<p class="detail__hsub">A September 2026 Retrospective</p>' },
      { p: "Revisiting this project, two gaps stand out. The social media strategy, while directionally sound, lacks competitive benchmarking: at the time I did not systematically analyse how comparable premium FMCG brands (Nespresso's true competitive set in terms of brand positioning, not just product category) were activating Gen Z acquisition. I would now build that layer first, before proposing channels or formats." },
      { p: "More substantially, I underestimated the distribution dimension of the Gen Z acquisition problem. The real barrier is not communication; it is trial. A younger consumer who has never entered a Nespresso Boutique has no experiential entry point into the brand. Today, I would complement the content strategy with a dedicated trial architecture: pop-up experiences embedded in contexts already inhabited by the target demographic (university campuses, co-working spaces, boutique gyms), designed to generate first-touch brand encounters outside the traditional retail environment. The content strategy would then function as amplification of real-world experience, not as a substitute for it." }
    ]
  },

  socialite: {
    banner: "Business Intelligence & Strategic Reasoning",
    title: "Scaling Without Dilution, a Strategic Growth Roadmap for The Socialite Family",
    type: "Academic Project",
    descriptor: "Growth strategy — DNVB scaling — Operations design",
    projectDate: "Jun 2026",
    pdfs: [{ url: "files/the-socialite-family-strategic-plan.pdf", label: "Download PDF" }],
    keywords: [
      "DNVB scalability strategy",
      "Ecosystem Orchestration",
      "Supply Chain & Operations",
      "Change Management Frameworks",
      "24-month phased implementation roadmap"
    ],
    brands: ["The Socialite Family"],
    blocks: [
      { h: "The Brief & Problem Space" },
      { p: "The Socialite Family is a French Digitally Native Vertical Brand (DNVB) operating in the €51 billion European premium home furnishings sector. Since pivoting from a design publication to a direct-to-consumer label in 2017, the brand has built an organic community of over 300,000 followers at near-zero customer acquisition cost, a frontend performance that most funded competitors cannot replicate." },
      { p: "Yet this commercial strength conceals a structural paradox: the same artisan-centric supply model that generates premium brand equity actively limits scalable growth. Sourcing from a fragmented network of small-batch European craft workshops imposes rigid manufacturing ceilings, while outsourced white-glove logistics expose high-ticket deliveries to transit damage that directly erodes brand trust. Simultaneously, the brand's expanding B2B commercial architecture pipeline, a high-margin growth lever, is slowed by manual, consumer-facing administrative workflows designed for D2C, not corporate clients." },
      { p: "The central challenge: how does a premium scale-up resolve its backend constraints without industrialising the artisan core that justifies its pricing?" },
      { h: "Rationale & Strategic Methodology" },
      { p: "Cost leadership is structurally incompatible with The Socialite Family's market position. Any attempt to compete on scale against mass-market furniture conglomerates would require capital investments that destroy the brand's differentiated equity. The strategic guardrail is therefore Porter's Differentiation Focus: all operational decisions must protect, not compromise, the premium niche positioning." },
      { p: "To achieve capital-efficient scalability within this constraint, the strategy is built on Jacobides' Ecosystem Orchestration model: rather than owning manufacturing or logistics infrastructure, The Socialite Family acts as a digital anchor coordinating independent craft workshops, outsourced fulfillment, and a B2B client ecosystem through targeted information architecture. The key insight is that the scalability paradox is not a production problem; it is an information asymmetry problem. Solving information flow resolves supply chain friction without touching the artisan production rhythm that defines the brand." },
      { p: "Implementation architecture was structured using the McKinsey 7S Framework to ensure hard structural updates aligned with the brand's soft cultural attributes, and Kotter's change model to manage adoption resistance from heritage artisan partners who typically reject complex institutional platforms." },
      { h: "Proposed Solution & Core Strategy: The Three Pillars" },
      { p: "Pillar 1: The Artisan Capacity Network. A lightweight mobile-accessible extranet shares real-time community engagement data directly with craft workshops, generating predictive capacity forecasts eight weeks ahead of purchase orders. Artisans pre-arrange raw materials based on demand signals, eliminating intermediate inventory costs without imposing production quotas. Critically, a permanent parallel testing protocol allocates a minor pipeline percentage to limited capsule collections with newly scouted workshops, constructing a vetted supply reserve that can absorb sudden demand scaling without disrupting consolidated partners." },
      { p: "Pillar 2: The Atelier Co-Lab. An asynchronous B2B digital workspace enables commercial architects and interior designers to upload project moodboards, 3D files, and customisation annotations before any human consultation. Background automation handles VAT validation, lead logging, and pro-forma drafting, reclaiming operational hours that internal teams reinvest into high-empathy, one-on-one design consulting. The model expands B2B market share without expanding headcount, and without diluting the boutique relational culture that retains premium clients." },
      { p: "Pillar 3: Predictive Care & SLA Trust. High-ticket logistics are restructured from reactive outsourcing to a data-driven compliance model: carrier networks are held to strict Service Level Agreements benchmarked against transit error rates (target: Damage/Km < 0.5%). Custom high-density eco-protective packaging, developed internally and embedded at the point of artisan origin, structurally reduces damage frequency before items enter external transit. Any delay triggers an automated \"Empathy Care\" protocol, proactively managing client expectations and protecting B2B timelines." },
      { v: { src: "img/TSF 1.png", alt: "The Socialite Family three-horizon implementation roadmap with KPIs, targets, and estimated costs", narrow: true, caption: "Visual. The Three-Horizon Roadmap: KPIs, targets, and estimated cost per phase across the 24-month implementation." } },
      { h: "Implementation Timeline & Success Metrics" },
      { p: "The roadmap deploys across three sequential horizons over 24 months: Horizon 1 (Months 1–6), Operational Stabilisation: Artisan Extranet pilot with five consolidated workshops; packaging R&D and custom mold production; logistics SLA baseline establishment. Horizon 2 (Months 7–14), Ecosystem Scaling: Atelier Co-Lab B2B platform launch; preliminary project phase automation; full logistics data infrastructure deployment. Horizon 3 (Months 15–24), Full Orchestration: continuous supplier scouting and capsule collection validation; complete frontend-backend data integration; ecosystem ROI analytics." },
      { p: "Performance is measured across four dimensions: operational (40% reduction in manual B2B administrative labour by Month 12), logistical (Damage/Km < 0.5% within the first six months), commercial (+15% B2B pipeline conversion rate by Month 14), and strategic (consolidated reserve bench of validated new artisan partners by Month 24)." },
      { h: "What I Would Do Differently Today" },
      { html: '<p class="detail__hsub">A September 2026 Retrospective</p>' },
      { p: "The strategy's central thesis, that the scalability paradox is an information problem, not a production problem, still holds. What I would strengthen is the financial modelling layer. The roadmap identifies KPIs but does not quantify the revenue impact of resolving each bottleneck. Specifically: what is the estimated annual revenue unlocked by a 15% increase in B2B conversion rate, given the brand's current €5-10M turnover? What is the cost of a single high-ticket transit damage incident expressed as a percentage of item margin? Building a simple contribution model around these figures would have transformed the proposal from strategically rigorous to financially investable, the language that matters most to a brand owner or growth investor evaluating whether to fund the roadmap." },
      { p: "I would also have pushed harder on the B2B pricing strategy. The Atelier Co-Lab enables premium service differentiation for commercial architects, but the strategy does not explore whether this enhanced service justifies a B2B pricing premium above standard D2C margins. That gap represents potentially the most valuable untested commercial lever in the entire proposal." }
    ]
  },

  evt: {
    banner: "Business Intelligence & Strategic Reasoning",
    title: "EVT Limited — Capital Efficiency & Operational Transformation",
    type: "Academic Project",
    descriptor: "Financial analysis — Asset-heavy hospitality — Capital efficiency",
    projectDate: "Apr 2026",
    pdfs: [{ url: "files/evt-limited-capital-efficiency.pdf", label: "Download PDF" }],
    keywords: [
      "DCF financial modelling (18-year horizon)",
      "WACC and CAPM calculation",
      "Balanced Scorecard analysis",
      "Competitive benchmarking (EVT vs. SiteMinder)",
      "Operational automation strategy",
      "Human capital re-deployment framework",
      "Business case development and feasibility analysis"
    ],
    brands: ["EVT Limited", "SiteMinder", "citizenM", "QC Terme"],
    blocks: [
      { h: "The Brief & Problem Space" },
      { p: "EVT Limited is Australia's largest integrated hospitality and leisure group (cinema, hotels, entertainment) built on a $2.59 billion asset base that generates a net profit margin of only 2.67% and a return on equity of 3.51%. The gap between EBITDA strength (23.73%) and net profit is not a revenue problem. It is a structural cost problem: depreciation-heavy fixed assets and a labour-intensive administrative model that hasn't evolved alongside the group's premium brand positioning." },
      { p: "The question this business case addresses: how does an asset-heavy premium operator expand margins without divesting the physical assets that define its competitive advantage?" },
      { h: "Rationale & Strategic Methodology" },
      { p: "Three investment paths were evaluated against EVT's financial reality and brand constraints. Digital transformation (reducing OTA dependency) was necessary but insufficient as a primary margin driver. Asset-light transition (divesting properties) would resolve the depreciation drag but destroy the operational autonomy that makes QT Hotels and Rydges premium; ceding control to third-party landlords introduces brand erosion risk that outweighs the financial benefit." },
      { p: "The recommended path, Operational Excellence and Integrated Automation, was selected for a specific reason: it addresses the cost structure without touching the asset base. A Balanced Scorecard analysis confirmed the causal chain: weakness in the Internal Business Perspective (high asset maintenance costs, manual administrative labour) was directly suppressing Financial Perspective outcomes. Fixing the internal process layer was the highest-leverage intervention available." },
      { p: "Financial modelling used a CAPM-derived WACC of 7.50% (Beta 1.02, Rf 4.00%, ERP 6.00%, after-tax cost of debt 4.55%) applied to an 18-year DCF horizon, with explicit savings ramp assumptions: 10% in Year 1 (pilot phase), 20% in Year 2, 30% from Year 3 as automation scales across the portfolio." },
      { p: "A comparative benchmarking exercise against SiteMinder, an asset-light hospitality technology competitor, provided the efficiency gap quantification: EVT's Asset Turnover stands at 0.48 vs. SiteMinder's 1.74, illustrating the structural penalty EVT pays for ownership without optimisation." },
      { h: "Proposed Solution & Core Strategy" },
      { p: "Project EVT Evolution rests on a strategic paradox: automating to humanize. The initiative does not reduce the human presence in EVT's premium environments; it elevates it by removing administrative burden from the guest journey and redirecting human attention toward emotionally resonant experiences." },
      { p: "Two concepts operate in tandem. First, the automation of friction points: manual check-ins, ticket processing, billing coordination, and energy management are classified as Obsolete processes (high labour cost, zero guest experience contribution) and systematically replaced by smart kiosks, IoT keyless entry, AI-managed energy grids, and a proprietary EVT App integrated across hotels and cinemas." },
      { p: "Second, human capital re-deployment: staff freed from Obsolete roles are transitioned into Exceptional functions that machines cannot replicate. A Hybrid Role model allows staff to split their week between system management and creative hospitality: Yoga instructors, artisan baristas, resident DJs, bespoke event coordinators, outdoor adventure coaches at Thredbo. A dedicated Talent Evolution Team conducts Talent Mapping across all properties to identify hidden competencies before any external hiring." },
      { p: "The cultural precedent is validated by QC Terme and CitizenM, both premium operators who have demonstrated that digital efficiency and luxury hospitality are structurally compatible, not contradictory." },
      { h: "Implementation Timeline" },
      { p: "The roadmap deploys across five phases over four-plus years. Phase 1 (Months 1–6) establishes tech stack and Hybrid Role frameworks. Phase 2 (Months 7–12) pilots smart check-ins across five flagship locations with simultaneous EVT Academy enrolment. Phase 3 (Months 13–24) scales re-skilling and formalises Hybrid Role contracts. Phase 4 (Year 3) completes portfolio-wide technology rollout. Phase 5 (Year 4+) enters continuous optimisation: annual Talent Mapping refresh, balance calibration between tech efficiency and human connection." },
      { p: "The IRR figure reflects the asymmetry between a modest initial outlay and compounding annual savings against a low hurdle rate; the 2-year payback period is the most operationally meaningful indicator. NPV remains robustly positive under conservative sensitivity variants on savings ramp and revenue growth assumptions." },
      { h: "What I Would Do Differently Today" },
      { html: '<p class="detail__hsub">A September 2026 Retrospective</p>' },
      { p: "Two gaps are clear in retrospect. The DCF assumptions, particularly the staff savings ramp rate and the 40% benchmark staff cost figure, deserved more explicit sourcing and documentation. For a business case aimed at institutional investors, assumption transparency is as important as the NPV figure itself: a well-documented input table makes the model independently verifiable rather than requiring reverse-engineering from outputs." },
      { p: "Second, the implementation plan would benefit from per-phase financial staging, each phase carrying its own projected cost outlay, savings unlocked, and cumulative payback progress. This would demonstrate that EVT can self-fund later phases from earlier-phase savings, making the case for internal financing rather than external capital raise. For an asset-heavy group managing institutional ROE expectations, that distinction matters." },
      { v: { src: "img/EVT Limited 2.png", alt: "EVT Limited Balanced Business Scorecard mapping Financial, Customer, Internal Business, and Innovation & Learning perspectives", narrow: true, caption: "Visual. The EVT Limited Balanced Business Scorecard: objectives and current status across the Financial, Customer, Internal Business, and Innovation & Learning perspectives." } },
      { v: { src: "img/EVT Limited 1.png", alt: "Dual-axis chart comparing EVT Limited and SiteMinder across five benchmarking indicators", narrow: true, caption: "Visual. A dual-axis chart comparing EVT and SiteMinder across five benchmarking indicators (Net Profit Margin, EBITDA Margin, ROE, Asset Turnover, Working Capital/Revenue)." } }
    ]
  },

  artofless: {
    banner: "Editorial Intelligence & Brand Narrative",
    title: "THE ART OF LESS",
    subtitle: "How Restraint Is Redefining Luxury Hospitality",
    descriptor: "Trend forecasting — Luxury hospitality — Market intelligence — 2026",
    pdfs: [{ url: "files/the-art-of-less-slow-luxury-trend-report.pdf", label: "Download PDF" }],
    keywords: [
      "Trend Forecasting & Intelligence",
      "Luxury Hospitality Strategy",
      "Luxury hospitality competitive landscape analysis",
      "Editorial long-form writing",
      "Market Research & Benchmarking"
    ],
    brands: ["Zannier Hotels", "Bürgenstock Resort", "Castelfalfi", "Le Barn", "Four Seasons", "Aman"],
    blocks: [
      { p: "The most coveted hotel experiences of 2026 share one counterintuitive feature: they actively resist being photographed, reviewed, or optimised. This is not an aesthetic preference. It is a structural market shift… and it is accelerating." },
      { p: "This report argues that Slow Luxury is a strategic orientation built on three operative dimensions — Deliberate Friction, Temporal Exclusivity, and Territorial Rootedness — that, when applied with rigour, produce a more defensible competitive position than any amenity programme or loyalty scheme can offer." },
      { p: "The evidence is structural. Luxury hotels are the only segment posting positive RevPAR growth. Wellness tourism is projected to nearly triple by 2035. The number one motivation for luxury travel in 2026 is rest; not status, not experience accumulation, not destination novelty." },
      { p: "Four properties illustrate each dimension: Zannier Hotels, Bürgenstock Resort, Castelfalfi, and Le Barn. The report also maps the strategic tensions that make this model difficult for boutique operators to adopt, and identifies three forward signals that suggest where the segment is heading in the next three to five years." },
      { p: "The conclusion is direct: the most defensible competitive position in boutique luxury hospitality today is not what you offer. It is what you choose not to offer, not to communicate, and not to optimise." },
      { v: { src: "img/download (3).jpeg", alt: "", maxWidth: 480 } },
      { html: '<p class="detail__cta"><em>Read the full report &rarr; <a href="files/the-art-of-less-slow-luxury-trend-report.pdf" target="_blank" rel="noopener">Open the PDF</a></em></p>' },
      { html: '<p class="detail__cta"><em>Available for brand intelligence commissions and editorial advisory. &rarr; <a href="#contact" data-detail-contact>Contact</a></em></p>' }
    ]
  },

  undresscode: {
    banner: "Editorial Intelligence & Brand Narrative",
    title: "UNDRESS CODE — INSTAGRAM CONTENT AUDIT",
    subtitle: "@undresscode, June–August 2026",
    descriptor: "Social content audit — Fashion & intimates — Brand voice — 2026",
    pdfs: [
      { url: "files/social-content-audit-undresscode.pdf", label: "Download PDF" },
      { url: "files/social-content-audit-presentation-undresscode.pdf", label: "Download slide deck" }
    ],
    keywords: [
      "Instagram content performance analysis",
      "Verbatim caption analysis and copy framework development",
      "Visual system audit",
      "Engagement data interpretation",
      "Strategic content recommendations",
      "Copy alternatives and brand voice development",
      "Quantitative Competitor Benchmarking"
    ],
    brands: ["Undress Code", "Love Stories Intimates", "Cou Cou Intimates"],
    blocks: [
      { p: "Undress Code is stocked at Harrods, Galeries Lafayette, and Revolve. It has 187,000 Instagram followers and organic celebrity wear from figures at the scale of Taylor Swift. Its product credibility is not in question." },
      { p: "This audit asks a different question: is the Instagram communication earning the same authority as the distribution and the product already have?" },
      { p: "Sixty days of content reviewed. Five real captions analysed verbatim. Top performer identified at 1,441 likes, and the structural characteristics that produced it mapped into a replicable content logic." },
      { p: "The central finding is not a failure but a frontier. The brand is navigating the transition from instinctive brand-building to intentional brand architecture. Four observations and four immediately implementable proposals address that transition; without additional budget, without changing the visual identity, without asking the brand to be something it is not." },
      { p: "One sentence from the audit that the account is not yet writing, but could:" },
      { html: '<p class="detail__pull">&ldquo;There is a specific kind of confidence that comes from knowing no one else can see what you are wearing. This is what we make for.&rdquo;</p>' },
      { gallery: [
        { src: "img/imm 5.jpeg", alt: "" },
        { src: "img/imm 12.jpeg", alt: "" },
        { src: "img/imm 13.jpeg", alt: "" }
      ] },
      { html: '<p class="detail__cta"><em>Read the full audit &rarr; <a href="files/social-content-audit-presentation-undresscode.pdf" target="_blank" rel="noopener">Open the presentation</a></em></p>' },
      { html: '<p class="detail__cta"><em>Full written report &rarr; <a href="files/social-content-audit-undresscode.pdf" target="_blank" rel="noopener">Open the PDF</a></em></p>' }
    ]
  }
};
