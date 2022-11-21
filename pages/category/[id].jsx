import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const HomeComponent = dynamic(() => import('../../components/Home'), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  console.log(`id:${id}`);

  return <HomeComponent contentLink={`/api/v1/blogs/p/tag/${id}`} />;
  //return <HomeComponent contentLink={`/api/v1/blogs/p`} />;
}
