import React from 'react'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({news}) => {
  return (
    <div className="card bg-base-100 shadow-md mb-6">
      {/* Author + Share */}
      <div className="flex bg-base-200 justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-16 rounded-full overflow-hidden">
              <img className='w-full h-full object-cover' src={news.author.img} alt={news.author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-sm">{news.author.name}</h2>
            <p className="text-xs text-gray-500">
              {news.author.published_date}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1">
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 py-4">
        <h2 className="text-lg font-bold text-primary  cursor-pointer">
          {news.title}
        </h2>
      </div>

      {/* Image */}
      <div className="px-4  py-2">
        <img
          src={news.thumbnail_url}
          alt={news.title}
          className="w-full h-[400px] object-center rounded-md"
        />
      </div>

      {/* Details */}
      <div className="px-4  text-accent">
        {news.details.length > 200 ? (
          <>
            {news.details.slice(0, 200)}...
            <Link
              to={`/news-details/${news._id}`}
              className="text-primary font-semibold cursor-pointer hover:underline"
            >
              Read More
            </Link>
          </>
        ) : (
          news.details
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t border-base-200 mt-3">
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: news.rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-2 text-gray-600">{news.rating.number}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{news.total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard