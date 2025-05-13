import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

import { BentoImageGallery } from "@/components/bento-image-gallery";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = params;
  
  try {
    const projectPath = path.join(process.cwd(), `data/hmmm/${projectId}.json`);
    if (!fs.existsSync(projectPath)) {
      return {
        title: "Project Not Found | Photography Portfolio",
        description: "The requested project could not be found.",
      };
    }
    const projectData = JSON.parse(fs.readFileSync(projectPath, "utf8"));
    
    return {
      title: `${projectData.title} | Photography Portfolio`,
      description: projectData.description,
    };
  } catch (error) {
    console.error(`Error generating metadata for project ${projectId}:`, error);
    return {
      title: "Error | Photography Portfolio",
      description: "An error occurred while loading this project.",
    };
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  
  try {
    const projectPath = path.join(process.cwd(), `data/hmmm/${projectId}.json`);
    
    if (!fs.existsSync(projectPath)) {
      notFound();
    }
    
    const project = JSON.parse(fs.readFileSync(projectPath, "utf8"));
    
    // Chuẩn bị dữ liệu cho component BentoImageGallery
    const processedPhotos = project.photos.map((photo: any, index: number) => ({
      ...photo,
      alt: photo.alt || photo.title || `Photo ${index + 1}`,
      width: photo.width || 1200,
      height: photo.height || 1600,
      title: photo.title || `Photo ${index + 1}`,
      description: photo.description || "",
    }));
    
    return (
      <main className="min-h-screen bg-[#f5f5f5] pt-8 pb-24">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/hmmm/hmm" className="inline-flex items-center mb-12 text-sm hover:text-gray-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-2xl font-normal mb-1">{project.title}</h1>
            <p className="text-sm text-gray-400">{project.year}</p>
            <p className="max-w-2xl mx-auto mt-4 text-sm text-gray-500">{project.description}</p>
          </div>

          <BentoImageGallery images={processedPhotos} />
        </div>
      </main>
    );
  } catch (error) {
    console.error(`Error loading project ${projectId}:`, error);
    notFound();
  }
} 