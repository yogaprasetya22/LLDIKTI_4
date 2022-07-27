import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "@inertiajs/inertia-react";
import { DarkModeToggle } from "./DarkMode";
import { useEffect } from "react";

export const MobileNav = ({ isOpen, title }) => {
    const [isOpenProfil, setOpenProfil] = useState(false);
    const [isOpenLayanan, setOpenLayanan] = useState(false);
    const [isOpenInformasi, setOpenInformasi] = useState(false);
    const [isOpenProdukHukum, setOpenProdukHukum] = useState(false);

    const isNavbarMobile = (rout) => {
        return ` ${"/" + title === "/" + rout ? "text-yellow-500" : ""}`;
    };

    useEffect(() => {
        if (isOpen) {
            setOpenProfil(false);
            setOpenLayanan(false);
            setOpenInformasi(false);
            setOpenProdukHukum(false);
        }
    }, [isOpen]);

    const toggle = (e) => {
        e.preventDefault();
        const value = e.target.value;
        if (value === "profil") {
            setOpenProfil(!isOpenProfil);
        } else if (value === "layanan") {
            setOpenLayanan(!isOpenLayanan);
        } 
        else if (value === "informasi") {
            setOpenInformasi(!isOpenInformasi);
        }
        else if (value === "produk-hukum") {
            setOpenProdukHukum(!isOpenProdukHukum);
        }
    };
    return (
        <Transition
            show={isOpen}
            enter="transition ease-out duration-[250ms] transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            style={{
                backdropFilter: "blur(6px) saturate(260%) contrast(180%)",
                WebkitBackdropFilter: "blur(6px) saturate(260%) contrast(180%)",
            }}
            className={
                "relative font-bold z-30 top-0 w-full bg-[#ffffffe6] dark:bg-[#2a2d3cee] dark:text-white text-black"
            }
        >
            <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-scroll max-h-[55vh] md:max-h-[38.5vh]">
                    <ul className="menu flex flex-col p-0 text-grey-400 transition duration-[85ms] ease-in-out">
                        {/* Profil */}
                        {!isOpenProfil && (
                            <li tabIndex={"0"}>
                                <button
                                    onClick={(e) => toggle(e)}
                                    value="profil"
                                    className={isNavbarMobile("profil")}
                                >
                                    Profil
                                </button>
                            </li>
                        )}
                        {isOpenProfil && (
                            <ul className="text-grey-400 ">
                                <li>
                                    <NextLinkMobile
                                        href="profil"
                                        title={title}
                                        name="Profil"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="profil-lldikti-4"
                                        title={title}
                                        name="Profil LLDIKTI 4"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="profil-kepala-lldikti-4"
                                        title={title}
                                        name="Profil Kepala LLDIKTI 4"
                                    />
                                </li>
                            </ul>
                        )}
                        {/* info */}
                        <li>
                            <NextLinkMobile
                                href="info"
                                title={title}
                                name="Info"
                            />
                        </li>
                        {/* akuntabilitas */}
                        <li>
                            <NextLinkMobile
                                href="akuntabilitas"
                                title={title}
                                name="Akuntabilitas"
                            />
                        </li>
                        {/* berita */}
                        <li>
                            <NextLinkMobile
                                href="berita"
                                title={title}
                                name="Berita"
                            />
                        </li>{" "}
                        {/* Layanan */}
                        {!isOpenLayanan && (
                            <li tabIndex={"0"}>
                                <button
                                    onClick={(e) => toggle(e)}
                                    value="layanan"
                                    className={isNavbarMobile("layanan")}
                                >
                                    Layanan
                                </button>
                            </li>
                        )}
                        {isOpenLayanan && (
                            <ul className="text-grey-400 ">
                                <li>
                                    <NextLinkMobile
                                        href="layanan"
                                        title={title}
                                        name="Layanan"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="layanan/layanan-online"
                                        title={title}
                                        name="Layanan Online"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="layanan/layanan-kami"
                                        title={title}
                                        name="Layanan Kami"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="cara-pengajuan-layanan"
                                        title={title}
                                        name="Cara Pengajuan Layanan"
                                    />
                                </li>
                            </ul>
                        )}
                        {/* Informasi Publik */}
                        {!isOpenInformasi && (
                            <li tabIndex={"0"}>
                                <button
                                    onClick={(e) => toggle(e)}
                                    value="informasi"
                                    className={isNavbarMobile(
                                        "informasi-publik"
                                    )}
                                >
                                    Informasi Publik
                                </button>
                            </li>
                        )}
                        {isOpenInformasi && (
                            <>
                                <li>
                                    <NextLinkMobile
                                        href="informasi-publik"
                                        title={title}
                                        name="Informasi Publik"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="standar-layanan-publik"
                                        title={title}
                                        name="Standar Layanan Publik"
                                    />
                                </li>
                                <li tabIndex={"0"}>
                                    <button
                                        onClick={(e) => toggle(e)}
                                        value="produk-hukum"
                                        className={isNavbarMobile(
                                            "produk-hukum"
                                        )}
                                    >
                                        Prodik Hukum
                                    </button>
                                </li>
                                {/* produk hukum */}
                                {isOpenProdukHukum && (
                                    <div className="pl-3">
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum"
                                                title={title}
                                                name="Prodik Hukum"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/surat-edaran"
                                                title={"produk-hukum/" + title}
                                                name="Surat Edaran"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/undang-undang"
                                                title={"produk-hukum/" + title}
                                                name="Undang - Undang"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/peraturan-ristektikti"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Ristektikti"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/peraturan-presiden"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Presiden"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/peraturan-mentri"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Mentri"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/peraturan-pemerintah"
                                                title={"produk-hukum/" + title}
                                                name="Peraturan Pemerintah"
                                            />
                                        </li>
                                        <li>
                                            <NextLinkMobile
                                                href="produk-hukum/sk-dirjen"
                                                title={"produk-hukum/" + title}
                                                name="SK DIRJEN"
                                            />
                                        </li>
                                    </div>
                                )}
                                {/* end */}
                                <li>
                                    <NextLinkMobile
                                        href="ppid"
                                        title={title}
                                        name="PPID"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="prosedur-operasional-standar"
                                        title={title}
                                        name="Prosedur Operasional Stander"
                                    />
                                </li>{" "}
                                <li>
                                    <NextLinkMobile
                                        href="peta-proses-bisnis-lldikti-wilayah-iv"
                                        title={title}
                                        name="Peta Proses Bisnis LLDIKTI Wilayah IV"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="buku-panduan-pedoman"
                                        title={title}
                                        name="Buku Panduan / Pedoman"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="materi-kegiatan"
                                        title={title}
                                        name="Materi Kegiatan"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="buletin-lldikti-wilayah-iv"
                                        title={title}
                                        name="Buletin LLDIKTI Wilayah IV"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="buku-direktori-pts-lldikti-iv"
                                        title={title}
                                        name="Buku Direktori PTS LLDIKTI IV"
                                    />
                                </li>
                                <li>
                                    <a
                                        href={
                                            "https://pddikti.kemdikbud.go.id/publikasi"
                                        }
                                        className={
                                            "dark:text-white text-base-100"
                                        }
                                    >
                                        Buku Statistik Perguruan Tinggi
                                    </a>
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="kegiatan"
                                        title={title}
                                        name="Agenda Kegiatan"
                                    />
                                </li>
                                <li>
                                    <NextLinkMobile
                                        href="gallery"
                                        title={title}
                                        name="Galeri"
                                    />
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <div className="divider">OR</div>
                <div className=" w-full dark:text-white text-black p-[0px_30px]">
                    <div className="lg:hidden mb-3 flex justify-between items-center">
                        <span className="pr-3">Swith Theme :</span>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </Transition>
    );
};

const NextLinkMobile = ({ href, title, name }) => {
    const isNavbarMobile = (rout) => {
        return ` ${"/" + title === rout ? "text-yellow-500" : ""}`;
    };
    return (
        <Link href={`/${href}`} className={isNavbarMobile(`/${href}`)}>
            {name}
        </Link>
    );
};
