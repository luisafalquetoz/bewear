"use client";

import {
  Home,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  ShoppingBasketIcon,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import AuthenticationTabs from "@/app/authentication/components/authentication-tabs";
import { categoryTable } from "@/db/schema";
import { authClient } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Cart from "./cart";

interface HeaderProps {
  categories: (typeof categoryTable.$inferSelect)[] | undefined;
}

const Header = ({ categories }: HeaderProps) => {
  const { data: session } = authClient.useSession();

  return (
    <header className="flex items-center justify-between p-5">
      <Link href="/">
        <Image src="/logo.svg" alt="BEWEAR" width={100} height={26.14} />
      </Link>
      <div className="flex items-center gap-2">
        <Cart />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent className="rounded-3xl">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="px-5">
              {session?.user ? (
                <>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={session?.user?.image as string | undefined}
                        />
                        <AvatarFallback>
                          {session?.user?.name?.split("")[0]?.[0]}
                          {session?.user?.name?.split("")[1]?.[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{session?.user?.name}</h3>
                        <span className="text-muted-foreground block text-xs">
                          {session?.user?.email}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <Separator />
                  </div>
                  <div className="flex flex-col space-y-4 px-4 text-xs font-semibold">
                    <Link href="/" className="flex items-center gap-2">
                      <Home /> Início
                    </Link>
                    <Link href="/my-orders" className="flex items-center gap-2">
                      <Truck />
                      Meus Pedidos
                    </Link>
                    <Link
                      href="/cart/identification"
                      className="flex items-center gap-2"
                    >
                      <ShoppingBasketIcon />
                      Carrinho
                    </Link>
                  </div>
                  <div className="py-8">
                    <Separator />
                  </div>
                  <div className="flex flex-col items-start">
                    {categories?.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        className="rounded-full bg-white text-xs font-semibold"
                      >
                        <Link href={`/category/${category.slug}`}>
                          {category.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                  <div className="py-8">
                    <Separator />
                  </div>
                  <Button
                    variant="outline"
                    className="text-muted-foreground text-xs"
                    onClick={() => authClient.signOut()}
                  >
                    <LogOutIcon />
                    Sair da conta
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">Olá. Faça seu login!</h2>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-30 rounded-full">
                          Login
                          <LogInIcon />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Login</DialogTitle>
                        </DialogHeader>
                        <AuthenticationTabs />
                      </DialogContent>
                    </Dialog>
                  </div>
                  <div className="py-8">
                    <Separator />
                  </div>
                  <div className="flex flex-col items-start">
                    {categories?.map((category) => (
                      <Button
                        key={category.id}
                        variant="ghost"
                        className="rounded-full bg-white text-xs font-semibold"
                      >
                        <Link href={`/category/${category.slug}`}>
                          {category.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
