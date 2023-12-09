import Link from "next/link";

const Card = ({ title, date, body, uid }) => {
  // Extracting a portion of the body to show initially
  const shortenedBody = body.slice(0, 30); // Show first 30 characters, for example

  return (
    <div>
      <h3>{title}</h3>
      <p>{shortenedBody}...</p>
      <Link className="see-more" href={`/posts/post${uid}`}>
          See More...
      </Link>
      <date>{date}</date>

      {/* Styled JSX */}
      <style jsx>{`
        div {
          border: 5px solid #ccc;
          padding: 10px;
          margin-bottom: 20px;
          width: 100%;
          box-shadow: #ccc 16px -16px 6px 3px;
        }
        h3 {
          margin-bottom: 5px;
        }
        p {
          margin-bottom: 10px;
        }
        date {
          display: block;
          font-style: italic;
          color: #666;
          font-size: 0.9em;
        }
        .see-more {
          text-decoration: none;
        }
        a {
          text-decoration: none;
          color: #0070f3;
          cursor: pointer;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Card;