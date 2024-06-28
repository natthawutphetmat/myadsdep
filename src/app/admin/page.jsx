"use client";

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Profile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  const [title, setTitle] = useState('');
  const [headline, setHeadline] = useState('');
  const [youtube, setYoutube] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.service-ads.com/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          headline,
          youtube,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const result = await response.json();
      Swal.fire({
        title: 'Success',
        text: 'Form submitted successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      // Handle success, e.g., clear form
      setTitle('');
      setHeadline('');
      setYoutube('');
      setContent('');
      fetchData(); // Fetch new data after submission
    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.service-ads.com/vdo');
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await res.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`https://api.service-ads.com/delete/${id}`, {
        method: 'DELETE',
      });

      const result = await res.json(); // Add this line to check response

      if (!res.ok) {
        console.error('Error response:', result); // Add this line to log response
        throw new Error('Failed to delete data');
      }

      Swal.fire({
        title: 'Deleted!',
        text: 'Data has been deleted.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      fetchData(); // Refresh data after deletion
    } catch (error) {
      setError(error.message);
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return null; // or return a redirect or a message
  }

  return (
    <>
      <section className='admin'>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='form-control'
              placeholder="title"
            />
          </div>
          <div>
            <input
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              required
              className='form-control'
              placeholder="headline"
            />
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className='form-control'
              placeholder="content"
            />
            <input
              type="text"
              id="youtube"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              required
              className='form-control'
              placeholder="youtube"
            />
          </div>
          <button type="submit" className='btn btn-info'>Submit</button>
        </form>
        {error && <p className="error">{error}</p>}
      </section>
      <section className="addfrom">
        <div className="container mb-5">
          <h2>Data List</h2>
          {data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <h3>{item.title}</h3>
                  <p>{item.headline}</p>
                  <p>{item.content}</p>
                  <p>{item.youtube}</p>
                  <button onClick={() => handleDelete(item.id)} className='btn btn-danger'>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;


