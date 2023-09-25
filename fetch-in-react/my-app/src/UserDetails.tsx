import { useEffect, useState } from 'react';
import UserCard from './UserCard';
import { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export default function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if (!response.ok) {
          throw new Error(`Network response failed ${response.status}`);
        }
        const selectedUser = await response.json();
        setUser(selectedUser);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}