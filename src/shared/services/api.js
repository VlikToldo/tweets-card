import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6446f536ee791e1e290cc398.mockapi.io/api/users',
  params: {
    limit: 3,
  },
});

export const getUsers = async (page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      page,
    },
  });
  return data;
};

export const updateFollowers = async user => {
  const {data}  = await instance.put(`/${user.id}`, user);
  console.log(data);
  return data;
};
