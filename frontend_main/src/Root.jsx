import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { color } from "./theme";

function Root() {
  return (
    <div style={{ color: color.text, backgroundColor: color.background }}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Outlet />
    </div>
  );
}

export default Root;
