import DataTable from "./components/DataTable";
import data from './data.json';

export default function Home() {

  return (
    <main>
      <DataTable data={data} />
    </main>
  );
}
