
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
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
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/") && "bg-sport-blue-medium text-white"
                    )}>
                      Главная
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/predictions">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/predictions") && "bg-sport-blue-medium text-white"
                    )}>
                      Прогнозы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/pricing">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/pricing") && "bg-sport-blue-medium text-white"
                    )}>
                      Тарифы
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink className={cn(
                      navigationMenuTriggerStyle(),
                      isActive("/about") && "bg-sport-blue-medium text-white"
                    )}>
                      О нас
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isActive("/how-it-works") || isActive("/testimonials") || isActive("/blog") ? "bg-sport-blue-medium text-white" : ""}>О продукте</NavigationMenuTrigger>
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
                  <NavigationMenuTrigger className={isActive("/faq") || isActive("/contact") ? "bg-sport-blue-medium text-white" : ""}>
                    Поддержка
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute left-0 top-full">
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
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <Button variant="ghost" className="hover:bg-secondary flex items-center gap-2">
                  <User size={18} />
                  {user.name}
                </Button>
              </Link>
              <Button onClick={logout}>Выйти</Button>
            </div>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="hover:bg-secondary">
                  Войти
                </Button>
              </Link>
              <Link to="/register">
                <Button>Регистрация</Button>
              </Link>
            </>
          )}
        </div>
        
        {/* Mobile menu button - making sure it's always visible on mobile */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu - ensuring it appears correctly */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-y-auto">
          <nav className="container p-6 space-y-6">
            <Link to="/" className={cn("block py-2 text-lg", isActive("/") && "text-sport-blue-medium font-medium")} onClick={toggleMobileMenu}>
              Главная
            </Link>
            <Link to="/predictions" className={cn("block py-2 text-lg", isActive("/predictions") && "text-sport-blue-medium font-medium")} onClick={toggleMobileMenu}>
              Прогнозы
            </Link>
            <Link to="/pricing" className={cn("block py-2 text-lg", isActive("/pricing") && "text-sport-blue-medium font-medium")} onClick={toggleMobileMenu}>
              Тарифы
            </Link>
            <Link to="/about" className={cn("block py-2 text-lg", isActive("/about") && "text-sport-blue-medium font-medium")} onClick={toggleMobileMenu}>
              О нас
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
              {user ? (
                <>
                  <Link to="/profile" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full">
                      Личный кабинет
                    </Button>
                  </Link>
                  <Button onClick={() => {
                    logout();
                    toggleMobileMenu();
                  }}>
                    Выйти
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMobileMenu}>
                    <Button variant="outline" className="w-full">
                      Войти
                    </Button>
                  </Link>
                  <Link to="/register" onClick={toggleMobileMenu}>
                    <Button className="w-full">
                      Регистрация
                    </Button>
                  </Link>
                </>
              )}
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
