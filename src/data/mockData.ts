export interface SubSkill {
  id: string;
  name: string;
  score: number;
  description: string;
  sessionFeedback: {
    whatWentWell: string;
    areasForImprovement: string;
  };
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
          sessionFeedback: {
            whatWentWell:
              "Limited contribution during the session, resulting in insufficient evidence to assess this skill.",
            areasForImprovement:
              "You could document any AI trial or feedback loops. You could connect AI contributions to practical tasks.",
          },
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.7,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessionFeedback: {
            whatWentWell:
              "Demonstrated basic ability to formulate prompts for AI tools.",
            areasForImprovement:
              "Practice writing more structured and detailed prompts to get higher quality results.",
          },
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.0,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessionFeedback: {
            whatWentWell:
              "Showed awareness that AI explanations matter for trust and adoption.",
            areasForImprovement:
              "Develop deeper understanding of how to evaluate and communicate AI reasoning to stakeholders.",
          },
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.2,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessionFeedback: {
            whatWentWell:
              "Recognized the importance of ethical considerations in AI deployment.",
            areasForImprovement:
              "Build a practical framework for identifying and mitigating ethical risks in AI applications.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Asked relevant questions and challenged assumptions during problem-solving.",
            areasForImprovement:
              "Strengthen ability to evaluate evidence and consider alternative perspectives systematically.",
          },
        },
        {
          id: "design-thinking",
          name: "Design Thinking",
          score: 4.7,
          description:
            "Applying human-centered design processes to solve complex problems creatively.",
          sessionFeedback: {
            whatWentWell:
              "Demonstrated strong empathy mapping and ideation skills during the design sprint.",
            areasForImprovement:
              "Continue refining prototyping speed and testing methodologies.",
          },
        },
        {
          id: "resilience-agility",
          name: "Resilience & Agility",
          score: 2.1,
          description:
            "Bouncing back from setbacks and adapting quickly to changing circumstances.",
          sessionFeedback: {
            whatWentWell:
              "Showed willingness to try again after initial approach did not work.",
            areasForImprovement:
              "Build greater comfort with ambiguity and develop strategies for rapid pivoting.",
          },
        },
        {
          id: "empathy",
          name: "Empathy",
          score: 3.5,
          description:
            "Understanding and sharing the feelings and perspectives of others.",
          sessionFeedback: {
            whatWentWell:
              "Actively listened to team members and considered diverse viewpoints.",
            areasForImprovement:
              "Practice deeper perspective-taking in cross-functional collaboration.",
          },
        },
        {
          id: "entrepreneurial-mindset",
          name: "Entrepreneurial Mindset",
          score: 2.4,
          description:
            "Identifying opportunities, taking calculated risks, and driving innovation.",
          sessionFeedback: {
            whatWentWell:
              "Showed interest in exploring new approaches to the problem.",
            areasForImprovement:
              "Develop stronger initiative in proposing novel solutions and validating ideas.",
          },
        },
        {
          id: "collaborative-problem-solving",
          name: "Collaborative Problem Solving",
          score: 3.0,
          description:
            "Working effectively with others to analyze problems and develop solutions together.",
          sessionFeedback: {
            whatWentWell:
              "Contributed constructively to group discussions and built on others' ideas.",
            areasForImprovement:
              "Take more initiative in facilitating group problem-solving sessions.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Actively integrated AI outputs with personal analysis during investment research.",
            areasForImprovement:
              "Continue refining the balance between AI suggestions and independent critical thinking.",
          },
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 3.2,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessionFeedback: {
            whatWentWell:
              "Used structured prompts to extract financial data summaries from AI tools.",
            areasForImprovement:
              "Explore chain-of-thought prompting for more complex analytical tasks.",
          },
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.8,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessionFeedback: {
            whatWentWell:
              "Asked clarifying questions about AI-generated investment recommendations.",
            areasForImprovement:
              "Practice explaining AI reasoning to non-technical stakeholders.",
          },
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 3.0,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessionFeedback: {
            whatWentWell:
              "Raised concerns about data privacy when using AI for financial analysis.",
            areasForImprovement:
              "Develop a checklist for ethical AI use in investment contexts.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Presented investment thesis clearly with supporting data points.",
            areasForImprovement:
              "Work on tailoring financial jargon for diverse audiences.",
          },
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.4,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessionFeedback: {
            whatWentWell:
              "Identified key risk factors and challenged optimistic projections.",
            areasForImprovement:
              "Build more structured frameworks for evaluating competing investment opportunities.",
          },
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.5,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessionFeedback: {
            whatWentWell:
              "Quickly pivoted analysis approach when initial data sources proved insufficient.",
            areasForImprovement:
              "Develop contingency plans for rapidly changing market conditions.",
          },
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 3.3,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessionFeedback: {
            whatWentWell:
              "Led the team discussion on portfolio allocation strategy.",
            areasForImprovement:
              "Practice facilitating disagreements constructively within the team.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Experimented freely with various AI tools in the playground environment.",
            areasForImprovement:
              "Document findings more systematically for future reference.",
          },
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.9,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessionFeedback: {
            whatWentWell:
              "Tested multiple prompt variations to compare output quality.",
            areasForImprovement:
              "Develop a systematic approach to prompt iteration and testing.",
          },
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.5,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessionFeedback: {
            whatWentWell:
              "Explored model interpretability features in the playground.",
            areasForImprovement:
              "Connect playground observations to real-world explainability challenges.",
          },
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.7,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessionFeedback: {
            whatWentWell:
              "Noted potential biases in AI outputs during testing.",
            areasForImprovement:
              "Develop strategies for bias detection and mitigation.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Shared discoveries with peers during the playground session.",
            areasForImprovement:
              "Practice presenting technical findings in a more structured format.",
          },
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 2.7,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessionFeedback: {
            whatWentWell:
              "Questioned AI outputs rather than accepting them at face value.",
            areasForImprovement:
              "Build stronger analytical frameworks for evaluating AI capabilities.",
          },
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.0,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessionFeedback: {
            whatWentWell:
              "Adapted quickly to unfamiliar tools and interfaces.",
            areasForImprovement:
              "Apply adaptability skills learned in playground to real-world scenarios.",
          },
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 2.8,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessionFeedback: {
            whatWentWell:
              "Encouraged teammates to explore different AI tools.",
            areasForImprovement:
              "Take more initiative in guiding group exploration activities.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Used AI models effectively for quantitative analysis and pricing.",
            areasForImprovement:
              "Explore more sophisticated human-in-the-loop approaches for model validation.",
          },
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 3.5,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessionFeedback: {
            whatWentWell:
              "Crafted precise prompts for derivative pricing calculations.",
            areasForImprovement:
              "Develop reusable prompt templates for common financial engineering tasks.",
          },
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 3.2,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessionFeedback: {
            whatWentWell:
              "Explained AI-driven risk models to the team with clarity.",
            areasForImprovement:
              "Create documentation standards for AI model explanations in financial contexts.",
          },
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 3.3,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessionFeedback: {
            whatWentWell:
              "Considered fairness implications of AI-based credit scoring models.",
            areasForImprovement:
              "Research regulatory frameworks for AI in financial services.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Presented complex financial models with clear visualizations.",
            areasForImprovement:
              "Practice communicating risk assessments to non-technical stakeholders.",
          },
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.7,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessionFeedback: {
            whatWentWell:
              "Identified flaws in pricing model assumptions through rigorous analysis.",
            areasForImprovement:
              "Apply stress-testing methodologies more consistently.",
          },
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 3.8,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessionFeedback: {
            whatWentWell:
              "Smoothly transitioned between different financial modeling frameworks.",
            areasForImprovement:
              "Prepare for rapid market shifts by developing scenario-based approaches.",
          },
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 3.6,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessionFeedback: {
            whatWentWell:
              "Mentored junior team members on financial engineering concepts.",
            areasForImprovement:
              "Develop a structured knowledge-sharing program for the team.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Applied AI tools to cybersecurity threat analysis scenarios.",
            areasForImprovement:
              "Develop more sophisticated workflows combining AI and manual analysis.",
          },
        },
        {
          id: "effective-prompting",
          name: "Effective Prompting",
          score: 2.6,
          description:
            "Crafting clear, specific prompts that guide AI systems to produce useful and relevant outputs.",
          sessionFeedback: {
            whatWentWell:
              "Used AI to generate initial threat assessments.",
            areasForImprovement:
              "Craft more targeted prompts for specific vulnerability analysis.",
          },
        },
        {
          id: "explainable-ai",
          name: "Explainable-AI",
          score: 2.4,
          description:
            "Understanding and communicating how AI systems reach their decisions and outputs.",
          sessionFeedback: {
            whatWentWell:
              "Questioned the basis for AI-flagged security alerts.",
            areasForImprovement:
              "Build understanding of how AI-based intrusion detection systems make decisions.",
          },
        },
        {
          id: "ethical-use-of-ai",
          name: "Ethical Use of AI",
          score: 2.5,
          description:
            "Applying AI responsibly with consideration for fairness, privacy, and societal impact.",
          sessionFeedback: {
            whatWentWell:
              "Considered privacy implications of AI-based monitoring systems.",
            areasForImprovement:
              "Explore the ethical boundaries of AI in cybersecurity contexts.",
          },
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
          sessionFeedback: {
            whatWentWell:
              "Communicated security findings clearly to the team.",
            areasForImprovement:
              "Practice writing concise security incident reports.",
          },
        },
        {
          id: "critical-thinking",
          name: "Critical Thinking",
          score: 3.0,
          description:
            "Analyzing information objectively and making reasoned judgments.",
          sessionFeedback: {
            whatWentWell:
              "Applied logical reasoning to identify potential attack vectors.",
            areasForImprovement:
              "Develop more systematic approaches to threat modeling.",
          },
        },
        {
          id: "adaptability",
          name: "Adaptability",
          score: 2.9,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessionFeedback: {
            whatWentWell:
              "Adapted to rapidly evolving threat scenarios during simulations.",
            areasForImprovement:
              "Build resilience for handling multiple simultaneous security incidents.",
          },
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 2.8,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessionFeedback: {
            whatWentWell:
              "Took charge during the incident response simulation.",
            areasForImprovement:
              "Develop incident command skills for leading security response teams.",
          },
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
