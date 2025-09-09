import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import SignInForm from "./sign-in-form";
import SignUpForm from "./sign-up-form";

const AuthenticationTabs = () => {
  return (
    <div className="flex w-full flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in" className="w-full">
          <SignInForm />
        </TabsContent>
        <TabsContent value="sign-up" className="w-full">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationTabs;
