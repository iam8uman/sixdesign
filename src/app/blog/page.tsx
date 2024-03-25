import BlogWrapper from "@/components/BlogWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RealEstate from "@/app/blog/RealEstate";

export default function Blog() {
  return (
    <BlogWrapper>
      <div className="max-w-lg mx-auto text-center mb-2">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl ">
          Read Latest Articles
        </h2>
      </div>
      <Tabs defaultValue="real" className="w-full bg-slate-100" >
        <TabsList className="grid w-full grid-cols-8 p-2">
          <TabsTrigger value="real" >Real Estate</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="esport">E-Sports</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>

        {/* realEstate */}
        <TabsContent value="real"> 
          <Card>
            <RealEstate />
          </Card>
        </TabsContent>

        {/* password */}
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </BlogWrapper>
  );
}
