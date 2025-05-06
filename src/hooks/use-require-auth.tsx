
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export const useRequireAuth = (redirectTo = "/login") => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: "Требуется авторизация",
        description: "Войдите в аккаунт для доступа к этой странице",
      });
      navigate(redirectTo, { state: { from: location.pathname } });
    }
  }, [user, isLoading, navigate, redirectTo, location.pathname, toast]);

  return { user, isLoading };
};

export const useRequireSubscription = (minimumSubscription: 'basic' | 'standard' | 'premium' = 'standard') => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !user) {
      toast({
        title: "Требуется авторизация",
        description: "Войдите в аккаунт для доступа к этой странице",
      });
      navigate("/login", { state: { from: location.pathname } });
      return;
    }

    if (!isLoading && user) {
      let hasAccess = false;
      
      switch (minimumSubscription) {
        case 'basic':
          hasAccess = ['basic', 'standard', 'premium'].includes(user.subscription);
          break;
        case 'standard':
          hasAccess = ['standard', 'premium'].includes(user.subscription);
          break;
        case 'premium':
          hasAccess = user.subscription === 'premium';
          break;
        default:
          hasAccess = false;
      }
      
      if (!hasAccess) {
        toast({
          title: "Доступ запрещен",
          description: `Для доступа необходим тариф ${minimumSubscription} или выше`,
        });
        navigate("/pricing");
      }
    }
  }, [user, isLoading, navigate, minimumSubscription, toast]);

  return { user, isLoading };
};
