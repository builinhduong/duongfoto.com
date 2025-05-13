import { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { BentoImageGallery } from "@/components/bento-image-gallery"

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = params;
  
  const projectPath = path.join(process.cwd(), `data/portrait/${projectId}.json`);
  const projectData = JSON.parse(fs.readFileSync(projectPath, "utf8"));
  
  return {
    title: `${projectData.title} | Photography Portfolio`,
    description: projectData.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  
  const projectPath = path.join(process.cwd(), `data/portrait/${projectId}.json`);
  const project = JSON.parse(fs.readFileSync(projectPath, "utf8"));
  
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/portrait" className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portrait
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-2xl font-normal mb-1">{project.title}</h1>
          <p className="text-sm text-gray-400">{project.year}</p>
        </div>

        <BentoImageGallery images={project.photos} />
      </div>
    </main>
  );
}
