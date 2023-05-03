import { BlogPost } from '@/types/blog';

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: 'introduction-to-artificial-intelligence',
    title: 'Introduction to Artificial Intelligence',
    author: 'Jane Smith',
    date: '2023-04-10T14:30:00Z',
    summary:
      'An overview of artificial intelligence, its history, and its role in modern technology.',
    content: `Artificial intelligence (AI) is a rapidly growing field that involves the creation of machines and software capable of intelligent behavior. In this blog post, we'll explore the history of AI, its fundamental concepts, and its impact on various industries.

AI has its roots in the early days of computing when researchers started to develop algorithms that could mimic human intelligence...`,
  },
  {
    id: 2,
    slug: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    author: 'John Doe',
    date: '2023-04-20T10:15:00Z',
    summary:
      'An introduction to machine learning, its core principles, and popular algorithms.',
    content: `Machine learning, a subset of artificial intelligence, focuses on building algorithms that enable computers to learn from and make decisions based on data. In this blog post, we'll cover the basic principles of machine learning, its main types, and some popular algorithms used in the field.

Machine learning involves training a model using data to make predictions or decisions...`,
  },
  {
    id: 3,
    slug: 'deep-learning-and-neural-networks',
    title: 'Deep Learning and Neural Networks',
    author: 'Alice Johnson',
    date: '2023-04-30T08:45:00Z',
    summary:
      'A beginner-friendly guide to deep learning and neural networks, including their architecture and applications.',
    content: `Deep learning is a subfield of machine learning that focuses on neural networks with many layers. These deep neural networks can learn complex patterns and representations from large amounts of data. In this blog post, we'll go over the fundamentals of deep learning, the architecture of neural networks, and their applications in various domains.

A neural network consists of interconnected layers of neurons, or nodes...`,
  },
  {
    id: 4,
    slug: 'natural-language-processing',
    title: 'Natural Language Processing',
    author: 'Bob Martin',
    date: '2023-05-01T17:00:00Z',
    summary:
      'An introduction to natural language processing (NLP), its techniques, and applications.',
    content: `Natural language processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and human languages. In this blog post, we'll explore the basics of NLP, its key techniques, and its applications in various industries.

NLP involves the development of algorithms that can understand, interpret, and generate human language in a way that is both meaningful and useful...`,
  },
];
