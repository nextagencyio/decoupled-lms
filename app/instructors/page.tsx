import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_INSTRUCTORS } from '@/lib/queries'
import { InstructorsData } from '@/lib/types'
import Header from '../components/Header'
import InstructorCard from '../components/InstructorCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Instructors | Lms',
  description: 'Browse our instructors.',
}

async function getInstructors() {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<InstructorsData>({
      query: GET_INSTRUCTORS,
      variables: { first: 50 },
      fetchPolicy: 'cache-first',
    })
    return data?.nodeInstructors?.nodes || []
  } catch (error) {
    console.error('Error fetching instructors:', error)
    return []
  }
}

export default async function InstructorsPage() {
  const items = await getInstructors()

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Instructors
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Explore our instructors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Instructors Yet</h2>
              <p className="text-gray-500">
                Instructors will appear here once content is imported.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <InstructorCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
