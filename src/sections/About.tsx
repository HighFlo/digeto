import React from "react";


import deepak from "../assets/team/deepak.png";
import diogo from "../assets/team/diogo.png";
import gregor from "../assets/team/gregor.png";
import khushi from "../assets/team/khushi.png";
import luis from "../assets/team/luis.png";
import nikhil from "../assets/team/nikhil.png";
import olivia from "../assets/team/olivia.png";
import steven from "../assets/team/steven.png";
import maria from "../assets/team/maria.png";
import { LucideLinkedin } from "lucide-react";

type Member = {
  name: string;
  role: string;
  description: string;
  img: string;
  linkedinURL: string;
};

const team: Member[] = [
  {
    name: "Deepak Peschard",
    role: "CEO & Founder of Digeto",
    description:
      "20+ years of global leadership in banking, VC, and startups. VC & PE Investor at VU Venture Partners. Ex-Trade Officer at the French Foreign Ministry.",
    img: deepak,
    linkedinURL: "https://www.linkedin.com/in/deepak-peschard/"
  },
    {
    name: "Maria Expósito Lorido",
    role: "Chief Growth Officer",
    description:
      "",
    img: maria,
    linkedinURL: "https://www.linkedin.com/in/mexposlo/"
  },
  {
    name: "Luís Guilherme Diniz",
    role: "Director & Head of Edge",
    description:
      "25+ years helping founders expand globally with customer-focused, tech-driven strategies.",
    img: luis,
    linkedinURL: "https://www.linkedin.com/in/luisdiniz/"
  },
  {
    name: "Nikhil P C",
    role: "Head of Marketing",
    description:
      "9+ years in growth, brand strategy, sales, and impact-driven initiatives.",
    img: nikhil,
    linkedinURL: "https://www.linkedin.com/in/iamnikhilpc/"
  },
  {
    name: "Diogo Saraiva",
    role: "Chief Technology Officer",
    description:
      "10+ years leading scalable digital transformations and end-to-end project execution.",
    img: diogo,
    linkedinURL: "https://www.linkedin.com/in/diogosaraiva17/"
  },
  {
    name: "Khushi Bhartiya",
    role: "Venture Lead",
    description:
      "3+ years in financial analysis, investor relations, and venture deal management.",
    img: khushi,
    linkedinURL: "https://www.linkedin.com/in/khushibhartiya/"
  },
];

const board: Member[] = [
  {
    name: "Olivia Calvet-Soubiran",
    role: "International Business Advisor",
    description:
      "30+ years in cross-border business, EU policy, and global expansion strategies.",
    img: olivia,
    linkedinURL: "https://www.linkedin.com/in/olivia-calvet-soubiran-a5988a16/"
  },
  {
    name: "Steven Paul",
    role: "Strategic Advisor",
    description:
      "25+ years in governance, leadership, and business transformation across 30+ markets.",
    img: steven,
    linkedinURL: "https://www.linkedin.com/in/stevenpaul-info/"
  },
  {
    name: "Gregor Aschoff",
    role: "ESG Advisor",
    description:
      "25+ years guiding growth and operational transformation in tech-driven industries.",
    img: gregor,
    linkedinURL: "https://www.linkedin.com/in/gregor-aschoff-gaicd-27a7b11/"
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-6 py-16">
      {/* Hero Section */}
      <div className="mb-20 text-center">
        <div className="mb-4 inline-block rounded-full border border-primary-blue/20 bg-primary-blue/5 px-5 py-2">
          <span className="text-sm font-medium text-primary-blue">About Us</span>
        </div>
        
        <h2 className="mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
         Who are we?
        </h2>
        
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          We are a team of entrepreneurs, investors, and educators united by a single purpose: to <span className="text-primary-blue">accelerate positive global change</span>. We believe that by connecting the right talent with the right opportunities and providing strategic capital, we can empower <span className="text-primary-blue">the next generation of impact talent, leaders and businesses</span>.
        </p>
      </div>

      {/* Leadership Team */}
      <div className="mb-20">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-3xl font-bold text-gray-900">Leadership Team</h3>
          <div className="mx-auto h-px w-16 bg-primary-blue"></div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-gray-100/50 bg-white/40 p-6 text-center backdrop-blur transition-all hover:border-primary-blue/20"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto mb-4 h-20 w-20 rounded-2xl border-2 border-primary-blue/10 object-cover transition-all group-hover:border-primary-blue/30"
              />
              <div className="flex justify-center items-center gap-4">
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <a onClick={() => window.open(`${member.linkedinURL}`)} className="p-2 bg-primary-blue/20 rounded-full -mt-2 hover:text-primary-blue">
                  <LucideLinkedin />
                </a> 
              </div>
              <p className="mb-3 text-sm font-medium text-primary-blue">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisory Board */}
      <div className="mb-12">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-3xl font-bold text-gray-900">Advisory Board</h3>
          <div className="mx-auto h-px w-16 bg-primary-blue"></div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-gray-100/50 bg-white/40 p-6 text-center backdrop-blur transition-all hover:border-primary-blue/20"
            >
              <img
                src={member.img}
                alt={member.name}
                className="mx-auto mb-4 h-20 w-20 rounded-2xl border-2 border-primary-blue/10 object-cover transition-all group-hover:border-primary-blue/30"
              />
              <div className="flex justify-center items-center gap-4">
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {member.name}
                </h4>
                <a onClick={() => window.open(`${member.linkedinURL}`)} className="p-2 bg-primary-blue/20 rounded-full -mt-2 hover:text-primary-blue">
                  <LucideLinkedin />
                </a> 
              </div>
              <p className="mb-3 text-sm font-medium text-primary-blue">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;