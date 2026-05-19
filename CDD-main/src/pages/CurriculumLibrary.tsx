import { useState } from "react";
import { Search, Filter, Download, ChevronRight, FileText, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CurriculumLibrary() {
  const [filter, setFilter] = useState("All");

  const curriculums = [
    { id: 1, title: "Next-Gen STEM Framework", category: "K-12", discipline: "Science", status: "Published", version: "2.4" },
    { id: 2, title: "Global MBA Core Curriculum", category: "University", discipline: "Business", status: "Published", version: "1.0" },
    { id: 3, title: "Digital Humanities Standards", category: "University", discipline: "Humanities", status: "Review", version: "0.9" },
    { id: 4, title: "Vocational Healthcare Skills", category: "Vocational", discipline: "Health", status: "Published", version: "1.5" },
    { id: 5, title: "K-5 Literacy Foundation", category: "K-12", discipline: "Languages", status: "Published", version: "3.2" },
    { id: 6, title: "AI in Engineering Framework", category: "University", discipline: "Technology", status: "Draft", version: "0.1" },
  ];

  const filtered = filter === "All" ? curriculums : curriculums.filter(c => c.category === filter);

  return (
    <div className="bg-surface min-h-screen pt-32 pb-20">
      <div className="content-width space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl text-slate-900 leading-tight">
            Curriculum <span className="italic text-primary">Library</span>
          </h1>
          <p className="text-slate-600 max-w-2xl text-lg">
            Access our master collection of validated educational frameworks, competency benchmarks, and implementation guides.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input 
              placeholder="Search frameworks..." 
              className="pl-10 h-11 border-slate-200 focus:ring-primary focus:border-primary rounded-xl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", "University", "K-12", "Vocational", "Ministry"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? "bg-primary text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((cur) => (
            <Card key={cur.id} className="group overflow-hidden border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all cursor-pointer">
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <FileText className="w-6 h-6 text-slate-500 group-hover:text-primary" />
                  </div>
                  <Badge variant={cur.status === "Published" ? "default" : "secondary"} className="rounded-full">
                    {cur.status}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{cur.title}</h3>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Globe className="w-4 h-4" />
                    <span>{cur.discipline}</span>
                    <span className="text-slate-300">•</span>
                    <span>v{cur.version}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{cur.category}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5 rounded-lg group-hover:px-4 transition-all">
                    View <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="pt-16 text-center space-y-6">
          <p className="text-slate-500 text-sm">Can't find the framework you're looking for?</p>
          <Button variant="outline" className="rounded-full h-12 px-8 border-primary text-primary hover:bg-primary/5 font-bold">
            Request Custom Curriculum
          </Button>
        </div>
      </div>
    </div>
  );
}
