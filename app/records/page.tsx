"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Search, Calendar, Filter, Download, Trash2, Eye, Plus, FileUp } from "lucide-react"

export default function RecordsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="container mx-auto max-w-6xl py-8 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-400">Medical Records</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and access your medical documents and reports</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Upload className="mr-2 h-4 w-4" /> Upload New Record
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="md:col-span-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search records by name, type, or date..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">
            <Calendar className="mr-2 h-4 w-4" /> Date
          </Button>
          <Button variant="outline" className="flex-1">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Records</TabsTrigger>
          <TabsTrigger value="reports">Test Reports</TabsTrigger>
          <TabsTrigger value="images">Medical Images</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Medical Records</CardTitle>
              <CardDescription>View and manage all your medical documents</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Blood Test Results.pdf",
                    date: "May 10, 2025",
                    type: "Laboratory",
                    size: "1.2 MB",
                    category: "reports",
                  },
                  {
                    name: "MRI Scan Report.pdf",
                    date: "April 15, 2025",
                    type: "Radiology",
                    size: "3.5 MB",
                    category: "images",
                  },
                  {
                    name: "Allergy Test Results.pdf",
                    date: "March 22, 2025",
                    type: "Laboratory",
                    size: "0.8 MB",
                    category: "reports",
                  },
                  {
                    name: "Prescription - Migraine Medication.pdf",
                    date: "May 16, 2025",
                    type: "Prescription",
                    size: "0.5 MB",
                    category: "prescriptions",
                  },
                  {
                    name: "X-Ray Results.pdf",
                    date: "February 8, 2025",
                    type: "Radiology",
                    size: "2.1 MB",
                    category: "images",
                  },
                ]
                  .filter(
                    (record) =>
                      searchTerm === "" ||
                      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">{record.name}</p>
                          <div className="flex text-xs text-gray-500 space-x-3 mt-1">
                            <span>{record.date}</span>
                            <span>•</span>
                            <span>{record.type}</span>
                            <span>•</span>
                            <span>{record.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}

                {searchTerm !== "" &&
                  ![
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
                    {
                      name: "Prescription - Migraine Medication.pdf",
                      date: "May 16, 2025",
                      type: "Prescription",
                      size: "0.5 MB",
                    },
                    {
                      name: "X-Ray Results.pdf",
                      date: "February 8, 2025",
                      type: "Radiology",
                      size: "2.1 MB",
                    },
                  ].some(
                    (record) =>
                      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
                  ) && (
                    <div className="text-center py-8">
                      <Search className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                      <p className="text-gray-500 dark:text-gray-400">No records found matching "{searchTerm}"</p>
                      <Button variant="outline" className="mt-4">
                        Clear Search
                      </Button>
                    </div>
                  )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Test Reports</CardTitle>
              <CardDescription>Laboratory and diagnostic test results</CardDescription>
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
                    name: "Allergy Test Results.pdf",
                    date: "March 22, 2025",
                    type: "Laboratory",
                    size: "0.8 MB",
                  },
                ]
                  .filter(
                    (record) =>
                      searchTerm === "" ||
                      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">{record.name}</p>
                          <div className="flex text-xs text-gray-500 space-x-3 mt-1">
                            <span>{record.date}</span>
                            <span>•</span>
                            <span>{record.type}</span>
                            <span>•</span>
                            <span>{record.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="images">
          <Card>
            <CardHeader>
              <CardTitle>Medical Images</CardTitle>
              <CardDescription>X-rays, MRIs, and other medical imaging</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "MRI Scan Report.pdf",
                    date: "April 15, 2025",
                    type: "Radiology",
                    size: "3.5 MB",
                  },
                  {
                    name: "X-Ray Results.pdf",
                    date: "February 8, 2025",
                    type: "Radiology",
                    size: "2.1 MB",
                  },
                ]
                  .filter(
                    (record) =>
                      searchTerm === "" ||
                      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">{record.name}</p>
                          <div className="flex text-xs text-gray-500 space-x-3 mt-1">
                            <span>{record.date}</span>
                            <span>•</span>
                            <span>{record.type}</span>
                            <span>•</span>
                            <span>{record.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prescriptions">
          <Card>
            <CardHeader>
              <CardTitle>Prescriptions</CardTitle>
              <CardDescription>Medication prescriptions and treatment plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Prescription - Migraine Medication.pdf",
                    date: "May 16, 2025",
                    type: "Prescription",
                    size: "0.5 MB",
                  },
                ]
                  .filter(
                    (record) =>
                      searchTerm === "" ||
                      record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      record.date.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((record, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-8 w-8 text-blue-600 mr-3" />
                        <div>
                          <p className="font-medium">{record.name}</p>
                          <div className="flex text-xs text-gray-500 space-x-3 mt-1">
                            <span>{record.date}</span>
                            <span>•</span>
                            <span>{record.type}</span>
                            <span>•</span>
                            <span>{record.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Upload New Record</CardTitle>
          <CardDescription>Add a new medical document to your records</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="record-type">Record Type</Label>
                <select
                  id="record-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Select record type</option>
                  <option value="lab">Laboratory Report</option>
                  <option value="radiology">Radiology/Imaging</option>
                  <option value="prescription">Prescription</option>
                  <option value="summary">Visit Summary</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="record-date">Record Date</Label>
                <Input id="record-date" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="record-name">Record Name</Label>
                <Input id="record-name" placeholder="e.g., Blood Test Results" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="record-notes">Notes (Optional)</Label>
                <textarea
                  id="record-notes"
                  placeholder="Add any additional information about this record"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                ></textarea>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <FileUp className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium mb-2">Upload File</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Drag and drop your file here, or click to browse
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Supports PDF, JPG, PNG, DICOM (max 20MB)</p>
              <Input type="file" className="hidden" id="file-upload" />
              <label htmlFor="file-upload">
                <Button variant="outline" className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" /> Select File
                </Button>
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <Button variant="outline" className="mr-2">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Upload Record</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
