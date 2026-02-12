import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/api";

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages: MetadataRoute.Sitemap = []

  const posts = getAllPosts();

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://iuuukhueeee.github.io/posts/${post.filename}`,
    lastModified: new Date(post.date),
  }))
  return Promise.resolve([...defaultPages, ...blogPages]);
}