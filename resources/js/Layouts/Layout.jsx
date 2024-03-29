import Footer from "@/Components/page/Footer";
import Navbar from "@/Components/page/Navbar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, title }) => {
    return (
        <AnimatePresence exitBeforeEnter initial={true}>
            <ThemeProvider>
                <div className="min-h-screen bg-[#ffffff] dark:bg-[#242937] transition-all ">
                    {title && <Head title={title} />}
                    <Navbar title={title} />
                    <motion.article
                        initial="hidden"
                        animate="enter"
                        exit="exit"
                        variants={variants}
                        transition={{ duration: 0.5, type: "easeInOut" }}
                        style={{ position: "relative" }}
                    >
                        <div className="pt-[100px] mt-6">{children}</div>
                        <Footer />
                    </motion.article>
                </div>
            </ThemeProvider>
        </AnimatePresence>
    );
};

export default Layout;
