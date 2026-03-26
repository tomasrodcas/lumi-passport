export interface SessionFeedback {
  session: number;
  score: number;
  whatWentWell: string;
  areasForImprovement: string;
}

export interface EvidenceItem {
  id: string;
  title: string;
  type: "document" | "video" | "image";
  color: "green" | "purple" | "blue";
  thumbnailUrl?: string;
}

export interface SubSkill {
  id: string;
  name: string;
  score: number;
  description: string;
  sessions: SessionFeedback[];
  evidence: EvidenceItem[];
}

export interface SkillCategory {
  id: string;
  name: string;
  score: number;
  maxScore: number;
  subSkills: SubSkill[];
}

export interface Innovation {
  id: string;
  title: string;
  completedDate: string;
  tags: string[];
  sprintTitle?: string;
  subtitle?: string;
  problem?: string;
  solution?: string;
}

export interface CertificateDetail {
  logoOrg: string;
  certTitle: string;
  courseName: string;
  signatories: { name: string; role: string }[];
  dateIssued: string;
}

export interface Certification {
  id: string;
  title: string;
  recipientName: string;
  detail: CertificateDetail;
}

export interface Quest {
  id: string;
  name: string;
}

export interface RubricEntry {
  score: number;
  description: string;
}

export interface QuestData {
  skillCategories: SkillCategory[];
  certifications: Certification[];
  innovations: Innovation[];
}

export interface UserData {
  name: string;
  title: string;
  description: string;
  lumiInfoText: string[];
  quests: Quest[];
  selectedQuestId: string;
  rubric: RubricEntry[];
  questData: Record<string, QuestData>;
}

const defaultEvidence: EvidenceItem[] = [
  { id: "ev-1", title: "Empathy Map", type: "document", color: "green", thumbnailUrl: "/images/evidence-existing-solutions.png" },
  { id: "ev-2", title: "Design Doc", type: "document", color: "purple", thumbnailUrl: "/images/evidence-user-testing.png" },
  { id: "ev-3", title: "Session Notes", type: "document", color: "green", thumbnailUrl: "/images/evidence-existing-solutions.png" },
  { id: "ev-4", title: "User Research", type: "document", color: "blue", thumbnailUrl: "/images/evidence-user-testing.png" },
  { id: "ev-5", title: "Specifications", type: "document", color: "purple", thumbnailUrl: "/images/evidence-existing-solutions.png" },
  { id: "ev-6", title: "Observations", type: "video", color: "blue", thumbnailUrl: "/images/evidence-user-testing.png" },
];

