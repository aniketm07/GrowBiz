"use client";

import * as React from "react";
import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import AddService from "./AddService";
import UpdateService from "./UpdateService";
import DeleteService from "./DeleteService";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { NO_IMAGE_PATH } from "@/lib/constants";
import Image from "next/image";

const ViewServices = ({
    authSession,
    predefinedServices,
    businessId,
    fetchedServices,
    subCategories,
}) => {
    const [services, setServices] = useState(fetchedServices);
    const [renderAddService, setRenderAddService] = useState(false);
    const [renderUpdateService, setRenderUpdateService] = useState(false);
    const [formDefaults, setFormDefaults] = useState(null);

    return (
        <div>
            {renderAddService && (
                <AddService
                    authSession={authSession}
                    fetchedServices={fetchedServices}
                    cancelButton={true}
                    services={services}
                    setServices={setServices}
                    setRenderAddService={setRenderAddService}
                    formDefaults={formDefaults}
                    setFormDefaults={setFormDefaults}
                    businessId={businessId}
                    subCategories={subCategories}
                />
            )}
            {renderUpdateService && (
                <UpdateService
                    authSession={authSession}
                    predefinedServices={predefinedServices}
                    cancelButton={true}
                    services={services}
                    setServices={setServices}
                    setRenderUpdateService={setRenderUpdateService}
                    formDefaults={formDefaults}
                    setFormDefaults={setFormDefaults}
                    businessId={businessId}
                />
            )}
            {services.length === 0 ? (
                <AddService
                    authSession={authSession}
                    fetchedServices={fetchedServices}
                    cancelButton={false}
                    services={services}
                    setServices={setServices}
                    setRenderAddService={setRenderAddService}
                    formDefaults={formDefaults}
                    setFormDefaults={setFormDefaults}
                    businessId={businessId}
                    subCategories={subCategories}
                />
            ) : (
                <></>
            )}
            {services.length != 0 &&
            !renderAddService &&
            !renderUpdateService ? (
                <div>
                    <div className="flex justify-between items-center">
                        <h2 className="text-4xl font-semibold tracking-tight p-8 pl-16">
                            Services
                        </h2>
                        <Button
                            type="button"
                            onClick={() => setRenderAddService(true)}
                            style={{ marginTop: "1%", marginRight: "1%" }}
                        >
                            Add new service
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-4 p-8 pl-16">
                        {services.map((service) => (
                            <Card key={service.serviceId} className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>{service.serviceName}</CardTitle>
                                    <CardDescription>
                                        service details
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid w-full items-center gap-4">
                                        {/* <img
                                            src={service.imageURL}
                                            className="w-auto h-[200px]"
                                        /> */}
                                        <AspectRatio
                                            ratio={1 / 1}
                                            className="overflow-hidden rounded mb-2"
                                        >
                                            <Image
                                                src={
                                                    service.imageURL
                                                        ? service.imageURL
                                                        : NO_IMAGE_PATH
                                                }
                                                className="object-cover max-w-[300px] max-h-[300px]"
                                                width={300}
                                                height={300}
                                            />
                                        </AspectRatio>
                                        <div className="flex flex-col space-y-1.5 ">
                                            <Label
                                                htmlFor={`service-${service.serviceId}`}
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Price per hour
                                            </Label>
                                            <span
                                                id={`service-${service.serviceId}`}
                                                style={{ fontSize: "0.875rem" }}
                                            >
                                                {service.price} CAD
                                            </span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor={`service-${service.serviceId}`}
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Time required
                                            </Label>
                                            <span
                                                id={`service-${service.serviceId}`}
                                                style={{ fontSize: "0.875rem" }}
                                            >
                                                {service.timeRequired} minutes
                                            </span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor={`service-${service.serviceId}`}
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Description
                                            </Label>
                                            <span
                                                id={`service-${service.serviceId}`}
                                                style={{ fontSize: "0.875rem" }}
                                            >
                                                {service.description}
                                            </span>
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label
                                                htmlFor={`service-${service.serviceId}`}
                                                style={{
                                                    fontSize: "1rem",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Reviews
                                            </Label>
                                            <span
                                                id={`service-${service.serviceId}`}
                                                style={{ fontSize: "0.875rem" }}
                                            >
                                                <Link
                                                    href={`/partner/business/${businessId}/service/${service.serviceId}/reviews`}
                                                    className="underline underline-offset-4 hover:text-primary"
                                                >
                                                    reviews
                                                </Link>
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-left">
                                    <div className="flex space-x-4">
                                        <Button
                                            type="button"
                                            onClick={() => {
                                                setRenderUpdateService(true);
                                                setFormDefaults(service);
                                            }}
                                        >
                                            Update
                                        </Button>
                                        <DeleteService
                                            authSession={authSession}
                                            service={service}
                                            services={services}
                                            setServices={setServices}
                                        />
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ViewServices;
