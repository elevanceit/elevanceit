import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../../utils/posts";
import { markdownToHtml } from "../../../utils/markdowns";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: Params) {
  const post = getPostBySlug((await params).slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <article className="mb-32">{content}</article>
    </main>
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPostBySlug((await params).slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | 123`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
