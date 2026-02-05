import { Star } from "lucide-react";

type MovieCardType = {
  img: string;
  rating: number;
  name: string;
  id: number;
};
// const movieCards = [
//   {
//     id: 1,
//     name: "Titanic",
//     rating: 1,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL94Dz7To4p6R3AVyLsyaPcZK5iQqNS29NkA&s",
//   },
//   {
//     id: 2,
//     name: "Harry Potter",
//     rating: 2,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCiAXswOiFuucVXOTeqw95qWU7YEVEKS4qw&s",
//   },
//   {
//     id: 3,
//     name: "Wonder",
//     rating: 3,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gUxvBM0BaRU5q1qN0tbVSHhmtXi7A7Ea3A&s",
//   },
//   {
//     id: 4,
//     name: "Avatar",
//     rating: 4,
//     image:
//       "https://m.media-amazon.com/images/I/81N2Jxv26XL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 5,
//     name: "Lucie",
//     rating: 5,
//     image: "https://i.ebayimg.com/images/g/UgcAAOSwdm9mDfNe/s-l1600.webp",
//   },
// ];

export const MovieCard = ({ img, rating, name }: MovieCardType) => {
  return (
    <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden group cursor-pointer">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="absolute top-0 left-0 w-full p-2">
        <div className="flex items-center gap-1 bg-black/50 rounded px-2 py-1 w-fit">
          <Star className="w-4 h-4 text-[#FDE047] fill-[#FDE047]" />
          <span className="text-white text-sm">{rating}/10</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-white text-sm font-medium">{name}</h3>
      </div>

      {/* <img
        className="w-full h-[233px]  md:h-[340px]"
        src="./dear-santa.jpg"
        alt="poster"
      /> */}
      {/* <div className="w-full h-full">
        <div className="flex gap-2 mt-2">
          <Star className="text-[#FDE047]" />
          <div className="flex">
            <p>{rating}/</p>
            <p>10</p>
          </div>
        </div>
        <h1>{name}</h1>
      </div> */}
    </div>
  );
};
