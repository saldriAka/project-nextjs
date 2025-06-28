import SectionForm from "@/components/dashboard/pages/section/SectionBackup"

interface PageSectionProps {
  params: { pageId: string }
}

export default function SectionBackupPage({ params }: PageSectionProps) {
  return (
    <div>
      <SectionForm />
    </div>
  )
}
