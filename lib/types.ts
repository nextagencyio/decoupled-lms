// Base node type
export interface DrupalNode {
  id: string
  title: string
  path: string
  created: {
    timestamp: number
  }
  changed: {
    timestamp: number
  }
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Course
export interface DrupalCourse extends DrupalNode {
  body?: {
    processed: string
    summary?: string
  }
  courseCategory?: DrupalTerm[]
  skillLevel?: DrupalTerm[]
  instructorName?: string
  duration?: string
  lessonsCount?: string
  price?: string
  enrollmentCount?: string
  rating?: string
  learningOutcomes?: string[]
  prerequisites?: string
  certificateIncluded?: boolean
  image?: DrupalImage
}

export interface CoursesData {
  nodeCourses: {
    nodes: DrupalCourse[]
  }
}

// Instructor
export interface DrupalInstructor extends DrupalNode {
  body?: {
    processed: string
  }
  expertise?: DrupalTerm[]
  coursesTaught?: string
  totalStudents?: string
  instructorRating?: string
  credentials?: string[]
  websiteUrl?: string
  photo?: DrupalImage
}

export interface InstructorsData {
  nodeInstructors: {
    nodes: DrupalInstructor[]
  }
}

// Testimonial
export interface DrupalTestimonial extends DrupalNode {
  body?: {
    processed: string
  }
  studentName?: string
  studentRole?: string
  courseTaken?: string
  quote?: {
    processed: string
  }
  studentRating?: string
  photo?: DrupalImage
}

export interface TestimonialsData {
  nodeTestimonials: {
    nodes: DrupalTestimonial[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {
  body?: {
    processed: string
  }
}

// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: Array<{
    name: string
    url: string
    width: number
    height: number
  }>
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
