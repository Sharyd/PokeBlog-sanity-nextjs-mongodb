export const fetchNews = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNews`);
    if (!res.ok) {
      throw new Error({ message: err.message || "Something went wrong" });
    }
    const data = await res.json();
    const posts = data.posts;

    return posts;
  } catch (err) {
    console.log(err);
  }
};
