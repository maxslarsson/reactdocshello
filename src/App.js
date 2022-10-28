const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://cdn.britannica.com/95/133095-050-46953AA5/Hedy-Lamarr.jpg",
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
    </>
  );
}

function Button() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button></Button>
      <Profile></Profile>
    </div>
  );
}
