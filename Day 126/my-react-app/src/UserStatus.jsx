function UserStatus({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <h2>Welcome</h2> : <h2>Please log in</h2>}
      </div>
    );
  }
  
  export default UserStatus;