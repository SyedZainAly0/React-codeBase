function UserCard({ name, role, isAdmin }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Role: {role}</p>
    </div>
  );
}

export default UserCard;