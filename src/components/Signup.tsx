import React from 'react';
import { signUp } from '../libs/api';

class SignUp extends React.Component<{ history: any }, { email: string, password1: string, password2: string, nickname: string }> {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password1: '',
      password2: '',
      nickname: ''
    };
  }

  setEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value});
  }

  setPassword = (e) => {
    this.setState({ ...this.state, password1: e.target.value});
  }

  setRePassword = (e) => {
    this.setState({ ...this.state, password2: e.target.value});
  }

  setNickname = (e) => {
    this.setState({...this.state, nickname: e.target.value});
  }

  onSubmit = async (e) => {
    e.preventDefault();
    await signUp(this.state, this.props);
  }
  
  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>회원가입</legend>
          <div className="col">
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
            <label htmlFor="password1">비밀번호</label>
            <input
              type="password"
              id="password1"
              name="password1"
              value={this.state.password1}
              placeholder="비밀번호를 입력해주세요"
              onChange={this.setPassword}
            />
          </div>
          <div className="col">
            <label htmlFor="password2">비밀번호 확인</label>
            <input
              type="password"
              name="password2"
              id="password2"
              value={this.state.password2}
              placeholder="비밀번호를 입력해주세요"
              onChange={this.setRePassword}
            />
          </div>
          <div className="col">
            <label htmlFor="nickname">닉네임</label>
            <input
              type="nickname"
              name="nickname"
              id="nickname"
              value={this.state.nickname}
              placeholder="닉네임을 입력해주세요"
              onChange={this.setNickname}
            />
          </div>
        </fieldset>
        <button type="submit" className="submit-btn">
          확인
        </button>
      </form>
    );
  }
  
}

export default SignUp;