import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Stethoscope, Users, ImageIcon, Mic, Brain, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900">AI-Powered Healthcare Assistant</h1>
              <p className="text-lg text-gray-700">
                Bringing medical guidance to underserved areas. Get symptom analysis, medical advice, and health
                recommendations when access to healthcare professionals is limited.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Start Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button size="lg" variant="outline">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="AI Doctor Illustration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">How AI Doctor Can Help You</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Stethoscope className="h-10 w-10 text-blue-600" />}
              title="Symptom Analysis"
              description="Describe your symptoms and get AI-powered analysis to understand potential conditions."
            />
            <FeatureCard
              icon={<ImageIcon className="h-10 w-10 text-blue-600" />}
              title="Image Recognition"
              description="Upload images of visible symptoms for enhanced diagnosis assistance."
            />
            <FeatureCard
              icon={<Mic className="h-10 w-10 text-blue-600" />}
              title="Voice to Text"
              description="Describe your symptoms verbally if typing is difficult or inconvenient."
            />
            <FeatureCard
              icon={<Brain className="h-10 w-10 text-blue-600" />}
              title="Personalized Advice"
              description="Receive customized health recommendations based on your symptoms and history."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-blue-600" />}
              title="Health Resources"
              description="Access relevant articles, videos, and research papers about your condition."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-blue-600" />}
              title="Community Health"
              description="View health bulletins and trends in your community to stay informed."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Start Your Health Journey Today</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            AI Doctor is designed to provide guidance when access to healthcare professionals is limited. While not a
            replacement for professional medical care, it can help you take the first steps toward better health.
          </p>
          <Link href="/consultation">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Begin Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

