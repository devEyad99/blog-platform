// MainLayout.tsx
import { Outlet } from "react-router-dom";
import {Footer, Header} from "../../components/common/";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16 lg:mt-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
