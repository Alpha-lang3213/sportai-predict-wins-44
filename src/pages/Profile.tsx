
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { pricingPlans } from "@/constants/pricing";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate("/login");
    return null;
  }

  const getSubscriptionBadge = () => {
    switch (user.subscription) {
      case 'basic':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Базовый</Badge>;
      case 'standard':
        return <Badge className="bg-sport-blue-medium hover:bg-sport-blue-light">Стандарт</Badge>;
      case 'premium':
        return <Badge className="bg-sport-accent hover:bg-sport-accent/90">Премиум</Badge>;
      default:
        return <Badge variant="outline">Нет подписки</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gradient">Личный кабинет</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 w-full sm:w-auto bg-sport-blue">
              <TabsTrigger 
                value="profile" 
                className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
              >
                Профиль
              </TabsTrigger>
              <TabsTrigger 
                value="subscription" 
                className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
              >
                Подписка
              </TabsTrigger>
              <TabsTrigger 
                value="favorites" 
                className="text-gray-300 data-[state=active]:bg-sport-blue-medium data-[state=active]:text-gray-200"
              >
                Избранное
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
                <CardHeader>
                  <CardTitle>Информация о пользователе</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Имя</div>
                        <div className="font-medium">{user.name}</div>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Email</div>
                        <div className="font-medium">{user.email}</div>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Пароль</div>
                        <div className="font-medium">••••••••</div>
                      </div>
                      <Button variant="outline" size="sm">Изменить</Button>
                    </div>
                    <Button 
                      onClick={logout} 
                      variant="destructive"
                      className="w-full mt-6"
                    >
                      Выйти из аккаунта
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscription">
              <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur mb-8">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Текущая подписка</CardTitle>
                    {getSubscriptionBadge()}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-sport-blue-medium/30 pb-4">
                      <div>
                        <div className="text-gray-400 text-sm">Тип подписки</div>
                        <div className="font-medium">
                          {user.subscription === 'none' ? 'Нет активной подписки' : 
                           user.subscription === 'basic' ? 'Базовый' :
                           user.subscription === 'standard' ? 'Стандартный' : 'Премиум'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-b border-sport-blue-medium/30 pb-4">
                      <div>
                        <div className="text-gray-400 text-sm">Статус</div>
                        <div className="font-medium text-sport-green">Активна</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-gray-400 text-sm">Срок действия</div>
                        <div className="font-medium">до 15.06.2023</div>
                      </div>
                    </div>
                    
                    {user.subscription === 'none' ? (
                      <Button 
                        onClick={() => navigate("/pricing")}
                        className="w-full mt-4 bg-sport-blue-medium hover:bg-sport-blue-light"
                      >
                        Выбрать тариф
                      </Button>
                    ) : (
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <Button variant="outline">Отменить подписку</Button>
                        <Button 
                          className="bg-sport-blue-medium hover:bg-sport-blue-light"
                          onClick={() => navigate("/pricing")}
                        >
                          Изменить тариф
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {user.subscription !== 'none' && (
                <div className="text-center text-gray-400 text-sm">
                  Отмена подписки вступит в силу по окончании текущего платежного периода
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="favorites">
              <Card className="bg-sport-blue/80 border-sport-blue-medium/30 text-white neo-blur">
                <CardHeader>
                  <CardTitle>Избранные матчи</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-10 text-gray-400">
                    <p className="mb-4">У вас пока нет избранных матчей</p>
                    <Button 
                      onClick={() => navigate("/predictions")}
                      className="bg-sport-blue-medium hover:bg-sport-blue-light"
                    >
                      Перейти к прогнозам
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
