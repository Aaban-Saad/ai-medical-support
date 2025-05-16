"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Calendar,
  FileText,
  Clock,
  AlertCircle,
  Plus,
  ChevronRight,
  Activity,
  Pill,
  FileSearch,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400">Patient Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400">Track your health journey and medical history</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> New Consultation
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <Activity className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Consultation</p>
                  <p className="text-xs text-gray-500">Today, 10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                  <FileSearch className="h-4 w-4 text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Report Uploaded</p>
                  <p className="text-xs text-gray-500">Yesterday, 3:15 PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
                  <Pill className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Medication Reminder</p>
                  <p className="text-xs text-gray-500">3 days ago, 9:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Health Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Recent Conditions:</span>
                <span className="text-sm font-medium">Migraine, Common Cold</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Last Consultation:</span>
                <span className="text-sm font-medium">Today</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Symptom Trend:</span>
                <span className="text-sm font-medium text-amber-500">Improving</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Records:</span>
                <span className="text-sm font-medium">12 entries</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Upcoming Reminders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                  <Pill className="h-4 w-4 text-red-600 dark:text-red-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Take medication</p>
                  <p className="text-xs text-gray-500">Today, 8:00 PM</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Follow-up check</p>
                  <p className="text-xs text-gray-500">Tomorrow, 10:00 AM</p>
                </div>
                <Button variant="ghost" size="sm">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">Medical History</TabsTrigger>
          <TabsTrigger value="reports">Test Reports</TabsTrigger>
          <TabsTrigger value="analytics">Health Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Consultations</CardTitle>
              <CardDescription>Your recent AI Doctor consultations and outcomes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "May 16, 2025",
                    symptoms: ["Headache", "Fatigue"],
                    diagnosis: "Migraine",
                    status: "Active",
                  },
                  {
                    date: "May 10, 2025",
                    symptoms: ["Cough", "Sore throat"],
                    diagnosis: "Common Cold",
                    status: "Resolved",
                  },
                  {
                    date: "April 28, 2025",
                    symptoms: ["Rash", "Itching"],
                    diagnosis: "Contact Dermatitis",
                    status: "Resolved",
                  },
                ].map((consultation, index) => (
                  <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">{consultation.date}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Diagnosis: {consultation.diagnosis}</p>
                      </div>
                      <div>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            consultation.status === "Active"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                              : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          }`}
                        >
                          {consultation.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {consultation.symptoms.map((symptom, i) => (
                        <span key={i} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md text-xs">
                          {symptom}
                        </span>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 p-0 h-auto">
                      View details <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Symptom Tracker</CardTitle>
              <CardDescription>Track your symptoms over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                <div className="text-center">
                  <BarChart className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-500 dark:text-gray-400">Symptom tracking visualization</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">(Placeholder for symptom frequency chart)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical History</CardTitle>
              <CardDescription>Your complete medical history and records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Conditions</h3>
                  <div className="space-y-3">
                    {[
                      {
                        condition: "Migraine",
                        firstDiagnosed: "May 2025",
                        status: "Active",
                        notes: "Recurring headaches with sensitivity to light",
                      },
                      {
                        condition: "Seasonal Allergies",
                        firstDiagnosed: "March 2024",
                        status: "Recurring",
                        notes: "Symptoms worsen in spring and fall",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.condition}</h4>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              item.status === "Active"
                                ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          First diagnosed: {item.firstDiagnosed}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Medications</h3>
                  <div className="space-y-3">
                    {[
                      {
                        name: "Ibuprofen",
                        dosage: "400mg as needed",
                        purpose: "Migraine pain relief",
                        status: "Current",
                      },
                      {
                        name: "Loratadine",
                        dosage: "10mg daily",
                        purpose: "Allergy relief",
                        status: "Seasonal",
                      },
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.name}</h4>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs ${
                              item.status === "Current"
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Dosage: {item.dosage}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Purpose: {item.purpose}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Medical Reports</CardTitle>
              <CardDescription>Your uploaded medical test reports and documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Blood Test Results.pdf",
                    date: "May 10, 2025",
                    type: "Laboratory",
                    size: "1.2 MB",
                  },
                  {
                    name: "MRI Scan Report.pdf",
                    date: "April 15, 2025",
                    type: "Radiology",
                    size: "3.5 MB",
                  },
                  {
                    name: "Allergy Test Results.pdf",
                    date: "March 22, 2025",
                    type: "Laboratory",
                    size: "0.8 MB",
                  },
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <div className="flex text-xs text-gray-500 space-x-3 mt-1">
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Health Analytics</CardTitle>
              <CardDescription>Insights and trends from your health data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Symptom Frequency</h3>
                  <div className="h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-md">
                    <div className="text-center">
                      <BarChart className="h-10 w-10 mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500 dark:text-gray-400">Symptom frequency chart</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500">
                        (Placeholder for symptom frequency visualization)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Health Insights</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Migraine Pattern Detected</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            Your headaches tend to occur more frequently on weekdays, possibly related to work stress.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
                      <div className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Improvement Trend</p>
                          <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                            Your symptom severity has decreased by 30% over the past month.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
