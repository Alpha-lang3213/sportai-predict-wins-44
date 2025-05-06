
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласиться с условиями",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password);
      toast({
        title: "Регистрация успешна",
        description: "Добро пожаловать в SportAI!",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Ошибка регистрации",
        description: "Не удалось создать аккаунт",
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
            <CardTitle className="text-3xl font-bold text-gradient">Регистрация</CardTitle>
            <p className="text-gray-400">Создайте аккаунт для доступа ко всем функциям</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-400">Имя</label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                />
              </div>
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
                <label htmlFor="password" className="text-sm text-gray-400">Пароль</label>
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
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="text-sm text-gray-400">Подтверждение пароля</label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={agreedToTerms}
                  onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                />
                <label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                  Я согласен с <Link to="/terms" className="text-sport-blue-medium hover:underline">условиями использования</Link>
                </label>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-sport-blue-medium hover:bg-sport-blue-light"
              >
                {isLoading ? "Регистрация..." : "Зарегистрироваться"}
              </Button>
              <div className="text-center text-sm text-gray-400">
                Уже есть аккаунт?{" "}
                <Link to="/login" className="text-sport-blue-medium hover:underline">
                  Войти
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

export default Register;
