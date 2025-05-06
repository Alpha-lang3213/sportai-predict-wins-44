
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar, CreditCard, BadgeCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Payment = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Get the selected plan from location state or default to standard
  const selectedPlan = location.state?.plan || 'standard';
  const planLabel = selectedPlan === 'basic' ? 'Базовый' : 
                   selectedPlan === 'premium' ? 'Премиум' : 'Стандартный';
  const planPrice = selectedPlan === 'basic' ? '990 ₽' : 
                   selectedPlan === 'premium' ? '4 990 ₽' : '2 490 ₽';
  
  // Payment details form state
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!user) {
    navigate("/login", { state: { from: location.pathname } });
    return null;
  }
  
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Оплата успешно завершена!",
        description: `Вы успешно приобрели тарифный план "${planLabel}"`,
      });
      setIsProcessing(false);
      navigate("/profile", { state: { newSubscription: selectedPlan } });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-gradient">Оплата подписки</h1>
          <p className="text-gray-400 mb-8">Заполните данные для оплаты тарифного плана</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
                <CardHeader>
                  <CardTitle>Данные оплаты</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-6">
                    <RadioGroup 
                      defaultValue={paymentMethod} 
                      onValueChange={setPaymentMethod}
                      className="grid grid-cols-3 gap-4 mb-6"
                    >
                      <div>
                        <RadioGroupItem
                          value="card"
                          id="card"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="card"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-sport-blue-medium/30 bg-sport-blue p-4 hover:bg-sport-blue/80 hover:border-sport-blue-medium peer-data-[state=checked]:border-sport-blue-medium peer-data-[state=checked]:bg-sport-blue/50"
                        >
                          <CreditCard className="mb-2 h-6 w-6" />
                          <span>Карта</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="qiwi"
                          id="qiwi"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="qiwi"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-sport-blue-medium/30 bg-sport-blue p-4 hover:bg-sport-blue/80 hover:border-sport-blue-medium peer-data-[state=checked]:border-sport-blue-medium peer-data-[state=checked]:bg-sport-blue/50"
                        >
                          <div className="mb-2 h-6 w-6 flex items-center justify-center">Q</div>
                          <span>QIWI</span>
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="crypto"
                          id="crypto"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="crypto"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-sport-blue-medium/30 bg-sport-blue p-4 hover:bg-sport-blue/80 hover:border-sport-blue-medium peer-data-[state=checked]:border-sport-blue-medium peer-data-[state=checked]:bg-sport-blue/50"
                        >
                          <div className="mb-2 h-6 w-6 flex items-center justify-center">₿</div>
                          <span>Крипто</span>
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    {paymentMethod === 'card' && (
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Номер карты</Label>
                          <Input
                            id="cardNumber"
                            placeholder="4242 4242 4242 4242"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Имя на карте</Label>
                          <Input
                            id="cardName"
                            placeholder="IVAN IVANOV"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Срок действия</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              value={expiryDate}
                              onChange={(e) => setExpiryDate(e.target.value)}
                              className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input
                              id="cvc"
                              placeholder="123"
                              value={cvc}
                              onChange={(e) => setCvc(e.target.value)}
                              className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {paymentMethod === 'qiwi' && (
                      <div className="space-y-2">
                        <Label htmlFor="qiwiWallet">Номер QIWI кошелька</Label>
                        <Input
                          id="qiwiWallet"
                          placeholder="+7 9XX XXX XX XX"
                          className="bg-sport-blue border-sport-blue-medium/30 text-gray-200 placeholder:text-gray-500"
                        />
                      </div>
                    )}
                    
                    {paymentMethod === 'crypto' && (
                      <div className="space-y-4">
                        <div className="p-4 bg-sport-blue-dark rounded-md">
                          <p className="text-center text-sm">Отправьте точную сумму на адрес:</p>
                          <p className="text-center font-mono text-xs mt-2 bg-sport-blue p-2 rounded">
                            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-sport-accent hover:bg-sport-accent/90"
                    >
                      {isProcessing ? "Обработка платежа..." : `Оплатить ${planPrice}`}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
                <CardHeader>
                  <CardTitle>Детали заказа</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-sport-blue-medium/30">
                      <span>Тарифный план</span>
                      <span className="font-medium">{planLabel}</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-sport-blue-medium/30">
                      <span>Период</span>
                      <span className="font-medium">1 месяц</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Стоимость</span>
                      <span className="font-bold text-lg">{planPrice}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 bg-sport-blue-dark/50 p-2 rounded text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Бесплатный пробный период</span>
                      </div>
                      <span>7 дней</span>
                    </div>
                    
                    <div className="flex items-center text-sport-green text-sm">
                      <BadgeCheck className="h-4 w-4 mr-2" />
                      <span>Можно отменить в любое время</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
