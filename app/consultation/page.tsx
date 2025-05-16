"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mic, ImageIcon, Send, Loader2, FileText, X } from "lucide-react"
import ConsultationResults from "@/components/consultation-results"

export default function ConsultationPage() {
  const [symptoms, setSymptoms] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!symptoms && !selectedImage && !selectedFile) return

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setShowResults(true)
    }, 2000)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file.name)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)

    // Simulate voice recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false)
        setSymptoms((prev) => prev + " I have been experiencing headaches and fatigue for the past three days.")
      }, 3000)
    }
  }

  const resetConsultation = () => {
    setSymptoms("")
    setSelectedImage(null)
    setSelectedFile(null)
    setShowResults(false)
  }

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400 mb-6">AI Doctor Consultation</h1>

      {!showResults ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Describe Your Symptoms</CardTitle>
                <CardDescription>
                  Tell us what you're experiencing in detail. The more information you provide, the better our AI can
                  assist you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Describe your symptoms here... (e.g., I've been having a headache for 3 days, along with fever and fatigue)"
                      className="min-h-[150px]"
                      value={symptoms}
                      onChange={(e) => setSymptoms(e.target.value)}
                    />

                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant={isRecording ? "destructive" : "outline"}
                        onClick={toggleRecording}
                        className="flex items-center gap-2"
                      >
                        {isRecording ? (
                          <>
                            <X className="h-4 w-4" /> Stop Recording
                          </>
                        ) : (
                          <>
                            <Mic className="h-4 w-4" /> Voice Input
                          </>
                        )}
                      </Button>
                      {isRecording && <span className="text-sm text-red-500 animate-pulse">Recording...</span>}
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Tabs defaultValue="image" className="mt-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="image">Upload Image</TabsTrigger>
                <TabsTrigger value="report">Upload Medical Report</TabsTrigger>
              </TabsList>
              <TabsContent value="image">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Symptom Image</CardTitle>
                    <CardDescription>
                      Upload an image of visible symptoms (rash, wound, etc.) to help with analysis.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedImage ? (
                      <div className="relative">
                        <img
                          src={selectedImage || "/placeholder.svg"}
                          alt="Uploaded symptom"
                          className="max-h-[300px] rounded-md mx-auto"
                        />
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setSelectedImage(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center">
                        <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Drag and drop an image, or click to browse
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          className="mt-4 mx-auto max-w-xs"
                          onChange={handleImageUpload}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="report">
                <Card>
                  <CardHeader>
                    <CardTitle>Upload Medical Report</CardTitle>
                    <CardDescription>Upload any medical test reports or documents for analysis.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedFile ? (
                      <div className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-blue-600 mr-2" />
                          <span>{selectedFile}</span>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => setSelectedFile(null)}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center">
                        <FileText className="h-12 w-12 mx-auto text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                          Upload medical reports (PDF, JPG, PNG)
                        </p>
                        <Input
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="mt-4 mx-auto max-w-xs"
                          onChange={handleFileUpload}
                        />
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
                <CardDescription>Provide basic information to help with the analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="Enter your age" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <select
                      id="gender"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City/Region" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="language">Preferred Language</Label>
                    <select
                      id="language"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="bn">Bengali</option>
                      <option value="hi">Hindi</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={handleSubmit}
                  disabled={isLoading || (!symptoms && !selectedImage && !selectedFile)}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Consultation
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-blue-900 dark:text-blue-400">Consultation Results</h2>
            <Button variant="outline" onClick={resetConsultation}>
              Start New Consultation
            </Button>
          </div>
          <ConsultationResults />
        </div>
      )}
    </div>
  )
}
