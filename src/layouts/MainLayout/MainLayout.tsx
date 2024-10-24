import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";



import styles from "./styles.module.css";
import Header from "@components/commen/Header/Header";
import Footer from "@components/commen/Footer/Footer";
const { container, wrapper } = styles;

export default function MainLayout () {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

