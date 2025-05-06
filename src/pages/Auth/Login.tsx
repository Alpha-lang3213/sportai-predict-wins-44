
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect URL from state or default to home
  const redirectTo = location.state?.from || "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await login(email, password);
      toast({
        title: "Успешный вход",
        description: "Добро пожаловать в SportAI!",
      });
      navigate(redirectTo);
    } catch (error) {
      toast({
        title: "Ошибка входа",
        description: "Неверный email или пароль",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md bg-sport-blue/80 border-sport-blue-medium/30 text-gray-200 neo-blur">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold text-gradient">Вход</CardTitle>
            <p className="text-gray-400">Введите данные для входа в аккаунт</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="password" className="text-sm text-gray-400">Пароль</label>
                  <Link to="/forgot-password" className="text-xs text-sport-blue-medium hover:underline">
                    Забыли пароль?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sport-blue-medium hover:bg-sport-blue-light"
              >
                {isLoading ? "Вход..." : "Войти"}
              </Button>
              <div className="text-center text-sm text-gray-400">
                Нет аккаунта?{" "}
                <Link to="/register" className="text-sport-blue-medium hover:underline">
                  Зарегистрироваться
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
