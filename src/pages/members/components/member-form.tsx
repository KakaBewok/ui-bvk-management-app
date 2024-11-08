"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/Heading";
import { Input } from "@/components/ui/input";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
} from "@/config/upload-image-config";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import Member from "@/types/Member";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createMember } from "@/api/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must contain at least 3 character(s)" }),
  position: z
    .string()
    .min(3, { message: "Position must contain at least 3 character(s)" }),
  picture: z
    .instanceof(File)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), {
      message: "Picture must be jpg, jpeg, png or webp formats",
    })
    .refine((file) => file.size <= MAX_FILE_SIZE * 1024, {
      message: `Picture is more than ${MAX_FILE_SIZE}KB`,
    }),
  superior: z.string().optional(),
});

export type MemberFormValues = z.infer<typeof formSchema>;

export const MemberForm = ({ members }: { members: Member[] }) => {
  const navigate = useNavigate();
  const [pictureFile, setPictureFile] = useState<File | undefined>();
  const pictureInputRef = useRef<HTMLInputElement | null>(null);
  const { loading, setLoading } = useGlobalContext();

  const title = "Create member";
  const description = "Add a new member";
  const toastMessage = "Member created.";
  const action = "Create";

  const form = useForm<MemberFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      position: "",
      picture: undefined,
      superior: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setPictureFile(file);
      form.setValue("picture", file);
    }
  };

  const removePhotoFile = () => {
    if (pictureInputRef.current) {
      setPictureFile(undefined);
      pictureInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: MemberFormValues) => {
    setLoading(true);

    const clearForm = () => {
      form.reset();
      setPictureFile(undefined);
      if (pictureInputRef.current) {
        pictureInputRef.current.value = "";
      }
    };

    try {
      await createMember(data);
      clearForm();
      toast.success(toastMessage, {
        position: "top-center",
      });
      navigate("/dashboard/members");
    } catch (error) {
      console.error("Failed to create member:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        <Button
          variant="outline"
          onClick={() => window.history.back()}
          className="dark:bg-slate-200 dark:text-slate-900"
        >
          Back
        </Button>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-8 space-y-8 rounded-md bg-slate-50 dark:bg-gradient-to-tr md:dark:bg-gradient-to-br dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
        >
          <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    className={
                      fieldState.error ? "text-red-500" : "dark:text-gray-300"
                    }
                  >
                    Name <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:bg-slate-700"
                      disabled={loading}
                      placeholder="Steve Jobs"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />

            {/* position */}
            <FormField
              control={form.control}
              name="position"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    className={
                      fieldState.error ? "text-red-500" : "dark:text-gray-300"
                    }
                  >
                    Position
                  </FormLabel>
                  <FormControl>
                    <Select
                      disabled={loading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl className="dark:bg-slate-700">
                        <SelectTrigger className="w-full">
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="Select a position"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Chief Executive Officer">
                          Chief Executive Officer
                        </SelectItem>
                        <SelectItem value="Chief Technology Officer">
                          Chief Technology Officer
                        </SelectItem>
                        <SelectItem value="Chief Operating Officer">
                          Chief Operating Officer
                        </SelectItem>

                        <SelectItem value="Fullstack Developer">
                          Fullstack Developer
                        </SelectItem>
                        <SelectItem value="Mobile Developer">
                          Mobile Developer
                        </SelectItem>
                        <SelectItem value="DevOps Engineer">
                          DevOps Engineer
                        </SelectItem>

                        <SelectItem value="Project Manager">
                          Project Manager
                        </SelectItem>
                        <SelectItem value="Frontend Developer">
                          Frontend Developer
                        </SelectItem>
                        <SelectItem value="Backend Developer">
                          Backend Developer
                        </SelectItem>

                        <SelectItem value="Technical Lead">
                          Technical Lead
                        </SelectItem>
                        <SelectItem value="Quality Assurance Engineer">
                          Quality Assurance Engineer
                        </SelectItem>
                        <SelectItem value="Automation Tester">
                          Automation Tester
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />

            {/* superior */}
            <FormField
              control={form.control}
              name="superior"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel
                    className={
                      fieldState.error ? "text-red-500" : "dark:text-gray-300"
                    }
                  >
                    Superior
                  </FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={(value) => {
                      if (value === "-") {
                        field.onChange();
                      } else {
                        field.onChange(value);
                      }
                    }}
                    value={field.value}
                    defaultValue={field.value?.toString()}
                  >
                    <FormControl className="dark:bg-slate-700">
                      <SelectTrigger className="w-full">
                        <SelectValue
                          defaultValue={field.value?.toString()}
                          placeholder={"Select a superior"}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"-"}>
                        <span className="text-sm text-gray-500">
                          No superior
                        </span>
                      </SelectItem>
                      {members.map((member: Member) => (
                        <SelectItem
                          key={member.id.toString()}
                          value={member.id.toString()}
                        >
                          {member.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="dark:text-red-500" />
                </FormItem>
              )}
            />

            {/* picture */}
            <div className="flex flex-col gap-8">
              <FormField
                control={form.control}
                name="picture"
                render={({ fieldState }) => (
                  <FormItem>
                    <FormLabel
                      className={
                        fieldState.error ? "text-red-500" : "dark:text-gray-300"
                      }
                    >
                      Profile picture <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="w-full dark:bg-slate-700"
                        ref={pictureInputRef}
                        type="file"
                        accept="image/jpeg, image/png, image/jpg, image/webp"
                        onChange={(e) => handleFileChange(e)}
                        required
                      />
                    </FormControl>
                    <FormDescription className="text-xs">
                      Max. {MAX_FILE_SIZE}
                      KB (jpg, jpeg, png, webp only).
                    </FormDescription>
                    <FormMessage className="dark:text-red-500" />
                  </FormItem>
                )}
              />

              {/* Preview image */}
              {pictureFile && (
                <div className="relative overflow-hidden border rounded-md shadow-md dark:border-gray-200 border-slate-300 w-52 h-52">
                  <img
                    src={URL.createObjectURL(pictureFile)}
                    alt="Profile picture uploaded"
                    className="object-cover w-full h-full"
                  />
                  <button
                    className="absolute flex items-center justify-center w-6 h-6 p-2 text-white bg-red-500 rounded-full top-2 right-2"
                    type="button"
                    onClick={removePhotoFile}
                  >
                    <span className="text-xs leading-none">✕</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <Button disabled={loading} className="w-full lg:w-1/2" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
