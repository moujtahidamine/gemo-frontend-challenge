import React, {useState, useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import GithubService from "../../services/github";
import {Repository, Skeleton} from "../../components";

function Home() {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    GithubService.getTheMostStarredRepoInLast30Days(pageNumber)
    .then(
      response => {
        setData(response.data.items);
        setLoading(false);
      }
    )
    .catch(error => console.error(error))

  }, []);

  const fetchMoreData = () => {
    console.log("pageNumber", pageNumber);

    if (data.length >= 60) {
      setHasMore(false);
      return;
    }

    GithubService.getTheMostStarredRepoInLast30Days(pageNumber + 1).then(
      response => {
        const array = data.concat(response.data.items);
        setData(array);
      }
    );

    setPageNumber(pageNumber + 1);
  };

  if (isLoading) return <Skeleton />;
  else
    return (
      <div className="home">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4 className="pl-2">Loading...</h4>}
          endMessage={
            <p className="text-center">
              <b>You have seen it all!</b>
            </p>
          }
        >
          {data && data.map((item, index) => <Repository key={index} item={item} />)}

        </InfiniteScroll>
      </div>
    );
}

export default Home;
