import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/modal";
import Image from "next/image";
import React from "react";

export default function OrderModal({ isOpen, onOpen, onOpenChange }: any) {
  return (
    <>
      <Button
        className="mt-4 inline-flex w-full rounded-full items-center justify-center   bg-orange-600 py-2.5 px-4  font-semibold tracking-wide text-white  outline-none ring-offset-2 transition    sm:text-lg"
        onPress={onOpen}
      >
        Place Order
      </Button>
      <Modal
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1" />
              <ModalBody>
                <div className="flex flex-col justify-center items-center">
                  {" "}
                  <Image
                    alt="img"
                    className="text-center"
                    height={50}
                    src="/suc.png"
                    width={50}
                  />
                  <p className="text-2xl font-semibold">Order Successfully</p>
                </div>
                <Divider className="my-4" />
                <p className=" text-center">
                  If you want to tracking your order please install our app from
                  Play store or App store
                </p>
                <div className="flex justify-center">
                  <Image
                    alt="img"
                    className="text-center "
                    height={100}
                    src="/scan.png"
                    width={200}
                  />
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
