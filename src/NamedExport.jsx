export function Hello({ name, time }) {
  return (
    <div>
      <h3>Hello, {name} </h3>
      <p>Good {time}! Welcome back.</p>
    </div>
  );
}

export function Bye({ name }) {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <h3>Goodbye, {name} </h3>
      <p>See you again! © {currentYear}</p>
    </div>
  );
}