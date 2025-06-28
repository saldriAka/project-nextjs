"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Trash2, FileText, Download, Upload, AlertCircle } from "lucide-react"

interface FormField {
  id: string
  type: "text" | "textarea" | "json"
  label: string
  value: string
}

interface JsonFieldData {
  type: string
  value: string
}

export default function DynamicFormBuilder() {
  const [fields, setFields] = useState<FormField[]>([
    { id: "1", type: "text", label: "Name", value: "" },
    { id: "2", type: "textarea", label: "Description", value: "" },
  ])
  const [result, setResult] = useState<string>("")
  const [jsonInput, setJsonInput] = useState<string>("")
  const [importError, setImportError] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("form-to-json")

  const addField = (type: "text" | "textarea" | "json") => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      value: type === "json" ? "{}" : "",
    }
    setFields([...fields, newField])
  }

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id))
  }

  const updateField = (id: string, updates: Partial<FormField>) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, ...updates } : field)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData: Record<string, JsonFieldData> = {}

    fields.forEach((field) => {
      let processedValue = field.value

      if (field.type === "json") {
        try {
          // Validate JSON and keep as string for storage
          JSON.parse(field.value || "{}")
          processedValue = field.value || "{}"
        } catch {
          processedValue = field.value
        }
      }

      formData[field.label] = {
        type: field.type,
        value: processedValue,
      }
    })

    const jsonResult = JSON.stringify(formData, null, 2)
    setResult(jsonResult)
    console.log("Form Result:", formData)
  }

  const importFromJson = () => {
    // 👉 stop here if the textarea is blank
    const raw = jsonInput.trim()
    if (!raw) {
      setImportError("Input JSON masih kosong. Tempelkan JSON terlebih dahulu.")
      return
    }

    try {
      const parsed = JSON.parse(raw)

      // Debug: log parsed JSON
      console.log("Parsed JSON:", parsed)

      const newFields: FormField[] = []

      Object.entries(parsed).forEach(([label, data], index) => {
        console.log(`Processing field: ${label}`, data)

        if (typeof data === "object" && data !== null && "type" in data && "value" in data) {
          const fieldData = data as JsonFieldData
          console.log(`Field data:`, fieldData)

          // Lebih fleksibel dalam validasi type
          const validTypes = ["text", "textarea", "json"]
          if (validTypes.includes(fieldData.type)) {
            newFields.push({
              id: (Date.now() + index).toString(),
              type: fieldData.type as "text" | "textarea" | "json",
              label,
              value: String(fieldData.value || ""),
            })
          } else {
            console.warn(`Invalid type: ${fieldData.type}`)
          }
        } else {
          console.warn(`Invalid field structure for: ${label}`, data)
        }
      })

      console.log("New fields created:", newFields)

      if (newFields.length > 0) {
        setFields(newFields)
        setImportError("")
        setJsonInput("")
      } else {
        setImportError(
          `Tidak ada field valid yang ditemukan. Pastikan format JSON seperti: {"FieldName": {"type": "text|textarea|json", "value": "nilai"}}`,
        )
      }
    } catch (err) {
      console.error("JSON Parse Error:", err)
      setImportError(`Format JSON tidak valid: ${err instanceof Error ? err.message : "Unknown error"}`)
    }
  }

  const exportToFile = () => {
    if (!result) return

    const blob = new Blob([result], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "form-data.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const renderField = (field: FormField) => {
    switch (field.type) {
      case "text":
        return (
          <Input
            value={field.value}
            onChange={(e) => updateField(field.id, { value: e.target.value })}
            placeholder={`Enter ${field.label.toLowerCase()}`}
          />
        )

      case "textarea":
        return (
          <Textarea
            value={field.value}
            onChange={(e) => updateField(field.id, { value: e.target.value })}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            className="min-h-[100px]"
          />
        )

      case "json":
        return (
          <Textarea
            value={field.value}
            onChange={(e) => updateField(field.id, { value: e.target.value })}
            placeholder='{"key": "value"}'
            className="min-h-[120px] font-mono text-sm"
          />
        )

      default:
        return null
    }
  }

  const switchToFormTab = () => {
    setActiveTab("form-to-json")
    // Auto-generate JSON setelah switch tab
    setTimeout(() => {
      const formData: Record<string, JsonFieldData> = {}

      fields.forEach((field) => {
        let processedValue = field.value

        if (field.type === "json") {
          try {
            JSON.parse(field.value || "{}")
            processedValue = field.value || "{}"
          } catch {
            processedValue = field.value
          }
        }

        formData[field.label] = {
          type: field.type,
          value: processedValue,
        }
      })

      const jsonResult = JSON.stringify(formData, null, 2)
      setResult(jsonResult)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dynamic Form Builder</h1>
          <p className="text-gray-600">Buat form dinamis dan konversi JSON ↔ Form</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="form-to-json">Form → JSON</TabsTrigger>
            <TabsTrigger value="json-to-form">JSON → Form</TabsTrigger>
          </TabsList>

          {/* Form to JSON Tab */}
          <TabsContent value="form-to-json">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Form Builder */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Form Builder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Dynamic Fields */}
                    {fields.map((field) => (
                      <div key={field.id} className="space-y-3 p-4 border rounded-lg bg-white">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 flex-1">
                            <Input
                              value={field.label}
                              onChange={(e) => updateField(field.id, { label: e.target.value })}
                              placeholder="Field label"
                              className="flex-1"
                            />
                          </div>

                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeField(field.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">{field.label}</Label>
                          {renderField(field)}
                        </div>
                      </div>
                    ))}

                    {/* Add Field Buttons */}
                    <div className="flex gap-2 flex-wrap">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => addField("text")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add Text
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => addField("textarea")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add Textarea
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => addField("json")}
                        className="flex items-center gap-2"
                      >
                        <Plus className="w-4 h-4" />
                        Add JSON
                      </Button>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 border-t">
                      <Button type="submit" className="w-full" size="lg">
                        Generate JSON with Types
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* JSON Result */}
              <Card>
                <CardHeader>
                  <CardTitle>JSON Result (with Types)</CardTitle>
                </CardHeader>
                <CardContent>
                  {result ? (
                    <div className="space-y-4">
                      <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-auto max-h-96">
                        <pre>{result}</pre>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => navigator.clipboard.writeText(result)}
                          className="flex-1"
                        >
                          Copy JSON
                        </Button>
                        <Button variant="outline" onClick={exportToFile} className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        <Button variant="outline" onClick={() => setResult("")} className="flex-1">
                          Clear
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg mb-2">Belum ada hasil JSON</p>
                      <p className="text-sm">Isi form dan klik "Generate JSON with Types"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* JSON to Form Tab */}
          <TabsContent value="json-to-form">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* JSON Input */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Import JSON to Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="json-import">Paste JSON (with type and value structure)</Label>
                    <Textarea
                      id="json-import"
                      value={jsonInput}
                      onChange={(e) => setJsonInput(e.target.value)}
                      placeholder={`{
  "Name": {
    "type": "text",
    "value": "John Doe"
  },
  "Description": {
    "type": "textarea",
    "value": "Software developer"
  },
  "Config": {
    "type": "json",
    "value": "{\"theme\": \"dark\"}"
  }
}`}
                      className="min-h-[300px] font-mono text-sm"
                    />
                  </div>

                  {importError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{importError}</AlertDescription>
                    </Alert>
                  )}

                  <Button onClick={importFromJson} className="w-full" size="lg">
                    Import & Create Form
                  </Button>

                  <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                    <p className="font-semibold mb-2">Format JSON yang dibutuhkan:</p>
                    <pre className="text-xs">{`{
  "FieldName": {
    "type": "text|textarea|json",
    "value": "field value"
  }
}`}</pre>
                  </div>
                </CardContent>
              </Card>

              {/* Generated Form Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Generated Form Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {fields.length > 0 ? (
                    <div className="space-y-4">
                      {fields.map((field) => (
                        <div key={field.id} className="space-y-2 p-3 border rounded-lg bg-gray-50">
                          <div className="flex items-center gap-2">
                            <Label className="font-medium">{field.label}</Label>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{field.type}</span>
                          </div>
                          {renderField(field)}
                        </div>
                      ))}
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-2">
                          Form berhasil dibuat dengan {fields.length} field(s)
                        </p>
                        <Button onClick={switchToFormTab} className="w-full">
                          Edit Form & Generate JSON
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Upload className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="text-lg mb-2">Belum ada form yang dibuat</p>
                      <p className="text-sm">Import JSON untuk membuat form</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Instructions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Cara Penggunaan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-600">Form → JSON</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Tambah field dengan tombol "Add Text/Textarea/JSON"</li>
                  <li>• Atur label dan isi nilai untuk setiap field</li>
                  <li>• Klik "Generate JSON with Types" untuk hasil JSON</li>
                  <li>• JSON akan include type dan value untuk setiap field</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-green-600">JSON → Form</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Paste JSON dengan struktur type dan value</li>
                  <li>• Klik "Import & Create Form" untuk membuat form</li>
                  <li>• Form akan dibuat otomatis berdasarkan JSON</li>
                  <li>• Bisa edit form dan generate JSON lagi</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
