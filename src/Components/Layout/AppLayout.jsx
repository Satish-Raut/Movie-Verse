import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayout = () => {

  const navigation = useNavigation()
  console.log(navigation)

  if(navigation.state === "loading")
  {
    return <Loading/>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* Main content grows to fill space */}
      <main className="flex-1">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
