import { useParams } from 'next/navigation';

export default function UserDetail() {
  const params = useParams();
  return <div>User ID: {params.id}</div>;
}