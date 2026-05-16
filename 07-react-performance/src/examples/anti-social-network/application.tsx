import { useState, useEffect, useOptimistic, startTransition } from 'react';
import { Container } from '$components/container';
import { Alert } from '$components/alert';
import { PostForm } from './components/post-form';
import { PostList } from './components/post-list';
import { createPost, removePost, listPosts } from '$/common/api';
import type { Id, OptimisticPost, Post, PostFormData } from './types';

// Using a fixed user ID for this demo
const CURRENT_USER_ID = 1;

function Application() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [optimisticPosts, addOptimisticPost] = useOptimistic<OptimisticPost[], OptimisticPost>(
    posts,
    (state, newPost: OptimisticPost) => {
      if (newPost.isPending) {
        return [newPost, ...state];
      }

      return state.filter((post) => post.id !== newPost.id);
    },
  );

  // Fetch initial posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const data = await listPosts({ _limit: 10 });
        setPosts(data);
      } catch (err) {
        setError('Failed to load posts. Please try again.');
        console.error('Error fetching posts:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (formData: PostFormData) => {
    try {
      setError(null);

      const optimisticPost: OptimisticPost = {
        id: Date.now() as Id,
        userId: CURRENT_USER_ID as Id,
        title: formData.title,
        body: formData.body,
        isPending: true,
      };

      startTransition(() => {
        addOptimisticPost(optimisticPost);
      });

      const newPost = await createPost({
        title: formData.title,
        body: formData.body,
        userId: CURRENT_USER_ID as Id,
      });

      setPosts((prev) => [newPost, ...prev]);
    } catch (err) {
      setError('Failed to create post. Please try again.');
      console.error('Error creating post:', err);
    }
  };

  const handleDeletePost = async (id: number) => {
    try {
      setError(null);

      startTransition(() => {
        addOptimisticPost({ id: id as Id } as OptimisticPost);
      });

      await removePost(id);

      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      setError('Failed to delete post. Please try again.');
      console.error('Error deleting post:', err);
    }
  };

  return (
    <Container className="my-8 space-y-8">
      <section>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Anti-Social Network
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Create and delete posts with optimistic updates. Notice how the UI responds immediately!
        </p>
      </section>

      {error && (
        <Alert variant="error">
          <p>{error}</p>
        </Alert>
      )}

      <section>
        <PostForm onSubmit={handleCreatePost} />
      </section>

      <section>
        {isLoading ? (
          <div className="py-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">Loading posts...</p>
          </div>
        ) : (
          <PostList posts={optimisticPosts} onDeletePost={handleDeletePost} />
        )}
      </section>
    </Container>
  );
}

export default Application;
