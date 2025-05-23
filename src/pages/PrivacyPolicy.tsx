
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-sport-blue-dark text-gray-300">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-white">Политика конфиденциальности</h1>
        <p className="mb-8">
          Последнее обновление: 01.05.2025
        </p>
        
        <div className="prose prose-invert max-w-none">
          <p>
            Настоящая Политика конфиденциальности определяет, каким образом SportAI собирает, использует, 
            хранит и раскрывает информацию, полученную от пользователей сайта sportai.ru и связанных с ним сервисов.
            Эта политика конфиденциальности относится к Сайту и всем продуктам и услугам, предлагаемым SportAI.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">1. Собираемая информация</h2>
          <p>
            Мы можем собирать личную идентификационную информацию от Пользователей различными способами, 
            включая, но не ограничиваясь, когда Пользователи посещают наш сайт, регистрируются на сайте, 
            оформляют подписку на сервис, а также в связи с другими действиями, услугами, функциями или 
            ресурсами, которые мы предоставляем на нашем Сайте.
          </p>
          <p>
            У Пользователей могут запросить, в соответствующих случаях, имя, адрес электронной почты, 
            номер телефона, данные кредитной карты. Пользователи могут посещать наш Сайт анонимно. 
            Мы собираем личную идентификационную информацию от Пользователей, только если они добровольно 
            предоставляют нам такую информацию. Пользователи всегда могут отказаться предоставлять личную 
            идентификационную информацию, за исключением случаев, когда это может помешать им участвовать в 
            определенных действиях, связанных с Сайтом.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">2. Использование собранной информации</h2>
          <p>SportAI может собирать и использовать личную информацию Пользователей для следующих целей:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Для улучшения обслуживания клиентов — информация помогает нам эффективнее реагировать на запросы клиентов и потребности в поддержке</li>
            <li>Для персонализации пользовательского опыта — мы можем использовать информацию в совокупности для понимания того, как наши Пользователи, как группа, используют услуги и ресурсы, предоставляемые на нашем Сайте</li>
            <li>Для улучшения нашего Сайта — мы можем использовать отзывы, которые вы предоставляете, чтобы улучшить наши продукты и услуги</li>
            <li>Для обработки платежей — мы можем использовать информацию, которую Пользователи предоставляют о себе при оформлении заказа, только для обеспечения обслуживания этого заказа</li>
            <li>Для отправки периодических электронных писем — мы можем использовать адрес электронной почты для отправки информации и обновлений, касающихся их заказа</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">3. Защита вашей информации</h2>
          <p>
            Мы принимаем соответствующие меры сбора, хранения и обработки данных и меры безопасности для защиты 
            от несанкционированного доступа, изменения, раскрытия или уничтожения вашей личной информации, имени 
            пользователя, пароля, информации о транзакциях и данных, хранящихся на нашем Сайте.
          </p>
          <p>
            Конфиденциальный и частный обмен данными между Сайтом и его Пользователями происходит по защищенному 
            SSL-соединению и шифруется и защищается цифровыми подписями.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">4. Обмен персональной информацией</h2>
          <p>
            Мы не продаем, не обмениваем и не сдаем в аренду личную идентификационную информацию Пользователей 
            третьим лицам. Мы можем обмениваться общей агрегированной демографической информацией, не связанной 
            с какой-либо личной идентификационной информацией о посетителях и пользователях, с нашими деловыми 
            партнерами, доверенными партнерами и рекламодателями для целей, указанных выше.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">5. Изменения в политике конфиденциальности</h2>
          <p>
            SportAI имеет право по своему усмотрению обновлять настоящую политику конфиденциальности в любое время. 
            Когда мы это делаем, мы размещаем уведомление на главной странице нашего Сайта и отправляем вам 
            электронное письмо. Мы рекомендуем Пользователям часто проверять эту страницу на наличие каких-либо 
            изменений, чтобы быть в курсе того, как мы помогаем защищать собираемую нами личную информацию.
          </p>
          <p>
            Вы признаете и соглашаетесь, что вы несете ответственность за периодический просмотр настоящей 
            Политики конфиденциальности и ознакомление с изменениями.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">6. Ваше согласие</h2>
          <p>
            Используя наш Сайт, вы соглашаетесь с нашей политикой конфиденциальности.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-white">7. Контакты</h2>
          <p>
            Если у вас есть какие-либо вопросы о настоящей Политике конфиденциальности, практике работы с этим 
            сайтом или ваших отношениях с этим сайтом, пожалуйста, свяжитесь с нами по адресу:
          </p>
          <p>Email: privacy@sportai.ru</p>
          <p>Телефон: +7 (800) 555-35-35</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
