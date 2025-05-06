
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gradient">Sport<span className="text-accent">AI</span></span>
          </Link>

          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Главная
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/predictions">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Прогнозы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/pricing">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Тарифы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>О продукте</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              SportAI Predictor
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Мощный ИИ для прогнозов на спортивные события с анализом множества факторов
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/how-it-works" title="Как это работает">
                        Узнайте как наш ИИ анализирует данные
                      </ListItem>
                      <ListItem href="/testimonials" title="Отзывы">
                        Отзывы успешных пользователей
                      </ListItem>
                      <ListItem href="/blog" title="Блог">
                        Наши статьи и советы
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Поддержка</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <ListItem href="/faq" title="FAQ">
                        Часто задаваемые вопросы
                      </ListItem>
                      <ListItem href="/contact" title="Связаться с нами">
                        Наша поддержка на связи 24/7
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="hover:bg-secondary">
            Войти
          </Button>
          <Button>Регистрация</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container p-6 space-y-6">
            <Link to="/" className="block py-2 text-lg" onClick={toggleMobileMenu}>
              Главная
            </Link>
            <Link to="/predictions" className="block py-2 text-lg" onClick={toggleMobileMenu}>
              Прогнозы
            </Link>
            <Link to="/pricing" className="block py-2 text-lg" onClick={toggleMobileMenu}>
              Тарифы
            </Link>
            <div className="block py-2 text-lg">О продукте</div>
            <div className="pl-4 space-y-3">
              <Link to="/how-it-works" className="block py-1" onClick={toggleMobileMenu}>
                Как это работает
              </Link>
              <Link to="/testimonials" className="block py-1" onClick={toggleMobileMenu}>
                Отзывы
              </Link>
              <Link to="/blog" className="block py-1" onClick={toggleMobileMenu}>
                Блог
              </Link>
            </div>
            <div className="block py-2 text-lg">Поддержка</div>
            <div className="pl-4 space-y-3">
              <Link to="/faq" className="block py-1" onClick={toggleMobileMenu}>
                FAQ
              </Link>
              <Link to="/contact" className="block py-1" onClick={toggleMobileMenu}>
                Связаться с нами
              </Link>
            </div>
            <div className="pt-4 flex flex-col gap-4">
              <Button variant="outline" onClick={toggleMobileMenu}>
                Войти
              </Button>
              <Button onClick={toggleMobileMenu}>
                Регистрация
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
