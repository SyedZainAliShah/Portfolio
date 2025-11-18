export interface ProjectButton {
  label: string;
  url: string;
  styleClass?: string;
  icon?: string;
}

export interface Project {
  header: string; 
  subheader: string; 
  description: string;
  achievements: string[]; 
  tags: string[]; 
  buttons: ProjectButton[];
  highlightBadge?: string; 
}