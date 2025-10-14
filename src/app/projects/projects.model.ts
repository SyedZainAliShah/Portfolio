export interface Project {
  title: string;
  description: string;
  icon: string; // Using Font Awesome icon classes instead of images
  projectUrl?: string;
  tags: string[];
}