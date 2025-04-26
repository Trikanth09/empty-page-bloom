
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="https://img.pikbest.com/png-images/20241019/doctor-logo-vector-icon-illustration_10974092.png!sw800"
              alt="Doctor Logo"
              className="h-10 w-10"
            />
            <h1 className="text-2xl font-bold text-white">DocFinder</h1>
          </div>
          
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-blue-100">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <a href="#" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 text-lg font-medium text-white">Find Doctors</div>
                        <p className="text-sm leading-tight text-blue-100">
                          Search and connect with the best doctors in your area
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-blue-100">About</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li className="row-span-3">
                      <a href="#" className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-700 p-6 no-underline outline-none focus:shadow-md">
                        <div className="mb-2 text-lg font-medium text-white">About Us</div>
                        <p className="text-sm leading-tight text-blue-100">
                          Learn more about our mission to make healthcare accessible
                        </p>
                      </a>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
