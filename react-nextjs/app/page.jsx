import Form from "../components/Form/Form";
import Table from "../components/Table/Table";
import Filter from "../components/Filter/Filter";

export default function Home() {
  return (
    <>
      <header>
        <h1>People Manager</h1>
      </header>

      <main>
        <Form />
        <div className="container">
          <Filter />
          <Table />
        </div>
      </main>
    </>
  );
}
