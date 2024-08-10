import React from "react";
import Link from "next/link";
import * as FaIcons from "react-icons/fa"
import * as SiIcons from "react-icons/si"

async function getCategories() {
  const res = await fetch(`${process.env.HOST_URL}/api/categories`, {cache:'no-cache'});

  if (!res.ok) throw new Error("failed");

  return res.json();
}

function returnIcon(image='icon') {
  try {
    if(image.startsWith("||ICONS||")) {
      const values = image.split("||");
      if (values[2] === "fa") {
        const IconComponent = FaIcons[values[3] as keyof typeof FaIcons];
        return <IconComponent size={24} />;
      }
      if (values[2] === "si") {
        const IconComponent = SiIcons[values[3] as keyof typeof SiIcons];
        return <IconComponent size={24} />;
      }
      return <FaIcons.FaBloggerB size={24} />;
    }
  } catch(e) {
    console.log(e)
    return <FaIcons.FaBloggerB size={24} />;
  }
}

async function CategoryList() {
  const categories = await getCategories()

  return (
    <div className="flex flex-col gap-4">
      <h2 className="title_h2">دسته بندی ها</h2>
      <ul className="flex gap-2 py-2 overflow-auto" key={"listItems"}>
        {categories.map((category:{id:String, slug:string, image:string, title:string, color:string}, index:number) => {
          return (
            <li
              key={category["id"].toString() + index.toString()}
              className={`flex rounded-xl text-black`}
              style={{ backgroundColor: category["color"]?.toString() }}
            >
              <Link
                href={`/blog?cat=${category["slug"]}`}
                className="flex flex-col gap-1 w-44 h-20 justify-center items-center"
              >
                {!!category["image"] && returnIcon(category["image"])}
                <p>{category["title"]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList;
