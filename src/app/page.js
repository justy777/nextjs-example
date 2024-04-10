import DataTable from "@/components/DataTable";

export default function Home() {
  const data = [
    { id: 1, label: "Windows" },
    { id: 2, label: "Linux" },
  ];

  return (
    <main>
      <DataTable data={data} />
    </main>
  );
}
