export default function Login() {
  return (
    <form className="login">
      <div>Sign In</div>
      <input type="text" name="username" id="username" placeholder="Username"/>
      <input type="password" name="password" id="password" placeholder="Password" />
      <button>Sign In</button>
      <div>New User?</div>
      <button>Sign Up</button>
    </form>
  )
}

