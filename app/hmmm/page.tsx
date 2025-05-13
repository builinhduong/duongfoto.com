import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Hmm... | Photography Portfolio",
  description: "Experimental photography that challenges conventions and explores the boundaries of visual art",
};

export default function HmmmPage() {
  // Đọc danh sách các dự án từ thư mục data/hmmm (ngoại trừ file index.json)
  const projectsDirectory = path.join(process.cwd(), "data/hmmm");
  const fileNames = fs.readdirSync(projectsDirectory).filter(fileName => 
    fileName !== "index.json" && fileName.endsWith(".json")
  );

  const projects = fileNames.map(fileName => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">Hmm...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/hmmm/${project.id}`}
            className="group overflow-hidden rounded-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="mt-2">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p className="text-sm text-gray-500">{project.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
