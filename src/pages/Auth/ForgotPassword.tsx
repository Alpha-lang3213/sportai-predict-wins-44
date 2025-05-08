
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here would be the actual password reset logic with Supabase
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
      toast({
        title: "Инструкции отправлены",
        description: "Проверьте вашу электронную почту для сброса пароля",
      });
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке инструкций",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300 flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <Card className="w-full max-w-md bg-sport-blue/80 border-sport-blue-medium/30 text-gray-200 neo-blur">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-3xl font-bold text-gradient">Восстановление пароля</CardTitle>
            <p className="text-gray-400">Введите email для получения инструкций</p>
          </CardHeader>
          <CardContent>
            {!submitted ? (
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
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sport-blue-medium hover:bg-sport-blue-light"
                >
                  {isSubmitting ? "Отправка..." : "Отправить инструкции"}
                </Button>
                <div className="text-center text-sm text-gray-400">
                  <Link to="/login" className="text-sport-blue-medium hover:underline">
                    Вернуться к входу
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Проверьте вашу почту</h3>
                  <p className="text-gray-400 mb-6">Мы отправили инструкции по сбросу пароля на {email}</p>
                  <Link to="/login">
                    <Button className="bg-sport-blue-medium hover:bg-sport-blue-light">
                      Вернуться к входу
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
