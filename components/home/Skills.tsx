import { useState } from "react";
import { Button } from "../ui/button";
import { Code, Globe, Server, Database, Palette, Smartphone } from "lucide-react";
import { Progress } from "../ui/progress";

const skills = [
  { name: "React", level: 90, category: "Frontend", icon: Code },
  { name: "TypeScript", level: 85, category: "Frontend", icon: Code },
  { name: "Next.js", level: 88, category: "Frontend", icon: Globe },
  { name: "Node.js", level: 82, category: "Backend", icon: Server },
  { name: "Python", level: 78, category: "Backend", icon: Code },
  { name: "PostgreSQL", level: 75, category: "Database", icon: Database },
  { name: "MongoDB", level: 70, category: "Database", icon: Database },
  { name: "UI/UX Design", level: 72, category: "Design", icon: Palette },
  { name: "Mobile Development", level: 68, category: "Mobile", icon: Smartphone },
];

const categories = ["All", "Frontend", "Backend", "Database", "Design", "Mobile"];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-4">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className="group p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-3">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <Progress value={skill.level} className="h-2" />
                  </div>

                  {/* Category */}
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-muted rounded-md">
                      {skill.category}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
