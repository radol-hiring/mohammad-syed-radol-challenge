// app/page.tsx
/*'use client';

import { useEffect, useState } from 'react';
import { fetchMessages } from './api/api';

const Home = () => {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <ul>
        {messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))
        ) : (
          <li>No messages found</li>
        )}
      </ul>
    </main>
  );
};

export default Home;
*/

// app/page.tsx
/*'use client';

import { useEffect, useState } from 'react';
import { fetchMessages } from './api/api';

const Home = () => {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();

    // Set up an interval to refresh the data every 30 seconds
    const intervalId = setInterval(loadMessages, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Messages</h1>
      <ul>
        {messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))
        ) : (
          //<li>No messages found</li>
        )}
      </ul>
    </main>
  );
};

export default Home;
*/


// app/page.tsx
/*'use client';

import { useEffect, useState } from 'react';
import { fetchMessages } from './api/api';

const Home = () => {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages();
        setMessages(data);
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

 /* return (
    <main>
      <h1>Messages</h1>
      <ul>
        {messages.length > 0 ? (
          messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))
        ) : (
          <li>No messages found</li>
        )}
      </ul>
    </main>
  ); 
  
  const messageWithId1 = messages.find((message) => message.id === 1);

  return (
    <main>
      <h1>Messages</h1>
      {messageWithId1 ? (
        <ul>
          <li>{messageWithId1.content}</li>
        </ul>
      ) : (
        <p>No message with ID 1 found</p>
      )}
    </main>
  );


};

export default Home;

*/

/*'use client';

import { useEffect, useState } from 'react';
import { fetchMessages } from './api/api';

const Home = () => {
  const [messages, setMessages] = useState<{ id: number; content: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages();
        console.log('Loaded messages:', data); // Log messages for debugging
        setMessages(data);
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const messageWithId1 = messages.find((message) => message.id === 1);

  return (
    <main>
      <h1>Messages</h1>
      {messageWithId1 ? (
        <ul>
          <li>{messageWithId1.content}</li>
        </ul>
      ) : (
        <p>No message with ID 1 found</p>
      )}
    </main>
  );
};

export default Home;

*/



'use client';

import { useEffect, useState } from 'react';
import { fetchMessages } from './api/api';

const Home = () => {
  const [messages, setMessages] = useState<any>(null); // Using any to capture raw data
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const data = await fetchMessages();
        console.log('Loaded messages:', data); // Log messages for debugging
        setMessages(data);
      } catch (err) {
        console.error('Error loading messages:', err); // Log error for debugging
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    loadMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Messages</h1>
      <pre>{JSON.stringify(messages, null, 2)}</pre> {/* Print raw JSON data */}
    </main>
  );
};

export default Home;












