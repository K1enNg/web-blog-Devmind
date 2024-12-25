import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const PostItem = (props: any) => {
  const { title, image, desc, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const imagePath = `/public/images/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={linkPath}>
        <div className="relative h-64">
          <Image
            src={imagePath}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <time className="block text-sm text-gray-500 mb-2">{formattedDate}</time>
          <p className="text-gray-700 line-clamp-3">{desc}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
