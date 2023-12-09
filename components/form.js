import { useState } from 'react';

const FormComponent = ({addPost}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toDateString();
    const formData = {
      title,
      body,
      date: currentDate,
    };
    await fetch('/api/update-data', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    setBody('')
    setTitle('')
  } 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 50%;
        }

        div {
          display: flex;
          gap: 0.5rem;
        }

        label {
          font-weight: bold;
          width: 80px;
        }

        input,
        textarea {
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 0.5rem;
          font-size: 16px;
          width: 200px;
          resize: none;
        }

        button {
          background-color: #4285f4;
          color: white;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default FormComponent;
