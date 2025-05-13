import { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";

type ProjectPageProps = {
  params: {
    projectId: string;
  };
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { projectId } = params;
  
  const projectPath = path.join(process.cwd(), `data/love/${projectId}.json`);
  const projectData = JSON.parse(fs.readFileSync(projectPath, "utf8"));
  
  return {
    title: `${projectData.title} | Photography Portfolio`,
    description: projectData.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { projectId } = params;
  
  const projectPath = path.join(process.cwd(), `data/love/${projectId}.json`);
  const project = JSON.parse(fs.readFileSync(projectPath, "utf8"));
  
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
      <p className="text-xl text-gray-500 mb-8">{project.year}</p>
      <p className="text-lg max-w-3xl mb-12">{project.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {project.photos.map((photo: any, index: number) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-lg ${
              photo.span === "both" ? "col-span-full" : 
              photo.span === "row" ? "md:col-span-2" : 
              photo.span === "col" ? "md:row-span-2" : ""
            }`}
          >
            <div className="aspect-[3/2] relative">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-2">
              <h3 className="font-medium">{photo.title}</h3>
              {photo.description && (
                <p className="text-sm text-gray-500">{photo.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 