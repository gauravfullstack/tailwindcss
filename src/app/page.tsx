import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, Gaurav 🚀</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-xl">Left Content</div>
        <div className="bg-green-100 p-4 rounded-xl">Right Content</div>
      </div>
    </Layout>
  );
}
