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
}

export interface Certification {
  id: string;
  title: string;
  recipientName: string;
}

export interface Quest {
  id: string;
  name: string;
}

export interface UserData {
  name: string;
  title: string;
  description: string;
  quests: Quest[];
  selectedQuestId: string;
  skillCategories: SkillCategory[];
  certifications: Certification[];
  innovations: Innovation[];
}

export const mockData: UserData = {
  name: "Emily (TL A)",
  title: "Emily (TL A)'s Skill Passport",
  description:
    "Welcome to the skill overview. Here you can see how the participant has performed in developing their AI, Durable and Domain Skills compared to participants across the global Lumi Network.",
  quests: [
    { id: "quest-1", name: "Lumi-Test - Multi Emails Test (Oct 2025)" },
  ],
  selectedQuestId: "quest-1",
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
          id: "communication",
          name: "Communication",
          score: 3.2,
          description:
            "Effectively conveying ideas, actively listening, and adapting communication style to the audience.",
          sessionFeedback: {
            whatWentWell:
              "Clearly articulated ideas and engaged with team members during discussions.",
            areasForImprovement:
              "Practice more concise communication and active listening in group settings.",
          },
        },
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
          id: "adaptability",
          name: "Adaptability",
          score: 3.1,
          description:
            "Adjusting effectively to new conditions, challenges, and changing requirements.",
          sessionFeedback: {
            whatWentWell:
              "Showed flexibility when plans changed and adapted approach accordingly.",
            areasForImprovement:
              "Build greater comfort with ambiguity and develop strategies for rapid pivoting.",
          },
        },
        {
          id: "leadership",
          name: "Leadership",
          score: 2.9,
          description:
            "Guiding and inspiring others toward achieving shared goals.",
          sessionFeedback: {
            whatWentWell:
              "Took initiative in organizing team activities and setting direction.",
            areasForImprovement:
              "Develop stronger delegation skills and practice empowering team members.",
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
    },
  ],
  innovations: [
    {
      id: "innovation-1",
      title: "Model Choices",
      completedDate: "Completed July 2025",
      tags: ["LLM vs SLM", "Financial Engineering"],
    },
  ],
};
