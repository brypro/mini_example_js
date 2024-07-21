import Form from '../components/Form/Form';
import Table from '../components/Table/Table';

export default function Home() {
  return (
    <>
      <header>
          <h1>People Manager</h1>
      </header>

      <main>
          <Form />
          <Table />
      </main>
    </>
  );
}
