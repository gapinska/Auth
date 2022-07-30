import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true, //the setting that allows to send cookies with our request, this request is going to send along cookies that has the response token, secure cookie that we never see inside of js code, axios can send it to the  backend endpoint
    });

    setAuth((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return { ...prev, accessToken: response.data.accessToken };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
