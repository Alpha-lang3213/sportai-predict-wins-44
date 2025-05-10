
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const TelegramSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const handleTelegramRedirect = () => {
    window.open("https://t.me/sportaibot", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Drawer open={isOpen} onOpenChange={handleOpenChange}>
        <DrawerTrigger asChild>
          <Button
            size="icon"
            className={cn(
              "w-14 h-14 rounded-full bg-sport-blue-medium hover:bg-sport-blue-medium/90 text-white shadow-lg",
              "transition-all duration-300 ease-in-out"
            )}
          >
            <MessageCircle size={24} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="bg-sport-blue-dark text-white border-t border-sport-blue-medium">
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle className="text-xl font-bold text-white">
                Техническая поддержка SportAI
              </DrawerTitle>
              <DrawerDescription className="text-gray-300">
                Свяжитесь с нашим ботом в Telegram для быстрой поддержки
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 flex justify-center">
              <img
                src="/placeholder.svg"
                alt="Telegram Bot QR Code"
                className="w-48 h-48 rounded-lg bg-white p-2"
              />
            </div>
            <div className="text-center px-4 pb-2 text-gray-300">
              <p>Отсканируйте QR-код или нажмите на кнопку ниже, чтобы открыть чат с нашим ботом</p>
            </div>
            <DrawerFooter>
              <Button 
                onClick={handleTelegramRedirect}
                className="bg-[#0088cc] hover:bg-[#0077b5] text-white"
              >
                Открыть Telegram
              </Button>
              <DrawerClose asChild>
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:bg-sport-blue-medium/20">
                  Закрыть
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default TelegramSupport;
