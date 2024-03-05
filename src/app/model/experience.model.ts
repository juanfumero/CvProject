export interface Experience {
    title: string;
    icon?: string;
    experienceList: Job[];
  }
  
  export interface Job {
    rol: string;
    company: string;
    yearsWorked: string;
    description: string;
    isCredential?: boolean;
    credentialInfo?: string;
  }

