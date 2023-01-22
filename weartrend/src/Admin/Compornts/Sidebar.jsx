import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";
import { Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { AdminContext } from "../AdminContext/AdminContext";
const routes = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/admin/user",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/admin/orders",
    name: "Orders",
    icon: <BsCart3 />,
  },
  {
    path: "/admin/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
];

const Sidebar = ({ children }) => {
  const { logoutAdmin } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 13,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Admin Panel
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search"></div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
          <Flex
            align={"center"}
            pos={"fixed"}
            width={"11rem"}
            top="1rem"
            right="3rem"
          >
            {/* <RiLogoutBoxRFill zIndex="33" fontSize={"1.6rem"} width="1rem" /> */}
            <Link to="/">
              <Button
                zIndex={0}
                onClick={() => logoutAdmin()}
                width="10rem"
                mx="3px"
                marginLeft={"14px"}
                color="black"
                // colorScheme={"blue"}
              >
                logout
              </Button>
            </Link>
          </Flex>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
