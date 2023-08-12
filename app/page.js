// Components
import { PostCard, Categories, PostWidget } from '../components';

// Demo list of posts
const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing' },
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind' },
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
        </div>
      </div>

    </div>
  )
}
