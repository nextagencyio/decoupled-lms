// Tagged template that returns the query string
const gql = (strings: TemplateStringsArray, ...values: any[]) => strings.reduce((a, s, i) => a + s + (values[i] || ''), '')

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Courses
export const GET_COURSES = gql`
  query GetCourses($first: Int = 20) {
    nodeCourses(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCourse {
          body {
            processed
            summary
          }
          courseCategory {
            ... on TermInterface {
              id
              name
            }
          }
          skillLevel {
            ... on TermInterface {
              id
              name
            }
          }
          instructorName
          duration
          lessonsCount
          price
          enrollmentCount
          rating
          learningOutcomes
          prerequisites
          certificateIncluded
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_COURSE_BY_PATH = gql`
  query GetCourseByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCourse {
            id
            title
            path
            body {
              processed
            }
            courseCategory {
              ... on TermInterface {
                id
                name
              }
            }
            skillLevel {
              ... on TermInterface {
                id
                name
              }
            }
            instructorName
            duration
            lessonsCount
            price
            enrollmentCount
            rating
            learningOutcomes
            prerequisites
            certificateIncluded
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Instructors
export const GET_INSTRUCTORS = gql`
  query GetInstructors($first: Int = 50) {
    nodeInstructors(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeInstructor {
          body {
            processed
          }
          expertise {
            ... on TermInterface {
              id
              name
            }
          }
          coursesTaught
          totalStudents
          instructorRating
          credentials
          websiteUrl
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_INSTRUCTOR_BY_PATH = gql`
  query GetInstructorByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeInstructor {
            id
            title
            path
            body {
              processed
            }
            expertise {
              ... on TermInterface {
                id
                name
              }
            }
            coursesTaught
            totalStudents
            instructorRating
            credentials
            websiteUrl
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Testimonials
export const GET_TESTIMONIALS = gql`
  query GetTestimonials($first: Int = 20) {
    nodeTestimonials(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTestimonial {
          body {
            processed
          }
          studentName
          studentRole
          courseTaken
          quote {
            processed
          }
          studentRating
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_TESTIMONIAL_BY_PATH = gql`
  query GetTestimonialByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeTestimonial {
            id
            title
            path
            body {
              processed
            }
            studentName
            studentRole
            courseTaken
            quote {
              processed
            }
            studentRating
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeCourse {
            id
            title
            path
            body {
              processed
            }
            courseCategory {
              ... on TermInterface {
                id
                name
              }
            }
            skillLevel {
              ... on TermInterface {
                id
                name
              }
            }
            instructorName
            duration
            lessonsCount
            price
            enrollmentCount
            rating
            learningOutcomes
            prerequisites
            certificateIncluded
            image {
              url
              alt
              width
              height
            }
          }
          ... on NodeInstructor {
            id
            title
            path
            body {
              processed
            }
            expertise {
              ... on TermInterface {
                id
                name
              }
            }
            coursesTaught
            totalStudents
            instructorRating
            credentials
            websiteUrl
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeTestimonial {
            id
            title
            path
            body {
              processed
            }
            studentName
            studentRole
            courseTaken
            quote {
              processed
            }
            studentRating
            photo {
              url
              alt
              width
              height
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured courses for homepage (limit to 3)
export const GET_FEATURED_COURSES = gql`
  query GetFeaturedCourses {
    nodeCourses(first: 3, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCourse {
          courseCategory {
            ... on TermInterface {
              id
              name
            }
          }
          skillLevel {
            ... on TermInterface {
              id
              name
            }
          }
          instructorName
          duration
          price
          rating
          image {
            url
            alt
            variations(styles: [MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

// Featured testimonials for homepage
export const GET_FEATURED_TESTIMONIALS = gql`
  query GetFeaturedTestimonials {
    nodeTestimonials(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeTestimonial {
          studentName
          studentRole
          courseTaken
          quote {
            processed
          }
          studentRating
          photo {
            url
            alt
            variations(styles: [THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`
