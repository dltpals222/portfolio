import ContactForm from './components/ContactForm'
import SocialLinks from './components/SocialLinks'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-primary/5 dark:to-secondary/5">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12 font-geist-sans text-gray-800 dark:text-gray-100">Contact</h1>
        <div className="grid md:grid-cols-2 gap-12 text-gray-700 dark:text-gray-200">
          <ContactForm />
          <SocialLinks />
        </div>
      </div>
    </div>
  )
} 