export interface Project {
  title: string
  desc: string
  tags: string[]
  img: string
  live?: string
  repo?: string
}

export const PROJECTS: Project[] = [
  {
    title: 'Recipe Finder',
    desc: 'React app fetching recipe data from a public API; responsive UI and search filters.',
    tags: ['React', 'CSS', 'MealDB API'],
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80',
    live: 'https://fe-capstone-recipe-finder.vercel.app/', repo: 'https://github.com/Dee-webtech/fe-capstone-recipe-finder',
  },
  {
    title: 'Fitness Tracker',
    desc: 'Interactive fitness tracking web app built with React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80',
    live: 'https://fitness-tracker-tsx-reactjs.vercel.app/', repo: 'https://github.com/Dee-webtech/Fitness-tracker-tsx-reactjs',
  },
  {
    title: 'Healthy Roots',
    desc: 'Herbal web shop built as an audience converting platform for health-beneficial products made with natural ingredients.',
    tags: ['WordPress', 'Elementor', 'Woo-commerce', 'Rank Math'],
    img: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=600&h=400&fit=crop&q=80',
    live: 'https://julherbals.kesug.com/',
  },
  {
    title: 'Internflare Website',
    desc: 'Full website built as an intern for Internflare with modern layout and responsive design.',
    tags: ['WordPress', 'Elementor', 'Blocksy Theme', 'Yoast SEO'],
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80',
    live: 'https://deewebtech.kesug.com/',
  },
  {
    title: "Content Writer's Portfolio",
    desc: 'Transform ideas into appealing stories. Connect to directly your audience, and rise above your competition.',
    tags: ['TypeScript', 'TailwindCSS', 'React'],
    img: '/content-writer.jpg',
    live: 'https://content-writer-portfolio-chi.vercel.app/', repo: 'https://github.com/Dee-webtech/Content-Writer-Portfolio'
  },
  {
    title: 'Simple Dev Portfolio',
    desc: 'Simple portfolio created with JavaScript.',
    tags: ['HTML5', 'CSS', 'JavaScript'],
    img: '/simple-portfolio.jpg',
    live: 'https://portfolio-delight.vercel.app/', repo: 'https://github.com/Dee-webtech/portfolio-delight',
  },
]