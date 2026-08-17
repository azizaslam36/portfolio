import { Navigate, useParams } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectDetail } from '../components/ProjectDetail';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectDetail project={project} />;
}
