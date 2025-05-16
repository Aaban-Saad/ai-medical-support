import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  AlertCircle,
  FileText,
  BookOpen,
  Youtube,
  FileCode,
  Calendar,
  Pill,
  Leaf,
  Clock,
  ExternalLink,
} from "lucide-react"

export default function ConsultationResults() {
  return (
    <Tabs defaultValue="analysis">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="analysis">Analysis</TabsTrigger>
        <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        <TabsTrigger value="resources">Resources</TabsTrigger>
        <TabsTrigger value="routine">Daily Routine</TabsTrigger>
        <TabsTrigger value="remedies">Natural Remedies</TabsTrigger>
      </TabsList>

      <TabsContent value="analysis">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Symptom Analysis</CardTitle>
                <CardDescription>Based on the information you provided</CardDescription>
              </div>
              <Alert className="w-fit">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Not a medical diagnosis</AlertTitle>
                <AlertDescription>
                  This is an AI-generated analysis, not a professional medical diagnosis.
                </AlertDescription>
              </Alert>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Possible Condition</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-amber-500">Primary: Migraine</Badge>
                <Badge variant="outline">Tension Headache</Badge>
                <Badge variant="outline">Dehydration</Badge>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Based on your symptoms of recurring headaches and fatigue, the most likely condition appears to be
                migraine. Migraines are intense headaches often accompanied by sensitivity to light, sound, and
                sometimes nausea.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Symptom Analysis</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <span className="font-medium">Headaches:</span> The recurring nature and intensity suggest a migraine
                  pattern rather than a tension headache.
                </li>
                <li>
                  <span className="font-medium">Fatigue:</span> Often associated with migraines, especially in the
                  prodrome and postdrome phases.
                </li>
                <li>
                  <span className="font-medium">Duration (3 days):</span> Typical migraine episodes can last from hours
                  to days, consistent with your report.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Questions for Clarification</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                  <p className="font-medium">Do you experience any of these additional symptoms?</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-700 dark:text-gray-300">
                    <li>Sensitivity to light or sound</li>
                    <li>Nausea or vomiting</li>
                    <li>Visual disturbances before headache onset</li>
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                  <p className="font-medium">Have you identified any triggers for your headaches?</p>
                  <ul className="list-disc pl-5 mt-1 text-gray-700 dark:text-gray-300">
                    <li>Certain foods (aged cheese, processed foods)</li>
                    <li>Stress or changes in sleep patterns</li>
                    <li>Environmental factors (bright lights, strong smells)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="recommendations">
        <Card>
          <CardHeader>
            <CardTitle>Recommendations</CardTitle>
            <CardDescription>Suggested actions based on the analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Immediate Steps</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3 mt-0.5">
                    <Clock className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium">Rest in a dark, quiet room</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Reduce sensory stimulation during a migraine attack.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3 mt-0.5">
                    <Pill className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium">Consider over-the-counter pain relievers</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Ibuprofen or acetaminophen may help with mild to moderate symptoms.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3 mt-0.5">
                    <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                  </div>
                  <div>
                    <p className="font-medium">Stay hydrated</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Dehydration can trigger and worsen migraines.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">When to Seek Medical Care</h3>
              <Alert variant="destructive" className="mb-3">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Seek immediate medical attention if:</AlertTitle>
                <AlertDescription>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Headache is sudden and severe ("worst headache of your life")</li>
                    <li>
                      Headache accompanied by fever, stiff neck, confusion, seizures, double vision, weakness, numbness
                      or difficulty speaking
                    </li>
                    <li>Headache after a head injury</li>
                    <li>Headache that worsens despite rest and medication</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <p className="text-gray-700 dark:text-gray-300">
                For recurring migraines, consider consulting a healthcare provider for proper diagnosis and treatment
                options, especially if over-the-counter medications don't provide relief.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Prevention Strategies</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3 mt-0.5">
                    <Calendar className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Keep a headache diary</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Track when headaches occur, what you were doing, eating, and how you were feeling to identify
                      triggers.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3 mt-0.5">
                    <Clock className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Maintain regular sleep schedule</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Aim for 7-8 hours of quality sleep each night at consistent times.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3 mt-0.5">
                    <Leaf className="h-4 w-4 text-green-600 dark:text-green-300" />
                  </div>
                  <div>
                    <p className="font-medium">Stress management</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Practice relaxation techniques like deep breathing, meditation, or yoga.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="resources">
        <Card>
          <CardHeader>
            <CardTitle>Educational Resources</CardTitle>
            <CardDescription>Articles, videos, and research papers about your condition</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Articles
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Understanding Migraines: Causes, Symptoms, and Treatments",
                    source: "Mayo Clinic",
                    url: "#",
                  },
                  {
                    title: "Migraine Triggers and How to Avoid Them",
                    source: "WebMD",
                    url: "#",
                  },
                  {
                    title: "The Connection Between Stress and Migraines",
                    source: "American Migraine Foundation",
                    url: "#",
                  },
                ].map((article, index) => (
                  <li key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{article.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Source: {article.source}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Youtube className="h-5 w-5 mr-2 text-red-600" />
                Videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Migraine Explained: Causes, Symptoms, and Treatments",
                    duration: "10:23",
                    thumbnail: "/placeholder.svg?height=120&width=200",
                    url: "#",
                  },
                  {
                    title: "Quick Relief Techniques for Migraine Sufferers",
                    duration: "7:15",
                    thumbnail: "/placeholder.svg?height=120&width=200",
                    url: "#",
                  },
                ].map((video, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-md overflow-hidden">
                    <div className="relative">
                      <img src={video.thumbnail || "/placeholder.svg"} alt={video.title} className="w-full" />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-1 py-0.5 rounded">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-sm">{video.title}</p>
                      <Button variant="ghost" size="sm" className="mt-1 p-0 h-auto" asChild>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                          Watch <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <FileCode className="h-5 w-5 mr-2 text-purple-600" />
                Research Papers
              </h3>
              <ul className="space-y-3">
                {[
                  {
                    title: "Recent Advances in Understanding Migraine Mechanisms",
                    authors: "Johnson et al.",
                    journal: "Neurology Research, 2024",
                    url: "#",
                  },
                  {
                    title: "Effectiveness of Non-Pharmacological Interventions for Migraine Prevention",
                    authors: "Smith, Lee, & Wong",
                    journal: "Journal of Pain Management, 2023",
                    url: "#",
                  },
                ].map((paper, index) => (
                  <li key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{paper.title}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{paper.authors}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">{paper.journal}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={paper.url} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="routine">
        <Card>
          <CardHeader>
            <CardTitle>Recommended Daily Routine</CardTitle>
            <CardDescription>A suggested daily schedule to help manage your condition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Morning Routine</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium text-blue-600 dark:text-blue-400 mr-2">6:00 AM:</span>
                    <span>Wake up at the same time each day to maintain a consistent sleep schedule.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-600 dark:text-blue-400 mr-2">6:15 AM:</span>
                    <span>Drink a full glass of water to rehydrate after sleep.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-600 dark:text-blue-400 mr-2">6:30 AM:</span>
                    <span>Light stretching or gentle yoga for 10-15 minutes to reduce tension.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-blue-600 dark:text-blue-400 mr-2">7:00 AM:</span>
                    <span>Balanced breakfast avoiding known migraine triggers (e.g., skip caffeine if sensitive).</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Daytime Routine</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium text-green-600 dark:text-green-400 mr-2">Every 2 hours:</span>
                    <span>Take a short break from screens and drink water.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-green-600 dark:text-green-400 mr-2">12:00 PM:</span>
                    <span>Lunch with balanced protein, complex carbs, and vegetables.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-green-600 dark:text-green-400 mr-2">2:00 PM:</span>
                    <span>Short relaxation break - deep breathing exercises for 5 minutes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-green-600 dark:text-green-400 mr-2">4:00 PM:</span>
                    <span>Light snack to maintain blood sugar levels.</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold mb-2">Evening Routine</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 dark:text-purple-400 mr-2">6:00 PM:</span>
                    <span>Dinner with anti-inflammatory foods (fatty fish, leafy greens, nuts).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 dark:text-purple-400 mr-2">7:30 PM:</span>
                    <span>Light physical activity like walking for 20-30 minutes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 dark:text-purple-400 mr-2">8:30 PM:</span>
                    <span>Begin winding down - reduce blue light exposure (screens).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 dark:text-purple-400 mr-2">9:30 PM:</span>
                    <span>Relaxation techniques - meditation or gentle stretching.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-purple-600 dark:text-purple-400 mr-2">10:00 PM:</span>
                    <span>Sleep at the same time each night in a cool, dark room.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Weekly Habits</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Track headaches in a journal, noting potential triggers.</li>
                  <li>Practice stress-reduction activities at least 3 times per week.</li>
                  <li>Maintain consistent meal and sleep times, even on weekends.</li>
                  <li>Moderate exercise 3-5 times per week (avoid high-intensity during migraine-prone periods).</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="remedies">
        <Card>
          <CardHeader>
            <CardTitle>Natural Remedies</CardTitle>
            <CardDescription>Evidence-based natural approaches that may help with your condition</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Important Note</AlertTitle>
                <AlertDescription>
                  These natural remedies are complementary approaches and not replacements for medical treatment.
                  Consult with a healthcare provider before trying new remedies, especially if you have existing health
                  conditions or take medications.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-md">
                  <div className="flex items-center mb-3">
                    <Leaf className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                    <h3 className="text-lg font-semibold">Herbal Remedies</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="font-medium">Feverfew</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Some studies suggest feverfew may help prevent migraines when taken regularly.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Typical dose: 50-100mg daily of standardized extract</p>
                    </li>
                    <li>
                      <p className="font-medium">Butterbur</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        May reduce frequency and severity of migraines.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Note: Only use PA-free butterbur products from reputable sources
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Ginger</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        May help with migraine-associated nausea and has anti-inflammatory properties.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Try fresh ginger tea or supplements (550mg)</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md">
                  <div className="flex items-center mb-3">
                    <Pill className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="text-lg font-semibold">Supplements</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="font-medium">Magnesium</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Magnesium deficiency is linked to migraines. Supplementation may reduce frequency.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Typical dose: 400-600mg daily of magnesium oxide or citrate
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Vitamin B2 (Riboflavin)</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        May help reduce migraine frequency when taken regularly.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Typical dose: 400mg daily</p>
                    </li>
                    <li>
                      <p className="font-medium">Coenzyme Q10</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        May reduce migraine frequency and severity.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Typical dose: 100-300mg daily</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-md">
                  <div className="flex items-center mb-3">
                    <Clock className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                    <h3 className="text-lg font-semibold">Mind-Body Techniques</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="font-medium">Acupressure</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Applying pressure to specific points may help relieve headache pain.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Try pressing the space between your thumb and index finger for 5 minutes
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Progressive Muscle Relaxation</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Systematically tensing and relaxing muscle groups to reduce tension.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Practice for 10-15 minutes daily</p>
                    </li>
                    <li>
                      <p className="font-medium">Biofeedback</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Learning to control physiological functions like muscle tension and blood flow.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Consider working with a trained practitioner</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-md">
                  <div className="flex items-center mb-3">
                    <FileText className="h-5 w-5 text-amber-600 dark:text-amber-400 mr-2" />
                    <h3 className="text-lg font-semibold">Dietary Approaches</h3>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <p className="font-medium">Anti-inflammatory Diet</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Focus on omega-3 rich foods, fruits, vegetables, and whole grains.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Include fatty fish, flaxseeds, and olive oil</p>
                    </li>
                    <li>
                      <p className="font-medium">Elimination Diet</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Identify and remove potential food triggers from your diet.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Common triggers: aged cheese, processed foods, alcohol, caffeine, chocolate
                      </p>
                    </li>
                    <li>
                      <p className="font-medium">Hydration</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Dehydration is a common migraine trigger.
                      </p>
                      <p className="text-xs text-gray-500 mt-1">Aim for 8-10 glasses of water daily</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
