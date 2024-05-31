import AdminNav from "../components/admin/AdminNav";

export const metadata = {
  title: "Liquid Haven Admin Panel",
  description: "Liquid Haven Admin Dashboard",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminNav />
      {children}
    </div>
  );
};

export default AdminLayout;
