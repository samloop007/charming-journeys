import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Heart, MessageCircle, Share2, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import BlogCard from '@/components/BlogCard';
import blogsData from '@/data/blogs.json';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <Link to="/blogs">
            <Button variant="outline">Back to Blogs</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  const relatedBlogs = blogsData
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blogs">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </Button>
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <Badge className="mb-4">{blog.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author}`}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium text-foreground">{blog.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(blog.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {blog.readTime}
              </div>
            </div>

            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <Button variant="outline" className="gap-2">
                <Heart className="h-4 w-4" />
                {blog.likes}
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                {blog.comments}
              </Button>
              <Button variant="outline" className="gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={getImagePath(blog.image)}
              alt={blog.title}
              className="w-full h-auto"
            />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            <Tag className="h-4 w-4 text-muted-foreground mt-1" />
            {blog.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <Card className="mb-12">
            <CardHeader>
              <h3 className="text-2xl font-bold">Leave a Comment</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Comment" rows={5} />
              <Button>Post Comment</Button>
            </CardContent>
          </Card>
        </motion.article>

        {relatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <BlogCard key={relatedBlog.id} {...relatedBlog} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
