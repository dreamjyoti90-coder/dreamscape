import { groq } from 'next-sanity'

// Dream Post fragment
const dreamPostFields = groq`
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  coverImage,
  dreamType,
  dreamMood,
  tags,
  featured,
  "author": author->{
    name,
    slug,
    avatar {
      asset->
    }
  }
`

// Get all dream posts
export const allDreamPostsQuery = groq`
  *[_type == "dreamPost"] | order(publishedAt desc) {
    ${dreamPostFields}
  }
`

// Get featured dream posts
export const featuredDreamPostsQuery = groq`
  *[_type == "dreamPost" && featured == true] | order(publishedAt desc) [0...3] {
    ${dreamPostFields}
  }
`

// Get recent dream posts
export const recentDreamPostsQuery = groq`
  *[_type == "dreamPost"] | order(publishedAt desc) [0...9] {
    ${dreamPostFields}
  }
`

// Get single dream post by slug
export const dreamPostBySlugQuery = groq`
  *[_type == "dreamPost" && slug.current == $slug][0] {
    ${dreamPostFields},
    body,
    "relatedPosts": *[_type == "dreamPost" && dreamType == ^.dreamType && slug.current != $slug] | order(publishedAt desc) [0...3] {
      title,
      slug,
      coverImage,
      publishedAt,
      dreamType,
      dreamMood
    }
  }
`

// Get dream posts by type
export const dreamPostsByTypeQuery = groq`
  *[_type == "dreamPost" && dreamType == $type] | order(publishedAt desc) {
    ${dreamPostFields}
  }
`

// Get dream posts by mood
export const dreamPostsByMoodQuery = groq`
  *[_type == "dreamPost" && dreamMood == $mood] | order(publishedAt desc) {
    ${dreamPostFields}
  }
`

// Search dream posts
export const searchDreamPostsQuery = groq`
  *[_type == "dreamPost" && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    $searchTerm in tags
  )] | order(publishedAt desc) {
    ${dreamPostFields}
  }
`

// Get site settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteTitle,
    siteDescription,
    logo,
    socialLinks,
    footerText
  }
`

// Get all authors
export const allAuthorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    slug,
    avatar,
    bio
  }
`
