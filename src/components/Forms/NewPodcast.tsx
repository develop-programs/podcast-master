"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@radix-ui/react-separator";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const formSchema = z.object({
  title: z.string().min(1, { message: "Please enter a valid title" }),
  description: z
    .string()
    .min(1, { message: "Please enter a valid description" }),
  category: z.string().min(1, { message: "Please enter a valid category" }),
  content: z.string().min(200, { message: "Please enter atleast 200 words" }),
});

export function NewPodcast() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
      content: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Podcast title</FormLabel>
              <FormControl>
                <Input
                  placeholder="shadcn"
                  {...field}
                  className="focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="focus-visible:ring-orange-500 focus-visible:border-orange-500">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Category 1</SelectItem>
                    <SelectItem value="2">Category 2</SelectItem>
                    <SelectItem value="3">Category 3</SelectItem>
                    <SelectItem value="4">Category 4</SelectItem>
                    <SelectItem value="5">Category 5</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Description"
                  {...field}
                  rows={8}
                  className="focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="py-4">
          <Separator className="bg-gray-800 h-1" />
        </div>
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Content"
                  {...field}
                  rows={10}
                  className="focus-visible:ring-orange-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-96 space-x-4 border py-3 rounded-lg bg-gray-700/20 flex justify-center items-center">
          <span>Convert Speach to text</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button type="button">Speach To Text</Button>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        </div>
        <div className="grid place-content-center bg-gray-800/10 py-12 border-2 border-dashed">
          <Label
            htmlFor="file"
            className="flex justify-center flex-col items-center gap-3"
          >
            <div className="size-10 rounded-full border-4 grid place-content-center">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <path
                  d="M7.16669 13.3333L10.5 10M10.5 10L13.8334 13.3333M10.5 10V17.5M17.1667 13.9524C18.1846 13.1117 18.8334 11.8399 18.8334 10.4167C18.8334 7.88536 16.7813 5.83333 14.25 5.83333C14.0679 5.83333 13.8976 5.73833 13.8051 5.58145C12.7184 3.73736 10.712 2.5 8.41669 2.5C4.96491 2.5 2.16669 5.29822 2.16669 8.75C2.16669 10.4718 2.86289 12.0309 3.98914 13.1613"
                  stroke="#71788B"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-center space-y-2">
              <div className="space-x-2">
                <span>Click to upload</span>
                <span>or drag and drop</span>
              </div>
              <div>
                <span>SVG, PNG, JPG or GIF (max. 1080x1080px)</span>
              </div>
            </div>
          </Label>
          <input type="file" name="" id="file" hidden />
        </div>
        <Button
          type="submit"
          variant="default"
          className="py-6 bg-orange-500 hover:bg-orange-500/90 font-bold text-white"
        >
          Submit & Publish Podcast
        </Button>
      </form>
    </Form>
  );
}
