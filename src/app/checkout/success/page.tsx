"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

const CheckoutSuccessPage = () => {
  return (
    <>
      <Header />
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogContent className="text-center">
          <Image
            src="/illustration.svg"
            alt="Success"
            width={300}
            height={300}
            className="mx-auto"
          />
          <DialogTitle className="mt-4 text-2xl">Pedido efetuado!</DialogTitle>
          <DialogDescription className="font-medium">
            Seu pedido foi efetuado com sucesso. Você pode acompanhar o status
            na seção de “Meus Pedidos”.
          </DialogDescription>
          <DialogFooter>
            <Button className="rounded-full" size="lg">
              Ver meu pedido
            </Button>
            <Button
              className="rounded-full"
              size="lg"
              variant="outline"
              asChild
            >
              <Link href="/">Página inicial</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CheckoutSuccessPage;
