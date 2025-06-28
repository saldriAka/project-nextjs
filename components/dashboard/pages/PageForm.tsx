
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Check,
  ChevronsUpDown,
  FileText,
  Globe,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { useEffect, useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { handleCreatePage, handleUpdatePage } from "@/features/pages/pages.actions"
import { defaultPageData, PageFormData, pageSchema } from "@/features/pages/pages.schema"
import { FormFieldContent, JsonFieldData, PageFormProps } from "@/types/pages"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"
import { robotOptions } from "@/lib/constants"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { sanitizeLabel, toPascalCase } from "@/lib/utils"

export function PageForm({ mode = "create", pageId, defaultValues, onBack }: PageFormProps) {

  const form = useForm<PageFormData>({
    resolver: zodResolver(pageSchema),
    defaultValues: defaultValues || defaultPageData, 
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [robotOpen, setRobotOpen] = useState(false)

  const [activeTab, setActiveTab] = useState<string>("page")
  const [result, setResult] = useState<string>("")
  console.log(result);
  
  const onSubmit = async (values: any) => {
    setIsSubmitting(true)
    try {
      startTransition(() => {
        const data = {
          ...values,
          content: result,
        };
        handlePageSubmit({ values: data, form, pageId, mode });
      });
    } catch (error) {
      toast.error("Something went wrong during submission.", {
        description: (error as Error).message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  async function handlePageSubmit({ values, form, pageId, mode }: any) {
    try {
      const result = mode === "edit"
        ? await handleUpdatePage(pageId, values)
        : await handleCreatePage(values)

      if (result.success) {
        toast.success(result.message)
        form.reset()
        location.reload()
      } else {
        toast.error(result.message)
      }
    } catch (err) {
      let message = 'Failed to submit form. Please try again.'
      try {
        const parsed = JSON.parse((err as Error).message)
        if (parsed?.fieldErrors) {
          Object.entries(parsed.fieldErrors).forEach(([key, value]) => {
            const msg = Array.isArray(value) ? value.join(', ') : String(value)
            form.setError(key as keyof PageFormData, { type: 'server', message: msg })
          })
        }
        if (parsed?.formErrors?.length) {
          message = parsed.formErrors.join(', ')
        } else if (typeof parsed === 'string') {
          message = parsed
        }
      } catch {
        message = (err as Error).message || message
      }
      toast.error(message)
    }
  }



  const [fields, setFields] = useState<FormFieldContent[]>(() => {
    if (mode === "edit" && defaultValues?.content) {
      try {
        const parsedContent = JSON.parse(defaultValues.content);

        const isValidType = (t: any): t is "text" | "textarea" | "json" =>
          t === "text" || t === "textarea" || t === "json";

        return Object.entries(parsedContent).map(([label, field], index) => {
          const f = field as { type: string; value: string };

          const fieldType = isValidType(f.type) ? f.type : "text";
          console.log(`Field: ${label}, Type: ${fieldType}, Value: ${f.value}`);
          return {
            id: String(index + 1),
            label,
            type: fieldType,
            value: f.value,
          };
        });

      } catch (error) {
        console.error("Invalid JSON content", error);
        return [];
      }
    }

    // default for 'create'
    return [
      { id: "1", type: "text", label: "Name", value: "" },
      { id: "2", type: "textarea", label: "Description", value: "" },
    ];
  });


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

      formData[sanitizeLabel(field.label)] = {
        type: field.type,
        value: processedValue,
      }
    })

    const jsonResult = JSON.stringify(formData, null, 2)
    setResult(jsonResult)
  }

  const updateField = (id: string, updates: Partial<FormFieldContent>) => {
    setFields(fields.map((field) => (field.id === id ? { ...field, ...updates } : field)))
  }

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id))
  }

  const renderField = (field: FormFieldContent) => {
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

  const addField = (type: "text" | "textarea" | "json") => {
    const baseLabel = `${type.charAt(0).toUpperCase() + type.slice(1)} Field`;
    const isDuplicate = fields.some(field => field.label === baseLabel);

    if (isDuplicate) {
      toast.error("Label harus unik", {
        description: `Label "${baseLabel}" sudah ada.`,
      });
      return;
    }

    const newField: FormFieldContent = {
      id: Date.now().toString(),
      type,
      label: baseLabel,
      value: type === "json" ? "{}" : "",
    };

    setFields([...fields, newField]);
  };

  useEffect(() => {
    if (defaultValues) {
      form.reset(defaultValues)
    }
    if (mode === "edit" && defaultValues?.content) {
      try {
        const parsed = JSON.parse(defaultValues.content);
        setResult(JSON.stringify(parsed, null, 2)); 
      } catch (error) {
        console.error("Invalid JSON in defaultValues.content", error);
        setResult("");
      }
    }
  }, [mode, defaultValues?.content])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="page">Page</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>
          <TabsContent value="page" className="space-y-6 mt-4 ">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-3">
                  <h2 className="text-2xl font-bold">Page Configuration</h2>
                  <p className="text-gray-600">
                    Set up page information, translations and SEO settings
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} /> Basic Information
                </CardTitle>
                <CardDescription>Configure basic page settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Title</FormLabel>
                        <FormControl>
                          <Input  placeholder="Enter page title" {...field} value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>URL Slug</FormLabel>
                        <FormControl>
                          <Input placeholder="page-url-slug" {...field} value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="desc"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Brief description of the page" {...field} value={field.value ?? ""}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <FormField
                      control={form.control}
                      name="isPublished"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2">
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="m-0">Published</FormLabel>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="isDraft"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center space-x-2">
                          <FormControl>
                            <Switch checked={field.value} onCheckedChange={field.onChange} />
                          </FormControl>
                          <FormLabel className="m-0">Draft</FormLabel>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Badge variant={form.watch("isPublished") ? "default" : "secondary"}>
                    {form.watch("isPublished") ? "Will be published" : "Saved as draft"}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Language Tabs & SEO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe size={20} /> Translations & SEO
                </CardTitle>
                <CardDescription>Configure content and SEO settings for each language</CardDescription>
              </CardHeader>
              <CardContent>
              
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name={`metaTitle`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Title</FormLabel>
                        <FormControl>
                          <Input placeholder="SEO meta title" {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`canonicalUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Canonical URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com" {...field} value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`metaDescription`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                          <Textarea maxLength={160} placeholder="SEO meta description" {...field} value={field.value ?? ""}/>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`coverImageUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cover Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/cover.jpg" {...field} value={field.value ?? ""}/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`ogImageUrl`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OG Image URL</FormLabel>
                        <FormControl>
                          <Input placeholder="https://example.com/og.jpg" {...field} value={field.value ?? ""}/>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
            

                {/* Global SEO */}
                <Separator className="my-6" />
                <FormField
                  control={form.control}
                  name="robots"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Robots</FormLabel>
                      <Popover open={robotOpen} onOpenChange={setRobotOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={robotOpen}
                            className="w-[200px] justify-between"
                          >
                            {field.value || "Select Robots"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Search robots rule..." />
                            <CommandList>
                              <CommandEmpty>No rule found.</CommandEmpty>
                              <CommandGroup>
                                {robotOptions.map((opt) => (
                                  <CommandItem
                                    key={opt.value}
                                    onSelect={() => {
                                      field.onChange(opt.value)
                                      setRobotOpen(false)
                                    }}
                                  >
                                    {opt.label}
                                    {field.value === opt.value && (
                                      <Check className="ml-auto h-4 w-4" />
                                    )}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="content">
            <Card>
              <CardContent className="space-y-6">
                <div className="text-center py-3">
                  <h2 className="text-2xl font-bold">Content Configuration</h2>
                  <p className="text-gray-600">
                    Set up Content for your page
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="grid lg:grid-cols-2 gap-x-4 mt-4">
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Form Builder
                  </CardTitle>
                </CardHeader>
                <CardContent>
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
                        <Label className="text-sm font-medium">{toPascalCase(field.label)} :</Label>
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
                  <div className="pt-4 border-t space-x-3 flex justify-end">
                    <Button onClick={handleSubmit} className="" size="lg">
                      Generate JSON
                    </Button> 
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        setFields([]);
                      }}
                      className=""
                      size="lg"
                      variant="outline"
                    >
                      Reset
                    </Button>

                  </div>
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
        </Tabs>
        <Card className="mt-4">
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={() => location.assign("/dashboard/pages")}
                disabled={isPending}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isPending || isSubmitting}>
                {(isPending || isSubmitting) ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {mode === "edit" ? "Updating..." : "Saving..."}
                  </>
                ) : (
                  mode === "edit" ? "Update Page" : "Create Page"
                )}
              </Button>
            </div>    
          </CardContent>
        </Card>
      </form>
    </Form>
    
    
  )
}
