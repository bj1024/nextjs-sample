import { FC } from "react";
import useSWR from 'swr'

// function Profile () {
//   const { data, error } = useSWR('/api/user/123', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   // データをレンダリングする
//   return <div>hello {data.name}!</div>
// }


type Props = {
  message: string[];
  status: string;
};

const fetcher = (url: string): Promise<Props> =>
  fetch(url).then((data) => data.json());

const Profile: FC = () => {
  const { data, error } = useSWR(
    "https://dog.ceo/api/breed/hound/images",
    fetcher
  );

  if (!data) return <p>loading...</p>;
  if (error) return <p>failed.</p>;

  return (
    <div className="App">
      <ul>
        {data?.message.slice(0,10).map((src) => (
          <li key={src}>
            <img src={src}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
