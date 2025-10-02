import { Link } from 'react-router-dom';
import { Calendar, Clock, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  likes: number;
  comments: number;
}

const BlogCard = ({ id, title, excerpt, image, author, date, category, readTime, likes, comments }: BlogCardProps) => {
  const getImagePath = (imageName: string) => {
    try {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    } catch {
      return '';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/blog/${id}`}>
        <Card className="overflow-hidden h-full shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <div className="relative overflow-hidden aspect-[16/10]">
            <img
              src={getImagePath(image)}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-primary text-primary-foreground">{category}</Badge>
            </div>
          </div>
          
          <CardHeader className="space-y-2">
            <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {excerpt}
            </p>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {readTime}
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex items-center justify-between pt-4 border-t border-border">
            <p className="text-sm font-medium">{author}</p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                {likes}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-4 w-4" />
                {comments}
              </div>
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
