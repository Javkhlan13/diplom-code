import { Disclosure } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import Contactus from "./Contactus";
import { useAuth } from "@/lib/authContext";
import { Span } from "next/dist/trace";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Нүүр хуудас", href: "/", current: true },
  { name: "Мэдээ мэдээлэл", href: "#news-section", current: false },
  { name: "Үйл ажиллагаа", href: "#courses-section", current: false },
  { name: "Сэтгэгдэл", href: "#student-comments-section", current: false },
  { name: "Холбоо барих", href: "#footer", current: false },
  { name: "MN", href: "", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { userData, setUserData } = useAuth();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const data = sessionStorage.getItem("userData");
    if (token && data) {
      setUserData(JSON.parse(data));
    }
  }, []);
  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    setUserData(null);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="bg-lightpink navbar text-black">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              {/* LOGO */}

              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-30px w-30px lg:hidden"
                  src={"/assets/logo/Logo.png"}
                  alt="Courses-Logo"
                />
                <img
                  className="hidden h-48px w-48px lg:block"
                  src={"/assets/logo/Logo.png"}
                  alt="Courses-Logo"
                />
              </div>

              {/* LINKS */}

              <div className="hidden sm:ml-14 md:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? " text-[#417cbf]"
                          : "hover:text-[#417cbf]",
                        "px-3 py-4 text-15px font-medium space-links"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {!userData ? (
              <div className="flex items-center gap-8">
                <Signdialog />

                <Registerdialog />
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <span>{userData?.name}</span>
                <button className="bg-red p-3 rounded-md" onClick={logout}>
                  Гараад шаасан
                </button>
              </div>
            )}

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block md:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
