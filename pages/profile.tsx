import { FC } from "react";
import useSWR from 'swr'
import {fetcher} from "../components/fetcher"
// function Profile () {
//   const { data, error } = useSWR('/api/user/123', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   // データをレンダリングする
//   return <div>hello {data.name}!</div>
// }

//  "https://dog.ceo/api/breed/hound/images" は 
// 画像URLを次の形で返す。
// {
//   message: [url, url, ...],
//     status:string
// }
type DogCEOAPIImages  = {
  message: string[];
  status: string;
};

const Profile: FC = () => {
  const { data, error } = useSWR<DogCEOAPIImages,Error>(
    "https://dog.ceo/api/breed/hound/images",
    fetcher
  );

  if (!data) return <p>loading...</p>;
  if (error) return <p>failed.</p>;

  return (
    <div className="App">
        status={data?.status}
      <ul>
        {data?.message.slice(0,10).map((url) => (
          <li key={url}>
            <img src={url}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
