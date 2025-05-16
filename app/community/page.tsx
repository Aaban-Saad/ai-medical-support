import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingUp, Users, MapPin, Calendar, ExternalLink, Info } from "lucide-react"

export default function CommunityPage() {
  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-2">Community Health Bulletin</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Stay informed about health trends and alerts in your community
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg text-red-800 dark:text-red-300">Health Alerts</CardTitle>
              <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <CardDescription className="text-red-700 dark:text-red-300">Important health warnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-white dark:bg-gray-800 rounded-md">
                <div className="flex items-center mb-1">
                  <Badge variant="destructive" className="mr-2">
                    Urgent
                  </Badge>
                  <span className="text-sm font-medium">Flu Outbreak</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Increased cases reported in your area. Consider vaccination if not already done.
                </p>
              </div>
              <div className="p-2 bg-white dark:bg-gray-800 rounded-md">
                <div className="flex items-center mb-1">
                  <Badge variant="outline" className="mr-2 border-amber-500 text-amber-500">
                    Moderate
                  </Badge>
                  <span className="text-sm font-medium">Pollen Alert</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  High pollen counts expected this week. Take precautions if you have allergies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Trending Conditions</CardTitle>
              <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <CardDescription>Common health issues in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Seasonal Allergies</span>
                <Badge className="bg-blue-600">High</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Common Cold</span>
                <Badge className="bg-blue-600">High</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Migraine</span>
                <Badge variant="outline" className="border-blue-600 text-blue-600">
                  Moderate
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Gastroenteritis</span>
                <Badge variant="outline" className="border-blue-600 text-blue-600">
                  Moderate
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">Local Resources</CardTitle>
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <CardDescription>Healthcare facilities near you</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-sm font-medium">Community Health Center</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">2.3 miles away • Open 24/7</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                  Get directions <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
              <div className="p-2 bg-gray-50 dark:bg-gray-800 rounded-md">
                <p className="text-sm font-medium">Memorial Hospital</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">5.1 miles away • Emergency Services</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 dark:text-blue-400">
                  Get directions <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Seasonal Health Tips</CardTitle>
            <CardDescription>Recommendations for the current season</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3 mt-0.5">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">Spring Health Guide</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Stay hydrated as temperatures rise</li>
                    <li>Use air purifiers if you have allergies</li>
                    <li>Gradually increase outdoor activity</li>
                    <li>Apply sunscreen even on cloudy days</li>
                    <li>Keep windows closed during high pollen counts</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3 mt-0.5">
                  <Info className="h-4 w-4 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1">Preventive Measures</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Wash hands frequently to prevent infection spread</li>
                    <li>Stay up-to-date with vaccinations</li>
                    <li>Use insect repellent when outdoors</li>
                    <li>Stay home if feeling unwell</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Community Health Events</CardTitle>
            <CardDescription>Upcoming health-related events in your area</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  title: "Free Health Screening",
                  date: "May 20, 2025",
                  time: "9:00 AM - 2:00 PM",
                  location: "Community Center",
                  description: "Blood pressure, glucose, and cholesterol screening",
                },
                {
                  title: "Mental Health Awareness Workshop",
                  date: "May 25, 2025",
                  time: "6:00 PM - 8:00 PM",
                  location: "Public Library",
                  description: "Learn about stress management and mental wellness",
                },
                {
                  title: "Vaccination Drive",
                  date: "June 5, 2025",
                  time: "10:00 AM - 4:00 PM",
                  location: "Memorial Hospital",
                  description: "Seasonal flu and routine vaccinations available",
                },
              ].map((event, index) => (
                <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                  <h3 className="font-medium mb-1">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>
                      {event.date} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{event.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Regional Health Trends</CardTitle>
          <CardDescription>Health statistics and trends in your region</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Disease Prevalence</h3>
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Respiratory Conditions</span>
                    <span className="font-medium">32%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cardiovascular</span>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "18%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Gastrointestinal</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Age Distribution</h3>
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Under 18</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "22%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>18-45</span>
                    <span className="font-medium">38%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "38%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>46-65</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Over 65</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Healthcare Access</h3>
                <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Hospitals</span>
                  <Badge className="bg-blue-600">3 within 10 miles</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Clinics</span>
                  <Badge className="bg-blue-600">7 within 10 miles</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pharmacies</span>
                  <Badge className="bg-blue-600">12 within 10 miles</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Emergency Response</span>
                  <Badge className="bg-green-600">8 min avg. response</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
