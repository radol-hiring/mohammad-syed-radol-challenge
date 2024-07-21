// app/api/api.ts

/*export const fetchMessages = async () => {
  try {
    const response = await fetch('http://localhost:3000/messages');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return [];
  }
};
*/


// app/api/api.ts
/*const apiUrl = 'http://localhost:3000/messages'; // Ensure this URL is correct

export const fetchMessages = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return [];
  }
};
*/


/*export const fetchMessages = async () => {
  try {
    const response = await fetch('http://localhost:3000/messages');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log fetched data for debugging
    return data;
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return [];
  }
};
*/

// app/api/api.ts

export const fetchMessages = async () => {
  try {
    const response = await fetch('http://3.17.10.229:3000/messages');
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data); // Log fetched data for debugging
    return data;
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return [];
  }
};
















