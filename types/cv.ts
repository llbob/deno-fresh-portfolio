export interface CVSection {
  title: string;
  items: string[];
}

export interface CV {
  subtitle: string;
  sections: CVSection[];
  content: string;
} 