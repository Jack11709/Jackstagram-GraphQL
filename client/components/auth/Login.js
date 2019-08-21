import styled from 'styled-components'

const LoginStyles = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  div.container {
    width: 350px;
    background-color: white;
    margin-top: 1.2rem;
    border: 1px solid ${({ theme }) => theme.darkGrey };
    border-radius: 2px;
    h1 {
    font-size: 4.5rem;
      font-family: 'Dancing Script', cursive;
    }
    div.form-container {
      display: flex;
      flex-direction: column;
      padding: 0 3.5rem;
      height: 200px;
      justify-content: space-around;
      div.input-container {
        display: flex;
        flex-direction: column;
        input {
          appearance: none;
          background-color: ${({ theme }) => theme.lightGrey};
          outline: none;
          border: 1px solid ${({ theme }) => theme.darkGrey};
          border-radius: 4px;
          line-height: 1.5rem;
          padding: .9rem .5rem;
          margin-bottom: 1rem;
        }
      }
      button {
        height: 30px;
        background-color: #428bca;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
        appearance: none;
        border-radius: 4px;
        &:disabled {
          filter: opacity(50%);
        }
      }
    }
    a {
      font-weight: bold;
      color: #428bca;
    }
  }
`

const Login = () => (
  <LoginStyles>
    <div className="container">
      <h1>Jackstagram</h1>
      <div className="form-container">
        <div className="input-container">
          <input placeholder="Email or Username"/>
          <input placeholder="Password" type="password"/>
        </div>
        <button disabled>Log in</button>
      </div>
    </div>
    <div className="container">
      <p>Don&apos;t have an account? <a>Sign Up</a></p>
    </div>
  </LoginStyles>
)

export default Login