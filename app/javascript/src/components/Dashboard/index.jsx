import { PageLoader, PageTitle, Container } from "../commons";
import React, { useEffect, useState } from "react";
import Table from "../Tasks/Table";
import fetchedData from "apis/posts";

const index = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchedPosts = async () => {
    try {
      const newData = await fetchedData.fetch();
      setPosts(newData.data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchedPosts();
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Table data={posts} />
    </Container>
  );
};

export default index;
