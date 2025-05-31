import { AuthProvider } from "@/components/AuthProvider";
import "./../globals.css";
import "./web.css";

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>  
          {children}  
        </AuthProvider>
      </body>
    </html>
  )
}