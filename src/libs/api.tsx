import axios from 'axios';
import Cookies from 'js-cookie';

export const signUp = async ({ email, password, nickname }, props) => {
  await axios.post('http://localhost:4000/auth/join', {
    email,
    password,
    nickname,
  })
  .then(() => props.history.push('/signin'))
  .catch(() => alert('이메일 혹은 닉네임이 중복됩니다. 다시 확인해주세요.'));
};

export const signIn = async ({ email, password }, props) => {
  console.log({ email, password });
  await axios.post('http://localhost:4000/auth/login', {
    email,
    password,
  })
  .then(async ({ data }) => {
    await Cookies.set('session', data);
    props.history.push('/user');
  })
  .catch(() => alert('존재하지 않는 아이디거나 비밀번호가 틀렸습니다.\n입력정보를 올바르게 입력해주세요.'));
};
