export default function App() {
  const name = "pritesh_095";

  return (
    <div class="container-fluid">
      <div className="row">
        <div class="bg-dark p-3 text-light d-flex">
          <h1>MyChatApp</h1>
          <h7>by {name}</h7>
        </div>
      </div>
      <div className="d-flex my-2">
        <input
          type="text"
          className="form-control w-50 p-4 fs-5 m-2"
          placeholder="Lets chat here..."
        />
        <input type="button" value="SEND" class="btn btn-primary w-20 m-2" />
      </div>
    </div>
  );
}
