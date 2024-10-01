import ora from "../assets/images/ora.png";
import chat from "../assets/images/chat.png";
import cast from "../assets/images/cast.png";
import insta from "../assets/images/insta.png";
import tracer from "../assets/images/tracer.png";
import pen from "../assets/images/pen.png";
import a1 from "../assets/images/a1.webp";
import a2 from "../assets/images/a2.webp";
import a4 from "../assets/images/a4.webp";
import a5 from "../assets/images/a5.webp";


export const headlines = [
    "Hi, I'm Austin.",
    "I'm a AI Developer",
    "Over the past few years, I've focused on mobile and web development while actively engaging in generative AI projects."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'CommuneHub',
        image: cast,
        linkGithub: 'https://github.com/auztnbenny/communehub',
        linkOnline: 'https://github.com/auztnbenny/communehub',
        description: 'CommuneHub is an event management mobile application which using NLP to streamline the execom selection.',
techStack: ['Flutter', 'Firebase', 'Flask'],

    },
    {
        title: 'Surplus',
        image: ora,
        linkOnline: 'https://github.com/auztnbenny/surplus',
        linkGithub: 'https://github.com/auztnbenny/surplus',
        description: 'The Surplus Food Sharing Mobile Application allows users to list and share surplus food and goods.',
techStack: ['Flutter', 'Firebase', 'Google Map API'],

    },
    {
        title: 'Chatbot',
        image: chat,
        linkGithub: 'https://github.com/auztnbenny/chatbot-llama-2',
        linkOnline: 'https://github.com/auztnbenny/chatbot-llama-2',
        description: 'The Chatbot using LLaMA 2 facilitates user interaction through conversational AI, delivering accurate responses to inquiries.',
        techStack: ['Streamlit', 'Replicate'],
    },
    {
        title: 'To-Do List',
        image: tracer,
        linkGithub: 'https://github.com/auztnbenny/todo-list-react',
        linkOnline: 'https://github.com/auztnbenny/todo-list-react',
        description: 'A simple full-stack To-Do List application using Flask for the backend and ReactJS for the frontend.',
techStack: ['Flask', 'ReactJS'],

    },
    
];

export const skillsWork = [
    'NodeJS',
    'Python',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'Kubernetes',
    'Jenkis',
    'Microsoft Azure',
];

export const certificates = [
    'CompTIA  A+',
    'Jenkins',
    'Traefik',
    'GitHub Actions',
];

export const articles = [
    {
        title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
        resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
        url:
            "https://medium.com/ai-mind-labs/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-e473a9847878",
        image: a1
    },
    {
        title: "How AI can inherit our biases",
        resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
        url: "https://medium.com/p/e3a367a18104",
        image: a5
    },
    {
        title: "Google Search vs Local PC Search",
        resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
        url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
        image: a4
    },
    {
        title: "The JavaScript Universe: Imperfections and Essential Insights",
        resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
        url:
            "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
        image: a2
    },
];


export const metadata = {
    title: "John Clayton Blanc",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "../assets/images/profile.webp",
    pageUrl: "https://www.johnclaytonblanc.com"
};
