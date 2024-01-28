import { useEffect } from 'react';
import authFecth from './custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const response = await authFecth('/react-store-products');
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">custom instance</h2>;
};

export default CustomInstance;
