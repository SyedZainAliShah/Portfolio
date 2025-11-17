// This interface defines the structure for a link button on a project card
export interface ProjectButton {
  label: string;
  url: string;
  /** Optional class for specific styling, e.g., 'btn-primary' for a live demo */
  styleClass?: string;
  /** Optional Font Awesome icon, e.g., 'fab fa-github' */
  icon?: string;
}

export interface Project {
  header: string; // The main title, e.g., "🔐 UEBA Cybersecurity Dashboard"
  subheader: string; // e.g., "Professional Experience | GhangorCloud"
  description: string;
  achievements: string[]; // Replaces "Key Achievements" or "Key Features"
  tags: string[]; // Used for the "Tech Stack Badges"
  buttons: ProjectButton[];
  highlightBadge?: string; // For optional badges like "🇩🇪 German Healthcare Project"
}