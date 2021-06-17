import React from 'react';
import { signIn } from '../libs/api';

class SignIn extends React.Component<{ history: any }, { email: string, password: string }> {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  setEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value});
  }

  setPassword = (e) => {
    this.setState({ ...this.state, password: e.target.value});
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await signIn(this.state, this.props);
  }

  // const onSubmit = async ({ email, password }) => {
  //   const { success, token } = await signIn({ email, password });
  //   if (success) {
  //     Cookies.set('session', token.split(' ')[1]);

  //     props.history.push('/user');
  //   }
  // };

  render(){
    return (
    <form onSubmit={this.onSubmit}>
      <fieldset>
        <legend>로그인</legend>
        <div>
          <label htmlFor="email">이메일</label>
              <input
                type="text"
                id="email"
                name="email"
                value={this.state.email}
                placeholder="이메일을 입력해주세요"
                onChange={this.setEmail}
              />
          </div>
          <div className="col">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              placeholder="비밀번호를 입력해주세요"
              onChange={this.setPassword}
            />
          </div>
      </fieldset>
      <button type="submit" className="submit-btn">
        로그인
      </button>
    </form>
    );
  }
};

export default SignIn;