const quest1Data: QuestData = {
  skillCategories: [
    {
      id: "augmented-intelligence",
      name: "Augmented Intelligence",
      score: 2,
      maxScore: 5,
      subSkills: [
        {
          id: "human-ai-collaboration",
          name: "Human-AI Collaboration",
          score: 2.9,
          description:
            "Getting the best of both human judgement and machine capability.",
          sessions: [
            { session: 1, score: 1.5, whatWentWell: "Showed initial awareness of AI tools and their potential applications.", areasForImprovement: "Needs to explore more AI tools and understand their capabilities." },
            { session: 2, score: 2.0, whatWentWell: "Started using AI tools for basic research tasks.", areasForImprovement: "Should integrate AI outputs more systematically into workflow." },
            { session: 3, score: 2.2, whatWentWell: "Compared human analysis with AI-generated insights effectively.", areasForImprovement: "Could better articulate when to rely on AI vs human judgment." },
            { session: 4, score: 2.5, whatWentWell: "Demonstrated improved ability to combine AI suggestions with personal expertise.", areasForImprovement: "Work on documenting the decision-making process when using AI assistance." },
            { session: 5, score: 2.8, whatWentWell: "Applied AI tools strategically to augment problem-solving process.", areasForImprovement: "Continue developing frameworks for human-AI task allocation." },
            { session: 6, score: 3.0, whatWentWell: "You asked insightful questions to clarify product scope. You identified essential specification elements clearly.", areasForImprovement: "You could document any AI trial or feedback loops. You could connect AI attributions to practical tasks." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.7,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessions: [
            { session: 1, score: 1.2, whatWentWell: "Attempted to use AI prompts for the first time.", areasForImprovement: "Prompts were too vague to get useful results." },
            { session: 2, score: 1.8, whatWentWell: "Improved prompt clarity by adding context to requests.", areasForImprovement: "Should practice structuring prompts with specific constraints." },
            { session: 3, score: 2.1, whatWentWell: "Used examples within prompts to guide AI output.", areasForImprovement: "Explore few-shot prompting and role-based prompts." },
            { session: 4, score: 2.4, whatWentWell: "Developed more targeted prompts with clear output format expectations.", areasForImprovement: "Experiment with chain-of-thought prompting strategies." },
            { session: 5, score: 2.7, whatWentWell: "Demonstrated basic ability to formulate prompts for AI tools.", areasForImprovement: "Practice writing more structured and detailed prompts to get higher quality results." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.0,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessions: [
            { session: 1, score: 1.0, whatWentWell: "Recognized that AI systems make decisions that need explanation.", areasForImprovement: "Needs fundamental understanding of how AI models work." },
            { session: 2, score: 1.4, whatWentWell: "Asked questions about why AI produced certain outputs.", areasForImprovement: "Should learn about common AI explanation techniques." },
            { session: 3, score: 1.7, whatWentWell: "Started evaluating AI outputs for logical consistency.", areasForImprovement: "Work on communicating AI reasoning to non-technical peers." },
            { session: 4, score: 2.0, whatWentWell: "Showed awareness that AI explanations matter for trust and adoption.", areasForImprovement: "Develop deeper understanding of how to evaluate and communicate AI reasoning to stakeholders." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.2,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessions: [
            { session: 1, score: 1.3, whatWentWell: "Acknowledged the importance of ethics in technology.", areasForImprovement: "Needs to understand specific ethical risks of AI systems." },
            { session: 2, score: 1.6, whatWentWell: "Identified potential bias in a sample AI output.", areasForImprovement: "Should study frameworks for ethical AI evaluation." },
            { session: 3, score: 1.9, whatWentWell: "Raised concerns about data privacy in an AI workflow.", areasForImprovement: "Develop practical methods for assessing ethical risks." },
            { session: 4, score: 2.2, whatWentWell: "Recognized the importance of ethical considerations in AI deployment.", areasForImprovement: "Build a practical framework for identifying and mitigating ethical risks in AI applications." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
    {
      id: "durable-skills",
      name: "Durable Skills",
      score: 3,
      maxScore: 5,
      subSkills: [
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 2.8,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Demonstrated willingness to question assumptions.", areasForImprovement: "Needs more structured approach to analyzing information." },
            { session: 2, score: 2.1, whatWentWell: "Applied logical reasoning to evaluate competing claims.", areasForImprovement: "Should consider alternative perspectives more systematically." },
            { session: 3, score: 2.4, whatWentWell: "Identified key assumptions underlying a proposed solution.", areasForImprovement: "Practice evaluating evidence quality and source reliability." },
            { session: 4, score: 2.6, whatWentWell: "Asked relevant questions and challenged assumptions during problem-solving.", areasForImprovement: "Strengthen ability to evaluate evidence and consider alternative perspectives systematically." },
            { session: 5, score: 2.8, whatWentWell: "Demonstrated improved analytical rigor in evaluating solutions.", areasForImprovement: "Continue building frameworks for systematic critical analysis." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "design-thinking",
          name: "Design Thinking",
          score: 4.7,
          description:
            "Applying human-centered design processes to solve complex problems creatively.",
          sessions: [
            { session: 1, score: 3.5, whatWentWell: "Showed natural empathy for user needs during ideation.", areasForImprovement: "Should formalize the design thinking process steps." },
            { session: 2, score: 3.9, whatWentWell: "Created effective empathy maps that captured user pain points.", areasForImprovement: "Work on rapid prototyping skills." },
            { session: 3, score: 4.2, whatWentWell: "Led a successful ideation session with divergent thinking.", areasForImprovement: "Practice converging ideas into testable prototypes faster." },
            { session: 4, score: 4.5, whatWentWell: "Built and tested a prototype that addressed core user needs.", areasForImprovement: "Refine iteration speed between testing and redesign." },
            { session: 5, score: 4.7, whatWentWell: "Demonstrated strong empathy mapping and ideation skills during the design sprint.", areasForImprovement: "Continue refining prototyping speed and testing methodologies." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "resilience-agility",
          name: "Resilience & Agility",
          score: 2.1,
          description:
            "Bouncing back from setbacks and adapting quickly to changing circumstances.",
          sessions: [
            { session: 1, score: 1.2, whatWentWell: "Persisted with the task despite initial difficulties.", areasForImprovement: "Needs strategies for managing frustration during setbacks." },
            { session: 2, score: 1.5, whatWentWell: "Recovered from a failed approach and tried a new direction.", areasForImprovement: "Should develop faster pivot strategies." },
            { session: 3, score: 1.8, whatWentWell: "Showed willingness to try again after initial approach did not work.", areasForImprovement: "Build greater comfort with ambiguity and develop strategies for rapid pivoting." },
            { session: 4, score: 2.1, whatWentWell: "Adapted approach mid-task when requirements changed.", areasForImprovement: "Practice maintaining momentum through uncertainty." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "empathy",
          name: "Empathy",
          score: 3.5,
          description:
            "Understanding and sharing the feelings and perspectives of others.",
          sessions: [
            { session: 1, score: 2.5, whatWentWell: "Listened attentively to teammates during discussions.", areasForImprovement: "Should practice articulating others' perspectives." },
            { session: 2, score: 2.8, whatWentWell: "Recognized emotional cues during team collaboration.", areasForImprovement: "Work on responding constructively to different viewpoints." },
            { session: 3, score: 3.1, whatWentWell: "Incorporated user feedback to improve proposed solutions.", areasForImprovement: "Practice perspective-taking in cross-functional settings." },
            { session: 4, score: 3.3, whatWentWell: "Actively listened to team members and considered diverse viewpoints.", areasForImprovement: "Practice deeper perspective-taking in cross-functional collaboration." },
            { session: 5, score: 3.5, whatWentWell: "Demonstrated strong empathy in stakeholder interviews.", areasForImprovement: "Continue developing empathy as a leadership skill." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "entrepreneurial-mindset",
          name: "Entrepreneurial Mindset",
          score: 2.4,
          description:
            "Identifying opportunities, taking calculated risks, and driving innovation.",
          sessions: [
            { session: 1, score: 1.4, whatWentWell: "Showed curiosity about exploring new approaches.", areasForImprovement: "Needs to develop initiative in proposing solutions." },
            { session: 2, score: 1.7, whatWentWell: "Identified a potential opportunity during brainstorming.", areasForImprovement: "Should practice evaluating risk vs reward for new ideas." },
            { session: 3, score: 2.0, whatWentWell: "Proposed a novel solution to a team challenge.", areasForImprovement: "Work on validating ideas before committing resources." },
            { session: 4, score: 2.4, whatWentWell: "Showed interest in exploring new approaches to the problem.", areasForImprovement: "Develop stronger initiative in proposing novel solutions and validating ideas." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "collaborative-problem-solving",
          name: "Collaborative Problem Solving",
          score: 3.0,
          description:
            "Working effectively with others to analyze problems and develop solutions together.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Participated actively in group discussions.", areasForImprovement: "Should take more initiative in structuring group work." },
            { session: 2, score: 2.3, whatWentWell: "Built constructively on teammates' ideas.", areasForImprovement: "Practice facilitating structured problem-solving sessions." },
            { session: 3, score: 2.6, whatWentWell: "Helped mediate different viewpoints to find common ground.", areasForImprovement: "Work on driving the group toward actionable outcomes." },
            { session: 4, score: 2.8, whatWentWell: "Contributed constructively to group discussions and built on others' ideas.", areasForImprovement: "Take more initiative in facilitating group problem-solving sessions." },
            { session: 5, score: 3.0, whatWentWell: "Successfully led a collaborative problem-solving session.", areasForImprovement: "Continue developing facilitation skills for complex multi-stakeholder problems." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Certificate of Distinction",
      recipientName: "Emily (TL A)",
      detail: {
        logoOrg: "Singapore Biodesign",
        certTitle: "Certificate of Distinction",
        courseName: "Design Thinking Training",
        signatories: [
          { name: "Dr Mary Kan", role: "Programme Director, Singapore Biodesign" },
          { name: "Dr Christopher Shen", role: "Professor Of Stanford University, Co-Founder Lumi Network" },
        ],
        dateIssued: "28/08/25",
      },
    },
  ],
  innovations: [
    {
      id: "innovation-1",
      title: "Model Choices",
      completedDate: "Completed July 2025",
      tags: ["LLM vs SLM", "Financial Engineering"],
      sprintTitle: "Sprint Innovation",
      subtitle: "LLM vs SLM",
      problem: "LLM",
      solution: "SLM",
    },
  ],
};

const quest2Data: QuestData = {
  skillCategories: [
    {
      id: "augmented-intelligence",
      name: "Augmented Intelligence",
      score: 3.1,
      maxScore: 5,
      subSkills: [
        {
          id: "human-ai-collaboration",
          name: "Human-AI Collaboration",
          score: 3.4,
          description:
            "Getting the best of both human judgement and machine capability.",
          sessions: [
            { session: 1, score: 2.2, whatWentWell: "Began using AI for investment research.", areasForImprovement: "Needs to validate AI outputs against financial data." },
            { session: 2, score: 2.6, whatWentWell: "Cross-referenced AI analysis with market reports.", areasForImprovement: "Should develop systematic validation workflow." },
            { session: 3, score: 2.9, whatWentWell: "Balanced AI recommendations with personal market knowledge.", areasForImprovement: "Document when AI adds vs detracts value." },
            { session: 4, score: 3.2, whatWentWell: "Created a workflow combining AI insights with human judgment.", areasForImprovement: "Work on quantifying confidence in AI-assisted decisions." },
            { session: 5, score: 3.4, whatWentWell: "Actively integrated AI outputs with personal analysis during investment research.", areasForImprovement: "Continue refining the balance between AI suggestions and independent critical thinking." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 3.2,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Attempted to use prompts for financial data extraction.", areasForImprovement: "Prompts lacked specificity for financial contexts." },
            { session: 2, score: 2.5, whatWentWell: "Improved prompt structure for financial summaries.", areasForImprovement: "Should include example outputs in prompts." },
            { session: 3, score: 2.8, whatWentWell: "Created reusable prompt templates for common tasks.", areasForImprovement: "Explore advanced prompting techniques." },
            { session: 4, score: 3.0, whatWentWell: "Used structured prompts to extract financial data summaries from AI tools.", areasForImprovement: "Explore chain-of-thought prompting for more complex analytical tasks." },
            { session: 5, score: 3.2, whatWentWell: "Developed sophisticated multi-step prompts for analysis.", areasForImprovement: "Continue refining prompt strategies for edge cases." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.8,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessions: [
            { session: 1, score: 1.5, whatWentWell: "Showed interest in understanding AI recommendations.", areasForImprovement: "Needs to develop vocabulary for discussing AI reasoning." },
            { session: 2, score: 2.0, whatWentWell: "Questioned AI outputs and sought explanations.", areasForImprovement: "Should learn more about model interpretability." },
            { session: 3, score: 2.4, whatWentWell: "Began articulating AI reasoning to team members.", areasForImprovement: "Practice simplifying technical explanations." },
            { session: 4, score: 2.8, whatWentWell: "Asked clarifying questions about AI-generated investment recommendations.", areasForImprovement: "Practice explaining AI reasoning to non-technical stakeholders." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 3.0,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Recognized ethical dimensions of AI in finance.", areasForImprovement: "Needs to study financial AI regulations." },
            { session: 2, score: 2.2, whatWentWell: "Identified potential bias in AI-driven investment screening.", areasForImprovement: "Should develop ethical review processes." },
            { session: 3, score: 2.6, whatWentWell: "Proposed data privacy safeguards for AI tools.", areasForImprovement: "Build a systematic ethical evaluation framework." },
            { session: 4, score: 3.0, whatWentWell: "Raised concerns about data privacy when using AI for financial analysis.", areasForImprovement: "Develop a checklist for ethical AI use in investment contexts." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
    {
      id: "durable-skills",
      name: "Durable Skills",
      score: 3.5,
      maxScore: 5,
      subSkills: [
        {
          id: "communication",
          name: "Communication",
          score: 3.6,
          description:
            "Effectively conveying ideas, actively listening, and adapting communication style to the audience.",
          sessions: [
            { session: 1, score: 2.6, whatWentWell: "Clearly articulated initial investment thesis.", areasForImprovement: "Needs to tailor communication for different audiences." },
            { session: 2, score: 2.9, whatWentWell: "Improved presentation structure for financial data.", areasForImprovement: "Should practice visual storytelling with data." },
            { session: 3, score: 3.2, whatWentWell: "Delivered a compelling pitch with data-driven arguments.", areasForImprovement: "Work on handling tough questions under pressure." },
            { session: 4, score: 3.4, whatWentWell: "Presented investment thesis clearly with supporting data points.", areasForImprovement: "Work on tailoring financial jargon for diverse audiences." },
            { session: 5, score: 3.6, whatWentWell: "Communicated complex financial concepts accessibly.", areasForImprovement: "Continue developing stakeholder communication skills." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.4,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessions: [
            { session: 1, score: 2.4, whatWentWell: "Questioned surface-level financial analysis.", areasForImprovement: "Should dig deeper into underlying assumptions." },
            { session: 2, score: 2.8, whatWentWell: "Compared multiple data sources to validate claims.", areasForImprovement: "Develop stronger frameworks for risk assessment." },
            { session: 3, score: 3.1, whatWentWell: "Identified logical gaps in a proposed investment strategy.", areasForImprovement: "Practice stress-testing assumptions more rigorously." },
            { session: 4, score: 3.4, whatWentWell: "Identified key risk factors and challenged optimistic projections.", areasForImprovement: "Build more structured frameworks for evaluating competing investment opportunities." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.5,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessions: [
            { session: 1, score: 2.5, whatWentWell: "Adjusted approach when initial data was unavailable.", areasForImprovement: "Should develop backup plans proactively." },
            { session: 2, score: 2.9, whatWentWell: "Pivoted analysis method when market conditions shifted.", areasForImprovement: "Work on anticipating changes before they happen." },
            { session: 3, score: 3.2, whatWentWell: "Adapted team strategy in response to new information.", areasForImprovement: "Practice scenario planning for multiple outcomes." },
            { session: 4, score: 3.5, whatWentWell: "Quickly pivoted analysis approach when initial data sources proved insufficient.", areasForImprovement: "Develop contingency plans for rapidly changing market conditions." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 3.3,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessions: [
            { session: 1, score: 2.3, whatWentWell: "Contributed ideas and supported team direction.", areasForImprovement: "Should take more initiative in guiding discussions." },
            { session: 2, score: 2.7, whatWentWell: "Helped organize team workflow and set priorities.", areasForImprovement: "Practice giving constructive feedback to peers." },
            { session: 3, score: 3.0, whatWentWell: "Led the team discussion on portfolio allocation strategy.", areasForImprovement: "Practice facilitating disagreements constructively within the team." },
            { session: 4, score: 3.3, whatWentWell: "Demonstrated confident leadership in a high-pressure decision.", areasForImprovement: "Continue developing conflict resolution skills." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
  ],
  certifications: [],
  innovations: [
    {
      id: "innovation-2",
      title: "Portfolio Optimizer",
      completedDate: "Completed September 2025",
      tags: ["Risk Analysis", "AI-Assisted"],
    },
  ],
};

const quest3Data: QuestData = {
  skillCategories: [
    {
      id: "augmented-intelligence",
      name: "Augmented Intelligence",
      score: 2.8,
      maxScore: 5,
      subSkills: [
        {
          id: "human-ai-collaboration",
          name: "Human-AI Collaboration",
          score: 3.0,
          description:
            "Getting the best of both human judgement and machine capability.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Explored AI playground tools with curiosity.", areasForImprovement: "Needs to document discoveries for later reference." },
            { session: 2, score: 2.4, whatWentWell: "Tested multiple AI tools for different use cases.", areasForImprovement: "Should compare tools systematically." },
            { session: 3, score: 2.7, whatWentWell: "Developed preferences for specific AI tools based on task type.", areasForImprovement: "Document rationale for tool selection." },
            { session: 4, score: 3.0, whatWentWell: "Experimented freely with various AI tools in the playground environment.", areasForImprovement: "Document findings more systematically for future reference." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.9,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Tried various prompt styles in the playground.", areasForImprovement: "Prompts lacked clear structure." },
            { session: 2, score: 2.2, whatWentWell: "Iterated on prompts to improve output quality.", areasForImprovement: "Should track which prompt patterns work best." },
            { session: 3, score: 2.6, whatWentWell: "Developed a personal prompt template library.", areasForImprovement: "Practice more advanced prompting techniques." },
            { session: 4, score: 2.9, whatWentWell: "Tested multiple prompt variations to compare output quality.", areasForImprovement: "Develop a systematic approach to prompt iteration and testing." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.5,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessions: [
            { session: 1, score: 1.5, whatWentWell: "Observed how different inputs affected AI outputs.", areasForImprovement: "Needs to understand why outputs change." },
            { session: 2, score: 1.9, whatWentWell: "Identified patterns in AI behavior through experimentation.", areasForImprovement: "Should relate observations to model architecture." },
            { session: 3, score: 2.2, whatWentWell: "Explored model interpretability features in the playground.", areasForImprovement: "Connect playground observations to real-world explainability challenges." },
            { session: 4, score: 2.5, whatWentWell: "Drew connections between playground findings and practical applications.", areasForImprovement: "Develop frameworks for explaining AI decisions to stakeholders." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.7,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessions: [
            { session: 1, score: 1.7, whatWentWell: "Noticed potential issues with AI-generated content.", areasForImprovement: "Needs to formalize ethical concerns." },
            { session: 2, score: 2.1, whatWentWell: "Identified biased outputs during testing.", areasForImprovement: "Should study bias detection methods." },
            { session: 3, score: 2.4, whatWentWell: "Noted potential biases in AI outputs during testing.", areasForImprovement: "Develop strategies for bias detection and mitigation." },
            { session: 4, score: 2.7, whatWentWell: "Proposed a bias testing protocol for the team.", areasForImprovement: "Continue building ethical evaluation frameworks." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
    {
      id: "durable-skills",
      name: "Durable Skills",
      score: 2.9,
      maxScore: 5,
      subSkills: [
        {
          id: "communication",
          name: "Communication",
          score: 3.0,
          description:
            "Effectively conveying ideas, actively listening, and adapting communication style to the audience.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Shared initial observations with the group.", areasForImprovement: "Communication lacked structure." },
            { session: 2, score: 2.4, whatWentWell: "Presented findings with clearer organization.", areasForImprovement: "Should practice using visuals to support explanations." },
            { session: 3, score: 2.7, whatWentWell: "Shared discoveries with peers during the playground session.", areasForImprovement: "Practice presenting technical findings in a more structured format." },
            { session: 4, score: 3.0, whatWentWell: "Delivered a well-structured presentation of playground findings.", areasForImprovement: "Continue refining technical communication skills." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 2.7,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessions: [
            { session: 1, score: 1.7, whatWentWell: "Showed healthy skepticism toward AI outputs.", areasForImprovement: "Needs more structured analytical approach." },
            { session: 2, score: 2.1, whatWentWell: "Compared AI outputs against known benchmarks.", areasForImprovement: "Should develop systematic testing methods." },
            { session: 3, score: 2.4, whatWentWell: "Questioned AI outputs rather than accepting them at face value.", areasForImprovement: "Build stronger analytical frameworks for evaluating AI capabilities." },
            { session: 4, score: 2.7, whatWentWell: "Applied structured reasoning to evaluate AI tool capabilities.", areasForImprovement: "Continue building critical evaluation frameworks." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.0,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Showed willingness to try unfamiliar tools.", areasForImprovement: "Should move beyond comfort zone more quickly." },
            { session: 2, score: 2.4, whatWentWell: "Switched between tools smoothly during the session.", areasForImprovement: "Practice maintaining quality while adapting." },
            { session: 3, score: 2.7, whatWentWell: "Adapted quickly to unfamiliar tools and interfaces.", areasForImprovement: "Apply adaptability skills learned in playground to real-world scenarios." },
            { session: 4, score: 3.0, whatWentWell: "Demonstrated strong adaptability across multiple tool changes.", areasForImprovement: "Continue building resilience in rapidly changing environments." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 2.8,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Participated actively in group exploration.", areasForImprovement: "Should take more initiative in guiding others." },
            { session: 2, score: 2.2, whatWentWell: "Suggested tools and approaches for teammates to try.", areasForImprovement: "Practice organizing group learning sessions." },
            { session: 3, score: 2.5, whatWentWell: "Encouraged teammates to explore different AI tools.", areasForImprovement: "Take more initiative in guiding group exploration activities." },
            { session: 4, score: 2.8, whatWentWell: "Led a productive group exploration session.", areasForImprovement: "Continue developing skills in facilitating collaborative learning." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
  ],
  certifications: [],
  innovations: [],
};

const quest4Data: QuestData = {
  skillCategories: [
    {
      id: "augmented-intelligence",
      name: "Augmented Intelligence",
      score: 3.4,
      maxScore: 5,
      subSkills: [
        {
          id: "human-ai-collaboration",
          name: "Human-AI Collaboration",
          score: 3.6,
          description:
            "Getting the best of both human judgement and machine capability.",
          sessions: [
            { session: 1, score: 2.6, whatWentWell: "Applied AI to quantitative analysis tasks.", areasForImprovement: "Should validate AI outputs against known models." },
            { session: 2, score: 2.9, whatWentWell: "Combined AI predictions with human market intuition.", areasForImprovement: "Develop formal validation processes." },
            { session: 3, score: 3.2, whatWentWell: "Created effective human-AI workflows for pricing.", areasForImprovement: "Document best practices for the team." },
            { session: 4, score: 3.4, whatWentWell: "Demonstrated mature human-AI collaboration patterns.", areasForImprovement: "Share workflows with the broader team." },
            { session: 5, score: 3.6, whatWentWell: "Used AI models effectively for quantitative analysis and pricing.", areasForImprovement: "Explore more sophisticated human-in-the-loop approaches for model validation." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 3.5,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessions: [
            { session: 1, score: 2.5, whatWentWell: "Developed domain-specific prompts for financial tasks.", areasForImprovement: "Should refine prompts with more precise constraints." },
            { session: 2, score: 2.8, whatWentWell: "Created reusable prompt templates for pricing calculations.", areasForImprovement: "Test prompts across different AI models." },
            { session: 3, score: 3.1, whatWentWell: "Developed sophisticated multi-step prompting workflows.", areasForImprovement: "Share effective prompts with the team." },
            { session: 4, score: 3.3, whatWentWell: "Crafted precise prompts for derivative pricing calculations.", areasForImprovement: "Develop reusable prompt templates for common financial engineering tasks." },
            { session: 5, score: 3.5, whatWentWell: "Built a comprehensive prompt library for the team.", areasForImprovement: "Continue evolving prompts as AI capabilities advance." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 3.2,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessions: [
            { session: 1, score: 2.2, whatWentWell: "Asked probing questions about AI model behavior.", areasForImprovement: "Should study model architecture fundamentals." },
            { session: 2, score: 2.5, whatWentWell: "Explained AI outputs to colleagues with clarity.", areasForImprovement: "Develop visual aids for AI explanations." },
            { session: 3, score: 2.8, whatWentWell: "Created documentation for AI decision processes.", areasForImprovement: "Practice explaining to non-technical audiences." },
            { session: 4, score: 3.2, whatWentWell: "Explained AI-driven risk models to the team with clarity.", areasForImprovement: "Create documentation standards for AI model explanations in financial contexts." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 3.3,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessions: [
            { session: 1, score: 2.3, whatWentWell: "Identified fairness concerns in AI-based scoring.", areasForImprovement: "Should study regulatory frameworks." },
            { session: 2, score: 2.6, whatWentWell: "Proposed bias testing for AI credit models.", areasForImprovement: "Develop ongoing monitoring processes." },
            { session: 3, score: 2.9, whatWentWell: "Researched industry standards for ethical AI in finance.", areasForImprovement: "Integrate standards into team workflows." },
            { session: 4, score: 3.3, whatWentWell: "Considered fairness implications of AI-based credit scoring models.", areasForImprovement: "Research regulatory frameworks for AI in financial services." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
    {
      id: "durable-skills",
      name: "Durable Skills",
      score: 3.8,
      maxScore: 5,
      subSkills: [
        {
          id: "communication",
          name: "Communication",
          score: 3.9,
          description:
            "Effectively conveying ideas, actively listening, and adapting communication style to the audience.",
          sessions: [
            { session: 1, score: 2.9, whatWentWell: "Communicated financial concepts with reasonable clarity.", areasForImprovement: "Should improve use of visual aids." },
            { session: 2, score: 3.2, whatWentWell: "Created effective presentations with data visualizations.", areasForImprovement: "Practice adapting message for different audiences." },
            { session: 3, score: 3.5, whatWentWell: "Delivered a persuasive presentation to stakeholders.", areasForImprovement: "Continue refining storytelling with data." },
            { session: 4, score: 3.7, whatWentWell: "Presented complex financial models with clear visualizations.", areasForImprovement: "Practice communicating risk assessments to non-technical stakeholders." },
            { session: 5, score: 3.9, whatWentWell: "Mastered audience-appropriate financial communication.", areasForImprovement: "Continue developing executive communication skills." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.7,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessions: [
            { session: 1, score: 2.7, whatWentWell: "Applied analytical rigor to financial models.", areasForImprovement: "Should stress-test assumptions more." },
            { session: 2, score: 3.0, whatWentWell: "Identified key flaws in a pricing model.", areasForImprovement: "Develop more comprehensive testing frameworks." },
            { session: 3, score: 3.3, whatWentWell: "Conducted thorough sensitivity analysis.", areasForImprovement: "Practice communicating analytical findings." },
            { session: 4, score: 3.5, whatWentWell: "Identified flaws in pricing model assumptions through rigorous analysis.", areasForImprovement: "Apply stress-testing methodologies more consistently." },
            { session: 5, score: 3.7, whatWentWell: "Demonstrated exceptional analytical depth in model evaluation.", areasForImprovement: "Continue developing quantitative analysis skills." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.8,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessions: [
            { session: 1, score: 2.8, whatWentWell: "Adjusted to new financial modeling tools.", areasForImprovement: "Should build contingency plans." },
            { session: 2, score: 3.1, whatWentWell: "Smoothly transitioned between modeling frameworks.", areasForImprovement: "Practice scenario planning." },
            { session: 3, score: 3.4, whatWentWell: "Led team through a framework transition successfully.", areasForImprovement: "Develop more formal change management skills." },
            { session: 4, score: 3.6, whatWentWell: "Smoothly transitioned between different financial modeling frameworks.", areasForImprovement: "Prepare for rapid market shifts by developing scenario-based approaches." },
            { session: 5, score: 3.8, whatWentWell: "Demonstrated exceptional flexibility in adapting to new requirements.", areasForImprovement: "Continue building scenario-based planning skills." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 3.6,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessions: [
            { session: 1, score: 2.6, whatWentWell: "Supported team members with financial concepts.", areasForImprovement: "Should take more initiative in mentoring." },
            { session: 2, score: 2.9, whatWentWell: "Organized knowledge-sharing sessions for the team.", areasForImprovement: "Develop structured mentoring approach." },
            { session: 3, score: 3.2, whatWentWell: "Mentored a junior team member on model building.", areasForImprovement: "Create ongoing learning opportunities." },
            { session: 4, score: 3.6, whatWentWell: "Mentored junior team members on financial engineering concepts.", areasForImprovement: "Develop a structured knowledge-sharing program for the team." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
  ],
  certifications: [
    {
      id: "cert-2",
      title: "Certificate of Distinction",
      recipientName: "Emily (TL A)",
      detail: {
        logoOrg: "Singapore Biodesign",
        certTitle: "Certificate of Distinction",
        courseName: "Financial Engineering Fundamentals",
        signatories: [
          { name: "Dr Mary Kan", role: "Programme Director, Singapore Biodesign" },
          { name: "Dr Christopher Shen", role: "Professor Of Stanford University, Co-Founder Lumi Network" },
        ],
        dateIssued: "15/04/25",
      },
    },
  ],
  innovations: [
    {
      id: "innovation-3",
      title: "Risk Dashboard",
      completedDate: "Completed March 2025",
      tags: ["Risk Modeling", "Derivatives"],
    },
  ],
};

const quest5Data: QuestData = {
  skillCategories: [
    {
      id: "augmented-intelligence",
      name: "Augmented Intelligence",
      score: 2.6,
      maxScore: 5,
      subSkills: [
        {
          id: "human-ai-collaboration",
          name: "Human-AI Collaboration",
          score: 2.8,
          description:
            "Getting the best of both human judgement and machine capability.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Applied AI tools to basic threat identification.", areasForImprovement: "Needs to develop systematic AI integration." },
            { session: 2, score: 2.1, whatWentWell: "Combined AI analysis with manual log review.", areasForImprovement: "Should formalize human-AI triage workflow." },
            { session: 3, score: 2.4, whatWentWell: "Developed a basic human-AI threat analysis pipeline.", areasForImprovement: "Refine the workflow for efficiency." },
            { session: 4, score: 2.8, whatWentWell: "Applied AI tools to cybersecurity threat analysis scenarios.", areasForImprovement: "Develop more sophisticated workflows combining AI and manual analysis." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.6,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessions: [
            { session: 1, score: 1.6, whatWentWell: "Attempted to use AI for security report generation.", areasForImprovement: "Prompts were too generic for security contexts." },
            { session: 2, score: 2.0, whatWentWell: "Improved specificity of security-related prompts.", areasForImprovement: "Should include threat context in prompts." },
            { session: 3, score: 2.3, whatWentWell: "Created targeted prompts for vulnerability analysis.", areasForImprovement: "Practice iterating on prompts for better results." },
            { session: 4, score: 2.6, whatWentWell: "Used AI to generate initial threat assessments.", areasForImprovement: "Craft more targeted prompts for specific vulnerability analysis." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.4,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessions: [
            { session: 1, score: 1.4, whatWentWell: "Recognized that AI-based alerts need explanation.", areasForImprovement: "Should study how AI-based IDS systems work." },
            { session: 2, score: 1.8, whatWentWell: "Began questioning AI alert classifications.", areasForImprovement: "Develop understanding of detection algorithms." },
            { session: 3, score: 2.1, whatWentWell: "Questioned the basis for AI-flagged security alerts.", areasForImprovement: "Build understanding of how AI-based intrusion detection systems make decisions." },
            { session: 4, score: 2.4, whatWentWell: "Explained AI alert reasoning to the security team.", areasForImprovement: "Continue developing AI explainability skills in security contexts." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.5,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessions: [
            { session: 1, score: 1.5, whatWentWell: "Acknowledged privacy concerns with AI monitoring.", areasForImprovement: "Needs to study privacy regulations." },
            { session: 2, score: 1.9, whatWentWell: "Raised concerns about AI surveillance overreach.", areasForImprovement: "Should develop privacy-preserving AI approaches." },
            { session: 3, score: 2.2, whatWentWell: "Proposed privacy guidelines for AI monitoring tools.", areasForImprovement: "Research industry standards for ethical AI in security." },
            { session: 4, score: 2.5, whatWentWell: "Considered privacy implications of AI-based monitoring systems.", areasForImprovement: "Explore the ethical boundaries of AI in cybersecurity contexts." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
    {
      id: "durable-skills",
      name: "Durable Skills",
      score: 3.0,
      maxScore: 5,
      subSkills: [
        {
          id: "communication",
          name: "Communication",
          score: 3.1,
          description:
            "Effectively conveying ideas, actively listening, and adapting communication style to the audience.",
          sessions: [
            { session: 1, score: 2.1, whatWentWell: "Reported security observations to the team.", areasForImprovement: "Reports lacked structure and prioritization." },
            { session: 2, score: 2.5, whatWentWell: "Improved security report formatting.", areasForImprovement: "Should practice writing executive summaries." },
            { session: 3, score: 2.8, whatWentWell: "Delivered a clear incident summary to stakeholders.", areasForImprovement: "Work on real-time communication during incidents." },
            { session: 4, score: 3.1, whatWentWell: "Communicated security findings clearly to the team.", areasForImprovement: "Practice writing concise security incident reports." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.0,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessions: [
            { session: 1, score: 2.0, whatWentWell: "Analyzed log data for patterns.", areasForImprovement: "Should develop structured threat modeling skills." },
            { session: 2, score: 2.4, whatWentWell: "Identified suspicious patterns in network traffic.", areasForImprovement: "Practice prioritizing threats by severity." },
            { session: 3, score: 2.7, whatWentWell: "Applied logical reasoning to identify potential attack vectors.", areasForImprovement: "Develop more systematic approaches to threat modeling." },
            { session: 4, score: 3.0, whatWentWell: "Conducted a thorough threat analysis with structured methodology.", areasForImprovement: "Continue refining threat modeling frameworks." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 2.9,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessions: [
            { session: 1, score: 1.9, whatWentWell: "Responded to changing threat scenarios.", areasForImprovement: "Should practice faster response pivots." },
            { session: 2, score: 2.3, whatWentWell: "Adjusted defense strategy as attack evolved.", areasForImprovement: "Build playbooks for common attack patterns." },
            { session: 3, score: 2.6, whatWentWell: "Adapted to rapidly evolving threat scenarios during simulations.", areasForImprovement: "Build resilience for handling multiple simultaneous security incidents." },
            { session: 4, score: 2.9, whatWentWell: "Managed multiple evolving threats simultaneously.", areasForImprovement: "Continue developing multi-incident response capabilities." },
          ],
          evidence: defaultEvidence,
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 2.8,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessions: [
            { session: 1, score: 1.8, whatWentWell: "Supported the team during incident simulations.", areasForImprovement: "Should practice taking charge during incidents." },
            { session: 2, score: 2.2, whatWentWell: "Coordinated team actions during a simulated breach.", areasForImprovement: "Develop clearer delegation skills." },
            { session: 3, score: 2.5, whatWentWell: "Took charge during the incident response simulation.", areasForImprovement: "Develop incident command skills for leading security response teams." },
            { session: 4, score: 2.8, whatWentWell: "Led the security team through a complex incident response.", areasForImprovement: "Continue building incident command capabilities." },
          ],
          evidence: defaultEvidence,
        },
      ],
    },
  ],
  certifications: [],
  innovations: [
    {
      id: "innovation-4",
      title: "Threat Matrix",
      completedDate: "Completed March 2025",
      tags: ["Cybersecurity", "CIA Triad"],
    },
  ],
};

export const mockData: UserData = {
  name: "Emily (TL A)",
  title: "Emily (TL A)'s Skill Passport",
  description:
    "Welcome to the skill overview. Here you can see how the participant has performed in developing their AI, Durable and Domain Skills compared to participants across the global Lumi Network.",
  lumiInfoText: [
    "At Lumi, we ignite potential by helping people build the skills that matter most \u2014 creative problem-solving, AI fluency, and entrepreneurial thinking.",
    "This Skill Passport is a personalized snapshot of one participant journey through a real-world innovation challenge. It highlights how they performed, what they excelled at, and where they can grow \u2014 based on feedback, reflection, and facilitator insight.",
    "It is more than a certificate \u2014 it is a window into how someone thinks, learns, and solves problems.",
  ],
  quests: [
    { id: "quest-1", name: "Lumi-Test - Multi Emails Test (Oct 2025)" },
    { id: "quest-2", name: "Lumi-Test - Investments (Oct 2025)" },
    { id: "quest-3", name: "Lumi-Test - Playground (Jul 2025)" },
    { id: "quest-4", name: "Lumi-Test - Financial Engineering (Apr 2025)" },
    { id: "quest-5", name: "Lumi-Test - Cybertronic CIA (Apr 2025)" },
  ],
  selectedQuestId: "quest-1",
  rubric: [
    { score: 1, description: "No evidence / struggles to demonstrate the skill" },
    { score: 2, description: "Emerging skill with limited application" },
    { score: 3, description: "Baseline competency \u2014 expected for graduates or early professionals" },
    { score: 4, description: "Strong, consistent skill use across tasks or settings" },
    { score: 5, description: "Demonstrates consistent understanding, competency, and autonomy in applying the skill" },
  ],
  questData: {
    "quest-1": quest1Data,
    "quest-2": quest2Data,
    "quest-3": quest3Data,
    "quest-4": quest4Data,
    "quest-5": quest5Data,
  },
};
