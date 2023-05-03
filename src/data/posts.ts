import { BlogPost } from '@/types/blog';

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    author: 'Jane Smith',
    date: '2023-04-10T14:30:00Z',
    summary:
      "A beginner's guide to building web applications with Next.js, a popular React framework.",
    content: `Next.js is a powerful framework for building server-rendered React applications. In this blog post, we'll explore the basics of setting up a new Next.js project, creating pages and components, and deploying your application.

To get started, you'll need to have Node.js installed on your computer. Once you have Node.js installed, you can create a new Next.js project by running the following command: npx create-next-app my-next-app. This will create a new folder called "my-next-app" containing the necessary files and dependencies for your project.

Now, let's dive into the structure of a Next.js application...`,
  },
  {
    id: 2,
    slug: 'introduction-to-typescript',
    title: 'Introduction to TypeScript',
    author: 'John Doe',
    date: '2023-04-20T10:15:00Z',
    summary:
      'Learn the basics of TypeScript, a statically-typed superset of JavaScript that brings type safety to your code.',
    content: `TypeScript is a popular programming language that builds on JavaScript by adding static types. By using TypeScript, you can catch errors early during development and improve the overall quality of your code.

To get started with TypeScript, you'll first need to install the TypeScript compiler globally on your computer by running the following command: npm install -g typescript.

Now that you have the TypeScript compiler installed, let's go over some of the fundamental concepts in TypeScript, such as types, interfaces, and classes...`,
  },
  {
    id: 3,
    slug: 'responsive-design-with-tailwind-css',
    title: 'Responsive Design with Tailwind CSS',
    author: 'Alice Johnson',
    date: '2023-04-30T08:45:00Z',
    summary:
      'Discover how to create responsive designs easily using utility-first CSS framework Tailwind CSS.',
    content: `Tailwind CSS is a popular utility-first CSS framework that makes it easy to create responsive designs without writing custom CSS. With Tailwind CSS, you can build modern, responsive layouts by combining utility classes directly in your HTML.

To get started with Tailwind CSS, you'll need to install it as a dependency in your project by running the following command: npm install tailwindcss.

Once you have Tailwind CSS installed, you can start using its utility classes in your HTML or JSX files. Let's go over some of the key concepts and features of Tailwind CSS, such as breakpoints, container, and flexbox utilities...`,
  },
  {
    id: 4,
    slug: 'building-a-restful-api-with-nodejs-and-express',
    title: 'Building a RESTful API with Node.js and Express',
    author: 'Bob Martin',
    date: '2023-05-01T17:00:00Z',
    summary:
      'Learn how to create a RESTful API using Node.js and the Express framework.',
    content: `In this blog post, we will explore how to build a RESTful API using Node.js and Express, a popular web framework for Node.js.

To get started, you'll need to have Node.js installed on your computer. Once you have Node.js installed, you can create a new Node.js project by running the following command: npm init -y. This will generate a new package.json file in your project folder.

Next, let's install Express and other necessary dependencies for our API...`,
  },
];
