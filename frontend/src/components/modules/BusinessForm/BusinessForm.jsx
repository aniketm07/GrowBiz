"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Icons } from "@/components/icons";
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import React from "react";
import { ERROR_MESSAGE } from "@/lib/constants";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
    businessName: z
        .string({
            required_error: ERROR_MESSAGE.REQUIRED,
        })
        .min(1),
    businessCategory: z
        .string({
            required_error: ERROR_MESSAGE.REQUIRED,
        })
        .min(1),
    verificationDocuments: z
        .any()
        .refine((val) => !!val, ERROR_MESSAGE.REQUIRED),
});
const BusinessForm = ({ categories }) => {
    const [isLoading, setIsLoading] = React.useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = (data) => {
        setIsLoading(true);
        console.log({ data });
    };
    return (
        <div className="grid h-screen">
            <Card className="w-[500px] place-self-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <CardHeader className="space-y-1">
                            <CardTitle className="text-2xl">
                                Register your business
                            </CardTitle>
                            <CardDescription>
                                Please enter your business details
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="businessName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Business name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="business name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="businessCategory"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Category</FormLabel>
                                            <Select
                                                onValueChange={(e) => {
                                                    field.onChange(e);
                                                }}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent position="popper">
                                                    {categories &&
                                                        categories.map(
                                                            (category) => (
                                                                <SelectItem
                                                                    value={`${category.id}`}
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </SelectItem>
                                                            )
                                                        )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="verificationDocuments"
                                    render={({
                                        field: { onChange },
                                        ...field
                                    }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Verification documents
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    placeholder="Verification documents"
                                                    {...field}
                                                    onChange={(event) =>
                                                        onChange(
                                                            event.target
                                                                .files[0]
                                                        )
                                                    }
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button
                                className="w-full"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                Register
                            </Button>
                        </CardFooter>
                    </form>
                </Form>
            </Card>
        </div>
    );
};

export default BusinessForm;
