import axios from "axios";

const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNjY2M2NzgxODQ0MjAwMTUzNzU3NWIiLCJpYXQiOjE3MTg1NjUzMzYsImV4cCI6MTcxOTc3NDkzNn0.DWqeOIt3TRb7kWyVlZpY29NFwnjtFEPz1e4XNhL02fk';

export default axios.create({
    baseURL: `https://striveschool-api.herokuapp.com/api`,
    headers: {'Authorization': `Bearer ${key}`}
  });